// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__40692__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_45328 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_45328){
return (function (){
var _STAR_always_update_STAR_45329 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_45329;
}});})(_STAR_always_update_STAR_45328))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_45328;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args45330 = [];
var len__41762__auto___45333 = arguments.length;
var i__41763__auto___45334 = (0);
while(true){
if((i__41763__auto___45334 < len__41762__auto___45333)){
args45330.push((arguments[i__41763__auto___45334]));

var G__45335 = (i__41763__auto___45334 + (1));
i__41763__auto___45334 = G__45335;
continue;
} else {
}
break;
}

var G__45332 = args45330.length;
switch (G__45332) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45330.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__45341_45345 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__45342_45346 = null;
var count__45343_45347 = (0);
var i__45344_45348 = (0);
while(true){
if((i__45344_45348 < count__45343_45347)){
var v_45349 = cljs.core._nth.call(null,chunk__45342_45346,i__45344_45348);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45349);

var G__45350 = seq__45341_45345;
var G__45351 = chunk__45342_45346;
var G__45352 = count__45343_45347;
var G__45353 = (i__45344_45348 + (1));
seq__45341_45345 = G__45350;
chunk__45342_45346 = G__45351;
count__45343_45347 = G__45352;
i__45344_45348 = G__45353;
continue;
} else {
var temp__4657__auto___45354 = cljs.core.seq.call(null,seq__45341_45345);
if(temp__4657__auto___45354){
var seq__45341_45355__$1 = temp__4657__auto___45354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45341_45355__$1)){
var c__41503__auto___45356 = cljs.core.chunk_first.call(null,seq__45341_45355__$1);
var G__45357 = cljs.core.chunk_rest.call(null,seq__45341_45355__$1);
var G__45358 = c__41503__auto___45356;
var G__45359 = cljs.core.count.call(null,c__41503__auto___45356);
var G__45360 = (0);
seq__45341_45345 = G__45357;
chunk__45342_45346 = G__45358;
count__45343_45347 = G__45359;
i__45344_45348 = G__45360;
continue;
} else {
var v_45361 = cljs.core.first.call(null,seq__45341_45355__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45361);

var G__45362 = cljs.core.next.call(null,seq__45341_45355__$1);
var G__45363 = null;
var G__45364 = (0);
var G__45365 = (0);
seq__45341_45345 = G__45362;
chunk__45342_45346 = G__45363;
count__45343_45347 = G__45364;
i__45344_45348 = G__45365;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1482388848100