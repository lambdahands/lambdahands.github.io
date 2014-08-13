// Compiled by ClojureScript 0.0-2311
goog.provide('plotter.core');
goog.require('cljs.core');
plotter.core.chain = (function chain(e){return (function() {
var G__4972 = null;
var G__4972__1 = (function (k){return (e[cljs.core.name.call(null,k)]);
});
var G__4972__2 = (function (k,d){return (d[cljs.core.name.call(null,k)]).bind(d);
});
G__4972 = function(k,d){
switch(arguments.length){
case 1:
return G__4972__1.call(this,k);
case 2:
return G__4972__2.call(this,k,d);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__4972.cljs$core$IFn$_invoke$arity$1 = G__4972__1;
G__4972.cljs$core$IFn$_invoke$arity$2 = G__4972__2;
return G__4972;
})()
});
plotter.core.IRealize = (function (){var obj4974 = {};return obj4974;
})();
plotter.core.realize = (function realize(this$){if((function (){var and__3541__auto__ = this$;if(and__3541__auto__)
{return this$.plotter$core$IRealize$realize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return this$.plotter$core$IRealize$realize$arity$1(this$);
} else
{var x__4180__auto__ = (((this$ == null))?null:this$);return (function (){var or__3553__auto__ = (plotter.core.realize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (plotter.core.realize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRealize.realize",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
plotter.core.Grapher = (function (obj,res){
this.obj = obj;
this.res = res;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 257;
})
plotter.core.Grapher.cljs$lang$type = true;
plotter.core.Grapher.cljs$lang$ctorStr = "plotter.core/Grapher";
plotter.core.Grapher.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"plotter.core/Grapher");
});
plotter.core.Grapher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,n,null);
});
plotter.core.Grapher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((self__.res == null))
{var o = plotter.core.chain.call(null,self__.obj);return (new plotter.core.Grapher(o,o.call(null,n)));
} else
{return (new plotter.core.Grapher(self__.obj,self__.obj.call(null,n,self__.res)));
}
});
plotter.core.Grapher.prototype.call = (function() {
var G__4976 = null;
var G__4976__1 = (function (self__){var self__ = this;
var self____$1 = this;var this$ = self____$1;return (new plotter.core.Grapher(self__.obj,self__.res.call(null)));
});
var G__4976__2 = (function (self__,n){var self__ = this;
var self____$1 = this;var this$ = self____$1;if((self__.res == null))
{return null;
} else
{var m = ((cljs.core.vector_QMARK_.call(null,n))?cljs.core.apply.call(null,self__.res,n):self__.res.call(null,n));return (new plotter.core.Grapher(self__.obj,m));
}
});
G__4976 = function(self__,n){
switch(arguments.length){
case 1:
return G__4976__1.call(this,self__);
case 2:
return G__4976__2.call(this,self__,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__4976.cljs$core$IFn$_invoke$arity$1 = G__4976__1;
G__4976.cljs$core$IFn$_invoke$arity$2 = G__4976__2;
return G__4976;
})()
;
plotter.core.Grapher.prototype.apply = (function (self__,args4975){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args4975)));
});
plotter.core.Grapher.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var this$ = this;return (new plotter.core.Grapher(self__.obj,self__.res.call(null)));
});
plotter.core.Grapher.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){var self__ = this;
var this$ = this;if((self__.res == null))
{return null;
} else
{var m = ((cljs.core.vector_QMARK_.call(null,n))?cljs.core.apply.call(null,self__.res,n):self__.res.call(null,n));return (new plotter.core.Grapher(self__.obj,m));
}
});
plotter.core.Grapher.prototype.plotter$core$IRealize$ = true;
plotter.core.Grapher.prototype.plotter$core$IRealize$realize$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});
plotter.core.__GT_Grapher = (function __GT_Grapher(obj,res){return (new plotter.core.Grapher(obj,res));
});
plotter.core.make_plotter = (function make_plotter(obj){return (new plotter.core.Grapher(obj,null));
});
plotter.core.plot = (function plot(plotter__$1,p__4977){var vec__4979 = p__4977;var k = cljs.core.nth.call(null,vec__4979,(0),null);var vs = cljs.core.nth.call(null,vec__4979,(1),null);if((vs == null))
{return k.call(null,plotter__$1).call(null);
} else
{return k.call(null,plotter__$1).call(null,vs);
}
});
plotter.core.plot_ = (function plot_(plotter__$1,p__4980){var vec__4982 = p__4980;var k = cljs.core.nth.call(null,vec__4982,(0),null);var vs = cljs.core.nth.call(null,vec__4982,(1),null);if((vs == null))
{return plotter__$1.call(null,k).call(null);
} else
{return plotter__$1.call(null,k).call(null,vs);
}
});
plotter.core._EQ__GT_ = (function _EQ__GT_(plotter__$1,props){return cljs.core.reduce.call(null,plotter.core.plot,plotter__$1,props);
});

//# sourceMappingURL=core.js.map