// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__41940){
var vec__41941 = p__41940;
var i = cljs.core.nth.call(null,vec__41941,(0),null);
var v = cljs.core.nth.call(null,vec__41941,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__41943 = seg;
var gcol = cljs.core.nth.call(null,vec__41943,(0),null);
var source = cljs.core.nth.call(null,vec__41943,(1),null);
var line = cljs.core.nth.call(null,vec__41943,(2),null);
var col = cljs.core.nth.call(null,vec__41943,(3),null);
var name = cljs.core.nth.call(null,vec__41943,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__41946 = seg;
var gcol = cljs.core.nth.call(null,vec__41946,(0),null);
var source = cljs.core.nth.call(null,vec__41946,(1),null);
var line = cljs.core.nth.call(null,vec__41946,(2),null);
var col = cljs.core.nth.call(null,vec__41946,(3),null);
var name = cljs.core.nth.call(null,vec__41946,(4),null);
var vec__41947 = relseg;
var rgcol = cljs.core.nth.call(null,vec__41947,(0),null);
var rsource = cljs.core.nth.call(null,vec__41947,(1),null);
var rline = cljs.core.nth.call(null,vec__41947,(2),null);
var rcol = cljs.core.nth.call(null,vec__41947,(3),null);
var rname = cljs.core.nth.call(null,vec__41947,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__40692__auto__ = source;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__40692__auto__ = line;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__40692__auto__ = col;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__40692__auto__ = name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__41950 = segmap;
var map__41950__$1 = ((((!((map__41950 == null)))?((((map__41950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41950):map__41950);
var gcol = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__41950,map__41950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args41952 = [];
var len__41762__auto___41956 = arguments.length;
var i__41763__auto___41957 = (0);
while(true){
if((i__41763__auto___41957 < len__41762__auto___41956)){
args41952.push((arguments[i__41763__auto___41957]));

var G__41958 = (i__41763__auto___41957 + (1));
i__41763__auto___41957 = G__41958;
continue;
} else {
}
break;
}

var G__41954 = args41952.length;
switch (G__41954) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41952.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__41955 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__41960 = cljs.core.next.call(null,segs__$1);
var G__41961 = nrelseg;
var G__41962 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__41960;
relseg__$1 = G__41961;
result__$1 = G__41962;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__41955,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__41955,(1),null);
var G__41963 = (gline + (1));
var G__41964 = cljs.core.next.call(null,lines__$1);
var G__41965 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__41966 = result__$1;
gline = G__41963;
lines__$1 = G__41964;
relseg = G__41965;
result = G__41966;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__41970 = segmap;
var map__41970__$1 = ((((!((map__41970 == null)))?((((map__41970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41970):map__41970);
var gcol = cljs.core.get.call(null,map__41970__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__41970__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__41970__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__41970__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__41970__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__41970,map__41970__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__41970,map__41970__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__41967_SHARP_){
return cljs.core.conj.call(null,p1__41967_SHARP_,d__$1);
});})(map__41970,map__41970__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__41970,map__41970__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args41972 = [];
var len__41762__auto___41976 = arguments.length;
var i__41763__auto___41977 = (0);
while(true){
if((i__41763__auto___41977 < len__41762__auto___41976)){
args41972.push((arguments[i__41763__auto___41977]));

var G__41978 = (i__41763__auto___41977 + (1));
i__41763__auto___41977 = G__41978;
continue;
} else {
}
break;
}

var G__41974 = args41972.length;
switch (G__41974) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41972.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__41975 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__41980 = cljs.core.next.call(null,segs__$1);
var G__41981 = nrelseg;
var G__41982 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__41980;
relseg__$1 = G__41981;
result__$1 = G__41982;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__41975,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__41975,(1),null);
var G__41983 = (gline + (1));
var G__41984 = cljs.core.next.call(null,lines__$1);
var G__41985 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__41986 = result__$1;
gline = G__41983;
lines__$1 = G__41984;
relseg = G__41985;
result = G__41986;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__41993){
var vec__41994 = p__41993;
var _ = cljs.core.nth.call(null,vec__41994,(0),null);
var source = cljs.core.nth.call(null,vec__41994,(1),null);
var line = cljs.core.nth.call(null,vec__41994,(2),null);
var col = cljs.core.nth.call(null,vec__41994,(3),null);
var name = cljs.core.nth.call(null,vec__41994,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__41995){
var vec__41996 = p__41995;
var gcol = cljs.core.nth.call(null,vec__41996,(0),null);
var sidx = cljs.core.nth.call(null,vec__41996,(1),null);
var line = cljs.core.nth.call(null,vec__41996,(2),null);
var col = cljs.core.nth.call(null,vec__41996,(3),null);
var name = cljs.core.nth.call(null,vec__41996,(4),null);
var seg = vec__41996;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__41996,gcol,sidx,line,col,name,seg,relseg){
return (function (p__41997){
var vec__41998 = p__41997;
var _ = cljs.core.nth.call(null,vec__41998,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41998,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__41998,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__41998,(3),null);
var lname = cljs.core.nth.call(null,vec__41998,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__40692__auto__ = name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__41996,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__40692__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__42052 = cljs.core.seq.call(null,infos);
var chunk__42053 = null;
var count__42054 = (0);
var i__42055 = (0);
while(true){
if((i__42055 < count__42054)){
var info = cljs.core._nth.call(null,chunk__42053,i__42055);
var segv_42102 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_42103 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_42104 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_42103 > (lc_42104 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__42052,chunk__42053,count__42054,i__42055,segv_42102,gline_42103,lc_42104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_42103 - (lc_42104 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_42102], null));
});})(seq__42052,chunk__42053,count__42054,i__42055,segv_42102,gline_42103,lc_42104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__42052,chunk__42053,count__42054,i__42055,segv_42102,gline_42103,lc_42104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42103], null),cljs.core.conj,segv_42102);
});})(seq__42052,chunk__42053,count__42054,i__42055,segv_42102,gline_42103,lc_42104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__42105 = seq__42052;
var G__42106 = chunk__42053;
var G__42107 = count__42054;
var G__42108 = (i__42055 + (1));
seq__42052 = G__42105;
chunk__42053 = G__42106;
count__42054 = G__42107;
i__42055 = G__42108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42052);
if(temp__4657__auto__){
var seq__42052__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42052__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__42052__$1);
var G__42109 = cljs.core.chunk_rest.call(null,seq__42052__$1);
var G__42110 = c__41503__auto__;
var G__42111 = cljs.core.count.call(null,c__41503__auto__);
var G__42112 = (0);
seq__42052 = G__42109;
chunk__42053 = G__42110;
count__42054 = G__42111;
i__42055 = G__42112;
continue;
} else {
var info = cljs.core.first.call(null,seq__42052__$1);
var segv_42113 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_42114 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_42115 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_42114 > (lc_42115 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__42052,chunk__42053,count__42054,i__42055,segv_42113,gline_42114,lc_42115,info,seq__42052__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_42114 - (lc_42115 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_42113], null));
});})(seq__42052,chunk__42053,count__42054,i__42055,segv_42113,gline_42114,lc_42115,info,seq__42052__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__42052,chunk__42053,count__42054,i__42055,segv_42113,gline_42114,lc_42115,info,seq__42052__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42114], null),cljs.core.conj,segv_42113);
});})(seq__42052,chunk__42053,count__42054,i__42055,segv_42113,gline_42114,lc_42115,info,seq__42052__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__42116 = cljs.core.next.call(null,seq__42052__$1);
var G__42117 = null;
var G__42118 = (0);
var G__42119 = (0);
seq__42052 = G__42116;
chunk__42053 = G__42117;
count__42054 = G__42118;
i__42055 = G__42119;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__42056_42120 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__42057_42121 = null;
var count__42058_42122 = (0);
var i__42059_42123 = (0);
while(true){
if((i__42059_42123 < count__42058_42122)){
var vec__42060_42124 = cljs.core._nth.call(null,chunk__42057_42121,i__42059_42123);
var source_idx_42125 = cljs.core.nth.call(null,vec__42060_42124,(0),null);
var vec__42061_42126 = cljs.core.nth.call(null,vec__42060_42124,(1),null);
var __42127 = cljs.core.nth.call(null,vec__42061_42126,(0),null);
var lines_42128__$1 = cljs.core.nth.call(null,vec__42061_42126,(1),null);
var seq__42062_42129 = cljs.core.seq.call(null,lines_42128__$1);
var chunk__42063_42130 = null;
var count__42064_42131 = (0);
var i__42065_42132 = (0);
while(true){
if((i__42065_42132 < count__42064_42131)){
var vec__42066_42133 = cljs.core._nth.call(null,chunk__42063_42130,i__42065_42132);
var line_42134 = cljs.core.nth.call(null,vec__42066_42133,(0),null);
var cols_42135 = cljs.core.nth.call(null,vec__42066_42133,(1),null);
var seq__42067_42136 = cljs.core.seq.call(null,cols_42135);
var chunk__42068_42137 = null;
var count__42069_42138 = (0);
var i__42070_42139 = (0);
while(true){
if((i__42070_42139 < count__42069_42138)){
var vec__42071_42140 = cljs.core._nth.call(null,chunk__42068_42137,i__42070_42139);
var col_42141 = cljs.core.nth.call(null,vec__42071_42140,(0),null);
var infos_42142 = cljs.core.nth.call(null,vec__42071_42140,(1),null);
encode_cols.call(null,infos_42142,source_idx_42125,line_42134,col_42141);

var G__42143 = seq__42067_42136;
var G__42144 = chunk__42068_42137;
var G__42145 = count__42069_42138;
var G__42146 = (i__42070_42139 + (1));
seq__42067_42136 = G__42143;
chunk__42068_42137 = G__42144;
count__42069_42138 = G__42145;
i__42070_42139 = G__42146;
continue;
} else {
var temp__4657__auto___42147 = cljs.core.seq.call(null,seq__42067_42136);
if(temp__4657__auto___42147){
var seq__42067_42148__$1 = temp__4657__auto___42147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42067_42148__$1)){
var c__41503__auto___42149 = cljs.core.chunk_first.call(null,seq__42067_42148__$1);
var G__42150 = cljs.core.chunk_rest.call(null,seq__42067_42148__$1);
var G__42151 = c__41503__auto___42149;
var G__42152 = cljs.core.count.call(null,c__41503__auto___42149);
var G__42153 = (0);
seq__42067_42136 = G__42150;
chunk__42068_42137 = G__42151;
count__42069_42138 = G__42152;
i__42070_42139 = G__42153;
continue;
} else {
var vec__42072_42154 = cljs.core.first.call(null,seq__42067_42148__$1);
var col_42155 = cljs.core.nth.call(null,vec__42072_42154,(0),null);
var infos_42156 = cljs.core.nth.call(null,vec__42072_42154,(1),null);
encode_cols.call(null,infos_42156,source_idx_42125,line_42134,col_42155);

var G__42157 = cljs.core.next.call(null,seq__42067_42148__$1);
var G__42158 = null;
var G__42159 = (0);
var G__42160 = (0);
seq__42067_42136 = G__42157;
chunk__42068_42137 = G__42158;
count__42069_42138 = G__42159;
i__42070_42139 = G__42160;
continue;
}
} else {
}
}
break;
}

var G__42161 = seq__42062_42129;
var G__42162 = chunk__42063_42130;
var G__42163 = count__42064_42131;
var G__42164 = (i__42065_42132 + (1));
seq__42062_42129 = G__42161;
chunk__42063_42130 = G__42162;
count__42064_42131 = G__42163;
i__42065_42132 = G__42164;
continue;
} else {
var temp__4657__auto___42165 = cljs.core.seq.call(null,seq__42062_42129);
if(temp__4657__auto___42165){
var seq__42062_42166__$1 = temp__4657__auto___42165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42062_42166__$1)){
var c__41503__auto___42167 = cljs.core.chunk_first.call(null,seq__42062_42166__$1);
var G__42168 = cljs.core.chunk_rest.call(null,seq__42062_42166__$1);
var G__42169 = c__41503__auto___42167;
var G__42170 = cljs.core.count.call(null,c__41503__auto___42167);
var G__42171 = (0);
seq__42062_42129 = G__42168;
chunk__42063_42130 = G__42169;
count__42064_42131 = G__42170;
i__42065_42132 = G__42171;
continue;
} else {
var vec__42073_42172 = cljs.core.first.call(null,seq__42062_42166__$1);
var line_42173 = cljs.core.nth.call(null,vec__42073_42172,(0),null);
var cols_42174 = cljs.core.nth.call(null,vec__42073_42172,(1),null);
var seq__42074_42175 = cljs.core.seq.call(null,cols_42174);
var chunk__42075_42176 = null;
var count__42076_42177 = (0);
var i__42077_42178 = (0);
while(true){
if((i__42077_42178 < count__42076_42177)){
var vec__42078_42179 = cljs.core._nth.call(null,chunk__42075_42176,i__42077_42178);
var col_42180 = cljs.core.nth.call(null,vec__42078_42179,(0),null);
var infos_42181 = cljs.core.nth.call(null,vec__42078_42179,(1),null);
encode_cols.call(null,infos_42181,source_idx_42125,line_42173,col_42180);

var G__42182 = seq__42074_42175;
var G__42183 = chunk__42075_42176;
var G__42184 = count__42076_42177;
var G__42185 = (i__42077_42178 + (1));
seq__42074_42175 = G__42182;
chunk__42075_42176 = G__42183;
count__42076_42177 = G__42184;
i__42077_42178 = G__42185;
continue;
} else {
var temp__4657__auto___42186__$1 = cljs.core.seq.call(null,seq__42074_42175);
if(temp__4657__auto___42186__$1){
var seq__42074_42187__$1 = temp__4657__auto___42186__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42074_42187__$1)){
var c__41503__auto___42188 = cljs.core.chunk_first.call(null,seq__42074_42187__$1);
var G__42189 = cljs.core.chunk_rest.call(null,seq__42074_42187__$1);
var G__42190 = c__41503__auto___42188;
var G__42191 = cljs.core.count.call(null,c__41503__auto___42188);
var G__42192 = (0);
seq__42074_42175 = G__42189;
chunk__42075_42176 = G__42190;
count__42076_42177 = G__42191;
i__42077_42178 = G__42192;
continue;
} else {
var vec__42079_42193 = cljs.core.first.call(null,seq__42074_42187__$1);
var col_42194 = cljs.core.nth.call(null,vec__42079_42193,(0),null);
var infos_42195 = cljs.core.nth.call(null,vec__42079_42193,(1),null);
encode_cols.call(null,infos_42195,source_idx_42125,line_42173,col_42194);

var G__42196 = cljs.core.next.call(null,seq__42074_42187__$1);
var G__42197 = null;
var G__42198 = (0);
var G__42199 = (0);
seq__42074_42175 = G__42196;
chunk__42075_42176 = G__42197;
count__42076_42177 = G__42198;
i__42077_42178 = G__42199;
continue;
}
} else {
}
}
break;
}

var G__42200 = cljs.core.next.call(null,seq__42062_42166__$1);
var G__42201 = null;
var G__42202 = (0);
var G__42203 = (0);
seq__42062_42129 = G__42200;
chunk__42063_42130 = G__42201;
count__42064_42131 = G__42202;
i__42065_42132 = G__42203;
continue;
}
} else {
}
}
break;
}

