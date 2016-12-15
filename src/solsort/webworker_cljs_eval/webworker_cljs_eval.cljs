(ns solsort.webworker-cljs-eval.webworker-cljs-eval
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop alt!]]
   [reagent.ratom :as ratom :refer  [reaction]])
  (:require
   [cljs.reader]
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

(defonce workers (atom {}))
(defn new-worker []
  (let [worker (js/Worker. "worker.js")
        id (random-uuid)]
    (.postMessage worker (str "ID=" (js/JSON.stringify (str id))))
    (.postMessage worker "console.log('new worker:', ID)")
    (swap! workers assoc id worker)
    (db! [:workers] (conj (db [:workers] []) {:id id}))
    ))

(new-worker)
(random-uuid)
(when-not (db [:code])
  (db! [:code] "(ns hello)
     (js/console.log \"here\")
     (js/console.log \"here2\") "))

(defn compile []
  (db! [:compiled-code] (db [:code]))
  )

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
                  :background :red
                  :width "50%"
                  :right 0
                  }}
    [:button {:on-click compile} "compile"]
    "compiled-code:"
    [:pre (db [:compiled-code])]
    ]])
(render [app])
