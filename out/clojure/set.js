// Compiled by ClojureScript 1.8.51 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__41877_SHARP_){
return (max === p1__41877_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args41878 = [];
var len__41762__auto___41884 = arguments.length;
var i__41763__auto___41885 = (0);
while(true){
if((i__41763__auto___41885 < len__41762__auto___41884)){
args41878.push((arguments[i__41763__auto___41885]));

var G__41886 = (i__41763__auto___41885 + (1));
i__41763__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var G__41883 = args41878.length;
switch (G__41883) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args41878.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq41879){
var G__41880 = cljs.core.first.call(null,seq41879);
var seq41879__$1 = cljs.core.next.call(null,seq41879);
var G__41881 = cljs.core.first.call(null,seq41879__$1);
var seq41879__$2 = cljs.core.next.call(null,seq41879__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__41880,G__41881,seq41879__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args41889 = [];
var len__41762__auto___41895 = arguments.length;
var i__41763__auto___41896 = (0);
while(true){
if((i__41763__auto___41896 < len__41762__auto___41895)){
args41889.push((arguments[i__41763__auto___41896]));

var G__41897 = (i__41763__auto___41896 + (1));
i__41763__auto___41896 = G__41897;
continue;
} else {
}
break;
}

var G__41894 = args41889.length;
switch (G__41894) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args41889.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__41899 = s2;
var G__41900 = s1;
s1 = G__41899;
s2 = G__41900;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__41888_SHARP_){
return (- cljs.core.count.call(null,p1__41888_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq41890){
var G__41891 = cljs.core.first.call(null,seq41890);
var seq41890__$1 = cljs.core.next.call(null,seq41890);
var G__41892 = cljs.core.first.call(null,seq41890__$1);
var seq41890__$2 = cljs.core.next.call(null,seq41890__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__41891,G__41892,seq41890__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args41901 = [];
var len__41762__auto___41907 = arguments.length;
var i__41763__auto___41908 = (0);
while(true){
if((i__41763__auto___41908 < len__41762__auto___41907)){
args41901.push((arguments[i__41763__auto___41908]));

var G__41909 = (i__41763__auto___41908 + (1));
i__41763__auto___41908 = G__41909;
continue;
} else {
}
break;
}

var G__41906 = args41901.length;
switch (G__41906) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args41901.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq41902){
var G__41903 = cljs.core.first.call(null,seq41902);
var seq41902__$1 = cljs.core.next.call(null,seq41902);
var G__41904 = cljs.core.first.call(null,seq41902__$1);
var seq41902__$2 = cljs.core.next.call(null,seq41902__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__41903,G__41904,seq41902__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41911_SHARP_){
return cljs.core.select_keys.call(null,p1__41911_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__41914){
var vec__41915 = p__41914;
var old = cljs.core.nth.call(null,vec__41915,(0),null);
var new$ = cljs.core.nth.call(null,vec__41915,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41916_SHARP_){
return clojure.set.rename_keys.call(null,p1__41916_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__41919){
var vec__41920 = p__41919;
var k = cljs.core.nth.call(null,vec__41920,(0),null);
var v = cljs.core.nth.call(null,vec__41920,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args41925 = [];
var len__41762__auto___41930 = arguments.length;
var i__41763__auto___41931 = (0);
while(true){
if((i__41763__auto___41931 < len__41762__auto___41930)){
args41925.push((arguments[i__41763__auto___41931]));

var G__41932 = (i__41763__auto___41931 + (1));
i__41763__auto___41931 = G__41932;
continue;
} else {
}
break;
}

var G__41927 = args41925.length;
switch (G__41927) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41925.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__41928 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__41928,(0),null);
var s = cljs.core.nth.call(null,vec__41928,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__41928,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__41928,r,s,idx){
return (function (p1__41921_SHARP_,p2__41922_SHARP_){
return cljs.core.conj.call(null,p1__41921_SHARP_,cljs.core.merge.call(null,p2__41922_SHARP_,x));
});})(found,ks,vec__41928,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__41928,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__41929 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__41929,(0),null);
var s = cljs.core.nth.call(null,vec__41929,(1),null);
var k = cljs.core.nth.call(null,vec__41929,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__41929,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__41929,r,s,k,idx){
return (function (p1__41923_SHARP_,p2__41924_SHARP_){
return cljs.core.conj.call(null,p1__41923_SHARP_,cljs.core.merge.call(null,p2__41924_SHARP_,x));
});})(found,vec__41929,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__41929,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41934_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__41934_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41935_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__41935_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1482388838090