(ns solsort.webworker-cljs-eval.webworker-cljs-eval
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop alt!]]
   [reagent.ratom :as ratom :refer  [reaction]])
  (:require
   [cljs.reader]
   [cljs.js :refer []]
   [solsort.toolbox.setup]
   [solsort.toolbox.appdb :refer [db db! db-async!]]
   [solsort.toolbox.ui :refer [input select]]
   [solsort.util
    :refer
    [<ajax <seq<! js-seq load-style! put!close! <p
     parse-json-or-nil log page-ready render dom->clj]]
;   [replumb.core :as replumb]
   [reagent.core :as reagent :refer []]
   [clojure.string :as string :refer [replace split blank?]]
   [cljs.core.async :refer [>! <! chan put! take! timeout close! pipe]]))

(defn message-handler [message]
  (case (aget message "type")
    "pong" (db! [:workers (aget message "src") :pong] (js/Date.now))))
(defonce workers (atom {}))
(defn new-worker []
  (let [worker (js/Worker.
                (js/URL.createObjectURL
                 (js/Blob. #js ["onmessage=function(e){eval(e.data)}"]
                           #js {:type "application/javascript"})))
        id (str (random-uuid))]
    (.postMessage worker (str "ID=" (js/JSON.stringify id)))
    (.postMessage worker "console.log('new worker:', ID)")
    (.postMessage worker "
CLOSURE_IMPORT_SCRIPT = function(name) {
   importScripts('http://localhost:3449/out/goog/' + name);
};
importScripts('http://localhost:3449/out/goog/base.js');
importScripts('http://localhost:3449/out/cljs_deps.js');
")
    (aset worker "onmessage"
          (fn [e]
            (let [o (aget e "data")]
              (aset o "src" id)
              (message-handler o))))
    (swap! workers assoc id worker)
    (db! [:workers id] {:id id :running true})))

(defn kill-worker [id]
  (.terminate (get @workers id))
  (swap! workers dissoc id)
  (db! [:workers id]))
(when-not (db [:code])
  (db! [:code] "(ns hello
;(:require [cljs.reader])
)
     (js/console.log \"here\")
     (js/console.log \"here2\") "))

;; apparently currently failing due to no caching, ie. sees redefinition in protocols.cljs, second time it compiles
(set! cljs.js/*load-fn*
      (fn [m cb]
        (log 'load-fn m)
        (go
          (let [<load-ext #(<p (js/fetch (str "http://localhost:3449/out/" (:path m) %)))
                code (<! (<load-ext ".cljs"))
                code (if (= 200 (aget code "status"))
                       code
                       (<! (<load-ext ".cljc")))
                lang (if (= 200 (aget code "status")) :clj :js)
                code (if (= 200 (aget code "status"))
                       code
                       (<! (<load-ext ".js")))
                code (<! (<p (.text code)))
                ]
            (log 'load-fn-result {
                           :type lang
                           :code code})
           (cb {:lang lang
                :source code
                })))
        ))

;(replumb/read-eval-call)
(defonce compiler-state (cljs.js/empty-state))
(defn <compile []
  (let [c (chan)]
         (cljs.js/compile-str
      compiler-state (db [:code])
      (fn [result]
        (prn result)
        ;(log 'compile2 result @compiler-state)
        (db! [:compiled-code] (str (:value result)))
        (close! c)))
    c))

(defn ping [id]
  (db! [:workers id :ping] (js/Date.now))
  (.postMessage (get @workers id) "postMessage({type: 'pong'})"))

(defn pinger []
  (doall (for [[id worker] (db [:workers])]
           (ping id))))
(defonce start-ping
  (do (js/setInterval #(pinger) 2000)))

(defn worker-list []
  (into [:div [:h3 "worker-list"]]
        (for [[id worker] (filter #(:running (second %)) (db [:workers]))]
          [:p
           id
           [:button {:on-click #(kill-worker id)} "Kill"]
           [:button
            {:on-click
             #(go
                (<! (<compile))
                (.postMessage
                 (get @workers id)
                 (db [:compiled-code])))} "run code in worker"]
           [:div "Ping:" (- (:pong worker) (:ping worker))]])))
(defn app []
  [:div  [input {:db [:code]
                 :style {:text-align :left
                         :display :inline-block
                         :width "50%"
                         :position :fixed
                         :height js/window.innerHeight}
                 :type :textarea}]
   [:div {:style {:display :inline-block
                  :position :absolute
                  :width "50%"
                  :right 0}}
    [:div "This is an experiment with clojurescript compilation and running code in webworkers."]
    [:button {:on-click <compile} "compile"]
    [:button {:on-click new-worker} "new worker"]
    [worker-list]
    [:h3 "compiled-code"]
    [:pre (db [:compiled-code])]]])
(render [app])