var G__42204 = seq__42056_42120;
var G__42205 = chunk__42057_42121;
var G__42206 = count__42058_42122;
var G__42207 = (i__42059_42123 + (1));
seq__42056_42120 = G__42204;
chunk__42057_42121 = G__42205;
count__42058_42122 = G__42206;
i__42059_42123 = G__42207;
continue;
} else {
var temp__4657__auto___42208 = cljs.core.seq.call(null,seq__42056_42120);
if(temp__4657__auto___42208){
var seq__42056_42209__$1 = temp__4657__auto___42208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42056_42209__$1)){
var c__41503__auto___42210 = cljs.core.chunk_first.call(null,seq__42056_42209__$1);
var G__42211 = cljs.core.chunk_rest.call(null,seq__42056_42209__$1);
var G__42212 = c__41503__auto___42210;
var G__42213 = cljs.core.count.call(null,c__41503__auto___42210);
var G__42214 = (0);
seq__42056_42120 = G__42211;
chunk__42057_42121 = G__42212;
count__42058_42122 = G__42213;
i__42059_42123 = G__42214;
continue;
} else {
var vec__42080_42215 = cljs.core.first.call(null,seq__42056_42209__$1);
var source_idx_42216 = cljs.core.nth.call(null,vec__42080_42215,(0),null);
var vec__42081_42217 = cljs.core.nth.call(null,vec__42080_42215,(1),null);
var __42218 = cljs.core.nth.call(null,vec__42081_42217,(0),null);
var lines_42219__$1 = cljs.core.nth.call(null,vec__42081_42217,(1),null);
var seq__42082_42220 = cljs.core.seq.call(null,lines_42219__$1);
var chunk__42083_42221 = null;
var count__42084_42222 = (0);
var i__42085_42223 = (0);
while(true){
if((i__42085_42223 < count__42084_42222)){
var vec__42086_42224 = cljs.core._nth.call(null,chunk__42083_42221,i__42085_42223);
var line_42225 = cljs.core.nth.call(null,vec__42086_42224,(0),null);
var cols_42226 = cljs.core.nth.call(null,vec__42086_42224,(1),null);
var seq__42087_42227 = cljs.core.seq.call(null,cols_42226);
var chunk__42088_42228 = null;
var count__42089_42229 = (0);
var i__42090_42230 = (0);
while(true){
if((i__42090_42230 < count__42089_42229)){
var vec__42091_42231 = cljs.core._nth.call(null,chunk__42088_42228,i__42090_42230);
var col_42232 = cljs.core.nth.call(null,vec__42091_42231,(0),null);
var infos_42233 = cljs.core.nth.call(null,vec__42091_42231,(1),null);
encode_cols.call(null,infos_42233,source_idx_42216,line_42225,col_42232);

var G__42234 = seq__42087_42227;
var G__42235 = chunk__42088_42228;
var G__42236 = count__42089_42229;
var G__42237 = (i__42090_42230 + (1));
seq__42087_42227 = G__42234;
chunk__42088_42228 = G__42235;
count__42089_42229 = G__42236;
i__42090_42230 = G__42237;
continue;
} else {
var temp__4657__auto___42238__$1 = cljs.core.seq.call(null,seq__42087_42227);
if(temp__4657__auto___42238__$1){
var seq__42087_42239__$1 = temp__4657__auto___42238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42087_42239__$1)){
var c__41503__auto___42240 = cljs.core.chunk_first.call(null,seq__42087_42239__$1);
var G__42241 = cljs.core.chunk_rest.call(null,seq__42087_42239__$1);
var G__42242 = c__41503__auto___42240;
var G__42243 = cljs.core.count.call(null,c__41503__auto___42240);
var G__42244 = (0);
seq__42087_42227 = G__42241;
chunk__42088_42228 = G__42242;
count__42089_42229 = G__42243;
i__42090_42230 = G__42244;
continue;
} else {
var vec__42092_42245 = cljs.core.first.call(null,seq__42087_42239__$1);
var col_42246 = cljs.core.nth.call(null,vec__42092_42245,(0),null);
var infos_42247 = cljs.core.nth.call(null,vec__42092_42245,(1),null);
encode_cols.call(null,infos_42247,source_idx_42216,line_42225,col_42246);

var G__42248 = cljs.core.next.call(null,seq__42087_42239__$1);
var G__42249 = null;
var G__42250 = (0);
var G__42251 = (0);
seq__42087_42227 = G__42248;
chunk__42088_42228 = G__42249;
count__42089_42229 = G__42250;
i__42090_42230 = G__42251;
continue;
}
} else {
}
}
break;
}

var G__42252 = seq__42082_42220;
var G__42253 = chunk__42083_42221;
var G__42254 = count__42084_42222;
var G__42255 = (i__42085_42223 + (1));
seq__42082_42220 = G__42252;
chunk__42083_42221 = G__42253;
count__42084_42222 = G__42254;
i__42085_42223 = G__42255;
continue;
} else {
var temp__4657__auto___42256__$1 = cljs.core.seq.call(null,seq__42082_42220);
if(temp__4657__auto___42256__$1){
var seq__42082_42257__$1 = temp__4657__auto___42256__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42082_42257__$1)){
var c__41503__auto___42258 = cljs.core.chunk_first.call(null,seq__42082_42257__$1);
var G__42259 = cljs.core.chunk_rest.call(null,seq__42082_42257__$1);
var G__42260 = c__41503__auto___42258;
var G__42261 = cljs.core.count.call(null,c__41503__auto___42258);
var G__42262 = (0);
seq__42082_42220 = G__42259;
chunk__42083_42221 = G__42260;
count__42084_42222 = G__42261;
i__42085_42223 = G__42262;
continue;
} else {
var vec__42093_42263 = cljs.core.first.call(null,seq__42082_42257__$1);
var line_42264 = cljs.core.nth.call(null,vec__42093_42263,(0),null);
var cols_42265 = cljs.core.nth.call(null,vec__42093_42263,(1),null);
var seq__42094_42266 = cljs.core.seq.call(null,cols_42265);
var chunk__42095_42267 = null;
var count__42096_42268 = (0);
var i__42097_42269 = (0);
while(true){
if((i__42097_42269 < count__42096_42268)){
var vec__42098_42270 = cljs.core._nth.call(null,chunk__42095_42267,i__42097_42269);
var col_42271 = cljs.core.nth.call(null,vec__42098_42270,(0),null);
var infos_42272 = cljs.core.nth.call(null,vec__42098_42270,(1),null);
encode_cols.call(null,infos_42272,source_idx_42216,line_42264,col_42271);

var G__42273 = seq__42094_42266;
var G__42274 = chunk__42095_42267;
var G__42275 = count__42096_42268;
var G__42276 = (i__42097_42269 + (1));
seq__42094_42266 = G__42273;
chunk__42095_42267 = G__42274;
count__42096_42268 = G__42275;
i__42097_42269 = G__42276;
continue;
} else {
var temp__4657__auto___42277__$2 = cljs.core.seq.call(null,seq__42094_42266);
if(temp__4657__auto___42277__$2){
var seq__42094_42278__$1 = temp__4657__auto___42277__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42094_42278__$1)){
var c__41503__auto___42279 = cljs.core.chunk_first.call(null,seq__42094_42278__$1);
var G__42280 = cljs.core.chunk_rest.call(null,seq__42094_42278__$1);
var G__42281 = c__41503__auto___42279;
var G__42282 = cljs.core.count.call(null,c__41503__auto___42279);
var G__42283 = (0);
seq__42094_42266 = G__42280;
chunk__42095_42267 = G__42281;
count__42096_42268 = G__42282;
i__42097_42269 = G__42283;
continue;
} else {
var vec__42099_42284 = cljs.core.first.call(null,seq__42094_42278__$1);
var col_42285 = cljs.core.nth.call(null,vec__42099_42284,(0),null);
var infos_42286 = cljs.core.nth.call(null,vec__42099_42284,(1),null);
encode_cols.call(null,infos_42286,source_idx_42216,line_42264,col_42285);

var G__42287 = cljs.core.next.call(null,seq__42094_42278__$1);
var G__42288 = null;
var G__42289 = (0);
var G__42290 = (0);
seq__42094_42266 = G__42287;
chunk__42095_42267 = G__42288;
count__42096_42268 = G__42289;
i__42097_42269 = G__42290;
continue;
}
} else {
}
}
break;
}

