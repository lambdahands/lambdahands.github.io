// Compiled by ClojureScript 0.0-2311
goog.provide('plotter.example');
goog.require('cljs.core');
goog.require('plotter.core');
goog.require('cljs.core.async');
goog.require('plotter.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
plotter.example.log = (function() { 
var log__delegate = function (args){return cljs.core.apply.call(null,(function (p1__33529_SHARP_){return console.log(p1__33529_SHARP_);
}),args);
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__33530){
var args = cljs.core.seq(arglist__33530);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* @param {...*} var_args
*/
plotter.example.plog = (function() { 
var plog__delegate = function (args){return plotter.example.log.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,args));
};
var plog = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return plog__delegate.call(this,args);};
plog.cljs$lang$maxFixedArity = 0;
plog.cljs$lang$applyTo = (function (arglist__33531){
var args = cljs.core.seq(arglist__33531);
return plog__delegate(args);
});
plog.cljs$core$IFn$_invoke$arity$variadic = plog__delegate;
return plog;
})()
;
plotter.example.rgb_str = (function rgb_str(a,b,c){var vec__33534 = cljs.core.map.call(null,(function (p1__33532_SHARP_){return cljs.core.mod.call(null,p1__33532_SHARP_,(256));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));var r = cljs.core.nth.call(null,vec__33534,(0),null);var g = cljs.core.nth.call(null,vec__33534,(1),null);var b__$1 = cljs.core.nth.call(null,vec__33534,(2),null);return ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__$1)+")");
});
plotter.example.rand_rgb_int = (function rand_rgb_int(){return cljs.core.take.call(null,(1000),cljs.core.repeatedly.call(null,(function (){return cljs.core.rand_int.call(null,(255));
})));
});
plotter.example.p = plotter.core.make_plotter.call(null,d3);
plotter.example.props = (function props(c){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),"#content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,plotter.example.rand_rgb_int.call(null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class","bar"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background",c], null)], null)], null);
});
plotter.example.window = plotter.core.make_plotter.call(null,window);
plotter.example.json__GT_ch = (function json__GT_ch(plotter__$1,path){var c = cljs.core.async.chan.call(null);var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var f = ((function (c,r){
return (function (d){return cljs.core.async.put_BANG_.call(null,c,cognitect.transit.read.call(null,r,d));
});})(c,r))
;new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(plotter__$1).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,f], null));
return c;
});
plotter.example.json__GT_data_QMARK_ = (function json__GT_data_QMARK_(p,ch){return (function (v){var c__13741__auto___33601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13741__auto___33601){
return (function (){var f__13742__auto__ = (function (){var switch__13726__auto__ = ((function (c__13741__auto___33601){
return (function (state_33587){var state_val_33588 = (state_33587[(1)]);if((state_val_33588 === (7)))
{var inst_33583 = (state_33587[(2)]);var state_33587__$1 = state_33587;var statearr_33589_33602 = state_33587__$1;(statearr_33589_33602[(2)] = inst_33583);
(statearr_33589_33602[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33588 === (6)))
{var inst_33573 = (state_33587[(7)]);var inst_33575 = (state_33587[(2)]);var inst_33576 = cljs.core.clj__GT_js.call(null,inst_33575);var inst_33577 = [new cljs.core.Keyword(null,"data","data",-232669377),inst_33576];var inst_33578 = (new cljs.core.PersistentVector(null,2,(5),inst_33573,inst_33577,null));var state_33587__$1 = state_33587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33587__$1,(5),ch,inst_33578);
} else
{if((state_val_33588 === (5)))
{var inst_33580 = (state_33587[(2)]);var state_33587__$1 = state_33587;var statearr_33590_33603 = state_33587__$1;(statearr_33590_33603[(2)] = inst_33580);
(statearr_33590_33603[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33588 === (4)))
{var inst_33585 = (state_33587[(2)]);var state_33587__$1 = state_33587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33587__$1,inst_33585);
} else
{if((state_val_33588 === (3)))
{var state_33587__$1 = state_33587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33587__$1,(7),ch,v);
} else
{if((state_val_33588 === (2)))
{var inst_33571 = cljs.core.second.call(null,v);var inst_33572 = plotter.example.json__GT_ch.call(null,p,inst_33571);var inst_33573 = cljs.core.PersistentVector.EMPTY_NODE;var state_33587__$1 = (function (){var statearr_33591 = state_33587;(statearr_33591[(7)] = inst_33573);
return statearr_33591;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33587__$1,(6),inst_33572);
} else
{if((state_val_33588 === (1)))
{var inst_33568 = cljs.core.first.call(null,v);var inst_33569 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),inst_33568);var state_33587__$1 = state_33587;if(inst_33569)
{var statearr_33592_33604 = state_33587__$1;(statearr_33592_33604[(1)] = (2));
} else
{var statearr_33593_33605 = state_33587__$1;(statearr_33593_33605[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13741__auto___33601))
;return ((function (switch__13726__auto__,c__13741__auto___33601){
return (function() {
var state_machine__13727__auto__ = null;
var state_machine__13727__auto____0 = (function (){var statearr_33597 = [null,null,null,null,null,null,null,null];(statearr_33597[(0)] = state_machine__13727__auto__);
(statearr_33597[(1)] = (1));
return statearr_33597;
});
var state_machine__13727__auto____1 = (function (state_33587){while(true){
var ret_value__13728__auto__ = (function (){try{while(true){
var result__13729__auto__ = switch__13726__auto__.call(null,state_33587);if(cljs.core.keyword_identical_QMARK_.call(null,result__13729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13729__auto__;
}
break;
}
}catch (e33598){if((e33598 instanceof Object))
{var ex__13730__auto__ = e33598;var statearr_33599_33606 = state_33587;(statearr_33599_33606[(5)] = ex__13730__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33598;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33607 = state_33587;
state_33587 = G__33607;
continue;
}
} else
{return ret_value__13728__auto__;
}
break;
}
});
state_machine__13727__auto__ = function(state_33587){
switch(arguments.length){
case 0:
return state_machine__13727__auto____0.call(this);
case 1:
return state_machine__13727__auto____1.call(this,state_33587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13727__auto____0;
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13727__auto____1;
return state_machine__13727__auto__;
})()
;})(switch__13726__auto__,c__13741__auto___33601))
})();var state__13743__auto__ = (function (){var statearr_33600 = f__13742__auto__.call(null);(statearr_33600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13741__auto___33601);
return statearr_33600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13743__auto__);
});})(c__13741__auto___33601))
);
return ch;
});
});
plotter.example.link_ = (function link_(grph,coll){var in$ = cljs.core.async.chan.call(null);var link = plotter.example.json__GT_data_QMARK_.call(null,grph,in$);var out = cljs.core.async.chan.call(null);var c__13741__auto___33684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13741__auto___33684,in$,link,out){
return (function (){var f__13742__auto__ = (function (){var switch__13726__auto__ = ((function (c__13741__auto___33684,in$,link,out){
return (function (state_33667){var state_val_33668 = (state_33667[(1)]);if((state_val_33668 === (8)))
{var inst_33661 = (state_33667[(2)]);var state_33667__$1 = state_33667;var statearr_33669_33685 = state_33667__$1;(statearr_33669_33685[(2)] = inst_33661);
(statearr_33669_33685[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33668 === (7)))
{var inst_33647 = (state_33667[(7)]);var inst_33648 = (state_33667[(8)]);var inst_33655 = (state_33667[(2)]);var inst_33656 = cljs.core.rest.call(null,inst_33647);var inst_33657 = cljs.core.conj.call(null,inst_33648,inst_33655);var inst_33647__$1 = inst_33656;var inst_33648__$1 = inst_33657;var state_33667__$1 = (function (){var statearr_33670 = state_33667;(statearr_33670[(7)] = inst_33647__$1);
(statearr_33670[(8)] = inst_33648__$1);
return statearr_33670;
})();var statearr_33671_33686 = state_33667__$1;(statearr_33671_33686[(2)] = null);
(statearr_33671_33686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33668 === (6)))
{var inst_33663 = (state_33667[(2)]);var state_33667__$1 = state_33667;var statearr_33672_33687 = state_33667__$1;(statearr_33672_33687[(2)] = inst_33663);
(statearr_33672_33687[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33668 === (5)))
{var inst_33648 = (state_33667[(8)]);var state_33667__$1 = state_33667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33667__$1,(8),out,inst_33648);
} else
{if((state_val_33668 === (4)))
{var inst_33647 = (state_33667[(7)]);var inst_33652 = cljs.core.first.call(null,inst_33647);var inst_33653 = link.call(null,inst_33652);var state_33667__$1 = state_33667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33667__$1,(7),inst_33653);
} else
{if((state_val_33668 === (3)))
{var inst_33665 = (state_33667[(2)]);var state_33667__$1 = state_33667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33667__$1,inst_33665);
} else
{if((state_val_33668 === (2)))
{var inst_33647 = (state_33667[(7)]);var inst_33650 = cljs.core.seq.call(null,inst_33647);var state_33667__$1 = state_33667;if(inst_33650)
{var statearr_33673_33688 = state_33667__$1;(statearr_33673_33688[(1)] = (4));
} else
{var statearr_33674_33689 = state_33667__$1;(statearr_33674_33689[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33668 === (1)))
{var inst_33646 = cljs.core.PersistentVector.EMPTY;var inst_33647 = coll;var inst_33648 = inst_33646;var state_33667__$1 = (function (){var statearr_33675 = state_33667;(statearr_33675[(7)] = inst_33647);
(statearr_33675[(8)] = inst_33648);
return statearr_33675;
})();var statearr_33676_33690 = state_33667__$1;(statearr_33676_33690[(2)] = null);
(statearr_33676_33690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__13741__auto___33684,in$,link,out))
;return ((function (switch__13726__auto__,c__13741__auto___33684,in$,link,out){
return (function() {
var state_machine__13727__auto__ = null;
var state_machine__13727__auto____0 = (function (){var statearr_33680 = [null,null,null,null,null,null,null,null,null];(statearr_33680[(0)] = state_machine__13727__auto__);
(statearr_33680[(1)] = (1));
return statearr_33680;
});
var state_machine__13727__auto____1 = (function (state_33667){while(true){
var ret_value__13728__auto__ = (function (){try{while(true){
var result__13729__auto__ = switch__13726__auto__.call(null,state_33667);if(cljs.core.keyword_identical_QMARK_.call(null,result__13729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13729__auto__;
}
break;
}
}catch (e33681){if((e33681 instanceof Object))
{var ex__13730__auto__ = e33681;var statearr_33682_33691 = state_33667;(statearr_33682_33691[(5)] = ex__13730__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33692 = state_33667;
state_33667 = G__33692;
continue;
}
} else
{return ret_value__13728__auto__;
}
break;
}
});
state_machine__13727__auto__ = function(state_33667){
switch(arguments.length){
case 0:
return state_machine__13727__auto____0.call(this);
case 1:
return state_machine__13727__auto____1.call(this,state_33667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13727__auto____0;
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13727__auto____1;
return state_machine__13727__auto__;
})()
;})(switch__13726__auto__,c__13741__auto___33684,in$,link,out))
})();var state__13743__auto__ = (function (){var statearr_33683 = f__13742__auto__.call(null);(statearr_33683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13741__auto___33684);
return statearr_33683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13743__auto__);
});})(c__13741__auto___33684,in$,link,out))
);
return out;
});
/**
* @param {...*} var_args
*/
plotter.example.link_BANG_ = (function() { 
var link_BANG___delegate = function (grph,colls){var c__13741__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13741__auto__){
return (function (){var f__13742__auto__ = (function (){var switch__13726__auto__ = ((function (c__13741__auto__){
return (function (state_33818){var state_val_33819 = (state_33818[(1)]);if((state_val_33819 === (7)))
{var inst_33779 = (state_33818[(7)]);var inst_33778 = (state_33818[(8)]);var inst_33777 = (state_33818[(9)]);var inst_33776 = (state_33818[(10)]);var inst_33787 = (state_33818[(2)]);var inst_33788 = plotter.core._EQ__GT_.call(null,grph,inst_33787);var inst_33789 = (inst_33779 + (1));var tmp33820 = inst_33778;var tmp33821 = inst_33777;var tmp33822 = inst_33776;var inst_33776__$1 = tmp33822;var inst_33777__$1 = tmp33821;var inst_33778__$1 = tmp33820;var inst_33779__$1 = inst_33789;var state_33818__$1 = (function (){var statearr_33823 = state_33818;(statearr_33823[(7)] = inst_33779__$1);
(statearr_33823[(8)] = inst_33778__$1);
(statearr_33823[(11)] = inst_33788);
(statearr_33823[(9)] = inst_33777__$1);
(statearr_33823[(10)] = inst_33776__$1);
return statearr_33823;
})();var statearr_33824_33849 = state_33818__$1;(statearr_33824_33849[(2)] = null);
(statearr_33824_33849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (1)))
{var inst_33775 = cljs.core.seq.call(null,colls);var inst_33776 = inst_33775;var inst_33777 = null;var inst_33778 = (0);var inst_33779 = (0);var state_33818__$1 = (function (){var statearr_33825 = state_33818;(statearr_33825[(7)] = inst_33779);
(statearr_33825[(8)] = inst_33778);
(statearr_33825[(9)] = inst_33777);
(statearr_33825[(10)] = inst_33776);
return statearr_33825;
})();var statearr_33826_33850 = state_33818__$1;(statearr_33826_33850[(2)] = null);
(statearr_33826_33850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (4)))
{var inst_33779 = (state_33818[(7)]);var inst_33777 = (state_33818[(9)]);var inst_33784 = cljs.core._nth.call(null,inst_33777,inst_33779);var inst_33785 = plotter.example.link_.call(null,grph,inst_33784);var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33818__$1,(7),inst_33785);
} else
{if((state_val_33819 === (13)))
{var inst_33809 = (state_33818[(2)]);var state_33818__$1 = state_33818;var statearr_33827_33851 = state_33818__$1;(statearr_33827_33851[(2)] = inst_33809);
(statearr_33827_33851[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (6)))
{var inst_33814 = (state_33818[(2)]);var state_33818__$1 = state_33818;var statearr_33828_33852 = state_33818__$1;(statearr_33828_33852[(2)] = inst_33814);
(statearr_33828_33852[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (3)))
{var inst_33816 = (state_33818[(2)]);var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33818__$1,inst_33816);
} else
{if((state_val_33819 === (12)))
{var inst_33792 = (state_33818[(12)]);var inst_33801 = cljs.core.first.call(null,inst_33792);var inst_33802 = plotter.example.link_.call(null,grph,inst_33801);var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33818__$1,(14),inst_33802);
} else
{if((state_val_33819 === (2)))
{var inst_33779 = (state_33818[(7)]);var inst_33778 = (state_33818[(8)]);var inst_33781 = (inst_33779 < inst_33778);var inst_33782 = inst_33781;var state_33818__$1 = state_33818;if(cljs.core.truth_(inst_33782))
{var statearr_33829_33853 = state_33818__$1;(statearr_33829_33853[(1)] = (4));
} else
{var statearr_33830_33854 = state_33818__$1;(statearr_33830_33854[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (11)))
{var inst_33792 = (state_33818[(12)]);var inst_33796 = cljs.core.chunk_first.call(null,inst_33792);var inst_33797 = cljs.core.chunk_rest.call(null,inst_33792);var inst_33798 = cljs.core.count.call(null,inst_33796);var inst_33776 = inst_33797;var inst_33777 = inst_33796;var inst_33778 = inst_33798;var inst_33779 = (0);var state_33818__$1 = (function (){var statearr_33831 = state_33818;(statearr_33831[(7)] = inst_33779);
(statearr_33831[(8)] = inst_33778);
(statearr_33831[(9)] = inst_33777);
(statearr_33831[(10)] = inst_33776);
return statearr_33831;
})();var statearr_33832_33855 = state_33818__$1;(statearr_33832_33855[(2)] = null);
(statearr_33832_33855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (9)))
{var state_33818__$1 = state_33818;var statearr_33833_33856 = state_33818__$1;(statearr_33833_33856[(2)] = null);
(statearr_33833_33856[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (5)))
{var inst_33792 = (state_33818[(12)]);var inst_33776 = (state_33818[(10)]);var inst_33792__$1 = cljs.core.seq.call(null,inst_33776);var state_33818__$1 = (function (){var statearr_33834 = state_33818;(statearr_33834[(12)] = inst_33792__$1);
return statearr_33834;
})();if(inst_33792__$1)
{var statearr_33835_33857 = state_33818__$1;(statearr_33835_33857[(1)] = (8));
} else
{var statearr_33836_33858 = state_33818__$1;(statearr_33836_33858[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (14)))
{var inst_33792 = (state_33818[(12)]);var inst_33804 = (state_33818[(2)]);var inst_33805 = plotter.core._EQ__GT_.call(null,grph,inst_33804);var inst_33806 = cljs.core.next.call(null,inst_33792);var inst_33776 = inst_33806;var inst_33777 = null;var inst_33778 = (0);var inst_33779 = (0);var state_33818__$1 = (function (){var statearr_33837 = state_33818;(statearr_33837[(7)] = inst_33779);
(statearr_33837[(13)] = inst_33805);
(statearr_33837[(8)] = inst_33778);
(statearr_33837[(9)] = inst_33777);
(statearr_33837[(10)] = inst_33776);
return statearr_33837;
})();var statearr_33838_33859 = state_33818__$1;(statearr_33838_33859[(2)] = null);
(statearr_33838_33859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (10)))
{var inst_33812 = (state_33818[(2)]);var state_33818__$1 = state_33818;var statearr_33839_33860 = state_33818__$1;(statearr_33839_33860[(2)] = inst_33812);
(statearr_33839_33860[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (8)))
{var inst_33792 = (state_33818[(12)]);var inst_33794 = cljs.core.chunked_seq_QMARK_.call(null,inst_33792);var state_33818__$1 = state_33818;if(inst_33794)
{var statearr_33840_33861 = state_33818__$1;(statearr_33840_33861[(1)] = (11));
} else
{var statearr_33841_33862 = state_33818__$1;(statearr_33841_33862[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13741__auto__))
;return ((function (switch__13726__auto__,c__13741__auto__){
return (function() {
var state_machine__13727__auto__ = null;
var state_machine__13727__auto____0 = (function (){var statearr_33845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33845[(0)] = state_machine__13727__auto__);
(statearr_33845[(1)] = (1));
return statearr_33845;
});
var state_machine__13727__auto____1 = (function (state_33818){while(true){
var ret_value__13728__auto__ = (function (){try{while(true){
var result__13729__auto__ = switch__13726__auto__.call(null,state_33818);if(cljs.core.keyword_identical_QMARK_.call(null,result__13729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13729__auto__;
}
break;
}
}catch (e33846){if((e33846 instanceof Object))
{var ex__13730__auto__ = e33846;var statearr_33847_33863 = state_33818;(statearr_33847_33863[(5)] = ex__13730__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33846;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33864 = state_33818;
state_33818 = G__33864;
continue;
}
} else
{return ret_value__13728__auto__;
}
break;
}
});
state_machine__13727__auto__ = function(state_33818){
switch(arguments.length){
case 0:
return state_machine__13727__auto____0.call(this);
case 1:
return state_machine__13727__auto____1.call(this,state_33818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13727__auto____0;
state_machine__13727__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13727__auto____1;
return state_machine__13727__auto__;
})()
;})(switch__13726__auto__,c__13741__auto__))
})();var state__13743__auto__ = (function (){var statearr_33848 = f__13742__auto__.call(null);(statearr_33848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13741__auto__);
return statearr_33848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13743__auto__);
});})(c__13741__auto__))
);
return c__13741__auto__;
};
var link_BANG_ = function (grph,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_BANG___delegate.call(this,grph,colls);};
link_BANG_.cljs$lang$maxFixedArity = 1;
link_BANG_.cljs$lang$applyTo = (function (arglist__33865){
var grph = cljs.core.first(arglist__33865);
var colls = cljs.core.rest(arglist__33865);
return link_BANG___delegate(grph,colls);
});
link_BANG_.cljs$core$IFn$_invoke$arity$variadic = link_BANG___delegate;
return link_BANG_;
})()
;
plotter.example.stroke_color__GT_ = (function stroke_color__GT_(color){return (function (){var c = this;return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(plotter.example.p).call(null,c)).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)));
});
});
plotter.example.native$ = (function native$(){return d3.select("#content").append("svg").attr("height",plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682).cljs$core$IFn$_invoke$arity$1(plotter.example.window))).attr("width",plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerWidth","innerWidth",1018930249).cljs$core$IFn$_invoke$arity$1(plotter.example.window))).selectAll("g").data(cljs.core.clj__GT_js.call(null,cljs.core.range.call(null,(500)))).enter().append("circle").attr("class","bar").attr("cx",(plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerWidth","innerWidth",1018930249).cljs$core$IFn$_invoke$arity$1(plotter.example.window)) / (2))).attr("cy",(plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682).cljs$core$IFn$_invoke$arity$1(plotter.example.window)) / (2))).attr("r",(function (d){return d;
})).style(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))).on("mouseover",plotter.example.stroke_color__GT_.call(null,"red")).on("mouseout",plotter.example.stroke_color__GT_.call(null,"#ccc"));
});
plotter.example.stroke_color__GT_ = (function stroke_color__GT_(color){return (function (){var c = this;return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(plotter.example.p).call(null,c)).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)));
});
});
plotter.example.l = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),"#content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height",plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682).cljs$core$IFn$_invoke$arity$1(plotter.example.window))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width",plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerWidth","innerWidth",1018930249).cljs$core$IFn$_invoke$arity$1(plotter.example.window))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,cljs.core.range.call(null,(500)))], null)
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"circle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class","bar"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cx",(plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerWidth","innerWidth",1018930249).cljs$core$IFn$_invoke$arity$1(plotter.example.window)) / (2))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cy",(plotter.core.realize.call(null,new cljs.core.Keyword(null,"innerHeight","innerHeight",-217066682).cljs$core$IFn$_invoke$arity$1(plotter.example.window)) / (2))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r",(function (d){return d;
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mouseover",plotter.example.stroke_color__GT_.call(null,"red")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mouseout",plotter.example.stroke_color__GT_.call(null,"#ccc")], null)], null)], null);
if(cljs.core._EQ_.call(null,(1),cljs.core.rand_int.call(null,(2))))
{plotter.example.log.call(null,"native");
plotter.example.native$.call(null);
} else
{plotter.example.log.call(null,"cljs",plotter.example.link_BANG_.call(null,plotter.example.p,plotter.example.l));
}

//# sourceMappingURL=example.js.map