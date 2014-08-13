// Compiled by ClojureScript 0.0-2311
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__13163_13167 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__13164_13168 = null;var count__13165_13169 = (0);var i__13166_13170 = (0);while(true){
if((i__13166_13170 < count__13165_13169))
{var k_13171 = cljs.core._nth.call(null,chunk__13164_13168,i__13166_13170);var v_13172 = (b[k_13171]);(a[k_13171] = v_13172);
{
var G__13173 = seq__13163_13167;
var G__13174 = chunk__13164_13168;
var G__13175 = count__13165_13169;
var G__13176 = (i__13166_13170 + (1));
seq__13163_13167 = G__13173;
chunk__13164_13168 = G__13174;
count__13165_13169 = G__13175;
i__13166_13170 = G__13176;
continue;
}
} else
{var temp__4219__auto___13177 = cljs.core.seq.call(null,seq__13163_13167);if(temp__4219__auto___13177)
{var seq__13163_13178__$1 = temp__4219__auto___13177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13163_13178__$1))
{var c__4309__auto___13179 = cljs.core.chunk_first.call(null,seq__13163_13178__$1);{
var G__13180 = cljs.core.chunk_rest.call(null,seq__13163_13178__$1);
var G__13181 = c__4309__auto___13179;
var G__13182 = cljs.core.count.call(null,c__4309__auto___13179);
var G__13183 = (0);
seq__13163_13167 = G__13180;
chunk__13164_13168 = G__13181;
count__13165_13169 = G__13182;
i__13166_13170 = G__13183;
continue;
}
} else
{var k_13184 = cljs.core.first.call(null,seq__13163_13178__$1);var v_13185 = (b[k_13184]);(a[k_13184] = v_13185);
{
var G__13186 = cljs.core.next.call(null,seq__13163_13178__$1);
var G__13187 = null;
var G__13188 = (0);
var G__13189 = (0);
seq__13163_13167 = G__13186;
chunk__13164_13168 = G__13187;
count__13165_13169 = G__13188;
i__13166_13170 = G__13189;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__13190 = (i + (2));
var G__13191 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__13190;
ret = G__13191;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__13192_13196 = cljs.core.seq.call(null,v);var chunk__13193_13197 = null;var count__13194_13198 = (0);var i__13195_13199 = (0);while(true){
if((i__13195_13199 < count__13194_13198))
{var x_13200 = cljs.core._nth.call(null,chunk__13193_13197,i__13195_13199);ret.push(x_13200);
{
var G__13201 = seq__13192_13196;
var G__13202 = chunk__13193_13197;
var G__13203 = count__13194_13198;
var G__13204 = (i__13195_13199 + (1));
seq__13192_13196 = G__13201;
chunk__13193_13197 = G__13202;
count__13194_13198 = G__13203;
i__13195_13199 = G__13204;
continue;
}
} else
{var temp__4219__auto___13205 = cljs.core.seq.call(null,seq__13192_13196);if(temp__4219__auto___13205)
{var seq__13192_13206__$1 = temp__4219__auto___13205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13192_13206__$1))
{var c__4309__auto___13207 = cljs.core.chunk_first.call(null,seq__13192_13206__$1);{
var G__13208 = cljs.core.chunk_rest.call(null,seq__13192_13206__$1);
var G__13209 = c__4309__auto___13207;
var G__13210 = cljs.core.count.call(null,c__4309__auto___13207);
var G__13211 = (0);
seq__13192_13196 = G__13208;
chunk__13193_13197 = G__13209;
count__13194_13198 = G__13210;
i__13195_13199 = G__13211;
continue;
}
} else
{var x_13212 = cljs.core.first.call(null,seq__13192_13206__$1);ret.push(x_13212);
{
var G__13213 = cljs.core.next.call(null,seq__13192_13206__$1);
var G__13214 = null;
var G__13215 = (0);
var G__13216 = (0);
seq__13192_13196 = G__13213;
chunk__13193_13197 = G__13214;
count__13194_13198 = G__13215;
i__13195_13199 = G__13216;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__13217_13221 = cljs.core.seq.call(null,v);var chunk__13218_13222 = null;var count__13219_13223 = (0);var i__13220_13224 = (0);while(true){
if((i__13220_13224 < count__13219_13223))
{var x_13225 = cljs.core._nth.call(null,chunk__13218_13222,i__13220_13224);ret.push(x_13225);
{
var G__13226 = seq__13217_13221;
var G__13227 = chunk__13218_13222;
var G__13228 = count__13219_13223;
var G__13229 = (i__13220_13224 + (1));
seq__13217_13221 = G__13226;
chunk__13218_13222 = G__13227;
count__13219_13223 = G__13228;
i__13220_13224 = G__13229;
continue;
}
} else
{var temp__4219__auto___13230 = cljs.core.seq.call(null,seq__13217_13221);if(temp__4219__auto___13230)
{var seq__13217_13231__$1 = temp__4219__auto___13230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13217_13231__$1))
{var c__4309__auto___13232 = cljs.core.chunk_first.call(null,seq__13217_13231__$1);{
var G__13233 = cljs.core.chunk_rest.call(null,seq__13217_13231__$1);
var G__13234 = c__4309__auto___13232;
var G__13235 = cljs.core.count.call(null,c__4309__auto___13232);
var G__13236 = (0);
seq__13217_13221 = G__13233;
chunk__13218_13222 = G__13234;
count__13219_13223 = G__13235;
i__13220_13224 = G__13236;
continue;
}
} else
{var x_13237 = cljs.core.first.call(null,seq__13217_13231__$1);ret.push(x_13237);
{
var G__13238 = cljs.core.next.call(null,seq__13217_13231__$1);
var G__13239 = null;
var G__13240 = (0);
var G__13241 = (0);
seq__13217_13221 = G__13238;
chunk__13218_13222 = G__13239;
count__13219_13223 = G__13240;
i__13220_13224 = G__13241;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__13242_13246 = cljs.core.seq.call(null,v);var chunk__13243_13247 = null;var count__13244_13248 = (0);var i__13245_13249 = (0);while(true){
if((i__13245_13249 < count__13244_13248))
{var x_13250 = cljs.core._nth.call(null,chunk__13243_13247,i__13245_13249);ret.push(x_13250);
{
var G__13251 = seq__13242_13246;
var G__13252 = chunk__13243_13247;
var G__13253 = count__13244_13248;
var G__13254 = (i__13245_13249 + (1));
seq__13242_13246 = G__13251;
chunk__13243_13247 = G__13252;
count__13244_13248 = G__13253;
i__13245_13249 = G__13254;
continue;
}
} else
{var temp__4219__auto___13255 = cljs.core.seq.call(null,seq__13242_13246);if(temp__4219__auto___13255)
{var seq__13242_13256__$1 = temp__4219__auto___13255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13242_13256__$1))
{var c__4309__auto___13257 = cljs.core.chunk_first.call(null,seq__13242_13256__$1);{
var G__13258 = cljs.core.chunk_rest.call(null,seq__13242_13256__$1);
var G__13259 = c__4309__auto___13257;
var G__13260 = cljs.core.count.call(null,c__4309__auto___13257);
var G__13261 = (0);
seq__13242_13246 = G__13258;
chunk__13243_13247 = G__13259;
count__13244_13248 = G__13260;
i__13245_13249 = G__13261;
continue;
}
} else
{var x_13262 = cljs.core.first.call(null,seq__13242_13256__$1);ret.push(x_13262);
{
var G__13263 = cljs.core.next.call(null,seq__13242_13256__$1);
var G__13264 = null;
var G__13265 = (0);
var G__13266 = (0);
seq__13242_13246 = G__13263;
chunk__13243_13247 = G__13264;
count__13244_13248 = G__13265;
i__13245_13249 = G__13266;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x13276 = cljs.core.clone.call(null,handlers);x13276.forEach = ((function (x13276,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__13277 = cljs.core.seq.call(null,coll);var chunk__13278 = null;var count__13279 = (0);var i__13280 = (0);while(true){
if((i__13280 < count__13279))
{var vec__13281 = cljs.core._nth.call(null,chunk__13278,i__13280);var k = cljs.core.nth.call(null,vec__13281,(0),null);var v = cljs.core.nth.call(null,vec__13281,(1),null);f.call(null,v,k);
{
var G__13283 = seq__13277;
var G__13284 = chunk__13278;
var G__13285 = count__13279;
var G__13286 = (i__13280 + (1));
seq__13277 = G__13283;
chunk__13278 = G__13284;
count__13279 = G__13285;
i__13280 = G__13286;
continue;
}
} else
{var temp__4219__auto__ = cljs.core.seq.call(null,seq__13277);if(temp__4219__auto__)
{var seq__13277__$1 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13277__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__13277__$1);{
var G__13287 = cljs.core.chunk_rest.call(null,seq__13277__$1);
var G__13288 = c__4309__auto__;
var G__13289 = cljs.core.count.call(null,c__4309__auto__);
var G__13290 = (0);
seq__13277 = G__13287;
chunk__13278 = G__13288;
count__13279 = G__13289;
i__13280 = G__13290;
continue;
}
} else
{var vec__13282 = cljs.core.first.call(null,seq__13277__$1);var k = cljs.core.nth.call(null,vec__13282,(0),null);var v = cljs.core.nth.call(null,vec__13282,(1),null);f.call(null,v,k);
{
var G__13291 = cljs.core.next.call(null,seq__13277__$1);
var G__13292 = null;
var G__13293 = (0);
var G__13294 = (0);
seq__13277 = G__13291;
chunk__13278 = G__13292;
count__13279 = G__13293;
i__13280 = G__13294;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x13276,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x13276;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__13275 = obj;G__13275.push(kfn.call(null,k),vfn.call(null,v));
return G__13275;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t13298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t13298 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta13299){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta13299 = meta13299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t13298.cljs$lang$type = true;
cognitect.transit.t13298.cljs$lang$ctorStr = "cognitect.transit/t13298";
cognitect.transit.t13298.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t13298");
});
cognitect.transit.t13298.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t13298.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t13298.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t13298.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t13298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13300){var self__ = this;
var _13300__$1 = this;return self__.meta13299;
});
cognitect.transit.t13298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13300,meta13299__$1){var self__ = this;
var _13300__$1 = this;return (new cognitect.transit.t13298(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta13299__$1));
});
cognitect.transit.__GT_t13298 = (function __GT_t13298(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta13299){return (new cognitect.transit.t13298(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta13299));
});
}
return (new cognitect.transit.t13298(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map