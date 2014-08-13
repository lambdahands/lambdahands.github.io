(ns plotter.example
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as a :refer [chan <! >! put! take!]]
   [cognitect.transit :as t])
  (:use [plotter.core :only [make-plotter => realize]]))

(defn log [& args]
  (apply #(.log js/console %) args))

(defn plog [& args]
  (log (map clj->js args)))

;; Generate RGB noise
(defn rgb-str [a b c]
  (let [[r g b] (map #(mod % 256) [a b c])]
    (str "rgb("r","g","b")")))

(defn rand-rgb-int []
  (take 1000 (repeatedly #(rand-int 255))))

(def p (make-plotter js/d3))

(defn props [c]
  [[:select "#content"]
   [:selectAll]
   [:data (clj->js (rand-rgb-int))]
   [:enter]
   [:append "div"]
   [:attr ["class" "bar"]]
   [:style ["background" c]]])

#_(doseq [f [(fn [d] (rgb-str d 0 0))
             (fn [d] (rgb-str 0 d 0))
             (fn [d] (rgb-str 0 0 d))]]
    (=> p (props f)))

(def window (make-plotter js/window))

(defn json->ch [plotter path]
  (let [c (chan)
        r (t/reader :json)
        f (fn [d] (put! c (t/read r d)))]
    ((:text plotter) [path f])
    c))

(defn json->data? [p ch]
  (fn [v]
    (go
     (if (= :json (first v))
       (let [j (json->ch p (second v))]
         (>! ch [:data (clj->js (<! j))]))
       (>! ch v)))
    ch))

(defn link- [grph coll]
  (let [in   (chan)
        link (json->data? grph in)
        out  (chan)]
    (go
     (loop [c coll, res []]
       (if (seq c)
         (let [r (<! (link (first c)))]
           (recur (rest c) (conj res r)))
         (>! out res))))
    out))

(defn link! [grph & colls]
  (go
   (doseq [c colls]
     (=> grph (<! (link- grph c))))))

(defn stroke-color-> [color]
 (fn []
   (this-as c
    ((:style ((:select p) c))
     (clj->js {:stroke color})))))

(defn native []
 (-> js/d3
  (.select "#content")
  (.append "svg")
  (.attr "height" (realize (:innerHeight window)))
  (.attr "width" (realize (:innerWidth window)))
  (.selectAll "g")
  (.data (clj->js (range 1000)))
  .enter
  (.append "circle")
  (.attr "class" "bar")
  (.attr "cx" (/ (realize (:innerWidth window)) 2))
  (.attr "cy" (/ (realize (:innerHeight window)) 2))
  (.attr "r" (fn [d] d))
  (.style (clj->js {:stroke "#ccc" :fill "none"}))
  (.on "mouseover" (stroke-color-> "red"))
  (.on "mouseout" (stroke-color-> "#ccc"))))

(defn stroke-color-> [color]
 (fn []
   (this-as c
    ((:style ((:select p) c))
     (clj->js {:stroke color})))))

(def l
  [[:select "#content"]
   [:append "svg"]
   [:attr ["height" (realize (:innerHeight window))]]
   [:attr ["width"  (realize (:innerWidth window))]]
   [:selectAll "g"]
   (if false
    [:json "./test.json"]
    [:data (clj->js (range 1000))])
   [:enter]
   [:append "circle"]
   [:attr ["class" "bar"]]
   [:attr ["cx" (/ (realize (:innerWidth window)) 2)]]
   [:attr ["cy" (/ (realize (:innerHeight window)) 2)]]
   [:attr ["r" (fn [d] d)]]
   [:style (clj->js {:stroke "#ccc" :fill "none"})]
   [:on ["mouseover" (stroke-color-> "red")]]
   [:on ["mouseout" (stroke-color-> "#ccc")]]])

(if (= 1 (rand-int 2))
  (do (log "native") (native))
  (do (log "cljs"    (link! p l))))
