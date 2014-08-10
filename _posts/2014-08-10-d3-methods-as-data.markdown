---
layout: post
title:  "d3 Methods as Data in ClojureScript"
date:   2014-08-10 14:30:00
categories: clojure vizualization clojurescript
---

In the debut of my blog, I'd like to highlight the methods I've been learning through studying functional program design patterns. This post specifically shows the influence of Clojure's "it's all data" methodology while also giving some insight into the power of the language in the browser.

I've had the pleasure of working with the visualization library [d3.js][d3] this month and the last for work and personal projects alike. While some libraries exist to use d3 in ClojureScript, such as [c2][c2] and [strokes][strokes], I thought it would be interesting to try my own implementation.

#### Starting out

d3 uses method chaining to output its results. For example, we can select an element and input a dataset while specifying which child elements to use and their properties.

{% highlight javascript %}
// Trivial input of an array.
var renderer = d3.select("#content")
  .selectAll("div").data([1, 2, 3])
  .enter()
  .append("p")
  .attr("text", function (d) { return d; });
{% endhighlight %}

Here's an example of using ClojureScript to do the above:

{% highlight clojure %}
(.attr (.append (.enter (.data (.selectAll (.select js/d3 "#content") "div") (clj->js [1 2 3]))) "p") "text" (fn [d] d))
{% endhighlight %}

Of course, there's an easier way:

{% highlight clojure %}
(-> js/d3
  (.select "#content")
  (.selectAll "div")
  (.data (clj->js [1 2 3])
  .enter
  (.append "p")
  (.attr "text" (fn [d] d))))
{% endhighlight %}

While this method works, it doesn't do much to take advantage of Clojure's powerful tools to transform data. One of the perks of chaining methods is the ability to apply them all at once with a single return value - the drawback being, however, the inability to revisit the operation as a whole, make comparisons, or even add or remove operations at will.

As an exercise, I wrote a small wrapper around the interopability to input a persistent data structure and ouput a chaining object. The first step was defining some biolerplate functions. The `chain` inputs a JavaScript object and sets up field access by keywords.

{% highlight clojure %}
(defn chain [e]
  (fn
   ([k] (aget e (name k)))
   ([k d]
    (.bind (aget d (name k)) d))))
{% endhighlight %}

So a lot like how we can do this in JavaScript,

{% highlight javascript %}
d3["select"]("#content")
{% endhighlight %}

we can now use keywords to do so in ClojureScript:
{% highlight clojure %}
(def d3-chain (chain js/d3))

((d3-chain :select) "#content")
{% endhighlight %}

This does have a bit of a kink to it:
{% highlight clojure %}
((d3-chain :selectAll ((d3-chain :select) "#content")) "div")
{% endhighlight %}

While a programmer wouldn't be fond of writing this, it does have a subtle property, namely that at any point in time we can pass in different object with the same function protocols as d3.js.

#### Extending

An invaluable lesson I've learned while using Clojure is the effectiveness of extensibility. In order to abstract our chaining, there's a wonderful set of tools that give us the ability to do so elegantly.

{% highlight clojure %}
(defprotocol IRealize
  (realize [this]))

(deftype Grapher [obj res]
  IRealize
  (realize [this] res))
{% endhighlight %}

By creating a new type, we can be specific about how we implement our abstraction. The `res` variable will simply be the *result* of our method chain.

We can further extend our type, even into the language's own protocols. I like the way keys in Clojure are functions themselves when called. We'll use this protocol, called `ILookup` to extend the Grapher type.

{% highlight clojure %}
(defprotocol IRealize
  (realize [this]))

(deftype Grapher [obj res]
  IRealize
  (realize [this] res)
  ILookup
  (-lookup [this n]
    (-lookup this n nil))
  (-lookup [this n not-found]
    (if (nil? res)
      (let [o (chain obj)]
        (Grapher. o (o n)))
      (Grapher. obj (obj n res)))))
{% endhighlight %}

We're now able to access our d3 functions as keywords.

{% highlight clojure %}
(:select (Grapher. js/d3 nil))
;; => <#[object Object]>
(realize (:select (Grapher. js/d3 nil)))
;; => <#function ...>
{% endhighlight %}

As you can see, the return object is another Grapher, and we can realize its results. It would be more convenient to call these functions directly after finding them.

{% highlight clojure %}
(defprotocol IRealize
  (realize [this]))

