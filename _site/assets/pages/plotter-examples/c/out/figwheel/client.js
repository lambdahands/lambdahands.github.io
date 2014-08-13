// Compiled by ClojureScript 0.0-2311
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13301,args){var map__13303 = p__13301;var map__13303__$1 = ((cljs.core.seq_QMARK_.call(null,map__13303))?cljs.core.apply.call(null,cljs.core.hash_map,map__13303):map__13303);var debug = cljs.core.get.call(null,map__13303__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13301,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13301,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13304){
var p__13301 = cljs.core.first(arglist__13304);
var args = cljs.core.rest(arglist__13304);
return log__delegate(p__13301,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13305){var map__13307 = p__13305;var map__13307__$1 = ((cljs.core.seq_QMARK_.call(null,map__13307))?cljs.core.apply.call(null,cljs.core.hash_map,map__13307):map__13307);var websocket_url = cljs.core.get.call(null,map__13307__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13308,callback){var map__13310 = p__13308;var map__13310__$1 = ((cljs.core.seq_QMARK_.call(null,map__13310))?cljs.core.apply.call(null,cljs.core.hash_map,map__13310):map__13310);var msg = map__13310__$1;var dependency_file = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3553__auto__ = dependency_file;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13310,map__13310__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13310,map__13310__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13311,p__13312){var map__13315 = p__13311;var map__13315__$1 = ((cljs.core.seq_QMARK_.call(null,map__13315))?cljs.core.apply.call(null,cljs.core.hash_map,map__13315):map__13315);var opts = map__13315__$1;var url_rewriter = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13316 = p__13312;var map__13316__$1 = ((cljs.core.seq_QMARK_.call(null,map__13316))?cljs.core.apply.call(null,cljs.core.hash_map,map__13316):map__13316);var d = map__13316__$1;var file = cljs.core.get.call(null,map__13316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13317,p__13318){var map__13360 = p__13317;var map__13360__$1 = ((cljs.core.seq_QMARK_.call(null,map__13360))?cljs.core.apply.call(null,cljs.core.hash_map,map__13360):map__13360);var opts = map__13360__$1;var on_jsload = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13360__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13361 = p__13318;var map__13361__$1 = ((cljs.core.seq_QMARK_.call(null,map__13361))?cljs.core.apply.call(null,cljs.core.hash_map,map__13361):map__13361);var files = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6205__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files){
return (function (){var f__6206__auto__ = (function (){var switch__6190__auto__ = ((function (c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files){
return (function (state_13384){var state_val_13385 = (state_13384[(1)]);if((state_val_13385 === (6)))
{var inst_13366 = (state_13384[(7)]);var inst_13375 = (state_13384[(2)]);var inst_13376 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13377 = [inst_13366];var inst_13378 = (new cljs.core.PersistentVector(null,1,(5),inst_13376,inst_13377,null));var inst_13379 = cljs.core.apply.call(null,on_jsload,inst_13378);var state_13384__$1 = (function (){var statearr_13386 = state_13384;(statearr_13386[(8)] = inst_13375);
return statearr_13386;
})();var statearr_13387_13401 = state_13384__$1;(statearr_13387_13401[(2)] = inst_13379);
(statearr_13387_13401[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13385 === (5)))
{var inst_13382 = (state_13384[(2)]);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13384__$1,inst_13382);
} else
{if((state_val_13385 === (4)))
{var state_13384__$1 = state_13384;var statearr_13388_13402 = state_13384__$1;(statearr_13388_13402[(2)] = null);
(statearr_13388_13402[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13385 === (3)))
{var inst_13366 = (state_13384[(7)]);var inst_13369 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_13370 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13366);var inst_13371 = cljs.core.prn_str.call(null,inst_13370);var inst_13372 = console.log(inst_13371);var inst_13373 = cljs.core.async.timeout.call(null,(10));var state_13384__$1 = (function (){var statearr_13389 = state_13384;(statearr_13389[(9)] = inst_13369);
(statearr_13389[(10)] = inst_13372);
return statearr_13389;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13384__$1,(6),inst_13373);
} else
{if((state_val_13385 === (2)))
{var inst_13366 = (state_13384[(7)]);var inst_13366__$1 = (state_13384[(2)]);var inst_13367 = cljs.core.not_empty.call(null,inst_13366__$1);var state_13384__$1 = (function (){var statearr_13390 = state_13384;(statearr_13390[(7)] = inst_13366__$1);
return statearr_13390;
})();if(cljs.core.truth_(inst_13367))
{var statearr_13391_13403 = state_13384__$1;(statearr_13391_13403[(1)] = (3));
} else
{var statearr_13392_13404 = state_13384__$1;(statearr_13392_13404[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13385 === (1)))
{var inst_13362 = before_jsload.call(null,files);var inst_13363 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13364 = figwheel.client.load_all_js_files.call(null,inst_13363);var state_13384__$1 = (function (){var statearr_13393 = state_13384;(statearr_13393[(11)] = inst_13362);
return statearr_13393;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13384__$1,(2),inst_13364);
} else
{return null;
}
}
}
}
}
}
});})(c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files))
;return ((function (switch__6190__auto__,c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files){
return (function() {
var state_machine__6191__auto__ = null;
var state_machine__6191__auto____0 = (function (){var statearr_13397 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13397[(0)] = state_machine__6191__auto__);
(statearr_13397[(1)] = (1));
return statearr_13397;
});
var state_machine__6191__auto____1 = (function (state_13384){while(true){
var ret_value__6192__auto__ = (function (){try{while(true){
var result__6193__auto__ = switch__6190__auto__.call(null,state_13384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6193__auto__;
}
break;
}
}catch (e13398){if((e13398 instanceof Object))
{var ex__6194__auto__ = e13398;var statearr_13399_13405 = state_13384;(statearr_13399_13405[(5)] = ex__6194__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13398;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13406 = state_13384;
state_13384 = G__13406;
continue;
}
} else
{return ret_value__6192__auto__;
}
break;
}
});
state_machine__6191__auto__ = function(state_13384){
switch(arguments.length){
case 0:
return state_machine__6191__auto____0.call(this);
case 1:
return state_machine__6191__auto____1.call(this,state_13384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6191__auto____0;
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6191__auto____1;
return state_machine__6191__auto__;
})()
;})(switch__6190__auto__,c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files))
})();var state__6207__auto__ = (function (){var statearr_13400 = f__6206__auto__.call(null);(statearr_13400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6205__auto__);
return statearr_13400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6207__auto__);
});})(c__6205__auto__,map__13360,map__13360__$1,opts,on_jsload,before_jsload,map__13361,map__13361__$1,files))
);
return c__6205__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13407,link_href){var map__13409 = p__13407;var map__13409__$1 = ((cljs.core.seq_QMARK_.call(null,map__13409))?cljs.core.apply.call(null,cljs.core.hash_map,map__13409):map__13409);var request_url = cljs.core.get.call(null,map__13409__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6205__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6205__auto__,parent){
return (function (){var f__6206__auto__ = (function (){var switch__6190__auto__ = ((function (c__6205__auto__,parent){
return (function (state_13430){var state_val_13431 = (state_13430[(1)]);if((state_val_13431 === (2)))
{var inst_13427 = (state_13430[(2)]);var inst_13428 = parent.removeChild(orig_link);var state_13430__$1 = (function (){var statearr_13432 = state_13430;(statearr_13432[(7)] = inst_13427);
return statearr_13432;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13430__$1,inst_13428);
} else
{if((state_val_13431 === (1)))
{var inst_13425 = cljs.core.async.timeout.call(null,(200));var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13430__$1,(2),inst_13425);
} else
{return null;
}
}
});})(c__6205__auto__,parent))
;return ((function (switch__6190__auto__,c__6205__auto__,parent){
return (function() {
var state_machine__6191__auto__ = null;
var state_machine__6191__auto____0 = (function (){var statearr_13436 = [null,null,null,null,null,null,null,null];(statearr_13436[(0)] = state_machine__6191__auto__);
(statearr_13436[(1)] = (1));
return statearr_13436;
});
var state_machine__6191__auto____1 = (function (state_13430){while(true){
var ret_value__6192__auto__ = (function (){try{while(true){
var result__6193__auto__ = switch__6190__auto__.call(null,state_13430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6193__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object))
{var ex__6194__auto__ = e13437;var statearr_13438_13440 = state_13430;(statearr_13438_13440[(5)] = ex__6194__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13441 = state_13430;
state_13430 = G__13441;
continue;
}
} else
{return ret_value__6192__auto__;
}
break;
}
});
state_machine__6191__auto__ = function(state_13430){
switch(arguments.length){
case 0:
return state_machine__6191__auto____0.call(this);
case 1:
return state_machine__6191__auto____1.call(this,state_13430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6191__auto____0;
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6191__auto____1;
return state_machine__6191__auto__;
})()
;})(switch__6190__auto__,c__6205__auto__,parent))
})();var state__6207__auto__ = (function (){var statearr_13439 = f__6206__auto__.call(null);(statearr_13439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6205__auto__);
return statearr_13439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6207__auto__);
});})(c__6205__auto__,parent))
);
return c__6205__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13442){var map__13444 = p__13442;var map__13444__$1 = ((cljs.core.seq_QMARK_.call(null,map__13444))?cljs.core.apply.call(null,cljs.core.hash_map,map__13444):map__13444);var f_data = map__13444__$1;var request_url = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4217__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4217__auto__))
{var link = temp__4217__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13445,files_msg){var map__13467 = p__13445;var map__13467__$1 = ((cljs.core.seq_QMARK_.call(null,map__13467))?cljs.core.apply.call(null,cljs.core.hash_map,map__13467):map__13467);var opts = map__13467__$1;var on_cssload = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13468_13488 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13469_13489 = null;var count__13470_13490 = (0);var i__13471_13491 = (0);while(true){
if((i__13471_13491 < count__13470_13490))
{var f_13492 = cljs.core._nth.call(null,chunk__13469_13489,i__13471_13491);figwheel.client.reload_css_file.call(null,f_13492);
{
var G__13493 = seq__13468_13488;
var G__13494 = chunk__13469_13489;
var G__13495 = count__13470_13490;
var G__13496 = (i__13471_13491 + (1));
seq__13468_13488 = G__13493;
chunk__13469_13489 = G__13494;
count__13470_13490 = G__13495;
i__13471_13491 = G__13496;
continue;
}
} else
{var temp__4219__auto___13497 = cljs.core.seq.call(null,seq__13468_13488);if(temp__4219__auto___13497)
{var seq__13468_13498__$1 = temp__4219__auto___13497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13468_13498__$1))
{var c__4309__auto___13499 = cljs.core.chunk_first.call(null,seq__13468_13498__$1);{
var G__13500 = cljs.core.chunk_rest.call(null,seq__13468_13498__$1);
var G__13501 = c__4309__auto___13499;
var G__13502 = cljs.core.count.call(null,c__4309__auto___13499);
var G__13503 = (0);
seq__13468_13488 = G__13500;
chunk__13469_13489 = G__13501;
count__13470_13490 = G__13502;
i__13471_13491 = G__13503;
continue;
}
} else
{var f_13504 = cljs.core.first.call(null,seq__13468_13498__$1);figwheel.client.reload_css_file.call(null,f_13504);
{
var G__13505 = cljs.core.next.call(null,seq__13468_13498__$1);
var G__13506 = null;
var G__13507 = (0);
var G__13508 = (0);
seq__13468_13488 = G__13505;
chunk__13469_13489 = G__13506;
count__13470_13490 = G__13507;
i__13471_13491 = G__13508;
continue;
}
}
} else
{}
}
break;
}
var c__6205__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload){
return (function (){var f__6206__auto__ = (function (){var switch__6190__auto__ = ((function (c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload){
return (function (state_13478){var state_val_13479 = (state_13478[(1)]);if((state_val_13479 === (2)))
{var inst_13474 = (state_13478[(2)]);var inst_13475 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13476 = on_cssload.call(null,inst_13475);var state_13478__$1 = (function (){var statearr_13480 = state_13478;(statearr_13480[(7)] = inst_13474);
return statearr_13480;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13478__$1,inst_13476);
} else
{if((state_val_13479 === (1)))
{var inst_13472 = cljs.core.async.timeout.call(null,(100));var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13478__$1,(2),inst_13472);
} else
{return null;
}
}
});})(c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload))
;return ((function (switch__6190__auto__,c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload){
return (function() {
var state_machine__6191__auto__ = null;
var state_machine__6191__auto____0 = (function (){var statearr_13484 = [null,null,null,null,null,null,null,null];(statearr_13484[(0)] = state_machine__6191__auto__);
(statearr_13484[(1)] = (1));
return statearr_13484;
});
var state_machine__6191__auto____1 = (function (state_13478){while(true){
var ret_value__6192__auto__ = (function (){try{while(true){
var result__6193__auto__ = switch__6190__auto__.call(null,state_13478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6193__auto__;
}
break;
}
}catch (e13485){if((e13485 instanceof Object))
{var ex__6194__auto__ = e13485;var statearr_13486_13509 = state_13478;(statearr_13486_13509[(5)] = ex__6194__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13510 = state_13478;
state_13478 = G__13510;
continue;
}
} else
{return ret_value__6192__auto__;
}
break;
}
});
state_machine__6191__auto__ = function(state_13478){
switch(arguments.length){
case 0:
return state_machine__6191__auto____0.call(this);
case 1:
return state_machine__6191__auto____1.call(this,state_13478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6191__auto____0;
state_machine__6191__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6191__auto____1;
return state_machine__6191__auto__;
})()
;})(switch__6190__auto__,c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload))
})();var state__6207__auto__ = (function (){var statearr_13487 = f__6206__auto__.call(null);(statearr_13487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6205__auto__);
return statearr_13487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6207__auto__);
});})(c__6205__auto__,map__13467,map__13467__$1,opts,on_cssload))
);
return c__6205__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13511){var map__13516 = p__13511;var map__13516__$1 = ((cljs.core.seq_QMARK_.call(null,map__13516))?cljs.core.apply.call(null,cljs.core.hash_map,map__13516):map__13516);var opts = map__13516__$1;var on_compile_fail = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13517 = cljs.core._EQ_;var expr__13518 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13517.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13518)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13517.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13518)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13517.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13518)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13516,map__13516__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13523 = {"detail":url};return obj13523;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13524){var map__13526 = p__13524;var map__13526__$1 = ((cljs.core.seq_QMARK_.call(null,map__13526))?cljs.core.apply.call(null,cljs.core.hash_map,map__13526):map__13526);var class$ = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13527){var map__13533 = p__13527;var map__13533__$1 = ((cljs.core.seq_QMARK_.call(null,map__13533))?cljs.core.apply.call(null,cljs.core.hash_map,map__13533):map__13533);var ed = map__13533__$1;var exception_data = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__13534_13538 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13535_13539 = null;var count__13536_13540 = (0);var i__13537_13541 = (0);while(true){
if((i__13537_13541 < count__13536_13540))
{var msg_13542 = cljs.core._nth.call(null,chunk__13535_13539,i__13537_13541);console.log(msg_13542);
{
var G__13543 = seq__13534_13538;
var G__13544 = chunk__13535_13539;
var G__13545 = count__13536_13540;
var G__13546 = (i__13537_13541 + (1));
seq__13534_13538 = G__13543;
chunk__13535_13539 = G__13544;
count__13536_13540 = G__13545;
i__13537_13541 = G__13546;
continue;
}
} else
{var temp__4219__auto___13547 = cljs.core.seq.call(null,seq__13534_13538);if(temp__4219__auto___13547)
{var seq__13534_13548__$1 = temp__4219__auto___13547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13534_13548__$1))
{var c__4309__auto___13549 = cljs.core.chunk_first.call(null,seq__13534_13548__$1);{
var G__13550 = cljs.core.chunk_rest.call(null,seq__13534_13548__$1);
var G__13551 = c__4309__auto___13549;
var G__13552 = cljs.core.count.call(null,c__4309__auto___13549);
var G__13553 = (0);
seq__13534_13538 = G__13550;
chunk__13535_13539 = G__13551;
count__13536_13540 = G__13552;
i__13537_13541 = G__13553;
continue;
}
} else
{var msg_13554 = cljs.core.first.call(null,seq__13534_13548__$1);console.log(msg_13554);
{
var G__13555 = cljs.core.next.call(null,seq__13534_13548__$1);
var G__13556 = null;
var G__13557 = (0);
var G__13558 = (0);
seq__13534_13538 = G__13555;
chunk__13535_13539 = G__13556;
count__13536_13540 = G__13557;
i__13537_13541 = G__13558;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3553__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13559){var map__13561 = p__13559;var map__13561__$1 = ((cljs.core.seq_QMARK_.call(null,map__13561))?cljs.core.apply.call(null,cljs.core.hash_map,map__13561):map__13561);var opts = map__13561__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13559 = null;if (arguments.length > 0) {
  p__13559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13559);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13562){
var p__13559 = cljs.core.seq(arglist__13562);
return watch_and_reload__delegate(p__13559);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map