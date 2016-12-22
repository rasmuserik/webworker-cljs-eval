// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__40692__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__40692__auto__){
return or__40692__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__40692__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52117_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52117_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__52122 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52123 = null;
var count__52124 = (0);
var i__52125 = (0);
while(true){
if((i__52125 < count__52124)){
var n = cljs.core._nth.call(null,chunk__52123,i__52125);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52126 = seq__52122;
var G__52127 = chunk__52123;
var G__52128 = count__52124;
var G__52129 = (i__52125 + (1));
seq__52122 = G__52126;
chunk__52123 = G__52127;
count__52124 = G__52128;
i__52125 = G__52129;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52122);
if(temp__4657__auto__){
var seq__52122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52122__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__52122__$1);
var G__52130 = cljs.core.chunk_rest.call(null,seq__52122__$1);
var G__52131 = c__41503__auto__;
var G__52132 = cljs.core.count.call(null,c__41503__auto__);
var G__52133 = (0);
seq__52122 = G__52130;
chunk__52123 = G__52131;
count__52124 = G__52132;
i__52125 = G__52133;
continue;
} else {
var n = cljs.core.first.call(null,seq__52122__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52134 = cljs.core.next.call(null,seq__52122__$1);
var G__52135 = null;
var G__52136 = (0);
var G__52137 = (0);
seq__52122 = G__52134;
chunk__52123 = G__52135;
count__52124 = G__52136;
i__52125 = G__52137;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__52176_52183 = cljs.core.seq.call(null,deps);
var chunk__52177_52184 = null;
var count__52178_52185 = (0);
var i__52179_52186 = (0);
while(true){
if((i__52179_52186 < count__52178_52185)){
var dep_52187 = cljs.core._nth.call(null,chunk__52177_52184,i__52179_52186);
topo_sort_helper_STAR_.call(null,dep_52187,(depth + (1)),state);

var G__52188 = seq__52176_52183;
var G__52189 = chunk__52177_52184;
var G__52190 = count__52178_52185;
var G__52191 = (i__52179_52186 + (1));
seq__52176_52183 = G__52188;
chunk__52177_52184 = G__52189;
count__52178_52185 = G__52190;
i__52179_52186 = G__52191;
continue;
} else {
var temp__4657__auto___52192 = cljs.core.seq.call(null,seq__52176_52183);
if(temp__4657__auto___52192){
var seq__52176_52193__$1 = temp__4657__auto___52192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52176_52193__$1)){
var c__41503__auto___52194 = cljs.core.chunk_first.call(null,seq__52176_52193__$1);
var G__52195 = cljs.core.chunk_rest.call(null,seq__52176_52193__$1);
var G__52196 = c__41503__auto___52194;
var G__52197 = cljs.core.count.call(null,c__41503__auto___52194);
var G__52198 = (0);
seq__52176_52183 = G__52195;
chunk__52177_52184 = G__52196;
count__52178_52185 = G__52197;
i__52179_52186 = G__52198;
continue;
} else {
var dep_52199 = cljs.core.first.call(null,seq__52176_52193__$1);
topo_sort_helper_STAR_.call(null,dep_52199,(depth + (1)),state);

var G__52200 = cljs.core.next.call(null,seq__52176_52193__$1);
var G__52201 = null;
var G__52202 = (0);
var G__52203 = (0);
seq__52176_52183 = G__52200;
chunk__52177_52184 = G__52201;
count__52178_52185 = G__52202;
i__52179_52186 = G__52203;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52180){
var vec__52182 = p__52180;
var x = cljs.core.nth.call(null,vec__52182,(0),null);
var xs = cljs.core.nthnext.call(null,vec__52182,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52182,x,xs,get_deps__$1){
return (function (p1__52138_SHARP_){
return clojure.set.difference.call(null,p1__52138_SHARP_,x);
});})(vec__52182,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__52216 = cljs.core.seq.call(null,provides);
var chunk__52217 = null;
var count__52218 = (0);
var i__52219 = (0);
while(true){
if((i__52219 < count__52218)){
var prov = cljs.core._nth.call(null,chunk__52217,i__52219);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52220_52228 = cljs.core.seq.call(null,requires);
var chunk__52221_52229 = null;
var count__52222_52230 = (0);
var i__52223_52231 = (0);
while(true){
if((i__52223_52231 < count__52222_52230)){
var req_52232 = cljs.core._nth.call(null,chunk__52221_52229,i__52223_52231);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52232,prov);

var G__52233 = seq__52220_52228;
var G__52234 = chunk__52221_52229;
var G__52235 = count__52222_52230;
var G__52236 = (i__52223_52231 + (1));
seq__52220_52228 = G__52233;
chunk__52221_52229 = G__52234;
count__52222_52230 = G__52235;
i__52223_52231 = G__52236;
continue;
} else {
var temp__4657__auto___52237 = cljs.core.seq.call(null,seq__52220_52228);
if(temp__4657__auto___52237){
var seq__52220_52238__$1 = temp__4657__auto___52237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52220_52238__$1)){
var c__41503__auto___52239 = cljs.core.chunk_first.call(null,seq__52220_52238__$1);
var G__52240 = cljs.core.chunk_rest.call(null,seq__52220_52238__$1);
var G__52241 = c__41503__auto___52239;
var G__52242 = cljs.core.count.call(null,c__41503__auto___52239);
var G__52243 = (0);
seq__52220_52228 = G__52240;
chunk__52221_52229 = G__52241;
count__52222_52230 = G__52242;
i__52223_52231 = G__52243;
continue;
} else {
var req_52244 = cljs.core.first.call(null,seq__52220_52238__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52244,prov);

var G__52245 = cljs.core.next.call(null,seq__52220_52238__$1);
var G__52246 = null;
var G__52247 = (0);
var G__52248 = (0);
seq__52220_52228 = G__52245;
chunk__52221_52229 = G__52246;
count__52222_52230 = G__52247;
i__52223_52231 = G__52248;
continue;
}
} else {
}
}
break;
}

var G__52249 = seq__52216;
var G__52250 = chunk__52217;
var G__52251 = count__52218;
var G__52252 = (i__52219 + (1));
seq__52216 = G__52249;
chunk__52217 = G__52250;
count__52218 = G__52251;
i__52219 = G__52252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52216);
if(temp__4657__auto__){
var seq__52216__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52216__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__52216__$1);
var G__52253 = cljs.core.chunk_rest.call(null,seq__52216__$1);
var G__52254 = c__41503__auto__;
var G__52255 = cljs.core.count.call(null,c__41503__auto__);
var G__52256 = (0);
seq__52216 = G__52253;
chunk__52217 = G__52254;
count__52218 = G__52255;
i__52219 = G__52256;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52216__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52224_52257 = cljs.core.seq.call(null,requires);
var chunk__52225_52258 = null;
var count__52226_52259 = (0);
var i__52227_52260 = (0);
while(true){
if((i__52227_52260 < count__52226_52259)){
var req_52261 = cljs.core._nth.call(null,chunk__52225_52258,i__52227_52260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52261,prov);

var G__52262 = seq__52224_52257;
var G__52263 = chunk__52225_52258;
var G__52264 = count__52226_52259;
var G__52265 = (i__52227_52260 + (1));
seq__52224_52257 = G__52262;
chunk__52225_52258 = G__52263;
count__52226_52259 = G__52264;
i__52227_52260 = G__52265;
continue;
} else {
var temp__4657__auto___52266__$1 = cljs.core.seq.call(null,seq__52224_52257);
if(temp__4657__auto___52266__$1){
var seq__52224_52267__$1 = temp__4657__auto___52266__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52224_52267__$1)){
var c__41503__auto___52268 = cljs.core.chunk_first.call(null,seq__52224_52267__$1);
var G__52269 = cljs.core.chunk_rest.call(null,seq__52224_52267__$1);
var G__52270 = c__41503__auto___52268;
var G__52271 = cljs.core.count.call(null,c__41503__auto___52268);
var G__52272 = (0);
seq__52224_52257 = G__52269;
chunk__52225_52258 = G__52270;
count__52226_52259 = G__52271;
i__52227_52260 = G__52272;
continue;
} else {
var req_52273 = cljs.core.first.call(null,seq__52224_52267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52273,prov);

var G__52274 = cljs.core.next.call(null,seq__52224_52267__$1);
var G__52275 = null;
var G__52276 = (0);
var G__52277 = (0);
seq__52224_52257 = G__52274;
chunk__52225_52258 = G__52275;
count__52226_52259 = G__52276;
i__52227_52260 = G__52277;
continue;
}
} else {
}
}
break;
}

