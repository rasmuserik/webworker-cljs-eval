// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46487 = [];
var len__41762__auto___46493 = arguments.length;
var i__41763__auto___46494 = (0);
while(true){
if((i__41763__auto___46494 < len__41762__auto___46493)){
args46487.push((arguments[i__41763__auto___46494]));

var G__46495 = (i__41763__auto___46494 + (1));
i__41763__auto___46494 = G__46495;
continue;
} else {
}
break;
}

var G__46489 = args46487.length;
switch (G__46489) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46487.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46490 = (function (f,blockable,meta46491){
this.f = f;
this.blockable = blockable;
this.meta46491 = meta46491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46492,meta46491__$1){
var self__ = this;
var _46492__$1 = this;
return (new cljs.core.async.t_cljs$core$async46490(self__.f,self__.blockable,meta46491__$1));
});

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46492){
var self__ = this;
var _46492__$1 = this;
return self__.meta46491;
});

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46491","meta46491",807774355,null)], null);
});

cljs.core.async.t_cljs$core$async46490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46490";

cljs.core.async.t_cljs$core$async46490.cljs$lang$ctorPrWriter = (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async46490");
});

cljs.core.async.__GT_t_cljs$core$async46490 = (function cljs$core$async$__GT_t_cljs$core$async46490(f__$1,blockable__$1,meta46491){
return (new cljs.core.async.t_cljs$core$async46490(f__$1,blockable__$1,meta46491));
});

}

