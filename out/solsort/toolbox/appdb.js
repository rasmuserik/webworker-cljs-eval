// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.appdb');
goog.require('cljs.core');
goog.require('solsort.toolbox.misc');
goog.require('reagent.core');
if(typeof solsort.toolbox.appdb.db_atom !== 'undefined'){
} else {
solsort.toolbox.appdb.db_atom = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
solsort.toolbox.appdb.db_raw = (function solsort$toolbox$appdb$db_raw(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49543 = arguments.length;
var i__41763__auto___49544 = (0);
while(true){
if((i__41763__auto___49544 < len__41762__auto___49543)){
args__41769__auto__.push((arguments[i__41763__auto___49544]));

var G__49545 = (i__41763__auto___49544 + (1));
i__41763__auto___49544 = G__49545;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return solsort.toolbox.appdb.db_raw.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

solsort.toolbox.appdb.db_raw.cljs$core$IFn$_invoke$arity$variadic = (function (path){
if(cljs.core.truth_(path)){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.core.apply.call(null,solsort.toolbox.appdb.db_impl,cljs.core.butlast.call(null,path))),cljs.core.last.call(null,path));
}));
} else {
return solsort.toolbox.appdb.db_atom;
}
});

solsort.toolbox.appdb.db_raw.cljs$lang$maxFixedArity = (0);

solsort.toolbox.appdb.db_raw.cljs$lang$applyTo = (function (seq49542){
return solsort.toolbox.appdb.db_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49542));
});
/**
 * memoised function, that returns a subscription to a given path into the application db
 */
solsort.toolbox.appdb.db_impl = cljs.core.memoize.call(null,solsort.toolbox.appdb.db_raw);
/**
 * Write a value into the application db
 */
solsort.toolbox.appdb.db_BANG_ = (function solsort$toolbox$appdb$db_BANG_(var_args){
var args49546 = [];
var len__41762__auto___49549 = arguments.length;
var i__41763__auto___49550 = (0);
while(true){
if((i__41763__auto___49550 < len__41762__auto___49549)){
args49546.push((arguments[i__41763__auto___49550]));

var G__49551 = (i__41763__auto___49550 + (1));
i__41763__auto___49550 = G__49551;
continue;
} else {
}
break;
}

var G__49548 = args49546.length;
switch (G__49548) {
case 1:
return solsort.toolbox.appdb.db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return solsort.toolbox.appdb.db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49546.length)].join('')));

}
});

solsort.toolbox.appdb.db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.swap_BANG_.call(null,solsort.toolbox.appdb.db_atom,cljs.core.update_in,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
});

solsort.toolbox.appdb.db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (path,value){
cljs.core.swap_BANG_.call(null,solsort.toolbox.appdb.db_atom,cljs.core.assoc_in,path,value);

return value;
});

solsort.toolbox.appdb.db_BANG_.cljs$lang$maxFixedArity = 2;
solsort.toolbox.appdb.db_async_BANG_ = (function solsort$toolbox$appdb$db_async_BANG_(path,value){
return solsort.toolbox.misc.next_tick.call(null,(function (){
return solsort.toolbox.appdb.db_BANG_.call(null,path,value);
}));
});
solsort.toolbox.appdb.db = (function solsort$toolbox$appdb$db(var_args){
var args49553 = [];
var len__41762__auto___49556 = arguments.length;
var i__41763__auto___49557 = (0);
while(true){
if((i__41763__auto___49557 < len__41762__auto___49556)){
args49553.push((arguments[i__41763__auto___49557]));

var G__49558 = (i__41763__auto___49557 + (1));
i__41763__auto___49557 = G__49558;
continue;
} else {
}
break;
}

var G__49555 = args49553.length;
switch (G__49555) {
case 0:
return solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49553.length)].join('')));

}
});

solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref.call(null,solsort.toolbox.appdb.db_atom);
});

solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.deref.call(null,cljs.core.apply.call(null,solsort.toolbox.appdb.db_impl,path));
});

solsort.toolbox.appdb.db.cljs$core$IFn$_invoke$arity$2 = (function (path,default$){
var val = cljs.core.deref.call(null,cljs.core.apply.call(null,solsort.toolbox.appdb.db_impl,path));
if((val == null)){
return default$;
} else {
return val;
}
});

solsort.toolbox.appdb.db.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=appdb.js.map?rel=1482388853154