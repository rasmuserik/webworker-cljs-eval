(ns figwheel.connect (:require [solsort.webworker-cljs-eval.webworker-cljs-eval] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://[[client-hostname]]:3449/figwheel-ws"})

