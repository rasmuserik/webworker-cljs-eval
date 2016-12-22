// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__43790 = s;
var map__43790__$1 = ((((!((map__43790 == null)))?((((map__43790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43790):map__43790);
var name = cljs.core.get.call(null,map__43790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__43790__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__43793 = info;
var map__43794 = G__43793;
var map__43794__$1 = ((((!((map__43794 == null)))?((((map__43794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43794):map__43794);
var shadow = cljs.core.get.call(null,map__43794__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__43793__$1 = G__43793;
while(true){
var d__$2 = d__$1;
var map__43796 = G__43793__$1;
var map__43796__$1 = ((((!((map__43796 == null)))?((((map__43796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43796):map__43796);
var shadow__$1 = cljs.core.get.call(null,map__43796__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__43798 = (d__$2 + (1));
var G__43799 = shadow__$1;
d__$1 = G__43798;
G__43793__$1 = G__43799;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__43800){
var map__43805 = p__43800;
var map__43805__$1 = ((((!((map__43805 == null)))?((((map__43805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43805):map__43805);
var name_var = map__43805__$1;
var name = cljs.core.get.call(null,map__43805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__43805__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__43807 = info;
var map__43807__$1 = ((((!((map__43807 == null)))?((((map__43807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43807):map__43807);
var ns = cljs.core.get.call(null,map__43807__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__43807__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args43809 = [];
var len__41762__auto___43812 = arguments.length;
var i__41763__auto___43813 = (0);
while(true){
if((i__41763__auto___43813 < len__41762__auto___43812)){
args43809.push((arguments[i__41763__auto___43813]));

var G__43814 = (i__41763__auto___43813 + (1));
i__41763__auto___43813 = G__43814;
continue;
} else {
}
break;
}

var G__43811 = args43809.length;
switch (G__43811) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43809.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__43817 = cp;
switch (G__43817) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__43823_43827 = cljs.core.seq.call(null,s);
var chunk__43824_43828 = null;
var count__43825_43829 = (0);
var i__43826_43830 = (0);
while(true){
if((i__43826_43830 < count__43825_43829)){
var c_43831 = cljs.core._nth.call(null,chunk__43824_43828,i__43826_43830);
sb.append(cljs.compiler.escape_char.call(null,c_43831));

var G__43832 = seq__43823_43827;
var G__43833 = chunk__43824_43828;
var G__43834 = count__43825_43829;
var G__43835 = (i__43826_43830 + (1));
seq__43823_43827 = G__43832;
chunk__43824_43828 = G__43833;
count__43825_43829 = G__43834;
i__43826_43830 = G__43835;
continue;
} else {
var temp__4657__auto___43836 = cljs.core.seq.call(null,seq__43823_43827);
if(temp__4657__auto___43836){
var seq__43823_43837__$1 = temp__4657__auto___43836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43823_43837__$1)){
var c__41503__auto___43838 = cljs.core.chunk_first.call(null,seq__43823_43837__$1);
var G__43839 = cljs.core.chunk_rest.call(null,seq__43823_43837__$1);
var G__43840 = c__41503__auto___43838;
var G__43841 = cljs.core.count.call(null,c__41503__auto___43838);
var G__43842 = (0);
seq__43823_43827 = G__43839;
chunk__43824_43828 = G__43840;
count__43825_43829 = G__43841;
i__43826_43830 = G__43842;
continue;
} else {
var c_43843 = cljs.core.first.call(null,seq__43823_43837__$1);
sb.append(cljs.compiler.escape_char.call(null,c_43843));

var G__43844 = cljs.core.next.call(null,seq__43823_43837__$1);
var G__43845 = null;
var G__43846 = (0);
var G__43847 = (0);
seq__43823_43827 = G__43844;
chunk__43824_43828 = G__43845;
count__43825_43829 = G__43846;
i__43826_43830 = G__43847;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__41617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__41618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__41619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__41620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__41621__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__41621__auto__,method_table__41617__auto__,prefer_table__41618__auto__,method_cache__41619__auto__,cached_hierarchy__41620__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__43037__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__43037__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__43853_43858 = ast;
var map__43853_43859__$1 = ((((!((map__43853_43858 == null)))?((((map__43853_43858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43853_43858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43853_43858):map__43853_43858);
var env_43860 = cljs.core.get.call(null,map__43853_43859__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_43860))){
var map__43855_43861 = env_43860;
var map__43855_43862__$1 = ((((!((map__43855_43861 == null)))?((((map__43855_43861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43855_43861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43855_43861):map__43855_43861);
var line_43863 = cljs.core.get.call(null,map__43855_43862__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43864 = cljs.core.get.call(null,map__43855_43862__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__){
return (function (m){
var minfo = (function (){var G__43857 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__43857,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__43857;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_43863 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_43864)?(column_43864 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__43855_43861,map__43855_43862__$1,line_43863,column_43864,map__43853_43858,map__43853_43859__$1,env_43860,val__43037__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__43037__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__41769__auto__ = [];
var len__41762__auto___43871 = arguments.length;
var i__41763__auto___43872 = (0);
while(true){
if((i__41763__auto___43872 < len__41762__auto___43871)){
args__41769__auto__.push((arguments[i__41763__auto___43872]));

var G__43873 = (i__41763__auto___43872 + (1));
i__41763__auto___43872 = G__43873;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__43867_43874 = cljs.core.seq.call(null,xs);
var chunk__43868_43875 = null;
var count__43869_43876 = (0);
var i__43870_43877 = (0);
while(true){
if((i__43870_43877 < count__43869_43876)){
var x_43878 = cljs.core._nth.call(null,chunk__43868_43875,i__43870_43877);
if((x_43878 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_43878)){
cljs.compiler.emit.call(null,x_43878);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_43878)){
cljs.core.apply.call(null,cljs.compiler.emits,x_43878);
} else {
if(goog.isFunction(x_43878)){
x_43878.call(null);
} else {
var s_43879 = cljs.core.print_str.call(null,x_43878);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__43867_43874,chunk__43868_43875,count__43869_43876,i__43870_43877,s_43879,x_43878){
return (function (p1__43865_SHARP_){
return (p1__43865_SHARP_ + cljs.core.count.call(null,s_43879));
});})(seq__43867_43874,chunk__43868_43875,count__43869_43876,i__43870_43877,s_43879,x_43878))
);
}

cljs.core.print.call(null,s_43879);

}
}
}
}

var G__43880 = seq__43867_43874;
var G__43881 = chunk__43868_43875;
var G__43882 = count__43869_43876;
var G__43883 = (i__43870_43877 + (1));
seq__43867_43874 = G__43880;
chunk__43868_43875 = G__43881;
count__43869_43876 = G__43882;
i__43870_43877 = G__43883;
continue;
} else {
var temp__4657__auto___43884 = cljs.core.seq.call(null,seq__43867_43874);
if(temp__4657__auto___43884){
var seq__43867_43885__$1 = temp__4657__auto___43884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43867_43885__$1)){
var c__41503__auto___43886 = cljs.core.chunk_first.call(null,seq__43867_43885__$1);
var G__43887 = cljs.core.chunk_rest.call(null,seq__43867_43885__$1);
var G__43888 = c__41503__auto___43886;
var G__43889 = cljs.core.count.call(null,c__41503__auto___43886);
var G__43890 = (0);
seq__43867_43874 = G__43887;
chunk__43868_43875 = G__43888;
count__43869_43876 = G__43889;
i__43870_43877 = G__43890;
continue;
} else {
var x_43891 = cljs.core.first.call(null,seq__43867_43885__$1);
if((x_43891 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_43891)){
cljs.compiler.emit.call(null,x_43891);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_43891)){
cljs.core.apply.call(null,cljs.compiler.emits,x_43891);
} else {
if(goog.isFunction(x_43891)){
x_43891.call(null);
} else {
var s_43892 = cljs.core.print_str.call(null,x_43891);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__43867_43874,chunk__43868_43875,count__43869_43876,i__43870_43877,s_43892,x_43891,seq__43867_43885__$1,temp__4657__auto___43884){
return (function (p1__43865_SHARP_){
return (p1__43865_SHARP_ + cljs.core.count.call(null,s_43892));
});})(seq__43867_43874,chunk__43868_43875,count__43869_43876,i__43870_43877,s_43892,x_43891,seq__43867_43885__$1,temp__4657__auto___43884))
);
}

cljs.core.print.call(null,s_43892);

}
}
}
}

var G__43893 = cljs.core.next.call(null,seq__43867_43885__$1);
var G__43894 = null;
var G__43895 = (0);
var G__43896 = (0);
seq__43867_43874 = G__43893;
chunk__43868_43875 = G__43894;
count__43869_43876 = G__43895;
i__43870_43877 = G__43896;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq43866){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43866));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__41769__auto__ = [];
var len__41762__auto___43901 = arguments.length;
var i__41763__auto___43902 = (0);
while(true){
if((i__41763__auto___43902 < len__41762__auto___43901)){
args__41769__auto__.push((arguments[i__41763__auto___43902]));

var G__43903 = (i__41763__auto___43902 + (1));
i__41763__auto___43902 = G__43903;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__43898){
var map__43899 = p__43898;
var map__43899__$1 = ((((!((map__43899 == null)))?((((map__43899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43899):map__43899);
var m = map__43899__$1;
var gen_line = cljs.core.get.call(null,map__43899__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq43897){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43897));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__41678__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43906_43908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43907_43909 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43906_43908,_STAR_print_fn_STAR_43907_43909,sb__41678__auto__){
return (function (x__41679__auto__){
return sb__41678__auto__.append(x__41679__auto__);
});})(_STAR_print_newline_STAR_43906_43908,_STAR_print_fn_STAR_43907_43909,sb__41678__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43907_43909;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43906_43908;
}
return [cljs.core.str(sb__41678__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__41617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__41618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__41619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__41620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__41621__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__41621__auto__,method_table__41617__auto__,prefer_table__41618__auto__,method_cache__41619__auto__,cached_hierarchy__41620__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__43910 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__43910,(0),null);
var flags = cljs.core.nth.call(null,vec__43910,(1),null);
var pattern = cljs.core.nth.call(null,vec__43910,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__43912){
var map__43913 = p__43912;
var map__43913__$1 = ((((!((map__43913 == null)))?((((map__43913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43913):map__43913);
var arg = map__43913__$1;
var info = cljs.core.get.call(null,map__43913__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__43913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__43913__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__40692__auto__ = js_module_name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__43915 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__43915);
} else {
return G__43915;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__43916){
var map__43917 = p__43916;
var map__43917__$1 = ((((!((map__43917 == null)))?((((map__43917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43917):map__43917);
var arg = map__43917__$1;
var env = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__43919 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__43919__$1 = ((((!((map__43919 == null)))?((((map__43919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43919):map__43919);
var name = cljs.core.get.call(null,map__43919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__43921){
var map__43922 = p__43921;
var map__43922__$1 = ((((!((map__43922 == null)))?((((map__43922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43922):map__43922);
var expr = cljs.core.get.call(null,map__43922__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__43922__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__43922__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__43924_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43924_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__43925){
var map__43926 = p__43925;
var map__43926__$1 = ((((!((map__43926 == null)))?((((map__43926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43926):map__43926);
var env = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__43928){
var map__43929 = p__43928;
var map__43929__$1 = ((((!((map__43929 == null)))?((((map__43929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43929):map__43929);
var items = cljs.core.get.call(null,map__43929__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__43929__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__43931){
var map__43932 = p__43931;
var map__43932__$1 = ((((!((map__43932 == null)))?((((map__43932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43932):map__43932);
var items = cljs.core.get.call(null,map__43932__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__43932__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_43934 = cljs.core.count.call(null,items);
if((cnt_43934 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_43934,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__43935_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43935_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__43936){
var map__43937 = p__43936;
var map__43937__$1 = ((((!((map__43937 == null)))?((((map__43937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43937):map__43937);
var items = cljs.core.get.call(null,map__43937__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__43937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__43939){
var map__43940 = p__43939;
var map__43940__$1 = ((((!((map__43940 == null)))?((((map__43940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43940):map__43940);
var items = cljs.core.get.call(null,map__43940__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__43940__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__43940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4657__auto___43950 = cljs.core.seq.call(null,items);
if(temp__4657__auto___43950){
var items_43951__$1 = temp__4657__auto___43950;
var vec__43942_43952 = items_43951__$1;
var vec__43943_43953 = cljs.core.nth.call(null,vec__43942_43952,(0),null);
var k_43954 = cljs.core.nth.call(null,vec__43943_43953,(0),null);
var v_43955 = cljs.core.nth.call(null,vec__43943_43953,(1),null);
var r_43956 = cljs.core.nthnext.call(null,vec__43942_43952,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_43954),"\": ",v_43955);

var seq__43944_43957 = cljs.core.seq.call(null,r_43956);
var chunk__43945_43958 = null;
var count__43946_43959 = (0);
var i__43947_43960 = (0);
while(true){
if((i__43947_43960 < count__43946_43959)){
var vec__43948_43961 = cljs.core._nth.call(null,chunk__43945_43958,i__43947_43960);
var k_43962__$1 = cljs.core.nth.call(null,vec__43948_43961,(0),null);
var v_43963__$1 = cljs.core.nth.call(null,vec__43948_43961,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_43962__$1),"\": ",v_43963__$1);

var G__43964 = seq__43944_43957;
var G__43965 = chunk__43945_43958;
var G__43966 = count__43946_43959;
var G__43967 = (i__43947_43960 + (1));
seq__43944_43957 = G__43964;
chunk__43945_43958 = G__43965;
count__43946_43959 = G__43966;
i__43947_43960 = G__43967;
continue;
} else {
var temp__4657__auto___43968__$1 = cljs.core.seq.call(null,seq__43944_43957);
if(temp__4657__auto___43968__$1){
var seq__43944_43969__$1 = temp__4657__auto___43968__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43944_43969__$1)){
var c__41503__auto___43970 = cljs.core.chunk_first.call(null,seq__43944_43969__$1);
var G__43971 = cljs.core.chunk_rest.call(null,seq__43944_43969__$1);
var G__43972 = c__41503__auto___43970;
var G__43973 = cljs.core.count.call(null,c__41503__auto___43970);
var G__43974 = (0);
seq__43944_43957 = G__43971;
chunk__43945_43958 = G__43972;
count__43946_43959 = G__43973;
i__43947_43960 = G__43974;
continue;
} else {
var vec__43949_43975 = cljs.core.first.call(null,seq__43944_43969__$1);
var k_43976__$1 = cljs.core.nth.call(null,vec__43949_43975,(0),null);
var v_43977__$1 = cljs.core.nth.call(null,vec__43949_43975,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_43976__$1),"\": ",v_43977__$1);

var G__43978 = cljs.core.next.call(null,seq__43944_43969__$1);
var G__43979 = null;
var G__43980 = (0);
var G__43981 = (0);
seq__43944_43957 = G__43978;
chunk__43945_43958 = G__43979;
count__43946_43959 = G__43980;
i__43947_43960 = G__43981;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__43982){
var map__43983 = p__43982;
var map__43983__$1 = ((((!((map__43983 == null)))?((((map__43983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43983):map__43983);
var form = cljs.core.get.call(null,map__43983__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__43983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__43985){
var map__43988 = p__43985;
var map__43988__$1 = ((((!((map__43988 == null)))?((((map__43988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43988):map__43988);
var op = cljs.core.get.call(null,map__43988__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__43988__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__40680__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__40680__auto__){
var and__40680__auto____$1 = form;
if(cljs.core.truth_(and__40680__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__43990){
var map__43993 = p__43990;
var map__43993__$1 = ((((!((map__43993 == null)))?((((map__43993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43993):map__43993);
var op = cljs.core.get.call(null,map__43993__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__43993__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__40692__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__43995){
var map__43996 = p__43995;
var map__43996__$1 = ((((!((map__43996 == null)))?((((map__43996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43996):map__43996);
var test = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__40692__auto__ = unchecked;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__43998){
var map__43999 = p__43998;
var map__43999__$1 = ((((!((map__43999 == null)))?((((map__43999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43999):map__43999);
var v = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__44001_44015 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__44002_44016 = null;
var count__44003_44017 = (0);
var i__44004_44018 = (0);
while(true){
if((i__44004_44018 < count__44003_44017)){
var vec__44005_44019 = cljs.core._nth.call(null,chunk__44002_44016,i__44004_44018);
var ts_44020 = cljs.core.nth.call(null,vec__44005_44019,(0),null);
var then_44021 = cljs.core.nth.call(null,vec__44005_44019,(1),null);
var seq__44006_44022 = cljs.core.seq.call(null,ts_44020);
var chunk__44007_44023 = null;
var count__44008_44024 = (0);
var i__44009_44025 = (0);
while(true){
if((i__44009_44025 < count__44008_44024)){
var test_44026 = cljs.core._nth.call(null,chunk__44007_44023,i__44009_44025);
cljs.compiler.emitln.call(null,"case ",test_44026,":");

var G__44027 = seq__44006_44022;
var G__44028 = chunk__44007_44023;
var G__44029 = count__44008_44024;
var G__44030 = (i__44009_44025 + (1));
seq__44006_44022 = G__44027;
chunk__44007_44023 = G__44028;
count__44008_44024 = G__44029;
i__44009_44025 = G__44030;
continue;
} else {
var temp__4657__auto___44031 = cljs.core.seq.call(null,seq__44006_44022);
if(temp__4657__auto___44031){
var seq__44006_44032__$1 = temp__4657__auto___44031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44006_44032__$1)){
var c__41503__auto___44033 = cljs.core.chunk_first.call(null,seq__44006_44032__$1);
var G__44034 = cljs.core.chunk_rest.call(null,seq__44006_44032__$1);
var G__44035 = c__41503__auto___44033;
var G__44036 = cljs.core.count.call(null,c__41503__auto___44033);
var G__44037 = (0);
seq__44006_44022 = G__44034;
chunk__44007_44023 = G__44035;
count__44008_44024 = G__44036;
i__44009_44025 = G__44037;
continue;
} else {
var test_44038 = cljs.core.first.call(null,seq__44006_44032__$1);
cljs.compiler.emitln.call(null,"case ",test_44038,":");

var G__44039 = cljs.core.next.call(null,seq__44006_44032__$1);
var G__44040 = null;
var G__44041 = (0);
var G__44042 = (0);
seq__44006_44022 = G__44039;
chunk__44007_44023 = G__44040;
count__44008_44024 = G__44041;
i__44009_44025 = G__44042;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_44021);
} else {
cljs.compiler.emitln.call(null,then_44021);
}

cljs.compiler.emitln.call(null,"break;");

var G__44043 = seq__44001_44015;
var G__44044 = chunk__44002_44016;
var G__44045 = count__44003_44017;
var G__44046 = (i__44004_44018 + (1));
seq__44001_44015 = G__44043;
chunk__44002_44016 = G__44044;
count__44003_44017 = G__44045;
i__44004_44018 = G__44046;
continue;
} else {
var temp__4657__auto___44047 = cljs.core.seq.call(null,seq__44001_44015);
if(temp__4657__auto___44047){
var seq__44001_44048__$1 = temp__4657__auto___44047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44001_44048__$1)){
var c__41503__auto___44049 = cljs.core.chunk_first.call(null,seq__44001_44048__$1);
var G__44050 = cljs.core.chunk_rest.call(null,seq__44001_44048__$1);
var G__44051 = c__41503__auto___44049;
var G__44052 = cljs.core.count.call(null,c__41503__auto___44049);
var G__44053 = (0);
seq__44001_44015 = G__44050;
chunk__44002_44016 = G__44051;
count__44003_44017 = G__44052;
i__44004_44018 = G__44053;
continue;
} else {
var vec__44010_44054 = cljs.core.first.call(null,seq__44001_44048__$1);
var ts_44055 = cljs.core.nth.call(null,vec__44010_44054,(0),null);
var then_44056 = cljs.core.nth.call(null,vec__44010_44054,(1),null);
var seq__44011_44057 = cljs.core.seq.call(null,ts_44055);
var chunk__44012_44058 = null;
var count__44013_44059 = (0);
var i__44014_44060 = (0);
while(true){
if((i__44014_44060 < count__44013_44059)){
var test_44061 = cljs.core._nth.call(null,chunk__44012_44058,i__44014_44060);
cljs.compiler.emitln.call(null,"case ",test_44061,":");

var G__44062 = seq__44011_44057;
var G__44063 = chunk__44012_44058;
var G__44064 = count__44013_44059;
var G__44065 = (i__44014_44060 + (1));
seq__44011_44057 = G__44062;
chunk__44012_44058 = G__44063;
count__44013_44059 = G__44064;
i__44014_44060 = G__44065;
continue;
} else {
var temp__4657__auto___44066__$1 = cljs.core.seq.call(null,seq__44011_44057);
if(temp__4657__auto___44066__$1){
var seq__44011_44067__$1 = temp__4657__auto___44066__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44011_44067__$1)){
var c__41503__auto___44068 = cljs.core.chunk_first.call(null,seq__44011_44067__$1);
var G__44069 = cljs.core.chunk_rest.call(null,seq__44011_44067__$1);
var G__44070 = c__41503__auto___44068;
var G__44071 = cljs.core.count.call(null,c__41503__auto___44068);
var G__44072 = (0);
seq__44011_44057 = G__44069;
chunk__44012_44058 = G__44070;
count__44013_44059 = G__44071;
i__44014_44060 = G__44072;
continue;
} else {
var test_44073 = cljs.core.first.call(null,seq__44011_44067__$1);
cljs.compiler.emitln.call(null,"case ",test_44073,":");

var G__44074 = cljs.core.next.call(null,seq__44011_44067__$1);
var G__44075 = null;
var G__44076 = (0);
var G__44077 = (0);
seq__44011_44057 = G__44074;
chunk__44012_44058 = G__44075;
count__44013_44059 = G__44076;
i__44014_44060 = G__44077;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_44056);
} else {
cljs.compiler.emitln.call(null,then_44056);
}

cljs.compiler.emitln.call(null,"break;");

var G__44078 = cljs.core.next.call(null,seq__44001_44048__$1);
var G__44079 = null;
var G__44080 = (0);
var G__44081 = (0);
seq__44001_44015 = G__44078;
chunk__44002_44016 = G__44079;
count__44003_44017 = G__44080;
i__44004_44018 = G__44081;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__44082){
var map__44083 = p__44082;
var map__44083__$1 = ((((!((map__44083 == null)))?((((map__44083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44083):map__44083);
var throw$ = cljs.core.get.call(null,map__44083__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__44083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__44088 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__44088,(0),null);
var rstr = cljs.core.nth.call(null,vec__44088,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__44088,fstr,rstr,ret_t,axstr){
return (function (p1__44085_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__44085_SHARP_);
});})(idx,vec__44088,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__44089 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__44089),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__44089;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__44090_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__44090_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__44093 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__44093,(0),null);
var ts = cljs.core.nth.call(null,vec__44093,(1),null);
var n = cljs.core.nth.call(null,vec__44093,(2),null);
var xs = cljs.core.nthnext.call(null,vec__44093,(3));
if(cljs.core.truth_((function (){var and__40680__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__40680__auto__){
var and__40680__auto____$1 = ts;
if(cljs.core.truth_(and__40680__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__44094 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__44094,(0),null);
var ts = cljs.core.nth.call(null,vec__44094,(1),null);
var xs = cljs.core.nthnext.call(null,vec__44094,(2));
if(cljs.core.truth_((function (){var and__40680__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__40680__auto__){
var and__40680__auto____$1 = ts;
if(cljs.core.truth_(and__40680__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args44096 = [];
var len__41762__auto___44123 = arguments.length;
var i__41763__auto___44124 = (0);
while(true){
if((i__41763__auto___44124 < len__41762__auto___44123)){
args44096.push((arguments[i__41763__auto___44124]));

var G__44125 = (i__41763__auto___44124 + (1));
i__41763__auto___44124 = G__44125;
continue;
} else {
}
break;
}

var G__44098 = args44096.length;
switch (G__44098) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44096.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__44114 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__44095_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__44095_SHARP_);
} else {
return p1__44095_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__44114,(0),null);
var ys = cljs.core.nthnext.call(null,vec__44114,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__44115 = cljs.core.seq.call(null,ys);
var chunk__44116 = null;
var count__44117 = (0);
var i__44118 = (0);
while(true){
if((i__44118 < count__44117)){
var next_line = cljs.core._nth.call(null,chunk__44116,i__44118);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__44127 = seq__44115;
var G__44128 = chunk__44116;
var G__44129 = count__44117;
var G__44130 = (i__44118 + (1));
seq__44115 = G__44127;
chunk__44116 = G__44128;
count__44117 = G__44129;
i__44118 = G__44130;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44115);
if(temp__4657__auto__){
var seq__44115__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44115__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__44115__$1);
var G__44131 = cljs.core.chunk_rest.call(null,seq__44115__$1);
var G__44132 = c__41503__auto__;
var G__44133 = cljs.core.count.call(null,c__41503__auto__);
var G__44134 = (0);
seq__44115 = G__44131;
chunk__44116 = G__44132;
count__44117 = G__44133;
i__44118 = G__44134;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__44115__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__44135 = cljs.core.next.call(null,seq__44115__$1);
var G__44136 = null;
var G__44137 = (0);
var G__44138 = (0);
seq__44115 = G__44135;
chunk__44116 = G__44136;
count__44117 = G__44137;
i__44118 = G__44138;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__44119_44139 = cljs.core.seq.call(null,docs__$2);
var chunk__44120_44140 = null;
var count__44121_44141 = (0);
var i__44122_44142 = (0);
while(true){
if((i__44122_44142 < count__44121_44141)){
var e_44143 = cljs.core._nth.call(null,chunk__44120_44140,i__44122_44142);
if(cljs.core.truth_(e_44143)){
print_comment_lines.call(null,e_44143);
} else {
}

var G__44144 = seq__44119_44139;
var G__44145 = chunk__44120_44140;
var G__44146 = count__44121_44141;
var G__44147 = (i__44122_44142 + (1));
seq__44119_44139 = G__44144;
chunk__44120_44140 = G__44145;
count__44121_44141 = G__44146;
i__44122_44142 = G__44147;
continue;
} else {
var temp__4657__auto___44148 = cljs.core.seq.call(null,seq__44119_44139);
if(temp__4657__auto___44148){
var seq__44119_44149__$1 = temp__4657__auto___44148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44119_44149__$1)){
var c__41503__auto___44150 = cljs.core.chunk_first.call(null,seq__44119_44149__$1);
var G__44151 = cljs.core.chunk_rest.call(null,seq__44119_44149__$1);
var G__44152 = c__41503__auto___44150;
var G__44153 = cljs.core.count.call(null,c__41503__auto___44150);
var G__44154 = (0);
seq__44119_44139 = G__44151;
chunk__44120_44140 = G__44152;
count__44121_44141 = G__44153;
i__44122_44142 = G__44154;
continue;
} else {
var e_44155 = cljs.core.first.call(null,seq__44119_44149__$1);
if(cljs.core.truth_(e_44155)){
print_comment_lines.call(null,e_44155);
} else {
}

var G__44156 = cljs.core.next.call(null,seq__44119_44149__$1);
var G__44157 = null;
var G__44158 = (0);
var G__44159 = (0);
seq__44119_44139 = G__44156;
chunk__44120_44140 = G__44157;
count__44121_44141 = G__44158;
i__44122_44142 = G__44159;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__40680__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__44161_SHARP_){
return goog.string.startsWith(p1__44161_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__40680__auto__)){
var and__40680__auto____$1 = opts;
if(cljs.core.truth_(and__40680__auto____$1)){
var and__40680__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__40680__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__40680__auto____$2;
}
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__44162){
var map__44163 = p__44162;
var map__44163__$1 = ((((!((map__44163 == null)))?((((map__44163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44163):map__44163);
var name = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__40692__auto__ = init;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__40680__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__40680__auto__)){
return test;
} else {
return and__40680__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__44165){
var map__44182 = p__44165;
var map__44182__$1 = ((((!((map__44182 == null)))?((((map__44182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44182):map__44182);
var name = cljs.core.get.call(null,map__44182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__44182__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__44182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__44184_44198 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__44185_44199 = null;
var count__44186_44200 = (0);
var i__44187_44201 = (0);
while(true){
if((i__44187_44201 < count__44186_44200)){
var vec__44188_44202 = cljs.core._nth.call(null,chunk__44185_44199,i__44187_44201);
var i_44203 = cljs.core.nth.call(null,vec__44188_44202,(0),null);
var param_44204 = cljs.core.nth.call(null,vec__44188_44202,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_44204);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__44205 = seq__44184_44198;
var G__44206 = chunk__44185_44199;
var G__44207 = count__44186_44200;
var G__44208 = (i__44187_44201 + (1));
seq__44184_44198 = G__44205;
chunk__44185_44199 = G__44206;
count__44186_44200 = G__44207;
i__44187_44201 = G__44208;
continue;
} else {
var temp__4657__auto___44209 = cljs.core.seq.call(null,seq__44184_44198);
if(temp__4657__auto___44209){
var seq__44184_44210__$1 = temp__4657__auto___44209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44184_44210__$1)){
var c__41503__auto___44211 = cljs.core.chunk_first.call(null,seq__44184_44210__$1);
var G__44212 = cljs.core.chunk_rest.call(null,seq__44184_44210__$1);
var G__44213 = c__41503__auto___44211;
var G__44214 = cljs.core.count.call(null,c__41503__auto___44211);
var G__44215 = (0);
seq__44184_44198 = G__44212;
chunk__44185_44199 = G__44213;
count__44186_44200 = G__44214;
i__44187_44201 = G__44215;
continue;
} else {
var vec__44189_44216 = cljs.core.first.call(null,seq__44184_44210__$1);
var i_44217 = cljs.core.nth.call(null,vec__44189_44216,(0),null);
var param_44218 = cljs.core.nth.call(null,vec__44189_44216,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_44218);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__44219 = cljs.core.next.call(null,seq__44184_44210__$1);
var G__44220 = null;
var G__44221 = (0);
var G__44222 = (0);
seq__44184_44198 = G__44219;
chunk__44185_44199 = G__44220;
count__44186_44200 = G__44221;
i__44187_44201 = G__44222;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__44190_44223 = cljs.core.seq.call(null,params);
var chunk__44191_44224 = null;
var count__44192_44225 = (0);
var i__44193_44226 = (0);
while(true){
if((i__44193_44226 < count__44192_44225)){
var param_44227 = cljs.core._nth.call(null,chunk__44191_44224,i__44193_44226);
cljs.compiler.emit.call(null,param_44227);

if(cljs.core._EQ_.call(null,param_44227,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44228 = seq__44190_44223;
var G__44229 = chunk__44191_44224;
var G__44230 = count__44192_44225;
var G__44231 = (i__44193_44226 + (1));
seq__44190_44223 = G__44228;
chunk__44191_44224 = G__44229;
count__44192_44225 = G__44230;
i__44193_44226 = G__44231;
continue;
} else {
var temp__4657__auto___44232 = cljs.core.seq.call(null,seq__44190_44223);
if(temp__4657__auto___44232){
var seq__44190_44233__$1 = temp__4657__auto___44232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44190_44233__$1)){
var c__41503__auto___44234 = cljs.core.chunk_first.call(null,seq__44190_44233__$1);
var G__44235 = cljs.core.chunk_rest.call(null,seq__44190_44233__$1);
var G__44236 = c__41503__auto___44234;
var G__44237 = cljs.core.count.call(null,c__41503__auto___44234);
var G__44238 = (0);
seq__44190_44223 = G__44235;
chunk__44191_44224 = G__44236;
count__44192_44225 = G__44237;
i__44193_44226 = G__44238;
continue;
} else {
var param_44239 = cljs.core.first.call(null,seq__44190_44233__$1);
cljs.compiler.emit.call(null,param_44239);

if(cljs.core._EQ_.call(null,param_44239,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44240 = cljs.core.next.call(null,seq__44190_44233__$1);
var G__44241 = null;
var G__44242 = (0);
var G__44243 = (0);
seq__44190_44223 = G__44240;
chunk__44191_44224 = G__44241;
count__44192_44225 = G__44242;
i__44193_44226 = G__44243;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__44194_44244 = cljs.core.seq.call(null,params);
var chunk__44195_44245 = null;
var count__44196_44246 = (0);
var i__44197_44247 = (0);
while(true){
if((i__44197_44247 < count__44196_44246)){
var param_44248 = cljs.core._nth.call(null,chunk__44195_44245,i__44197_44247);
cljs.compiler.emit.call(null,param_44248);

if(cljs.core._EQ_.call(null,param_44248,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44249 = seq__44194_44244;
var G__44250 = chunk__44195_44245;
var G__44251 = count__44196_44246;
var G__44252 = (i__44197_44247 + (1));
seq__44194_44244 = G__44249;
chunk__44195_44245 = G__44250;
count__44196_44246 = G__44251;
i__44197_44247 = G__44252;
continue;
} else {
var temp__4657__auto___44253 = cljs.core.seq.call(null,seq__44194_44244);
if(temp__4657__auto___44253){
var seq__44194_44254__$1 = temp__4657__auto___44253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44194_44254__$1)){
var c__41503__auto___44255 = cljs.core.chunk_first.call(null,seq__44194_44254__$1);
var G__44256 = cljs.core.chunk_rest.call(null,seq__44194_44254__$1);
var G__44257 = c__41503__auto___44255;
var G__44258 = cljs.core.count.call(null,c__41503__auto___44255);
var G__44259 = (0);
seq__44194_44244 = G__44256;
chunk__44195_44245 = G__44257;
count__44196_44246 = G__44258;
i__44197_44247 = G__44259;
continue;
} else {
var param_44260 = cljs.core.first.call(null,seq__44194_44254__$1);
cljs.compiler.emit.call(null,param_44260);

if(cljs.core._EQ_.call(null,param_44260,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44261 = cljs.core.next.call(null,seq__44194_44254__$1);
var G__44262 = null;
var G__44263 = (0);
var G__44264 = (0);
seq__44194_44244 = G__44261;
chunk__44195_44245 = G__44262;
count__44196_44246 = G__44263;
i__44197_44247 = G__44264;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__44269 = cljs.core.seq.call(null,params);
var chunk__44270 = null;
var count__44271 = (0);
var i__44272 = (0);
while(true){
if((i__44272 < count__44271)){
var param = cljs.core._nth.call(null,chunk__44270,i__44272);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44273 = seq__44269;
var G__44274 = chunk__44270;
var G__44275 = count__44271;
var G__44276 = (i__44272 + (1));
seq__44269 = G__44273;
chunk__44270 = G__44274;
count__44271 = G__44275;
i__44272 = G__44276;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44269);
if(temp__4657__auto__){
var seq__44269__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44269__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__44269__$1);
var G__44277 = cljs.core.chunk_rest.call(null,seq__44269__$1);
var G__44278 = c__41503__auto__;
var G__44279 = cljs.core.count.call(null,c__41503__auto__);
var G__44280 = (0);
seq__44269 = G__44277;
chunk__44270 = G__44278;
count__44271 = G__44279;
i__44272 = G__44280;
continue;
} else {
var param = cljs.core.first.call(null,seq__44269__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44281 = cljs.core.next.call(null,seq__44269__$1);
var G__44282 = null;
var G__44283 = (0);
var G__44284 = (0);
seq__44269 = G__44281;
chunk__44270 = G__44282;
count__44271 = G__44283;
i__44272 = G__44284;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__44285){
var map__44288 = p__44285;
var map__44288__$1 = ((((!((map__44288 == null)))?((((map__44288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44288):map__44288);
var type = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__44288__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__44290){
var map__44301 = p__44290;
var map__44301__$1 = ((((!((map__44301 == null)))?((((map__44301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44301):map__44301);
var f = map__44301__$1;
var type = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__44301__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_44311__$1 = (function (){var or__40692__auto__ = name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_44312 = cljs.compiler.munge.call(null,name_44311__$1);
var delegate_name_44313 = [cljs.core.str(mname_44312),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_44313," = function (");

var seq__44303_44314 = cljs.core.seq.call(null,params);
var chunk__44304_44315 = null;
var count__44305_44316 = (0);
var i__44306_44317 = (0);
while(true){
if((i__44306_44317 < count__44305_44316)){
var param_44318 = cljs.core._nth.call(null,chunk__44304_44315,i__44306_44317);
cljs.compiler.emit.call(null,param_44318);

if(cljs.core._EQ_.call(null,param_44318,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44319 = seq__44303_44314;
var G__44320 = chunk__44304_44315;
var G__44321 = count__44305_44316;
var G__44322 = (i__44306_44317 + (1));
seq__44303_44314 = G__44319;
chunk__44304_44315 = G__44320;
count__44305_44316 = G__44321;
i__44306_44317 = G__44322;
continue;
} else {
var temp__4657__auto___44323 = cljs.core.seq.call(null,seq__44303_44314);
if(temp__4657__auto___44323){
var seq__44303_44324__$1 = temp__4657__auto___44323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44303_44324__$1)){
var c__41503__auto___44325 = cljs.core.chunk_first.call(null,seq__44303_44324__$1);
var G__44326 = cljs.core.chunk_rest.call(null,seq__44303_44324__$1);
var G__44327 = c__41503__auto___44325;
var G__44328 = cljs.core.count.call(null,c__41503__auto___44325);
var G__44329 = (0);
seq__44303_44314 = G__44326;
chunk__44304_44315 = G__44327;
count__44305_44316 = G__44328;
i__44306_44317 = G__44329;
continue;
} else {
var param_44330 = cljs.core.first.call(null,seq__44303_44324__$1);
cljs.compiler.emit.call(null,param_44330);

if(cljs.core._EQ_.call(null,param_44330,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44331 = cljs.core.next.call(null,seq__44303_44324__$1);
var G__44332 = null;
var G__44333 = (0);
var G__44334 = (0);
seq__44303_44314 = G__44331;
chunk__44304_44315 = G__44332;
count__44305_44316 = G__44333;
i__44306_44317 = G__44334;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_44312," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_44335 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_44335,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_44313,".call(this,");

var seq__44307_44336 = cljs.core.seq.call(null,params);
var chunk__44308_44337 = null;
var count__44309_44338 = (0);
var i__44310_44339 = (0);
while(true){
if((i__44310_44339 < count__44309_44338)){
var param_44340 = cljs.core._nth.call(null,chunk__44308_44337,i__44310_44339);
cljs.compiler.emit.call(null,param_44340);

if(cljs.core._EQ_.call(null,param_44340,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44341 = seq__44307_44336;
var G__44342 = chunk__44308_44337;
var G__44343 = count__44309_44338;
var G__44344 = (i__44310_44339 + (1));
seq__44307_44336 = G__44341;
chunk__44308_44337 = G__44342;
count__44309_44338 = G__44343;
i__44310_44339 = G__44344;
continue;
} else {
var temp__4657__auto___44345 = cljs.core.seq.call(null,seq__44307_44336);
if(temp__4657__auto___44345){
var seq__44307_44346__$1 = temp__4657__auto___44345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44307_44346__$1)){
var c__41503__auto___44347 = cljs.core.chunk_first.call(null,seq__44307_44346__$1);
var G__44348 = cljs.core.chunk_rest.call(null,seq__44307_44346__$1);
var G__44349 = c__41503__auto___44347;
var G__44350 = cljs.core.count.call(null,c__41503__auto___44347);
var G__44351 = (0);
seq__44307_44336 = G__44348;
chunk__44308_44337 = G__44349;
count__44309_44338 = G__44350;
i__44310_44339 = G__44351;
continue;
} else {
var param_44352 = cljs.core.first.call(null,seq__44307_44346__$1);
cljs.compiler.emit.call(null,param_44352);

if(cljs.core._EQ_.call(null,param_44352,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__44353 = cljs.core.next.call(null,seq__44307_44346__$1);
var G__44354 = null;
var G__44355 = (0);
var G__44356 = (0);
seq__44307_44336 = G__44353;
chunk__44308_44337 = G__44354;
count__44309_44338 = G__44355;
i__44310_44339 = G__44356;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_44312,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_44312,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_44311__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_44312,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_44313,";");

cljs.compiler.emitln.call(null,"return ",mname_44312,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__44360){
var map__44361 = p__44360;
var map__44361__$1 = ((((!((map__44361 == null)))?((((map__44361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44361):map__44361);
var name = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__44357_SHARP_){
var and__40680__auto__ = p1__44357_SHARP_;
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__44357_SHARP_));
} else {
return and__40680__auto__;
}
});})(map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_44382__$1 = (function (){var or__40692__auto__ = name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_44383 = cljs.compiler.munge.call(null,name_44382__$1);
var maxparams_44384 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_44385 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_44382__$1,mname_44383,maxparams_44384,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_44383),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_44382__$1,mname_44383,maxparams_44384,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_44386 = cljs.core.sort_by.call(null,((function (name_44382__$1,mname_44383,maxparams_44384,mmap_44385,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__44358_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__44358_SHARP_)));
});})(name_44382__$1,mname_44383,maxparams_44384,mmap_44385,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_44385));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_44383," = null;");

var seq__44363_44387 = cljs.core.seq.call(null,ms_44386);
var chunk__44364_44388 = null;
var count__44365_44389 = (0);
var i__44366_44390 = (0);
while(true){
if((i__44366_44390 < count__44365_44389)){
var vec__44367_44391 = cljs.core._nth.call(null,chunk__44364_44388,i__44366_44390);
var n_44392 = cljs.core.nth.call(null,vec__44367_44391,(0),null);
var meth_44393 = cljs.core.nth.call(null,vec__44367_44391,(1),null);
cljs.compiler.emits.call(null,"var ",n_44392," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44393))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_44393);
} else {
cljs.compiler.emit_fn_method.call(null,meth_44393);
}

cljs.compiler.emitln.call(null,";");

var G__44394 = seq__44363_44387;
var G__44395 = chunk__44364_44388;
var G__44396 = count__44365_44389;
var G__44397 = (i__44366_44390 + (1));
seq__44363_44387 = G__44394;
chunk__44364_44388 = G__44395;
count__44365_44389 = G__44396;
i__44366_44390 = G__44397;
continue;
} else {
var temp__4657__auto___44398 = cljs.core.seq.call(null,seq__44363_44387);
if(temp__4657__auto___44398){
var seq__44363_44399__$1 = temp__4657__auto___44398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44363_44399__$1)){
var c__41503__auto___44400 = cljs.core.chunk_first.call(null,seq__44363_44399__$1);
var G__44401 = cljs.core.chunk_rest.call(null,seq__44363_44399__$1);
var G__44402 = c__41503__auto___44400;
var G__44403 = cljs.core.count.call(null,c__41503__auto___44400);
var G__44404 = (0);
seq__44363_44387 = G__44401;
chunk__44364_44388 = G__44402;
count__44365_44389 = G__44403;
i__44366_44390 = G__44404;
continue;
} else {
var vec__44368_44405 = cljs.core.first.call(null,seq__44363_44399__$1);
var n_44406 = cljs.core.nth.call(null,vec__44368_44405,(0),null);
var meth_44407 = cljs.core.nth.call(null,vec__44368_44405,(1),null);
cljs.compiler.emits.call(null,"var ",n_44406," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44407))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_44407);
} else {
cljs.compiler.emit_fn_method.call(null,meth_44407);
}

cljs.compiler.emitln.call(null,";");

var G__44408 = cljs.core.next.call(null,seq__44363_44399__$1);
var G__44409 = null;
var G__44410 = (0);
var G__44411 = (0);
seq__44363_44387 = G__44408;
chunk__44364_44388 = G__44409;
count__44365_44389 = G__44410;
i__44366_44390 = G__44411;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_44383," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_44384),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_44384)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_44384));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__44369_44412 = cljs.core.seq.call(null,ms_44386);
var chunk__44370_44413 = null;
var count__44371_44414 = (0);
var i__44372_44415 = (0);
while(true){
if((i__44372_44415 < count__44371_44414)){
var vec__44373_44416 = cljs.core._nth.call(null,chunk__44370_44413,i__44372_44415);
var n_44417 = cljs.core.nth.call(null,vec__44373_44416,(0),null);
var meth_44418 = cljs.core.nth.call(null,vec__44373_44416,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44418))){
cljs.compiler.emitln.call(null,"default:");

var restarg_44419 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_44419," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_44420 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_44419," = new cljs.core.IndexedSeq(",a_44420,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_44417,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_44384)),(((cljs.core.count.call(null,maxparams_44384) > (1)))?", ":null),restarg_44419,");");
} else {
var pcnt_44421 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44418));
cljs.compiler.emitln.call(null,"case ",pcnt_44421,":");

cljs.compiler.emitln.call(null,"return ",n_44417,".call(this",(((pcnt_44421 === (0)))?null:cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_44421,maxparams_44384));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),",")),");");
}

var G__44422 = seq__44369_44412;
var G__44423 = chunk__44370_44413;
var G__44424 = count__44371_44414;
var G__44425 = (i__44372_44415 + (1));
seq__44369_44412 = G__44422;
chunk__44370_44413 = G__44423;
count__44371_44414 = G__44424;
i__44372_44415 = G__44425;
continue;
} else {
var temp__4657__auto___44426 = cljs.core.seq.call(null,seq__44369_44412);
if(temp__4657__auto___44426){
var seq__44369_44427__$1 = temp__4657__auto___44426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44369_44427__$1)){
var c__41503__auto___44428 = cljs.core.chunk_first.call(null,seq__44369_44427__$1);
var G__44429 = cljs.core.chunk_rest.call(null,seq__44369_44427__$1);
var G__44430 = c__41503__auto___44428;
var G__44431 = cljs.core.count.call(null,c__41503__auto___44428);
var G__44432 = (0);
seq__44369_44412 = G__44429;
chunk__44370_44413 = G__44430;
count__44371_44414 = G__44431;
i__44372_44415 = G__44432;
continue;
} else {
var vec__44374_44433 = cljs.core.first.call(null,seq__44369_44427__$1);
var n_44434 = cljs.core.nth.call(null,vec__44374_44433,(0),null);
var meth_44435 = cljs.core.nth.call(null,vec__44374_44433,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44435))){
cljs.compiler.emitln.call(null,"default:");

var restarg_44436 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_44436," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_44437 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_44436," = new cljs.core.IndexedSeq(",a_44437,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_44434,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_44384)),(((cljs.core.count.call(null,maxparams_44384) > (1)))?", ":null),restarg_44436,");");
} else {
var pcnt_44438 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44435));
cljs.compiler.emitln.call(null,"case ",pcnt_44438,":");

cljs.compiler.emitln.call(null,"return ",n_44434,".call(this",(((pcnt_44438 === (0)))?null:cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_44438,maxparams_44384));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),",")),");");
}

var G__44439 = cljs.core.next.call(null,seq__44369_44427__$1);
var G__44440 = null;
var G__44441 = (0);
var G__44442 = (0);
seq__44369_44412 = G__44439;
chunk__44370_44413 = G__44440;
count__44371_44414 = G__44441;
i__44372_44415 = G__44442;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_44383,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_44383,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_44382__$1,mname_44383,maxparams_44384,mmap_44385,ms_44386,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__44359_SHARP_){
var vec__44375 = p1__44359_SHARP_;
var n = cljs.core.nth.call(null,vec__44375,(0),null);
var m = cljs.core.nth.call(null,vec__44375,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_44382__$1,mname_44383,maxparams_44384,mmap_44385,ms_44386,loop_locals,map__44361,map__44361__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_44386),".cljs$lang$applyTo;");
} else {
}

var seq__44376_44443 = cljs.core.seq.call(null,ms_44386);
var chunk__44377_44444 = null;
var count__44378_44445 = (0);
var i__44379_44446 = (0);
while(true){
if((i__44379_44446 < count__44378_44445)){
var vec__44380_44447 = cljs.core._nth.call(null,chunk__44377_44444,i__44379_44446);
var n_44448 = cljs.core.nth.call(null,vec__44380_44447,(0),null);
var meth_44449 = cljs.core.nth.call(null,vec__44380_44447,(1),null);
var c_44450 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44449));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44449))){
cljs.compiler.emitln.call(null,mname_44383,".cljs$core$IFn$_invoke$arity$variadic = ",n_44448,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_44383,".cljs$core$IFn$_invoke$arity$",c_44450," = ",n_44448,";");
}

var G__44451 = seq__44376_44443;
var G__44452 = chunk__44377_44444;
var G__44453 = count__44378_44445;
var G__44454 = (i__44379_44446 + (1));
seq__44376_44443 = G__44451;
chunk__44377_44444 = G__44452;
count__44378_44445 = G__44453;
i__44379_44446 = G__44454;
continue;
} else {
var temp__4657__auto___44455 = cljs.core.seq.call(null,seq__44376_44443);
if(temp__4657__auto___44455){
var seq__44376_44456__$1 = temp__4657__auto___44455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44376_44456__$1)){
var c__41503__auto___44457 = cljs.core.chunk_first.call(null,seq__44376_44456__$1);
var G__44458 = cljs.core.chunk_rest.call(null,seq__44376_44456__$1);
var G__44459 = c__41503__auto___44457;
var G__44460 = cljs.core.count.call(null,c__41503__auto___44457);
var G__44461 = (0);
seq__44376_44443 = G__44458;
chunk__44377_44444 = G__44459;
count__44378_44445 = G__44460;
i__44379_44446 = G__44461;
continue;
} else {
var vec__44381_44462 = cljs.core.first.call(null,seq__44376_44456__$1);
var n_44463 = cljs.core.nth.call(null,vec__44381_44462,(0),null);
var meth_44464 = cljs.core.nth.call(null,vec__44381_44462,(1),null);
var c_44465 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_44464))){
cljs.compiler.emitln.call(null,mname_44383,".cljs$core$IFn$_invoke$arity$variadic = ",n_44463,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_44383,".cljs$core$IFn$_invoke$arity$",c_44465," = ",n_44463,";");
}

var G__44466 = cljs.core.next.call(null,seq__44376_44456__$1);
var G__44467 = null;
var G__44468 = (0);
var G__44469 = (0);
seq__44376_44443 = G__44466;
chunk__44377_44444 = G__44467;
count__44378_44445 = G__44468;
i__44379_44446 = G__44469;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_44383,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__44470){
var map__44471 = p__44470;
var map__44471__$1 = ((((!((map__44471 == null)))?((((map__44471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44471):map__44471);
var statements = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__40680__auto__ = statements;
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__40680__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__44473_44477 = cljs.core.seq.call(null,statements);
var chunk__44474_44478 = null;
var count__44475_44479 = (0);
var i__44476_44480 = (0);
while(true){
if((i__44476_44480 < count__44475_44479)){
var s_44481 = cljs.core._nth.call(null,chunk__44474_44478,i__44476_44480);
cljs.compiler.emitln.call(null,s_44481);

var G__44482 = seq__44473_44477;
var G__44483 = chunk__44474_44478;
var G__44484 = count__44475_44479;
var G__44485 = (i__44476_44480 + (1));
seq__44473_44477 = G__44482;
chunk__44474_44478 = G__44483;
count__44475_44479 = G__44484;
i__44476_44480 = G__44485;
continue;
} else {
var temp__4657__auto___44486 = cljs.core.seq.call(null,seq__44473_44477);
if(temp__4657__auto___44486){
var seq__44473_44487__$1 = temp__4657__auto___44486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44473_44487__$1)){
var c__41503__auto___44488 = cljs.core.chunk_first.call(null,seq__44473_44487__$1);
var G__44489 = cljs.core.chunk_rest.call(null,seq__44473_44487__$1);
var G__44490 = c__41503__auto___44488;
var G__44491 = cljs.core.count.call(null,c__41503__auto___44488);
var G__44492 = (0);
seq__44473_44477 = G__44489;
chunk__44474_44478 = G__44490;
count__44475_44479 = G__44491;
i__44476_44480 = G__44492;
continue;
} else {
var s_44493 = cljs.core.first.call(null,seq__44473_44487__$1);
cljs.compiler.emitln.call(null,s_44493);

var G__44494 = cljs.core.next.call(null,seq__44473_44487__$1);
var G__44495 = null;
var G__44496 = (0);
var G__44497 = (0);
seq__44473_44477 = G__44494;
chunk__44474_44478 = G__44495;
count__44475_44479 = G__44496;
i__44476_44480 = G__44497;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__40680__auto__ = statements;
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__40680__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__44498){
var map__44499 = p__44498;
var map__44499__$1 = ((((!((map__44499 == null)))?((((map__44499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44499):map__44499);
var env = cljs.core.get.call(null,map__44499__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__44499__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__44499__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__44499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__44499__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__40692__auto__ = name;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__44501,is_loop){
var map__44513 = p__44501;
var map__44513__$1 = ((((!((map__44513 == null)))?((((map__44513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44513):map__44513);
var bindings = cljs.core.get.call(null,map__44513__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__44513__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__44513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_44515_44524 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_44515_44524,context,map__44513,map__44513__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_44515_44524,context,map__44513,map__44513__$1,bindings,expr,env))
,bindings):null));

try{var seq__44516_44525 = cljs.core.seq.call(null,bindings);
var chunk__44517_44526 = null;
var count__44518_44527 = (0);
var i__44519_44528 = (0);
while(true){
if((i__44519_44528 < count__44518_44527)){
var map__44520_44529 = cljs.core._nth.call(null,chunk__44517_44526,i__44519_44528);
var map__44520_44530__$1 = ((((!((map__44520_44529 == null)))?((((map__44520_44529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44520_44529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44520_44529):map__44520_44529);
var binding_44531 = map__44520_44530__$1;
var init_44532 = cljs.core.get.call(null,map__44520_44530__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_44531);

cljs.compiler.emitln.call(null," = ",init_44532,";");

var G__44533 = seq__44516_44525;
var G__44534 = chunk__44517_44526;
var G__44535 = count__44518_44527;
var G__44536 = (i__44519_44528 + (1));
seq__44516_44525 = G__44533;
chunk__44517_44526 = G__44534;
count__44518_44527 = G__44535;
i__44519_44528 = G__44536;
continue;
} else {
var temp__4657__auto___44537 = cljs.core.seq.call(null,seq__44516_44525);
if(temp__4657__auto___44537){
var seq__44516_44538__$1 = temp__4657__auto___44537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44516_44538__$1)){
var c__41503__auto___44539 = cljs.core.chunk_first.call(null,seq__44516_44538__$1);
var G__44540 = cljs.core.chunk_rest.call(null,seq__44516_44538__$1);
var G__44541 = c__41503__auto___44539;
var G__44542 = cljs.core.count.call(null,c__41503__auto___44539);
var G__44543 = (0);
seq__44516_44525 = G__44540;
chunk__44517_44526 = G__44541;
count__44518_44527 = G__44542;
i__44519_44528 = G__44543;
continue;
} else {
var map__44522_44544 = cljs.core.first.call(null,seq__44516_44538__$1);
var map__44522_44545__$1 = ((((!((map__44522_44544 == null)))?((((map__44522_44544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44522_44544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44522_44544):map__44522_44544);
var binding_44546 = map__44522_44545__$1;
var init_44547 = cljs.core.get.call(null,map__44522_44545__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_44546);

cljs.compiler.emitln.call(null," = ",init_44547,";");

var G__44548 = cljs.core.next.call(null,seq__44516_44538__$1);
var G__44549 = null;
var G__44550 = (0);
var G__44551 = (0);
seq__44516_44525 = G__44548;
chunk__44517_44526 = G__44549;
count__44518_44527 = G__44550;
i__44519_44528 = G__44551;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_44515_44524;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__44552){
var map__44553 = p__44552;
var map__44553__$1 = ((((!((map__44553 == null)))?((((map__44553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44553):map__44553);
var frame = cljs.core.get.call(null,map__44553__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__44553__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__44553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__41607__auto___44555 = cljs.core.count.call(null,exprs);
var i_44556 = (0);
while(true){
if((i_44556 < n__41607__auto___44555)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_44556)," = ",exprs.call(null,i_44556),";");

var G__44557 = (i_44556 + (1));
i_44556 = G__44557;
continue;
} else {
}
break;
}

var n__41607__auto___44558 = cljs.core.count.call(null,exprs);
var i_44559 = (0);
while(true){
if((i_44559 < n__41607__auto___44558)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_44559))," = ",temps.call(null,i_44559),";");

var G__44560 = (i_44559 + (1));
i_44559 = G__44560;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__44561){
var map__44562 = p__44561;
var map__44562__$1 = ((((!((map__44562 == null)))?((((map__44562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44562):map__44562);
var bindings = cljs.core.get.call(null,map__44562__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__44562__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__44562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__44564_44572 = cljs.core.seq.call(null,bindings);
var chunk__44565_44573 = null;
var count__44566_44574 = (0);
var i__44567_44575 = (0);
while(true){
if((i__44567_44575 < count__44566_44574)){
var map__44568_44576 = cljs.core._nth.call(null,chunk__44565_44573,i__44567_44575);
var map__44568_44577__$1 = ((((!((map__44568_44576 == null)))?((((map__44568_44576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44568_44576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44568_44576):map__44568_44576);
var binding_44578 = map__44568_44577__$1;
var init_44579 = cljs.core.get.call(null,map__44568_44577__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_44578)," = ",init_44579,";");

var G__44580 = seq__44564_44572;
var G__44581 = chunk__44565_44573;
var G__44582 = count__44566_44574;
var G__44583 = (i__44567_44575 + (1));
seq__44564_44572 = G__44580;
chunk__44565_44573 = G__44581;
count__44566_44574 = G__44582;
i__44567_44575 = G__44583;
continue;
} else {
var temp__4657__auto___44584 = cljs.core.seq.call(null,seq__44564_44572);
if(temp__4657__auto___44584){
var seq__44564_44585__$1 = temp__4657__auto___44584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44564_44585__$1)){
var c__41503__auto___44586 = cljs.core.chunk_first.call(null,seq__44564_44585__$1);
var G__44587 = cljs.core.chunk_rest.call(null,seq__44564_44585__$1);
var G__44588 = c__41503__auto___44586;
var G__44589 = cljs.core.count.call(null,c__41503__auto___44586);
var G__44590 = (0);
seq__44564_44572 = G__44587;
chunk__44565_44573 = G__44588;
count__44566_44574 = G__44589;
i__44567_44575 = G__44590;
continue;
} else {
var map__44570_44591 = cljs.core.first.call(null,seq__44564_44585__$1);
var map__44570_44592__$1 = ((((!((map__44570_44591 == null)))?((((map__44570_44591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44570_44591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44570_44591):map__44570_44591);
var binding_44593 = map__44570_44592__$1;
var init_44594 = cljs.core.get.call(null,map__44570_44592__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_44593)," = ",init_44594,";");

var G__44595 = cljs.core.next.call(null,seq__44564_44585__$1);
var G__44596 = null;
var G__44597 = (0);
var G__44598 = (0);
seq__44564_44572 = G__44595;
chunk__44565_44573 = G__44596;
count__44566_44574 = G__44597;
i__44567_44575 = G__44598;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__44601){
var map__44602 = p__44601;
var map__44602__$1 = ((((!((map__44602 == null)))?((((map__44602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44602):map__44602);
var expr = map__44602__$1;
var f = cljs.core.get.call(null,map__44602__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__44602__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__44602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__40680__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__40680__auto__)){
var and__40680__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__40680__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__40680__auto__ = protocol;
if(cljs.core.truth_(and__40680__auto__)){
var and__40680__auto____$1 = tag;
if(cljs.core.truth_(and__40680__auto____$1)){
var or__40692__auto__ = (function (){var and__40680__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__40680__auto____$2)){
var and__40680__auto____$3 = protocol;
if(cljs.core.truth_(and__40680__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__40680__auto____$3;
}
} else {
return and__40680__auto____$2;
}
})();
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
var and__40680__auto____$2 = (function (){var or__40692__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__40692__auto____$1)){
return or__40692__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__40680__auto____$2)){
var or__40692__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__40692__auto____$1){
return or__40692__auto____$1;
} else {
var and__40680__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__40680__auto____$3){
var and__40680__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__40680__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__40680__auto____$4;
}
} else {
return and__40680__auto____$3;
}
}
} else {
return and__40680__auto____$2;
}
}
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__40692__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__40692__auto__){
return or__40692__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__44604 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__40680__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__40680__auto__)){
return (arity > mfa);
} else {
return and__40680__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env){
return (function (p1__44599_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__44599_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env){
return (function (p1__44600_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__44600_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__44602,map__44602__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__44604,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__44604,(1),null);
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_44605 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_44605,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_44606 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_44606,args)),(((mfa_44606 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_44606,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__40692__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
var or__40692__auto____$1 = js_QMARK_;
if(or__40692__auto____$1){
return or__40692__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__40680__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__40680__auto__;
}
})())){
var fprop_44607 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_44607," ? ",f__$1,fprop_44607,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__44608){
var map__44609 = p__44608;
var map__44609__$1 = ((((!((map__44609 == null)))?((((map__44609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44609):map__44609);
var ctor = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__44611){
var map__44612 = p__44611;
var map__44612__$1 = ((((!((map__44612 == null)))?((((map__44612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44612):map__44612);
var target = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__44618_44622 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__44619_44623 = null;
var count__44620_44624 = (0);
var i__44621_44625 = (0);
while(true){
if((i__44621_44625 < count__44620_44624)){
var lib_44626 = cljs.core._nth.call(null,chunk__44619_44623,i__44621_44625);
if(cljs.core.truth_((function (){var or__40692__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_44626),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44626),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__40692__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_44626),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44626),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44626),"');");

}
}

var G__44627 = seq__44618_44622;
var G__44628 = chunk__44619_44623;
var G__44629 = count__44620_44624;
var G__44630 = (i__44621_44625 + (1));
seq__44618_44622 = G__44627;
chunk__44619_44623 = G__44628;
count__44620_44624 = G__44629;
i__44621_44625 = G__44630;
continue;
} else {
var temp__4657__auto___44631 = cljs.core.seq.call(null,seq__44618_44622);
if(temp__4657__auto___44631){
var seq__44618_44632__$1 = temp__4657__auto___44631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44618_44632__$1)){
var c__41503__auto___44633 = cljs.core.chunk_first.call(null,seq__44618_44632__$1);
var G__44634 = cljs.core.chunk_rest.call(null,seq__44618_44632__$1);
var G__44635 = c__41503__auto___44633;
var G__44636 = cljs.core.count.call(null,c__41503__auto___44633);
var G__44637 = (0);
seq__44618_44622 = G__44634;
chunk__44619_44623 = G__44635;
count__44620_44624 = G__44636;
i__44621_44625 = G__44637;
continue;
} else {
var lib_44638 = cljs.core.first.call(null,seq__44618_44632__$1);
if(cljs.core.truth_((function (){var or__40692__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_44638),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44638),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__40692__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_44638),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44638),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_44638),"');");

}
}

var G__44639 = cljs.core.next.call(null,seq__44618_44632__$1);
var G__44640 = null;
var G__44641 = (0);
var G__44642 = (0);
seq__44618_44622 = G__44639;
chunk__44619_44623 = G__44640;
count__44620_44624 = G__44641;
i__44621_44625 = G__44642;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__44643){
var map__44644 = p__44643;
var map__44644__$1 = ((((!((map__44644 == null)))?((((map__44644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44644):map__44644);
var name = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__44644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__44646){
var map__44647 = p__44646;
var map__44647__$1 = ((((!((map__44647 == null)))?((((map__44647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44647):map__44647);
var t = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__44649_44663 = cljs.core.seq.call(null,protocols);
var chunk__44650_44664 = null;
var count__44651_44665 = (0);
var i__44652_44666 = (0);
while(true){
if((i__44652_44666 < count__44651_44665)){
var protocol_44667 = cljs.core._nth.call(null,chunk__44650_44664,i__44652_44666);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_44667)].join('')),"}");

var G__44668 = seq__44649_44663;
var G__44669 = chunk__44650_44664;
var G__44670 = count__44651_44665;
var G__44671 = (i__44652_44666 + (1));
seq__44649_44663 = G__44668;
chunk__44650_44664 = G__44669;
count__44651_44665 = G__44670;
i__44652_44666 = G__44671;
continue;
} else {
var temp__4657__auto___44672 = cljs.core.seq.call(null,seq__44649_44663);
if(temp__4657__auto___44672){
var seq__44649_44673__$1 = temp__4657__auto___44672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44649_44673__$1)){
var c__41503__auto___44674 = cljs.core.chunk_first.call(null,seq__44649_44673__$1);
var G__44675 = cljs.core.chunk_rest.call(null,seq__44649_44673__$1);
var G__44676 = c__41503__auto___44674;
var G__44677 = cljs.core.count.call(null,c__41503__auto___44674);
var G__44678 = (0);
seq__44649_44663 = G__44675;
chunk__44650_44664 = G__44676;
count__44651_44665 = G__44677;
i__44652_44666 = G__44678;
continue;
} else {
var protocol_44679 = cljs.core.first.call(null,seq__44649_44673__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_44679)].join('')),"}");

var G__44680 = cljs.core.next.call(null,seq__44649_44673__$1);
var G__44681 = null;
var G__44682 = (0);
var G__44683 = (0);
seq__44649_44663 = G__44680;
chunk__44650_44664 = G__44681;
count__44651_44665 = G__44682;
i__44652_44666 = G__44683;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__44653_44684 = cljs.core.seq.call(null,fields__$1);
var chunk__44654_44685 = null;
var count__44655_44686 = (0);
var i__44656_44687 = (0);
while(true){
if((i__44656_44687 < count__44655_44686)){
var fld_44688 = cljs.core._nth.call(null,chunk__44654_44685,i__44656_44687);
cljs.compiler.emitln.call(null,"this.",fld_44688," = ",fld_44688,";");

var G__44689 = seq__44653_44684;
var G__44690 = chunk__44654_44685;
var G__44691 = count__44655_44686;
var G__44692 = (i__44656_44687 + (1));
seq__44653_44684 = G__44689;
chunk__44654_44685 = G__44690;
count__44655_44686 = G__44691;
i__44656_44687 = G__44692;
continue;
} else {
var temp__4657__auto___44693 = cljs.core.seq.call(null,seq__44653_44684);
if(temp__4657__auto___44693){
var seq__44653_44694__$1 = temp__4657__auto___44693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44653_44694__$1)){
var c__41503__auto___44695 = cljs.core.chunk_first.call(null,seq__44653_44694__$1);
var G__44696 = cljs.core.chunk_rest.call(null,seq__44653_44694__$1);
var G__44697 = c__41503__auto___44695;
var G__44698 = cljs.core.count.call(null,c__41503__auto___44695);
var G__44699 = (0);
seq__44653_44684 = G__44696;
chunk__44654_44685 = G__44697;
count__44655_44686 = G__44698;
i__44656_44687 = G__44699;
continue;
} else {
var fld_44700 = cljs.core.first.call(null,seq__44653_44694__$1);
cljs.compiler.emitln.call(null,"this.",fld_44700," = ",fld_44700,";");

var G__44701 = cljs.core.next.call(null,seq__44653_44694__$1);
var G__44702 = null;
var G__44703 = (0);
var G__44704 = (0);
seq__44653_44684 = G__44701;
chunk__44654_44685 = G__44702;
count__44655_44686 = G__44703;
i__44656_44687 = G__44704;
continue;
}
} else {
}
}
break;
}

var seq__44657_44705 = cljs.core.seq.call(null,pmasks);
var chunk__44658_44706 = null;
var count__44659_44707 = (0);
var i__44660_44708 = (0);
while(true){
if((i__44660_44708 < count__44659_44707)){
var vec__44661_44709 = cljs.core._nth.call(null,chunk__44658_44706,i__44660_44708);
var pno_44710 = cljs.core.nth.call(null,vec__44661_44709,(0),null);
var pmask_44711 = cljs.core.nth.call(null,vec__44661_44709,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_44710,"$ = ",pmask_44711,";");

var G__44712 = seq__44657_44705;
var G__44713 = chunk__44658_44706;
var G__44714 = count__44659_44707;
var G__44715 = (i__44660_44708 + (1));
seq__44657_44705 = G__44712;
chunk__44658_44706 = G__44713;
count__44659_44707 = G__44714;
i__44660_44708 = G__44715;
continue;
} else {
var temp__4657__auto___44716 = cljs.core.seq.call(null,seq__44657_44705);
if(temp__4657__auto___44716){
var seq__44657_44717__$1 = temp__4657__auto___44716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44657_44717__$1)){
var c__41503__auto___44718 = cljs.core.chunk_first.call(null,seq__44657_44717__$1);
var G__44719 = cljs.core.chunk_rest.call(null,seq__44657_44717__$1);
var G__44720 = c__41503__auto___44718;
var G__44721 = cljs.core.count.call(null,c__41503__auto___44718);
var G__44722 = (0);
seq__44657_44705 = G__44719;
chunk__44658_44706 = G__44720;
count__44659_44707 = G__44721;
i__44660_44708 = G__44722;
continue;
} else {
var vec__44662_44723 = cljs.core.first.call(null,seq__44657_44717__$1);
var pno_44724 = cljs.core.nth.call(null,vec__44662_44723,(0),null);
var pmask_44725 = cljs.core.nth.call(null,vec__44662_44723,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_44724,"$ = ",pmask_44725,";");

var G__44726 = cljs.core.next.call(null,seq__44657_44717__$1);
var G__44727 = null;
var G__44728 = (0);
var G__44729 = (0);
seq__44657_44705 = G__44726;
chunk__44658_44706 = G__44727;
count__44659_44707 = G__44728;
i__44660_44708 = G__44729;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__44730){
var map__44731 = p__44730;
var map__44731__$1 = ((((!((map__44731 == null)))?((((map__44731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44731):map__44731);
var t = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__44733_44747 = cljs.core.seq.call(null,protocols);
var chunk__44734_44748 = null;
var count__44735_44749 = (0);
var i__44736_44750 = (0);
while(true){
if((i__44736_44750 < count__44735_44749)){
var protocol_44751 = cljs.core._nth.call(null,chunk__44734_44748,i__44736_44750);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_44751)].join('')),"}");

var G__44752 = seq__44733_44747;
var G__44753 = chunk__44734_44748;
var G__44754 = count__44735_44749;
var G__44755 = (i__44736_44750 + (1));
seq__44733_44747 = G__44752;
chunk__44734_44748 = G__44753;
count__44735_44749 = G__44754;
i__44736_44750 = G__44755;
continue;
} else {
var temp__4657__auto___44756 = cljs.core.seq.call(null,seq__44733_44747);
if(temp__4657__auto___44756){
var seq__44733_44757__$1 = temp__4657__auto___44756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44733_44757__$1)){
var c__41503__auto___44758 = cljs.core.chunk_first.call(null,seq__44733_44757__$1);
var G__44759 = cljs.core.chunk_rest.call(null,seq__44733_44757__$1);
var G__44760 = c__41503__auto___44758;
var G__44761 = cljs.core.count.call(null,c__41503__auto___44758);
var G__44762 = (0);
seq__44733_44747 = G__44759;
chunk__44734_44748 = G__44760;
count__44735_44749 = G__44761;
i__44736_44750 = G__44762;
continue;
} else {
var protocol_44763 = cljs.core.first.call(null,seq__44733_44757__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_44763)].join('')),"}");

var G__44764 = cljs.core.next.call(null,seq__44733_44757__$1);
var G__44765 = null;
var G__44766 = (0);
var G__44767 = (0);
seq__44733_44747 = G__44764;
chunk__44734_44748 = G__44765;
count__44735_44749 = G__44766;
i__44736_44750 = G__44767;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__44737_44768 = cljs.core.seq.call(null,fields__$1);
var chunk__44738_44769 = null;
var count__44739_44770 = (0);
var i__44740_44771 = (0);
while(true){
if((i__44740_44771 < count__44739_44770)){
var fld_44772 = cljs.core._nth.call(null,chunk__44738_44769,i__44740_44771);
cljs.compiler.emitln.call(null,"this.",fld_44772," = ",fld_44772,";");

var G__44773 = seq__44737_44768;
var G__44774 = chunk__44738_44769;
var G__44775 = count__44739_44770;
var G__44776 = (i__44740_44771 + (1));
seq__44737_44768 = G__44773;
chunk__44738_44769 = G__44774;
count__44739_44770 = G__44775;
i__44740_44771 = G__44776;
continue;
} else {
var temp__4657__auto___44777 = cljs.core.seq.call(null,seq__44737_44768);
if(temp__4657__auto___44777){
var seq__44737_44778__$1 = temp__4657__auto___44777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44737_44778__$1)){
var c__41503__auto___44779 = cljs.core.chunk_first.call(null,seq__44737_44778__$1);
var G__44780 = cljs.core.chunk_rest.call(null,seq__44737_44778__$1);
var G__44781 = c__41503__auto___44779;
var G__44782 = cljs.core.count.call(null,c__41503__auto___44779);
var G__44783 = (0);
seq__44737_44768 = G__44780;
chunk__44738_44769 = G__44781;
count__44739_44770 = G__44782;
i__44740_44771 = G__44783;
continue;
} else {
var fld_44784 = cljs.core.first.call(null,seq__44737_44778__$1);
cljs.compiler.emitln.call(null,"this.",fld_44784," = ",fld_44784,";");

var G__44785 = cljs.core.next.call(null,seq__44737_44778__$1);
var G__44786 = null;
var G__44787 = (0);
var G__44788 = (0);
seq__44737_44768 = G__44785;
chunk__44738_44769 = G__44786;
count__44739_44770 = G__44787;
i__44740_44771 = G__44788;
continue;
}
} else {
}
}
break;
}

var seq__44741_44789 = cljs.core.seq.call(null,pmasks);
var chunk__44742_44790 = null;
var count__44743_44791 = (0);
var i__44744_44792 = (0);
while(true){
if((i__44744_44792 < count__44743_44791)){
var vec__44745_44793 = cljs.core._nth.call(null,chunk__44742_44790,i__44744_44792);
var pno_44794 = cljs.core.nth.call(null,vec__44745_44793,(0),null);
var pmask_44795 = cljs.core.nth.call(null,vec__44745_44793,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_44794,"$ = ",pmask_44795,";");

var G__44796 = seq__44741_44789;
var G__44797 = chunk__44742_44790;
var G__44798 = count__44743_44791;
var G__44799 = (i__44744_44792 + (1));
seq__44741_44789 = G__44796;
chunk__44742_44790 = G__44797;
count__44743_44791 = G__44798;
i__44744_44792 = G__44799;
continue;
} else {
var temp__4657__auto___44800 = cljs.core.seq.call(null,seq__44741_44789);
if(temp__4657__auto___44800){
var seq__44741_44801__$1 = temp__4657__auto___44800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44741_44801__$1)){
var c__41503__auto___44802 = cljs.core.chunk_first.call(null,seq__44741_44801__$1);
var G__44803 = cljs.core.chunk_rest.call(null,seq__44741_44801__$1);
var G__44804 = c__41503__auto___44802;
var G__44805 = cljs.core.count.call(null,c__41503__auto___44802);
var G__44806 = (0);
seq__44741_44789 = G__44803;
chunk__44742_44790 = G__44804;
count__44743_44791 = G__44805;
i__44744_44792 = G__44806;
continue;
} else {
var vec__44746_44807 = cljs.core.first.call(null,seq__44741_44801__$1);
var pno_44808 = cljs.core.nth.call(null,vec__44746_44807,(0),null);
var pmask_44809 = cljs.core.nth.call(null,vec__44746_44807,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_44808,"$ = ",pmask_44809,";");

var G__44810 = cljs.core.next.call(null,seq__44741_44801__$1);
var G__44811 = null;
var G__44812 = (0);
var G__44813 = (0);
seq__44741_44789 = G__44810;
chunk__44742_44790 = G__44811;
count__44743_44791 = G__44812;
i__44744_44792 = G__44813;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__44814){
var map__44815 = p__44814;
var map__44815__$1 = ((((!((map__44815 == null)))?((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44815):map__44815);
var target = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__44817){
var map__44818 = p__44817;
var map__44818__$1 = ((((!((map__44818 == null)))?((((map__44818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44818):map__44818);
var op = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__40680__auto__ = code;
if(cljs.core.truth_(and__40680__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__40680__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__43774__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__43774__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__44828 = cljs.core.seq.call(null,table);
var chunk__44829 = null;
var count__44830 = (0);
var i__44831 = (0);
while(true){
if((i__44831 < count__44830)){
var vec__44832 = cljs.core._nth.call(null,chunk__44829,i__44831);
var sym = cljs.core.nth.call(null,vec__44832,(0),null);
var value = cljs.core.nth.call(null,vec__44832,(1),null);
var ns_44834 = cljs.core.namespace.call(null,sym);
var name_44835 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__44836 = seq__44828;
var G__44837 = chunk__44829;
var G__44838 = count__44830;
var G__44839 = (i__44831 + (1));
seq__44828 = G__44836;
chunk__44829 = G__44837;
count__44830 = G__44838;
i__44831 = G__44839;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44828);
if(temp__4657__auto__){
var seq__44828__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44828__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__44828__$1);
var G__44840 = cljs.core.chunk_rest.call(null,seq__44828__$1);
var G__44841 = c__41503__auto__;
var G__44842 = cljs.core.count.call(null,c__41503__auto__);
var G__44843 = (0);
seq__44828 = G__44840;
chunk__44829 = G__44841;
count__44830 = G__44842;
i__44831 = G__44843;
continue;
} else {
var vec__44833 = cljs.core.first.call(null,seq__44828__$1);
var sym = cljs.core.nth.call(null,vec__44833,(0),null);
var value = cljs.core.nth.call(null,vec__44833,(1),null);
var ns_44844 = cljs.core.namespace.call(null,sym);
var name_44845 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__44846 = cljs.core.next.call(null,seq__44828__$1);
var G__44847 = null;
var G__44848 = (0);
var G__44849 = (0);
seq__44828 = G__44846;
chunk__44829 = G__44847;
count__44830 = G__44848;
i__44831 = G__44849;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1482388845945