return (new cljs.core.async.t_cljs$core$async46490(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46499 = [];
var len__41762__auto___46502 = arguments.length;
var i__41763__auto___46503 = (0);
while(true){
if((i__41763__auto___46503 < len__41762__auto___46502)){
args46499.push((arguments[i__41763__auto___46503]));

var G__46504 = (i__41763__auto___46503 + (1));
i__41763__auto___46503 = G__46504;
continue;
} else {
}
break;
}

var G__46501 = args46499.length;
switch (G__46501) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46499.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args46506 = [];
var len__41762__auto___46509 = arguments.length;
var i__41763__auto___46510 = (0);
while(true){
if((i__41763__auto___46510 < len__41762__auto___46509)){
args46506.push((arguments[i__41763__auto___46510]));

var G__46511 = (i__41763__auto___46510 + (1));
i__41763__auto___46510 = G__46511;
continue;
} else {
}
break;
}

var G__46508 = args46506.length;
switch (G__46508) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46506.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46513 = [];
var len__41762__auto___46516 = arguments.length;
var i__41763__auto___46517 = (0);
while(true){
if((i__41763__auto___46517 < len__41762__auto___46516)){
args46513.push((arguments[i__41763__auto___46517]));

var G__46518 = (i__41763__auto___46517 + (1));
i__41763__auto___46517 = G__46518;
continue;
} else {
}
break;
}

var G__46515 = args46513.length;
switch (G__46515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46513.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46520 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46520);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46520,ret){
return (function (){
return fn1.call(null,val_46520);
});})(val_46520,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46521 = [];
var len__41762__auto___46524 = arguments.length;
var i__41763__auto___46525 = (0);
while(true){
if((i__41763__auto___46525 < len__41762__auto___46524)){
args46521.push((arguments[i__41763__auto___46525]));

var G__46526 = (i__41763__auto___46525 + (1));
i__41763__auto___46525 = G__46526;
continue;
} else {
}
break;
}

var G__46523 = args46521.length;
switch (G__46523) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46521.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__41607__auto___46528 = n;
var x_46529 = (0);
while(true){
if((x_46529 < n__41607__auto___46528)){
(a[x_46529] = (0));

var G__46530 = (x_46529 + (1));
x_46529 = G__46530;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46531 = (i + (1));
i = G__46531;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46535 = (function (alt_flag,flag,meta46536){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46536 = meta46536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46537,meta46536__$1){
var self__ = this;
var _46537__$1 = this;
return (new cljs.core.async.t_cljs$core$async46535(self__.alt_flag,self__.flag,meta46536__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46537){
var self__ = this;
var _46537__$1 = this;
return self__.meta46536;
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46536","meta46536",665677088,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46535";

cljs.core.async.t_cljs$core$async46535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async46535");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46535 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46535(alt_flag__$1,flag__$1,meta46536){
return (new cljs.core.async.t_cljs$core$async46535(alt_flag__$1,flag__$1,meta46536));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46535(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46541 = (function (alt_handler,flag,cb,meta46542){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46542 = meta46542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46543,meta46542__$1){
var self__ = this;
var _46543__$1 = this;
return (new cljs.core.async.t_cljs$core$async46541(self__.alt_handler,self__.flag,self__.cb,meta46542__$1));
});

cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46543){
var self__ = this;
var _46543__$1 = this;
return self__.meta46542;
});

cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46542","meta46542",314272630,null)], null);
});

cljs.core.async.t_cljs$core$async46541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46541";

cljs.core.async.t_cljs$core$async46541.cljs$lang$ctorPrWriter = (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async46541");
});

cljs.core.async.__GT_t_cljs$core$async46541 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46541(alt_handler__$1,flag__$1,cb__$1,meta46542){
return (new cljs.core.async.t_cljs$core$async46541(alt_handler__$1,flag__$1,cb__$1,meta46542));
});

}

return (new cljs.core.async.t_cljs$core$async46541(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46545_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__40692__auto__ = wport;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46546 = (i + (1));
i = G__46546;
continue;
}
} else {
return null;
}
break;
}
})();
var or__40692__auto__ = ret;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__40680__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__40680__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___46552 = arguments.length;
var i__41763__auto___46553 = (0);
while(true){
if((i__41763__auto___46553 < len__41762__auto___46552)){
args__41769__auto__.push((arguments[i__41763__auto___46553]));

var G__46554 = (i__41763__auto___46553 + (1));
i__41763__auto___46553 = G__46554;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((1) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41770__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46549){
var map__46550 = p__46549;
var map__46550__$1 = ((((!((map__46550 == null)))?((((map__46550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46550):map__46550);
var opts = map__46550__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46547){
var G__46548 = cljs.core.first.call(null,seq46547);
var seq46547__$1 = cljs.core.next.call(null,seq46547);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46548,seq46547__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46555 = [];
var len__41762__auto___46605 = arguments.length;
var i__41763__auto___46606 = (0);
while(true){
if((i__41763__auto___46606 < len__41762__auto___46605)){
args46555.push((arguments[i__41763__auto___46606]));

var G__46607 = (i__41763__auto___46606 + (1));
i__41763__auto___46606 = G__46607;
continue;
} else {
}
break;
}

var G__46557 = args46555.length;
switch (G__46557) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46555.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46442__auto___46609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___46609){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___46609){
return (function (state_46581){
var state_val_46582 = (state_46581[(1)]);
if((state_val_46582 === (7))){
var inst_46577 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46583_46610 = state_46581__$1;
(statearr_46583_46610[(2)] = inst_46577);

(statearr_46583_46610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (1))){
var state_46581__$1 = state_46581;
var statearr_46584_46611 = state_46581__$1;
(statearr_46584_46611[(2)] = null);

(statearr_46584_46611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (4))){
var inst_46560 = (state_46581[(7)]);
var inst_46560__$1 = (state_46581[(2)]);
var inst_46561 = (inst_46560__$1 == null);
var state_46581__$1 = (function (){var statearr_46585 = state_46581;
(statearr_46585[(7)] = inst_46560__$1);

return statearr_46585;
})();
if(cljs.core.truth_(inst_46561)){
var statearr_46586_46612 = state_46581__$1;
(statearr_46586_46612[(1)] = (5));

} else {
var statearr_46587_46613 = state_46581__$1;
(statearr_46587_46613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (13))){
var state_46581__$1 = state_46581;
var statearr_46588_46614 = state_46581__$1;
(statearr_46588_46614[(2)] = null);

(statearr_46588_46614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (6))){
var inst_46560 = (state_46581[(7)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46581__$1,(11),to,inst_46560);
} else {
if((state_val_46582 === (3))){
var inst_46579 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46581__$1,inst_46579);
} else {
if((state_val_46582 === (12))){
var state_46581__$1 = state_46581;
var statearr_46589_46615 = state_46581__$1;
(statearr_46589_46615[(2)] = null);

(statearr_46589_46615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (2))){
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46581__$1,(4),from);
} else {
if((state_val_46582 === (11))){
var inst_46570 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
if(cljs.core.truth_(inst_46570)){
var statearr_46590_46616 = state_46581__$1;
(statearr_46590_46616[(1)] = (12));

} else {
var statearr_46591_46617 = state_46581__$1;
(statearr_46591_46617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (9))){
var state_46581__$1 = state_46581;
var statearr_46592_46618 = state_46581__$1;
(statearr_46592_46618[(2)] = null);

(statearr_46592_46618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (5))){
var state_46581__$1 = state_46581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46593_46619 = state_46581__$1;
(statearr_46593_46619[(1)] = (8));

} else {
var statearr_46594_46620 = state_46581__$1;
(statearr_46594_46620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (14))){
var inst_46575 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46595_46621 = state_46581__$1;
(statearr_46595_46621[(2)] = inst_46575);

(statearr_46595_46621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (10))){
var inst_46567 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46596_46622 = state_46581__$1;
(statearr_46596_46622[(2)] = inst_46567);

(statearr_46596_46622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (8))){
var inst_46564 = cljs.core.async.close_BANG_.call(null,to);
var state_46581__$1 = state_46581;
var statearr_46597_46623 = state_46581__$1;
(statearr_46597_46623[(2)] = inst_46564);

(statearr_46597_46623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___46609))
;
return ((function (switch__46330__auto__,c__46442__auto___46609){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_46601 = [null,null,null,null,null,null,null,null];
(statearr_46601[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_46601[(1)] = (1));

return statearr_46601;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_46581){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46602){if((e46602 instanceof Object)){
var ex__46334__auto__ = e46602;
var statearr_46603_46624 = state_46581;
(statearr_46603_46624[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46625 = state_46581;
state_46581 = G__46625;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_46581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_46581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___46609))
})();
var state__46444__auto__ = (function (){var statearr_46604 = f__46443__auto__.call(null);
(statearr_46604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___46609);

return statearr_46604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___46609))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46809){
var vec__46810 = p__46809;
var v = cljs.core.nth.call(null,vec__46810,(0),null);
var p = cljs.core.nth.call(null,vec__46810,(1),null);
var job = vec__46810;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46442__auto___46992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results){
return (function (state_46815){
var state_val_46816 = (state_46815[(1)]);
if((state_val_46816 === (1))){
var state_46815__$1 = state_46815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46815__$1,(2),res,v);
} else {
if((state_val_46816 === (2))){
var inst_46812 = (state_46815[(2)]);
var inst_46813 = cljs.core.async.close_BANG_.call(null,res);
var state_46815__$1 = (function (){var statearr_46817 = state_46815;
(statearr_46817[(7)] = inst_46812);

return statearr_46817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46815__$1,inst_46813);
} else {
return null;
}
}
});})(c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results))
;
return ((function (switch__46330__auto__,c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_46821 = [null,null,null,null,null,null,null,null];
(statearr_46821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__);

(statearr_46821[(1)] = (1));

return statearr_46821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1 = (function (state_46815){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46822){if((e46822 instanceof Object)){
var ex__46334__auto__ = e46822;
var statearr_46823_46993 = state_46815;
(statearr_46823_46993[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46994 = state_46815;
state_46815 = G__46994;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = function(state_46815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1.call(this,state_46815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results))
})();
var state__46444__auto__ = (function (){var statearr_46824 = f__46443__auto__.call(null);
(statearr_46824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___46992);

return statearr_46824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___46992,res,vec__46810,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46825){
var vec__46826 = p__46825;
var v = cljs.core.nth.call(null,vec__46826,(0),null);
var p = cljs.core.nth.call(null,vec__46826,(1),null);
var job = vec__46826;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__41607__auto___46995 = n;
var __46996 = (0);
while(true){
if((__46996 < n__41607__auto___46995)){
var G__46827_46997 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46827_46997) {
case "compute":
var c__46442__auto___46999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46996,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (__46996,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function (state_46840){
var state_val_46841 = (state_46840[(1)]);
if((state_val_46841 === (1))){
var state_46840__$1 = state_46840;
var statearr_46842_47000 = state_46840__$1;
(statearr_46842_47000[(2)] = null);

(statearr_46842_47000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46841 === (2))){
var state_46840__$1 = state_46840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46840__$1,(4),jobs);
} else {
if((state_val_46841 === (3))){
var inst_46838 = (state_46840[(2)]);
var state_46840__$1 = state_46840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46840__$1,inst_46838);
} else {
if((state_val_46841 === (4))){
var inst_46830 = (state_46840[(2)]);
var inst_46831 = process.call(null,inst_46830);
var state_46840__$1 = state_46840;
if(cljs.core.truth_(inst_46831)){
var statearr_46843_47001 = state_46840__$1;
(statearr_46843_47001[(1)] = (5));

} else {
var statearr_46844_47002 = state_46840__$1;
(statearr_46844_47002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46841 === (5))){
var state_46840__$1 = state_46840;
var statearr_46845_47003 = state_46840__$1;
(statearr_46845_47003[(2)] = null);

(statearr_46845_47003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46841 === (6))){
var state_46840__$1 = state_46840;
var statearr_46846_47004 = state_46840__$1;
(statearr_46846_47004[(2)] = null);

(statearr_46846_47004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46841 === (7))){
var inst_46836 = (state_46840[(2)]);
var state_46840__$1 = state_46840;
var statearr_46847_47005 = state_46840__$1;
(statearr_46847_47005[(2)] = inst_46836);

(statearr_46847_47005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46996,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
;
return ((function (__46996,switch__46330__auto__,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_46851 = [null,null,null,null,null,null,null];
(statearr_46851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__);

(statearr_46851[(1)] = (1));

return statearr_46851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1 = (function (state_46840){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46852){if((e46852 instanceof Object)){
var ex__46334__auto__ = e46852;
var statearr_46853_47006 = state_46840;
(statearr_46853_47006[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47007 = state_46840;
state_46840 = G__47007;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = function(state_46840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1.call(this,state_46840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__;
})()
;})(__46996,switch__46330__auto__,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
})();
var state__46444__auto__ = (function (){var statearr_46854 = f__46443__auto__.call(null);
(statearr_46854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___46999);

return statearr_46854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(__46996,c__46442__auto___46999,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
);


break;
case "async":
var c__46442__auto___47008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46996,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (__46996,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function (state_46867){
var state_val_46868 = (state_46867[(1)]);
if((state_val_46868 === (1))){
var state_46867__$1 = state_46867;
var statearr_46869_47009 = state_46867__$1;
(statearr_46869_47009[(2)] = null);

(statearr_46869_47009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (2))){
var state_46867__$1 = state_46867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46867__$1,(4),jobs);
} else {
if((state_val_46868 === (3))){
var inst_46865 = (state_46867[(2)]);
var state_46867__$1 = state_46867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46867__$1,inst_46865);
} else {
if((state_val_46868 === (4))){
var inst_46857 = (state_46867[(2)]);
var inst_46858 = async.call(null,inst_46857);
var state_46867__$1 = state_46867;
if(cljs.core.truth_(inst_46858)){
var statearr_46870_47010 = state_46867__$1;
(statearr_46870_47010[(1)] = (5));

} else {
var statearr_46871_47011 = state_46867__$1;
(statearr_46871_47011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (5))){
var state_46867__$1 = state_46867;
var statearr_46872_47012 = state_46867__$1;
(statearr_46872_47012[(2)] = null);

(statearr_46872_47012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (6))){
var state_46867__$1 = state_46867;
var statearr_46873_47013 = state_46867__$1;
(statearr_46873_47013[(2)] = null);

(statearr_46873_47013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (7))){
var inst_46863 = (state_46867[(2)]);
var state_46867__$1 = state_46867;
var statearr_46874_47014 = state_46867__$1;
(statearr_46874_47014[(2)] = inst_46863);

(statearr_46874_47014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46996,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
;
return ((function (__46996,switch__46330__auto__,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_46878 = [null,null,null,null,null,null,null];
(statearr_46878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__);

(statearr_46878[(1)] = (1));

return statearr_46878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1 = (function (state_46867){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46879){if((e46879 instanceof Object)){
var ex__46334__auto__ = e46879;
var statearr_46880_47015 = state_46867;
(statearr_46880_47015[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47016 = state_46867;
state_46867 = G__47016;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = function(state_46867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1.call(this,state_46867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__;
})()
;})(__46996,switch__46330__auto__,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
})();
var state__46444__auto__ = (function (){var statearr_46881 = f__46443__auto__.call(null);
(statearr_46881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___47008);

return statearr_46881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(__46996,c__46442__auto___47008,G__46827_46997,n__41607__auto___46995,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47017 = (__46996 + (1));
__46996 = G__47017;
continue;
} else {
}
break;
}

var c__46442__auto___47018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___47018,jobs,results,process,async){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___47018,jobs,results,process,async){
return (function (state_46903){
var state_val_46904 = (state_46903[(1)]);
if((state_val_46904 === (1))){
var state_46903__$1 = state_46903;
var statearr_46905_47019 = state_46903__$1;
(statearr_46905_47019[(2)] = null);

(statearr_46905_47019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (2))){
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46903__$1,(4),from);
} else {
if((state_val_46904 === (3))){
var inst_46901 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46903__$1,inst_46901);
} else {
if((state_val_46904 === (4))){
var inst_46884 = (state_46903[(7)]);
var inst_46884__$1 = (state_46903[(2)]);
var inst_46885 = (inst_46884__$1 == null);
var state_46903__$1 = (function (){var statearr_46906 = state_46903;
(statearr_46906[(7)] = inst_46884__$1);

return statearr_46906;
})();
if(cljs.core.truth_(inst_46885)){
var statearr_46907_47020 = state_46903__$1;
(statearr_46907_47020[(1)] = (5));

} else {
var statearr_46908_47021 = state_46903__$1;
(statearr_46908_47021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (5))){
var inst_46887 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46903__$1 = state_46903;
var statearr_46909_47022 = state_46903__$1;
(statearr_46909_47022[(2)] = inst_46887);

(statearr_46909_47022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (6))){
var inst_46889 = (state_46903[(8)]);
var inst_46884 = (state_46903[(7)]);
var inst_46889__$1 = cljs.core.async.chan.call(null,(1));
var inst_46890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46891 = [inst_46884,inst_46889__$1];
var inst_46892 = (new cljs.core.PersistentVector(null,2,(5),inst_46890,inst_46891,null));
var state_46903__$1 = (function (){var statearr_46910 = state_46903;
(statearr_46910[(8)] = inst_46889__$1);

return statearr_46910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46903__$1,(8),jobs,inst_46892);
} else {
if((state_val_46904 === (7))){
var inst_46899 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46911_47023 = state_46903__$1;
(statearr_46911_47023[(2)] = inst_46899);

(statearr_46911_47023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (8))){
var inst_46889 = (state_46903[(8)]);
var inst_46894 = (state_46903[(2)]);
var state_46903__$1 = (function (){var statearr_46912 = state_46903;
(statearr_46912[(9)] = inst_46894);

return statearr_46912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46903__$1,(9),results,inst_46889);
} else {
if((state_val_46904 === (9))){
var inst_46896 = (state_46903[(2)]);
var state_46903__$1 = (function (){var statearr_46913 = state_46903;
(statearr_46913[(10)] = inst_46896);

return statearr_46913;
})();
var statearr_46914_47024 = state_46903__$1;
(statearr_46914_47024[(2)] = null);

(statearr_46914_47024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__46442__auto___47018,jobs,results,process,async))
;
return ((function (switch__46330__auto__,c__46442__auto___47018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_46918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__);

(statearr_46918[(1)] = (1));

return statearr_46918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1 = (function (state_46903){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46919){if((e46919 instanceof Object)){
var ex__46334__auto__ = e46919;
var statearr_46920_47025 = state_46903;
(statearr_46920_47025[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47026 = state_46903;
state_46903 = G__47026;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = function(state_46903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1.call(this,state_46903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___47018,jobs,results,process,async))
})();
var state__46444__auto__ = (function (){var statearr_46921 = f__46443__auto__.call(null);
(statearr_46921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___47018);

return statearr_46921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___47018,jobs,results,process,async))
);


var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,jobs,results,process,async){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,jobs,results,process,async){
return (function (state_46959){
var state_val_46960 = (state_46959[(1)]);
if((state_val_46960 === (7))){
var inst_46955 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
var statearr_46961_47027 = state_46959__$1;
(statearr_46961_47027[(2)] = inst_46955);

(statearr_46961_47027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (20))){
var state_46959__$1 = state_46959;
var statearr_46962_47028 = state_46959__$1;
(statearr_46962_47028[(2)] = null);

(statearr_46962_47028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (1))){
var state_46959__$1 = state_46959;
var statearr_46963_47029 = state_46959__$1;
(statearr_46963_47029[(2)] = null);

(statearr_46963_47029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (4))){
var inst_46924 = (state_46959[(7)]);
var inst_46924__$1 = (state_46959[(2)]);
var inst_46925 = (inst_46924__$1 == null);
var state_46959__$1 = (function (){var statearr_46964 = state_46959;
(statearr_46964[(7)] = inst_46924__$1);

return statearr_46964;
})();
if(cljs.core.truth_(inst_46925)){
var statearr_46965_47030 = state_46959__$1;
(statearr_46965_47030[(1)] = (5));

} else {
var statearr_46966_47031 = state_46959__$1;
(statearr_46966_47031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (15))){
var inst_46937 = (state_46959[(8)]);
var state_46959__$1 = state_46959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46959__$1,(18),to,inst_46937);
} else {
if((state_val_46960 === (21))){
var inst_46950 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
var statearr_46967_47032 = state_46959__$1;
(statearr_46967_47032[(2)] = inst_46950);

(statearr_46967_47032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (13))){
var inst_46952 = (state_46959[(2)]);
var state_46959__$1 = (function (){var statearr_46968 = state_46959;
(statearr_46968[(9)] = inst_46952);

return statearr_46968;
})();
var statearr_46969_47033 = state_46959__$1;
(statearr_46969_47033[(2)] = null);

(statearr_46969_47033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (6))){
var inst_46924 = (state_46959[(7)]);
var state_46959__$1 = state_46959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46959__$1,(11),inst_46924);
} else {
if((state_val_46960 === (17))){
var inst_46945 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
if(cljs.core.truth_(inst_46945)){
var statearr_46970_47034 = state_46959__$1;
(statearr_46970_47034[(1)] = (19));

} else {
var statearr_46971_47035 = state_46959__$1;
(statearr_46971_47035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (3))){
var inst_46957 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46959__$1,inst_46957);
} else {
if((state_val_46960 === (12))){
var inst_46934 = (state_46959[(10)]);
var state_46959__$1 = state_46959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46959__$1,(14),inst_46934);
} else {
if((state_val_46960 === (2))){
var state_46959__$1 = state_46959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46959__$1,(4),results);
} else {
if((state_val_46960 === (19))){
var state_46959__$1 = state_46959;
var statearr_46972_47036 = state_46959__$1;
(statearr_46972_47036[(2)] = null);

(statearr_46972_47036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (11))){
var inst_46934 = (state_46959[(2)]);
var state_46959__$1 = (function (){var statearr_46973 = state_46959;
(statearr_46973[(10)] = inst_46934);

return statearr_46973;
})();
var statearr_46974_47037 = state_46959__$1;
(statearr_46974_47037[(2)] = null);

(statearr_46974_47037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (9))){
var state_46959__$1 = state_46959;
var statearr_46975_47038 = state_46959__$1;
(statearr_46975_47038[(2)] = null);

(statearr_46975_47038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (5))){
var state_46959__$1 = state_46959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46976_47039 = state_46959__$1;
(statearr_46976_47039[(1)] = (8));

} else {
var statearr_46977_47040 = state_46959__$1;
(statearr_46977_47040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (14))){
var inst_46939 = (state_46959[(11)]);
var inst_46937 = (state_46959[(8)]);
var inst_46937__$1 = (state_46959[(2)]);
var inst_46938 = (inst_46937__$1 == null);
var inst_46939__$1 = cljs.core.not.call(null,inst_46938);
var state_46959__$1 = (function (){var statearr_46978 = state_46959;
(statearr_46978[(11)] = inst_46939__$1);

(statearr_46978[(8)] = inst_46937__$1);

return statearr_46978;
})();
if(inst_46939__$1){
var statearr_46979_47041 = state_46959__$1;
(statearr_46979_47041[(1)] = (15));

} else {
var statearr_46980_47042 = state_46959__$1;
(statearr_46980_47042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (16))){
var inst_46939 = (state_46959[(11)]);
var state_46959__$1 = state_46959;
var statearr_46981_47043 = state_46959__$1;
(statearr_46981_47043[(2)] = inst_46939);

(statearr_46981_47043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (10))){
var inst_46931 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
var statearr_46982_47044 = state_46959__$1;
(statearr_46982_47044[(2)] = inst_46931);

(statearr_46982_47044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (18))){
var inst_46942 = (state_46959[(2)]);
var state_46959__$1 = state_46959;
var statearr_46983_47045 = state_46959__$1;
(statearr_46983_47045[(2)] = inst_46942);

(statearr_46983_47045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46960 === (8))){
var inst_46928 = cljs.core.async.close_BANG_.call(null,to);
var state_46959__$1 = state_46959;
var statearr_46984_47046 = state_46959__$1;
(statearr_46984_47046[(2)] = inst_46928);

(statearr_46984_47046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto__,jobs,results,process,async))
;
return ((function (switch__46330__auto__,c__46442__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_46988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__);

(statearr_46988[(1)] = (1));

return statearr_46988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1 = (function (state_46959){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_46959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e46989){if((e46989 instanceof Object)){
var ex__46334__auto__ = e46989;
var statearr_46990_47047 = state_46959;
(statearr_46990_47047[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47048 = state_46959;
state_46959 = G__47048;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__ = function(state_46959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1.call(this,state_46959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,jobs,results,process,async))
})();
var state__46444__auto__ = (function (){var statearr_46991 = f__46443__auto__.call(null);
(statearr_46991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_46991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,jobs,results,process,async))
);

return c__46442__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args47049 = [];
var len__41762__auto___47052 = arguments.length;
var i__41763__auto___47053 = (0);
while(true){
if((i__41763__auto___47053 < len__41762__auto___47052)){
args47049.push((arguments[i__41763__auto___47053]));

var G__47054 = (i__41763__auto___47053 + (1));
i__41763__auto___47053 = G__47054;
continue;
} else {
}
break;
}

var G__47051 = args47049.length;
switch (G__47051) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47049.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args47056 = [];
var len__41762__auto___47059 = arguments.length;
var i__41763__auto___47060 = (0);
while(true){
if((i__41763__auto___47060 < len__41762__auto___47059)){
args47056.push((arguments[i__41763__auto___47060]));

var G__47061 = (i__41763__auto___47060 + (1));
i__41763__auto___47060 = G__47061;
continue;
} else {
}
break;
}

var G__47058 = args47056.length;
switch (G__47058) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47056.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args47063 = [];
var len__41762__auto___47116 = arguments.length;
var i__41763__auto___47117 = (0);
while(true){
if((i__41763__auto___47117 < len__41762__auto___47116)){
args47063.push((arguments[i__41763__auto___47117]));

var G__47118 = (i__41763__auto___47117 + (1));
i__41763__auto___47117 = G__47118;
continue;
} else {
}
break;
}

var G__47065 = args47063.length;
switch (G__47065) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47063.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46442__auto___47120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___47120,tc,fc){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___47120,tc,fc){
return (function (state_47091){
var state_val_47092 = (state_47091[(1)]);
if((state_val_47092 === (7))){
var inst_47087 = (state_47091[(2)]);
var state_47091__$1 = state_47091;
var statearr_47093_47121 = state_47091__$1;
(statearr_47093_47121[(2)] = inst_47087);

(statearr_47093_47121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (1))){
var state_47091__$1 = state_47091;
var statearr_47094_47122 = state_47091__$1;
(statearr_47094_47122[(2)] = null);

(statearr_47094_47122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (4))){
var inst_47068 = (state_47091[(7)]);
var inst_47068__$1 = (state_47091[(2)]);
var inst_47069 = (inst_47068__$1 == null);
var state_47091__$1 = (function (){var statearr_47095 = state_47091;
(statearr_47095[(7)] = inst_47068__$1);

return statearr_47095;
})();
if(cljs.core.truth_(inst_47069)){
var statearr_47096_47123 = state_47091__$1;
(statearr_47096_47123[(1)] = (5));

} else {
var statearr_47097_47124 = state_47091__$1;
(statearr_47097_47124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (13))){
var state_47091__$1 = state_47091;
var statearr_47098_47125 = state_47091__$1;
(statearr_47098_47125[(2)] = null);

(statearr_47098_47125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (6))){
var inst_47068 = (state_47091[(7)]);
var inst_47074 = p.call(null,inst_47068);
var state_47091__$1 = state_47091;
if(cljs.core.truth_(inst_47074)){
var statearr_47099_47126 = state_47091__$1;
(statearr_47099_47126[(1)] = (9));

} else {
var statearr_47100_47127 = state_47091__$1;
(statearr_47100_47127[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (3))){
var inst_47089 = (state_47091[(2)]);
var state_47091__$1 = state_47091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47091__$1,inst_47089);
} else {
if((state_val_47092 === (12))){
var state_47091__$1 = state_47091;
var statearr_47101_47128 = state_47091__$1;
(statearr_47101_47128[(2)] = null);

(statearr_47101_47128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (2))){
var state_47091__$1 = state_47091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47091__$1,(4),ch);
} else {
if((state_val_47092 === (11))){
var inst_47068 = (state_47091[(7)]);
var inst_47078 = (state_47091[(2)]);
var state_47091__$1 = state_47091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47091__$1,(8),inst_47078,inst_47068);
} else {
if((state_val_47092 === (9))){
var state_47091__$1 = state_47091;
var statearr_47102_47129 = state_47091__$1;
(statearr_47102_47129[(2)] = tc);

(statearr_47102_47129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (5))){
var inst_47071 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47072 = cljs.core.async.close_BANG_.call(null,fc);
var state_47091__$1 = (function (){var statearr_47103 = state_47091;
(statearr_47103[(8)] = inst_47071);

return statearr_47103;
})();
var statearr_47104_47130 = state_47091__$1;
(statearr_47104_47130[(2)] = inst_47072);

(statearr_47104_47130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (14))){
var inst_47085 = (state_47091[(2)]);
var state_47091__$1 = state_47091;
var statearr_47105_47131 = state_47091__$1;
(statearr_47105_47131[(2)] = inst_47085);

(statearr_47105_47131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (10))){
var state_47091__$1 = state_47091;
var statearr_47106_47132 = state_47091__$1;
(statearr_47106_47132[(2)] = fc);

(statearr_47106_47132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47092 === (8))){
var inst_47080 = (state_47091[(2)]);
var state_47091__$1 = state_47091;
if(cljs.core.truth_(inst_47080)){
var statearr_47107_47133 = state_47091__$1;
(statearr_47107_47133[(1)] = (12));

} else {
var statearr_47108_47134 = state_47091__$1;
(statearr_47108_47134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___47120,tc,fc))
;
return ((function (switch__46330__auto__,c__46442__auto___47120,tc,fc){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_47112 = [null,null,null,null,null,null,null,null,null];
(statearr_47112[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_47112[(1)] = (1));

return statearr_47112;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_47091){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_47091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e47113){if((e47113 instanceof Object)){
var ex__46334__auto__ = e47113;
var statearr_47114_47135 = state_47091;
(statearr_47114_47135[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47136 = state_47091;
state_47091 = G__47136;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_47091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_47091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___47120,tc,fc))
})();
var state__46444__auto__ = (function (){var statearr_47115 = f__46443__auto__.call(null);
(statearr_47115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___47120);

return statearr_47115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___47120,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_47200){
var state_val_47201 = (state_47200[(1)]);
if((state_val_47201 === (7))){
var inst_47196 = (state_47200[(2)]);
var state_47200__$1 = state_47200;
var statearr_47202_47223 = state_47200__$1;
(statearr_47202_47223[(2)] = inst_47196);

(statearr_47202_47223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (1))){
var inst_47180 = init;
var state_47200__$1 = (function (){var statearr_47203 = state_47200;
(statearr_47203[(7)] = inst_47180);

return statearr_47203;
})();
var statearr_47204_47224 = state_47200__$1;
(statearr_47204_47224[(2)] = null);

(statearr_47204_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (4))){
var inst_47183 = (state_47200[(8)]);
var inst_47183__$1 = (state_47200[(2)]);
var inst_47184 = (inst_47183__$1 == null);
var state_47200__$1 = (function (){var statearr_47205 = state_47200;
(statearr_47205[(8)] = inst_47183__$1);

return statearr_47205;
})();
if(cljs.core.truth_(inst_47184)){
var statearr_47206_47225 = state_47200__$1;
(statearr_47206_47225[(1)] = (5));

} else {
var statearr_47207_47226 = state_47200__$1;
(statearr_47207_47226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (6))){
var inst_47187 = (state_47200[(9)]);
var inst_47180 = (state_47200[(7)]);
var inst_47183 = (state_47200[(8)]);
var inst_47187__$1 = f.call(null,inst_47180,inst_47183);
var inst_47188 = cljs.core.reduced_QMARK_.call(null,inst_47187__$1);
var state_47200__$1 = (function (){var statearr_47208 = state_47200;
(statearr_47208[(9)] = inst_47187__$1);

return statearr_47208;
})();
if(inst_47188){
var statearr_47209_47227 = state_47200__$1;
(statearr_47209_47227[(1)] = (8));

} else {
var statearr_47210_47228 = state_47200__$1;
(statearr_47210_47228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (3))){
var inst_47198 = (state_47200[(2)]);
var state_47200__$1 = state_47200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47200__$1,inst_47198);
} else {
if((state_val_47201 === (2))){
var state_47200__$1 = state_47200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47200__$1,(4),ch);
} else {
if((state_val_47201 === (9))){
var inst_47187 = (state_47200[(9)]);
var inst_47180 = inst_47187;
var state_47200__$1 = (function (){var statearr_47211 = state_47200;
(statearr_47211[(7)] = inst_47180);

return statearr_47211;
})();
var statearr_47212_47229 = state_47200__$1;
(statearr_47212_47229[(2)] = null);

(statearr_47212_47229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (5))){
var inst_47180 = (state_47200[(7)]);
var state_47200__$1 = state_47200;
var statearr_47213_47230 = state_47200__$1;
(statearr_47213_47230[(2)] = inst_47180);

(statearr_47213_47230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (10))){
var inst_47194 = (state_47200[(2)]);
var state_47200__$1 = state_47200;
var statearr_47214_47231 = state_47200__$1;
(statearr_47214_47231[(2)] = inst_47194);

(statearr_47214_47231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47201 === (8))){
var inst_47187 = (state_47200[(9)]);
var inst_47190 = cljs.core.deref.call(null,inst_47187);
var state_47200__$1 = state_47200;
var statearr_47215_47232 = state_47200__$1;
(statearr_47215_47232[(2)] = inst_47190);

(statearr_47215_47232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46331__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46331__auto____0 = (function (){
var statearr_47219 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47219[(0)] = cljs$core$async$reduce_$_state_machine__46331__auto__);

(statearr_47219[(1)] = (1));

return statearr_47219;
});
var cljs$core$async$reduce_$_state_machine__46331__auto____1 = (function (state_47200){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_47200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e47220){if((e47220 instanceof Object)){
var ex__46334__auto__ = e47220;
var statearr_47221_47233 = state_47200;
(statearr_47221_47233[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47234 = state_47200;
state_47200 = G__47234;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46331__auto__ = function(state_47200){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46331__auto____1.call(this,state_47200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46331__auto____0;
cljs$core$async$reduce_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46331__auto____1;
return cljs$core$async$reduce_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_47222 = f__46443__auto__.call(null);
(statearr_47222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_47222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47235 = [];
var len__41762__auto___47287 = arguments.length;
var i__41763__auto___47288 = (0);
while(true){
if((i__41763__auto___47288 < len__41762__auto___47287)){
args47235.push((arguments[i__41763__auto___47288]));

var G__47289 = (i__41763__auto___47288 + (1));
i__41763__auto___47288 = G__47289;
continue;
} else {
}
break;
}

var G__47237 = args47235.length;
switch (G__47237) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47235.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_47262){
var state_val_47263 = (state_47262[(1)]);
if((state_val_47263 === (7))){
var inst_47244 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
var statearr_47264_47291 = state_47262__$1;
(statearr_47264_47291[(2)] = inst_47244);

(statearr_47264_47291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (1))){
var inst_47238 = cljs.core.seq.call(null,coll);
var inst_47239 = inst_47238;
var state_47262__$1 = (function (){var statearr_47265 = state_47262;
(statearr_47265[(7)] = inst_47239);

return statearr_47265;
})();
var statearr_47266_47292 = state_47262__$1;
(statearr_47266_47292[(2)] = null);

(statearr_47266_47292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (4))){
var inst_47239 = (state_47262[(7)]);
var inst_47242 = cljs.core.first.call(null,inst_47239);
var state_47262__$1 = state_47262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47262__$1,(7),ch,inst_47242);
} else {
if((state_val_47263 === (13))){
var inst_47256 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
var statearr_47267_47293 = state_47262__$1;
(statearr_47267_47293[(2)] = inst_47256);

(statearr_47267_47293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (6))){
var inst_47247 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
if(cljs.core.truth_(inst_47247)){
var statearr_47268_47294 = state_47262__$1;
(statearr_47268_47294[(1)] = (8));

} else {
var statearr_47269_47295 = state_47262__$1;
(statearr_47269_47295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (3))){
var inst_47260 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47262__$1,inst_47260);
} else {
if((state_val_47263 === (12))){
var state_47262__$1 = state_47262;
var statearr_47270_47296 = state_47262__$1;
(statearr_47270_47296[(2)] = null);

(statearr_47270_47296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (2))){
var inst_47239 = (state_47262[(7)]);
var state_47262__$1 = state_47262;
if(cljs.core.truth_(inst_47239)){
var statearr_47271_47297 = state_47262__$1;
(statearr_47271_47297[(1)] = (4));

} else {
var statearr_47272_47298 = state_47262__$1;
(statearr_47272_47298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (11))){
var inst_47253 = cljs.core.async.close_BANG_.call(null,ch);
var state_47262__$1 = state_47262;
var statearr_47273_47299 = state_47262__$1;
(statearr_47273_47299[(2)] = inst_47253);

(statearr_47273_47299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (9))){
var state_47262__$1 = state_47262;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47274_47300 = state_47262__$1;
(statearr_47274_47300[(1)] = (11));

} else {
var statearr_47275_47301 = state_47262__$1;
(statearr_47275_47301[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (5))){
var inst_47239 = (state_47262[(7)]);
var state_47262__$1 = state_47262;
var statearr_47276_47302 = state_47262__$1;
(statearr_47276_47302[(2)] = inst_47239);

(statearr_47276_47302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (10))){
var inst_47258 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
var statearr_47277_47303 = state_47262__$1;
(statearr_47277_47303[(2)] = inst_47258);

(statearr_47277_47303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (8))){
var inst_47239 = (state_47262[(7)]);
var inst_47249 = cljs.core.next.call(null,inst_47239);
var inst_47239__$1 = inst_47249;
var state_47262__$1 = (function (){var statearr_47278 = state_47262;
(statearr_47278[(7)] = inst_47239__$1);

return statearr_47278;
})();
var statearr_47279_47304 = state_47262__$1;
(statearr_47279_47304[(2)] = null);

(statearr_47279_47304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_47283 = [null,null,null,null,null,null,null,null];
(statearr_47283[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_47283[(1)] = (1));

return statearr_47283;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_47262){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_47262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e47284){if((e47284 instanceof Object)){
var ex__46334__auto__ = e47284;
var statearr_47285_47305 = state_47262;
(statearr_47285_47305[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47306 = state_47262;
state_47262 = G__47306;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_47262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_47262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_47286 = f__46443__auto__.call(null);
(statearr_47286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_47286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__41355__auto__ = (((_ == null))?null:_);
var m__41356__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,_);
} else {
var m__41356__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41356__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,ch);
} else {
var m__41356__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m);
} else {
var m__41356__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47528 = (function (mult,ch,cs,meta47529){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47529 = meta47529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47530,meta47529__$1){
var self__ = this;
var _47530__$1 = this;
return (new cljs.core.async.t_cljs$core$async47528(self__.mult,self__.ch,self__.cs,meta47529__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47530){
var self__ = this;
var _47530__$1 = this;
return self__.meta47529;
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47529","meta47529",176503985,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47528";

cljs.core.async.t_cljs$core$async47528.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async47528");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47528 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47528(mult__$1,ch__$1,cs__$1,meta47529){
return (new cljs.core.async.t_cljs$core$async47528(mult__$1,ch__$1,cs__$1,meta47529));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47528(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46442__auto___47749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___47749,cs,m,dchan,dctr,done){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___47749,cs,m,dchan,dctr,done){
return (function (state_47661){
var state_val_47662 = (state_47661[(1)]);
if((state_val_47662 === (7))){
var inst_47657 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47663_47750 = state_47661__$1;
(statearr_47663_47750[(2)] = inst_47657);

(statearr_47663_47750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (20))){
var inst_47562 = (state_47661[(7)]);
var inst_47572 = cljs.core.first.call(null,inst_47562);
var inst_47573 = cljs.core.nth.call(null,inst_47572,(0),null);
var inst_47574 = cljs.core.nth.call(null,inst_47572,(1),null);
var state_47661__$1 = (function (){var statearr_47664 = state_47661;
(statearr_47664[(8)] = inst_47573);

return statearr_47664;
})();
if(cljs.core.truth_(inst_47574)){
var statearr_47665_47751 = state_47661__$1;
(statearr_47665_47751[(1)] = (22));

} else {
var statearr_47666_47752 = state_47661__$1;
(statearr_47666_47752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (27))){
var inst_47609 = (state_47661[(9)]);
var inst_47604 = (state_47661[(10)]);
var inst_47602 = (state_47661[(11)]);
var inst_47533 = (state_47661[(12)]);
var inst_47609__$1 = cljs.core._nth.call(null,inst_47602,inst_47604);
var inst_47610 = cljs.core.async.put_BANG_.call(null,inst_47609__$1,inst_47533,done);
var state_47661__$1 = (function (){var statearr_47667 = state_47661;
(statearr_47667[(9)] = inst_47609__$1);

return statearr_47667;
})();
if(cljs.core.truth_(inst_47610)){
var statearr_47668_47753 = state_47661__$1;
(statearr_47668_47753[(1)] = (30));

} else {
var statearr_47669_47754 = state_47661__$1;
(statearr_47669_47754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (1))){
var state_47661__$1 = state_47661;
var statearr_47670_47755 = state_47661__$1;
(statearr_47670_47755[(2)] = null);

(statearr_47670_47755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (24))){
var inst_47562 = (state_47661[(7)]);
var inst_47579 = (state_47661[(2)]);
var inst_47580 = cljs.core.next.call(null,inst_47562);
var inst_47542 = inst_47580;
var inst_47543 = null;
var inst_47544 = (0);
var inst_47545 = (0);
var state_47661__$1 = (function (){var statearr_47671 = state_47661;
(statearr_47671[(13)] = inst_47545);

(statearr_47671[(14)] = inst_47542);

(statearr_47671[(15)] = inst_47544);

(statearr_47671[(16)] = inst_47543);

(statearr_47671[(17)] = inst_47579);

return statearr_47671;
})();
var statearr_47672_47756 = state_47661__$1;
(statearr_47672_47756[(2)] = null);

(statearr_47672_47756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (39))){
var state_47661__$1 = state_47661;
var statearr_47676_47757 = state_47661__$1;
(statearr_47676_47757[(2)] = null);

(statearr_47676_47757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (4))){
var inst_47533 = (state_47661[(12)]);
var inst_47533__$1 = (state_47661[(2)]);
var inst_47534 = (inst_47533__$1 == null);
var state_47661__$1 = (function (){var statearr_47677 = state_47661;
(statearr_47677[(12)] = inst_47533__$1);

return statearr_47677;
})();
if(cljs.core.truth_(inst_47534)){
var statearr_47678_47758 = state_47661__$1;
(statearr_47678_47758[(1)] = (5));

} else {
var statearr_47679_47759 = state_47661__$1;
(statearr_47679_47759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (15))){
var inst_47545 = (state_47661[(13)]);
var inst_47542 = (state_47661[(14)]);
var inst_47544 = (state_47661[(15)]);
var inst_47543 = (state_47661[(16)]);
var inst_47558 = (state_47661[(2)]);
var inst_47559 = (inst_47545 + (1));
var tmp47673 = inst_47542;
var tmp47674 = inst_47544;
var tmp47675 = inst_47543;
var inst_47542__$1 = tmp47673;
var inst_47543__$1 = tmp47675;
var inst_47544__$1 = tmp47674;
var inst_47545__$1 = inst_47559;
var state_47661__$1 = (function (){var statearr_47680 = state_47661;
(statearr_47680[(13)] = inst_47545__$1);

(statearr_47680[(14)] = inst_47542__$1);

(statearr_47680[(15)] = inst_47544__$1);

(statearr_47680[(18)] = inst_47558);

(statearr_47680[(16)] = inst_47543__$1);

return statearr_47680;
})();
var statearr_47681_47760 = state_47661__$1;
(statearr_47681_47760[(2)] = null);

(statearr_47681_47760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (21))){
var inst_47583 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47685_47761 = state_47661__$1;
(statearr_47685_47761[(2)] = inst_47583);

(statearr_47685_47761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (31))){
var inst_47609 = (state_47661[(9)]);
var inst_47613 = done.call(null,null);
var inst_47614 = cljs.core.async.untap_STAR_.call(null,m,inst_47609);
var state_47661__$1 = (function (){var statearr_47686 = state_47661;
(statearr_47686[(19)] = inst_47613);

return statearr_47686;
})();
var statearr_47687_47762 = state_47661__$1;
(statearr_47687_47762[(2)] = inst_47614);

(statearr_47687_47762[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (32))){
var inst_47604 = (state_47661[(10)]);
var inst_47602 = (state_47661[(11)]);
var inst_47601 = (state_47661[(20)]);
var inst_47603 = (state_47661[(21)]);
var inst_47616 = (state_47661[(2)]);
var inst_47617 = (inst_47604 + (1));
var tmp47682 = inst_47602;
var tmp47683 = inst_47601;
var tmp47684 = inst_47603;
var inst_47601__$1 = tmp47683;
var inst_47602__$1 = tmp47682;
var inst_47603__$1 = tmp47684;
var inst_47604__$1 = inst_47617;
var state_47661__$1 = (function (){var statearr_47688 = state_47661;
(statearr_47688[(10)] = inst_47604__$1);

(statearr_47688[(11)] = inst_47602__$1);

(statearr_47688[(22)] = inst_47616);

(statearr_47688[(20)] = inst_47601__$1);

(statearr_47688[(21)] = inst_47603__$1);

return statearr_47688;
})();
var statearr_47689_47763 = state_47661__$1;
(statearr_47689_47763[(2)] = null);

(statearr_47689_47763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (40))){
var inst_47629 = (state_47661[(23)]);
var inst_47633 = done.call(null,null);
var inst_47634 = cljs.core.async.untap_STAR_.call(null,m,inst_47629);
var state_47661__$1 = (function (){var statearr_47690 = state_47661;
(statearr_47690[(24)] = inst_47633);

return statearr_47690;
})();
var statearr_47691_47764 = state_47661__$1;
(statearr_47691_47764[(2)] = inst_47634);

(statearr_47691_47764[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (33))){
var inst_47620 = (state_47661[(25)]);
var inst_47622 = cljs.core.chunked_seq_QMARK_.call(null,inst_47620);
var state_47661__$1 = state_47661;
if(inst_47622){
var statearr_47692_47765 = state_47661__$1;
(statearr_47692_47765[(1)] = (36));

} else {
var statearr_47693_47766 = state_47661__$1;
(statearr_47693_47766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (13))){
var inst_47552 = (state_47661[(26)]);
var inst_47555 = cljs.core.async.close_BANG_.call(null,inst_47552);
var state_47661__$1 = state_47661;
var statearr_47694_47767 = state_47661__$1;
(statearr_47694_47767[(2)] = inst_47555);

(statearr_47694_47767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (22))){
var inst_47573 = (state_47661[(8)]);
var inst_47576 = cljs.core.async.close_BANG_.call(null,inst_47573);
var state_47661__$1 = state_47661;
var statearr_47695_47768 = state_47661__$1;
(statearr_47695_47768[(2)] = inst_47576);

(statearr_47695_47768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (36))){
var inst_47620 = (state_47661[(25)]);
var inst_47624 = cljs.core.chunk_first.call(null,inst_47620);
var inst_47625 = cljs.core.chunk_rest.call(null,inst_47620);
var inst_47626 = cljs.core.count.call(null,inst_47624);
var inst_47601 = inst_47625;
var inst_47602 = inst_47624;
var inst_47603 = inst_47626;
var inst_47604 = (0);
var state_47661__$1 = (function (){var statearr_47696 = state_47661;
(statearr_47696[(10)] = inst_47604);

(statearr_47696[(11)] = inst_47602);

(statearr_47696[(20)] = inst_47601);

(statearr_47696[(21)] = inst_47603);

return statearr_47696;
})();
var statearr_47697_47769 = state_47661__$1;
(statearr_47697_47769[(2)] = null);

(statearr_47697_47769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (41))){
var inst_47620 = (state_47661[(25)]);
var inst_47636 = (state_47661[(2)]);
var inst_47637 = cljs.core.next.call(null,inst_47620);
var inst_47601 = inst_47637;
var inst_47602 = null;
var inst_47603 = (0);
var inst_47604 = (0);
var state_47661__$1 = (function (){var statearr_47698 = state_47661;
(statearr_47698[(10)] = inst_47604);

(statearr_47698[(27)] = inst_47636);

(statearr_47698[(11)] = inst_47602);

(statearr_47698[(20)] = inst_47601);

(statearr_47698[(21)] = inst_47603);

return statearr_47698;
})();
var statearr_47699_47770 = state_47661__$1;
(statearr_47699_47770[(2)] = null);

(statearr_47699_47770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (43))){
var state_47661__$1 = state_47661;
var statearr_47700_47771 = state_47661__$1;
(statearr_47700_47771[(2)] = null);

(statearr_47700_47771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (29))){
var inst_47645 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47701_47772 = state_47661__$1;
(statearr_47701_47772[(2)] = inst_47645);

(statearr_47701_47772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (44))){
var inst_47654 = (state_47661[(2)]);
var state_47661__$1 = (function (){var statearr_47702 = state_47661;
(statearr_47702[(28)] = inst_47654);

return statearr_47702;
})();
var statearr_47703_47773 = state_47661__$1;
(statearr_47703_47773[(2)] = null);

(statearr_47703_47773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (6))){
var inst_47593 = (state_47661[(29)]);
var inst_47592 = cljs.core.deref.call(null,cs);
var inst_47593__$1 = cljs.core.keys.call(null,inst_47592);
var inst_47594 = cljs.core.count.call(null,inst_47593__$1);
var inst_47595 = cljs.core.reset_BANG_.call(null,dctr,inst_47594);
var inst_47600 = cljs.core.seq.call(null,inst_47593__$1);
var inst_47601 = inst_47600;
var inst_47602 = null;
var inst_47603 = (0);
var inst_47604 = (0);
var state_47661__$1 = (function (){var statearr_47704 = state_47661;
(statearr_47704[(10)] = inst_47604);

(statearr_47704[(30)] = inst_47595);

(statearr_47704[(11)] = inst_47602);

(statearr_47704[(20)] = inst_47601);

(statearr_47704[(21)] = inst_47603);

(statearr_47704[(29)] = inst_47593__$1);

return statearr_47704;
})();
var statearr_47705_47774 = state_47661__$1;
(statearr_47705_47774[(2)] = null);

(statearr_47705_47774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (28))){
var inst_47620 = (state_47661[(25)]);
var inst_47601 = (state_47661[(20)]);
var inst_47620__$1 = cljs.core.seq.call(null,inst_47601);
var state_47661__$1 = (function (){var statearr_47706 = state_47661;
(statearr_47706[(25)] = inst_47620__$1);

return statearr_47706;
})();
if(inst_47620__$1){
var statearr_47707_47775 = state_47661__$1;
(statearr_47707_47775[(1)] = (33));

} else {
var statearr_47708_47776 = state_47661__$1;
(statearr_47708_47776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (25))){
var inst_47604 = (state_47661[(10)]);
var inst_47603 = (state_47661[(21)]);
var inst_47606 = (inst_47604 < inst_47603);
var inst_47607 = inst_47606;
var state_47661__$1 = state_47661;
if(cljs.core.truth_(inst_47607)){
var statearr_47709_47777 = state_47661__$1;
(statearr_47709_47777[(1)] = (27));

} else {
var statearr_47710_47778 = state_47661__$1;
(statearr_47710_47778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (34))){
var state_47661__$1 = state_47661;
var statearr_47711_47779 = state_47661__$1;
(statearr_47711_47779[(2)] = null);

(statearr_47711_47779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (17))){
var state_47661__$1 = state_47661;
var statearr_47712_47780 = state_47661__$1;
(statearr_47712_47780[(2)] = null);

(statearr_47712_47780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (3))){
var inst_47659 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47661__$1,inst_47659);
} else {
if((state_val_47662 === (12))){
var inst_47588 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47713_47781 = state_47661__$1;
(statearr_47713_47781[(2)] = inst_47588);

(statearr_47713_47781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (2))){
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47661__$1,(4),ch);
} else {
if((state_val_47662 === (23))){
var state_47661__$1 = state_47661;
var statearr_47714_47782 = state_47661__$1;
(statearr_47714_47782[(2)] = null);

(statearr_47714_47782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (35))){
var inst_47643 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47715_47783 = state_47661__$1;
(statearr_47715_47783[(2)] = inst_47643);

(statearr_47715_47783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (19))){
var inst_47562 = (state_47661[(7)]);
var inst_47566 = cljs.core.chunk_first.call(null,inst_47562);
var inst_47567 = cljs.core.chunk_rest.call(null,inst_47562);
var inst_47568 = cljs.core.count.call(null,inst_47566);
var inst_47542 = inst_47567;
var inst_47543 = inst_47566;
var inst_47544 = inst_47568;
var inst_47545 = (0);
var state_47661__$1 = (function (){var statearr_47716 = state_47661;
(statearr_47716[(13)] = inst_47545);

(statearr_47716[(14)] = inst_47542);

(statearr_47716[(15)] = inst_47544);

(statearr_47716[(16)] = inst_47543);

return statearr_47716;
})();
var statearr_47717_47784 = state_47661__$1;
(statearr_47717_47784[(2)] = null);

(statearr_47717_47784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (11))){
var inst_47542 = (state_47661[(14)]);
var inst_47562 = (state_47661[(7)]);
var inst_47562__$1 = cljs.core.seq.call(null,inst_47542);
var state_47661__$1 = (function (){var statearr_47718 = state_47661;
(statearr_47718[(7)] = inst_47562__$1);

return statearr_47718;
})();
if(inst_47562__$1){
var statearr_47719_47785 = state_47661__$1;
(statearr_47719_47785[(1)] = (16));

} else {
var statearr_47720_47786 = state_47661__$1;
(statearr_47720_47786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (9))){
var inst_47590 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47721_47787 = state_47661__$1;
(statearr_47721_47787[(2)] = inst_47590);

(statearr_47721_47787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (5))){
var inst_47540 = cljs.core.deref.call(null,cs);
var inst_47541 = cljs.core.seq.call(null,inst_47540);
var inst_47542 = inst_47541;
var inst_47543 = null;
var inst_47544 = (0);
var inst_47545 = (0);
var state_47661__$1 = (function (){var statearr_47722 = state_47661;
(statearr_47722[(13)] = inst_47545);

(statearr_47722[(14)] = inst_47542);

(statearr_47722[(15)] = inst_47544);

(statearr_47722[(16)] = inst_47543);

return statearr_47722;
})();
var statearr_47723_47788 = state_47661__$1;
(statearr_47723_47788[(2)] = null);

(statearr_47723_47788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (14))){
var state_47661__$1 = state_47661;
var statearr_47724_47789 = state_47661__$1;
(statearr_47724_47789[(2)] = null);

(statearr_47724_47789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (45))){
var inst_47651 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47725_47790 = state_47661__$1;
(statearr_47725_47790[(2)] = inst_47651);

(statearr_47725_47790[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (26))){
var inst_47593 = (state_47661[(29)]);
var inst_47647 = (state_47661[(2)]);
var inst_47648 = cljs.core.seq.call(null,inst_47593);
var state_47661__$1 = (function (){var statearr_47726 = state_47661;
(statearr_47726[(31)] = inst_47647);

return statearr_47726;
})();
if(inst_47648){
var statearr_47727_47791 = state_47661__$1;
(statearr_47727_47791[(1)] = (42));

} else {
var statearr_47728_47792 = state_47661__$1;
(statearr_47728_47792[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (16))){
var inst_47562 = (state_47661[(7)]);
var inst_47564 = cljs.core.chunked_seq_QMARK_.call(null,inst_47562);
var state_47661__$1 = state_47661;
if(inst_47564){
var statearr_47729_47793 = state_47661__$1;
(statearr_47729_47793[(1)] = (19));

} else {
var statearr_47730_47794 = state_47661__$1;
(statearr_47730_47794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (38))){
var inst_47640 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47731_47795 = state_47661__$1;
(statearr_47731_47795[(2)] = inst_47640);

(statearr_47731_47795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (30))){
var state_47661__$1 = state_47661;
var statearr_47732_47796 = state_47661__$1;
(statearr_47732_47796[(2)] = null);

(statearr_47732_47796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (10))){
var inst_47545 = (state_47661[(13)]);
var inst_47543 = (state_47661[(16)]);
var inst_47551 = cljs.core._nth.call(null,inst_47543,inst_47545);
var inst_47552 = cljs.core.nth.call(null,inst_47551,(0),null);
var inst_47553 = cljs.core.nth.call(null,inst_47551,(1),null);
var state_47661__$1 = (function (){var statearr_47733 = state_47661;
(statearr_47733[(26)] = inst_47552);

return statearr_47733;
})();
if(cljs.core.truth_(inst_47553)){
var statearr_47734_47797 = state_47661__$1;
(statearr_47734_47797[(1)] = (13));

} else {
var statearr_47735_47798 = state_47661__$1;
(statearr_47735_47798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (18))){
var inst_47586 = (state_47661[(2)]);
var state_47661__$1 = state_47661;
var statearr_47736_47799 = state_47661__$1;
(statearr_47736_47799[(2)] = inst_47586);

(statearr_47736_47799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (42))){
var state_47661__$1 = state_47661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47661__$1,(45),dchan);
} else {
if((state_val_47662 === (37))){
var inst_47629 = (state_47661[(23)]);
var inst_47620 = (state_47661[(25)]);
var inst_47533 = (state_47661[(12)]);
var inst_47629__$1 = cljs.core.first.call(null,inst_47620);
var inst_47630 = cljs.core.async.put_BANG_.call(null,inst_47629__$1,inst_47533,done);
var state_47661__$1 = (function (){var statearr_47737 = state_47661;
(statearr_47737[(23)] = inst_47629__$1);

return statearr_47737;
})();
if(cljs.core.truth_(inst_47630)){
var statearr_47738_47800 = state_47661__$1;
(statearr_47738_47800[(1)] = (39));

} else {
var statearr_47739_47801 = state_47661__$1;
(statearr_47739_47801[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47662 === (8))){
var inst_47545 = (state_47661[(13)]);
var inst_47544 = (state_47661[(15)]);
var inst_47547 = (inst_47545 < inst_47544);
var inst_47548 = inst_47547;
var state_47661__$1 = state_47661;
if(cljs.core.truth_(inst_47548)){
var statearr_47740_47802 = state_47661__$1;
(statearr_47740_47802[(1)] = (10));

} else {
var statearr_47741_47803 = state_47661__$1;
(statearr_47741_47803[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___47749,cs,m,dchan,dctr,done))
;
return ((function (switch__46330__auto__,c__46442__auto___47749,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46331__auto__ = null;
var cljs$core$async$mult_$_state_machine__46331__auto____0 = (function (){
var statearr_47745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47745[(0)] = cljs$core$async$mult_$_state_machine__46331__auto__);

(statearr_47745[(1)] = (1));

return statearr_47745;
});
var cljs$core$async$mult_$_state_machine__46331__auto____1 = (function (state_47661){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_47661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e47746){if((e47746 instanceof Object)){
var ex__46334__auto__ = e47746;
var statearr_47747_47804 = state_47661;
(statearr_47747_47804[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47805 = state_47661;
state_47661 = G__47805;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46331__auto__ = function(state_47661){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46331__auto____1.call(this,state_47661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46331__auto____0;
cljs$core$async$mult_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46331__auto____1;
return cljs$core$async$mult_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___47749,cs,m,dchan,dctr,done))
})();
var state__46444__auto__ = (function (){var statearr_47748 = f__46443__auto__.call(null);
(statearr_47748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___47749);

return statearr_47748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___47749,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47806 = [];
var len__41762__auto___47809 = arguments.length;
var i__41763__auto___47810 = (0);
while(true){
if((i__41763__auto___47810 < len__41762__auto___47809)){
args47806.push((arguments[i__41763__auto___47810]));

var G__47811 = (i__41763__auto___47810 + (1));
i__41763__auto___47810 = G__47811;
continue;
} else {
}
break;
}

var G__47808 = args47806.length;
switch (G__47808) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47806.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,ch);
} else {
var m__41356__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,ch);
} else {
var m__41356__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m);
} else {
var m__41356__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,state_map);
} else {
var m__41356__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__41355__auto__ = (((m == null))?null:m);
var m__41356__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,m,mode);
} else {
var m__41356__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___47823 = arguments.length;
var i__41763__auto___47824 = (0);
while(true){
if((i__41763__auto___47824 < len__41762__auto___47823)){
args__41769__auto__.push((arguments[i__41763__auto___47824]));

var G__47825 = (i__41763__auto___47824 + (1));
i__41763__auto___47824 = G__47825;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47817){
var map__47818 = p__47817;
var map__47818__$1 = ((((!((map__47818 == null)))?((((map__47818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47818):map__47818);
var opts = map__47818__$1;
var statearr_47820_47826 = state;
(statearr_47820_47826[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47818,map__47818__$1,opts){
return (function (val){
var statearr_47821_47827 = state;
(statearr_47821_47827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47818,map__47818__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47822_47828 = state;
(statearr_47822_47828[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47813){
var G__47814 = cljs.core.first.call(null,seq47813);
var seq47813__$1 = cljs.core.next.call(null,seq47813);
var G__47815 = cljs.core.first.call(null,seq47813__$1);
var seq47813__$2 = cljs.core.next.call(null,seq47813__$1);
var G__47816 = cljs.core.first.call(null,seq47813__$2);
var seq47813__$3 = cljs.core.next.call(null,seq47813__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47814,G__47815,G__47816,seq47813__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47992 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47993){
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
this.meta47993 = meta47993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47994,meta47993__$1){
var self__ = this;
var _47994__$1 = this;
return (new cljs.core.async.t_cljs$core$async47992(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47993__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47994){
var self__ = this;
var _47994__$1 = this;
return self__.meta47993;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47993","meta47993",-2038508245,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47992";

cljs.core.async.t_cljs$core$async47992.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async47992");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47992 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47992(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47993){
return (new cljs.core.async.t_cljs$core$async47992(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47993));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47992(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46442__auto___48155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48092){
var state_val_48093 = (state_48092[(1)]);
if((state_val_48093 === (7))){
var inst_48010 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48094_48156 = state_48092__$1;
(statearr_48094_48156[(2)] = inst_48010);

(statearr_48094_48156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (20))){
var inst_48022 = (state_48092[(7)]);
var state_48092__$1 = state_48092;
var statearr_48095_48157 = state_48092__$1;
(statearr_48095_48157[(2)] = inst_48022);

(statearr_48095_48157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (27))){
var state_48092__$1 = state_48092;
var statearr_48096_48158 = state_48092__$1;
(statearr_48096_48158[(2)] = null);

(statearr_48096_48158[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (1))){
var inst_47998 = (state_48092[(8)]);
var inst_47998__$1 = calc_state.call(null);
var inst_48000 = (inst_47998__$1 == null);
var inst_48001 = cljs.core.not.call(null,inst_48000);
var state_48092__$1 = (function (){var statearr_48097 = state_48092;
(statearr_48097[(8)] = inst_47998__$1);

return statearr_48097;
})();
if(inst_48001){
var statearr_48098_48159 = state_48092__$1;
(statearr_48098_48159[(1)] = (2));

} else {
var statearr_48099_48160 = state_48092__$1;
(statearr_48099_48160[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (24))){
var inst_48066 = (state_48092[(9)]);
var inst_48052 = (state_48092[(10)]);
var inst_48045 = (state_48092[(11)]);
var inst_48066__$1 = inst_48045.call(null,inst_48052);
var state_48092__$1 = (function (){var statearr_48100 = state_48092;
(statearr_48100[(9)] = inst_48066__$1);

return statearr_48100;
})();
if(cljs.core.truth_(inst_48066__$1)){
var statearr_48101_48161 = state_48092__$1;
(statearr_48101_48161[(1)] = (29));

} else {
var statearr_48102_48162 = state_48092__$1;
(statearr_48102_48162[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (4))){
var inst_48013 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48013)){
var statearr_48103_48163 = state_48092__$1;
(statearr_48103_48163[(1)] = (8));

} else {
var statearr_48104_48164 = state_48092__$1;
(statearr_48104_48164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (15))){
var inst_48039 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48039)){
var statearr_48105_48165 = state_48092__$1;
(statearr_48105_48165[(1)] = (19));

} else {
var statearr_48106_48166 = state_48092__$1;
(statearr_48106_48166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (21))){
var inst_48044 = (state_48092[(12)]);
var inst_48044__$1 = (state_48092[(2)]);
var inst_48045 = cljs.core.get.call(null,inst_48044__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48046 = cljs.core.get.call(null,inst_48044__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48047 = cljs.core.get.call(null,inst_48044__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48092__$1 = (function (){var statearr_48107 = state_48092;
(statearr_48107[(12)] = inst_48044__$1);

(statearr_48107[(13)] = inst_48046);

(statearr_48107[(11)] = inst_48045);

return statearr_48107;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48092__$1,(22),inst_48047);
} else {
if((state_val_48093 === (31))){
var inst_48074 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48074)){
var statearr_48108_48167 = state_48092__$1;
(statearr_48108_48167[(1)] = (32));

} else {
var statearr_48109_48168 = state_48092__$1;
(statearr_48109_48168[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (32))){
var inst_48051 = (state_48092[(14)]);
var state_48092__$1 = state_48092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48092__$1,(35),out,inst_48051);
} else {
if((state_val_48093 === (33))){
var inst_48044 = (state_48092[(12)]);
var inst_48022 = inst_48044;
var state_48092__$1 = (function (){var statearr_48110 = state_48092;
(statearr_48110[(7)] = inst_48022);

return statearr_48110;
})();
var statearr_48111_48169 = state_48092__$1;
(statearr_48111_48169[(2)] = null);

(statearr_48111_48169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (13))){
var inst_48022 = (state_48092[(7)]);
var inst_48029 = inst_48022.cljs$lang$protocol_mask$partition0$;
var inst_48030 = (inst_48029 & (64));
var inst_48031 = inst_48022.cljs$core$ISeq$;
var inst_48032 = (inst_48030) || (inst_48031);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48032)){
var statearr_48112_48170 = state_48092__$1;
(statearr_48112_48170[(1)] = (16));

} else {
var statearr_48113_48171 = state_48092__$1;
(statearr_48113_48171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (22))){
var inst_48051 = (state_48092[(14)]);
var inst_48052 = (state_48092[(10)]);
var inst_48050 = (state_48092[(2)]);
var inst_48051__$1 = cljs.core.nth.call(null,inst_48050,(0),null);
var inst_48052__$1 = cljs.core.nth.call(null,inst_48050,(1),null);
var inst_48053 = (inst_48051__$1 == null);
var inst_48054 = cljs.core._EQ_.call(null,inst_48052__$1,change);
var inst_48055 = (inst_48053) || (inst_48054);
var state_48092__$1 = (function (){var statearr_48114 = state_48092;
(statearr_48114[(14)] = inst_48051__$1);

(statearr_48114[(10)] = inst_48052__$1);

return statearr_48114;
})();
if(cljs.core.truth_(inst_48055)){
var statearr_48115_48172 = state_48092__$1;
(statearr_48115_48172[(1)] = (23));

} else {
var statearr_48116_48173 = state_48092__$1;
(statearr_48116_48173[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (36))){
var inst_48044 = (state_48092[(12)]);
var inst_48022 = inst_48044;
var state_48092__$1 = (function (){var statearr_48117 = state_48092;
(statearr_48117[(7)] = inst_48022);

return statearr_48117;
})();
var statearr_48118_48174 = state_48092__$1;
(statearr_48118_48174[(2)] = null);

(statearr_48118_48174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (29))){
var inst_48066 = (state_48092[(9)]);
var state_48092__$1 = state_48092;
var statearr_48119_48175 = state_48092__$1;
(statearr_48119_48175[(2)] = inst_48066);

(statearr_48119_48175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (6))){
var state_48092__$1 = state_48092;
var statearr_48120_48176 = state_48092__$1;
(statearr_48120_48176[(2)] = false);

(statearr_48120_48176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (28))){
var inst_48062 = (state_48092[(2)]);
var inst_48063 = calc_state.call(null);
var inst_48022 = inst_48063;
var state_48092__$1 = (function (){var statearr_48121 = state_48092;
(statearr_48121[(15)] = inst_48062);

(statearr_48121[(7)] = inst_48022);

return statearr_48121;
})();
var statearr_48122_48177 = state_48092__$1;
(statearr_48122_48177[(2)] = null);

(statearr_48122_48177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (25))){
var inst_48088 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48123_48178 = state_48092__$1;
(statearr_48123_48178[(2)] = inst_48088);

(statearr_48123_48178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (34))){
var inst_48086 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48124_48179 = state_48092__$1;
(statearr_48124_48179[(2)] = inst_48086);

(statearr_48124_48179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (17))){
var state_48092__$1 = state_48092;
var statearr_48125_48180 = state_48092__$1;
(statearr_48125_48180[(2)] = false);

(statearr_48125_48180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (3))){
var state_48092__$1 = state_48092;
var statearr_48126_48181 = state_48092__$1;
(statearr_48126_48181[(2)] = false);

(statearr_48126_48181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (12))){
var inst_48090 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48092__$1,inst_48090);
} else {
if((state_val_48093 === (2))){
var inst_47998 = (state_48092[(8)]);
var inst_48003 = inst_47998.cljs$lang$protocol_mask$partition0$;
var inst_48004 = (inst_48003 & (64));
var inst_48005 = inst_47998.cljs$core$ISeq$;
var inst_48006 = (inst_48004) || (inst_48005);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48006)){
var statearr_48127_48182 = state_48092__$1;
(statearr_48127_48182[(1)] = (5));

} else {
var statearr_48128_48183 = state_48092__$1;
(statearr_48128_48183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (23))){
var inst_48051 = (state_48092[(14)]);
var inst_48057 = (inst_48051 == null);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48057)){
var statearr_48129_48184 = state_48092__$1;
(statearr_48129_48184[(1)] = (26));

} else {
var statearr_48130_48185 = state_48092__$1;
(statearr_48130_48185[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (35))){
var inst_48077 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48077)){
var statearr_48131_48186 = state_48092__$1;
(statearr_48131_48186[(1)] = (36));

} else {
var statearr_48132_48187 = state_48092__$1;
(statearr_48132_48187[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (19))){
var inst_48022 = (state_48092[(7)]);
var inst_48041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48022);
var state_48092__$1 = state_48092;
var statearr_48133_48188 = state_48092__$1;
(statearr_48133_48188[(2)] = inst_48041);

(statearr_48133_48188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (11))){
var inst_48022 = (state_48092[(7)]);
var inst_48026 = (inst_48022 == null);
var inst_48027 = cljs.core.not.call(null,inst_48026);
var state_48092__$1 = state_48092;
if(inst_48027){
var statearr_48134_48189 = state_48092__$1;
(statearr_48134_48189[(1)] = (13));

} else {
var statearr_48135_48190 = state_48092__$1;
(statearr_48135_48190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (9))){
var inst_47998 = (state_48092[(8)]);
var state_48092__$1 = state_48092;
var statearr_48136_48191 = state_48092__$1;
(statearr_48136_48191[(2)] = inst_47998);

(statearr_48136_48191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (5))){
var state_48092__$1 = state_48092;
var statearr_48137_48192 = state_48092__$1;
(statearr_48137_48192[(2)] = true);

(statearr_48137_48192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (14))){
var state_48092__$1 = state_48092;
var statearr_48138_48193 = state_48092__$1;
(statearr_48138_48193[(2)] = false);

(statearr_48138_48193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (26))){
var inst_48052 = (state_48092[(10)]);
var inst_48059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48052);
var state_48092__$1 = state_48092;
var statearr_48139_48194 = state_48092__$1;
(statearr_48139_48194[(2)] = inst_48059);

(statearr_48139_48194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (16))){
var state_48092__$1 = state_48092;
var statearr_48140_48195 = state_48092__$1;
(statearr_48140_48195[(2)] = true);

(statearr_48140_48195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (38))){
var inst_48082 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48141_48196 = state_48092__$1;
(statearr_48141_48196[(2)] = inst_48082);

(statearr_48141_48196[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (30))){
var inst_48046 = (state_48092[(13)]);
var inst_48052 = (state_48092[(10)]);
var inst_48045 = (state_48092[(11)]);
var inst_48069 = cljs.core.empty_QMARK_.call(null,inst_48045);
var inst_48070 = inst_48046.call(null,inst_48052);
var inst_48071 = cljs.core.not.call(null,inst_48070);
var inst_48072 = (inst_48069) && (inst_48071);
var state_48092__$1 = state_48092;
var statearr_48142_48197 = state_48092__$1;
(statearr_48142_48197[(2)] = inst_48072);

(statearr_48142_48197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (10))){
var inst_47998 = (state_48092[(8)]);
var inst_48018 = (state_48092[(2)]);
var inst_48019 = cljs.core.get.call(null,inst_48018,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48020 = cljs.core.get.call(null,inst_48018,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48021 = cljs.core.get.call(null,inst_48018,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48022 = inst_47998;
var state_48092__$1 = (function (){var statearr_48143 = state_48092;
(statearr_48143[(16)] = inst_48019);

(statearr_48143[(17)] = inst_48021);

(statearr_48143[(18)] = inst_48020);

(statearr_48143[(7)] = inst_48022);

return statearr_48143;
})();
var statearr_48144_48198 = state_48092__$1;
(statearr_48144_48198[(2)] = null);

(statearr_48144_48198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (18))){
var inst_48036 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48145_48199 = state_48092__$1;
(statearr_48145_48199[(2)] = inst_48036);

(statearr_48145_48199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (37))){
var state_48092__$1 = state_48092;
var statearr_48146_48200 = state_48092__$1;
(statearr_48146_48200[(2)] = null);

(statearr_48146_48200[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (8))){
var inst_47998 = (state_48092[(8)]);
var inst_48015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47998);
var state_48092__$1 = state_48092;
var statearr_48147_48201 = state_48092__$1;
(statearr_48147_48201[(2)] = inst_48015);

(statearr_48147_48201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46330__auto__,c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46331__auto__ = null;
var cljs$core$async$mix_$_state_machine__46331__auto____0 = (function (){
var statearr_48151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48151[(0)] = cljs$core$async$mix_$_state_machine__46331__auto__);

(statearr_48151[(1)] = (1));

return statearr_48151;
});
var cljs$core$async$mix_$_state_machine__46331__auto____1 = (function (state_48092){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48152){if((e48152 instanceof Object)){
var ex__46334__auto__ = e48152;
var statearr_48153_48202 = state_48092;
(statearr_48153_48202[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48203 = state_48092;
state_48092 = G__48203;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46331__auto__ = function(state_48092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46331__auto____1.call(this,state_48092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46331__auto____0;
cljs$core$async$mix_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46331__auto____1;
return cljs$core$async$mix_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46444__auto__ = (function (){var statearr_48154 = f__46443__auto__.call(null);
(statearr_48154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48155);

return statearr_48154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__41355__auto__ = (((p == null))?null:p);
var m__41356__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41356__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__41355__auto__ = (((p == null))?null:p);
var m__41356__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,p,v,ch);
} else {
var m__41356__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48204 = [];
var len__41762__auto___48207 = arguments.length;
var i__41763__auto___48208 = (0);
while(true){
if((i__41763__auto___48208 < len__41762__auto___48207)){
args48204.push((arguments[i__41763__auto___48208]));

var G__48209 = (i__41763__auto___48208 + (1));
i__41763__auto___48208 = G__48209;
continue;
} else {
}
break;
}

var G__48206 = args48204.length;
switch (G__48206) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48204.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41355__auto__ = (((p == null))?null:p);
var m__41356__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,p);
} else {
var m__41356__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__41355__auto__ = (((p == null))?null:p);
var m__41356__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41355__auto__)]);
if(!((m__41356__auto__ == null))){
return m__41356__auto__.call(null,p,v);
} else {
var m__41356__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41356__auto____$1 == null))){
return m__41356__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48212 = [];
var len__41762__auto___48337 = arguments.length;
var i__41763__auto___48338 = (0);
while(true){
if((i__41763__auto___48338 < len__41762__auto___48337)){
args48212.push((arguments[i__41763__auto___48338]));

var G__48339 = (i__41763__auto___48338 + (1));
i__41763__auto___48338 = G__48339;
continue;
} else {
}
break;
}

var G__48214 = args48212.length;
switch (G__48214) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48212.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__40692__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__40692__auto__,mults){
return (function (p1__48211_SHARP_){
if(cljs.core.truth_(p1__48211_SHARP_.call(null,topic))){
return p1__48211_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48211_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__40692__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48215 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48216){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48216 = meta48216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48217,meta48216__$1){
var self__ = this;
var _48217__$1 = this;
return (new cljs.core.async.t_cljs$core$async48215(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48216__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48217){
var self__ = this;
var _48217__$1 = this;
return self__.meta48216;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48216","meta48216",458200773,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48215";

cljs.core.async.t_cljs$core$async48215.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async48215");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48215 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48216){
return (new cljs.core.async.t_cljs$core$async48215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48216));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48215(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46442__auto___48341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48341,mults,ensure_mult,p){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48341,mults,ensure_mult,p){
return (function (state_48289){
var state_val_48290 = (state_48289[(1)]);
if((state_val_48290 === (7))){
var inst_48285 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48291_48342 = state_48289__$1;
(statearr_48291_48342[(2)] = inst_48285);

(statearr_48291_48342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (20))){
var state_48289__$1 = state_48289;
var statearr_48292_48343 = state_48289__$1;
(statearr_48292_48343[(2)] = null);

(statearr_48292_48343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (1))){
var state_48289__$1 = state_48289;
var statearr_48293_48344 = state_48289__$1;
(statearr_48293_48344[(2)] = null);

(statearr_48293_48344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (24))){
var inst_48268 = (state_48289[(7)]);
var inst_48277 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48268);
var state_48289__$1 = state_48289;
var statearr_48294_48345 = state_48289__$1;
(statearr_48294_48345[(2)] = inst_48277);

(statearr_48294_48345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (4))){
var inst_48220 = (state_48289[(8)]);
var inst_48220__$1 = (state_48289[(2)]);
var inst_48221 = (inst_48220__$1 == null);
var state_48289__$1 = (function (){var statearr_48295 = state_48289;
(statearr_48295[(8)] = inst_48220__$1);

return statearr_48295;
})();
if(cljs.core.truth_(inst_48221)){
var statearr_48296_48346 = state_48289__$1;
(statearr_48296_48346[(1)] = (5));

} else {
var statearr_48297_48347 = state_48289__$1;
(statearr_48297_48347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (15))){
var inst_48262 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48298_48348 = state_48289__$1;
(statearr_48298_48348[(2)] = inst_48262);

(statearr_48298_48348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (21))){
var inst_48282 = (state_48289[(2)]);
var state_48289__$1 = (function (){var statearr_48299 = state_48289;
(statearr_48299[(9)] = inst_48282);

return statearr_48299;
})();
var statearr_48300_48349 = state_48289__$1;
(statearr_48300_48349[(2)] = null);

(statearr_48300_48349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (13))){
var inst_48244 = (state_48289[(10)]);
var inst_48246 = cljs.core.chunked_seq_QMARK_.call(null,inst_48244);
var state_48289__$1 = state_48289;
if(inst_48246){
var statearr_48301_48350 = state_48289__$1;
(statearr_48301_48350[(1)] = (16));

} else {
var statearr_48302_48351 = state_48289__$1;
(statearr_48302_48351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (22))){
var inst_48274 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48274)){
var statearr_48303_48352 = state_48289__$1;
(statearr_48303_48352[(1)] = (23));

} else {
var statearr_48304_48353 = state_48289__$1;
(statearr_48304_48353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (6))){
var inst_48268 = (state_48289[(7)]);
var inst_48270 = (state_48289[(11)]);
var inst_48220 = (state_48289[(8)]);
var inst_48268__$1 = topic_fn.call(null,inst_48220);
var inst_48269 = cljs.core.deref.call(null,mults);
var inst_48270__$1 = cljs.core.get.call(null,inst_48269,inst_48268__$1);
var state_48289__$1 = (function (){var statearr_48305 = state_48289;
(statearr_48305[(7)] = inst_48268__$1);

(statearr_48305[(11)] = inst_48270__$1);

return statearr_48305;
})();
if(cljs.core.truth_(inst_48270__$1)){
var statearr_48306_48354 = state_48289__$1;
(statearr_48306_48354[(1)] = (19));

} else {
var statearr_48307_48355 = state_48289__$1;
(statearr_48307_48355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (25))){
var inst_48279 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48308_48356 = state_48289__$1;
(statearr_48308_48356[(2)] = inst_48279);

(statearr_48308_48356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (17))){
var inst_48244 = (state_48289[(10)]);
var inst_48253 = cljs.core.first.call(null,inst_48244);
var inst_48254 = cljs.core.async.muxch_STAR_.call(null,inst_48253);
var inst_48255 = cljs.core.async.close_BANG_.call(null,inst_48254);
var inst_48256 = cljs.core.next.call(null,inst_48244);
var inst_48230 = inst_48256;
var inst_48231 = null;
var inst_48232 = (0);
var inst_48233 = (0);
var state_48289__$1 = (function (){var statearr_48309 = state_48289;
(statearr_48309[(12)] = inst_48232);

(statearr_48309[(13)] = inst_48231);

(statearr_48309[(14)] = inst_48230);

(statearr_48309[(15)] = inst_48233);

(statearr_48309[(16)] = inst_48255);

return statearr_48309;
})();
var statearr_48310_48357 = state_48289__$1;
(statearr_48310_48357[(2)] = null);

(statearr_48310_48357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (3))){
var inst_48287 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48289__$1,inst_48287);
} else {
if((state_val_48290 === (12))){
var inst_48264 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48311_48358 = state_48289__$1;
(statearr_48311_48358[(2)] = inst_48264);

(statearr_48311_48358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (2))){
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48289__$1,(4),ch);
} else {
if((state_val_48290 === (23))){
var state_48289__$1 = state_48289;
var statearr_48312_48359 = state_48289__$1;
(statearr_48312_48359[(2)] = null);

(statearr_48312_48359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (19))){
var inst_48270 = (state_48289[(11)]);
var inst_48220 = (state_48289[(8)]);
var inst_48272 = cljs.core.async.muxch_STAR_.call(null,inst_48270);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48289__$1,(22),inst_48272,inst_48220);
} else {
if((state_val_48290 === (11))){
var inst_48230 = (state_48289[(14)]);
var inst_48244 = (state_48289[(10)]);
var inst_48244__$1 = cljs.core.seq.call(null,inst_48230);
var state_48289__$1 = (function (){var statearr_48313 = state_48289;
(statearr_48313[(10)] = inst_48244__$1);

return statearr_48313;
})();
if(inst_48244__$1){
var statearr_48314_48360 = state_48289__$1;
(statearr_48314_48360[(1)] = (13));

} else {
var statearr_48315_48361 = state_48289__$1;
(statearr_48315_48361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (9))){
var inst_48266 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48316_48362 = state_48289__$1;
(statearr_48316_48362[(2)] = inst_48266);

(statearr_48316_48362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (5))){
var inst_48227 = cljs.core.deref.call(null,mults);
var inst_48228 = cljs.core.vals.call(null,inst_48227);
var inst_48229 = cljs.core.seq.call(null,inst_48228);
var inst_48230 = inst_48229;
var inst_48231 = null;
var inst_48232 = (0);
var inst_48233 = (0);
var state_48289__$1 = (function (){var statearr_48317 = state_48289;
(statearr_48317[(12)] = inst_48232);

(statearr_48317[(13)] = inst_48231);

(statearr_48317[(14)] = inst_48230);

(statearr_48317[(15)] = inst_48233);

return statearr_48317;
})();
var statearr_48318_48363 = state_48289__$1;
(statearr_48318_48363[(2)] = null);

(statearr_48318_48363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (14))){
var state_48289__$1 = state_48289;
var statearr_48322_48364 = state_48289__$1;
(statearr_48322_48364[(2)] = null);

(statearr_48322_48364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (16))){
var inst_48244 = (state_48289[(10)]);
var inst_48248 = cljs.core.chunk_first.call(null,inst_48244);
var inst_48249 = cljs.core.chunk_rest.call(null,inst_48244);
var inst_48250 = cljs.core.count.call(null,inst_48248);
var inst_48230 = inst_48249;
var inst_48231 = inst_48248;
var inst_48232 = inst_48250;
var inst_48233 = (0);
var state_48289__$1 = (function (){var statearr_48323 = state_48289;
(statearr_48323[(12)] = inst_48232);

(statearr_48323[(13)] = inst_48231);

(statearr_48323[(14)] = inst_48230);

(statearr_48323[(15)] = inst_48233);

return statearr_48323;
})();
var statearr_48324_48365 = state_48289__$1;
(statearr_48324_48365[(2)] = null);

(statearr_48324_48365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (10))){
var inst_48232 = (state_48289[(12)]);
var inst_48231 = (state_48289[(13)]);
var inst_48230 = (state_48289[(14)]);
var inst_48233 = (state_48289[(15)]);
var inst_48238 = cljs.core._nth.call(null,inst_48231,inst_48233);
var inst_48239 = cljs.core.async.muxch_STAR_.call(null,inst_48238);
var inst_48240 = cljs.core.async.close_BANG_.call(null,inst_48239);
var inst_48241 = (inst_48233 + (1));
var tmp48319 = inst_48232;
var tmp48320 = inst_48231;
var tmp48321 = inst_48230;
var inst_48230__$1 = tmp48321;
var inst_48231__$1 = tmp48320;
var inst_48232__$1 = tmp48319;
var inst_48233__$1 = inst_48241;
var state_48289__$1 = (function (){var statearr_48325 = state_48289;
(statearr_48325[(12)] = inst_48232__$1);

(statearr_48325[(13)] = inst_48231__$1);

(statearr_48325[(14)] = inst_48230__$1);

(statearr_48325[(15)] = inst_48233__$1);

(statearr_48325[(17)] = inst_48240);

return statearr_48325;
})();
var statearr_48326_48366 = state_48289__$1;
(statearr_48326_48366[(2)] = null);

(statearr_48326_48366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (18))){
var inst_48259 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48327_48367 = state_48289__$1;
(statearr_48327_48367[(2)] = inst_48259);

(statearr_48327_48367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (8))){
var inst_48232 = (state_48289[(12)]);
var inst_48233 = (state_48289[(15)]);
var inst_48235 = (inst_48233 < inst_48232);
var inst_48236 = inst_48235;
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48236)){
var statearr_48328_48368 = state_48289__$1;
(statearr_48328_48368[(1)] = (10));

} else {
var statearr_48329_48369 = state_48289__$1;
(statearr_48329_48369[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___48341,mults,ensure_mult,p))
;
return ((function (switch__46330__auto__,c__46442__auto___48341,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_48333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48333[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_48333[(1)] = (1));

return statearr_48333;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48289){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48334){if((e48334 instanceof Object)){
var ex__46334__auto__ = e48334;
var statearr_48335_48370 = state_48289;
(statearr_48335_48370[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48371 = state_48289;
state_48289 = G__48371;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48341,mults,ensure_mult,p))
})();
var state__46444__auto__ = (function (){var statearr_48336 = f__46443__auto__.call(null);
(statearr_48336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48341);

return statearr_48336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48341,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48372 = [];
var len__41762__auto___48375 = arguments.length;
var i__41763__auto___48376 = (0);
while(true){
if((i__41763__auto___48376 < len__41762__auto___48375)){
args48372.push((arguments[i__41763__auto___48376]));

var G__48377 = (i__41763__auto___48376 + (1));
i__41763__auto___48376 = G__48377;
continue;
} else {
}
break;
}

var G__48374 = args48372.length;
switch (G__48374) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48372.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48379 = [];
var len__41762__auto___48382 = arguments.length;
var i__41763__auto___48383 = (0);
while(true){
if((i__41763__auto___48383 < len__41762__auto___48382)){
args48379.push((arguments[i__41763__auto___48383]));

var G__48384 = (i__41763__auto___48383 + (1));
i__41763__auto___48383 = G__48384;
continue;
} else {
}
break;
}

var G__48381 = args48379.length;
switch (G__48381) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48379.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48386 = [];
var len__41762__auto___48457 = arguments.length;
var i__41763__auto___48458 = (0);
while(true){
if((i__41763__auto___48458 < len__41762__auto___48457)){
args48386.push((arguments[i__41763__auto___48458]));

var G__48459 = (i__41763__auto___48458 + (1));
i__41763__auto___48458 = G__48459;
continue;
} else {
}
break;
}

var G__48388 = args48386.length;
switch (G__48388) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48386.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__46442__auto___48461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48427){
var state_val_48428 = (state_48427[(1)]);
if((state_val_48428 === (7))){
var state_48427__$1 = state_48427;
var statearr_48429_48462 = state_48427__$1;
(statearr_48429_48462[(2)] = null);

(statearr_48429_48462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (1))){
var state_48427__$1 = state_48427;
var statearr_48430_48463 = state_48427__$1;
(statearr_48430_48463[(2)] = null);

(statearr_48430_48463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (4))){
var inst_48391 = (state_48427[(7)]);
var inst_48393 = (inst_48391 < cnt);
var state_48427__$1 = state_48427;
if(cljs.core.truth_(inst_48393)){
var statearr_48431_48464 = state_48427__$1;
(statearr_48431_48464[(1)] = (6));

} else {
var statearr_48432_48465 = state_48427__$1;
(statearr_48432_48465[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (15))){
var inst_48423 = (state_48427[(2)]);
var state_48427__$1 = state_48427;
var statearr_48433_48466 = state_48427__$1;
(statearr_48433_48466[(2)] = inst_48423);

(statearr_48433_48466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (13))){
var inst_48416 = cljs.core.async.close_BANG_.call(null,out);
var state_48427__$1 = state_48427;
var statearr_48434_48467 = state_48427__$1;
(statearr_48434_48467[(2)] = inst_48416);

(statearr_48434_48467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (6))){
var state_48427__$1 = state_48427;
var statearr_48435_48468 = state_48427__$1;
(statearr_48435_48468[(2)] = null);

(statearr_48435_48468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (3))){
var inst_48425 = (state_48427[(2)]);
var state_48427__$1 = state_48427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48427__$1,inst_48425);
} else {
if((state_val_48428 === (12))){
var inst_48413 = (state_48427[(8)]);
var inst_48413__$1 = (state_48427[(2)]);
var inst_48414 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48413__$1);
var state_48427__$1 = (function (){var statearr_48436 = state_48427;
(statearr_48436[(8)] = inst_48413__$1);

return statearr_48436;
})();
if(cljs.core.truth_(inst_48414)){
var statearr_48437_48469 = state_48427__$1;
(statearr_48437_48469[(1)] = (13));

} else {
var statearr_48438_48470 = state_48427__$1;
(statearr_48438_48470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (2))){
var inst_48390 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48391 = (0);
var state_48427__$1 = (function (){var statearr_48439 = state_48427;
(statearr_48439[(7)] = inst_48391);

(statearr_48439[(9)] = inst_48390);

return statearr_48439;
})();
var statearr_48440_48471 = state_48427__$1;
(statearr_48440_48471[(2)] = null);

(statearr_48440_48471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (11))){
var inst_48391 = (state_48427[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48427,(10),Object,null,(9));
var inst_48400 = chs__$1.call(null,inst_48391);
var inst_48401 = done.call(null,inst_48391);
var inst_48402 = cljs.core.async.take_BANG_.call(null,inst_48400,inst_48401);
var state_48427__$1 = state_48427;
var statearr_48441_48472 = state_48427__$1;
(statearr_48441_48472[(2)] = inst_48402);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (9))){
var inst_48391 = (state_48427[(7)]);
var inst_48404 = (state_48427[(2)]);
var inst_48405 = (inst_48391 + (1));
var inst_48391__$1 = inst_48405;
var state_48427__$1 = (function (){var statearr_48442 = state_48427;
(statearr_48442[(7)] = inst_48391__$1);

(statearr_48442[(10)] = inst_48404);

return statearr_48442;
})();
var statearr_48443_48473 = state_48427__$1;
(statearr_48443_48473[(2)] = null);

(statearr_48443_48473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (5))){
var inst_48411 = (state_48427[(2)]);
var state_48427__$1 = (function (){var statearr_48444 = state_48427;
(statearr_48444[(11)] = inst_48411);

return statearr_48444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48427__$1,(12),dchan);
} else {
if((state_val_48428 === (14))){
var inst_48413 = (state_48427[(8)]);
var inst_48418 = cljs.core.apply.call(null,f,inst_48413);
var state_48427__$1 = state_48427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48427__$1,(16),out,inst_48418);
} else {
if((state_val_48428 === (16))){
var inst_48420 = (state_48427[(2)]);
var state_48427__$1 = (function (){var statearr_48445 = state_48427;
(statearr_48445[(12)] = inst_48420);

return statearr_48445;
})();
var statearr_48446_48474 = state_48427__$1;
(statearr_48446_48474[(2)] = null);

(statearr_48446_48474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (10))){
var inst_48395 = (state_48427[(2)]);
var inst_48396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48427__$1 = (function (){var statearr_48447 = state_48427;
(statearr_48447[(13)] = inst_48395);

return statearr_48447;
})();
var statearr_48448_48475 = state_48427__$1;
(statearr_48448_48475[(2)] = inst_48396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48428 === (8))){
var inst_48409 = (state_48427[(2)]);
var state_48427__$1 = state_48427;
var statearr_48449_48476 = state_48427__$1;
(statearr_48449_48476[(2)] = inst_48409);

(statearr_48449_48476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46330__auto__,c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_48453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48453[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_48453[(1)] = (1));

return statearr_48453;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48427){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48454){if((e48454 instanceof Object)){
var ex__46334__auto__ = e48454;
var statearr_48455_48477 = state_48427;
(statearr_48455_48477[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48478 = state_48427;
state_48427 = G__48478;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46444__auto__ = (function (){var statearr_48456 = f__46443__auto__.call(null);
(statearr_48456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48461);

return statearr_48456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48461,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48480 = [];
var len__41762__auto___48536 = arguments.length;
var i__41763__auto___48537 = (0);
while(true){
if((i__41763__auto___48537 < len__41762__auto___48536)){
args48480.push((arguments[i__41763__auto___48537]));

var G__48538 = (i__41763__auto___48537 + (1));
i__41763__auto___48537 = G__48538;
continue;
} else {
}
break;
}

var G__48482 = args48480.length;
switch (G__48482) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48480.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___48540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48540,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48540,out){
return (function (state_48512){
var state_val_48513 = (state_48512[(1)]);
if((state_val_48513 === (7))){
var inst_48492 = (state_48512[(7)]);
var inst_48491 = (state_48512[(8)]);
var inst_48491__$1 = (state_48512[(2)]);
var inst_48492__$1 = cljs.core.nth.call(null,inst_48491__$1,(0),null);
var inst_48493 = cljs.core.nth.call(null,inst_48491__$1,(1),null);
var inst_48494 = (inst_48492__$1 == null);
var state_48512__$1 = (function (){var statearr_48514 = state_48512;
(statearr_48514[(7)] = inst_48492__$1);

(statearr_48514[(8)] = inst_48491__$1);

(statearr_48514[(9)] = inst_48493);

return statearr_48514;
})();
if(cljs.core.truth_(inst_48494)){
var statearr_48515_48541 = state_48512__$1;
(statearr_48515_48541[(1)] = (8));

} else {
var statearr_48516_48542 = state_48512__$1;
(statearr_48516_48542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (1))){
var inst_48483 = cljs.core.vec.call(null,chs);
var inst_48484 = inst_48483;
var state_48512__$1 = (function (){var statearr_48517 = state_48512;
(statearr_48517[(10)] = inst_48484);

return statearr_48517;
})();
var statearr_48518_48543 = state_48512__$1;
(statearr_48518_48543[(2)] = null);

(statearr_48518_48543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (4))){
var inst_48484 = (state_48512[(10)]);
var state_48512__$1 = state_48512;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48512__$1,(7),inst_48484);
} else {
if((state_val_48513 === (6))){
var inst_48508 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
var statearr_48519_48544 = state_48512__$1;
(statearr_48519_48544[(2)] = inst_48508);

(statearr_48519_48544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (3))){
var inst_48510 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48512__$1,inst_48510);
} else {
if((state_val_48513 === (2))){
var inst_48484 = (state_48512[(10)]);
var inst_48486 = cljs.core.count.call(null,inst_48484);
var inst_48487 = (inst_48486 > (0));
var state_48512__$1 = state_48512;
if(cljs.core.truth_(inst_48487)){
var statearr_48521_48545 = state_48512__$1;
(statearr_48521_48545[(1)] = (4));

} else {
var statearr_48522_48546 = state_48512__$1;
(statearr_48522_48546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (11))){
var inst_48484 = (state_48512[(10)]);
var inst_48501 = (state_48512[(2)]);
var tmp48520 = inst_48484;
var inst_48484__$1 = tmp48520;
var state_48512__$1 = (function (){var statearr_48523 = state_48512;
(statearr_48523[(11)] = inst_48501);

(statearr_48523[(10)] = inst_48484__$1);

return statearr_48523;
})();
var statearr_48524_48547 = state_48512__$1;
(statearr_48524_48547[(2)] = null);

(statearr_48524_48547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (9))){
var inst_48492 = (state_48512[(7)]);
var state_48512__$1 = state_48512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48512__$1,(11),out,inst_48492);
} else {
if((state_val_48513 === (5))){
var inst_48506 = cljs.core.async.close_BANG_.call(null,out);
var state_48512__$1 = state_48512;
var statearr_48525_48548 = state_48512__$1;
(statearr_48525_48548[(2)] = inst_48506);

(statearr_48525_48548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (10))){
var inst_48504 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
var statearr_48526_48549 = state_48512__$1;
(statearr_48526_48549[(2)] = inst_48504);

(statearr_48526_48549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (8))){
var inst_48492 = (state_48512[(7)]);
var inst_48491 = (state_48512[(8)]);
var inst_48493 = (state_48512[(9)]);
var inst_48484 = (state_48512[(10)]);
var inst_48496 = (function (){var cs = inst_48484;
var vec__48489 = inst_48491;
var v = inst_48492;
var c = inst_48493;
return ((function (cs,vec__48489,v,c,inst_48492,inst_48491,inst_48493,inst_48484,state_val_48513,c__46442__auto___48540,out){
return (function (p1__48479_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48479_SHARP_);
});
;})(cs,vec__48489,v,c,inst_48492,inst_48491,inst_48493,inst_48484,state_val_48513,c__46442__auto___48540,out))
})();
var inst_48497 = cljs.core.filterv.call(null,inst_48496,inst_48484);
var inst_48484__$1 = inst_48497;
var state_48512__$1 = (function (){var statearr_48527 = state_48512;
(statearr_48527[(10)] = inst_48484__$1);

return statearr_48527;
})();
var statearr_48528_48550 = state_48512__$1;
(statearr_48528_48550[(2)] = null);

(statearr_48528_48550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___48540,out))
;
return ((function (switch__46330__auto__,c__46442__auto___48540,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_48532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48532[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_48532[(1)] = (1));

return statearr_48532;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48512){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48533){if((e48533 instanceof Object)){
var ex__46334__auto__ = e48533;
var statearr_48534_48551 = state_48512;
(statearr_48534_48551[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48552 = state_48512;
state_48512 = G__48552;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48540,out))
})();
var state__46444__auto__ = (function (){var statearr_48535 = f__46443__auto__.call(null);
(statearr_48535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48540);

return statearr_48535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48540,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48553 = [];
var len__41762__auto___48602 = arguments.length;
var i__41763__auto___48603 = (0);
while(true){
if((i__41763__auto___48603 < len__41762__auto___48602)){
args48553.push((arguments[i__41763__auto___48603]));

var G__48604 = (i__41763__auto___48603 + (1));
i__41763__auto___48603 = G__48604;
continue;
} else {
}
break;
}

var G__48555 = args48553.length;
switch (G__48555) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48553.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___48606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48606,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48606,out){
return (function (state_48579){
var state_val_48580 = (state_48579[(1)]);
if((state_val_48580 === (7))){
var inst_48561 = (state_48579[(7)]);
var inst_48561__$1 = (state_48579[(2)]);
var inst_48562 = (inst_48561__$1 == null);
var inst_48563 = cljs.core.not.call(null,inst_48562);
var state_48579__$1 = (function (){var statearr_48581 = state_48579;
(statearr_48581[(7)] = inst_48561__$1);

return statearr_48581;
})();
if(inst_48563){
var statearr_48582_48607 = state_48579__$1;
(statearr_48582_48607[(1)] = (8));

} else {
var statearr_48583_48608 = state_48579__$1;
(statearr_48583_48608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (1))){
var inst_48556 = (0);
var state_48579__$1 = (function (){var statearr_48584 = state_48579;
(statearr_48584[(8)] = inst_48556);

return statearr_48584;
})();
var statearr_48585_48609 = state_48579__$1;
(statearr_48585_48609[(2)] = null);

(statearr_48585_48609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (4))){
var state_48579__$1 = state_48579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48579__$1,(7),ch);
} else {
if((state_val_48580 === (6))){
var inst_48574 = (state_48579[(2)]);
var state_48579__$1 = state_48579;
var statearr_48586_48610 = state_48579__$1;
(statearr_48586_48610[(2)] = inst_48574);

(statearr_48586_48610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (3))){
var inst_48576 = (state_48579[(2)]);
var inst_48577 = cljs.core.async.close_BANG_.call(null,out);
var state_48579__$1 = (function (){var statearr_48587 = state_48579;
(statearr_48587[(9)] = inst_48576);

return statearr_48587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48579__$1,inst_48577);
} else {
if((state_val_48580 === (2))){
var inst_48556 = (state_48579[(8)]);
var inst_48558 = (inst_48556 < n);
var state_48579__$1 = state_48579;
if(cljs.core.truth_(inst_48558)){
var statearr_48588_48611 = state_48579__$1;
(statearr_48588_48611[(1)] = (4));

} else {
var statearr_48589_48612 = state_48579__$1;
(statearr_48589_48612[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (11))){
var inst_48556 = (state_48579[(8)]);
var inst_48566 = (state_48579[(2)]);
var inst_48567 = (inst_48556 + (1));
var inst_48556__$1 = inst_48567;
var state_48579__$1 = (function (){var statearr_48590 = state_48579;
(statearr_48590[(8)] = inst_48556__$1);

(statearr_48590[(10)] = inst_48566);

return statearr_48590;
})();
var statearr_48591_48613 = state_48579__$1;
(statearr_48591_48613[(2)] = null);

(statearr_48591_48613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (9))){
var state_48579__$1 = state_48579;
var statearr_48592_48614 = state_48579__$1;
(statearr_48592_48614[(2)] = null);

(statearr_48592_48614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (5))){
var state_48579__$1 = state_48579;
var statearr_48593_48615 = state_48579__$1;
(statearr_48593_48615[(2)] = null);

(statearr_48593_48615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (10))){
var inst_48571 = (state_48579[(2)]);
var state_48579__$1 = state_48579;
var statearr_48594_48616 = state_48579__$1;
(statearr_48594_48616[(2)] = inst_48571);

(statearr_48594_48616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48580 === (8))){
var inst_48561 = (state_48579[(7)]);
var state_48579__$1 = state_48579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48579__$1,(11),out,inst_48561);
} else {
return null;
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
});})(c__46442__auto___48606,out))
;
return ((function (switch__46330__auto__,c__46442__auto___48606,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_48598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48598[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_48598[(1)] = (1));

return statearr_48598;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48579){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48599){if((e48599 instanceof Object)){
var ex__46334__auto__ = e48599;
var statearr_48600_48617 = state_48579;
(statearr_48600_48617[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48618 = state_48579;
state_48579 = G__48618;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48606,out))
})();
var state__46444__auto__ = (function (){var statearr_48601 = f__46443__auto__.call(null);
(statearr_48601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48606);

return statearr_48601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48606,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48626 = (function (map_LT_,f,ch,meta48627){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48627 = meta48627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48628,meta48627__$1){
var self__ = this;
var _48628__$1 = this;
return (new cljs.core.async.t_cljs$core$async48626(self__.map_LT_,self__.f,self__.ch,meta48627__$1));
});

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48628){
var self__ = this;
var _48628__$1 = this;
return self__.meta48627;
});

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48629 = (function (map_LT_,f,ch,meta48627,_,fn1,meta48630){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48627 = meta48627;
this._ = _;
this.fn1 = fn1;
this.meta48630 = meta48630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48631,meta48630__$1){
var self__ = this;
var _48631__$1 = this;
return (new cljs.core.async.t_cljs$core$async48629(self__.map_LT_,self__.f,self__.ch,self__.meta48627,self__._,self__.fn1,meta48630__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48631){
var self__ = this;
var _48631__$1 = this;
return self__.meta48630;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48619_SHARP_){
return f1.call(null,(((p1__48619_SHARP_ == null))?null:self__.f.call(null,p1__48619_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48627","meta48627",2135536771,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48626","cljs.core.async/t_cljs$core$async48626",-493944833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48630","meta48630",-946242554,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48629";

cljs.core.async.t_cljs$core$async48629.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async48629");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48629 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48629(map_LT___$1,f__$1,ch__$1,meta48627__$1,___$2,fn1__$1,meta48630){
return (new cljs.core.async.t_cljs$core$async48629(map_LT___$1,f__$1,ch__$1,meta48627__$1,___$2,fn1__$1,meta48630));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48629(self__.map_LT_,self__.f,self__.ch,self__.meta48627,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__40680__auto__ = ret;
if(cljs.core.truth_(and__40680__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__40680__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48627","meta48627",2135536771,null)], null);
});

cljs.core.async.t_cljs$core$async48626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48626";

cljs.core.async.t_cljs$core$async48626.cljs$lang$ctorPrWriter = (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async48626");
});

cljs.core.async.__GT_t_cljs$core$async48626 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48626(map_LT___$1,f__$1,ch__$1,meta48627){
return (new cljs.core.async.t_cljs$core$async48626(map_LT___$1,f__$1,ch__$1,meta48627));
});

}

return (new cljs.core.async.t_cljs$core$async48626(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48635 = (function (map_GT_,f,ch,meta48636){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48636 = meta48636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48637,meta48636__$1){
var self__ = this;
var _48637__$1 = this;
return (new cljs.core.async.t_cljs$core$async48635(self__.map_GT_,self__.f,self__.ch,meta48636__$1));
});

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48637){
var self__ = this;
var _48637__$1 = this;
return self__.meta48636;
});

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48636","meta48636",273383942,null)], null);
});

cljs.core.async.t_cljs$core$async48635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48635";

cljs.core.async.t_cljs$core$async48635.cljs$lang$ctorPrWriter = (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async48635");
});

cljs.core.async.__GT_t_cljs$core$async48635 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48635(map_GT___$1,f__$1,ch__$1,meta48636){
return (new cljs.core.async.t_cljs$core$async48635(map_GT___$1,f__$1,ch__$1,meta48636));
});

}

return (new cljs.core.async.t_cljs$core$async48635(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48641 = (function (filter_GT_,p,ch,meta48642){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48642 = meta48642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48643,meta48642__$1){
var self__ = this;
var _48643__$1 = this;
return (new cljs.core.async.t_cljs$core$async48641(self__.filter_GT_,self__.p,self__.ch,meta48642__$1));
});

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48643){
var self__ = this;
var _48643__$1 = this;
return self__.meta48642;
});

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48642","meta48642",239572545,null)], null);
});

cljs.core.async.t_cljs$core$async48641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48641";

cljs.core.async.t_cljs$core$async48641.cljs$lang$ctorPrWriter = (function (this__41298__auto__,writer__41299__auto__,opt__41300__auto__){
return cljs.core._write.call(null,writer__41299__auto__,"cljs.core.async/t_cljs$core$async48641");
});

cljs.core.async.__GT_t_cljs$core$async48641 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48641(filter_GT___$1,p__$1,ch__$1,meta48642){
return (new cljs.core.async.t_cljs$core$async48641(filter_GT___$1,p__$1,ch__$1,meta48642));
});

}

return (new cljs.core.async.t_cljs$core$async48641(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48644 = [];
var len__41762__auto___48688 = arguments.length;
var i__41763__auto___48689 = (0);
while(true){
if((i__41763__auto___48689 < len__41762__auto___48688)){
args48644.push((arguments[i__41763__auto___48689]));

var G__48690 = (i__41763__auto___48689 + (1));
i__41763__auto___48689 = G__48690;
continue;
} else {
}
break;
}

var G__48646 = args48644.length;
switch (G__48646) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48644.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___48692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___48692,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___48692,out){
return (function (state_48667){
var state_val_48668 = (state_48667[(1)]);
if((state_val_48668 === (7))){
var inst_48663 = (state_48667[(2)]);
var state_48667__$1 = state_48667;
var statearr_48669_48693 = state_48667__$1;
(statearr_48669_48693[(2)] = inst_48663);

(statearr_48669_48693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (1))){
var state_48667__$1 = state_48667;
var statearr_48670_48694 = state_48667__$1;
(statearr_48670_48694[(2)] = null);

(statearr_48670_48694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (4))){
var inst_48649 = (state_48667[(7)]);
var inst_48649__$1 = (state_48667[(2)]);
var inst_48650 = (inst_48649__$1 == null);
var state_48667__$1 = (function (){var statearr_48671 = state_48667;
(statearr_48671[(7)] = inst_48649__$1);

return statearr_48671;
})();
if(cljs.core.truth_(inst_48650)){
var statearr_48672_48695 = state_48667__$1;
(statearr_48672_48695[(1)] = (5));

} else {
var statearr_48673_48696 = state_48667__$1;
(statearr_48673_48696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (6))){
var inst_48649 = (state_48667[(7)]);
var inst_48654 = p.call(null,inst_48649);
var state_48667__$1 = state_48667;
if(cljs.core.truth_(inst_48654)){
var statearr_48674_48697 = state_48667__$1;
(statearr_48674_48697[(1)] = (8));

} else {
var statearr_48675_48698 = state_48667__$1;
(statearr_48675_48698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (3))){
var inst_48665 = (state_48667[(2)]);
var state_48667__$1 = state_48667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48667__$1,inst_48665);
} else {
if((state_val_48668 === (2))){
var state_48667__$1 = state_48667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48667__$1,(4),ch);
} else {
if((state_val_48668 === (11))){
var inst_48657 = (state_48667[(2)]);
var state_48667__$1 = state_48667;
var statearr_48676_48699 = state_48667__$1;
(statearr_48676_48699[(2)] = inst_48657);

(statearr_48676_48699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (9))){
var state_48667__$1 = state_48667;
var statearr_48677_48700 = state_48667__$1;
(statearr_48677_48700[(2)] = null);

(statearr_48677_48700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (5))){
var inst_48652 = cljs.core.async.close_BANG_.call(null,out);
var state_48667__$1 = state_48667;
var statearr_48678_48701 = state_48667__$1;
(statearr_48678_48701[(2)] = inst_48652);

(statearr_48678_48701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (10))){
var inst_48660 = (state_48667[(2)]);
var state_48667__$1 = (function (){var statearr_48679 = state_48667;
(statearr_48679[(8)] = inst_48660);

return statearr_48679;
})();
var statearr_48680_48702 = state_48667__$1;
(statearr_48680_48702[(2)] = null);

(statearr_48680_48702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48668 === (8))){
var inst_48649 = (state_48667[(7)]);
var state_48667__$1 = state_48667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48667__$1,(11),out,inst_48649);
} else {
return null;
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
});})(c__46442__auto___48692,out))
;
return ((function (switch__46330__auto__,c__46442__auto___48692,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_48684 = [null,null,null,null,null,null,null,null,null];
(statearr_48684[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_48684[(1)] = (1));

return statearr_48684;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48667){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48685){if((e48685 instanceof Object)){
var ex__46334__auto__ = e48685;
var statearr_48686_48703 = state_48667;
(statearr_48686_48703[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48704 = state_48667;
state_48667 = G__48704;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___48692,out))
})();
var state__46444__auto__ = (function (){var statearr_48687 = f__46443__auto__.call(null);
(statearr_48687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___48692);

return statearr_48687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___48692,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48705 = [];
var len__41762__auto___48708 = arguments.length;
var i__41763__auto___48709 = (0);
while(true){
if((i__41763__auto___48709 < len__41762__auto___48708)){
args48705.push((arguments[i__41763__auto___48709]));

var G__48710 = (i__41763__auto___48709 + (1));
i__41763__auto___48709 = G__48710;
continue;
} else {
}
break;
}

var G__48707 = args48705.length;
switch (G__48707) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48705.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_48877){
var state_val_48878 = (state_48877[(1)]);
if((state_val_48878 === (7))){
var inst_48873 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48879_48920 = state_48877__$1;
(statearr_48879_48920[(2)] = inst_48873);

(statearr_48879_48920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (20))){
var inst_48843 = (state_48877[(7)]);
var inst_48854 = (state_48877[(2)]);
var inst_48855 = cljs.core.next.call(null,inst_48843);
var inst_48829 = inst_48855;
var inst_48830 = null;
var inst_48831 = (0);
var inst_48832 = (0);
var state_48877__$1 = (function (){var statearr_48880 = state_48877;
(statearr_48880[(8)] = inst_48831);

(statearr_48880[(9)] = inst_48854);

(statearr_48880[(10)] = inst_48832);

(statearr_48880[(11)] = inst_48830);

(statearr_48880[(12)] = inst_48829);

return statearr_48880;
})();
var statearr_48881_48921 = state_48877__$1;
(statearr_48881_48921[(2)] = null);

(statearr_48881_48921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (1))){
var state_48877__$1 = state_48877;
var statearr_48882_48922 = state_48877__$1;
(statearr_48882_48922[(2)] = null);

(statearr_48882_48922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (4))){
var inst_48818 = (state_48877[(13)]);
var inst_48818__$1 = (state_48877[(2)]);
var inst_48819 = (inst_48818__$1 == null);
var state_48877__$1 = (function (){var statearr_48883 = state_48877;
(statearr_48883[(13)] = inst_48818__$1);

return statearr_48883;
})();
if(cljs.core.truth_(inst_48819)){
var statearr_48884_48923 = state_48877__$1;
(statearr_48884_48923[(1)] = (5));

} else {
var statearr_48885_48924 = state_48877__$1;
(statearr_48885_48924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (15))){
var state_48877__$1 = state_48877;
var statearr_48889_48925 = state_48877__$1;
(statearr_48889_48925[(2)] = null);

(statearr_48889_48925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (21))){
var state_48877__$1 = state_48877;
var statearr_48890_48926 = state_48877__$1;
(statearr_48890_48926[(2)] = null);

(statearr_48890_48926[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (13))){
var inst_48831 = (state_48877[(8)]);
var inst_48832 = (state_48877[(10)]);
var inst_48830 = (state_48877[(11)]);
var inst_48829 = (state_48877[(12)]);
var inst_48839 = (state_48877[(2)]);
var inst_48840 = (inst_48832 + (1));
var tmp48886 = inst_48831;
var tmp48887 = inst_48830;
var tmp48888 = inst_48829;
var inst_48829__$1 = tmp48888;
var inst_48830__$1 = tmp48887;
var inst_48831__$1 = tmp48886;
var inst_48832__$1 = inst_48840;
var state_48877__$1 = (function (){var statearr_48891 = state_48877;
(statearr_48891[(8)] = inst_48831__$1);

(statearr_48891[(10)] = inst_48832__$1);

(statearr_48891[(11)] = inst_48830__$1);

(statearr_48891[(12)] = inst_48829__$1);

(statearr_48891[(14)] = inst_48839);

return statearr_48891;
})();
var statearr_48892_48927 = state_48877__$1;
(statearr_48892_48927[(2)] = null);

(statearr_48892_48927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (22))){
var state_48877__$1 = state_48877;
var statearr_48893_48928 = state_48877__$1;
(statearr_48893_48928[(2)] = null);

(statearr_48893_48928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (6))){
var inst_48818 = (state_48877[(13)]);
var inst_48827 = f.call(null,inst_48818);
var inst_48828 = cljs.core.seq.call(null,inst_48827);
var inst_48829 = inst_48828;
var inst_48830 = null;
var inst_48831 = (0);
var inst_48832 = (0);
var state_48877__$1 = (function (){var statearr_48894 = state_48877;
(statearr_48894[(8)] = inst_48831);

(statearr_48894[(10)] = inst_48832);

(statearr_48894[(11)] = inst_48830);

(statearr_48894[(12)] = inst_48829);

return statearr_48894;
})();
var statearr_48895_48929 = state_48877__$1;
(statearr_48895_48929[(2)] = null);

(statearr_48895_48929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (17))){
var inst_48843 = (state_48877[(7)]);
var inst_48847 = cljs.core.chunk_first.call(null,inst_48843);
var inst_48848 = cljs.core.chunk_rest.call(null,inst_48843);
var inst_48849 = cljs.core.count.call(null,inst_48847);
var inst_48829 = inst_48848;
var inst_48830 = inst_48847;
var inst_48831 = inst_48849;
var inst_48832 = (0);
var state_48877__$1 = (function (){var statearr_48896 = state_48877;
(statearr_48896[(8)] = inst_48831);

(statearr_48896[(10)] = inst_48832);

(statearr_48896[(11)] = inst_48830);

(statearr_48896[(12)] = inst_48829);

return statearr_48896;
})();
var statearr_48897_48930 = state_48877__$1;
(statearr_48897_48930[(2)] = null);

(statearr_48897_48930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (3))){
var inst_48875 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48877__$1,inst_48875);
} else {
if((state_val_48878 === (12))){
var inst_48863 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48898_48931 = state_48877__$1;
(statearr_48898_48931[(2)] = inst_48863);

(statearr_48898_48931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (2))){
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48877__$1,(4),in$);
} else {
if((state_val_48878 === (23))){
var inst_48871 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48899_48932 = state_48877__$1;
(statearr_48899_48932[(2)] = inst_48871);

(statearr_48899_48932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (19))){
var inst_48858 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48900_48933 = state_48877__$1;
(statearr_48900_48933[(2)] = inst_48858);

(statearr_48900_48933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (11))){
var inst_48843 = (state_48877[(7)]);
var inst_48829 = (state_48877[(12)]);
var inst_48843__$1 = cljs.core.seq.call(null,inst_48829);
var state_48877__$1 = (function (){var statearr_48901 = state_48877;
(statearr_48901[(7)] = inst_48843__$1);

return statearr_48901;
})();
if(inst_48843__$1){
var statearr_48902_48934 = state_48877__$1;
(statearr_48902_48934[(1)] = (14));

} else {
var statearr_48903_48935 = state_48877__$1;
(statearr_48903_48935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (9))){
var inst_48865 = (state_48877[(2)]);
var inst_48866 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48877__$1 = (function (){var statearr_48904 = state_48877;
(statearr_48904[(15)] = inst_48865);

return statearr_48904;
})();
if(cljs.core.truth_(inst_48866)){
var statearr_48905_48936 = state_48877__$1;
(statearr_48905_48936[(1)] = (21));

} else {
var statearr_48906_48937 = state_48877__$1;
(statearr_48906_48937[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (5))){
var inst_48821 = cljs.core.async.close_BANG_.call(null,out);
var state_48877__$1 = state_48877;
var statearr_48907_48938 = state_48877__$1;
(statearr_48907_48938[(2)] = inst_48821);

(statearr_48907_48938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (14))){
var inst_48843 = (state_48877[(7)]);
var inst_48845 = cljs.core.chunked_seq_QMARK_.call(null,inst_48843);
var state_48877__$1 = state_48877;
if(inst_48845){
var statearr_48908_48939 = state_48877__$1;
(statearr_48908_48939[(1)] = (17));

} else {
var statearr_48909_48940 = state_48877__$1;
(statearr_48909_48940[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (16))){
var inst_48861 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48910_48941 = state_48877__$1;
(statearr_48910_48941[(2)] = inst_48861);

(statearr_48910_48941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (10))){
var inst_48832 = (state_48877[(10)]);
var inst_48830 = (state_48877[(11)]);
var inst_48837 = cljs.core._nth.call(null,inst_48830,inst_48832);
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48877__$1,(13),out,inst_48837);
} else {
if((state_val_48878 === (18))){
var inst_48843 = (state_48877[(7)]);
var inst_48852 = cljs.core.first.call(null,inst_48843);
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48877__$1,(20),out,inst_48852);
} else {
if((state_val_48878 === (8))){
var inst_48831 = (state_48877[(8)]);
var inst_48832 = (state_48877[(10)]);
var inst_48834 = (inst_48832 < inst_48831);
var inst_48835 = inst_48834;
var state_48877__$1 = state_48877;
if(cljs.core.truth_(inst_48835)){
var statearr_48911_48942 = state_48877__$1;
(statearr_48911_48942[(1)] = (10));

} else {
var statearr_48912_48943 = state_48877__$1;
(statearr_48912_48943[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____0 = (function (){
var statearr_48916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48916[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__);

(statearr_48916[(1)] = (1));

return statearr_48916;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____1 = (function (state_48877){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e48917){if((e48917 instanceof Object)){
var ex__46334__auto__ = e48917;
var statearr_48918_48944 = state_48877;
(statearr_48918_48944[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48945 = state_48877;
state_48877 = G__48945;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__ = function(state_48877){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____1.call(this,state_48877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46331__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_48919 = f__46443__auto__.call(null);
(statearr_48919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_48919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48946 = [];
var len__41762__auto___48949 = arguments.length;
var i__41763__auto___48950 = (0);
while(true){
if((i__41763__auto___48950 < len__41762__auto___48949)){
args48946.push((arguments[i__41763__auto___48950]));

var G__48951 = (i__41763__auto___48950 + (1));
i__41763__auto___48950 = G__48951;
continue;
} else {
}
break;
}

var G__48948 = args48946.length;
switch (G__48948) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48946.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48953 = [];
var len__41762__auto___48956 = arguments.length;
var i__41763__auto___48957 = (0);
while(true){
if((i__41763__auto___48957 < len__41762__auto___48956)){
args48953.push((arguments[i__41763__auto___48957]));

var G__48958 = (i__41763__auto___48957 + (1));
i__41763__auto___48957 = G__48958;
continue;
} else {
}
break;
}

var G__48955 = args48953.length;
switch (G__48955) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48953.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48960 = [];
var len__41762__auto___49011 = arguments.length;
var i__41763__auto___49012 = (0);
while(true){
if((i__41763__auto___49012 < len__41762__auto___49011)){
args48960.push((arguments[i__41763__auto___49012]));

var G__49013 = (i__41763__auto___49012 + (1));
i__41763__auto___49012 = G__49013;
continue;
} else {
}
break;
}

var G__48962 = args48960.length;
switch (G__48962) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48960.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___49015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___49015,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___49015,out){
return (function (state_48986){
var state_val_48987 = (state_48986[(1)]);
if((state_val_48987 === (7))){
var inst_48981 = (state_48986[(2)]);
var state_48986__$1 = state_48986;
var statearr_48988_49016 = state_48986__$1;
(statearr_48988_49016[(2)] = inst_48981);

(statearr_48988_49016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (1))){
var inst_48963 = null;
var state_48986__$1 = (function (){var statearr_48989 = state_48986;
(statearr_48989[(7)] = inst_48963);

return statearr_48989;
})();
var statearr_48990_49017 = state_48986__$1;
(statearr_48990_49017[(2)] = null);

(statearr_48990_49017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (4))){
var inst_48966 = (state_48986[(8)]);
var inst_48966__$1 = (state_48986[(2)]);
var inst_48967 = (inst_48966__$1 == null);
var inst_48968 = cljs.core.not.call(null,inst_48967);
var state_48986__$1 = (function (){var statearr_48991 = state_48986;
(statearr_48991[(8)] = inst_48966__$1);

return statearr_48991;
})();
if(inst_48968){
var statearr_48992_49018 = state_48986__$1;
(statearr_48992_49018[(1)] = (5));

} else {
var statearr_48993_49019 = state_48986__$1;
(statearr_48993_49019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (6))){
var state_48986__$1 = state_48986;
var statearr_48994_49020 = state_48986__$1;
(statearr_48994_49020[(2)] = null);

(statearr_48994_49020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (3))){
var inst_48983 = (state_48986[(2)]);
var inst_48984 = cljs.core.async.close_BANG_.call(null,out);
var state_48986__$1 = (function (){var statearr_48995 = state_48986;
(statearr_48995[(9)] = inst_48983);

return statearr_48995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48986__$1,inst_48984);
} else {
if((state_val_48987 === (2))){
var state_48986__$1 = state_48986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48986__$1,(4),ch);
} else {
if((state_val_48987 === (11))){
var inst_48966 = (state_48986[(8)]);
var inst_48975 = (state_48986[(2)]);
var inst_48963 = inst_48966;
var state_48986__$1 = (function (){var statearr_48996 = state_48986;
(statearr_48996[(10)] = inst_48975);

(statearr_48996[(7)] = inst_48963);

return statearr_48996;
})();
var statearr_48997_49021 = state_48986__$1;
(statearr_48997_49021[(2)] = null);

(statearr_48997_49021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (9))){
var inst_48966 = (state_48986[(8)]);
var state_48986__$1 = state_48986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48986__$1,(11),out,inst_48966);
} else {
if((state_val_48987 === (5))){
var inst_48963 = (state_48986[(7)]);
var inst_48966 = (state_48986[(8)]);
var inst_48970 = cljs.core._EQ_.call(null,inst_48966,inst_48963);
var state_48986__$1 = state_48986;
if(inst_48970){
var statearr_48999_49022 = state_48986__$1;
(statearr_48999_49022[(1)] = (8));

} else {
var statearr_49000_49023 = state_48986__$1;
(statearr_49000_49023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (10))){
var inst_48978 = (state_48986[(2)]);
var state_48986__$1 = state_48986;
var statearr_49001_49024 = state_48986__$1;
(statearr_49001_49024[(2)] = inst_48978);

(statearr_49001_49024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48987 === (8))){
var inst_48963 = (state_48986[(7)]);
var tmp48998 = inst_48963;
var inst_48963__$1 = tmp48998;
var state_48986__$1 = (function (){var statearr_49002 = state_48986;
(statearr_49002[(7)] = inst_48963__$1);

return statearr_49002;
})();
var statearr_49003_49025 = state_48986__$1;
(statearr_49003_49025[(2)] = null);

(statearr_49003_49025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___49015,out))
;
return ((function (switch__46330__auto__,c__46442__auto___49015,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_49007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49007[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_49007[(1)] = (1));

return statearr_49007;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_48986){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_48986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49008){if((e49008 instanceof Object)){
var ex__46334__auto__ = e49008;
var statearr_49009_49026 = state_48986;
(statearr_49009_49026[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49027 = state_48986;
state_48986 = G__49027;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_48986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_48986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___49015,out))
})();
var state__46444__auto__ = (function (){var statearr_49010 = f__46443__auto__.call(null);
(statearr_49010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___49015);

return statearr_49010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___49015,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49028 = [];
var len__41762__auto___49098 = arguments.length;
var i__41763__auto___49099 = (0);
while(true){
if((i__41763__auto___49099 < len__41762__auto___49098)){
args49028.push((arguments[i__41763__auto___49099]));

var G__49100 = (i__41763__auto___49099 + (1));
i__41763__auto___49099 = G__49100;
continue;
} else {
}
break;
}

var G__49030 = args49028.length;
switch (G__49030) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49028.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___49102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___49102,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___49102,out){
return (function (state_49068){
var state_val_49069 = (state_49068[(1)]);
if((state_val_49069 === (7))){
var inst_49064 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49070_49103 = state_49068__$1;
(statearr_49070_49103[(2)] = inst_49064);

(statearr_49070_49103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (1))){
var inst_49031 = (new Array(n));
var inst_49032 = inst_49031;
var inst_49033 = (0);
var state_49068__$1 = (function (){var statearr_49071 = state_49068;
(statearr_49071[(7)] = inst_49033);

(statearr_49071[(8)] = inst_49032);

return statearr_49071;
})();
var statearr_49072_49104 = state_49068__$1;
(statearr_49072_49104[(2)] = null);

(statearr_49072_49104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (4))){
var inst_49036 = (state_49068[(9)]);
var inst_49036__$1 = (state_49068[(2)]);
var inst_49037 = (inst_49036__$1 == null);
var inst_49038 = cljs.core.not.call(null,inst_49037);
var state_49068__$1 = (function (){var statearr_49073 = state_49068;
(statearr_49073[(9)] = inst_49036__$1);

return statearr_49073;
})();
if(inst_49038){
var statearr_49074_49105 = state_49068__$1;
(statearr_49074_49105[(1)] = (5));

} else {
var statearr_49075_49106 = state_49068__$1;
(statearr_49075_49106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (15))){
var inst_49058 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49076_49107 = state_49068__$1;
(statearr_49076_49107[(2)] = inst_49058);

(statearr_49076_49107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (13))){
var state_49068__$1 = state_49068;
var statearr_49077_49108 = state_49068__$1;
(statearr_49077_49108[(2)] = null);

(statearr_49077_49108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (6))){
var inst_49033 = (state_49068[(7)]);
var inst_49054 = (inst_49033 > (0));
var state_49068__$1 = state_49068;
if(cljs.core.truth_(inst_49054)){
var statearr_49078_49109 = state_49068__$1;
(statearr_49078_49109[(1)] = (12));

} else {
var statearr_49079_49110 = state_49068__$1;
(statearr_49079_49110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (3))){
var inst_49066 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49068__$1,inst_49066);
} else {
if((state_val_49069 === (12))){
var inst_49032 = (state_49068[(8)]);
var inst_49056 = cljs.core.vec.call(null,inst_49032);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49068__$1,(15),out,inst_49056);
} else {
if((state_val_49069 === (2))){
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49068__$1,(4),ch);
} else {
if((state_val_49069 === (11))){
var inst_49048 = (state_49068[(2)]);
var inst_49049 = (new Array(n));
var inst_49032 = inst_49049;
var inst_49033 = (0);
var state_49068__$1 = (function (){var statearr_49080 = state_49068;
(statearr_49080[(7)] = inst_49033);

(statearr_49080[(10)] = inst_49048);

(statearr_49080[(8)] = inst_49032);

return statearr_49080;
})();
var statearr_49081_49111 = state_49068__$1;
(statearr_49081_49111[(2)] = null);

(statearr_49081_49111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (9))){
var inst_49032 = (state_49068[(8)]);
var inst_49046 = cljs.core.vec.call(null,inst_49032);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49068__$1,(11),out,inst_49046);
} else {
if((state_val_49069 === (5))){
var inst_49033 = (state_49068[(7)]);
var inst_49036 = (state_49068[(9)]);
var inst_49041 = (state_49068[(11)]);
var inst_49032 = (state_49068[(8)]);
var inst_49040 = (inst_49032[inst_49033] = inst_49036);
var inst_49041__$1 = (inst_49033 + (1));
var inst_49042 = (inst_49041__$1 < n);
var state_49068__$1 = (function (){var statearr_49082 = state_49068;
(statearr_49082[(12)] = inst_49040);

(statearr_49082[(11)] = inst_49041__$1);

return statearr_49082;
})();
if(cljs.core.truth_(inst_49042)){
var statearr_49083_49112 = state_49068__$1;
(statearr_49083_49112[(1)] = (8));

} else {
var statearr_49084_49113 = state_49068__$1;
(statearr_49084_49113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (14))){
var inst_49061 = (state_49068[(2)]);
var inst_49062 = cljs.core.async.close_BANG_.call(null,out);
var state_49068__$1 = (function (){var statearr_49086 = state_49068;
(statearr_49086[(13)] = inst_49061);

return statearr_49086;
})();
var statearr_49087_49114 = state_49068__$1;
(statearr_49087_49114[(2)] = inst_49062);

(statearr_49087_49114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (10))){
var inst_49052 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49088_49115 = state_49068__$1;
(statearr_49088_49115[(2)] = inst_49052);

(statearr_49088_49115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (8))){
var inst_49041 = (state_49068[(11)]);
var inst_49032 = (state_49068[(8)]);
var tmp49085 = inst_49032;
var inst_49032__$1 = tmp49085;
var inst_49033 = inst_49041;
var state_49068__$1 = (function (){var statearr_49089 = state_49068;
(statearr_49089[(7)] = inst_49033);

(statearr_49089[(8)] = inst_49032__$1);

return statearr_49089;
})();
var statearr_49090_49116 = state_49068__$1;
(statearr_49090_49116[(2)] = null);

(statearr_49090_49116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___49102,out))
;
return ((function (switch__46330__auto__,c__46442__auto___49102,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_49094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49094[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_49094[(1)] = (1));

return statearr_49094;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_49068){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_49068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49095){if((e49095 instanceof Object)){
var ex__46334__auto__ = e49095;
var statearr_49096_49117 = state_49068;
(statearr_49096_49117[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49118 = state_49068;
state_49068 = G__49118;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_49068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_49068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___49102,out))
})();
var state__46444__auto__ = (function (){var statearr_49097 = f__46443__auto__.call(null);
(statearr_49097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___49102);

return statearr_49097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___49102,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49119 = [];
var len__41762__auto___49193 = arguments.length;
var i__41763__auto___49194 = (0);
while(true){
if((i__41763__auto___49194 < len__41762__auto___49193)){
args49119.push((arguments[i__41763__auto___49194]));

var G__49195 = (i__41763__auto___49194 + (1));
i__41763__auto___49194 = G__49195;
continue;
} else {
}
break;
}

var G__49121 = args49119.length;
switch (G__49121) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49119.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46442__auto___49197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___49197,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___49197,out){
return (function (state_49163){
var state_val_49164 = (state_49163[(1)]);
if((state_val_49164 === (7))){
var inst_49159 = (state_49163[(2)]);
var state_49163__$1 = state_49163;
var statearr_49165_49198 = state_49163__$1;
(statearr_49165_49198[(2)] = inst_49159);

(statearr_49165_49198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (1))){
var inst_49122 = [];
var inst_49123 = inst_49122;
var inst_49124 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49163__$1 = (function (){var statearr_49166 = state_49163;
(statearr_49166[(7)] = inst_49124);

(statearr_49166[(8)] = inst_49123);

return statearr_49166;
})();
var statearr_49167_49199 = state_49163__$1;
(statearr_49167_49199[(2)] = null);

(statearr_49167_49199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (4))){
var inst_49127 = (state_49163[(9)]);
var inst_49127__$1 = (state_49163[(2)]);
var inst_49128 = (inst_49127__$1 == null);
var inst_49129 = cljs.core.not.call(null,inst_49128);
var state_49163__$1 = (function (){var statearr_49168 = state_49163;
(statearr_49168[(9)] = inst_49127__$1);

return statearr_49168;
})();
if(inst_49129){
var statearr_49169_49200 = state_49163__$1;
(statearr_49169_49200[(1)] = (5));

} else {
var statearr_49170_49201 = state_49163__$1;
(statearr_49170_49201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (15))){
var inst_49153 = (state_49163[(2)]);
var state_49163__$1 = state_49163;
var statearr_49171_49202 = state_49163__$1;
(statearr_49171_49202[(2)] = inst_49153);

(statearr_49171_49202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (13))){
var state_49163__$1 = state_49163;
var statearr_49172_49203 = state_49163__$1;
(statearr_49172_49203[(2)] = null);

(statearr_49172_49203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (6))){
var inst_49123 = (state_49163[(8)]);
var inst_49148 = inst_49123.length;
var inst_49149 = (inst_49148 > (0));
var state_49163__$1 = state_49163;
if(cljs.core.truth_(inst_49149)){
var statearr_49173_49204 = state_49163__$1;
(statearr_49173_49204[(1)] = (12));

} else {
var statearr_49174_49205 = state_49163__$1;
(statearr_49174_49205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (3))){
var inst_49161 = (state_49163[(2)]);
var state_49163__$1 = state_49163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49163__$1,inst_49161);
} else {
if((state_val_49164 === (12))){
var inst_49123 = (state_49163[(8)]);
var inst_49151 = cljs.core.vec.call(null,inst_49123);
var state_49163__$1 = state_49163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49163__$1,(15),out,inst_49151);
} else {
if((state_val_49164 === (2))){
var state_49163__$1 = state_49163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49163__$1,(4),ch);
} else {
if((state_val_49164 === (11))){
var inst_49127 = (state_49163[(9)]);
var inst_49131 = (state_49163[(10)]);
var inst_49141 = (state_49163[(2)]);
var inst_49142 = [];
var inst_49143 = inst_49142.push(inst_49127);
var inst_49123 = inst_49142;
var inst_49124 = inst_49131;
var state_49163__$1 = (function (){var statearr_49175 = state_49163;
(statearr_49175[(11)] = inst_49143);

(statearr_49175[(12)] = inst_49141);

(statearr_49175[(7)] = inst_49124);

(statearr_49175[(8)] = inst_49123);

return statearr_49175;
})();
var statearr_49176_49206 = state_49163__$1;
(statearr_49176_49206[(2)] = null);

(statearr_49176_49206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (9))){
var inst_49123 = (state_49163[(8)]);
var inst_49139 = cljs.core.vec.call(null,inst_49123);
var state_49163__$1 = state_49163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49163__$1,(11),out,inst_49139);
} else {
if((state_val_49164 === (5))){
var inst_49127 = (state_49163[(9)]);
var inst_49124 = (state_49163[(7)]);
var inst_49131 = (state_49163[(10)]);
var inst_49131__$1 = f.call(null,inst_49127);
var inst_49132 = cljs.core._EQ_.call(null,inst_49131__$1,inst_49124);
var inst_49133 = cljs.core.keyword_identical_QMARK_.call(null,inst_49124,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49134 = (inst_49132) || (inst_49133);
var state_49163__$1 = (function (){var statearr_49177 = state_49163;
(statearr_49177[(10)] = inst_49131__$1);

return statearr_49177;
})();
if(cljs.core.truth_(inst_49134)){
var statearr_49178_49207 = state_49163__$1;
(statearr_49178_49207[(1)] = (8));

} else {
var statearr_49179_49208 = state_49163__$1;
(statearr_49179_49208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (14))){
var inst_49156 = (state_49163[(2)]);
var inst_49157 = cljs.core.async.close_BANG_.call(null,out);
var state_49163__$1 = (function (){var statearr_49181 = state_49163;
(statearr_49181[(13)] = inst_49156);

return statearr_49181;
})();
var statearr_49182_49209 = state_49163__$1;
(statearr_49182_49209[(2)] = inst_49157);

(statearr_49182_49209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (10))){
var inst_49146 = (state_49163[(2)]);
var state_49163__$1 = state_49163;
var statearr_49183_49210 = state_49163__$1;
(statearr_49183_49210[(2)] = inst_49146);

(statearr_49183_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49164 === (8))){
var inst_49127 = (state_49163[(9)]);
var inst_49131 = (state_49163[(10)]);
var inst_49123 = (state_49163[(8)]);
var inst_49136 = inst_49123.push(inst_49127);
var tmp49180 = inst_49123;
var inst_49123__$1 = tmp49180;
var inst_49124 = inst_49131;
var state_49163__$1 = (function (){var statearr_49184 = state_49163;
(statearr_49184[(14)] = inst_49136);

(statearr_49184[(7)] = inst_49124);

(statearr_49184[(8)] = inst_49123__$1);

return statearr_49184;
})();
var statearr_49185_49211 = state_49163__$1;
(statearr_49185_49211[(2)] = null);

(statearr_49185_49211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__46442__auto___49197,out))
;
return ((function (switch__46330__auto__,c__46442__auto___49197,out){
return (function() {
var cljs$core$async$state_machine__46331__auto__ = null;
var cljs$core$async$state_machine__46331__auto____0 = (function (){
var statearr_49189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49189[(0)] = cljs$core$async$state_machine__46331__auto__);

(statearr_49189[(1)] = (1));

return statearr_49189;
});
var cljs$core$async$state_machine__46331__auto____1 = (function (state_49163){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_49163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49190){if((e49190 instanceof Object)){
var ex__46334__auto__ = e49190;
var statearr_49191_49212 = state_49163;
(statearr_49191_49212[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49213 = state_49163;
state_49163 = G__49213;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
cljs$core$async$state_machine__46331__auto__ = function(state_49163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46331__auto____1.call(this,state_49163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46331__auto____0;
cljs$core$async$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46331__auto____1;
return cljs$core$async$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___49197,out))
})();
var state__46444__auto__ = (function (){var statearr_49192 = f__46443__auto__.call(null);
(statearr_49192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___49197);

return statearr_49192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___49197,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1482388852475