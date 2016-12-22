// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53143_53157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53144_53158 = null;
var count__53145_53159 = (0);
var i__53146_53160 = (0);
while(true){
if((i__53146_53160 < count__53145_53159)){
var f_53161 = cljs.core._nth.call(null,chunk__53144_53158,i__53146_53160);
cljs.core.println.call(null,"  ",f_53161);

var G__53162 = seq__53143_53157;
var G__53163 = chunk__53144_53158;
var G__53164 = count__53145_53159;
var G__53165 = (i__53146_53160 + (1));
seq__53143_53157 = G__53162;
chunk__53144_53158 = G__53163;
count__53145_53159 = G__53164;
i__53146_53160 = G__53165;
continue;
} else {
var temp__4657__auto___53166 = cljs.core.seq.call(null,seq__53143_53157);
if(temp__4657__auto___53166){
var seq__53143_53167__$1 = temp__4657__auto___53166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53143_53167__$1)){
var c__41503__auto___53168 = cljs.core.chunk_first.call(null,seq__53143_53167__$1);
var G__53169 = cljs.core.chunk_rest.call(null,seq__53143_53167__$1);
var G__53170 = c__41503__auto___53168;
var G__53171 = cljs.core.count.call(null,c__41503__auto___53168);
var G__53172 = (0);
seq__53143_53157 = G__53169;
chunk__53144_53158 = G__53170;
count__53145_53159 = G__53171;
i__53146_53160 = G__53172;
continue;
} else {
var f_53173 = cljs.core.first.call(null,seq__53143_53167__$1);
cljs.core.println.call(null,"  ",f_53173);

var G__53174 = cljs.core.next.call(null,seq__53143_53167__$1);
var G__53175 = null;
var G__53176 = (0);
var G__53177 = (0);
seq__53143_53157 = G__53174;
chunk__53144_53158 = G__53175;
count__53145_53159 = G__53176;
i__53146_53160 = G__53177;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53178 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__40692__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53178);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53178)))?cljs.core.second.call(null,arglists_53178):arglists_53178));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53148 = null;
var count__53149 = (0);
var i__53150 = (0);
while(true){
if((i__53150 < count__53149)){
var vec__53151 = cljs.core._nth.call(null,chunk__53148,i__53150);
var name = cljs.core.nth.call(null,vec__53151,(0),null);
var map__53152 = cljs.core.nth.call(null,vec__53151,(1),null);
var map__53152__$1 = ((((!((map__53152 == null)))?((((map__53152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53152):map__53152);
var doc = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__53179 = seq__53147;
var G__53180 = chunk__53148;
var G__53181 = count__53149;
var G__53182 = (i__53150 + (1));
seq__53147 = G__53179;
chunk__53148 = G__53180;
count__53149 = G__53181;
i__53150 = G__53182;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53147);
if(temp__4657__auto__){
var seq__53147__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53147__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__53147__$1);
var G__53183 = cljs.core.chunk_rest.call(null,seq__53147__$1);
var G__53184 = c__41503__auto__;
var G__53185 = cljs.core.count.call(null,c__41503__auto__);
var G__53186 = (0);
seq__53147 = G__53183;
chunk__53148 = G__53184;
count__53149 = G__53185;
i__53150 = G__53186;
continue;
} else {
var vec__53154 = cljs.core.first.call(null,seq__53147__$1);
var name = cljs.core.nth.call(null,vec__53154,(0),null);
var map__53155 = cljs.core.nth.call(null,vec__53154,(1),null);
var map__53155__$1 = ((((!((map__53155 == null)))?((((map__53155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53155):map__53155);
var doc = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__53187 = cljs.core.next.call(null,seq__53147__$1);
var G__53188 = null;
var G__53189 = (0);
var G__53190 = (0);
seq__53147 = G__53187;
chunk__53148 = G__53188;
count__53149 = G__53189;
i__53150 = G__53190;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1482388923825