// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.query_route');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('solsort.toolbox.misc');
goog.require('solsort.toolbox.appdb');
if(typeof solsort.toolbox.query_route.use_query !== 'undefined'){
} else {
solsort.toolbox.query_route.use_query = cljs.core.atom.call(null,true);
}
if(typeof solsort.toolbox.query_route.path !== 'undefined'){
} else {
solsort.toolbox.query_route.path = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309)], null));
}
if(typeof solsort.toolbox.query_route.prev_url !== 'undefined'){
} else {
solsort.toolbox.query_route.prev_url = cljs.core.atom.call(null,null);
}
/**
 * Add the current route the the history
 */
solsort.toolbox.query_route.add_history = (function solsort$toolbox$query_route$add_history(var_args){
var args52032 = [];
var len__41762__auto___52035 = arguments.length;
var i__41763__auto___52036 = (0);
while(true){
if((i__41763__auto___52036 < len__41762__auto___52035)){
args52032.push((arguments[i__41763__auto___52036]));

var G__52037 = (i__41763__auto___52036 + (1));
i__41763__auto___52036 = G__52037;
continue;
} else {
}
break;
}

var G__52034 = args52032.length;
switch (G__52034) {
case 0:
return solsort.toolbox.query_route.add_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return solsort.toolbox.query_route.add_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52032.length)].join('')));

}
});

solsort.toolbox.query_route.add_history.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.prev_url),location.href)){
return null;
} else {
cljs.core.reset_BANG_.call(null,solsort.toolbox.query_route.prev_url,location.href);

return history.pushState(null,null,location.href);
}
});

solsort.toolbox.query_route.add_history.cljs$core$IFn$_invoke$arity$1 = (function (o){
solsort.toolbox.appdb.db_BANG_.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path),o);

return solsort.toolbox.query_route.add_history.call(null);
});

solsort.toolbox.query_route.add_history.cljs$lang$maxFixedArity = 1;
/**
 * add-history, but executing at most once every other second
 */
solsort.toolbox.query_route.throttled_add_history = solsort.toolbox.misc.throttle.call(null,solsort.toolbox.query_route.add_history,(2000));
solsort.toolbox.query_route.open = (function solsort$toolbox$query_route$open(o){
return solsort.toolbox.appdb.db_BANG_.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path),o);
});
solsort.toolbox.query_route.current = (function solsort$toolbox$query_route$current(var_args){
var args52039 = [];
var len__41762__auto___52042 = arguments.length;
var i__41763__auto___52043 = (0);
while(true){
if((i__41763__auto___52043 < len__41762__auto___52042)){
args52039.push((arguments[i__41763__auto___52043]));

var G__52044 = (i__41763__auto___52043 + (1));
i__41763__auto___52043 = G__52044;
continue;
} else {
}
break;
}

var G__52041 = args52039.length;
switch (G__52041) {
case 0:
return solsort.toolbox.query_route.current.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return solsort.toolbox.query_route.current.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52039.length)].join('')));

}
});

solsort.toolbox.query_route.current.cljs$core$IFn$_invoke$arity$0 = (function (){
return solsort.toolbox.appdb.db.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path));
});

solsort.toolbox.query_route.current.cljs$core$IFn$_invoke$arity$1 = (function (default$){
return solsort.toolbox.appdb.db.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path),default$);
});

solsort.toolbox.query_route.current.cljs$lang$maxFixedArity = 1;
solsort.toolbox.query_route.url = (function solsort$toolbox$query_route$url(o){
return [cljs.core.str(cljs.core.re_find.call(null,/[^#?]*/,location.href)),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,solsort.toolbox.query_route.use_query))?"?":"#")),cljs.core.str(clojure.string.replace.call(null,JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,o)),(new RegExp("[%#&?]","g")),(function (c){
return [cljs.core.str("%"),cljs.core.str(solsort.toolbox.misc.hex_byte.call(null,c.charCodeAt((0))))].join('');
})))].join('');
});
solsort.toolbox.query_route.set_route_path = (function solsort$toolbox$query_route$set_route_path(p){
return cljs.core.reset_BANG_.call(null,solsort.toolbox.query_route.path,p);
});
solsort.toolbox.query_route.ahref = (function solsort$toolbox$query_route$ahref(var_args){
var args52046 = [];
var len__41762__auto___52049 = arguments.length;
var i__41763__auto___52050 = (0);
while(true){
if((i__41763__auto___52050 < len__41762__auto___52049)){
args52046.push((arguments[i__41763__auto___52050]));

var G__52051 = (i__41763__auto___52050 + (1));
i__41763__auto___52050 = G__52051;
continue;
} else {
}
break;
}

var G__52048 = args52046.length;
switch (G__52048) {
case 1:
return solsort.toolbox.query_route.ahref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return solsort.toolbox.query_route.ahref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52046.length)].join('')));

}
});

solsort.toolbox.query_route.ahref.cljs$core$IFn$_invoke$arity$1 = (function (o){
return solsort.toolbox.query_route.ahref.call(null,o,cljs.core.PersistentArrayMap.EMPTY);
});

solsort.toolbox.query_route.ahref.cljs$core$IFn$_invoke$arity$2 = (function (o,ext){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),solsort.toolbox.query_route.url.call(null,o),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return solsort.toolbox.query_route.open.call(null,o);
})], null),ext);
});

solsort.toolbox.query_route.ahref.cljs$lang$maxFixedArity = 2;
var co__45055__auto___52053 = reagent.ratom.make_reaction.call(null,(function (){
var new_url = solsort.toolbox.query_route.url.call(null,solsort.toolbox.appdb.db.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path)));
if(cljs.core.truth_((function (){var and__40680__auto__ = solsort.toolbox.appdb.db.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path));
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core.not_EQ_.call(null,location.href,new_url);
} else {
return and__40680__auto__;
}
})())){
history.replaceState(null,null,new_url);

return solsort.toolbox.query_route.throttled_add_history.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__45055__auto___52053);

/**
 * update (db @path) when url changes
 */
solsort.toolbox.query_route.url_change = (function solsort$toolbox$query_route$url_change(){
return solsort.toolbox.appdb.db_BANG_.call(null,cljs.core.deref.call(null,solsort.toolbox.query_route.path),(function (){try{return clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,JSON.parse.call(null,decodeURIComponent((function (){var or__40692__auto__ = cljs.core.second.call(null,cljs.core.re_find.call(null,/[?#](.*)/,location.href));
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return "";
}
})()))));
}catch (e52055){if((e52055 instanceof Object)){
var e = e52055;
return null;
} else {
throw e52055;

}
}})());
});
solsort.toolbox.query_route.url_change.call(null);
(window["onpopstate"] = solsort.toolbox.query_route.url_change);

//# sourceMappingURL=query_route.js.map?rel=1482388922670