var G__52278 = cljs.core.next.call(null,seq__52216__$1);
var G__52279 = null;
var G__52280 = (0);
var G__52281 = (0);
seq__52216 = G__52278;
chunk__52217 = G__52279;
count__52218 = G__52280;
i__52219 = G__52281;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__52286_52290 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52287_52291 = null;
var count__52288_52292 = (0);
var i__52289_52293 = (0);
while(true){
if((i__52289_52293 < count__52288_52292)){
var ns_52294 = cljs.core._nth.call(null,chunk__52287_52291,i__52289_52293);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52294);

var G__52295 = seq__52286_52290;
var G__52296 = chunk__52287_52291;
var G__52297 = count__52288_52292;
var G__52298 = (i__52289_52293 + (1));
seq__52286_52290 = G__52295;
chunk__52287_52291 = G__52296;
count__52288_52292 = G__52297;
i__52289_52293 = G__52298;
continue;
} else {
var temp__4657__auto___52299 = cljs.core.seq.call(null,seq__52286_52290);
if(temp__4657__auto___52299){
var seq__52286_52300__$1 = temp__4657__auto___52299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52286_52300__$1)){
var c__41503__auto___52301 = cljs.core.chunk_first.call(null,seq__52286_52300__$1);
var G__52302 = cljs.core.chunk_rest.call(null,seq__52286_52300__$1);
var G__52303 = c__41503__auto___52301;
var G__52304 = cljs.core.count.call(null,c__41503__auto___52301);
var G__52305 = (0);
seq__52286_52290 = G__52302;
chunk__52287_52291 = G__52303;
count__52288_52292 = G__52304;
i__52289_52293 = G__52305;
continue;
} else {
var ns_52306 = cljs.core.first.call(null,seq__52286_52300__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52306);

var G__52307 = cljs.core.next.call(null,seq__52286_52300__$1);
var G__52308 = null;
var G__52309 = (0);
var G__52310 = (0);
seq__52286_52290 = G__52307;
chunk__52287_52291 = G__52308;
count__52288_52292 = G__52309;
i__52289_52293 = G__52310;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__40692__auto__ = goog.require__;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__52311__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52312__i = 0, G__52312__a = new Array(arguments.length -  0);
while (G__52312__i < G__52312__a.length) {G__52312__a[G__52312__i] = arguments[G__52312__i + 0]; ++G__52312__i;}
  args = new cljs.core.IndexedSeq(G__52312__a,0);
} 
return G__52311__delegate.call(this,args);};
G__52311.cljs$lang$maxFixedArity = 0;
G__52311.cljs$lang$applyTo = (function (arglist__52313){
var args = cljs.core.seq(arglist__52313);
return G__52311__delegate(args);
});
G__52311.cljs$core$IFn$_invoke$arity$variadic = G__52311__delegate;
return G__52311;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52315 = cljs.core._EQ_;
var expr__52316 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52315.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52316))){
var path_parts = ((function (pred__52315,expr__52316){
return (function (p1__52314_SHARP_){
return clojure.string.split.call(null,p1__52314_SHARP_,/[\/\\]/);
});})(pred__52315,expr__52316))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__52315,expr__52316){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e52318){if((e52318 instanceof Error)){
var e = e52318;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52318;

}
}})());
});
;})(path_parts,sep,root,pred__52315,expr__52316))
} else {
if(cljs.core.truth_(pred__52315.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52316))){
return ((function (pred__52315,expr__52316){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__52315,expr__52316){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__52315,expr__52316))
);

return deferred.addErrback(((function (deferred,pred__52315,expr__52316){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__52315,expr__52316))
);
});
;})(pred__52315,expr__52316))
} else {
return ((function (pred__52315,expr__52316){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52315,expr__52316))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52319,callback){
var map__52322 = p__52319;
var map__52322__$1 = ((((!((map__52322 == null)))?((((map__52322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52322):map__52322);
var file_msg = map__52322__$1;
var request_url = cljs.core.get.call(null,map__52322__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__52322,map__52322__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52322,map__52322__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_52346){
var state_val_52347 = (state_52346[(1)]);
if((state_val_52347 === (7))){
var inst_52342 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
var statearr_52348_52368 = state_52346__$1;
(statearr_52348_52368[(2)] = inst_52342);

(statearr_52348_52368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (1))){
var state_52346__$1 = state_52346;
var statearr_52349_52369 = state_52346__$1;
(statearr_52349_52369[(2)] = null);

(statearr_52349_52369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (4))){
var inst_52326 = (state_52346[(7)]);
var inst_52326__$1 = (state_52346[(2)]);
var state_52346__$1 = (function (){var statearr_52350 = state_52346;
(statearr_52350[(7)] = inst_52326__$1);

return statearr_52350;
})();
if(cljs.core.truth_(inst_52326__$1)){
var statearr_52351_52370 = state_52346__$1;
(statearr_52351_52370[(1)] = (5));

} else {
var statearr_52352_52371 = state_52346__$1;
(statearr_52352_52371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (6))){
var state_52346__$1 = state_52346;
var statearr_52353_52372 = state_52346__$1;
(statearr_52353_52372[(2)] = null);

(statearr_52353_52372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (3))){
var inst_52344 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52346__$1,inst_52344);
} else {
if((state_val_52347 === (2))){
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52346__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52347 === (11))){
var inst_52338 = (state_52346[(2)]);
var state_52346__$1 = (function (){var statearr_52354 = state_52346;
(statearr_52354[(8)] = inst_52338);

return statearr_52354;
})();
var statearr_52355_52373 = state_52346__$1;
(statearr_52355_52373[(2)] = null);

(statearr_52355_52373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (9))){
var inst_52330 = (state_52346[(9)]);
var inst_52332 = (state_52346[(10)]);
var inst_52334 = inst_52332.call(null,inst_52330);
var state_52346__$1 = state_52346;
var statearr_52356_52374 = state_52346__$1;
(statearr_52356_52374[(2)] = inst_52334);

(statearr_52356_52374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (5))){
var inst_52326 = (state_52346[(7)]);
var inst_52328 = figwheel.client.file_reloading.blocking_load.call(null,inst_52326);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52346__$1,(8),inst_52328);
} else {
if((state_val_52347 === (10))){
var inst_52330 = (state_52346[(9)]);
var inst_52336 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52330);
var state_52346__$1 = state_52346;
var statearr_52357_52375 = state_52346__$1;
(statearr_52357_52375[(2)] = inst_52336);

(statearr_52357_52375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (8))){
var inst_52332 = (state_52346[(10)]);
var inst_52326 = (state_52346[(7)]);
var inst_52330 = (state_52346[(2)]);
var inst_52331 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52332__$1 = cljs.core.get.call(null,inst_52331,inst_52326);
var state_52346__$1 = (function (){var statearr_52358 = state_52346;
(statearr_52358[(9)] = inst_52330);

(statearr_52358[(10)] = inst_52332__$1);

return statearr_52358;
})();
if(cljs.core.truth_(inst_52332__$1)){
var statearr_52359_52376 = state_52346__$1;
(statearr_52359_52376[(1)] = (9));

} else {
var statearr_52360_52377 = state_52346__$1;
(statearr_52360_52377[(1)] = (10));

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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46331__auto__ = null;
var figwheel$client$file_reloading$state_machine__46331__auto____0 = (function (){
var statearr_52364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52364[(0)] = figwheel$client$file_reloading$state_machine__46331__auto__);

(statearr_52364[(1)] = (1));

return statearr_52364;
});
var figwheel$client$file_reloading$state_machine__46331__auto____1 = (function (state_52346){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_52346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e52365){if((e52365 instanceof Object)){
var ex__46334__auto__ = e52365;
var statearr_52366_52378 = state_52346;
(statearr_52366_52378[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52379 = state_52346;
state_52346 = G__52379;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46331__auto__ = function(state_52346){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46331__auto____1.call(this,state_52346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46331__auto____0;
figwheel$client$file_reloading$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46331__auto____1;
return figwheel$client$file_reloading$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_52367 = f__46443__auto__.call(null);
(statearr_52367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_52367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52380,callback){
var map__52383 = p__52380;
var map__52383__$1 = ((((!((map__52383 == null)))?((((map__52383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52383):map__52383);
var file_msg = map__52383__$1;
var namespace = cljs.core.get.call(null,map__52383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52383,map__52383__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52383,map__52383__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52385){
var map__52388 = p__52385;
var map__52388__$1 = ((((!((map__52388 == null)))?((((map__52388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52388):map__52388);
var file_msg = map__52388__$1;
var namespace = cljs.core.get.call(null,map__52388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__40680__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__40680__auto__){
var or__40692__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
var or__40692__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40692__auto____$1)){
return or__40692__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__40680__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52390,callback){
var map__52393 = p__52390;
var map__52393__$1 = ((((!((map__52393 == null)))?((((map__52393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52393):map__52393);
var file_msg = map__52393__$1;
var request_url = cljs.core.get.call(null,map__52393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__46442__auto___52481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___52481,out){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___52481,out){
return (function (state_52463){
var state_val_52464 = (state_52463[(1)]);
if((state_val_52464 === (1))){
var inst_52441 = cljs.core.nth.call(null,files,(0),null);
var inst_52442 = cljs.core.nthnext.call(null,files,(1));
var inst_52443 = files;
var state_52463__$1 = (function (){var statearr_52465 = state_52463;
(statearr_52465[(7)] = inst_52443);

(statearr_52465[(8)] = inst_52441);

(statearr_52465[(9)] = inst_52442);

return statearr_52465;
})();
var statearr_52466_52482 = state_52463__$1;
(statearr_52466_52482[(2)] = null);

(statearr_52466_52482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52464 === (2))){
var inst_52443 = (state_52463[(7)]);
var inst_52446 = (state_52463[(10)]);
var inst_52446__$1 = cljs.core.nth.call(null,inst_52443,(0),null);
var inst_52447 = cljs.core.nthnext.call(null,inst_52443,(1));
var inst_52448 = (inst_52446__$1 == null);
var inst_52449 = cljs.core.not.call(null,inst_52448);
var state_52463__$1 = (function (){var statearr_52467 = state_52463;
(statearr_52467[(10)] = inst_52446__$1);

(statearr_52467[(11)] = inst_52447);

return statearr_52467;
})();
if(inst_52449){
var statearr_52468_52483 = state_52463__$1;
(statearr_52468_52483[(1)] = (4));

} else {
var statearr_52469_52484 = state_52463__$1;
(statearr_52469_52484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52464 === (3))){
var inst_52461 = (state_52463[(2)]);
var state_52463__$1 = state_52463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52463__$1,inst_52461);
} else {
if((state_val_52464 === (4))){
var inst_52446 = (state_52463[(10)]);
var inst_52451 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52446);
var state_52463__$1 = state_52463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52463__$1,(7),inst_52451);
} else {
if((state_val_52464 === (5))){
var inst_52457 = cljs.core.async.close_BANG_.call(null,out);
var state_52463__$1 = state_52463;
var statearr_52470_52485 = state_52463__$1;
(statearr_52470_52485[(2)] = inst_52457);

(statearr_52470_52485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52464 === (6))){
var inst_52459 = (state_52463[(2)]);
var state_52463__$1 = state_52463;
var statearr_52471_52486 = state_52463__$1;
(statearr_52471_52486[(2)] = inst_52459);

(statearr_52471_52486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52464 === (7))){
var inst_52447 = (state_52463[(11)]);
var inst_52453 = (state_52463[(2)]);
var inst_52454 = cljs.core.async.put_BANG_.call(null,out,inst_52453);
var inst_52443 = inst_52447;
var state_52463__$1 = (function (){var statearr_52472 = state_52463;
(statearr_52472[(7)] = inst_52443);

(statearr_52472[(12)] = inst_52454);

return statearr_52472;
})();
var statearr_52473_52487 = state_52463__$1;
(statearr_52473_52487[(2)] = null);

(statearr_52473_52487[(1)] = (2));


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
});})(c__46442__auto___52481,out))
;
return ((function (switch__46330__auto__,c__46442__auto___52481,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____0 = (function (){
var statearr_52477 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52477[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__);

(statearr_52477[(1)] = (1));

return statearr_52477;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____1 = (function (state_52463){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_52463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e52478){if((e52478 instanceof Object)){
var ex__46334__auto__ = e52478;
var statearr_52479_52488 = state_52463;
(statearr_52479_52488[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52489 = state_52463;
state_52463 = G__52489;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__ = function(state_52463){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____1.call(this,state_52463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___52481,out))
})();
var state__46444__auto__ = (function (){var statearr_52480 = f__46443__auto__.call(null);
(statearr_52480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___52481);

return statearr_52480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___52481,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52490,opts){
var map__52494 = p__52490;
var map__52494__$1 = ((((!((map__52494 == null)))?((((map__52494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52494):map__52494);
var eval_body__$1 = cljs.core.get.call(null,map__52494__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__40680__auto__ = eval_body__$1;
if(cljs.core.truth_(and__40680__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__40680__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52496){var e = e52496;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52497_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52497_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__52502){
var vec__52503 = p__52502;
var k = cljs.core.nth.call(null,vec__52503,(0),null);
var v = cljs.core.nth.call(null,vec__52503,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52504){
var vec__52505 = p__52504;
var k = cljs.core.nth.call(null,vec__52505,(0),null);
var v = cljs.core.nth.call(null,vec__52505,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52509,p__52510){
var map__52757 = p__52509;
var map__52757__$1 = ((((!((map__52757 == null)))?((((map__52757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52757):map__52757);
var opts = map__52757__$1;
var before_jsload = cljs.core.get.call(null,map__52757__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52757__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52757__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52758 = p__52510;
var map__52758__$1 = ((((!((map__52758 == null)))?((((map__52758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52758):map__52758);
var msg = map__52758__$1;
var files = cljs.core.get.call(null,map__52758__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52758__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52758__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52911){
var state_val_52912 = (state_52911[(1)]);
if((state_val_52912 === (7))){
var inst_52775 = (state_52911[(7)]);
var inst_52772 = (state_52911[(8)]);
var inst_52773 = (state_52911[(9)]);
var inst_52774 = (state_52911[(10)]);
var inst_52780 = cljs.core._nth.call(null,inst_52773,inst_52775);
var inst_52781 = figwheel.client.file_reloading.eval_body.call(null,inst_52780,opts);
var inst_52782 = (inst_52775 + (1));
var tmp52913 = inst_52772;
var tmp52914 = inst_52773;
var tmp52915 = inst_52774;
var inst_52772__$1 = tmp52913;
var inst_52773__$1 = tmp52914;
var inst_52774__$1 = tmp52915;
var inst_52775__$1 = inst_52782;
var state_52911__$1 = (function (){var statearr_52916 = state_52911;
(statearr_52916[(7)] = inst_52775__$1);

(statearr_52916[(8)] = inst_52772__$1);

(statearr_52916[(11)] = inst_52781);

(statearr_52916[(9)] = inst_52773__$1);

(statearr_52916[(10)] = inst_52774__$1);

return statearr_52916;
})();
var statearr_52917_53003 = state_52911__$1;
(statearr_52917_53003[(2)] = null);

(statearr_52917_53003[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (20))){
var inst_52815 = (state_52911[(12)]);
var inst_52823 = figwheel.client.file_reloading.sort_files.call(null,inst_52815);
var state_52911__$1 = state_52911;
var statearr_52918_53004 = state_52911__$1;
(statearr_52918_53004[(2)] = inst_52823);

(statearr_52918_53004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (27))){
var state_52911__$1 = state_52911;
var statearr_52919_53005 = state_52911__$1;
(statearr_52919_53005[(2)] = null);

(statearr_52919_53005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (1))){
var inst_52764 = (state_52911[(13)]);
var inst_52761 = before_jsload.call(null,files);
var inst_52762 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52763 = (function (){return ((function (inst_52764,inst_52761,inst_52762,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52506_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52506_SHARP_);
});
;})(inst_52764,inst_52761,inst_52762,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52764__$1 = cljs.core.filter.call(null,inst_52763,files);
var inst_52765 = cljs.core.not_empty.call(null,inst_52764__$1);
var state_52911__$1 = (function (){var statearr_52920 = state_52911;
(statearr_52920[(14)] = inst_52761);

(statearr_52920[(15)] = inst_52762);

(statearr_52920[(13)] = inst_52764__$1);

return statearr_52920;
})();
if(cljs.core.truth_(inst_52765)){
var statearr_52921_53006 = state_52911__$1;
(statearr_52921_53006[(1)] = (2));

} else {
var statearr_52922_53007 = state_52911__$1;
(statearr_52922_53007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (24))){
var state_52911__$1 = state_52911;
var statearr_52923_53008 = state_52911__$1;
(statearr_52923_53008[(2)] = null);

(statearr_52923_53008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (39))){
var inst_52865 = (state_52911[(16)]);
var state_52911__$1 = state_52911;
var statearr_52924_53009 = state_52911__$1;
(statearr_52924_53009[(2)] = inst_52865);

(statearr_52924_53009[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (46))){
var inst_52906 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52925_53010 = state_52911__$1;
(statearr_52925_53010[(2)] = inst_52906);

(statearr_52925_53010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (4))){
var inst_52809 = (state_52911[(2)]);
var inst_52810 = cljs.core.List.EMPTY;
var inst_52811 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52810);
var inst_52812 = (function (){return ((function (inst_52809,inst_52810,inst_52811,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52507_SHARP_){
var and__40680__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52507_SHARP_);
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52507_SHARP_));
} else {
return and__40680__auto__;
}
});
;})(inst_52809,inst_52810,inst_52811,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52813 = cljs.core.filter.call(null,inst_52812,files);
var inst_52814 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52815 = cljs.core.concat.call(null,inst_52813,inst_52814);
var state_52911__$1 = (function (){var statearr_52926 = state_52911;
(statearr_52926[(17)] = inst_52811);

(statearr_52926[(18)] = inst_52809);

(statearr_52926[(12)] = inst_52815);

return statearr_52926;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52927_53011 = state_52911__$1;
(statearr_52927_53011[(1)] = (16));

} else {
var statearr_52928_53012 = state_52911__$1;
(statearr_52928_53012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (15))){
var inst_52799 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52929_53013 = state_52911__$1;
(statearr_52929_53013[(2)] = inst_52799);

(statearr_52929_53013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (21))){
var inst_52825 = (state_52911[(19)]);
var inst_52825__$1 = (state_52911[(2)]);
var inst_52826 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52825__$1);
var state_52911__$1 = (function (){var statearr_52930 = state_52911;
(statearr_52930[(19)] = inst_52825__$1);

return statearr_52930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52911__$1,(22),inst_52826);
} else {
if((state_val_52912 === (31))){
var inst_52909 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52911__$1,inst_52909);
} else {
if((state_val_52912 === (32))){
var inst_52865 = (state_52911[(16)]);
var inst_52870 = inst_52865.cljs$lang$protocol_mask$partition0$;
var inst_52871 = (inst_52870 & (64));
var inst_52872 = inst_52865.cljs$core$ISeq$;
var inst_52873 = (inst_52871) || (inst_52872);
var state_52911__$1 = state_52911;
if(cljs.core.truth_(inst_52873)){
var statearr_52931_53014 = state_52911__$1;
(statearr_52931_53014[(1)] = (35));

} else {
var statearr_52932_53015 = state_52911__$1;
(statearr_52932_53015[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (40))){
var inst_52886 = (state_52911[(20)]);
var inst_52885 = (state_52911[(2)]);
var inst_52886__$1 = cljs.core.get.call(null,inst_52885,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52887 = cljs.core.get.call(null,inst_52885,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52888 = cljs.core.not_empty.call(null,inst_52886__$1);
var state_52911__$1 = (function (){var statearr_52933 = state_52911;
(statearr_52933[(20)] = inst_52886__$1);

(statearr_52933[(21)] = inst_52887);

return statearr_52933;
})();
if(cljs.core.truth_(inst_52888)){
var statearr_52934_53016 = state_52911__$1;
(statearr_52934_53016[(1)] = (41));

} else {
var statearr_52935_53017 = state_52911__$1;
(statearr_52935_53017[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (33))){
var state_52911__$1 = state_52911;
var statearr_52936_53018 = state_52911__$1;
(statearr_52936_53018[(2)] = false);

(statearr_52936_53018[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (13))){
var inst_52785 = (state_52911[(22)]);
var inst_52789 = cljs.core.chunk_first.call(null,inst_52785);
var inst_52790 = cljs.core.chunk_rest.call(null,inst_52785);
var inst_52791 = cljs.core.count.call(null,inst_52789);
var inst_52772 = inst_52790;
var inst_52773 = inst_52789;
var inst_52774 = inst_52791;
var inst_52775 = (0);
var state_52911__$1 = (function (){var statearr_52937 = state_52911;
(statearr_52937[(7)] = inst_52775);

(statearr_52937[(8)] = inst_52772);

(statearr_52937[(9)] = inst_52773);

(statearr_52937[(10)] = inst_52774);

return statearr_52937;
})();
var statearr_52938_53019 = state_52911__$1;
(statearr_52938_53019[(2)] = null);

(statearr_52938_53019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (22))){
var inst_52829 = (state_52911[(23)]);
var inst_52833 = (state_52911[(24)]);
var inst_52825 = (state_52911[(19)]);
var inst_52828 = (state_52911[(25)]);
var inst_52828__$1 = (state_52911[(2)]);
var inst_52829__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52828__$1);
var inst_52830 = (function (){var all_files = inst_52825;
var res_SINGLEQUOTE_ = inst_52828__$1;
var res = inst_52829__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52829,inst_52833,inst_52825,inst_52828,inst_52828__$1,inst_52829__$1,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52508_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52508_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52829,inst_52833,inst_52825,inst_52828,inst_52828__$1,inst_52829__$1,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52831 = cljs.core.filter.call(null,inst_52830,inst_52828__$1);
var inst_52832 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52833__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52832);
var inst_52834 = cljs.core.not_empty.call(null,inst_52833__$1);
var state_52911__$1 = (function (){var statearr_52939 = state_52911;
(statearr_52939[(26)] = inst_52831);

(statearr_52939[(23)] = inst_52829__$1);

(statearr_52939[(24)] = inst_52833__$1);

(statearr_52939[(25)] = inst_52828__$1);

return statearr_52939;
})();
if(cljs.core.truth_(inst_52834)){
var statearr_52940_53020 = state_52911__$1;
(statearr_52940_53020[(1)] = (23));

} else {
var statearr_52941_53021 = state_52911__$1;
(statearr_52941_53021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (36))){
var state_52911__$1 = state_52911;
var statearr_52942_53022 = state_52911__$1;
(statearr_52942_53022[(2)] = false);

(statearr_52942_53022[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (41))){
var inst_52886 = (state_52911[(20)]);
var inst_52890 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52891 = cljs.core.map.call(null,inst_52890,inst_52886);
var inst_52892 = cljs.core.pr_str.call(null,inst_52891);
var inst_52893 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52892)].join('');
var inst_52894 = figwheel.client.utils.log.call(null,inst_52893);
var state_52911__$1 = state_52911;
var statearr_52943_53023 = state_52911__$1;
(statearr_52943_53023[(2)] = inst_52894);

(statearr_52943_53023[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (43))){
var inst_52887 = (state_52911[(21)]);
var inst_52897 = (state_52911[(2)]);
var inst_52898 = cljs.core.not_empty.call(null,inst_52887);
var state_52911__$1 = (function (){var statearr_52944 = state_52911;
(statearr_52944[(27)] = inst_52897);

return statearr_52944;
})();
if(cljs.core.truth_(inst_52898)){
var statearr_52945_53024 = state_52911__$1;
(statearr_52945_53024[(1)] = (44));

} else {
var statearr_52946_53025 = state_52911__$1;
(statearr_52946_53025[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (29))){
var inst_52865 = (state_52911[(16)]);
var inst_52831 = (state_52911[(26)]);
var inst_52829 = (state_52911[(23)]);
var inst_52833 = (state_52911[(24)]);
var inst_52825 = (state_52911[(19)]);
var inst_52828 = (state_52911[(25)]);
var inst_52861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52864 = (function (){var all_files = inst_52825;
var res_SINGLEQUOTE_ = inst_52828;
var res = inst_52829;
var files_not_loaded = inst_52831;
var dependencies_that_loaded = inst_52833;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52865,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52861,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52863){
var map__52947 = p__52863;
var map__52947__$1 = ((((!((map__52947 == null)))?((((map__52947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52947):map__52947);
var namespace = cljs.core.get.call(null,map__52947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52865,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52861,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52865__$1 = cljs.core.group_by.call(null,inst_52864,inst_52831);
var inst_52867 = (inst_52865__$1 == null);
var inst_52868 = cljs.core.not.call(null,inst_52867);
var state_52911__$1 = (function (){var statearr_52949 = state_52911;
(statearr_52949[(16)] = inst_52865__$1);

(statearr_52949[(28)] = inst_52861);

return statearr_52949;
})();
if(inst_52868){
var statearr_52950_53026 = state_52911__$1;
(statearr_52950_53026[(1)] = (32));

} else {
var statearr_52951_53027 = state_52911__$1;
(statearr_52951_53027[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (44))){
var inst_52887 = (state_52911[(21)]);
var inst_52900 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52887);
var inst_52901 = cljs.core.pr_str.call(null,inst_52900);
var inst_52902 = [cljs.core.str("not required: "),cljs.core.str(inst_52901)].join('');
var inst_52903 = figwheel.client.utils.log.call(null,inst_52902);
var state_52911__$1 = state_52911;
var statearr_52952_53028 = state_52911__$1;
(statearr_52952_53028[(2)] = inst_52903);

(statearr_52952_53028[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (6))){
var inst_52806 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52953_53029 = state_52911__$1;
(statearr_52953_53029[(2)] = inst_52806);

(statearr_52953_53029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (28))){
var inst_52831 = (state_52911[(26)]);
var inst_52858 = (state_52911[(2)]);
var inst_52859 = cljs.core.not_empty.call(null,inst_52831);
var state_52911__$1 = (function (){var statearr_52954 = state_52911;
(statearr_52954[(29)] = inst_52858);

return statearr_52954;
})();
if(cljs.core.truth_(inst_52859)){
var statearr_52955_53030 = state_52911__$1;
(statearr_52955_53030[(1)] = (29));

} else {
var statearr_52956_53031 = state_52911__$1;
(statearr_52956_53031[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (25))){
var inst_52829 = (state_52911[(23)]);
var inst_52845 = (state_52911[(2)]);
var inst_52846 = cljs.core.not_empty.call(null,inst_52829);
var state_52911__$1 = (function (){var statearr_52957 = state_52911;
(statearr_52957[(30)] = inst_52845);

return statearr_52957;
})();
if(cljs.core.truth_(inst_52846)){
var statearr_52958_53032 = state_52911__$1;
(statearr_52958_53032[(1)] = (26));

} else {
var statearr_52959_53033 = state_52911__$1;
(statearr_52959_53033[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (34))){
var inst_52880 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
if(cljs.core.truth_(inst_52880)){
var statearr_52960_53034 = state_52911__$1;
(statearr_52960_53034[(1)] = (38));

} else {
var statearr_52961_53035 = state_52911__$1;
(statearr_52961_53035[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (17))){
var state_52911__$1 = state_52911;
var statearr_52962_53036 = state_52911__$1;
(statearr_52962_53036[(2)] = recompile_dependents);

(statearr_52962_53036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (3))){
var state_52911__$1 = state_52911;
var statearr_52963_53037 = state_52911__$1;
(statearr_52963_53037[(2)] = null);

(statearr_52963_53037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (12))){
var inst_52802 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52964_53038 = state_52911__$1;
(statearr_52964_53038[(2)] = inst_52802);

(statearr_52964_53038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (2))){
var inst_52764 = (state_52911[(13)]);
var inst_52771 = cljs.core.seq.call(null,inst_52764);
var inst_52772 = inst_52771;
var inst_52773 = null;
var inst_52774 = (0);
var inst_52775 = (0);
var state_52911__$1 = (function (){var statearr_52965 = state_52911;
(statearr_52965[(7)] = inst_52775);

(statearr_52965[(8)] = inst_52772);

(statearr_52965[(9)] = inst_52773);

(statearr_52965[(10)] = inst_52774);

return statearr_52965;
})();
var statearr_52966_53039 = state_52911__$1;
(statearr_52966_53039[(2)] = null);

(statearr_52966_53039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (23))){
var inst_52831 = (state_52911[(26)]);
var inst_52829 = (state_52911[(23)]);
var inst_52833 = (state_52911[(24)]);
var inst_52825 = (state_52911[(19)]);
var inst_52828 = (state_52911[(25)]);
var inst_52836 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52838 = (function (){var all_files = inst_52825;
var res_SINGLEQUOTE_ = inst_52828;
var res = inst_52829;
var files_not_loaded = inst_52831;
var dependencies_that_loaded = inst_52833;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52836,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52837){
var map__52967 = p__52837;
var map__52967__$1 = ((((!((map__52967 == null)))?((((map__52967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52967):map__52967);
var request_url = cljs.core.get.call(null,map__52967__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52836,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52839 = cljs.core.reverse.call(null,inst_52833);
var inst_52840 = cljs.core.map.call(null,inst_52838,inst_52839);
var inst_52841 = cljs.core.pr_str.call(null,inst_52840);
var inst_52842 = figwheel.client.utils.log.call(null,inst_52841);
var state_52911__$1 = (function (){var statearr_52969 = state_52911;
(statearr_52969[(31)] = inst_52836);

return statearr_52969;
})();
var statearr_52970_53040 = state_52911__$1;
(statearr_52970_53040[(2)] = inst_52842);

(statearr_52970_53040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (35))){
var state_52911__$1 = state_52911;
var statearr_52971_53041 = state_52911__$1;
(statearr_52971_53041[(2)] = true);

(statearr_52971_53041[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (19))){
var inst_52815 = (state_52911[(12)]);
var inst_52821 = figwheel.client.file_reloading.expand_files.call(null,inst_52815);
var state_52911__$1 = state_52911;
var statearr_52972_53042 = state_52911__$1;
(statearr_52972_53042[(2)] = inst_52821);

(statearr_52972_53042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (11))){
var state_52911__$1 = state_52911;
var statearr_52973_53043 = state_52911__$1;
(statearr_52973_53043[(2)] = null);

(statearr_52973_53043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (9))){
var inst_52804 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52974_53044 = state_52911__$1;
(statearr_52974_53044[(2)] = inst_52804);

(statearr_52974_53044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (5))){
var inst_52775 = (state_52911[(7)]);
var inst_52774 = (state_52911[(10)]);
var inst_52777 = (inst_52775 < inst_52774);
var inst_52778 = inst_52777;
var state_52911__$1 = state_52911;
if(cljs.core.truth_(inst_52778)){
var statearr_52975_53045 = state_52911__$1;
(statearr_52975_53045[(1)] = (7));

} else {
var statearr_52976_53046 = state_52911__$1;
(statearr_52976_53046[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (14))){
var inst_52785 = (state_52911[(22)]);
var inst_52794 = cljs.core.first.call(null,inst_52785);
var inst_52795 = figwheel.client.file_reloading.eval_body.call(null,inst_52794,opts);
var inst_52796 = cljs.core.next.call(null,inst_52785);
var inst_52772 = inst_52796;
var inst_52773 = null;
var inst_52774 = (0);
var inst_52775 = (0);
var state_52911__$1 = (function (){var statearr_52977 = state_52911;
(statearr_52977[(32)] = inst_52795);

(statearr_52977[(7)] = inst_52775);

(statearr_52977[(8)] = inst_52772);

(statearr_52977[(9)] = inst_52773);

(statearr_52977[(10)] = inst_52774);

return statearr_52977;
})();
var statearr_52978_53047 = state_52911__$1;
(statearr_52978_53047[(2)] = null);

(statearr_52978_53047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (45))){
var state_52911__$1 = state_52911;
var statearr_52979_53048 = state_52911__$1;
(statearr_52979_53048[(2)] = null);

(statearr_52979_53048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (26))){
var inst_52831 = (state_52911[(26)]);
var inst_52829 = (state_52911[(23)]);
var inst_52833 = (state_52911[(24)]);
var inst_52825 = (state_52911[(19)]);
var inst_52828 = (state_52911[(25)]);
var inst_52848 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52850 = (function (){var all_files = inst_52825;
var res_SINGLEQUOTE_ = inst_52828;
var res = inst_52829;
var files_not_loaded = inst_52831;
var dependencies_that_loaded = inst_52833;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52848,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52849){
var map__52980 = p__52849;
var map__52980__$1 = ((((!((map__52980 == null)))?((((map__52980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52980):map__52980);
var namespace = cljs.core.get.call(null,map__52980__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52848,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52851 = cljs.core.map.call(null,inst_52850,inst_52829);
var inst_52852 = cljs.core.pr_str.call(null,inst_52851);
var inst_52853 = figwheel.client.utils.log.call(null,inst_52852);
var inst_52854 = (function (){var all_files = inst_52825;
var res_SINGLEQUOTE_ = inst_52828;
var res = inst_52829;
var files_not_loaded = inst_52831;
var dependencies_that_loaded = inst_52833;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52848,inst_52850,inst_52851,inst_52852,inst_52853,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52831,inst_52829,inst_52833,inst_52825,inst_52828,inst_52848,inst_52850,inst_52851,inst_52852,inst_52853,state_val_52912,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52855 = setTimeout(inst_52854,(10));
var state_52911__$1 = (function (){var statearr_52982 = state_52911;
(statearr_52982[(33)] = inst_52848);

(statearr_52982[(34)] = inst_52853);

return statearr_52982;
})();
var statearr_52983_53049 = state_52911__$1;
(statearr_52983_53049[(2)] = inst_52855);

(statearr_52983_53049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (16))){
var state_52911__$1 = state_52911;
var statearr_52984_53050 = state_52911__$1;
(statearr_52984_53050[(2)] = reload_dependents);

(statearr_52984_53050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (38))){
var inst_52865 = (state_52911[(16)]);
var inst_52882 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52865);
var state_52911__$1 = state_52911;
var statearr_52985_53051 = state_52911__$1;
(statearr_52985_53051[(2)] = inst_52882);

(statearr_52985_53051[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (30))){
var state_52911__$1 = state_52911;
var statearr_52986_53052 = state_52911__$1;
(statearr_52986_53052[(2)] = null);

(statearr_52986_53052[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (10))){
var inst_52785 = (state_52911[(22)]);
var inst_52787 = cljs.core.chunked_seq_QMARK_.call(null,inst_52785);
var state_52911__$1 = state_52911;
if(inst_52787){
var statearr_52987_53053 = state_52911__$1;
(statearr_52987_53053[(1)] = (13));

} else {
var statearr_52988_53054 = state_52911__$1;
(statearr_52988_53054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (18))){
var inst_52819 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
if(cljs.core.truth_(inst_52819)){
var statearr_52989_53055 = state_52911__$1;
(statearr_52989_53055[(1)] = (19));

} else {
var statearr_52990_53056 = state_52911__$1;
(statearr_52990_53056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (42))){
var state_52911__$1 = state_52911;
var statearr_52991_53057 = state_52911__$1;
(statearr_52991_53057[(2)] = null);

(statearr_52991_53057[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (37))){
var inst_52877 = (state_52911[(2)]);
var state_52911__$1 = state_52911;
var statearr_52992_53058 = state_52911__$1;
(statearr_52992_53058[(2)] = inst_52877);

(statearr_52992_53058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52912 === (8))){
var inst_52772 = (state_52911[(8)]);
var inst_52785 = (state_52911[(22)]);
var inst_52785__$1 = cljs.core.seq.call(null,inst_52772);
var state_52911__$1 = (function (){var statearr_52993 = state_52911;
(statearr_52993[(22)] = inst_52785__$1);

return statearr_52993;
})();
if(inst_52785__$1){
var statearr_52994_53059 = state_52911__$1;
(statearr_52994_53059[(1)] = (10));

} else {
var statearr_52995_53060 = state_52911__$1;
(statearr_52995_53060[(1)] = (11));

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
}
});})(c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46330__auto__,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____0 = (function (){
var statearr_52999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52999[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__);

(statearr_52999[(1)] = (1));

return statearr_52999;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____1 = (function (state_52911){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_52911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e53000){if((e53000 instanceof Object)){
var ex__46334__auto__ = e53000;
var statearr_53001_53061 = state_52911;
(statearr_53001_53061[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53062 = state_52911;
state_52911 = G__53062;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__ = function(state_52911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____1.call(this,state_52911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46444__auto__ = (function (){var statearr_53002 = f__46443__auto__.call(null);
(statearr_53002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_53002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,map__52757,map__52757__$1,opts,before_jsload,on_jsload,reload_dependents,map__52758,map__52758__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46442__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53065,link){
var map__53068 = p__53065;
var map__53068__$1 = ((((!((map__53068 == null)))?((((map__53068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53068):map__53068);
var file = cljs.core.get.call(null,map__53068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__53068,map__53068__$1,file){
return (function (p1__53063_SHARP_,p2__53064_SHARP_){
if(cljs.core._EQ_.call(null,p1__53063_SHARP_,p2__53064_SHARP_)){
return p1__53063_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__53068,map__53068__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53074){
var map__53075 = p__53074;
var map__53075__$1 = ((((!((map__53075 == null)))?((((map__53075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53075):map__53075);
var match_length = cljs.core.get.call(null,map__53075__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53075__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53070_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53070_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args53077 = [];
var len__41762__auto___53080 = arguments.length;
var i__41763__auto___53081 = (0);
while(true){
if((i__41763__auto___53081 < len__41762__auto___53080)){
args53077.push((arguments[i__41763__auto___53081]));

var G__53082 = (i__41763__auto___53081 + (1));
i__41763__auto___53081 = G__53082;
continue;
} else {
}
break;
}

var G__53079 = args53077.length;
switch (G__53079) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53077.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53084_SHARP_,p2__53085_SHARP_){
return cljs.core.assoc.call(null,p1__53084_SHARP_,cljs.core.get.call(null,p2__53085_SHARP_,key),p2__53085_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__53086){
var map__53089 = p__53086;
var map__53089__$1 = ((((!((map__53089 == null)))?((((map__53089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53089):map__53089);
var f_data = map__53089__$1;
var file = cljs.core.get.call(null,map__53089__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53091,files_msg){
var map__53098 = p__53091;
var map__53098__$1 = ((((!((map__53098 == null)))?((((map__53098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53098):map__53098);
var opts = map__53098__$1;
var on_cssload = cljs.core.get.call(null,map__53098__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__53100_53104 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__53101_53105 = null;
var count__53102_53106 = (0);
var i__53103_53107 = (0);
while(true){
if((i__53103_53107 < count__53102_53106)){
var f_53108 = cljs.core._nth.call(null,chunk__53101_53105,i__53103_53107);
figwheel.client.file_reloading.reload_css_file.call(null,f_53108);

var G__53109 = seq__53100_53104;
var G__53110 = chunk__53101_53105;
var G__53111 = count__53102_53106;
var G__53112 = (i__53103_53107 + (1));
seq__53100_53104 = G__53109;
chunk__53101_53105 = G__53110;
count__53102_53106 = G__53111;
i__53103_53107 = G__53112;
continue;
} else {
var temp__4657__auto___53113 = cljs.core.seq.call(null,seq__53100_53104);
if(temp__4657__auto___53113){
var seq__53100_53114__$1 = temp__4657__auto___53113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53100_53114__$1)){
var c__41503__auto___53115 = cljs.core.chunk_first.call(null,seq__53100_53114__$1);
var G__53116 = cljs.core.chunk_rest.call(null,seq__53100_53114__$1);
var G__53117 = c__41503__auto___53115;
var G__53118 = cljs.core.count.call(null,c__41503__auto___53115);
var G__53119 = (0);
seq__53100_53104 = G__53116;
chunk__53101_53105 = G__53117;
count__53102_53106 = G__53118;
i__53103_53107 = G__53119;
continue;
} else {
var f_53120 = cljs.core.first.call(null,seq__53100_53114__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_53120);

var G__53121 = cljs.core.next.call(null,seq__53100_53114__$1);
var G__53122 = null;
var G__53123 = (0);
var G__53124 = (0);
seq__53100_53104 = G__53121;
chunk__53101_53105 = G__53122;
count__53102_53106 = G__53123;
i__53103_53107 = G__53124;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__53098,map__53098__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__53098,map__53098__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1482388923682