var G__42291 = cljs.core.next.call(null,seq__42082_42257__$1);
var G__42292 = null;
var G__42293 = (0);
var G__42294 = (0);
seq__42082_42220 = G__42291;
chunk__42083_42221 = G__42292;
count__42084_42222 = G__42293;
i__42085_42223 = G__42294;
continue;
}
} else {
}
}
break;
}

var G__42295 = cljs.core.next.call(null,seq__42056_42209__$1);
var G__42296 = null;
var G__42297 = (0);
var G__42298 = (0);
seq__42056_42120 = G__42295;
chunk__42057_42121 = G__42296;
count__42058_42122 = G__42297;
i__42059_42123 = G__42298;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__42100 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__41999_SHARP_){
return [cljs.core.str(p1__41999_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42000_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__42000_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__42001_SHARP_){
return clojure.string.join.call(null,",",p1__42001_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__42101 = G__42100;
goog.object.set(G__42101,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__42101;
} else {
return G__42100;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__42304 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__42304,(0),null);
var col_map = cljs.core.nth.call(null,vec__42304,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__42305 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__42305,(0),null);
var infos = cljs.core.nth.call(null,vec__42305,(1),null);
var G__42309 = cljs.core.next.call(null,col_map_seq);
var G__42310 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__42305,col,infos,vec__42304,line,col_map){
return (function (v,p__42306){
var map__42307 = p__42306;
var map__42307__$1 = ((((!((map__42307 == null)))?((((map__42307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42307):map__42307);
var gline = cljs.core.get.call(null,map__42307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__42307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__42305,col,infos,vec__42304,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__42309;
new_cols = G__42310;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__42311 = cljs.core.next.call(null,line_map_seq);
var G__42312 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__42311;
new_lines = G__42312;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__42363_42413 = cljs.core.seq.call(null,reverse_map);
var chunk__42364_42414 = null;
var count__42365_42415 = (0);
var i__42366_42416 = (0);
while(true){
if((i__42366_42416 < count__42365_42415)){
var vec__42367_42417 = cljs.core._nth.call(null,chunk__42364_42414,i__42366_42416);
var line_42418 = cljs.core.nth.call(null,vec__42367_42417,(0),null);
var columns_42419 = cljs.core.nth.call(null,vec__42367_42417,(1),null);
var seq__42368_42420 = cljs.core.seq.call(null,columns_42419);
var chunk__42369_42421 = null;
var count__42370_42422 = (0);
var i__42371_42423 = (0);
while(true){
if((i__42371_42423 < count__42370_42422)){
var vec__42372_42424 = cljs.core._nth.call(null,chunk__42369_42421,i__42371_42423);
var column_42425 = cljs.core.nth.call(null,vec__42372_42424,(0),null);
var column_info_42426 = cljs.core.nth.call(null,vec__42372_42424,(1),null);
var seq__42373_42427 = cljs.core.seq.call(null,column_info_42426);
var chunk__42374_42428 = null;
var count__42375_42429 = (0);
var i__42376_42430 = (0);
while(true){
if((i__42376_42430 < count__42375_42429)){
var map__42377_42431 = cljs.core._nth.call(null,chunk__42374_42428,i__42376_42430);
var map__42377_42432__$1 = ((((!((map__42377_42431 == null)))?((((map__42377_42431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42377_42431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42377_42431):map__42377_42431);
var gline_42433 = cljs.core.get.call(null,map__42377_42432__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42434 = cljs.core.get.call(null,map__42377_42432__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42435 = cljs.core.get.call(null,map__42377_42432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42433], null),cljs.core.fnil.call(null,((function (seq__42373_42427,chunk__42374_42428,count__42375_42429,i__42376_42430,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42377_42431,map__42377_42432__$1,gline_42433,gcol_42434,name_42435,vec__42372_42424,column_42425,column_info_42426,vec__42367_42417,line_42418,columns_42419,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42434], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42418,new cljs.core.Keyword(null,"col","col",-1959363084),column_42425,new cljs.core.Keyword(null,"name","name",1843675177),name_42435], null));
});})(seq__42373_42427,chunk__42374_42428,count__42375_42429,i__42376_42430,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42377_42431,map__42377_42432__$1,gline_42433,gcol_42434,name_42435,vec__42372_42424,column_42425,column_info_42426,vec__42367_42417,line_42418,columns_42419,inverted))
,cljs.core.sorted_map.call(null)));

var G__42436 = seq__42373_42427;
var G__42437 = chunk__42374_42428;
var G__42438 = count__42375_42429;
var G__42439 = (i__42376_42430 + (1));
seq__42373_42427 = G__42436;
chunk__42374_42428 = G__42437;
count__42375_42429 = G__42438;
i__42376_42430 = G__42439;
continue;
} else {
var temp__4657__auto___42440 = cljs.core.seq.call(null,seq__42373_42427);
if(temp__4657__auto___42440){
var seq__42373_42441__$1 = temp__4657__auto___42440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42373_42441__$1)){
var c__41503__auto___42442 = cljs.core.chunk_first.call(null,seq__42373_42441__$1);
var G__42443 = cljs.core.chunk_rest.call(null,seq__42373_42441__$1);
var G__42444 = c__41503__auto___42442;
var G__42445 = cljs.core.count.call(null,c__41503__auto___42442);
var G__42446 = (0);
seq__42373_42427 = G__42443;
chunk__42374_42428 = G__42444;
count__42375_42429 = G__42445;
i__42376_42430 = G__42446;
continue;
} else {
var map__42379_42447 = cljs.core.first.call(null,seq__42373_42441__$1);
var map__42379_42448__$1 = ((((!((map__42379_42447 == null)))?((((map__42379_42447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42379_42447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42379_42447):map__42379_42447);
var gline_42449 = cljs.core.get.call(null,map__42379_42448__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42450 = cljs.core.get.call(null,map__42379_42448__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42451 = cljs.core.get.call(null,map__42379_42448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42449], null),cljs.core.fnil.call(null,((function (seq__42373_42427,chunk__42374_42428,count__42375_42429,i__42376_42430,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42379_42447,map__42379_42448__$1,gline_42449,gcol_42450,name_42451,seq__42373_42441__$1,temp__4657__auto___42440,vec__42372_42424,column_42425,column_info_42426,vec__42367_42417,line_42418,columns_42419,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42450], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42418,new cljs.core.Keyword(null,"col","col",-1959363084),column_42425,new cljs.core.Keyword(null,"name","name",1843675177),name_42451], null));
});})(seq__42373_42427,chunk__42374_42428,count__42375_42429,i__42376_42430,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42379_42447,map__42379_42448__$1,gline_42449,gcol_42450,name_42451,seq__42373_42441__$1,temp__4657__auto___42440,vec__42372_42424,column_42425,column_info_42426,vec__42367_42417,line_42418,columns_42419,inverted))
,cljs.core.sorted_map.call(null)));

var G__42452 = cljs.core.next.call(null,seq__42373_42441__$1);
var G__42453 = null;
var G__42454 = (0);
var G__42455 = (0);
seq__42373_42427 = G__42452;
chunk__42374_42428 = G__42453;
count__42375_42429 = G__42454;
i__42376_42430 = G__42455;
continue;
}
} else {
}
}
break;
}

var G__42456 = seq__42368_42420;
var G__42457 = chunk__42369_42421;
var G__42458 = count__42370_42422;
var G__42459 = (i__42371_42423 + (1));
seq__42368_42420 = G__42456;
chunk__42369_42421 = G__42457;
count__42370_42422 = G__42458;
i__42371_42423 = G__42459;
continue;
} else {
var temp__4657__auto___42460 = cljs.core.seq.call(null,seq__42368_42420);
if(temp__4657__auto___42460){
var seq__42368_42461__$1 = temp__4657__auto___42460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42368_42461__$1)){
var c__41503__auto___42462 = cljs.core.chunk_first.call(null,seq__42368_42461__$1);
var G__42463 = cljs.core.chunk_rest.call(null,seq__42368_42461__$1);
var G__42464 = c__41503__auto___42462;
var G__42465 = cljs.core.count.call(null,c__41503__auto___42462);
var G__42466 = (0);
seq__42368_42420 = G__42463;
chunk__42369_42421 = G__42464;
count__42370_42422 = G__42465;
i__42371_42423 = G__42466;
continue;
} else {
var vec__42381_42467 = cljs.core.first.call(null,seq__42368_42461__$1);
var column_42468 = cljs.core.nth.call(null,vec__42381_42467,(0),null);
var column_info_42469 = cljs.core.nth.call(null,vec__42381_42467,(1),null);
var seq__42382_42470 = cljs.core.seq.call(null,column_info_42469);
var chunk__42383_42471 = null;
var count__42384_42472 = (0);
var i__42385_42473 = (0);
while(true){
if((i__42385_42473 < count__42384_42472)){
var map__42386_42474 = cljs.core._nth.call(null,chunk__42383_42471,i__42385_42473);
var map__42386_42475__$1 = ((((!((map__42386_42474 == null)))?((((map__42386_42474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42386_42474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42386_42474):map__42386_42474);
var gline_42476 = cljs.core.get.call(null,map__42386_42475__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42477 = cljs.core.get.call(null,map__42386_42475__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42478 = cljs.core.get.call(null,map__42386_42475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42476], null),cljs.core.fnil.call(null,((function (seq__42382_42470,chunk__42383_42471,count__42384_42472,i__42385_42473,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42386_42474,map__42386_42475__$1,gline_42476,gcol_42477,name_42478,vec__42381_42467,column_42468,column_info_42469,seq__42368_42461__$1,temp__4657__auto___42460,vec__42367_42417,line_42418,columns_42419,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42477], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42418,new cljs.core.Keyword(null,"col","col",-1959363084),column_42468,new cljs.core.Keyword(null,"name","name",1843675177),name_42478], null));
});})(seq__42382_42470,chunk__42383_42471,count__42384_42472,i__42385_42473,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42386_42474,map__42386_42475__$1,gline_42476,gcol_42477,name_42478,vec__42381_42467,column_42468,column_info_42469,seq__42368_42461__$1,temp__4657__auto___42460,vec__42367_42417,line_42418,columns_42419,inverted))
,cljs.core.sorted_map.call(null)));

var G__42479 = seq__42382_42470;
var G__42480 = chunk__42383_42471;
var G__42481 = count__42384_42472;
var G__42482 = (i__42385_42473 + (1));
seq__42382_42470 = G__42479;
chunk__42383_42471 = G__42480;
count__42384_42472 = G__42481;
i__42385_42473 = G__42482;
continue;
} else {
var temp__4657__auto___42483__$1 = cljs.core.seq.call(null,seq__42382_42470);
if(temp__4657__auto___42483__$1){
var seq__42382_42484__$1 = temp__4657__auto___42483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42382_42484__$1)){
var c__41503__auto___42485 = cljs.core.chunk_first.call(null,seq__42382_42484__$1);
var G__42486 = cljs.core.chunk_rest.call(null,seq__42382_42484__$1);
var G__42487 = c__41503__auto___42485;
var G__42488 = cljs.core.count.call(null,c__41503__auto___42485);
var G__42489 = (0);
seq__42382_42470 = G__42486;
chunk__42383_42471 = G__42487;
count__42384_42472 = G__42488;
i__42385_42473 = G__42489;
continue;
} else {
var map__42388_42490 = cljs.core.first.call(null,seq__42382_42484__$1);
var map__42388_42491__$1 = ((((!((map__42388_42490 == null)))?((((map__42388_42490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42388_42490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42388_42490):map__42388_42490);
var gline_42492 = cljs.core.get.call(null,map__42388_42491__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42493 = cljs.core.get.call(null,map__42388_42491__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42494 = cljs.core.get.call(null,map__42388_42491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42492], null),cljs.core.fnil.call(null,((function (seq__42382_42470,chunk__42383_42471,count__42384_42472,i__42385_42473,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42388_42490,map__42388_42491__$1,gline_42492,gcol_42493,name_42494,seq__42382_42484__$1,temp__4657__auto___42483__$1,vec__42381_42467,column_42468,column_info_42469,seq__42368_42461__$1,temp__4657__auto___42460,vec__42367_42417,line_42418,columns_42419,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42493], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42418,new cljs.core.Keyword(null,"col","col",-1959363084),column_42468,new cljs.core.Keyword(null,"name","name",1843675177),name_42494], null));
});})(seq__42382_42470,chunk__42383_42471,count__42384_42472,i__42385_42473,seq__42368_42420,chunk__42369_42421,count__42370_42422,i__42371_42423,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42388_42490,map__42388_42491__$1,gline_42492,gcol_42493,name_42494,seq__42382_42484__$1,temp__4657__auto___42483__$1,vec__42381_42467,column_42468,column_info_42469,seq__42368_42461__$1,temp__4657__auto___42460,vec__42367_42417,line_42418,columns_42419,inverted))
,cljs.core.sorted_map.call(null)));

var G__42495 = cljs.core.next.call(null,seq__42382_42484__$1);
var G__42496 = null;
var G__42497 = (0);
var G__42498 = (0);
seq__42382_42470 = G__42495;
chunk__42383_42471 = G__42496;
count__42384_42472 = G__42497;
i__42385_42473 = G__42498;
continue;
}
} else {
}
}
break;
}

var G__42499 = cljs.core.next.call(null,seq__42368_42461__$1);
var G__42500 = null;
var G__42501 = (0);
var G__42502 = (0);
seq__42368_42420 = G__42499;
chunk__42369_42421 = G__42500;
count__42370_42422 = G__42501;
i__42371_42423 = G__42502;
continue;
}
} else {
}
}
break;
}

var G__42503 = seq__42363_42413;
var G__42504 = chunk__42364_42414;
var G__42505 = count__42365_42415;
var G__42506 = (i__42366_42416 + (1));
seq__42363_42413 = G__42503;
chunk__42364_42414 = G__42504;
count__42365_42415 = G__42505;
i__42366_42416 = G__42506;
continue;
} else {
var temp__4657__auto___42507 = cljs.core.seq.call(null,seq__42363_42413);
if(temp__4657__auto___42507){
var seq__42363_42508__$1 = temp__4657__auto___42507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42363_42508__$1)){
var c__41503__auto___42509 = cljs.core.chunk_first.call(null,seq__42363_42508__$1);
var G__42510 = cljs.core.chunk_rest.call(null,seq__42363_42508__$1);
var G__42511 = c__41503__auto___42509;
var G__42512 = cljs.core.count.call(null,c__41503__auto___42509);
var G__42513 = (0);
seq__42363_42413 = G__42510;
chunk__42364_42414 = G__42511;
count__42365_42415 = G__42512;
i__42366_42416 = G__42513;
continue;
} else {
var vec__42390_42514 = cljs.core.first.call(null,seq__42363_42508__$1);
var line_42515 = cljs.core.nth.call(null,vec__42390_42514,(0),null);
var columns_42516 = cljs.core.nth.call(null,vec__42390_42514,(1),null);
var seq__42391_42517 = cljs.core.seq.call(null,columns_42516);
var chunk__42392_42518 = null;
var count__42393_42519 = (0);
var i__42394_42520 = (0);
while(true){
if((i__42394_42520 < count__42393_42519)){
var vec__42395_42521 = cljs.core._nth.call(null,chunk__42392_42518,i__42394_42520);
var column_42522 = cljs.core.nth.call(null,vec__42395_42521,(0),null);
var column_info_42523 = cljs.core.nth.call(null,vec__42395_42521,(1),null);
var seq__42396_42524 = cljs.core.seq.call(null,column_info_42523);
var chunk__42397_42525 = null;
var count__42398_42526 = (0);
var i__42399_42527 = (0);
while(true){
if((i__42399_42527 < count__42398_42526)){
var map__42400_42528 = cljs.core._nth.call(null,chunk__42397_42525,i__42399_42527);
var map__42400_42529__$1 = ((((!((map__42400_42528 == null)))?((((map__42400_42528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42400_42528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42400_42528):map__42400_42528);
var gline_42530 = cljs.core.get.call(null,map__42400_42529__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42531 = cljs.core.get.call(null,map__42400_42529__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42532 = cljs.core.get.call(null,map__42400_42529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42530], null),cljs.core.fnil.call(null,((function (seq__42396_42524,chunk__42397_42525,count__42398_42526,i__42399_42527,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42400_42528,map__42400_42529__$1,gline_42530,gcol_42531,name_42532,vec__42395_42521,column_42522,column_info_42523,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42531], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42515,new cljs.core.Keyword(null,"col","col",-1959363084),column_42522,new cljs.core.Keyword(null,"name","name",1843675177),name_42532], null));
});})(seq__42396_42524,chunk__42397_42525,count__42398_42526,i__42399_42527,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42400_42528,map__42400_42529__$1,gline_42530,gcol_42531,name_42532,vec__42395_42521,column_42522,column_info_42523,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted))
,cljs.core.sorted_map.call(null)));

var G__42533 = seq__42396_42524;
var G__42534 = chunk__42397_42525;
var G__42535 = count__42398_42526;
var G__42536 = (i__42399_42527 + (1));
seq__42396_42524 = G__42533;
chunk__42397_42525 = G__42534;
count__42398_42526 = G__42535;
i__42399_42527 = G__42536;
continue;
} else {
var temp__4657__auto___42537__$1 = cljs.core.seq.call(null,seq__42396_42524);
if(temp__4657__auto___42537__$1){
var seq__42396_42538__$1 = temp__4657__auto___42537__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42396_42538__$1)){
var c__41503__auto___42539 = cljs.core.chunk_first.call(null,seq__42396_42538__$1);
var G__42540 = cljs.core.chunk_rest.call(null,seq__42396_42538__$1);
var G__42541 = c__41503__auto___42539;
var G__42542 = cljs.core.count.call(null,c__41503__auto___42539);
var G__42543 = (0);
seq__42396_42524 = G__42540;
chunk__42397_42525 = G__42541;
count__42398_42526 = G__42542;
i__42399_42527 = G__42543;
continue;
} else {
var map__42402_42544 = cljs.core.first.call(null,seq__42396_42538__$1);
var map__42402_42545__$1 = ((((!((map__42402_42544 == null)))?((((map__42402_42544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42402_42544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42402_42544):map__42402_42544);
var gline_42546 = cljs.core.get.call(null,map__42402_42545__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42547 = cljs.core.get.call(null,map__42402_42545__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42548 = cljs.core.get.call(null,map__42402_42545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42546], null),cljs.core.fnil.call(null,((function (seq__42396_42524,chunk__42397_42525,count__42398_42526,i__42399_42527,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42402_42544,map__42402_42545__$1,gline_42546,gcol_42547,name_42548,seq__42396_42538__$1,temp__4657__auto___42537__$1,vec__42395_42521,column_42522,column_info_42523,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42547], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42515,new cljs.core.Keyword(null,"col","col",-1959363084),column_42522,new cljs.core.Keyword(null,"name","name",1843675177),name_42548], null));
});})(seq__42396_42524,chunk__42397_42525,count__42398_42526,i__42399_42527,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42402_42544,map__42402_42545__$1,gline_42546,gcol_42547,name_42548,seq__42396_42538__$1,temp__4657__auto___42537__$1,vec__42395_42521,column_42522,column_info_42523,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted))
,cljs.core.sorted_map.call(null)));

var G__42549 = cljs.core.next.call(null,seq__42396_42538__$1);
var G__42550 = null;
var G__42551 = (0);
var G__42552 = (0);
seq__42396_42524 = G__42549;
chunk__42397_42525 = G__42550;
count__42398_42526 = G__42551;
i__42399_42527 = G__42552;
continue;
}
} else {
}
}
break;
}

var G__42553 = seq__42391_42517;
var G__42554 = chunk__42392_42518;
var G__42555 = count__42393_42519;
var G__42556 = (i__42394_42520 + (1));
seq__42391_42517 = G__42553;
chunk__42392_42518 = G__42554;
count__42393_42519 = G__42555;
i__42394_42520 = G__42556;
continue;
} else {
var temp__4657__auto___42557__$1 = cljs.core.seq.call(null,seq__42391_42517);
if(temp__4657__auto___42557__$1){
var seq__42391_42558__$1 = temp__4657__auto___42557__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42391_42558__$1)){
var c__41503__auto___42559 = cljs.core.chunk_first.call(null,seq__42391_42558__$1);
var G__42560 = cljs.core.chunk_rest.call(null,seq__42391_42558__$1);
var G__42561 = c__41503__auto___42559;
var G__42562 = cljs.core.count.call(null,c__41503__auto___42559);
var G__42563 = (0);
seq__42391_42517 = G__42560;
chunk__42392_42518 = G__42561;
count__42393_42519 = G__42562;
i__42394_42520 = G__42563;
continue;
} else {
var vec__42404_42564 = cljs.core.first.call(null,seq__42391_42558__$1);
var column_42565 = cljs.core.nth.call(null,vec__42404_42564,(0),null);
var column_info_42566 = cljs.core.nth.call(null,vec__42404_42564,(1),null);
var seq__42405_42567 = cljs.core.seq.call(null,column_info_42566);
var chunk__42406_42568 = null;
var count__42407_42569 = (0);
var i__42408_42570 = (0);
while(true){
if((i__42408_42570 < count__42407_42569)){
var map__42409_42571 = cljs.core._nth.call(null,chunk__42406_42568,i__42408_42570);
var map__42409_42572__$1 = ((((!((map__42409_42571 == null)))?((((map__42409_42571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42409_42571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42409_42571):map__42409_42571);
var gline_42573 = cljs.core.get.call(null,map__42409_42572__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42574 = cljs.core.get.call(null,map__42409_42572__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42575 = cljs.core.get.call(null,map__42409_42572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42573], null),cljs.core.fnil.call(null,((function (seq__42405_42567,chunk__42406_42568,count__42407_42569,i__42408_42570,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42409_42571,map__42409_42572__$1,gline_42573,gcol_42574,name_42575,vec__42404_42564,column_42565,column_info_42566,seq__42391_42558__$1,temp__4657__auto___42557__$1,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42574], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42515,new cljs.core.Keyword(null,"col","col",-1959363084),column_42565,new cljs.core.Keyword(null,"name","name",1843675177),name_42575], null));
});})(seq__42405_42567,chunk__42406_42568,count__42407_42569,i__42408_42570,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42409_42571,map__42409_42572__$1,gline_42573,gcol_42574,name_42575,vec__42404_42564,column_42565,column_info_42566,seq__42391_42558__$1,temp__4657__auto___42557__$1,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted))
,cljs.core.sorted_map.call(null)));

var G__42576 = seq__42405_42567;
var G__42577 = chunk__42406_42568;
var G__42578 = count__42407_42569;
var G__42579 = (i__42408_42570 + (1));
seq__42405_42567 = G__42576;
chunk__42406_42568 = G__42577;
count__42407_42569 = G__42578;
i__42408_42570 = G__42579;
continue;
} else {
var temp__4657__auto___42580__$2 = cljs.core.seq.call(null,seq__42405_42567);
if(temp__4657__auto___42580__$2){
var seq__42405_42581__$1 = temp__4657__auto___42580__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42405_42581__$1)){
var c__41503__auto___42582 = cljs.core.chunk_first.call(null,seq__42405_42581__$1);
var G__42583 = cljs.core.chunk_rest.call(null,seq__42405_42581__$1);
var G__42584 = c__41503__auto___42582;
var G__42585 = cljs.core.count.call(null,c__41503__auto___42582);
var G__42586 = (0);
seq__42405_42567 = G__42583;
chunk__42406_42568 = G__42584;
count__42407_42569 = G__42585;
i__42408_42570 = G__42586;
continue;
} else {
var map__42411_42587 = cljs.core.first.call(null,seq__42405_42581__$1);
var map__42411_42588__$1 = ((((!((map__42411_42587 == null)))?((((map__42411_42587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42411_42587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42411_42587):map__42411_42587);
var gline_42589 = cljs.core.get.call(null,map__42411_42588__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42590 = cljs.core.get.call(null,map__42411_42588__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42591 = cljs.core.get.call(null,map__42411_42588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42589], null),cljs.core.fnil.call(null,((function (seq__42405_42567,chunk__42406_42568,count__42407_42569,i__42408_42570,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42411_42587,map__42411_42588__$1,gline_42589,gcol_42590,name_42591,seq__42405_42581__$1,temp__4657__auto___42580__$2,vec__42404_42564,column_42565,column_info_42566,seq__42391_42558__$1,temp__4657__auto___42557__$1,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42590], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42515,new cljs.core.Keyword(null,"col","col",-1959363084),column_42565,new cljs.core.Keyword(null,"name","name",1843675177),name_42591], null));
});})(seq__42405_42567,chunk__42406_42568,count__42407_42569,i__42408_42570,seq__42391_42517,chunk__42392_42518,count__42393_42519,i__42394_42520,seq__42363_42413,chunk__42364_42414,count__42365_42415,i__42366_42416,map__42411_42587,map__42411_42588__$1,gline_42589,gcol_42590,name_42591,seq__42405_42581__$1,temp__4657__auto___42580__$2,vec__42404_42564,column_42565,column_info_42566,seq__42391_42558__$1,temp__4657__auto___42557__$1,vec__42390_42514,line_42515,columns_42516,seq__42363_42508__$1,temp__4657__auto___42507,inverted))
,cljs.core.sorted_map.call(null)));

var G__42592 = cljs.core.next.call(null,seq__42405_42581__$1);
var G__42593 = null;
var G__42594 = (0);
var G__42595 = (0);
seq__42405_42567 = G__42592;
chunk__42406_42568 = G__42593;
count__42407_42569 = G__42594;
i__42408_42570 = G__42595;
continue;
}
} else {
}
}
break;
}

var G__42596 = cljs.core.next.call(null,seq__42391_42558__$1);
var G__42597 = null;
var G__42598 = (0);
var G__42599 = (0);
seq__42391_42517 = G__42596;
chunk__42392_42518 = G__42597;
count__42393_42519 = G__42598;
i__42394_42520 = G__42599;
continue;
}
} else {
}
}
break;
}

var G__42600 = cljs.core.next.call(null,seq__42363_42508__$1);
var G__42601 = null;
var G__42602 = (0);
var G__42603 = (0);
seq__42363_42413 = G__42600;
chunk__42364_42414 = G__42601;
count__42365_42415 = G__42602;
i__42366_42416 = G__42603;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1482388838870