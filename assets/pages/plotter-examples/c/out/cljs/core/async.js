// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16712 = (function (f,fn_handler,meta16713){
this.f = f;
this.fn_handler = fn_handler;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16712.cljs$lang$type = true;
cljs.core.async.t16712.cljs$lang$ctorStr = "cljs.core.async/t16712";
cljs.core.async.t16712.cljs$lang$ctorPrWriter = (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t16712");
});
cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){var self__ = this;
var _16714__$1 = this;return self__.meta16713;
});
cljs.core.async.t16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){var self__ = this;
var _16714__$1 = this;return (new cljs.core.async.t16712(self__.f,self__.fn_handler,meta16713__$1));
});
cljs.core.async.__GT_t16712 = (function __GT_t16712(f__$1,fn_handler__$1,meta16713){return (new cljs.core.async.t16712(f__$1,fn_handler__$1,meta16713));
});
}
return (new cljs.core.async.t16712(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16716 = buff;if(G__16716)
{var bit__12044__auto__ = null;if(cljs.core.truth_((function (){var or__11394__auto__ = bit__12044__auto__;if(cljs.core.truth_(or__11394__auto__))
{return or__11394__auto__;
} else
{return G__16716.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16716.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16716);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16716);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16717 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16717);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16717,ret){
return (function (){return fn1.call(null,val_16717);
});})(val_16717,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4217__auto__))
{var ret = temp__4217__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4217__auto__))
{var retb = temp__4217__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4217__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4217__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12250__auto___16718 = n;var x_16719 = (0);while(true){
if((x_16719 < n__12250__auto___16718))
{(a[x_16719] = (0));
{
var G__16720 = (x_16719 + (1));
x_16719 = G__16720;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16721 = (i + (1));
i = G__16721;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16725 = (function (flag,alt_flag,meta16726){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16726 = meta16726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16725.cljs$lang$type = true;
cljs.core.async.t16725.cljs$lang$ctorStr = "cljs.core.async/t16725";
cljs.core.async.t16725.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t16725");
});})(flag))
;
cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16727){var self__ = this;
var _16727__$1 = this;return self__.meta16726;
});})(flag))
;
cljs.core.async.t16725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16727,meta16726__$1){var self__ = this;
var _16727__$1 = this;return (new cljs.core.async.t16725(self__.flag,self__.alt_flag,meta16726__$1));
});})(flag))
;
cljs.core.async.__GT_t16725 = ((function (flag){
return (function __GT_t16725(flag__$1,alt_flag__$1,meta16726){return (new cljs.core.async.t16725(flag__$1,alt_flag__$1,meta16726));
});})(flag))
;
}
return (new cljs.core.async.t16725(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16731 = (function (cb,flag,alt_handler,meta16732){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16732 = meta16732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16731.cljs$lang$type = true;
cljs.core.async.t16731.cljs$lang$ctorStr = "cljs.core.async/t16731";
cljs.core.async.t16731.cljs$lang$ctorPrWriter = (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t16731");
});
cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16733){var self__ = this;
var _16733__$1 = this;return self__.meta16732;
});
cljs.core.async.t16731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16733,meta16732__$1){var self__ = this;
var _16733__$1 = this;return (new cljs.core.async.t16731(self__.cb,self__.flag,self__.alt_handler,meta16732__$1));
});
cljs.core.async.__GT_t16731 = (function __GT_t16731(cb__$1,flag__$1,alt_handler__$1,meta16732){return (new cljs.core.async.t16731(cb__$1,flag__$1,alt_handler__$1,meta16732));
});
}
return (new cljs.core.async.t16731(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16734_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16734_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16735_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16735_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11394__auto__ = wport;if(cljs.core.truth_(or__11394__auto__))
{return or__11394__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16736 = (i + (1));
i = G__16736;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11394__auto__ = ret;if(cljs.core.truth_(or__11394__auto__))
{return or__11394__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4219__auto__ = (function (){var and__11382__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11382__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11382__auto__;
}
})();if(cljs.core.truth_(temp__4219__auto__))
{var got = temp__4219__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16737){var map__16739 = p__16737;var map__16739__$1 = ((cljs.core.seq_QMARK_.call(null,map__16739))?cljs.core.apply.call(null,cljs.core.hash_map,map__16739):map__16739);var opts = map__16739__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16737 = null;if (arguments.length > 1) {
  p__16737 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16737);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16740){
var ports = cljs.core.first(arglist__16740);
var p__16737 = cljs.core.rest(arglist__16740);
return alts_BANG___delegate(ports,p__16737);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13739__auto___16835 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___16835){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___16835){
return (function (state_16811){var state_val_16812 = (state_16811[(1)]);if((state_val_16812 === (7)))
{var inst_16807 = (state_16811[(2)]);var state_16811__$1 = state_16811;var statearr_16813_16836 = state_16811__$1;(statearr_16813_16836[(2)] = inst_16807);
(statearr_16813_16836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (1)))
{var state_16811__$1 = state_16811;var statearr_16814_16837 = state_16811__$1;(statearr_16814_16837[(2)] = null);
(statearr_16814_16837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (4)))
{var inst_16790 = (state_16811[(7)]);var inst_16790__$1 = (state_16811[(2)]);var inst_16791 = (inst_16790__$1 == null);var state_16811__$1 = (function (){var statearr_16815 = state_16811;(statearr_16815[(7)] = inst_16790__$1);
return statearr_16815;
})();if(cljs.core.truth_(inst_16791))
{var statearr_16816_16838 = state_16811__$1;(statearr_16816_16838[(1)] = (5));
} else
{var statearr_16817_16839 = state_16811__$1;(statearr_16817_16839[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (13)))
{var state_16811__$1 = state_16811;var statearr_16818_16840 = state_16811__$1;(statearr_16818_16840[(2)] = null);
(statearr_16818_16840[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (6)))
{var inst_16790 = (state_16811[(7)]);var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16811__$1,(11),to,inst_16790);
} else
{if((state_val_16812 === (3)))
{var inst_16809 = (state_16811[(2)]);var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16811__$1,inst_16809);
} else
{if((state_val_16812 === (12)))
{var state_16811__$1 = state_16811;var statearr_16819_16841 = state_16811__$1;(statearr_16819_16841[(2)] = null);
(statearr_16819_16841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (2)))
{var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,(4),from);
} else
{if((state_val_16812 === (11)))
{var inst_16800 = (state_16811[(2)]);var state_16811__$1 = state_16811;if(cljs.core.truth_(inst_16800))
{var statearr_16820_16842 = state_16811__$1;(statearr_16820_16842[(1)] = (12));
} else
{var statearr_16821_16843 = state_16811__$1;(statearr_16821_16843[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (9)))
{var state_16811__$1 = state_16811;var statearr_16822_16844 = state_16811__$1;(statearr_16822_16844[(2)] = null);
(statearr_16822_16844[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (5)))
{var state_16811__$1 = state_16811;if(cljs.core.truth_(close_QMARK_))
{var statearr_16823_16845 = state_16811__$1;(statearr_16823_16845[(1)] = (8));
} else
{var statearr_16824_16846 = state_16811__$1;(statearr_16824_16846[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (14)))
{var inst_16805 = (state_16811[(2)]);var state_16811__$1 = state_16811;var statearr_16825_16847 = state_16811__$1;(statearr_16825_16847[(2)] = inst_16805);
(statearr_16825_16847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (10)))
{var inst_16797 = (state_16811[(2)]);var state_16811__$1 = state_16811;var statearr_16826_16848 = state_16811__$1;(statearr_16826_16848[(2)] = inst_16797);
(statearr_16826_16848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16812 === (8)))
{var inst_16794 = cljs.core.async.close_BANG_.call(null,to);var state_16811__$1 = state_16811;var statearr_16827_16849 = state_16811__$1;(statearr_16827_16849[(2)] = inst_16794);
(statearr_16827_16849[(1)] = (10));
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
});})(c__13739__auto___16835))
;return ((function (switch__13724__auto__,c__13739__auto___16835){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_16831 = [null,null,null,null,null,null,null,null];(statearr_16831[(0)] = state_machine__13725__auto__);
(statearr_16831[(1)] = (1));
return statearr_16831;
});
var state_machine__13725__auto____1 = (function (state_16811){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_16811);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e16832){if((e16832 instanceof Object))
{var ex__13728__auto__ = e16832;var statearr_16833_16850 = state_16811;(statearr_16833_16850[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16851 = state_16811;
state_16811 = G__16851;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___16835))
})();var state__13741__auto__ = (function (){var statearr_16834 = f__13740__auto__.call(null);(statearr_16834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___16835);
return statearr_16834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___16835))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13739__auto___16952 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___16952,tc,fc){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___16952,tc,fc){
return (function (state_16927){var state_val_16928 = (state_16927[(1)]);if((state_val_16928 === (7)))
{var inst_16923 = (state_16927[(2)]);var state_16927__$1 = state_16927;var statearr_16929_16953 = state_16927__$1;(statearr_16929_16953[(2)] = inst_16923);
(statearr_16929_16953[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (1)))
{var state_16927__$1 = state_16927;var statearr_16930_16954 = state_16927__$1;(statearr_16930_16954[(2)] = null);
(statearr_16930_16954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (4)))
{var inst_16904 = (state_16927[(7)]);var inst_16904__$1 = (state_16927[(2)]);var inst_16905 = (inst_16904__$1 == null);var state_16927__$1 = (function (){var statearr_16931 = state_16927;(statearr_16931[(7)] = inst_16904__$1);
return statearr_16931;
})();if(cljs.core.truth_(inst_16905))
{var statearr_16932_16955 = state_16927__$1;(statearr_16932_16955[(1)] = (5));
} else
{var statearr_16933_16956 = state_16927__$1;(statearr_16933_16956[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (13)))
{var state_16927__$1 = state_16927;var statearr_16934_16957 = state_16927__$1;(statearr_16934_16957[(2)] = null);
(statearr_16934_16957[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (6)))
{var inst_16904 = (state_16927[(7)]);var inst_16910 = p.call(null,inst_16904);var state_16927__$1 = state_16927;if(cljs.core.truth_(inst_16910))
{var statearr_16935_16958 = state_16927__$1;(statearr_16935_16958[(1)] = (9));
} else
{var statearr_16936_16959 = state_16927__$1;(statearr_16936_16959[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (3)))
{var inst_16925 = (state_16927[(2)]);var state_16927__$1 = state_16927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16927__$1,inst_16925);
} else
{if((state_val_16928 === (12)))
{var state_16927__$1 = state_16927;var statearr_16937_16960 = state_16927__$1;(statearr_16937_16960[(2)] = null);
(statearr_16937_16960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (2)))
{var state_16927__$1 = state_16927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16927__$1,(4),ch);
} else
{if((state_val_16928 === (11)))
{var inst_16904 = (state_16927[(7)]);var inst_16914 = (state_16927[(2)]);var state_16927__$1 = state_16927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16927__$1,(8),inst_16914,inst_16904);
} else
{if((state_val_16928 === (9)))
{var state_16927__$1 = state_16927;var statearr_16938_16961 = state_16927__$1;(statearr_16938_16961[(2)] = tc);
(statearr_16938_16961[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (5)))
{var inst_16907 = cljs.core.async.close_BANG_.call(null,tc);var inst_16908 = cljs.core.async.close_BANG_.call(null,fc);var state_16927__$1 = (function (){var statearr_16939 = state_16927;(statearr_16939[(8)] = inst_16907);
return statearr_16939;
})();var statearr_16940_16962 = state_16927__$1;(statearr_16940_16962[(2)] = inst_16908);
(statearr_16940_16962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (14)))
{var inst_16921 = (state_16927[(2)]);var state_16927__$1 = state_16927;var statearr_16941_16963 = state_16927__$1;(statearr_16941_16963[(2)] = inst_16921);
(statearr_16941_16963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (10)))
{var state_16927__$1 = state_16927;var statearr_16942_16964 = state_16927__$1;(statearr_16942_16964[(2)] = fc);
(statearr_16942_16964[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16928 === (8)))
{var inst_16916 = (state_16927[(2)]);var state_16927__$1 = state_16927;if(cljs.core.truth_(inst_16916))
{var statearr_16943_16965 = state_16927__$1;(statearr_16943_16965[(1)] = (12));
} else
{var statearr_16944_16966 = state_16927__$1;(statearr_16944_16966[(1)] = (13));
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
});})(c__13739__auto___16952,tc,fc))
;return ((function (switch__13724__auto__,c__13739__auto___16952,tc,fc){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_16948 = [null,null,null,null,null,null,null,null,null];(statearr_16948[(0)] = state_machine__13725__auto__);
(statearr_16948[(1)] = (1));
return statearr_16948;
});
var state_machine__13725__auto____1 = (function (state_16927){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_16927);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e16949){if((e16949 instanceof Object))
{var ex__13728__auto__ = e16949;var statearr_16950_16967 = state_16927;(statearr_16950_16967[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16949;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16968 = state_16927;
state_16927 = G__16968;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_16927){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_16927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___16952,tc,fc))
})();var state__13741__auto__ = (function (){var statearr_16951 = f__13740__auto__.call(null);(statearr_16951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___16952);
return statearr_16951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___16952,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13739__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto__){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto__){
return (function (state_17015){var state_val_17016 = (state_17015[(1)]);if((state_val_17016 === (7)))
{var inst_17011 = (state_17015[(2)]);var state_17015__$1 = state_17015;var statearr_17017_17033 = state_17015__$1;(statearr_17017_17033[(2)] = inst_17011);
(statearr_17017_17033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17016 === (6)))
{var inst_17001 = (state_17015[(7)]);var inst_17004 = (state_17015[(8)]);var inst_17008 = f.call(null,inst_17001,inst_17004);var inst_17001__$1 = inst_17008;var state_17015__$1 = (function (){var statearr_17018 = state_17015;(statearr_17018[(7)] = inst_17001__$1);
return statearr_17018;
})();var statearr_17019_17034 = state_17015__$1;(statearr_17019_17034[(2)] = null);
(statearr_17019_17034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17016 === (5)))
{var inst_17001 = (state_17015[(7)]);var state_17015__$1 = state_17015;var statearr_17020_17035 = state_17015__$1;(statearr_17020_17035[(2)] = inst_17001);
(statearr_17020_17035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17016 === (4)))
{var inst_17004 = (state_17015[(8)]);var inst_17004__$1 = (state_17015[(2)]);var inst_17005 = (inst_17004__$1 == null);var state_17015__$1 = (function (){var statearr_17021 = state_17015;(statearr_17021[(8)] = inst_17004__$1);
return statearr_17021;
})();if(cljs.core.truth_(inst_17005))
{var statearr_17022_17036 = state_17015__$1;(statearr_17022_17036[(1)] = (5));
} else
{var statearr_17023_17037 = state_17015__$1;(statearr_17023_17037[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17016 === (3)))
{var inst_17013 = (state_17015[(2)]);var state_17015__$1 = state_17015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17015__$1,inst_17013);
} else
{if((state_val_17016 === (2)))
{var state_17015__$1 = state_17015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17015__$1,(4),ch);
} else
{if((state_val_17016 === (1)))
{var inst_17001 = init;var state_17015__$1 = (function (){var statearr_17024 = state_17015;(statearr_17024[(7)] = inst_17001);
return statearr_17024;
})();var statearr_17025_17038 = state_17015__$1;(statearr_17025_17038[(2)] = null);
(statearr_17025_17038[(1)] = (2));
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
});})(c__13739__auto__))
;return ((function (switch__13724__auto__,c__13739__auto__){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_17029 = [null,null,null,null,null,null,null,null,null];(statearr_17029[(0)] = state_machine__13725__auto__);
(statearr_17029[(1)] = (1));
return statearr_17029;
});
var state_machine__13725__auto____1 = (function (state_17015){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_17015);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e17030){if((e17030 instanceof Object))
{var ex__13728__auto__ = e17030;var statearr_17031_17039 = state_17015;(statearr_17031_17039[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17030;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17040 = state_17015;
state_17015 = G__17040;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_17015){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_17015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto__))
})();var state__13741__auto__ = (function (){var statearr_17032 = f__13740__auto__.call(null);(statearr_17032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto__);
return statearr_17032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto__))
);
return c__13739__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13739__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto__){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto__){
return (function (state_17114){var state_val_17115 = (state_17114[(1)]);if((state_val_17115 === (7)))
{var inst_17096 = (state_17114[(2)]);var state_17114__$1 = state_17114;var statearr_17116_17139 = state_17114__$1;(statearr_17116_17139[(2)] = inst_17096);
(statearr_17116_17139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (1)))
{var inst_17090 = cljs.core.seq.call(null,coll);var inst_17091 = inst_17090;var state_17114__$1 = (function (){var statearr_17117 = state_17114;(statearr_17117[(7)] = inst_17091);
return statearr_17117;
})();var statearr_17118_17140 = state_17114__$1;(statearr_17118_17140[(2)] = null);
(statearr_17118_17140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (4)))
{var inst_17091 = (state_17114[(7)]);var inst_17094 = cljs.core.first.call(null,inst_17091);var state_17114__$1 = state_17114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17114__$1,(7),ch,inst_17094);
} else
{if((state_val_17115 === (13)))
{var inst_17108 = (state_17114[(2)]);var state_17114__$1 = state_17114;var statearr_17119_17141 = state_17114__$1;(statearr_17119_17141[(2)] = inst_17108);
(statearr_17119_17141[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (6)))
{var inst_17099 = (state_17114[(2)]);var state_17114__$1 = state_17114;if(cljs.core.truth_(inst_17099))
{var statearr_17120_17142 = state_17114__$1;(statearr_17120_17142[(1)] = (8));
} else
{var statearr_17121_17143 = state_17114__$1;(statearr_17121_17143[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (3)))
{var inst_17112 = (state_17114[(2)]);var state_17114__$1 = state_17114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17114__$1,inst_17112);
} else
{if((state_val_17115 === (12)))
{var state_17114__$1 = state_17114;var statearr_17122_17144 = state_17114__$1;(statearr_17122_17144[(2)] = null);
(statearr_17122_17144[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (2)))
{var inst_17091 = (state_17114[(7)]);var state_17114__$1 = state_17114;if(cljs.core.truth_(inst_17091))
{var statearr_17123_17145 = state_17114__$1;(statearr_17123_17145[(1)] = (4));
} else
{var statearr_17124_17146 = state_17114__$1;(statearr_17124_17146[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (11)))
{var inst_17105 = cljs.core.async.close_BANG_.call(null,ch);var state_17114__$1 = state_17114;var statearr_17125_17147 = state_17114__$1;(statearr_17125_17147[(2)] = inst_17105);
(statearr_17125_17147[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (9)))
{var state_17114__$1 = state_17114;if(cljs.core.truth_(close_QMARK_))
{var statearr_17126_17148 = state_17114__$1;(statearr_17126_17148[(1)] = (11));
} else
{var statearr_17127_17149 = state_17114__$1;(statearr_17127_17149[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (5)))
{var inst_17091 = (state_17114[(7)]);var state_17114__$1 = state_17114;var statearr_17128_17150 = state_17114__$1;(statearr_17128_17150[(2)] = inst_17091);
(statearr_17128_17150[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (10)))
{var inst_17110 = (state_17114[(2)]);var state_17114__$1 = state_17114;var statearr_17129_17151 = state_17114__$1;(statearr_17129_17151[(2)] = inst_17110);
(statearr_17129_17151[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17115 === (8)))
{var inst_17091 = (state_17114[(7)]);var inst_17101 = cljs.core.next.call(null,inst_17091);var inst_17091__$1 = inst_17101;var state_17114__$1 = (function (){var statearr_17130 = state_17114;(statearr_17130[(7)] = inst_17091__$1);
return statearr_17130;
})();var statearr_17131_17152 = state_17114__$1;(statearr_17131_17152[(2)] = null);
(statearr_17131_17152[(1)] = (2));
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
});})(c__13739__auto__))
;return ((function (switch__13724__auto__,c__13739__auto__){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_17135 = [null,null,null,null,null,null,null,null];(statearr_17135[(0)] = state_machine__13725__auto__);
(statearr_17135[(1)] = (1));
return statearr_17135;
});
var state_machine__13725__auto____1 = (function (state_17114){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_17114);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e17136){if((e17136 instanceof Object))
{var ex__13728__auto__ = e17136;var statearr_17137_17153 = state_17114;(statearr_17137_17153[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17154 = state_17114;
state_17114 = G__17154;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_17114){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_17114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto__))
})();var state__13741__auto__ = (function (){var statearr_17138 = f__13740__auto__.call(null);(statearr_17138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto__);
return statearr_17138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto__))
);
return c__13739__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17156 = {};return obj17156;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11382__auto__ = _;if(and__11382__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11382__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12021__auto__ = (((_ == null))?null:_);return (function (){var or__11394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17158 = {};return obj17158;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17380 = (function (cs,ch,mult,meta17381){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17381 = meta17381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17380.cljs$lang$type = true;
cljs.core.async.t17380.cljs$lang$ctorStr = "cljs.core.async/t17380";
cljs.core.async.t17380.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t17380");
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17382){var self__ = this;
var _17382__$1 = this;return self__.meta17381;
});})(cs))
;
cljs.core.async.t17380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17382,meta17381__$1){var self__ = this;
var _17382__$1 = this;return (new cljs.core.async.t17380(self__.cs,self__.ch,self__.mult,meta17381__$1));
});})(cs))
;
cljs.core.async.__GT_t17380 = ((function (cs){
return (function __GT_t17380(cs__$1,ch__$1,mult__$1,meta17381){return (new cljs.core.async.t17380(cs__$1,ch__$1,mult__$1,meta17381));
});})(cs))
;
}
return (new cljs.core.async.t17380(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13739__auto___17601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___17601,cs,m,dchan,dctr,done){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___17601,cs,m,dchan,dctr,done){
return (function (state_17513){var state_val_17514 = (state_17513[(1)]);if((state_val_17514 === (7)))
{var inst_17509 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17515_17602 = state_17513__$1;(statearr_17515_17602[(2)] = inst_17509);
(statearr_17515_17602[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (20)))
{var inst_17414 = (state_17513[(7)]);var inst_17424 = cljs.core.first.call(null,inst_17414);var inst_17425 = cljs.core.nth.call(null,inst_17424,(0),null);var inst_17426 = cljs.core.nth.call(null,inst_17424,(1),null);var state_17513__$1 = (function (){var statearr_17516 = state_17513;(statearr_17516[(8)] = inst_17425);
return statearr_17516;
})();if(cljs.core.truth_(inst_17426))
{var statearr_17517_17603 = state_17513__$1;(statearr_17517_17603[(1)] = (22));
} else
{var statearr_17518_17604 = state_17513__$1;(statearr_17518_17604[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (27)))
{var inst_17385 = (state_17513[(9)]);var inst_17461 = (state_17513[(10)]);var inst_17456 = (state_17513[(11)]);var inst_17454 = (state_17513[(12)]);var inst_17461__$1 = cljs.core._nth.call(null,inst_17454,inst_17456);var inst_17462 = cljs.core.async.put_BANG_.call(null,inst_17461__$1,inst_17385,done);var state_17513__$1 = (function (){var statearr_17519 = state_17513;(statearr_17519[(10)] = inst_17461__$1);
return statearr_17519;
})();if(cljs.core.truth_(inst_17462))
{var statearr_17520_17605 = state_17513__$1;(statearr_17520_17605[(1)] = (30));
} else
{var statearr_17521_17606 = state_17513__$1;(statearr_17521_17606[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (1)))
{var state_17513__$1 = state_17513;var statearr_17522_17607 = state_17513__$1;(statearr_17522_17607[(2)] = null);
(statearr_17522_17607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (24)))
{var inst_17414 = (state_17513[(7)]);var inst_17431 = (state_17513[(2)]);var inst_17432 = cljs.core.next.call(null,inst_17414);var inst_17394 = inst_17432;var inst_17395 = null;var inst_17396 = (0);var inst_17397 = (0);var state_17513__$1 = (function (){var statearr_17523 = state_17513;(statearr_17523[(13)] = inst_17397);
(statearr_17523[(14)] = inst_17395);
(statearr_17523[(15)] = inst_17394);
(statearr_17523[(16)] = inst_17396);
(statearr_17523[(17)] = inst_17431);
return statearr_17523;
})();var statearr_17524_17608 = state_17513__$1;(statearr_17524_17608[(2)] = null);
(statearr_17524_17608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (39)))
{var state_17513__$1 = state_17513;var statearr_17528_17609 = state_17513__$1;(statearr_17528_17609[(2)] = null);
(statearr_17528_17609[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (4)))
{var inst_17385 = (state_17513[(9)]);var inst_17385__$1 = (state_17513[(2)]);var inst_17386 = (inst_17385__$1 == null);var state_17513__$1 = (function (){var statearr_17529 = state_17513;(statearr_17529[(9)] = inst_17385__$1);
return statearr_17529;
})();if(cljs.core.truth_(inst_17386))
{var statearr_17530_17610 = state_17513__$1;(statearr_17530_17610[(1)] = (5));
} else
{var statearr_17531_17611 = state_17513__$1;(statearr_17531_17611[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (15)))
{var inst_17397 = (state_17513[(13)]);var inst_17395 = (state_17513[(14)]);var inst_17394 = (state_17513[(15)]);var inst_17396 = (state_17513[(16)]);var inst_17410 = (state_17513[(2)]);var inst_17411 = (inst_17397 + (1));var tmp17525 = inst_17395;var tmp17526 = inst_17394;var tmp17527 = inst_17396;var inst_17394__$1 = tmp17526;var inst_17395__$1 = tmp17525;var inst_17396__$1 = tmp17527;var inst_17397__$1 = inst_17411;var state_17513__$1 = (function (){var statearr_17532 = state_17513;(statearr_17532[(13)] = inst_17397__$1);
(statearr_17532[(14)] = inst_17395__$1);
(statearr_17532[(18)] = inst_17410);
(statearr_17532[(15)] = inst_17394__$1);
(statearr_17532[(16)] = inst_17396__$1);
return statearr_17532;
})();var statearr_17533_17612 = state_17513__$1;(statearr_17533_17612[(2)] = null);
(statearr_17533_17612[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (21)))
{var inst_17435 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17537_17613 = state_17513__$1;(statearr_17537_17613[(2)] = inst_17435);
(statearr_17537_17613[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (31)))
{var inst_17461 = (state_17513[(10)]);var inst_17465 = done.call(null,null);var inst_17466 = cljs.core.async.untap_STAR_.call(null,m,inst_17461);var state_17513__$1 = (function (){var statearr_17538 = state_17513;(statearr_17538[(19)] = inst_17465);
return statearr_17538;
})();var statearr_17539_17614 = state_17513__$1;(statearr_17539_17614[(2)] = inst_17466);
(statearr_17539_17614[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (32)))
{var inst_17456 = (state_17513[(11)]);var inst_17453 = (state_17513[(20)]);var inst_17455 = (state_17513[(21)]);var inst_17454 = (state_17513[(12)]);var inst_17468 = (state_17513[(2)]);var inst_17469 = (inst_17456 + (1));var tmp17534 = inst_17453;var tmp17535 = inst_17455;var tmp17536 = inst_17454;var inst_17453__$1 = tmp17534;var inst_17454__$1 = tmp17536;var inst_17455__$1 = tmp17535;var inst_17456__$1 = inst_17469;var state_17513__$1 = (function (){var statearr_17540 = state_17513;(statearr_17540[(11)] = inst_17456__$1);
(statearr_17540[(20)] = inst_17453__$1);
(statearr_17540[(21)] = inst_17455__$1);
(statearr_17540[(22)] = inst_17468);
(statearr_17540[(12)] = inst_17454__$1);
return statearr_17540;
})();var statearr_17541_17615 = state_17513__$1;(statearr_17541_17615[(2)] = null);
(statearr_17541_17615[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (40)))
{var inst_17481 = (state_17513[(23)]);var inst_17485 = done.call(null,null);var inst_17486 = cljs.core.async.untap_STAR_.call(null,m,inst_17481);var state_17513__$1 = (function (){var statearr_17542 = state_17513;(statearr_17542[(24)] = inst_17485);
return statearr_17542;
})();var statearr_17543_17616 = state_17513__$1;(statearr_17543_17616[(2)] = inst_17486);
(statearr_17543_17616[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (33)))
{var inst_17472 = (state_17513[(25)]);var inst_17474 = cljs.core.chunked_seq_QMARK_.call(null,inst_17472);var state_17513__$1 = state_17513;if(inst_17474)
{var statearr_17544_17617 = state_17513__$1;(statearr_17544_17617[(1)] = (36));
} else
{var statearr_17545_17618 = state_17513__$1;(statearr_17545_17618[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (13)))
{var inst_17404 = (state_17513[(26)]);var inst_17407 = cljs.core.async.close_BANG_.call(null,inst_17404);var state_17513__$1 = state_17513;var statearr_17546_17619 = state_17513__$1;(statearr_17546_17619[(2)] = inst_17407);
(statearr_17546_17619[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (22)))
{var inst_17425 = (state_17513[(8)]);var inst_17428 = cljs.core.async.close_BANG_.call(null,inst_17425);var state_17513__$1 = state_17513;var statearr_17547_17620 = state_17513__$1;(statearr_17547_17620[(2)] = inst_17428);
(statearr_17547_17620[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (36)))
{var inst_17472 = (state_17513[(25)]);var inst_17476 = cljs.core.chunk_first.call(null,inst_17472);var inst_17477 = cljs.core.chunk_rest.call(null,inst_17472);var inst_17478 = cljs.core.count.call(null,inst_17476);var inst_17453 = inst_17477;var inst_17454 = inst_17476;var inst_17455 = inst_17478;var inst_17456 = (0);var state_17513__$1 = (function (){var statearr_17548 = state_17513;(statearr_17548[(11)] = inst_17456);
(statearr_17548[(20)] = inst_17453);
(statearr_17548[(21)] = inst_17455);
(statearr_17548[(12)] = inst_17454);
return statearr_17548;
})();var statearr_17549_17621 = state_17513__$1;(statearr_17549_17621[(2)] = null);
(statearr_17549_17621[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (41)))
{var inst_17472 = (state_17513[(25)]);var inst_17488 = (state_17513[(2)]);var inst_17489 = cljs.core.next.call(null,inst_17472);var inst_17453 = inst_17489;var inst_17454 = null;var inst_17455 = (0);var inst_17456 = (0);var state_17513__$1 = (function (){var statearr_17550 = state_17513;(statearr_17550[(11)] = inst_17456);
(statearr_17550[(20)] = inst_17453);
(statearr_17550[(27)] = inst_17488);
(statearr_17550[(21)] = inst_17455);
(statearr_17550[(12)] = inst_17454);
return statearr_17550;
})();var statearr_17551_17622 = state_17513__$1;(statearr_17551_17622[(2)] = null);
(statearr_17551_17622[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (43)))
{var state_17513__$1 = state_17513;var statearr_17552_17623 = state_17513__$1;(statearr_17552_17623[(2)] = null);
(statearr_17552_17623[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (29)))
{var inst_17497 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17553_17624 = state_17513__$1;(statearr_17553_17624[(2)] = inst_17497);
(statearr_17553_17624[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (44)))
{var inst_17506 = (state_17513[(2)]);var state_17513__$1 = (function (){var statearr_17554 = state_17513;(statearr_17554[(28)] = inst_17506);
return statearr_17554;
})();var statearr_17555_17625 = state_17513__$1;(statearr_17555_17625[(2)] = null);
(statearr_17555_17625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (6)))
{var inst_17445 = (state_17513[(29)]);var inst_17444 = cljs.core.deref.call(null,cs);var inst_17445__$1 = cljs.core.keys.call(null,inst_17444);var inst_17446 = cljs.core.count.call(null,inst_17445__$1);var inst_17447 = cljs.core.reset_BANG_.call(null,dctr,inst_17446);var inst_17452 = cljs.core.seq.call(null,inst_17445__$1);var inst_17453 = inst_17452;var inst_17454 = null;var inst_17455 = (0);var inst_17456 = (0);var state_17513__$1 = (function (){var statearr_17556 = state_17513;(statearr_17556[(30)] = inst_17447);
(statearr_17556[(11)] = inst_17456);
(statearr_17556[(20)] = inst_17453);
(statearr_17556[(29)] = inst_17445__$1);
(statearr_17556[(21)] = inst_17455);
(statearr_17556[(12)] = inst_17454);
return statearr_17556;
})();var statearr_17557_17626 = state_17513__$1;(statearr_17557_17626[(2)] = null);
(statearr_17557_17626[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (28)))
{var inst_17453 = (state_17513[(20)]);var inst_17472 = (state_17513[(25)]);var inst_17472__$1 = cljs.core.seq.call(null,inst_17453);var state_17513__$1 = (function (){var statearr_17558 = state_17513;(statearr_17558[(25)] = inst_17472__$1);
return statearr_17558;
})();if(inst_17472__$1)
{var statearr_17559_17627 = state_17513__$1;(statearr_17559_17627[(1)] = (33));
} else
{var statearr_17560_17628 = state_17513__$1;(statearr_17560_17628[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (25)))
{var inst_17456 = (state_17513[(11)]);var inst_17455 = (state_17513[(21)]);var inst_17458 = (inst_17456 < inst_17455);var inst_17459 = inst_17458;var state_17513__$1 = state_17513;if(cljs.core.truth_(inst_17459))
{var statearr_17561_17629 = state_17513__$1;(statearr_17561_17629[(1)] = (27));
} else
{var statearr_17562_17630 = state_17513__$1;(statearr_17562_17630[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (34)))
{var state_17513__$1 = state_17513;var statearr_17563_17631 = state_17513__$1;(statearr_17563_17631[(2)] = null);
(statearr_17563_17631[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (17)))
{var state_17513__$1 = state_17513;var statearr_17564_17632 = state_17513__$1;(statearr_17564_17632[(2)] = null);
(statearr_17564_17632[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (3)))
{var inst_17511 = (state_17513[(2)]);var state_17513__$1 = state_17513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17513__$1,inst_17511);
} else
{if((state_val_17514 === (12)))
{var inst_17440 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17565_17633 = state_17513__$1;(statearr_17565_17633[(2)] = inst_17440);
(statearr_17565_17633[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (2)))
{var state_17513__$1 = state_17513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17513__$1,(4),ch);
} else
{if((state_val_17514 === (23)))
{var state_17513__$1 = state_17513;var statearr_17566_17634 = state_17513__$1;(statearr_17566_17634[(2)] = null);
(statearr_17566_17634[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (35)))
{var inst_17495 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17567_17635 = state_17513__$1;(statearr_17567_17635[(2)] = inst_17495);
(statearr_17567_17635[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (19)))
{var inst_17414 = (state_17513[(7)]);var inst_17418 = cljs.core.chunk_first.call(null,inst_17414);var inst_17419 = cljs.core.chunk_rest.call(null,inst_17414);var inst_17420 = cljs.core.count.call(null,inst_17418);var inst_17394 = inst_17419;var inst_17395 = inst_17418;var inst_17396 = inst_17420;var inst_17397 = (0);var state_17513__$1 = (function (){var statearr_17568 = state_17513;(statearr_17568[(13)] = inst_17397);
(statearr_17568[(14)] = inst_17395);
(statearr_17568[(15)] = inst_17394);
(statearr_17568[(16)] = inst_17396);
return statearr_17568;
})();var statearr_17569_17636 = state_17513__$1;(statearr_17569_17636[(2)] = null);
(statearr_17569_17636[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (11)))
{var inst_17414 = (state_17513[(7)]);var inst_17394 = (state_17513[(15)]);var inst_17414__$1 = cljs.core.seq.call(null,inst_17394);var state_17513__$1 = (function (){var statearr_17570 = state_17513;(statearr_17570[(7)] = inst_17414__$1);
return statearr_17570;
})();if(inst_17414__$1)
{var statearr_17571_17637 = state_17513__$1;(statearr_17571_17637[(1)] = (16));
} else
{var statearr_17572_17638 = state_17513__$1;(statearr_17572_17638[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (9)))
{var inst_17442 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17573_17639 = state_17513__$1;(statearr_17573_17639[(2)] = inst_17442);
(statearr_17573_17639[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (5)))
{var inst_17392 = cljs.core.deref.call(null,cs);var inst_17393 = cljs.core.seq.call(null,inst_17392);var inst_17394 = inst_17393;var inst_17395 = null;var inst_17396 = (0);var inst_17397 = (0);var state_17513__$1 = (function (){var statearr_17574 = state_17513;(statearr_17574[(13)] = inst_17397);
(statearr_17574[(14)] = inst_17395);
(statearr_17574[(15)] = inst_17394);
(statearr_17574[(16)] = inst_17396);
return statearr_17574;
})();var statearr_17575_17640 = state_17513__$1;(statearr_17575_17640[(2)] = null);
(statearr_17575_17640[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (14)))
{var state_17513__$1 = state_17513;var statearr_17576_17641 = state_17513__$1;(statearr_17576_17641[(2)] = null);
(statearr_17576_17641[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (45)))
{var inst_17503 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17577_17642 = state_17513__$1;(statearr_17577_17642[(2)] = inst_17503);
(statearr_17577_17642[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (26)))
{var inst_17445 = (state_17513[(29)]);var inst_17499 = (state_17513[(2)]);var inst_17500 = cljs.core.seq.call(null,inst_17445);var state_17513__$1 = (function (){var statearr_17578 = state_17513;(statearr_17578[(31)] = inst_17499);
return statearr_17578;
})();if(inst_17500)
{var statearr_17579_17643 = state_17513__$1;(statearr_17579_17643[(1)] = (42));
} else
{var statearr_17580_17644 = state_17513__$1;(statearr_17580_17644[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (16)))
{var inst_17414 = (state_17513[(7)]);var inst_17416 = cljs.core.chunked_seq_QMARK_.call(null,inst_17414);var state_17513__$1 = state_17513;if(inst_17416)
{var statearr_17581_17645 = state_17513__$1;(statearr_17581_17645[(1)] = (19));
} else
{var statearr_17582_17646 = state_17513__$1;(statearr_17582_17646[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (38)))
{var inst_17492 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17583_17647 = state_17513__$1;(statearr_17583_17647[(2)] = inst_17492);
(statearr_17583_17647[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (30)))
{var state_17513__$1 = state_17513;var statearr_17584_17648 = state_17513__$1;(statearr_17584_17648[(2)] = null);
(statearr_17584_17648[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (10)))
{var inst_17397 = (state_17513[(13)]);var inst_17395 = (state_17513[(14)]);var inst_17403 = cljs.core._nth.call(null,inst_17395,inst_17397);var inst_17404 = cljs.core.nth.call(null,inst_17403,(0),null);var inst_17405 = cljs.core.nth.call(null,inst_17403,(1),null);var state_17513__$1 = (function (){var statearr_17585 = state_17513;(statearr_17585[(26)] = inst_17404);
return statearr_17585;
})();if(cljs.core.truth_(inst_17405))
{var statearr_17586_17649 = state_17513__$1;(statearr_17586_17649[(1)] = (13));
} else
{var statearr_17587_17650 = state_17513__$1;(statearr_17587_17650[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (18)))
{var inst_17438 = (state_17513[(2)]);var state_17513__$1 = state_17513;var statearr_17588_17651 = state_17513__$1;(statearr_17588_17651[(2)] = inst_17438);
(statearr_17588_17651[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (42)))
{var state_17513__$1 = state_17513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17513__$1,(45),dchan);
} else
{if((state_val_17514 === (37)))
{var inst_17481 = (state_17513[(23)]);var inst_17385 = (state_17513[(9)]);var inst_17472 = (state_17513[(25)]);var inst_17481__$1 = cljs.core.first.call(null,inst_17472);var inst_17482 = cljs.core.async.put_BANG_.call(null,inst_17481__$1,inst_17385,done);var state_17513__$1 = (function (){var statearr_17589 = state_17513;(statearr_17589[(23)] = inst_17481__$1);
return statearr_17589;
})();if(cljs.core.truth_(inst_17482))
{var statearr_17590_17652 = state_17513__$1;(statearr_17590_17652[(1)] = (39));
} else
{var statearr_17591_17653 = state_17513__$1;(statearr_17591_17653[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17514 === (8)))
{var inst_17397 = (state_17513[(13)]);var inst_17396 = (state_17513[(16)]);var inst_17399 = (inst_17397 < inst_17396);var inst_17400 = inst_17399;var state_17513__$1 = state_17513;if(cljs.core.truth_(inst_17400))
{var statearr_17592_17654 = state_17513__$1;(statearr_17592_17654[(1)] = (10));
} else
{var statearr_17593_17655 = state_17513__$1;(statearr_17593_17655[(1)] = (11));
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
}
}
}
});})(c__13739__auto___17601,cs,m,dchan,dctr,done))
;return ((function (switch__13724__auto__,c__13739__auto___17601,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_17597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17597[(0)] = state_machine__13725__auto__);
(statearr_17597[(1)] = (1));
return statearr_17597;
});
var state_machine__13725__auto____1 = (function (state_17513){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_17513);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e17598){if((e17598 instanceof Object))
{var ex__13728__auto__ = e17598;var statearr_17599_17656 = state_17513;(statearr_17599_17656[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17598;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17657 = state_17513;
state_17513 = G__17657;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___17601,cs,m,dchan,dctr,done))
})();var state__13741__auto__ = (function (){var statearr_17600 = f__13740__auto__.call(null);(statearr_17600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___17601);
return statearr_17600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___17601,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17659 = {};return obj17659;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11382__auto__ = m;if(and__11382__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12021__auto__ = (((m == null))?null:m);return (function (){var or__11394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17779 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17779 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17780){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17780 = meta17780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17779.cljs$lang$type = true;
cljs.core.async.t17779.cljs$lang$ctorStr = "cljs.core.async/t17779";
cljs.core.async.t17779.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t17779");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17781){var self__ = this;
var _17781__$1 = this;return self__.meta17780;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17781,meta17780__$1){var self__ = this;
var _17781__$1 = this;return (new cljs.core.async.t17779(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17780__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17779 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17779(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17780){return (new cljs.core.async.t17779(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17780));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17779(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13739__auto___17898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17851){var state_val_17852 = (state_17851[(1)]);if((state_val_17852 === (7)))
{var inst_17795 = (state_17851[(7)]);var inst_17800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17795);var state_17851__$1 = state_17851;var statearr_17853_17899 = state_17851__$1;(statearr_17853_17899[(2)] = inst_17800);
(statearr_17853_17899[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (20)))
{var inst_17810 = (state_17851[(8)]);var state_17851__$1 = state_17851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17851__$1,(23),out,inst_17810);
} else
{if((state_val_17852 === (1)))
{var inst_17785 = (state_17851[(9)]);var inst_17785__$1 = calc_state.call(null);var inst_17786 = cljs.core.seq_QMARK_.call(null,inst_17785__$1);var state_17851__$1 = (function (){var statearr_17854 = state_17851;(statearr_17854[(9)] = inst_17785__$1);
return statearr_17854;
})();if(inst_17786)
{var statearr_17855_17900 = state_17851__$1;(statearr_17855_17900[(1)] = (2));
} else
{var statearr_17856_17901 = state_17851__$1;(statearr_17856_17901[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (24)))
{var inst_17803 = (state_17851[(10)]);var inst_17795 = inst_17803;var state_17851__$1 = (function (){var statearr_17857 = state_17851;(statearr_17857[(7)] = inst_17795);
return statearr_17857;
})();var statearr_17858_17902 = state_17851__$1;(statearr_17858_17902[(2)] = null);
(statearr_17858_17902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (4)))
{var inst_17785 = (state_17851[(9)]);var inst_17791 = (state_17851[(2)]);var inst_17792 = cljs.core.get.call(null,inst_17791,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17793 = cljs.core.get.call(null,inst_17791,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17794 = cljs.core.get.call(null,inst_17791,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17795 = inst_17785;var state_17851__$1 = (function (){var statearr_17859 = state_17851;(statearr_17859[(11)] = inst_17794);
(statearr_17859[(12)] = inst_17792);
(statearr_17859[(13)] = inst_17793);
(statearr_17859[(7)] = inst_17795);
return statearr_17859;
})();var statearr_17860_17903 = state_17851__$1;(statearr_17860_17903[(2)] = null);
(statearr_17860_17903[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (15)))
{var state_17851__$1 = state_17851;var statearr_17861_17904 = state_17851__$1;(statearr_17861_17904[(2)] = null);
(statearr_17861_17904[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (21)))
{var inst_17803 = (state_17851[(10)]);var inst_17795 = inst_17803;var state_17851__$1 = (function (){var statearr_17862 = state_17851;(statearr_17862[(7)] = inst_17795);
return statearr_17862;
})();var statearr_17863_17905 = state_17851__$1;(statearr_17863_17905[(2)] = null);
(statearr_17863_17905[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (13)))
{var inst_17847 = (state_17851[(2)]);var state_17851__$1 = state_17851;var statearr_17864_17906 = state_17851__$1;(statearr_17864_17906[(2)] = inst_17847);
(statearr_17864_17906[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (22)))
{var inst_17845 = (state_17851[(2)]);var state_17851__$1 = state_17851;var statearr_17865_17907 = state_17851__$1;(statearr_17865_17907[(2)] = inst_17845);
(statearr_17865_17907[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (6)))
{var inst_17849 = (state_17851[(2)]);var state_17851__$1 = state_17851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17851__$1,inst_17849);
} else
{if((state_val_17852 === (25)))
{var state_17851__$1 = state_17851;var statearr_17866_17908 = state_17851__$1;(statearr_17866_17908[(2)] = null);
(statearr_17866_17908[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (17)))
{var inst_17825 = (state_17851[(14)]);var state_17851__$1 = state_17851;var statearr_17867_17909 = state_17851__$1;(statearr_17867_17909[(2)] = inst_17825);
(statearr_17867_17909[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (3)))
{var inst_17785 = (state_17851[(9)]);var state_17851__$1 = state_17851;var statearr_17868_17910 = state_17851__$1;(statearr_17868_17910[(2)] = inst_17785);
(statearr_17868_17910[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (12)))
{var inst_17806 = (state_17851[(15)]);var inst_17811 = (state_17851[(16)]);var inst_17825 = (state_17851[(14)]);var inst_17825__$1 = inst_17806.call(null,inst_17811);var state_17851__$1 = (function (){var statearr_17869 = state_17851;(statearr_17869[(14)] = inst_17825__$1);
return statearr_17869;
})();if(cljs.core.truth_(inst_17825__$1))
{var statearr_17870_17911 = state_17851__$1;(statearr_17870_17911[(1)] = (17));
} else
{var statearr_17871_17912 = state_17851__$1;(statearr_17871_17912[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (2)))
{var inst_17785 = (state_17851[(9)]);var inst_17788 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17785);var state_17851__$1 = state_17851;var statearr_17872_17913 = state_17851__$1;(statearr_17872_17913[(2)] = inst_17788);
(statearr_17872_17913[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (23)))
{var inst_17836 = (state_17851[(2)]);var state_17851__$1 = state_17851;if(cljs.core.truth_(inst_17836))
{var statearr_17873_17914 = state_17851__$1;(statearr_17873_17914[(1)] = (24));
} else
{var statearr_17874_17915 = state_17851__$1;(statearr_17874_17915[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (19)))
{var inst_17833 = (state_17851[(2)]);var state_17851__$1 = state_17851;if(cljs.core.truth_(inst_17833))
{var statearr_17875_17916 = state_17851__$1;(statearr_17875_17916[(1)] = (20));
} else
{var statearr_17876_17917 = state_17851__$1;(statearr_17876_17917[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (11)))
{var inst_17810 = (state_17851[(8)]);var inst_17816 = (inst_17810 == null);var state_17851__$1 = state_17851;if(cljs.core.truth_(inst_17816))
{var statearr_17877_17918 = state_17851__$1;(statearr_17877_17918[(1)] = (14));
} else
{var statearr_17878_17919 = state_17851__$1;(statearr_17878_17919[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (9)))
{var inst_17803 = (state_17851[(10)]);var inst_17803__$1 = (state_17851[(2)]);var inst_17804 = cljs.core.get.call(null,inst_17803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17805 = cljs.core.get.call(null,inst_17803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17806 = cljs.core.get.call(null,inst_17803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17851__$1 = (function (){var statearr_17879 = state_17851;(statearr_17879[(15)] = inst_17806);
(statearr_17879[(10)] = inst_17803__$1);
(statearr_17879[(17)] = inst_17805);
return statearr_17879;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17851__$1,(10),inst_17804);
} else
{if((state_val_17852 === (5)))
{var inst_17795 = (state_17851[(7)]);var inst_17798 = cljs.core.seq_QMARK_.call(null,inst_17795);var state_17851__$1 = state_17851;if(inst_17798)
{var statearr_17880_17920 = state_17851__$1;(statearr_17880_17920[(1)] = (7));
} else
{var statearr_17881_17921 = state_17851__$1;(statearr_17881_17921[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (14)))
{var inst_17811 = (state_17851[(16)]);var inst_17818 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17811);var state_17851__$1 = state_17851;var statearr_17882_17922 = state_17851__$1;(statearr_17882_17922[(2)] = inst_17818);
(statearr_17882_17922[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (26)))
{var inst_17841 = (state_17851[(2)]);var state_17851__$1 = state_17851;var statearr_17883_17923 = state_17851__$1;(statearr_17883_17923[(2)] = inst_17841);
(statearr_17883_17923[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (16)))
{var inst_17821 = (state_17851[(2)]);var inst_17822 = calc_state.call(null);var inst_17795 = inst_17822;var state_17851__$1 = (function (){var statearr_17884 = state_17851;(statearr_17884[(18)] = inst_17821);
(statearr_17884[(7)] = inst_17795);
return statearr_17884;
})();var statearr_17885_17924 = state_17851__$1;(statearr_17885_17924[(2)] = null);
(statearr_17885_17924[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (10)))
{var inst_17811 = (state_17851[(16)]);var inst_17810 = (state_17851[(8)]);var inst_17809 = (state_17851[(2)]);var inst_17810__$1 = cljs.core.nth.call(null,inst_17809,(0),null);var inst_17811__$1 = cljs.core.nth.call(null,inst_17809,(1),null);var inst_17812 = (inst_17810__$1 == null);var inst_17813 = cljs.core._EQ_.call(null,inst_17811__$1,change);var inst_17814 = (inst_17812) || (inst_17813);var state_17851__$1 = (function (){var statearr_17886 = state_17851;(statearr_17886[(16)] = inst_17811__$1);
(statearr_17886[(8)] = inst_17810__$1);
return statearr_17886;
})();if(cljs.core.truth_(inst_17814))
{var statearr_17887_17925 = state_17851__$1;(statearr_17887_17925[(1)] = (11));
} else
{var statearr_17888_17926 = state_17851__$1;(statearr_17888_17926[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (18)))
{var inst_17806 = (state_17851[(15)]);var inst_17811 = (state_17851[(16)]);var inst_17805 = (state_17851[(17)]);var inst_17828 = cljs.core.empty_QMARK_.call(null,inst_17806);var inst_17829 = inst_17805.call(null,inst_17811);var inst_17830 = cljs.core.not.call(null,inst_17829);var inst_17831 = (inst_17828) && (inst_17830);var state_17851__$1 = state_17851;var statearr_17889_17927 = state_17851__$1;(statearr_17889_17927[(2)] = inst_17831);
(statearr_17889_17927[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17852 === (8)))
{var inst_17795 = (state_17851[(7)]);var state_17851__$1 = state_17851;var statearr_17890_17928 = state_17851__$1;(statearr_17890_17928[(2)] = inst_17795);
(statearr_17890_17928[(1)] = (9));
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
});})(c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13724__auto__,c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_17894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17894[(0)] = state_machine__13725__auto__);
(statearr_17894[(1)] = (1));
return statearr_17894;
});
var state_machine__13725__auto____1 = (function (state_17851){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_17851);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e17895){if((e17895 instanceof Object))
{var ex__13728__auto__ = e17895;var statearr_17896_17929 = state_17851;(statearr_17896_17929[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17930 = state_17851;
state_17851 = G__17930;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_17851){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_17851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13741__auto__ = (function (){var statearr_17897 = f__13740__auto__.call(null);(statearr_17897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___17898);
return statearr_17897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___17898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17932 = {};return obj17932;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11382__auto__ = p;if(and__11382__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11382__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12021__auto__ = (((p == null))?null:p);return (function (){var or__11394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11382__auto__ = p;if(and__11382__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12021__auto__ = (((p == null))?null:p);return (function (){var or__11394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11382__auto__ = p;if(and__11382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12021__auto__ = (((p == null))?null:p);return (function (){var or__11394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11382__auto__ = p;if(and__11382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12021__auto__ = (((p == null))?null:p);return (function (){var or__11394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12021__auto__)]);if(or__11394__auto__)
{return or__11394__auto__;
} else
{var or__11394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11394__auto____$1)
{return or__11394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11394__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11394__auto__))
{return or__11394__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11394__auto__,mults){
return (function (p1__17933_SHARP_){if(cljs.core.truth_(p1__17933_SHARP_.call(null,topic)))
{return p1__17933_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17933_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11394__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18056 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18057){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18057 = meta18057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18056.cljs$lang$type = true;
cljs.core.async.t18056.cljs$lang$ctorStr = "cljs.core.async/t18056";
cljs.core.async.t18056.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t18056");
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18056.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4219__auto__))
{var m = temp__4219__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18058){var self__ = this;
var _18058__$1 = this;return self__.meta18057;
});})(mults,ensure_mult))
;
cljs.core.async.t18056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18058,meta18057__$1){var self__ = this;
var _18058__$1 = this;return (new cljs.core.async.t18056(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18057__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18056 = ((function (mults,ensure_mult){
return (function __GT_t18056(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18057){return (new cljs.core.async.t18056(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18057));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18056(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13739__auto___18178 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___18178,mults,ensure_mult,p){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___18178,mults,ensure_mult,p){
return (function (state_18130){var state_val_18131 = (state_18130[(1)]);if((state_val_18131 === (7)))
{var inst_18126 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18132_18179 = state_18130__$1;(statearr_18132_18179[(2)] = inst_18126);
(statearr_18132_18179[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (20)))
{var state_18130__$1 = state_18130;var statearr_18133_18180 = state_18130__$1;(statearr_18133_18180[(2)] = null);
(statearr_18133_18180[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (1)))
{var state_18130__$1 = state_18130;var statearr_18134_18181 = state_18130__$1;(statearr_18134_18181[(2)] = null);
(statearr_18134_18181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (24)))
{var inst_18109 = (state_18130[(7)]);var inst_18118 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18109);var state_18130__$1 = state_18130;var statearr_18135_18182 = state_18130__$1;(statearr_18135_18182[(2)] = inst_18118);
(statearr_18135_18182[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (4)))
{var inst_18061 = (state_18130[(8)]);var inst_18061__$1 = (state_18130[(2)]);var inst_18062 = (inst_18061__$1 == null);var state_18130__$1 = (function (){var statearr_18136 = state_18130;(statearr_18136[(8)] = inst_18061__$1);
return statearr_18136;
})();if(cljs.core.truth_(inst_18062))
{var statearr_18137_18183 = state_18130__$1;(statearr_18137_18183[(1)] = (5));
} else
{var statearr_18138_18184 = state_18130__$1;(statearr_18138_18184[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (15)))
{var inst_18103 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18139_18185 = state_18130__$1;(statearr_18139_18185[(2)] = inst_18103);
(statearr_18139_18185[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (21)))
{var inst_18123 = (state_18130[(2)]);var state_18130__$1 = (function (){var statearr_18140 = state_18130;(statearr_18140[(9)] = inst_18123);
return statearr_18140;
})();var statearr_18141_18186 = state_18130__$1;(statearr_18141_18186[(2)] = null);
(statearr_18141_18186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (13)))
{var inst_18085 = (state_18130[(10)]);var inst_18087 = cljs.core.chunked_seq_QMARK_.call(null,inst_18085);var state_18130__$1 = state_18130;if(inst_18087)
{var statearr_18142_18187 = state_18130__$1;(statearr_18142_18187[(1)] = (16));
} else
{var statearr_18143_18188 = state_18130__$1;(statearr_18143_18188[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (22)))
{var inst_18115 = (state_18130[(2)]);var state_18130__$1 = state_18130;if(cljs.core.truth_(inst_18115))
{var statearr_18144_18189 = state_18130__$1;(statearr_18144_18189[(1)] = (23));
} else
{var statearr_18145_18190 = state_18130__$1;(statearr_18145_18190[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (6)))
{var inst_18061 = (state_18130[(8)]);var inst_18111 = (state_18130[(11)]);var inst_18109 = (state_18130[(7)]);var inst_18109__$1 = topic_fn.call(null,inst_18061);var inst_18110 = cljs.core.deref.call(null,mults);var inst_18111__$1 = cljs.core.get.call(null,inst_18110,inst_18109__$1);var state_18130__$1 = (function (){var statearr_18146 = state_18130;(statearr_18146[(11)] = inst_18111__$1);
(statearr_18146[(7)] = inst_18109__$1);
return statearr_18146;
})();if(cljs.core.truth_(inst_18111__$1))
{var statearr_18147_18191 = state_18130__$1;(statearr_18147_18191[(1)] = (19));
} else
{var statearr_18148_18192 = state_18130__$1;(statearr_18148_18192[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (25)))
{var inst_18120 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18149_18193 = state_18130__$1;(statearr_18149_18193[(2)] = inst_18120);
(statearr_18149_18193[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (17)))
{var inst_18085 = (state_18130[(10)]);var inst_18094 = cljs.core.first.call(null,inst_18085);var inst_18095 = cljs.core.async.muxch_STAR_.call(null,inst_18094);var inst_18096 = cljs.core.async.close_BANG_.call(null,inst_18095);var inst_18097 = cljs.core.next.call(null,inst_18085);var inst_18071 = inst_18097;var inst_18072 = null;var inst_18073 = (0);var inst_18074 = (0);var state_18130__$1 = (function (){var statearr_18150 = state_18130;(statearr_18150[(12)] = inst_18074);
(statearr_18150[(13)] = inst_18072);
(statearr_18150[(14)] = inst_18073);
(statearr_18150[(15)] = inst_18071);
(statearr_18150[(16)] = inst_18096);
return statearr_18150;
})();var statearr_18151_18194 = state_18130__$1;(statearr_18151_18194[(2)] = null);
(statearr_18151_18194[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (3)))
{var inst_18128 = (state_18130[(2)]);var state_18130__$1 = state_18130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18130__$1,inst_18128);
} else
{if((state_val_18131 === (12)))
{var inst_18105 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18152_18195 = state_18130__$1;(statearr_18152_18195[(2)] = inst_18105);
(statearr_18152_18195[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (2)))
{var state_18130__$1 = state_18130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18130__$1,(4),ch);
} else
{if((state_val_18131 === (23)))
{var state_18130__$1 = state_18130;var statearr_18153_18196 = state_18130__$1;(statearr_18153_18196[(2)] = null);
(statearr_18153_18196[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (19)))
{var inst_18061 = (state_18130[(8)]);var inst_18111 = (state_18130[(11)]);var inst_18113 = cljs.core.async.muxch_STAR_.call(null,inst_18111);var state_18130__$1 = state_18130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18130__$1,(22),inst_18113,inst_18061);
} else
{if((state_val_18131 === (11)))
{var inst_18085 = (state_18130[(10)]);var inst_18071 = (state_18130[(15)]);var inst_18085__$1 = cljs.core.seq.call(null,inst_18071);var state_18130__$1 = (function (){var statearr_18154 = state_18130;(statearr_18154[(10)] = inst_18085__$1);
return statearr_18154;
})();if(inst_18085__$1)
{var statearr_18155_18197 = state_18130__$1;(statearr_18155_18197[(1)] = (13));
} else
{var statearr_18156_18198 = state_18130__$1;(statearr_18156_18198[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (9)))
{var inst_18107 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18157_18199 = state_18130__$1;(statearr_18157_18199[(2)] = inst_18107);
(statearr_18157_18199[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (5)))
{var inst_18068 = cljs.core.deref.call(null,mults);var inst_18069 = cljs.core.vals.call(null,inst_18068);var inst_18070 = cljs.core.seq.call(null,inst_18069);var inst_18071 = inst_18070;var inst_18072 = null;var inst_18073 = (0);var inst_18074 = (0);var state_18130__$1 = (function (){var statearr_18158 = state_18130;(statearr_18158[(12)] = inst_18074);
(statearr_18158[(13)] = inst_18072);
(statearr_18158[(14)] = inst_18073);
(statearr_18158[(15)] = inst_18071);
return statearr_18158;
})();var statearr_18159_18200 = state_18130__$1;(statearr_18159_18200[(2)] = null);
(statearr_18159_18200[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (14)))
{var state_18130__$1 = state_18130;var statearr_18163_18201 = state_18130__$1;(statearr_18163_18201[(2)] = null);
(statearr_18163_18201[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (16)))
{var inst_18085 = (state_18130[(10)]);var inst_18089 = cljs.core.chunk_first.call(null,inst_18085);var inst_18090 = cljs.core.chunk_rest.call(null,inst_18085);var inst_18091 = cljs.core.count.call(null,inst_18089);var inst_18071 = inst_18090;var inst_18072 = inst_18089;var inst_18073 = inst_18091;var inst_18074 = (0);var state_18130__$1 = (function (){var statearr_18164 = state_18130;(statearr_18164[(12)] = inst_18074);
(statearr_18164[(13)] = inst_18072);
(statearr_18164[(14)] = inst_18073);
(statearr_18164[(15)] = inst_18071);
return statearr_18164;
})();var statearr_18165_18202 = state_18130__$1;(statearr_18165_18202[(2)] = null);
(statearr_18165_18202[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (10)))
{var inst_18074 = (state_18130[(12)]);var inst_18072 = (state_18130[(13)]);var inst_18073 = (state_18130[(14)]);var inst_18071 = (state_18130[(15)]);var inst_18079 = cljs.core._nth.call(null,inst_18072,inst_18074);var inst_18080 = cljs.core.async.muxch_STAR_.call(null,inst_18079);var inst_18081 = cljs.core.async.close_BANG_.call(null,inst_18080);var inst_18082 = (inst_18074 + (1));var tmp18160 = inst_18072;var tmp18161 = inst_18073;var tmp18162 = inst_18071;var inst_18071__$1 = tmp18162;var inst_18072__$1 = tmp18160;var inst_18073__$1 = tmp18161;var inst_18074__$1 = inst_18082;var state_18130__$1 = (function (){var statearr_18166 = state_18130;(statearr_18166[(12)] = inst_18074__$1);
(statearr_18166[(13)] = inst_18072__$1);
(statearr_18166[(17)] = inst_18081);
(statearr_18166[(14)] = inst_18073__$1);
(statearr_18166[(15)] = inst_18071__$1);
return statearr_18166;
})();var statearr_18167_18203 = state_18130__$1;(statearr_18167_18203[(2)] = null);
(statearr_18167_18203[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (18)))
{var inst_18100 = (state_18130[(2)]);var state_18130__$1 = state_18130;var statearr_18168_18204 = state_18130__$1;(statearr_18168_18204[(2)] = inst_18100);
(statearr_18168_18204[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18131 === (8)))
{var inst_18074 = (state_18130[(12)]);var inst_18073 = (state_18130[(14)]);var inst_18076 = (inst_18074 < inst_18073);var inst_18077 = inst_18076;var state_18130__$1 = state_18130;if(cljs.core.truth_(inst_18077))
{var statearr_18169_18205 = state_18130__$1;(statearr_18169_18205[(1)] = (10));
} else
{var statearr_18170_18206 = state_18130__$1;(statearr_18170_18206[(1)] = (11));
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
});})(c__13739__auto___18178,mults,ensure_mult,p))
;return ((function (switch__13724__auto__,c__13739__auto___18178,mults,ensure_mult,p){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18174[(0)] = state_machine__13725__auto__);
(statearr_18174[(1)] = (1));
return statearr_18174;
});
var state_machine__13725__auto____1 = (function (state_18130){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18130);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18175){if((e18175 instanceof Object))
{var ex__13728__auto__ = e18175;var statearr_18176_18207 = state_18130;(statearr_18176_18207[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18130);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18175;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18208 = state_18130;
state_18130 = G__18208;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18130){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___18178,mults,ensure_mult,p))
})();var state__13741__auto__ = (function (){var statearr_18177 = f__13740__auto__.call(null);(statearr_18177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___18178);
return statearr_18177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___18178,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13739__auto___18345 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18315){var state_val_18316 = (state_18315[(1)]);if((state_val_18316 === (7)))
{var state_18315__$1 = state_18315;var statearr_18317_18346 = state_18315__$1;(statearr_18317_18346[(2)] = null);
(statearr_18317_18346[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (1)))
{var state_18315__$1 = state_18315;var statearr_18318_18347 = state_18315__$1;(statearr_18318_18347[(2)] = null);
(statearr_18318_18347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (4)))
{var inst_18279 = (state_18315[(7)]);var inst_18281 = (inst_18279 < cnt);var state_18315__$1 = state_18315;if(cljs.core.truth_(inst_18281))
{var statearr_18319_18348 = state_18315__$1;(statearr_18319_18348[(1)] = (6));
} else
{var statearr_18320_18349 = state_18315__$1;(statearr_18320_18349[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (15)))
{var inst_18311 = (state_18315[(2)]);var state_18315__$1 = state_18315;var statearr_18321_18350 = state_18315__$1;(statearr_18321_18350[(2)] = inst_18311);
(statearr_18321_18350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (13)))
{var inst_18304 = cljs.core.async.close_BANG_.call(null,out);var state_18315__$1 = state_18315;var statearr_18322_18351 = state_18315__$1;(statearr_18322_18351[(2)] = inst_18304);
(statearr_18322_18351[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (6)))
{var state_18315__$1 = state_18315;var statearr_18323_18352 = state_18315__$1;(statearr_18323_18352[(2)] = null);
(statearr_18323_18352[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (3)))
{var inst_18313 = (state_18315[(2)]);var state_18315__$1 = state_18315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18315__$1,inst_18313);
} else
{if((state_val_18316 === (12)))
{var inst_18301 = (state_18315[(8)]);var inst_18301__$1 = (state_18315[(2)]);var inst_18302 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18301__$1);var state_18315__$1 = (function (){var statearr_18324 = state_18315;(statearr_18324[(8)] = inst_18301__$1);
return statearr_18324;
})();if(cljs.core.truth_(inst_18302))
{var statearr_18325_18353 = state_18315__$1;(statearr_18325_18353[(1)] = (13));
} else
{var statearr_18326_18354 = state_18315__$1;(statearr_18326_18354[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (2)))
{var inst_18278 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18279 = (0);var state_18315__$1 = (function (){var statearr_18327 = state_18315;(statearr_18327[(9)] = inst_18278);
(statearr_18327[(7)] = inst_18279);
return statearr_18327;
})();var statearr_18328_18355 = state_18315__$1;(statearr_18328_18355[(2)] = null);
(statearr_18328_18355[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (11)))
{var inst_18279 = (state_18315[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18315,(10),Object,null,(9));var inst_18288 = chs__$1.call(null,inst_18279);var inst_18289 = done.call(null,inst_18279);var inst_18290 = cljs.core.async.take_BANG_.call(null,inst_18288,inst_18289);var state_18315__$1 = state_18315;var statearr_18329_18356 = state_18315__$1;(statearr_18329_18356[(2)] = inst_18290);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18315__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (9)))
{var inst_18279 = (state_18315[(7)]);var inst_18292 = (state_18315[(2)]);var inst_18293 = (inst_18279 + (1));var inst_18279__$1 = inst_18293;var state_18315__$1 = (function (){var statearr_18330 = state_18315;(statearr_18330[(7)] = inst_18279__$1);
(statearr_18330[(10)] = inst_18292);
return statearr_18330;
})();var statearr_18331_18357 = state_18315__$1;(statearr_18331_18357[(2)] = null);
(statearr_18331_18357[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (5)))
{var inst_18299 = (state_18315[(2)]);var state_18315__$1 = (function (){var statearr_18332 = state_18315;(statearr_18332[(11)] = inst_18299);
return statearr_18332;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18315__$1,(12),dchan);
} else
{if((state_val_18316 === (14)))
{var inst_18301 = (state_18315[(8)]);var inst_18306 = cljs.core.apply.call(null,f,inst_18301);var state_18315__$1 = state_18315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18315__$1,(16),out,inst_18306);
} else
{if((state_val_18316 === (16)))
{var inst_18308 = (state_18315[(2)]);var state_18315__$1 = (function (){var statearr_18333 = state_18315;(statearr_18333[(12)] = inst_18308);
return statearr_18333;
})();var statearr_18334_18358 = state_18315__$1;(statearr_18334_18358[(2)] = null);
(statearr_18334_18358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (10)))
{var inst_18283 = (state_18315[(2)]);var inst_18284 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18315__$1 = (function (){var statearr_18335 = state_18315;(statearr_18335[(13)] = inst_18283);
return statearr_18335;
})();var statearr_18336_18359 = state_18315__$1;(statearr_18336_18359[(2)] = inst_18284);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18315__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18316 === (8)))
{var inst_18297 = (state_18315[(2)]);var state_18315__$1 = state_18315;var statearr_18337_18360 = state_18315__$1;(statearr_18337_18360[(2)] = inst_18297);
(statearr_18337_18360[(1)] = (5));
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
}
}
});})(c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13724__auto__,c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18341[(0)] = state_machine__13725__auto__);
(statearr_18341[(1)] = (1));
return statearr_18341;
});
var state_machine__13725__auto____1 = (function (state_18315){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18315);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18342){if((e18342 instanceof Object))
{var ex__13728__auto__ = e18342;var statearr_18343_18361 = state_18315;(statearr_18343_18361[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18315);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18342;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18362 = state_18315;
state_18315 = G__18362;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18315){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13741__auto__ = (function (){var statearr_18344 = f__13740__auto__.call(null);(statearr_18344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___18345);
return statearr_18344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___18345,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___18470 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___18470,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___18470,out){
return (function (state_18446){var state_val_18447 = (state_18446[(1)]);if((state_val_18447 === (7)))
{var inst_18425 = (state_18446[(7)]);var inst_18426 = (state_18446[(8)]);var inst_18425__$1 = (state_18446[(2)]);var inst_18426__$1 = cljs.core.nth.call(null,inst_18425__$1,(0),null);var inst_18427 = cljs.core.nth.call(null,inst_18425__$1,(1),null);var inst_18428 = (inst_18426__$1 == null);var state_18446__$1 = (function (){var statearr_18448 = state_18446;(statearr_18448[(7)] = inst_18425__$1);
(statearr_18448[(8)] = inst_18426__$1);
(statearr_18448[(9)] = inst_18427);
return statearr_18448;
})();if(cljs.core.truth_(inst_18428))
{var statearr_18449_18471 = state_18446__$1;(statearr_18449_18471[(1)] = (8));
} else
{var statearr_18450_18472 = state_18446__$1;(statearr_18450_18472[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (1)))
{var inst_18417 = cljs.core.vec.call(null,chs);var inst_18418 = inst_18417;var state_18446__$1 = (function (){var statearr_18451 = state_18446;(statearr_18451[(10)] = inst_18418);
return statearr_18451;
})();var statearr_18452_18473 = state_18446__$1;(statearr_18452_18473[(2)] = null);
(statearr_18452_18473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (4)))
{var inst_18418 = (state_18446[(10)]);var state_18446__$1 = state_18446;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18446__$1,(7),inst_18418);
} else
{if((state_val_18447 === (6)))
{var inst_18442 = (state_18446[(2)]);var state_18446__$1 = state_18446;var statearr_18453_18474 = state_18446__$1;(statearr_18453_18474[(2)] = inst_18442);
(statearr_18453_18474[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (3)))
{var inst_18444 = (state_18446[(2)]);var state_18446__$1 = state_18446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18446__$1,inst_18444);
} else
{if((state_val_18447 === (2)))
{var inst_18418 = (state_18446[(10)]);var inst_18420 = cljs.core.count.call(null,inst_18418);var inst_18421 = (inst_18420 > (0));var state_18446__$1 = state_18446;if(cljs.core.truth_(inst_18421))
{var statearr_18455_18475 = state_18446__$1;(statearr_18455_18475[(1)] = (4));
} else
{var statearr_18456_18476 = state_18446__$1;(statearr_18456_18476[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (11)))
{var inst_18418 = (state_18446[(10)]);var inst_18435 = (state_18446[(2)]);var tmp18454 = inst_18418;var inst_18418__$1 = tmp18454;var state_18446__$1 = (function (){var statearr_18457 = state_18446;(statearr_18457[(11)] = inst_18435);
(statearr_18457[(10)] = inst_18418__$1);
return statearr_18457;
})();var statearr_18458_18477 = state_18446__$1;(statearr_18458_18477[(2)] = null);
(statearr_18458_18477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (9)))
{var inst_18426 = (state_18446[(8)]);var state_18446__$1 = state_18446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18446__$1,(11),out,inst_18426);
} else
{if((state_val_18447 === (5)))
{var inst_18440 = cljs.core.async.close_BANG_.call(null,out);var state_18446__$1 = state_18446;var statearr_18459_18478 = state_18446__$1;(statearr_18459_18478[(2)] = inst_18440);
(statearr_18459_18478[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (10)))
{var inst_18438 = (state_18446[(2)]);var state_18446__$1 = state_18446;var statearr_18460_18479 = state_18446__$1;(statearr_18460_18479[(2)] = inst_18438);
(statearr_18460_18479[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18447 === (8)))
{var inst_18425 = (state_18446[(7)]);var inst_18426 = (state_18446[(8)]);var inst_18418 = (state_18446[(10)]);var inst_18427 = (state_18446[(9)]);var inst_18430 = (function (){var c = inst_18427;var v = inst_18426;var vec__18423 = inst_18425;var cs = inst_18418;return ((function (c,v,vec__18423,cs,inst_18425,inst_18426,inst_18418,inst_18427,state_val_18447,c__13739__auto___18470,out){
return (function (p1__18363_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18363_SHARP_);
});
;})(c,v,vec__18423,cs,inst_18425,inst_18426,inst_18418,inst_18427,state_val_18447,c__13739__auto___18470,out))
})();var inst_18431 = cljs.core.filterv.call(null,inst_18430,inst_18418);var inst_18418__$1 = inst_18431;var state_18446__$1 = (function (){var statearr_18461 = state_18446;(statearr_18461[(10)] = inst_18418__$1);
return statearr_18461;
})();var statearr_18462_18480 = state_18446__$1;(statearr_18462_18480[(2)] = null);
(statearr_18462_18480[(1)] = (2));
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
});})(c__13739__auto___18470,out))
;return ((function (switch__13724__auto__,c__13739__auto___18470,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18466 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18466[(0)] = state_machine__13725__auto__);
(statearr_18466[(1)] = (1));
return statearr_18466;
});
var state_machine__13725__auto____1 = (function (state_18446){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18446);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18467){if((e18467 instanceof Object))
{var ex__13728__auto__ = e18467;var statearr_18468_18481 = state_18446;(statearr_18468_18481[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18467;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18482 = state_18446;
state_18446 = G__18482;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18446){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___18470,out))
})();var state__13741__auto__ = (function (){var statearr_18469 = f__13740__auto__.call(null);(statearr_18469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___18470);
return statearr_18469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___18470,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___18575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___18575,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___18575,out){
return (function (state_18552){var state_val_18553 = (state_18552[(1)]);if((state_val_18553 === (7)))
{var inst_18534 = (state_18552[(7)]);var inst_18534__$1 = (state_18552[(2)]);var inst_18535 = (inst_18534__$1 == null);var inst_18536 = cljs.core.not.call(null,inst_18535);var state_18552__$1 = (function (){var statearr_18554 = state_18552;(statearr_18554[(7)] = inst_18534__$1);
return statearr_18554;
})();if(inst_18536)
{var statearr_18555_18576 = state_18552__$1;(statearr_18555_18576[(1)] = (8));
} else
{var statearr_18556_18577 = state_18552__$1;(statearr_18556_18577[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (1)))
{var inst_18529 = (0);var state_18552__$1 = (function (){var statearr_18557 = state_18552;(statearr_18557[(8)] = inst_18529);
return statearr_18557;
})();var statearr_18558_18578 = state_18552__$1;(statearr_18558_18578[(2)] = null);
(statearr_18558_18578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (4)))
{var state_18552__$1 = state_18552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18552__$1,(7),ch);
} else
{if((state_val_18553 === (6)))
{var inst_18547 = (state_18552[(2)]);var state_18552__$1 = state_18552;var statearr_18559_18579 = state_18552__$1;(statearr_18559_18579[(2)] = inst_18547);
(statearr_18559_18579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (3)))
{var inst_18549 = (state_18552[(2)]);var inst_18550 = cljs.core.async.close_BANG_.call(null,out);var state_18552__$1 = (function (){var statearr_18560 = state_18552;(statearr_18560[(9)] = inst_18549);
return statearr_18560;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18552__$1,inst_18550);
} else
{if((state_val_18553 === (2)))
{var inst_18529 = (state_18552[(8)]);var inst_18531 = (inst_18529 < n);var state_18552__$1 = state_18552;if(cljs.core.truth_(inst_18531))
{var statearr_18561_18580 = state_18552__$1;(statearr_18561_18580[(1)] = (4));
} else
{var statearr_18562_18581 = state_18552__$1;(statearr_18562_18581[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (11)))
{var inst_18529 = (state_18552[(8)]);var inst_18539 = (state_18552[(2)]);var inst_18540 = (inst_18529 + (1));var inst_18529__$1 = inst_18540;var state_18552__$1 = (function (){var statearr_18563 = state_18552;(statearr_18563[(10)] = inst_18539);
(statearr_18563[(8)] = inst_18529__$1);
return statearr_18563;
})();var statearr_18564_18582 = state_18552__$1;(statearr_18564_18582[(2)] = null);
(statearr_18564_18582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (9)))
{var state_18552__$1 = state_18552;var statearr_18565_18583 = state_18552__$1;(statearr_18565_18583[(2)] = null);
(statearr_18565_18583[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (5)))
{var state_18552__$1 = state_18552;var statearr_18566_18584 = state_18552__$1;(statearr_18566_18584[(2)] = null);
(statearr_18566_18584[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (10)))
{var inst_18544 = (state_18552[(2)]);var state_18552__$1 = state_18552;var statearr_18567_18585 = state_18552__$1;(statearr_18567_18585[(2)] = inst_18544);
(statearr_18567_18585[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18553 === (8)))
{var inst_18534 = (state_18552[(7)]);var state_18552__$1 = state_18552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18552__$1,(11),out,inst_18534);
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
});})(c__13739__auto___18575,out))
;return ((function (switch__13724__auto__,c__13739__auto___18575,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18571 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18571[(0)] = state_machine__13725__auto__);
(statearr_18571[(1)] = (1));
return statearr_18571;
});
var state_machine__13725__auto____1 = (function (state_18552){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18552);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18572){if((e18572 instanceof Object))
{var ex__13728__auto__ = e18572;var statearr_18573_18586 = state_18552;(statearr_18573_18586[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18587 = state_18552;
state_18552 = G__18587;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18552){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___18575,out))
})();var state__13741__auto__ = (function (){var statearr_18574 = f__13740__auto__.call(null);(statearr_18574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___18575);
return statearr_18574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___18575,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18595 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18595 = (function (ch,f,map_LT_,meta18596){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18596 = meta18596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18595.cljs$lang$type = true;
cljs.core.async.t18595.cljs$lang$ctorStr = "cljs.core.async/t18595";
cljs.core.async.t18595.cljs$lang$ctorPrWriter = (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t18595");
});
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18598 = (function (fn1,_,meta18596,ch,f,map_LT_,meta18599){
this.fn1 = fn1;
this._ = _;
this.meta18596 = meta18596;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18599 = meta18599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18598.cljs$lang$type = true;
cljs.core.async.t18598.cljs$lang$ctorStr = "cljs.core.async/t18598";
cljs.core.async.t18598.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t18598");
});})(___$1))
;
cljs.core.async.t18598.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18598.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18588_SHARP_){return f1.call(null,(((p1__18588_SHARP_ == null))?null:self__.f.call(null,p1__18588_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18600){var self__ = this;
var _18600__$1 = this;return self__.meta18599;
});})(___$1))
;
cljs.core.async.t18598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18600,meta18599__$1){var self__ = this;
var _18600__$1 = this;return (new cljs.core.async.t18598(self__.fn1,self__._,self__.meta18596,self__.ch,self__.f,self__.map_LT_,meta18599__$1));
});})(___$1))
;
cljs.core.async.__GT_t18598 = ((function (___$1){
return (function __GT_t18598(fn1__$1,___$2,meta18596__$1,ch__$2,f__$2,map_LT___$2,meta18599){return (new cljs.core.async.t18598(fn1__$1,___$2,meta18596__$1,ch__$2,f__$2,map_LT___$2,meta18599));
});})(___$1))
;
}
return (new cljs.core.async.t18598(fn1,___$1,self__.meta18596,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11382__auto__ = ret;if(cljs.core.truth_(and__11382__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11382__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18595.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18597){var self__ = this;
var _18597__$1 = this;return self__.meta18596;
});
cljs.core.async.t18595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18597,meta18596__$1){var self__ = this;
var _18597__$1 = this;return (new cljs.core.async.t18595(self__.ch,self__.f,self__.map_LT_,meta18596__$1));
});
cljs.core.async.__GT_t18595 = (function __GT_t18595(ch__$1,f__$1,map_LT___$1,meta18596){return (new cljs.core.async.t18595(ch__$1,f__$1,map_LT___$1,meta18596));
});
}
return (new cljs.core.async.t18595(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18604 = (function (ch,f,map_GT_,meta18605){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18605 = meta18605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18604.cljs$lang$type = true;
cljs.core.async.t18604.cljs$lang$ctorStr = "cljs.core.async/t18604";
cljs.core.async.t18604.cljs$lang$ctorPrWriter = (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t18604");
});
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18606){var self__ = this;
var _18606__$1 = this;return self__.meta18605;
});
cljs.core.async.t18604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18606,meta18605__$1){var self__ = this;
var _18606__$1 = this;return (new cljs.core.async.t18604(self__.ch,self__.f,self__.map_GT_,meta18605__$1));
});
cljs.core.async.__GT_t18604 = (function __GT_t18604(ch__$1,f__$1,map_GT___$1,meta18605){return (new cljs.core.async.t18604(ch__$1,f__$1,map_GT___$1,meta18605));
});
}
return (new cljs.core.async.t18604(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18610 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18610 = (function (ch,p,filter_GT_,meta18611){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18611 = meta18611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18610.cljs$lang$type = true;
cljs.core.async.t18610.cljs$lang$ctorStr = "cljs.core.async/t18610";
cljs.core.async.t18610.cljs$lang$ctorPrWriter = (function (this__11961__auto__,writer__11962__auto__,opt__11963__auto__){return cljs.core._write.call(null,writer__11962__auto__,"cljs.core.async/t18610");
});
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18612){var self__ = this;
var _18612__$1 = this;return self__.meta18611;
});
cljs.core.async.t18610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18612,meta18611__$1){var self__ = this;
var _18612__$1 = this;return (new cljs.core.async.t18610(self__.ch,self__.p,self__.filter_GT_,meta18611__$1));
});
cljs.core.async.__GT_t18610 = (function __GT_t18610(ch__$1,p__$1,filter_GT___$1,meta18611){return (new cljs.core.async.t18610(ch__$1,p__$1,filter_GT___$1,meta18611));
});
}
return (new cljs.core.async.t18610(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___18695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___18695,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___18695,out){
return (function (state_18674){var state_val_18675 = (state_18674[(1)]);if((state_val_18675 === (7)))
{var inst_18670 = (state_18674[(2)]);var state_18674__$1 = state_18674;var statearr_18676_18696 = state_18674__$1;(statearr_18676_18696[(2)] = inst_18670);
(statearr_18676_18696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (1)))
{var state_18674__$1 = state_18674;var statearr_18677_18697 = state_18674__$1;(statearr_18677_18697[(2)] = null);
(statearr_18677_18697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (4)))
{var inst_18656 = (state_18674[(7)]);var inst_18656__$1 = (state_18674[(2)]);var inst_18657 = (inst_18656__$1 == null);var state_18674__$1 = (function (){var statearr_18678 = state_18674;(statearr_18678[(7)] = inst_18656__$1);
return statearr_18678;
})();if(cljs.core.truth_(inst_18657))
{var statearr_18679_18698 = state_18674__$1;(statearr_18679_18698[(1)] = (5));
} else
{var statearr_18680_18699 = state_18674__$1;(statearr_18680_18699[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (6)))
{var inst_18656 = (state_18674[(7)]);var inst_18661 = p.call(null,inst_18656);var state_18674__$1 = state_18674;if(cljs.core.truth_(inst_18661))
{var statearr_18681_18700 = state_18674__$1;(statearr_18681_18700[(1)] = (8));
} else
{var statearr_18682_18701 = state_18674__$1;(statearr_18682_18701[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (3)))
{var inst_18672 = (state_18674[(2)]);var state_18674__$1 = state_18674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18674__$1,inst_18672);
} else
{if((state_val_18675 === (2)))
{var state_18674__$1 = state_18674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18674__$1,(4),ch);
} else
{if((state_val_18675 === (11)))
{var inst_18664 = (state_18674[(2)]);var state_18674__$1 = state_18674;var statearr_18683_18702 = state_18674__$1;(statearr_18683_18702[(2)] = inst_18664);
(statearr_18683_18702[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (9)))
{var state_18674__$1 = state_18674;var statearr_18684_18703 = state_18674__$1;(statearr_18684_18703[(2)] = null);
(statearr_18684_18703[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (5)))
{var inst_18659 = cljs.core.async.close_BANG_.call(null,out);var state_18674__$1 = state_18674;var statearr_18685_18704 = state_18674__$1;(statearr_18685_18704[(2)] = inst_18659);
(statearr_18685_18704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (10)))
{var inst_18667 = (state_18674[(2)]);var state_18674__$1 = (function (){var statearr_18686 = state_18674;(statearr_18686[(8)] = inst_18667);
return statearr_18686;
})();var statearr_18687_18705 = state_18674__$1;(statearr_18687_18705[(2)] = null);
(statearr_18687_18705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18675 === (8)))
{var inst_18656 = (state_18674[(7)]);var state_18674__$1 = state_18674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18674__$1,(11),out,inst_18656);
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
});})(c__13739__auto___18695,out))
;return ((function (switch__13724__auto__,c__13739__auto___18695,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18691 = [null,null,null,null,null,null,null,null,null];(statearr_18691[(0)] = state_machine__13725__auto__);
(statearr_18691[(1)] = (1));
return statearr_18691;
});
var state_machine__13725__auto____1 = (function (state_18674){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18674);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18692){if((e18692 instanceof Object))
{var ex__13728__auto__ = e18692;var statearr_18693_18706 = state_18674;(statearr_18693_18706[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18692;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18707 = state_18674;
state_18674 = G__18707;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18674){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___18695,out))
})();var state__13741__auto__ = (function (){var statearr_18694 = f__13740__auto__.call(null);(statearr_18694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___18695);
return statearr_18694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___18695,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13739__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto__){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto__){
return (function (state_18873){var state_val_18874 = (state_18873[(1)]);if((state_val_18874 === (7)))
{var inst_18869 = (state_18873[(2)]);var state_18873__$1 = state_18873;var statearr_18875_18916 = state_18873__$1;(statearr_18875_18916[(2)] = inst_18869);
(statearr_18875_18916[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (20)))
{var inst_18839 = (state_18873[(7)]);var inst_18850 = (state_18873[(2)]);var inst_18851 = cljs.core.next.call(null,inst_18839);var inst_18825 = inst_18851;var inst_18826 = null;var inst_18827 = (0);var inst_18828 = (0);var state_18873__$1 = (function (){var statearr_18876 = state_18873;(statearr_18876[(8)] = inst_18850);
(statearr_18876[(9)] = inst_18828);
(statearr_18876[(10)] = inst_18827);
(statearr_18876[(11)] = inst_18826);
(statearr_18876[(12)] = inst_18825);
return statearr_18876;
})();var statearr_18877_18917 = state_18873__$1;(statearr_18877_18917[(2)] = null);
(statearr_18877_18917[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (1)))
{var state_18873__$1 = state_18873;var statearr_18878_18918 = state_18873__$1;(statearr_18878_18918[(2)] = null);
(statearr_18878_18918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (4)))
{var inst_18814 = (state_18873[(13)]);var inst_18814__$1 = (state_18873[(2)]);var inst_18815 = (inst_18814__$1 == null);var state_18873__$1 = (function (){var statearr_18879 = state_18873;(statearr_18879[(13)] = inst_18814__$1);
return statearr_18879;
})();if(cljs.core.truth_(inst_18815))
{var statearr_18880_18919 = state_18873__$1;(statearr_18880_18919[(1)] = (5));
} else
{var statearr_18881_18920 = state_18873__$1;(statearr_18881_18920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (15)))
{var state_18873__$1 = state_18873;var statearr_18885_18921 = state_18873__$1;(statearr_18885_18921[(2)] = null);
(statearr_18885_18921[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (21)))
{var state_18873__$1 = state_18873;var statearr_18886_18922 = state_18873__$1;(statearr_18886_18922[(2)] = null);
(statearr_18886_18922[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (13)))
{var inst_18828 = (state_18873[(9)]);var inst_18827 = (state_18873[(10)]);var inst_18826 = (state_18873[(11)]);var inst_18825 = (state_18873[(12)]);var inst_18835 = (state_18873[(2)]);var inst_18836 = (inst_18828 + (1));var tmp18882 = inst_18827;var tmp18883 = inst_18826;var tmp18884 = inst_18825;var inst_18825__$1 = tmp18884;var inst_18826__$1 = tmp18883;var inst_18827__$1 = tmp18882;var inst_18828__$1 = inst_18836;var state_18873__$1 = (function (){var statearr_18887 = state_18873;(statearr_18887[(14)] = inst_18835);
(statearr_18887[(9)] = inst_18828__$1);
(statearr_18887[(10)] = inst_18827__$1);
(statearr_18887[(11)] = inst_18826__$1);
(statearr_18887[(12)] = inst_18825__$1);
return statearr_18887;
})();var statearr_18888_18923 = state_18873__$1;(statearr_18888_18923[(2)] = null);
(statearr_18888_18923[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (22)))
{var state_18873__$1 = state_18873;var statearr_18889_18924 = state_18873__$1;(statearr_18889_18924[(2)] = null);
(statearr_18889_18924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (6)))
{var inst_18814 = (state_18873[(13)]);var inst_18823 = f.call(null,inst_18814);var inst_18824 = cljs.core.seq.call(null,inst_18823);var inst_18825 = inst_18824;var inst_18826 = null;var inst_18827 = (0);var inst_18828 = (0);var state_18873__$1 = (function (){var statearr_18890 = state_18873;(statearr_18890[(9)] = inst_18828);
(statearr_18890[(10)] = inst_18827);
(statearr_18890[(11)] = inst_18826);
(statearr_18890[(12)] = inst_18825);
return statearr_18890;
})();var statearr_18891_18925 = state_18873__$1;(statearr_18891_18925[(2)] = null);
(statearr_18891_18925[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (17)))
{var inst_18839 = (state_18873[(7)]);var inst_18843 = cljs.core.chunk_first.call(null,inst_18839);var inst_18844 = cljs.core.chunk_rest.call(null,inst_18839);var inst_18845 = cljs.core.count.call(null,inst_18843);var inst_18825 = inst_18844;var inst_18826 = inst_18843;var inst_18827 = inst_18845;var inst_18828 = (0);var state_18873__$1 = (function (){var statearr_18892 = state_18873;(statearr_18892[(9)] = inst_18828);
(statearr_18892[(10)] = inst_18827);
(statearr_18892[(11)] = inst_18826);
(statearr_18892[(12)] = inst_18825);
return statearr_18892;
})();var statearr_18893_18926 = state_18873__$1;(statearr_18893_18926[(2)] = null);
(statearr_18893_18926[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (3)))
{var inst_18871 = (state_18873[(2)]);var state_18873__$1 = state_18873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18873__$1,inst_18871);
} else
{if((state_val_18874 === (12)))
{var inst_18859 = (state_18873[(2)]);var state_18873__$1 = state_18873;var statearr_18894_18927 = state_18873__$1;(statearr_18894_18927[(2)] = inst_18859);
(statearr_18894_18927[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (2)))
{var state_18873__$1 = state_18873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18873__$1,(4),in$);
} else
{if((state_val_18874 === (23)))
{var inst_18867 = (state_18873[(2)]);var state_18873__$1 = state_18873;var statearr_18895_18928 = state_18873__$1;(statearr_18895_18928[(2)] = inst_18867);
(statearr_18895_18928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (19)))
{var inst_18854 = (state_18873[(2)]);var state_18873__$1 = state_18873;var statearr_18896_18929 = state_18873__$1;(statearr_18896_18929[(2)] = inst_18854);
(statearr_18896_18929[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (11)))
{var inst_18839 = (state_18873[(7)]);var inst_18825 = (state_18873[(12)]);var inst_18839__$1 = cljs.core.seq.call(null,inst_18825);var state_18873__$1 = (function (){var statearr_18897 = state_18873;(statearr_18897[(7)] = inst_18839__$1);
return statearr_18897;
})();if(inst_18839__$1)
{var statearr_18898_18930 = state_18873__$1;(statearr_18898_18930[(1)] = (14));
} else
{var statearr_18899_18931 = state_18873__$1;(statearr_18899_18931[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (9)))
{var inst_18861 = (state_18873[(2)]);var inst_18862 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18873__$1 = (function (){var statearr_18900 = state_18873;(statearr_18900[(15)] = inst_18861);
return statearr_18900;
})();if(cljs.core.truth_(inst_18862))
{var statearr_18901_18932 = state_18873__$1;(statearr_18901_18932[(1)] = (21));
} else
{var statearr_18902_18933 = state_18873__$1;(statearr_18902_18933[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (5)))
{var inst_18817 = cljs.core.async.close_BANG_.call(null,out);var state_18873__$1 = state_18873;var statearr_18903_18934 = state_18873__$1;(statearr_18903_18934[(2)] = inst_18817);
(statearr_18903_18934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (14)))
{var inst_18839 = (state_18873[(7)]);var inst_18841 = cljs.core.chunked_seq_QMARK_.call(null,inst_18839);var state_18873__$1 = state_18873;if(inst_18841)
{var statearr_18904_18935 = state_18873__$1;(statearr_18904_18935[(1)] = (17));
} else
{var statearr_18905_18936 = state_18873__$1;(statearr_18905_18936[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (16)))
{var inst_18857 = (state_18873[(2)]);var state_18873__$1 = state_18873;var statearr_18906_18937 = state_18873__$1;(statearr_18906_18937[(2)] = inst_18857);
(statearr_18906_18937[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18874 === (10)))
{var inst_18828 = (state_18873[(9)]);var inst_18826 = (state_18873[(11)]);var inst_18833 = cljs.core._nth.call(null,inst_18826,inst_18828);var state_18873__$1 = state_18873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18873__$1,(13),out,inst_18833);
} else
{if((state_val_18874 === (18)))
{var inst_18839 = (state_18873[(7)]);var inst_18848 = cljs.core.first.call(null,inst_18839);var state_18873__$1 = state_18873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18873__$1,(20),out,inst_18848);
} else
{if((state_val_18874 === (8)))
{var inst_18828 = (state_18873[(9)]);var inst_18827 = (state_18873[(10)]);var inst_18830 = (inst_18828 < inst_18827);var inst_18831 = inst_18830;var state_18873__$1 = state_18873;if(cljs.core.truth_(inst_18831))
{var statearr_18907_18938 = state_18873__$1;(statearr_18907_18938[(1)] = (10));
} else
{var statearr_18908_18939 = state_18873__$1;(statearr_18908_18939[(1)] = (11));
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
}
}
}
}
}
}
}
}
}
});})(c__13739__auto__))
;return ((function (switch__13724__auto__,c__13739__auto__){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_18912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18912[(0)] = state_machine__13725__auto__);
(statearr_18912[(1)] = (1));
return statearr_18912;
});
var state_machine__13725__auto____1 = (function (state_18873){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_18873);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e18913){if((e18913 instanceof Object))
{var ex__13728__auto__ = e18913;var statearr_18914_18940 = state_18873;(statearr_18914_18940[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18913;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18941 = state_18873;
state_18873 = G__18941;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_18873){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_18873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto__))
})();var state__13741__auto__ = (function (){var statearr_18915 = f__13740__auto__.call(null);(statearr_18915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto__);
return statearr_18915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto__))
);
return c__13739__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___19038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___19038,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___19038,out){
return (function (state_19013){var state_val_19014 = (state_19013[(1)]);if((state_val_19014 === (7)))
{var inst_19008 = (state_19013[(2)]);var state_19013__$1 = state_19013;var statearr_19015_19039 = state_19013__$1;(statearr_19015_19039[(2)] = inst_19008);
(statearr_19015_19039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (1)))
{var inst_18990 = null;var state_19013__$1 = (function (){var statearr_19016 = state_19013;(statearr_19016[(7)] = inst_18990);
return statearr_19016;
})();var statearr_19017_19040 = state_19013__$1;(statearr_19017_19040[(2)] = null);
(statearr_19017_19040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (4)))
{var inst_18993 = (state_19013[(8)]);var inst_18993__$1 = (state_19013[(2)]);var inst_18994 = (inst_18993__$1 == null);var inst_18995 = cljs.core.not.call(null,inst_18994);var state_19013__$1 = (function (){var statearr_19018 = state_19013;(statearr_19018[(8)] = inst_18993__$1);
return statearr_19018;
})();if(inst_18995)
{var statearr_19019_19041 = state_19013__$1;(statearr_19019_19041[(1)] = (5));
} else
{var statearr_19020_19042 = state_19013__$1;(statearr_19020_19042[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (6)))
{var state_19013__$1 = state_19013;var statearr_19021_19043 = state_19013__$1;(statearr_19021_19043[(2)] = null);
(statearr_19021_19043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (3)))
{var inst_19010 = (state_19013[(2)]);var inst_19011 = cljs.core.async.close_BANG_.call(null,out);var state_19013__$1 = (function (){var statearr_19022 = state_19013;(statearr_19022[(9)] = inst_19010);
return statearr_19022;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19013__$1,inst_19011);
} else
{if((state_val_19014 === (2)))
{var state_19013__$1 = state_19013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19013__$1,(4),ch);
} else
{if((state_val_19014 === (11)))
{var inst_18993 = (state_19013[(8)]);var inst_19002 = (state_19013[(2)]);var inst_18990 = inst_18993;var state_19013__$1 = (function (){var statearr_19023 = state_19013;(statearr_19023[(7)] = inst_18990);
(statearr_19023[(10)] = inst_19002);
return statearr_19023;
})();var statearr_19024_19044 = state_19013__$1;(statearr_19024_19044[(2)] = null);
(statearr_19024_19044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (9)))
{var inst_18993 = (state_19013[(8)]);var state_19013__$1 = state_19013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19013__$1,(11),out,inst_18993);
} else
{if((state_val_19014 === (5)))
{var inst_18990 = (state_19013[(7)]);var inst_18993 = (state_19013[(8)]);var inst_18997 = cljs.core._EQ_.call(null,inst_18993,inst_18990);var state_19013__$1 = state_19013;if(inst_18997)
{var statearr_19026_19045 = state_19013__$1;(statearr_19026_19045[(1)] = (8));
} else
{var statearr_19027_19046 = state_19013__$1;(statearr_19027_19046[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (10)))
{var inst_19005 = (state_19013[(2)]);var state_19013__$1 = state_19013;var statearr_19028_19047 = state_19013__$1;(statearr_19028_19047[(2)] = inst_19005);
(statearr_19028_19047[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19014 === (8)))
{var inst_18990 = (state_19013[(7)]);var tmp19025 = inst_18990;var inst_18990__$1 = tmp19025;var state_19013__$1 = (function (){var statearr_19029 = state_19013;(statearr_19029[(7)] = inst_18990__$1);
return statearr_19029;
})();var statearr_19030_19048 = state_19013__$1;(statearr_19030_19048[(2)] = null);
(statearr_19030_19048[(1)] = (2));
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
});})(c__13739__auto___19038,out))
;return ((function (switch__13724__auto__,c__13739__auto___19038,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_19034 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19034[(0)] = state_machine__13725__auto__);
(statearr_19034[(1)] = (1));
return statearr_19034;
});
var state_machine__13725__auto____1 = (function (state_19013){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_19013);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e19035){if((e19035 instanceof Object))
{var ex__13728__auto__ = e19035;var statearr_19036_19049 = state_19013;(statearr_19036_19049[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19050 = state_19013;
state_19013 = G__19050;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_19013){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_19013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___19038,out))
})();var state__13741__auto__ = (function (){var statearr_19037 = f__13740__auto__.call(null);(statearr_19037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___19038);
return statearr_19037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___19038,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___19185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___19185,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___19185,out){
return (function (state_19155){var state_val_19156 = (state_19155[(1)]);if((state_val_19156 === (7)))
{var inst_19151 = (state_19155[(2)]);var state_19155__$1 = state_19155;var statearr_19157_19186 = state_19155__$1;(statearr_19157_19186[(2)] = inst_19151);
(statearr_19157_19186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (1)))
{var inst_19118 = (new Array(n));var inst_19119 = inst_19118;var inst_19120 = (0);var state_19155__$1 = (function (){var statearr_19158 = state_19155;(statearr_19158[(7)] = inst_19120);
(statearr_19158[(8)] = inst_19119);
return statearr_19158;
})();var statearr_19159_19187 = state_19155__$1;(statearr_19159_19187[(2)] = null);
(statearr_19159_19187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (4)))
{var inst_19123 = (state_19155[(9)]);var inst_19123__$1 = (state_19155[(2)]);var inst_19124 = (inst_19123__$1 == null);var inst_19125 = cljs.core.not.call(null,inst_19124);var state_19155__$1 = (function (){var statearr_19160 = state_19155;(statearr_19160[(9)] = inst_19123__$1);
return statearr_19160;
})();if(inst_19125)
{var statearr_19161_19188 = state_19155__$1;(statearr_19161_19188[(1)] = (5));
} else
{var statearr_19162_19189 = state_19155__$1;(statearr_19162_19189[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (15)))
{var inst_19145 = (state_19155[(2)]);var state_19155__$1 = state_19155;var statearr_19163_19190 = state_19155__$1;(statearr_19163_19190[(2)] = inst_19145);
(statearr_19163_19190[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (13)))
{var state_19155__$1 = state_19155;var statearr_19164_19191 = state_19155__$1;(statearr_19164_19191[(2)] = null);
(statearr_19164_19191[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (6)))
{var inst_19120 = (state_19155[(7)]);var inst_19141 = (inst_19120 > (0));var state_19155__$1 = state_19155;if(cljs.core.truth_(inst_19141))
{var statearr_19165_19192 = state_19155__$1;(statearr_19165_19192[(1)] = (12));
} else
{var statearr_19166_19193 = state_19155__$1;(statearr_19166_19193[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (3)))
{var inst_19153 = (state_19155[(2)]);var state_19155__$1 = state_19155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19155__$1,inst_19153);
} else
{if((state_val_19156 === (12)))
{var inst_19119 = (state_19155[(8)]);var inst_19143 = cljs.core.vec.call(null,inst_19119);var state_19155__$1 = state_19155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19155__$1,(15),out,inst_19143);
} else
{if((state_val_19156 === (2)))
{var state_19155__$1 = state_19155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19155__$1,(4),ch);
} else
{if((state_val_19156 === (11)))
{var inst_19135 = (state_19155[(2)]);var inst_19136 = (new Array(n));var inst_19119 = inst_19136;var inst_19120 = (0);var state_19155__$1 = (function (){var statearr_19167 = state_19155;(statearr_19167[(7)] = inst_19120);
(statearr_19167[(10)] = inst_19135);
(statearr_19167[(8)] = inst_19119);
return statearr_19167;
})();var statearr_19168_19194 = state_19155__$1;(statearr_19168_19194[(2)] = null);
(statearr_19168_19194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (9)))
{var inst_19119 = (state_19155[(8)]);var inst_19133 = cljs.core.vec.call(null,inst_19119);var state_19155__$1 = state_19155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19155__$1,(11),out,inst_19133);
} else
{if((state_val_19156 === (5)))
{var inst_19120 = (state_19155[(7)]);var inst_19128 = (state_19155[(11)]);var inst_19119 = (state_19155[(8)]);var inst_19123 = (state_19155[(9)]);var inst_19127 = (inst_19119[inst_19120] = inst_19123);var inst_19128__$1 = (inst_19120 + (1));var inst_19129 = (inst_19128__$1 < n);var state_19155__$1 = (function (){var statearr_19169 = state_19155;(statearr_19169[(11)] = inst_19128__$1);
(statearr_19169[(12)] = inst_19127);
return statearr_19169;
})();if(cljs.core.truth_(inst_19129))
{var statearr_19170_19195 = state_19155__$1;(statearr_19170_19195[(1)] = (8));
} else
{var statearr_19171_19196 = state_19155__$1;(statearr_19171_19196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (14)))
{var inst_19148 = (state_19155[(2)]);var inst_19149 = cljs.core.async.close_BANG_.call(null,out);var state_19155__$1 = (function (){var statearr_19173 = state_19155;(statearr_19173[(13)] = inst_19148);
return statearr_19173;
})();var statearr_19174_19197 = state_19155__$1;(statearr_19174_19197[(2)] = inst_19149);
(statearr_19174_19197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (10)))
{var inst_19139 = (state_19155[(2)]);var state_19155__$1 = state_19155;var statearr_19175_19198 = state_19155__$1;(statearr_19175_19198[(2)] = inst_19139);
(statearr_19175_19198[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19156 === (8)))
{var inst_19128 = (state_19155[(11)]);var inst_19119 = (state_19155[(8)]);var tmp19172 = inst_19119;var inst_19119__$1 = tmp19172;var inst_19120 = inst_19128;var state_19155__$1 = (function (){var statearr_19176 = state_19155;(statearr_19176[(7)] = inst_19120);
(statearr_19176[(8)] = inst_19119__$1);
return statearr_19176;
})();var statearr_19177_19199 = state_19155__$1;(statearr_19177_19199[(2)] = null);
(statearr_19177_19199[(1)] = (2));
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
}
});})(c__13739__auto___19185,out))
;return ((function (switch__13724__auto__,c__13739__auto___19185,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_19181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19181[(0)] = state_machine__13725__auto__);
(statearr_19181[(1)] = (1));
return statearr_19181;
});
var state_machine__13725__auto____1 = (function (state_19155){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_19155);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e19182){if((e19182 instanceof Object))
{var ex__13728__auto__ = e19182;var statearr_19183_19200 = state_19155;(statearr_19183_19200[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19201 = state_19155;
state_19155 = G__19201;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_19155){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_19155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___19185,out))
})();var state__13741__auto__ = (function (){var statearr_19184 = f__13740__auto__.call(null);(statearr_19184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___19185);
return statearr_19184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___19185,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13739__auto___19344 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13739__auto___19344,out){
return (function (){var f__13740__auto__ = (function (){var switch__13724__auto__ = ((function (c__13739__auto___19344,out){
return (function (state_19314){var state_val_19315 = (state_19314[(1)]);if((state_val_19315 === (7)))
{var inst_19310 = (state_19314[(2)]);var state_19314__$1 = state_19314;var statearr_19316_19345 = state_19314__$1;(statearr_19316_19345[(2)] = inst_19310);
(statearr_19316_19345[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (1)))
{var inst_19273 = [];var inst_19274 = inst_19273;var inst_19275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19314__$1 = (function (){var statearr_19317 = state_19314;(statearr_19317[(7)] = inst_19275);
(statearr_19317[(8)] = inst_19274);
return statearr_19317;
})();var statearr_19318_19346 = state_19314__$1;(statearr_19318_19346[(2)] = null);
(statearr_19318_19346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (4)))
{var inst_19278 = (state_19314[(9)]);var inst_19278__$1 = (state_19314[(2)]);var inst_19279 = (inst_19278__$1 == null);var inst_19280 = cljs.core.not.call(null,inst_19279);var state_19314__$1 = (function (){var statearr_19319 = state_19314;(statearr_19319[(9)] = inst_19278__$1);
return statearr_19319;
})();if(inst_19280)
{var statearr_19320_19347 = state_19314__$1;(statearr_19320_19347[(1)] = (5));
} else
{var statearr_19321_19348 = state_19314__$1;(statearr_19321_19348[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (15)))
{var inst_19304 = (state_19314[(2)]);var state_19314__$1 = state_19314;var statearr_19322_19349 = state_19314__$1;(statearr_19322_19349[(2)] = inst_19304);
(statearr_19322_19349[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (13)))
{var state_19314__$1 = state_19314;var statearr_19323_19350 = state_19314__$1;(statearr_19323_19350[(2)] = null);
(statearr_19323_19350[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (6)))
{var inst_19274 = (state_19314[(8)]);var inst_19299 = inst_19274.length;var inst_19300 = (inst_19299 > (0));var state_19314__$1 = state_19314;if(cljs.core.truth_(inst_19300))
{var statearr_19324_19351 = state_19314__$1;(statearr_19324_19351[(1)] = (12));
} else
{var statearr_19325_19352 = state_19314__$1;(statearr_19325_19352[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (3)))
{var inst_19312 = (state_19314[(2)]);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19314__$1,inst_19312);
} else
{if((state_val_19315 === (12)))
{var inst_19274 = (state_19314[(8)]);var inst_19302 = cljs.core.vec.call(null,inst_19274);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19314__$1,(15),out,inst_19302);
} else
{if((state_val_19315 === (2)))
{var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19314__$1,(4),ch);
} else
{if((state_val_19315 === (11)))
{var inst_19282 = (state_19314[(10)]);var inst_19278 = (state_19314[(9)]);var inst_19292 = (state_19314[(2)]);var inst_19293 = [];var inst_19294 = inst_19293.push(inst_19278);var inst_19274 = inst_19293;var inst_19275 = inst_19282;var state_19314__$1 = (function (){var statearr_19326 = state_19314;(statearr_19326[(7)] = inst_19275);
(statearr_19326[(11)] = inst_19292);
(statearr_19326[(8)] = inst_19274);
(statearr_19326[(12)] = inst_19294);
return statearr_19326;
})();var statearr_19327_19353 = state_19314__$1;(statearr_19327_19353[(2)] = null);
(statearr_19327_19353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (9)))
{var inst_19274 = (state_19314[(8)]);var inst_19290 = cljs.core.vec.call(null,inst_19274);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19314__$1,(11),out,inst_19290);
} else
{if((state_val_19315 === (5)))
{var inst_19282 = (state_19314[(10)]);var inst_19275 = (state_19314[(7)]);var inst_19278 = (state_19314[(9)]);var inst_19282__$1 = f.call(null,inst_19278);var inst_19283 = cljs.core._EQ_.call(null,inst_19282__$1,inst_19275);var inst_19284 = cljs.core.keyword_identical_QMARK_.call(null,inst_19275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19285 = (inst_19283) || (inst_19284);var state_19314__$1 = (function (){var statearr_19328 = state_19314;(statearr_19328[(10)] = inst_19282__$1);
return statearr_19328;
})();if(cljs.core.truth_(inst_19285))
{var statearr_19329_19354 = state_19314__$1;(statearr_19329_19354[(1)] = (8));
} else
{var statearr_19330_19355 = state_19314__$1;(statearr_19330_19355[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (14)))
{var inst_19307 = (state_19314[(2)]);var inst_19308 = cljs.core.async.close_BANG_.call(null,out);var state_19314__$1 = (function (){var statearr_19332 = state_19314;(statearr_19332[(13)] = inst_19307);
return statearr_19332;
})();var statearr_19333_19356 = state_19314__$1;(statearr_19333_19356[(2)] = inst_19308);
(statearr_19333_19356[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (10)))
{var inst_19297 = (state_19314[(2)]);var state_19314__$1 = state_19314;var statearr_19334_19357 = state_19314__$1;(statearr_19334_19357[(2)] = inst_19297);
(statearr_19334_19357[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19315 === (8)))
{var inst_19282 = (state_19314[(10)]);var inst_19274 = (state_19314[(8)]);var inst_19278 = (state_19314[(9)]);var inst_19287 = inst_19274.push(inst_19278);var tmp19331 = inst_19274;var inst_19274__$1 = tmp19331;var inst_19275 = inst_19282;var state_19314__$1 = (function (){var statearr_19335 = state_19314;(statearr_19335[(7)] = inst_19275);
(statearr_19335[(14)] = inst_19287);
(statearr_19335[(8)] = inst_19274__$1);
return statearr_19335;
})();var statearr_19336_19358 = state_19314__$1;(statearr_19336_19358[(2)] = null);
(statearr_19336_19358[(1)] = (2));
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
}
});})(c__13739__auto___19344,out))
;return ((function (switch__13724__auto__,c__13739__auto___19344,out){
return (function() {
var state_machine__13725__auto__ = null;
var state_machine__13725__auto____0 = (function (){var statearr_19340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19340[(0)] = state_machine__13725__auto__);
(statearr_19340[(1)] = (1));
return statearr_19340;
});
var state_machine__13725__auto____1 = (function (state_19314){while(true){
var ret_value__13726__auto__ = (function (){try{while(true){
var result__13727__auto__ = switch__13724__auto__.call(null,state_19314);if(cljs.core.keyword_identical_QMARK_.call(null,result__13727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13727__auto__;
}
break;
}
}catch (e19341){if((e19341 instanceof Object))
{var ex__13728__auto__ = e19341;var statearr_19342_19359 = state_19314;(statearr_19342_19359[(5)] = ex__13728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19360 = state_19314;
state_19314 = G__19360;
continue;
}
} else
{return ret_value__13726__auto__;
}
break;
}
});
state_machine__13725__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return state_machine__13725__auto____0.call(this);
case 1:
return state_machine__13725__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13725__auto____0;
state_machine__13725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13725__auto____1;
return state_machine__13725__auto__;
})()
;})(switch__13724__auto__,c__13739__auto___19344,out))
})();var state__13741__auto__ = (function (){var statearr_19343 = f__13740__auto__.call(null);(statearr_19343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13739__auto___19344);
return statearr_19343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13741__auto__);
});})(c__13739__auto___19344,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map