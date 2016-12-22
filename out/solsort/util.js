// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.util');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('solsort.toolbox.xml');
goog.require('solsort.toolbox.ui');
goog.require('cljs.core.async');
goog.require('solsort.toolbox.style');
goog.require('solsort.toolbox.net');
goog.require('solsort.toolbox.misc');
cljs.core.enable_console_print_BANG_.call(null);
if(cljs.core.truth_((function (){var and__40680__auto__ = window.process;
if(cljs.core.truth_(and__40680__auto__)){
var and__40680__auto____$1 = window.process.versions;
if(cljs.core.truth_(and__40680__auto____$1)){
return window.process.versions.electron;
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})())){
require("module").globalPaths.push([cljs.core.str(process.cwd()),cljs.core.str("/node_modules")].join(''));
} else {
}
solsort.util.log = (function solsort$util$log(var_args){
var args__41769__auto__ = [];
var len__41762__auto___51008 = arguments.length;
var i__41763__auto___51009 = (0);
while(true){
if((i__41763__auto___51009 < len__41762__auto___51008)){
args__41769__auto__.push((arguments[i__41763__auto___51009]));

var G__51010 = (i__41763__auto___51009 + (1));
i__41763__auto___51009 = G__51010;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return solsort.util.log.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

solsort.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log.apply(console,cljs.core.clj__GT_js.call(null,args));

return cljs.core.first.call(null,args);
});

solsort.util.log.cljs$lang$maxFixedArity = (0);

solsort.util.log.cljs$lang$applyTo = (function (seq51007){
return solsort.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51007));
});
solsort.util.normalize_css = solsort.toolbox.style.normalize_css;
solsort.util.grid = solsort.toolbox.style.grid;
solsort.util.css_name = solsort.toolbox.style.css_name;
solsort.util.handle_rule = solsort.toolbox.style.handle_rule;
solsort.util.handle_block = solsort.toolbox.style.handle_block;
solsort.util.clj__GT_css = solsort.toolbox.style.clj__GT_css;
solsort.util.js__GT_css = solsort.toolbox.style.js__GT_css;
/**
 * (style, id) -> nil
 */
solsort.util.load_style_BANG_ = solsort.toolbox.style.load_style_BANG_;
solsort.util.style_tag = solsort.toolbox.style.style_tag;
solsort.util.dom__GT_clj = solsort.toolbox.xml.dom__GT_clj;
solsort.util.xml__GT_sxml = solsort.toolbox.xml.xml__GT_sxml;
solsort.util.html_data = solsort.toolbox.ui.html_data;
solsort.util.page_ready = solsort.toolbox.ui.page_ready;
solsort.util.render = solsort.toolbox.ui.render;
solsort.util.next_tick = solsort.toolbox.misc.next_tick;
solsort.util.run_once = solsort.toolbox.misc.run_once;
solsort.util.parse_json_or_nil = solsort.toolbox.misc.parse_json_or_nil;
solsort.util.jsextend = solsort.toolbox.misc.jsextend;
solsort.util.starts_with = solsort.toolbox.misc.starts_with;
solsort.util.function_QMARK_ = solsort.toolbox.misc.function_QMARK_;
solsort.util.parse_path = solsort.toolbox.misc.parse_path;
solsort.util.canonize_string = solsort.toolbox.misc.canonize_string;
solsort.util.swap_trim = solsort.toolbox.misc.swap_trim;
solsort.util.hex_color = solsort.toolbox.misc.hex_color;
solsort.util.unique_id = solsort.toolbox.misc.unique_id;
solsort.util.cryptohash = (function solsort$util$cryptohash(o){
return [cljs.core.str(cljs.core.hash.call(null,o))].join('');
});
solsort.util._LT_load_script = (function solsort$util$_LT_load_script(url){
var id = solsort.util.cryptohash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-script","load-script",-1498395223),url], null));
var tag = (function (){var or__40692__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return document.createElement("script");
}
})();
var c = cljs.core.async.chan.call(null);
(tag["id"] = id);

(tag["src"] = url);

tag.addEventListener("error",((function (id,tag,c){
return (function (p1__51011_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,Error(p1__51011_SHARP_));
});})(id,tag,c))
);

tag.addEventListener("load ",((function (id,tag,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,true);
});})(id,tag,c))
);