(deftype Grapher [obj res]
  IRealize
  (realize [this] res)
  IFn
  (invoke [this] (Grapher. obj (res)))
  (invoke [this n]
    (if (nil? res) nil
      (let [m (if (vector? n) (apply res n) (res n))]
        (Grapher. obj m))))
  ILookup
  (-lookup [this n]
    (-lookup this n nil))
  (-lookup [this n not-found]
    (if (nil? res)
      (let [o (chain obj)]
        (Grapher. o (o n)))
      (Grapher. obj (obj n res)))))
{% endhighlight %}

#### Reducing

We're almost in business. We can now find and call our functions with relative ease, but we're stuck writing `conj`-like syntax.

{% highlight clojure %}
((:selectAll ((:select (Grapher. js/d3)) "#content")) "div")
{% endhighlight %}

It still looks a lot like the verbose example above, but there's a key difference. Since we brought up `conj`, let's take create a function that inputs a vector and a grapher and outputs a Grapher.

{% highlight clojure %}
(defn plot [plotter [k vs]]
  (if (nil? vs)
    ((k plotter))
    ((k plotter) vs)))
{% endhighlight %}

Now we can do something closer to this:

{% highlight clojure %}
(def andre-d3000 (Grapher. js/d3 nil))
(plot andre-d3000 [:select "#content"])
;; => <#[object Object]>
{% endhighlight %}

We've translated our instructions to Clojure vectors. Wait, if that's the case, why don't we take some hints from `conj`?

{% highlight clojure %}
(reduce conj [1 2 3] [4 5 6])
;; => [1 2 3 4 5 6]

(defn plot! [plotter props]
  (reduce plot plotter props))

(let [props [[:select "#content"]
             [:selectAll "p"]
             [:data (clj->js [1 2 3])]
             [:enter]
             [:append "p"]
             [:attr [:class (fn [d] d)]]]]
  (plot! andre-d3000 props))
;; => <#[object Object]>
{% endhighlight %}

Now we're talking. Our instruction set is merely a list of lists, a lot like the language it was written in. We're now free to make comparisons, add or remove methods, or even write higher functions that create the instruction set for us based on our goals.

#### Conclusion & Implications

There are implications to the methods described above. One of the big disadvantages is the performance loss in `selects`. Even small benchmarks showed disappointing results:

{% highlight clojure %}
(simple-benchmark []
  (-> js/d3 (.select "#content") (.selectAll "p")) 100)
;; => 100 runs, 15 msecs
(simple-benchmark []
  (plot! andre-d3000 [[:select "#content"] [:selectAll "p"]]) 100)
;; => 1000 runs, 54 msecs
{% endhighlight %}

This is a rare use case of d3, however. Selecting elements is trivial compared to an operation such as the one below:

{% highlight clojure %}
;; Generate RGB noise
(defn rgb-str [a b c]
  (let [[r g b] (map #(mod % 256) [a b c])]
    (str "rgb("r","g","b")")))

(defn props [c]
  [[:select "#content"]
   [:selectAll]
   [:data [(clj->js (take 50 (repeatedly #(rand-int 255)))) (fn [d] d)]]
   [:enter]
   [:append "div"]
   [:attr ["class" "bar"]]
   [:style ["background" c]]])

(simple-benchmark
  []
  (-> js/d3
    (.select "#content")
    .selectAll
    (.data (clj->js (take 50 (repeatedly #(rand-int 255)))) (fn [d] d))
    .enter
    (.append "div")
    (.attr "class" "bar")
    (.style "background" (fn [d] (rgb-str d 0 0)))) 1000)
;; => 1000 runs, 2381 msecs 

(simple-benchmark [] (plot! andre-d3000 (props (fn [d] (rgb-str d 0 0)))) 1000)
;; => 1000 runs, 2447 msecs
{% endhighlight %}

Not bad. The ClojureScript implementation is a tad behind, but it seems to keep up with large data sets. After you `:enter` into an element-- which in short "binds" data to nodes-- the performance normalizes.

Creating the methods above was a great way to wrap my head around chains. While I'm certain there are more efficient ways to achieve these results, I was impressed by how easy it was to implement Clojure's core protocols to extend my own types right in the browser.

You can check out the [code on Github][code]. I plan on extending this implementation further to reflect other work such as [c2][c2]'s ability to declaritvely create HTML blocks. Another post will certainly be in order.

[d3]: https://d3js.org
[c2]: https://github.com/lynaghk/c2
[strokes]: https://github.com/dribnet/strokes
[code]: https://github.com/lambdahands/plotter
