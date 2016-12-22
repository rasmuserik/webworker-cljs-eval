// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__44953__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44954__i = 0, G__44954__a = new Array(arguments.length -  0);
while (G__44954__i < G__44954__a.length) {G__44954__a[G__44954__i] = arguments[G__44954__i + 0]; ++G__44954__i;}
  args = new cljs.core.IndexedSeq(G__44954__a,0);
} 
return G__44953__delegate.call(this,args);};
G__44953.cljs$lang$maxFixedArity = 0;
G__44953.cljs$lang$applyTo = (function (arglist__44955){
var args = cljs.core.seq(arglist__44955);
return G__44953__delegate(args);
});
G__44953.cljs$core$IFn$_invoke$arity$variadic = G__44953__delegate;
return G__44953;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44956__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44957__i = 0, G__44957__a = new Array(arguments.length -  0);
while (G__44957__i < G__44957__a.length) {G__44957__a[G__44957__i] = arguments[G__44957__i + 0]; ++G__44957__i;}
  args = new cljs.core.IndexedSeq(G__44957__a,0);
} 
return G__44956__delegate.call(this,args);};
G__44956.cljs$lang$maxFixedArity = 0;
G__44956.cljs$lang$applyTo = (function (arglist__44958){
var args = cljs.core.seq(arglist__44958);
return G__44956__delegate(args);
});
G__44956.cljs$core$IFn$_invoke$arity$variadic = G__44956__delegate;
return G__44956;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1482388846175