return document.head.appendChild(tag);
});
solsort.util.js_seq = solsort.toolbox.misc.js_seq;
solsort.util._LT_blob_url = solsort.toolbox.misc._LT_blob_url;
solsort.util._LT_blob_text = solsort.toolbox.misc._LT_blob_text;
solsort.util.unatom = solsort.toolbox.misc.unatom;
solsort.util.throttle = solsort.toolbox.misc.throttle;
solsort.util._LT_p = solsort.toolbox.misc._LT_p;
solsort.util._LT_n = solsort.toolbox.misc._LT_n;
solsort.util.put_BANG_close_BANG_ = solsort.toolbox.misc.put_BANG_close_BANG_;
solsort.util.chan_QMARK_ = solsort.toolbox.misc.chan_QMARK_;
solsort.util._LT_seq_LT__BANG_ = solsort.toolbox.misc._LT_seq_LT__BANG_;
solsort.util.transducer_status = solsort.toolbox.misc.transducer_status;
solsort.util.transducer_accumulate = solsort.toolbox.misc.transducer_accumulate;
solsort.util.group_lines_by_first = solsort.toolbox.misc.group_lines_by_first;
solsort.util.print_channel = solsort.toolbox.misc.print_channel;
solsort.util.by_first = solsort.toolbox.misc.by_first;
solsort.util._LT_load_js = solsort.toolbox.net._LT_load_js;
solsort.util.utf16__GT_utf8 = solsort.toolbox.net.utf16__GT_utf8;
solsort.util.utf8__GT_utf16 = solsort.toolbox.net.utf8__GT_utf16;
solsort.util.buf__GT_utf8_str = solsort.toolbox.net.buf__GT_utf8_str;
solsort.util.buf__GT_str = solsort.toolbox.net.buf__GT_str;
solsort.util.utf8_str__GT_buf = solsort.toolbox.net.utf8_str__GT_buf;
solsort.util.str__GT_buf = solsort.toolbox.net.str__GT_buf;
solsort.util._LT_sha256 = solsort.toolbox.net._LT_sha256;
solsort.util._LT_sha256_str = solsort.toolbox.net._LT_sha256_str;
solsort.util._LT_ajax = solsort.toolbox.net._LT_ajax;
solsort.util.third = (function solsort$util$third(col){
return cljs.core.nth.call(null,col,(2));
});
solsort.util.delay_fn = (function solsort$util$delay_fn(f){
return (function() { 
var G__51012__delegate = function (args){
return solsort.util.next_tick.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__51012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51013__i = 0, G__51013__a = new Array(arguments.length -  0);
while (G__51013__i < G__51013__a.length) {G__51013__a[G__51013__i] = arguments[G__51013__i + 0]; ++G__51013__i;}
  args = new cljs.core.IndexedSeq(G__51013__a,0);
} 
return G__51012__delegate.call(this,args);};
G__51012.cljs$lang$maxFixedArity = 0;
G__51012.cljs$lang$applyTo = (function (arglist__51014){
var args = cljs.core.seq(arglist__51014);
return G__51012__delegate(args);
});
G__51012.cljs$core$IFn$_invoke$arity$variadic = G__51012__delegate;
return G__51012;
})()
;
});
solsort.util._LT_chan_seq = (function solsort$util$_LT_chan_seq(arr){
return cljs.core.async.reduce.call(null,cljs.core.conj,null,cljs.core.async.merge.call(null,arr));
});
solsort.util.to_map = (function solsort$util$to_map(o){
if(cljs.core.map_QMARK_.call(null,o)){
return o;
} else {
if(cljs.core.sequential_QMARK_.call(null,o)){
return cljs.core.zipmap.call(null,cljs.core.range.call(null),o);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});
solsort.util.timestamp__GT_isostring = (function solsort$util$timestamp__GT_isostring(i){
return (new Date(i)).toISOString();
});
solsort.util.str__GT_timestamp = (function solsort$util$str__GT_timestamp(s){
return (new Date(s)).valueOf();
});
solsort.util.tap_chan = (function solsort$util$tap_chan(m){
var c = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,m,c);

return c;
});
solsort.util.js_obj_push = (function solsort$util$js_obj_push(obj,k,v){
return (function (){var or__40692__auto__ = (obj[k]);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (obj[k] = []);
}
})().push(v);
});
solsort.util.fourth_first = (function solsort$util$fourth_first(p__51015){
var vec__51017 = p__51015;
var v = cljs.core.nth.call(null,vec__51017,(0),null);
var _ = cljs.core.nth.call(null,vec__51017,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__51017,(2),null);
var k = cljs.core.nth.call(null,vec__51017,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
/**
 * get changes from a to b
 */
solsort.util.delta = (function solsort$util$delta(from,to){
if(cljs.core._EQ_.call(null,from,to)){
if(cljs.core.coll_QMARK_.call(null,to)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return to;
}
} else {
if(cljs.core.coll_QMARK_.call(null,to)){
var from__$1 = solsort.util.to_map.call(null,from);
var to__$1 = solsort.util.to_map.call(null,to);
var ks = cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,from__$1),cljs.core.keys.call(null,to__$1)));
var ks__$1 = cljs.core.filter.call(null,((function (from__$1,to__$1,ks){
return (function (p1__51018_SHARP_){
return cljs.core.not_EQ_.call(null,from__$1.call(null,p1__51018_SHARP_),to__$1.call(null,p1__51018_SHARP_));
});})(from__$1,to__$1,ks))
,ks);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (from__$1,to__$1,ks,ks__$1){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,solsort$util$delta.call(null,from__$1.call(null,k),to__$1.call(null,k))], null);
});})(from__$1,to__$1,ks,ks__$1))
,ks__$1));
} else {
return to;
}
}
});

//# sourceMappingURL=util.js.map?rel=1482388911368