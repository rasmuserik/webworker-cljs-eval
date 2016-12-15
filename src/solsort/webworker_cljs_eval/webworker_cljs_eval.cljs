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
    [<ajax <seq<! js-seq load-style! put!close!
     parse-json-or-nil log page-ready render dom->clj]]
   [reagent.core :as reagent :refer []]
   [clojure.string :as string :refer [replace split blank?]]
   [cljs.core.async :refer [>! <! chan put! take! timeout close! pipe]]))

(defn message-handler [message]
  (case (aget message "type")
    "pong" (db! [:workers (aget message "src") :pong] (js/Date.now))))
(defonce workers (atom {}))
(defn new-worker []
  (let [worker (js/Worker. (js/URL.createObjectURL (js/Blob. #js ["onmessage=function(e){eval(e.data)}"], #js {:type "application/javascript"})))
        id (str (random-uuid))]
    (.postMessage worker (str "ID=" (js/JSON.stringify id)))
    (.postMessage worker "console.log('new worker:', ID)")
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
(new-worker)
(random-uuid)
(when-not (db [:code])
  (db! [:code] "(ns hello)
     (js/console.log \"here\")
     (js/console.log \"here2\") "))

(defonce compiler-state (cljs.js/empty-state))
(defn <compile []
  (let [c (chan)]
    (cljs.js/compile-str
     compiler-state (db [:code])
     (fn [result]
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
    [:button {:on-click <compile} "compile"]
    [:button {:on-click new-worker} "new worker"]
    [worker-list]
    [:h3 "compiled-code"]
    [:pre (db [:compiled-code])]]])
(render [app])
