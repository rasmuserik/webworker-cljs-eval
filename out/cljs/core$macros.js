// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49617 = arguments.length;
var i__41763__auto___49618 = (0);
while(true){
if((i__41763__auto___49618 < len__41762__auto___49617)){
args__41769__auto__.push((arguments[i__41763__auto___49618]));

var G__49619 = (i__41763__auto___49618 + (1));
i__41763__auto___49618 = G__49619;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})());
var G__49620 = threaded;
var G__49621 = cljs.core.next.call(null,forms__$1);
x__$1 = G__49620;
forms__$1 = G__49621;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq49613){
var G__49614 = cljs.core.first.call(null,seq49613);
var seq49613__$1 = cljs.core.next.call(null,seq49613);
var G__49615 = cljs.core.first.call(null,seq49613__$1);
var seq49613__$2 = cljs.core.next.call(null,seq49613__$1);
var G__49616 = cljs.core.first.call(null,seq49613__$2);
var seq49613__$3 = cljs.core.next.call(null,seq49613__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49614,G__49615,G__49616,seq49613__$3);
});

cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49626 = arguments.length;
var i__41763__auto___49627 = (0);
while(true){
if((i__41763__auto___49627 < len__41762__auto___49626)){
args__41769__auto__.push((arguments[i__41763__auto___49627]));

var G__49628 = (i__41763__auto___49627 + (1));
i__41763__auto___49627 = G__49628;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__41526__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})());
var G__49629 = threaded;
var G__49630 = cljs.core.next.call(null,forms__$1);
x__$1 = G__49629;
forms__$1 = G__49630;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq49622){
var G__49623 = cljs.core.first.call(null,seq49622);
var seq49622__$1 = cljs.core.next.call(null,seq49622);
var G__49624 = cljs.core.first.call(null,seq49622__$1);
var seq49622__$2 = cljs.core.next.call(null,seq49622__$1);
var G__49625 = cljs.core.first.call(null,seq49622__$2);
var seq49622__$3 = cljs.core.next.call(null,seq49622__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49623,G__49624,G__49625,seq49622__$3);
});

cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args49631 = [];
var len__41762__auto___49639 = arguments.length;
var i__41763__auto___49640 = (0);
while(true){
if((i__41763__auto___49640 < len__41762__auto___49639)){
args49631.push((arguments[i__41763__auto___49640]));

var G__49641 = (i__41763__auto___49640 + (1));
i__41763__auto___49640 = G__49641;
continue;
} else {
}
break;
}

var G__49638 = args49631.length;
switch (G__49638) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49631.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq49632){
var G__49633 = cljs.core.first.call(null,seq49632);
var seq49632__$1 = cljs.core.next.call(null,seq49632);
var G__49634 = cljs.core.first.call(null,seq49632__$1);
var seq49632__$2 = cljs.core.next.call(null,seq49632__$1);
var G__49635 = cljs.core.first.call(null,seq49632__$2);
var seq49632__$3 = cljs.core.next.call(null,seq49632__$2);
var G__49636 = cljs.core.first.call(null,seq49632__$3);
var seq49632__$4 = cljs.core.next.call(null,seq49632__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__49633,G__49634,G__49635,G__49636,seq49632__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49646 = arguments.length;
var i__41763__auto___49647 = (0);
while(true){
if((i__41763__auto___49647 < len__41762__auto___49646)){
args__41769__auto__.push((arguments[i__41763__auto___49647]));

var G__49648 = (i__41763__auto___49647 + (1));
i__41763__auto___49647 = G__49648;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq49643){
var G__49644 = cljs.core.first.call(null,seq49643);
var seq49643__$1 = cljs.core.next.call(null,seq49643);
var G__49645 = cljs.core.first.call(null,seq49643__$1);
var seq49643__$2 = cljs.core.next.call(null,seq49643__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__49644,G__49645,seq49643__$2);
});

cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49652 = arguments.length;
var i__41763__auto___49653 = (0);
while(true){
if((i__41763__auto___49653 < len__41762__auto___49652)){
args__41769__auto__.push((arguments[i__41763__auto___49653]));

var G__49654 = (i__41763__auto___49653 + (1));
i__41763__auto___49653 = G__49654;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__41526__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$2);
})(),x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq49649){
var G__49650 = cljs.core.first.call(null,seq49649);
var seq49649__$1 = cljs.core.next.call(null,seq49649);
var G__49651 = cljs.core.first.call(null,seq49649__$1);
var seq49649__$2 = cljs.core.next.call(null,seq49649__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__49650,G__49651,seq49649__$2);
});

cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49659 = arguments.length;
var i__41763__auto___49660 = (0);
while(true){
if((i__41763__auto___49660 < len__41762__auto___49659)){
args__41769__auto__.push((arguments[i__41763__auto___49660]));

var G__49661 = (i__41763__auto___49660 + (1));
i__41763__auto___49660 = G__49661;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__49655_SHARP_){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.vary_meta.call(null,p1__49655_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq49656){
var G__49657 = cljs.core.first.call(null,seq49656);
var seq49656__$1 = cljs.core.next.call(null,seq49656);
var G__49658 = cljs.core.first.call(null,seq49656__$1);
var seq49656__$2 = cljs.core.next.call(null,seq49656__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__49657,G__49658,seq49656__$2);
});

cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49666 = arguments.length;
var i__41763__auto___49667 = (0);
while(true){
if((i__41763__auto___49667 < len__41762__auto___49666)){
args__41769__auto__.push((arguments[i__41763__auto___49667]));

var G__49668 = (i__41763__auto___49667 + (1));
i__41763__auto___49667 = G__49668;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__41526__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq49662){
var G__49663 = cljs.core.first.call(null,seq49662);
var seq49662__$1 = cljs.core.next.call(null,seq49662);
var G__49664 = cljs.core.first.call(null,seq49662__$1);
var seq49662__$2 = cljs.core.next.call(null,seq49662__$1);
var G__49665 = cljs.core.first.call(null,seq49662__$2);
var seq49662__$3 = cljs.core.next.call(null,seq49662__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__49663,G__49664,G__49665,seq49662__$3);
});

cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__49669 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__49670 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__49669;
s = G__49670;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__49673){
var vec__49674 = p__49673;
var t = cljs.core.nth.call(null,vec__49674,(0),null);
var fs = cljs.core.nth.call(null,vec__49674,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49679 = arguments.length;
var i__41763__auto___49680 = (0);
while(true){
if((i__41763__auto___49680 < len__41762__auto___49679)){
args__41769__auto__.push((arguments[i__41763__auto___49680]));

var G__49681 = (i__41763__auto___49680 + (1));
i__41763__auto___49680 = G__49681;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq49675){
var G__49676 = cljs.core.first.call(null,seq49675);
var seq49675__$1 = cljs.core.next.call(null,seq49675);
var G__49677 = cljs.core.first.call(null,seq49675__$1);
var seq49675__$2 = cljs.core.next.call(null,seq49675__$1);
var G__49678 = cljs.core.first.call(null,seq49675__$2);
var seq49675__$3 = cljs.core.next.call(null,seq49675__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__49676,G__49677,G__49678,seq49675__$3);
});

cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__49682 = cljs.core.next.call(null,params__$1);
var G__49683 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__49684 = lets;
params__$1 = G__49682;
new_params = G__49683;
lets = G__49684;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__49685 = cljs.core.next.call(null,params__$1);
var G__49686 = cljs.core.conj.call(null,new_params,gparam);
var G__49687 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__49685;
new_params = G__49686;
lets = G__49687;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49692 = arguments.length;
var i__41763__auto___49693 = (0);
while(true){
if((i__41763__auto___49693 < len__41762__auto___49692)){
args__41769__auto__.push((arguments[i__41763__auto___49693]));

var G__49694 = (i__41763__auto___49693 + (1));
i__41763__auto___49693 = G__49694;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__41526__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__49691 = sig;
var params = cljs.core.nth.call(null,vec__49691,(0),null);
var body = cljs.core.nthnext.call(null,vec__49691,(1));
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__40692__auto__ = conds;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__41526__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,((function (vec__49691,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__41526__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(vec__49691,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__49691,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__41526__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(vec__49691,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq49688){
var G__49689 = cljs.core.first.call(null,seq49688);
var seq49688__$1 = cljs.core.next.call(null,seq49688);
var G__49690 = cljs.core.first.call(null,seq49688__$1);
var seq49688__$2 = cljs.core.next.call(null,seq49688__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__49689,G__49690,seq49688__$2);
});

cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49699 = arguments.length;
var i__41763__auto___49700 = (0);
while(true){
if((i__41763__auto___49700 < len__41762__auto___49699)){
args__41769__auto__.push((arguments[i__41763__auto___49700]));

var G__49701 = (i__41763__auto___49700 + (1));
i__41763__auto___49700 = G__49701;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq49695){
var G__49696 = cljs.core.first.call(null,seq49695);
var seq49695__$1 = cljs.core.next.call(null,seq49695);
var G__49697 = cljs.core.first.call(null,seq49695__$1);
var seq49695__$2 = cljs.core.next.call(null,seq49695__$1);
var G__49698 = cljs.core.first.call(null,seq49695__$2);
var seq49695__$3 = cljs.core.next.call(null,seq49695__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__49696,G__49697,G__49698,seq49695__$3);
});

cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args49703 = [];
var len__41762__auto___49712 = arguments.length;
var i__41763__auto___49713 = (0);
while(true){
if((i__41763__auto___49713 < len__41762__auto___49712)){
args49703.push((arguments[i__41763__auto___49713]));

var G__49714 = (i__41763__auto___49713 + (1));
i__41763__auto___49713 = G__49714;
continue;
} else {
}
break;
}

var G__49711 = args49703.length;
switch (G__49711) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49703.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__41781__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__41526__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49702__auto__","temp__49702__auto__",132342143,null)),(function (){var x__41526__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49702__auto__","temp__49702__auto__",132342143,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49702__auto__","temp__49702__auto__",132342143,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq49704){
var G__49705 = cljs.core.first.call(null,seq49704);
var seq49704__$1 = cljs.core.next.call(null,seq49704);
var G__49706 = cljs.core.first.call(null,seq49704__$1);
var seq49704__$2 = cljs.core.next.call(null,seq49704__$1);
var G__49707 = cljs.core.first.call(null,seq49704__$2);
var seq49704__$3 = cljs.core.next.call(null,seq49704__$2);
var G__49708 = cljs.core.first.call(null,seq49704__$3);
var seq49704__$4 = cljs.core.next.call(null,seq49704__$3);
var G__49709 = cljs.core.first.call(null,seq49704__$4);
var seq49704__$5 = cljs.core.next.call(null,seq49704__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__49705,G__49706,G__49707,G__49708,G__49709,seq49704__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args49716 = [];
var len__41762__auto___49719 = arguments.length;
var i__41763__auto___49720 = (0);
while(true){
if((i__41763__auto___49720 < len__41762__auto___49719)){
args49716.push((arguments[i__41763__auto___49720]));

var G__49721 = (i__41763__auto___49720 + (1));
i__41763__auto___49720 = G__49721;
continue;
} else {
}
break;
}

var G__49718 = args49716.length;
switch (G__49718) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args49716.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49728 = arguments.length;
var i__41763__auto___49729 = (0);
while(true){
if((i__41763__auto___49729 < len__41762__auto___49728)){
args__41769__auto__.push((arguments[i__41763__auto___49729]));

var G__49730 = (i__41763__auto___49729 + (1));
i__41763__auto___49729 = G__49730;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__49723_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__49723_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq49724){
var G__49725 = cljs.core.first.call(null,seq49724);
var seq49724__$1 = cljs.core.next.call(null,seq49724);
var G__49726 = cljs.core.first.call(null,seq49724__$1);
var seq49724__$2 = cljs.core.next.call(null,seq49724__$1);
var G__49727 = cljs.core.first.call(null,seq49724__$2);
var seq49724__$3 = cljs.core.next.call(null,seq49724__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__49725,G__49726,G__49727,seq49724__$3);
});

cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49735 = arguments.length;
var i__41763__auto___49736 = (0);
while(true){
if((i__41763__auto___49736 < len__41762__auto___49735)){
args__41769__auto__.push((arguments[i__41763__auto___49736]));

var G__49737 = (i__41763__auto___49736 + (1));
i__41763__auto___49736 = G__49737;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq49731){
var G__49732 = cljs.core.first.call(null,seq49731);
var seq49731__$1 = cljs.core.next.call(null,seq49731);
var G__49733 = cljs.core.first.call(null,seq49731__$1);
var seq49731__$2 = cljs.core.next.call(null,seq49731__$1);
var G__49734 = cljs.core.first.call(null,seq49731__$2);
var seq49731__$3 = cljs.core.next.call(null,seq49731__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__49732,G__49733,G__49734,seq49731__$3);
});

cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49742 = arguments.length;
var i__41763__auto___49743 = (0);
while(true){
if((i__41763__auto___49743 < len__41762__auto___49742)){
args__41769__auto__.push((arguments[i__41763__auto___49743]));

var G__49744 = (i__41763__auto___49743 + (1));
i__41763__auto___49743 = G__49744;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq49738){
var G__49739 = cljs.core.first.call(null,seq49738);
var seq49738__$1 = cljs.core.next.call(null,seq49738);
var G__49740 = cljs.core.first.call(null,seq49738__$1);
var seq49738__$2 = cljs.core.next.call(null,seq49738__$1);
var G__49741 = cljs.core.first.call(null,seq49738__$2);
var seq49738__$3 = cljs.core.next.call(null,seq49738__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__49739,G__49740,G__49741,seq49738__$3);
});

cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49751 = arguments.length;
var i__41763__auto___49752 = (0);
while(true){
if((i__41763__auto___49752 < len__41762__auto___49751)){
args__41769__auto__.push((arguments[i__41763__auto___49752]));

var G__49753 = (i__41763__auto___49752 + (1));
i__41763__auto___49752 = G__49753;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__49750 = bindings;
var x = cljs.core.nth.call(null,vec__49750,(0),null);
var xs = cljs.core.nth.call(null,vec__49750,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__49745__auto__","xs__49745__auto__",-277284863,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__49745__auto__","xs__49745__auto__",-277284863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq49746){
var G__49747 = cljs.core.first.call(null,seq49746);
var seq49746__$1 = cljs.core.next.call(null,seq49746);
var G__49748 = cljs.core.first.call(null,seq49746__$1);
var seq49746__$2 = cljs.core.next.call(null,seq49746__$1);
var G__49749 = cljs.core.first.call(null,seq49746__$2);
var seq49746__$3 = cljs.core.next.call(null,seq49746__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__49747,G__49748,G__49749,seq49746__$3);
});

cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49759 = arguments.length;
var i__41763__auto___49760 = (0);
while(true){
if((i__41763__auto___49760 < len__41762__auto___49759)){
args__41769__auto__.push((arguments[i__41763__auto___49760]));

var G__49761 = (i__41763__auto___49760 + (1));
i__41763__auto___49760 = G__49761;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49754__auto__","temp__49754__auto__",278911833,null)),(function (){var x__41526__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49754__auto__","temp__49754__auto__",278911833,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49754__auto__","temp__49754__auto__",278911833,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq49755){
var G__49756 = cljs.core.first.call(null,seq49755);
var seq49755__$1 = cljs.core.next.call(null,seq49755);
var G__49757 = cljs.core.first.call(null,seq49755__$1);
var seq49755__$2 = cljs.core.next.call(null,seq49755__$1);
var G__49758 = cljs.core.first.call(null,seq49755__$2);
var seq49755__$3 = cljs.core.next.call(null,seq49755__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__49756,G__49757,G__49758,seq49755__$3);
});

cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49766 = arguments.length;
var i__41763__auto___49767 = (0);
while(true){
if((i__41763__auto___49767 < len__41762__auto___49766)){
args__41769__auto__.push((arguments[i__41763__auto___49767]));

var G__49768 = (i__41763__auto___49767 + (1));
i__41763__auto___49767 = G__49768;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),null),x__41526__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq49762){
var G__49763 = cljs.core.first.call(null,seq49762);
var seq49762__$1 = cljs.core.next.call(null,seq49762);
var G__49764 = cljs.core.first.call(null,seq49762__$1);
var seq49762__$2 = cljs.core.next.call(null,seq49762__$1);
var G__49765 = cljs.core.first.call(null,seq49762__$2);
var seq49762__$3 = cljs.core.next.call(null,seq49762__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__49763,G__49764,G__49765,seq49762__$3);
});

cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49773 = arguments.length;
var i__41763__auto___49774 = (0);
while(true){
if((i__41763__auto___49774 < len__41762__auto___49773)){
args__41769__auto__.push((arguments[i__41763__auto___49774]));

var G__49775 = (i__41763__auto___49774 + (1));
i__41763__auto___49774 = G__49775;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq49769){
var G__49770 = cljs.core.first.call(null,seq49769);
var seq49769__$1 = cljs.core.next.call(null,seq49769);
var G__49771 = cljs.core.first.call(null,seq49769__$1);
var seq49769__$2 = cljs.core.next.call(null,seq49769__$1);
var G__49772 = cljs.core.first.call(null,seq49769__$2);
var seq49769__$3 = cljs.core.next.call(null,seq49769__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__49770,G__49771,G__49772,seq49769__$3);
});

cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49782 = arguments.length;
var i__41763__auto___49783 = (0);
while(true){
if((i__41763__auto___49783 < len__41762__auto___49782)){
args__41769__auto__.push((arguments[i__41763__auto___49783]));

var G__49784 = (i__41763__auto___49783 + (1));
i__41763__auto___49783 = G__49784;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__49780){
var vec__49781 = p__49780;
var test = cljs.core.nth.call(null,vec__49781,(0),null);
var step = cljs.core.nth.call(null,vec__49781,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq49776){
var G__49777 = cljs.core.first.call(null,seq49776);
var seq49776__$1 = cljs.core.next.call(null,seq49776);
var G__49778 = cljs.core.first.call(null,seq49776__$1);
var seq49776__$2 = cljs.core.next.call(null,seq49776__$1);
var G__49779 = cljs.core.first.call(null,seq49776__$2);
var seq49776__$3 = cljs.core.next.call(null,seq49776__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49777,G__49778,G__49779,seq49776__$3);
});

cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49791 = arguments.length;
var i__41763__auto___49792 = (0);
while(true){
if((i__41763__auto___49792 < len__41762__auto___49791)){
args__41769__auto__.push((arguments[i__41763__auto___49792]));

var G__49793 = (i__41763__auto___49792 + (1));
i__41763__auto___49792 = G__49793;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__49789){
var vec__49790 = p__49789;
var test = cljs.core.nth.call(null,vec__49790,(0),null);
var step = cljs.core.nth.call(null,vec__49790,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq49785){
var G__49786 = cljs.core.first.call(null,seq49785);
var seq49785__$1 = cljs.core.next.call(null,seq49785);
var G__49787 = cljs.core.first.call(null,seq49785__$1);
var seq49785__$2 = cljs.core.next.call(null,seq49785__$1);
var G__49788 = cljs.core.first.call(null,seq49785__$2);
var seq49785__$3 = cljs.core.next.call(null,seq49785__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49786,G__49787,G__49788,seq49785__$3);
});

cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49799 = arguments.length;
var i__41763__auto___49800 = (0);
while(true){
if((i__41763__auto___49800 < len__41762__auto___49799)){
args__41769__auto__.push((arguments[i__41763__auto___49800]));

var G__49801 = (i__41763__auto___49800 + (1));
i__41763__auto___49800 = G__49801;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq49794){
var G__49795 = cljs.core.first.call(null,seq49794);
var seq49794__$1 = cljs.core.next.call(null,seq49794);
var G__49796 = cljs.core.first.call(null,seq49794__$1);
var seq49794__$2 = cljs.core.next.call(null,seq49794__$1);
var G__49797 = cljs.core.first.call(null,seq49794__$2);
var seq49794__$3 = cljs.core.next.call(null,seq49794__$2);
var G__49798 = cljs.core.first.call(null,seq49794__$3);
var seq49794__$4 = cljs.core.next.call(null,seq49794__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49795,G__49796,G__49797,G__49798,seq49794__$4);
});

cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49806 = arguments.length;
var i__41763__auto___49807 = (0);
while(true){
if((i__41763__auto___49807 < len__41762__auto___49806)){
args__41769__auto__.push((arguments[i__41763__auto___49807]));

var G__49808 = (i__41763__auto___49807 + (1));
i__41763__auto___49807 = G__49808;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq49802){
var G__49803 = cljs.core.first.call(null,seq49802);
var seq49802__$1 = cljs.core.next.call(null,seq49802);
var G__49804 = cljs.core.first.call(null,seq49802__$1);
var seq49802__$2 = cljs.core.next.call(null,seq49802__$1);
var G__49805 = cljs.core.first.call(null,seq49802__$2);
var seq49802__$3 = cljs.core.next.call(null,seq49802__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49803,G__49804,G__49805,seq49802__$3);
});

cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49813 = arguments.length;
var i__41763__auto___49814 = (0);
while(true){
if((i__41763__auto___49814 < len__41762__auto___49813)){
args__41769__auto__.push((arguments[i__41763__auto___49814]));

var G__49815 = (i__41763__auto___49814 + (1));
i__41763__auto___49814 = G__49815;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq49809){
var G__49810 = cljs.core.first.call(null,seq49809);
var seq49809__$1 = cljs.core.next.call(null,seq49809);
var G__49811 = cljs.core.first.call(null,seq49809__$1);
var seq49809__$2 = cljs.core.next.call(null,seq49809__$1);
var G__49812 = cljs.core.first.call(null,seq49809__$2);
var seq49809__$3 = cljs.core.next.call(null,seq49809__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__49810,G__49811,G__49812,seq49809__$3);
});

cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args49817 = [];
var len__41762__auto___49826 = arguments.length;
var i__41763__auto___49827 = (0);
while(true){
if((i__41763__auto___49827 < len__41762__auto___49826)){
args49817.push((arguments[i__41763__auto___49827]));

var G__49828 = (i__41763__auto___49827 + (1));
i__41763__auto___49827 = G__49828;
continue;
} else {
}
break;
}

var G__49825 = args49817.length;
switch (G__49825) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49817.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__41781__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__41526__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49816__auto__","temp__49816__auto__",553883077,null)),(function (){var x__41526__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49816__auto__","temp__49816__auto__",553883077,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49816__auto__","temp__49816__auto__",553883077,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq49818){
var G__49819 = cljs.core.first.call(null,seq49818);
var seq49818__$1 = cljs.core.next.call(null,seq49818);
var G__49820 = cljs.core.first.call(null,seq49818__$1);
var seq49818__$2 = cljs.core.next.call(null,seq49818__$1);
var G__49821 = cljs.core.first.call(null,seq49818__$2);
var seq49818__$3 = cljs.core.next.call(null,seq49818__$2);
var G__49822 = cljs.core.first.call(null,seq49818__$3);
var seq49818__$4 = cljs.core.next.call(null,seq49818__$3);
var G__49823 = cljs.core.first.call(null,seq49818__$4);
var seq49818__$5 = cljs.core.next.call(null,seq49818__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__49819,G__49820,G__49821,G__49822,G__49823,seq49818__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49835 = arguments.length;
var i__41763__auto___49836 = (0);
while(true){
if((i__41763__auto___49836 < len__41762__auto___49835)){
args__41769__auto__.push((arguments[i__41763__auto___49836]));

var G__49837 = (i__41763__auto___49836 + (1));
i__41763__auto___49836 = G__49837;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49830__auto__","temp__49830__auto__",12758797,null)),(function (){var x__41526__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49830__auto__","temp__49830__auto__",12758797,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__49830__auto__","temp__49830__auto__",12758797,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq49831){
var G__49832 = cljs.core.first.call(null,seq49831);
var seq49831__$1 = cljs.core.next.call(null,seq49831);
var G__49833 = cljs.core.first.call(null,seq49831__$1);
var seq49831__$2 = cljs.core.next.call(null,seq49831__$1);
var G__49834 = cljs.core.first.call(null,seq49831__$2);
var seq49831__$3 = cljs.core.next.call(null,seq49831__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__49832,G__49833,G__49834,seq49831__$3);
});

cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__49838_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__49838_SHARP_)){
return cljs.core.first.call(null,p1__49838_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__49838_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__49838_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__49839_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__49839_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__49840 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__49841 = cljs.core.next.call(null,fdecls);
ret = G__49840;
fdecls = G__49841;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__41526__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
}
});
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var ret = cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gvec),val);
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__49847 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),cljs.core._conj.call(null,(function (){var x__41526__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core","nthnext","cljs.core/nthnext",-1690777327,null)));
var G__49848 = n;
var G__49849 = cljs.core.nnext.call(null,bs);
var G__49850 = true;
ret = G__49847;
n = G__49848;
bs = G__49849;
seen_rest_QMARK_ = G__49850;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__49851 = cljs$core$macros$destructure_$_pb.call(null,ret,firstb,cljs.core._conj.call(null,(function (){var x__41526__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null)));
var G__49852 = (n + (1));
var G__49853 = cljs.core.next.call(null,bs);
var G__49854 = seen_rest_QMARK_;
ret = G__49851;
n = G__49852;
bs = G__49853;
seen_rest_QMARK_ = G__49854;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__41526__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__41526__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))));
var bes = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__49842_SHARP_,p2__49843_SHARP_){
return cljs.core.assoc.call(null,p1__49842_SHARP_,p2__49843_SHARP_,cljs.core.val.call(null,entry).call(null,p2__49843_SHARP_));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__49844_SHARP_){
if((p1__49844_SHARP_ instanceof cljs.core.Keyword)){
return p1__49844_SHARP_;
} else {
return cljs.core.keyword.call(null,[cljs.core.str(p1__49844_SHARP_)].join(''));
}
});})(ret,gmap,defaults,pvec,bents))
,new cljs.core.Keyword(null,"strs","strs",1175537277),cljs.core.str,new cljs.core.Keyword(null,"syms","syms",-1575891762),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__49845_SHARP_){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = p1__49845_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ret,gmap,defaults,pvec,bents))
], null));
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var has_default = cljs.core.contains_QMARK_.call(null,defaults,bb);
var G__49855 = cljs$core$macros$destructure_$_pb.call(null,ret,bb,((has_default)?cljs.core._conj.call(null,(function (){var x__41526__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$2 = defaults.call(null,bb);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$2);
})(),x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__41526__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null))));
var G__49856 = cljs.core.next.call(null,bes);
ret = G__49855;
bes = G__49856;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__49846_SHARP_){
return (cljs.core.first.call(null,p1__49846_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__41526__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__41526__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49861 = arguments.length;
var i__41763__auto___49862 = (0);
while(true){
if((i__41763__auto___49862 < len__41762__auto___49861)){
args__41769__auto__.push((arguments[i__41763__auto___49862]));

var G__49863 = (i__41763__auto___49862 + (1));
i__41763__auto___49862 = G__49863;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__41526__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq49857){
var G__49858 = cljs.core.first.call(null,seq49857);
var seq49857__$1 = cljs.core.next.call(null,seq49857);
var G__49859 = cljs.core.first.call(null,seq49857__$1);
var seq49857__$2 = cljs.core.next.call(null,seq49857__$1);
var G__49860 = cljs.core.first.call(null,seq49857__$2);
var seq49857__$3 = cljs.core.next.call(null,seq49857__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__49858,G__49859,G__49860,seq49857__$3);
});

cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49870 = arguments.length;
var i__41763__auto___49871 = (0);
while(true){
if((i__41763__auto___49871 < len__41762__auto___49870)){
args__41769__auto__.push((arguments[i__41763__auto___49871]));

var G__49872 = (i__41763__auto___49871 + (1));
i__41763__auto___49871 = G__49872;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__41526__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__49868){
var vec__49869 = p__49868;
var b = cljs.core.nth.call(null,vec__49869,(0),null);
var v = cljs.core.nth.call(null,vec__49869,(1),null);
var g = cljs.core.nth.call(null,vec__49869,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq49864){
var G__49865 = cljs.core.first.call(null,seq49864);
var seq49864__$1 = cljs.core.next.call(null,seq49864);
var G__49866 = cljs.core.first.call(null,seq49864__$1);
var seq49864__$2 = cljs.core.next.call(null,seq49864__$1);
var G__49867 = cljs.core.first.call(null,seq49864__$2);
var seq49864__$3 = cljs.core.next.call(null,seq49864__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__49865,G__49866,G__49867,seq49864__$3);
});

cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__49873_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__49873_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__49874){
var vec__49875 = p__49874;
var p = cljs.core.nth.call(null,vec__49875,(0),null);
var b = cljs.core.nth.call(null,vec__49875,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49879 = arguments.length;
var i__41763__auto___49880 = (0);
while(true){
if((i__41763__auto___49880 < len__41762__auto___49879)){
args__41769__auto__.push((arguments[i__41763__auto___49880]));

var G__49881 = (i__41763__auto___49880 + (1));
i__41763__auto___49880 = G__49881;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq49876){
var G__49877 = cljs.core.first.call(null,seq49876);
var seq49876__$1 = cljs.core.next.call(null,seq49876);
var G__49878 = cljs.core.first.call(null,seq49876__$1);
var seq49876__$2 = cljs.core.next.call(null,seq49876__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__49877,G__49878,seq49876__$2);
});

cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__40680__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__40680__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__40680__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args49885 = [];
var len__41762__auto___49892 = arguments.length;
var i__41763__auto___49893 = (0);
while(true){
if((i__41763__auto___49893 < len__41762__auto___49892)){
args49885.push((arguments[i__41763__auto___49893]));

var G__49894 = (i__41763__auto___49893 + (1));
i__41763__auto___49893 = G__49894;
continue;
} else {
}
break;
}

var G__49891 = args49885.length;
switch (G__49891) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49885.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41781__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__49882_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__49882_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__49883_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__49883_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__41526__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__49884__auto__","and__49884__auto__",209545571,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__49884__auto__","and__49884__auto__",209545571,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__49884__auto__","and__49884__auto__",209545571,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq49886){
var G__49887 = cljs.core.first.call(null,seq49886);
var seq49886__$1 = cljs.core.next.call(null,seq49886);
var G__49888 = cljs.core.first.call(null,seq49886__$1);
var seq49886__$2 = cljs.core.next.call(null,seq49886__$1);
var G__49889 = cljs.core.first.call(null,seq49886__$2);
var seq49886__$3 = cljs.core.next.call(null,seq49886__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__49887,G__49888,G__49889,seq49886__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args49899 = [];
var len__41762__auto___49906 = arguments.length;
var i__41763__auto___49907 = (0);
while(true){
if((i__41763__auto___49907 < len__41762__auto___49906)){
args49899.push((arguments[i__41763__auto___49907]));

var G__49908 = (i__41763__auto___49907 + (1));
i__41763__auto___49907 = G__49908;
continue;
} else {
}
break;
}

var G__49905 = args49899.length;
switch (G__49905) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49899.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41781__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__49896_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__49896_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__49897_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__49897_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__41526__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__49898__auto__","or__49898__auto__",-1108850396,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__49898__auto__","or__49898__auto__",-1108850396,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__49898__auto__","or__49898__auto__",-1108850396,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq49900){
var G__49901 = cljs.core.first.call(null,seq49900);
var seq49900__$1 = cljs.core.next.call(null,seq49900);
var G__49902 = cljs.core.first.call(null,seq49900__$1);
var seq49900__$2 = cljs.core.next.call(null,seq49900__$1);
var G__49903 = cljs.core.first.call(null,seq49900__$2);
var seq49900__$3 = cljs.core.next.call(null,seq49900__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__49901,G__49902,G__49903,seq49900__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__41526__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__49912 = clojure.string.split.call(null,comment,/\n/);
var x = cljs.core.nth.call(null,vec__49912,(0),null);
var ys = cljs.core.nthnext.call(null,vec__49912,(1));
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__49912,x,ys){
return (function (p1__49910_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__49910_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__49912,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$2);
})(),x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__49913__auto__","c__49913__auto__",-1862912760,null)),(function (){var x__41526__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__49914__auto__","x__49914__auto__",1125723076,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__49914__auto__","x__49914__auto__",1125723076,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__49913__auto__","c__49913__auto__",-1862912760,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args49915 = [];
var len__41762__auto___49923 = arguments.length;
var i__41763__auto___49924 = (0);
while(true){
if((i__41763__auto___49924 < len__41762__auto___49923)){
args49915.push((arguments[i__41763__auto___49924]));

var G__49925 = (i__41763__auto___49924 + (1));
i__41763__auto___49924 = G__49925;
continue;
} else {
}
break;
}

var G__49922 = args49915.length;
switch (G__49922) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49915.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__41526__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq49916){
var G__49917 = cljs.core.first.call(null,seq49916);
var seq49916__$1 = cljs.core.next.call(null,seq49916);
var G__49918 = cljs.core.first.call(null,seq49916__$1);
var seq49916__$2 = cljs.core.next.call(null,seq49916__$1);
var G__49919 = cljs.core.first.call(null,seq49916__$2);
var seq49916__$3 = cljs.core.next.call(null,seq49916__$2);
var G__49920 = cljs.core.first.call(null,seq49916__$3);
var seq49916__$4 = cljs.core.next.call(null,seq49916__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__49917,G__49918,G__49919,G__49920,seq49916__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args49927 = [];
var len__41762__auto___49936 = arguments.length;
var i__41763__auto___49937 = (0);
while(true){
if((i__41763__auto___49937 < len__41762__auto___49936)){
args49927.push((arguments[i__41763__auto___49937]));

var G__49938 = (i__41763__auto___49937 + (1));
i__41763__auto___49937 = G__49938;
continue;
} else {
}
break;
}

var G__49935 = args49927.length;
switch (G__49935) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49927.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__41781__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$2);
})(),x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__41526__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq49928){
var G__49929 = cljs.core.first.call(null,seq49928);
var seq49928__$1 = cljs.core.next.call(null,seq49928);
var G__49930 = cljs.core.first.call(null,seq49928__$1);
var seq49928__$2 = cljs.core.next.call(null,seq49928__$1);
var G__49931 = cljs.core.first.call(null,seq49928__$2);
var seq49928__$3 = cljs.core.next.call(null,seq49928__$2);
var G__49932 = cljs.core.first.call(null,seq49928__$3);
var seq49928__$4 = cljs.core.next.call(null,seq49928__$3);
var G__49933 = cljs.core.first.call(null,seq49928__$4);
var seq49928__$5 = cljs.core.next.call(null,seq49928__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__49929,G__49930,G__49931,G__49932,G__49933,seq49928__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args49940 = [];
var len__41762__auto___49948 = arguments.length;
var i__41763__auto___49949 = (0);
while(true){
if((i__41763__auto___49949 < len__41762__auto___49948)){
args49940.push((arguments[i__41763__auto___49949]));

var G__49950 = (i__41763__auto___49949 + (1));
i__41763__auto___49949 = G__49950;
continue;
} else {
}
break;
}

var G__49947 = args49940.length;
switch (G__49947) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49940.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq49941){
var G__49942 = cljs.core.first.call(null,seq49941);
var seq49941__$1 = cljs.core.next.call(null,seq49941);
var G__49943 = cljs.core.first.call(null,seq49941__$1);
var seq49941__$2 = cljs.core.next.call(null,seq49941__$1);
var G__49944 = cljs.core.first.call(null,seq49941__$2);
var seq49941__$3 = cljs.core.next.call(null,seq49941__$2);
var G__49945 = cljs.core.first.call(null,seq49941__$3);
var seq49941__$4 = cljs.core.next.call(null,seq49941__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__49942,G__49943,G__49944,G__49945,seq49941__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49955 = arguments.length;
var i__41763__auto___49956 = (0);
while(true){
if((i__41763__auto___49956 < len__41762__auto___49955)){
args__41769__auto__.push((arguments[i__41763__auto___49956]));

var G__49957 = (i__41763__auto___49956 + (1));
i__41763__auto___49956 = G__49957;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq49952){
var G__49953 = cljs.core.first.call(null,seq49952);
var seq49952__$1 = cljs.core.next.call(null,seq49952);
var G__49954 = cljs.core.first.call(null,seq49952__$1);
var seq49952__$2 = cljs.core.next.call(null,seq49952__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__49953,G__49954,seq49952__$2);
});

cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49961 = arguments.length;
var i__41763__auto___49962 = (0);
while(true){
if((i__41763__auto___49962 < len__41762__auto___49961)){
args__41769__auto__.push((arguments[i__41763__auto___49962]));

var G__49963 = (i__41763__auto___49962 + (1));
i__41763__auto___49962 = G__49963;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq49958){
var G__49959 = cljs.core.first.call(null,seq49958);
var seq49958__$1 = cljs.core.next.call(null,seq49958);
var G__49960 = cljs.core.first.call(null,seq49958__$1);
var seq49958__$2 = cljs.core.next.call(null,seq49958__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__49959,G__49960,seq49958__$2);
});

cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49967 = arguments.length;
var i__41763__auto___49968 = (0);
while(true){
if((i__41763__auto___49968 < len__41762__auto___49967)){
args__41769__auto__.push((arguments[i__41763__auto___49968]));

var G__49969 = (i__41763__auto___49968 + (1));
i__41763__auto___49968 = G__49969;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq49964){
var G__49965 = cljs.core.first.call(null,seq49964);
var seq49964__$1 = cljs.core.next.call(null,seq49964);
var G__49966 = cljs.core.first.call(null,seq49964__$1);
var seq49964__$2 = cljs.core.next.call(null,seq49964__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__49965,G__49966,seq49964__$2);
});

cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49973 = arguments.length;
var i__41763__auto___49974 = (0);
while(true){
if((i__41763__auto___49974 < len__41762__auto___49973)){
args__41769__auto__.push((arguments[i__41763__auto___49974]));

var G__49975 = (i__41763__auto___49974 + (1));
i__41763__auto___49974 = G__49975;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq49970){
var G__49971 = cljs.core.first.call(null,seq49970);
var seq49970__$1 = cljs.core.next.call(null,seq49970);
var G__49972 = cljs.core.first.call(null,seq49970__$1);
var seq49970__$2 = cljs.core.next.call(null,seq49970__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__49971,G__49972,seq49970__$2);
});

cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49979 = arguments.length;
var i__41763__auto___49980 = (0);
while(true){
if((i__41763__auto___49980 < len__41762__auto___49979)){
args__41769__auto__.push((arguments[i__41763__auto___49980]));

var G__49981 = (i__41763__auto___49980 + (1));
i__41763__auto___49980 = G__49981;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq49976){
var G__49977 = cljs.core.first.call(null,seq49976);
var seq49976__$1 = cljs.core.next.call(null,seq49976);
var G__49978 = cljs.core.first.call(null,seq49976__$1);
var seq49976__$2 = cljs.core.next.call(null,seq49976__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__49977,G__49978,seq49976__$2);
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49985 = arguments.length;
var i__41763__auto___49986 = (0);
while(true){
if((i__41763__auto___49986 < len__41762__auto___49985)){
args__41769__auto__.push((arguments[i__41763__auto___49986]));

var G__49987 = (i__41763__auto___49986 + (1));
i__41763__auto___49986 = G__49987;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq49982){
var G__49983 = cljs.core.first.call(null,seq49982);
var seq49982__$1 = cljs.core.next.call(null,seq49982);
var G__49984 = cljs.core.first.call(null,seq49982__$1);
var seq49982__$2 = cljs.core.next.call(null,seq49982__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__49983,G__49984,seq49982__$2);
});

cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49991 = arguments.length;
var i__41763__auto___49992 = (0);
while(true){
if((i__41763__auto___49992 < len__41762__auto___49991)){
args__41769__auto__.push((arguments[i__41763__auto___49992]));

var G__49993 = (i__41763__auto___49992 + (1));
i__41763__auto___49992 = G__49993;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq49988){
var G__49989 = cljs.core.first.call(null,seq49988);
var seq49988__$1 = cljs.core.next.call(null,seq49988);
var G__49990 = cljs.core.first.call(null,seq49988__$1);
var seq49988__$2 = cljs.core.next.call(null,seq49988__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__49989,G__49990,seq49988__$2);
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args49994 = [];
var len__41762__auto___50002 = arguments.length;
var i__41763__auto___50003 = (0);
while(true){
if((i__41763__auto___50003 < len__41762__auto___50002)){
args49994.push((arguments[i__41763__auto___50003]));

var G__50004 = (i__41763__auto___50003 + (1));
i__41763__auto___50003 = G__50004;
continue;
} else {
}
break;
}

var G__50001 = args49994.length;
switch (G__50001) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args49994.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq49995){
var G__49996 = cljs.core.first.call(null,seq49995);
var seq49995__$1 = cljs.core.next.call(null,seq49995);
var G__49997 = cljs.core.first.call(null,seq49995__$1);
var seq49995__$2 = cljs.core.next.call(null,seq49995__$1);
var G__49998 = cljs.core.first.call(null,seq49995__$2);
var seq49995__$3 = cljs.core.next.call(null,seq49995__$2);
var G__49999 = cljs.core.first.call(null,seq49995__$3);
var seq49995__$4 = cljs.core.next.call(null,seq49995__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__49996,G__49997,G__49998,G__49999,seq49995__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args50006 = [];
var len__41762__auto___50014 = arguments.length;
var i__41763__auto___50015 = (0);
while(true){
if((i__41763__auto___50015 < len__41762__auto___50014)){
args50006.push((arguments[i__41763__auto___50015]));

var G__50016 = (i__41763__auto___50015 + (1));
i__41763__auto___50015 = G__50016;
continue;
} else {
}
break;
}

var G__50013 = args50006.length;
switch (G__50013) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50006.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq50007){
var G__50008 = cljs.core.first.call(null,seq50007);
var seq50007__$1 = cljs.core.next.call(null,seq50007);
var G__50009 = cljs.core.first.call(null,seq50007__$1);
var seq50007__$2 = cljs.core.next.call(null,seq50007__$1);
var G__50010 = cljs.core.first.call(null,seq50007__$2);
var seq50007__$3 = cljs.core.next.call(null,seq50007__$2);
var G__50011 = cljs.core.first.call(null,seq50007__$3);
var seq50007__$4 = cljs.core.next.call(null,seq50007__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50008,G__50009,G__50010,G__50011,seq50007__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args50018 = [];
var len__41762__auto___50026 = arguments.length;
var i__41763__auto___50027 = (0);
while(true){
if((i__41763__auto___50027 < len__41762__auto___50026)){
args50018.push((arguments[i__41763__auto___50027]));

var G__50028 = (i__41763__auto___50027 + (1));
i__41763__auto___50027 = G__50028;
continue;
} else {
}
break;
}

var G__50025 = args50018.length;
switch (G__50025) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50018.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq50019){
var G__50020 = cljs.core.first.call(null,seq50019);
var seq50019__$1 = cljs.core.next.call(null,seq50019);
var G__50021 = cljs.core.first.call(null,seq50019__$1);
var seq50019__$2 = cljs.core.next.call(null,seq50019__$1);
var G__50022 = cljs.core.first.call(null,seq50019__$2);
var seq50019__$3 = cljs.core.next.call(null,seq50019__$2);
var G__50023 = cljs.core.first.call(null,seq50019__$3);
var seq50019__$4 = cljs.core.next.call(null,seq50019__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__50020,G__50021,G__50022,G__50023,seq50019__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args50030 = [];
var len__41762__auto___50038 = arguments.length;
var i__41763__auto___50039 = (0);
while(true){
if((i__41763__auto___50039 < len__41762__auto___50038)){
args50030.push((arguments[i__41763__auto___50039]));

var G__50040 = (i__41763__auto___50039 + (1));
i__41763__auto___50039 = G__50040;
continue;
} else {
}
break;
}

var G__50037 = args50030.length;
switch (G__50037) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50030.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq50031){
var G__50032 = cljs.core.first.call(null,seq50031);
var seq50031__$1 = cljs.core.next.call(null,seq50031);
var G__50033 = cljs.core.first.call(null,seq50031__$1);
var seq50031__$2 = cljs.core.next.call(null,seq50031__$1);
var G__50034 = cljs.core.first.call(null,seq50031__$2);
var seq50031__$3 = cljs.core.next.call(null,seq50031__$2);
var G__50035 = cljs.core.first.call(null,seq50031__$3);
var seq50031__$4 = cljs.core.next.call(null,seq50031__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__50032,G__50033,G__50034,G__50035,seq50031__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args50042 = [];
var len__41762__auto___50050 = arguments.length;
var i__41763__auto___50051 = (0);
while(true){
if((i__41763__auto___50051 < len__41762__auto___50050)){
args50042.push((arguments[i__41763__auto___50051]));

var G__50052 = (i__41763__auto___50051 + (1));
i__41763__auto___50051 = G__50052;
continue;
} else {
}
break;
}

var G__50049 = args50042.length;
switch (G__50049) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50042.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq50043){
var G__50044 = cljs.core.first.call(null,seq50043);
var seq50043__$1 = cljs.core.next.call(null,seq50043);
var G__50045 = cljs.core.first.call(null,seq50043__$1);
var seq50043__$2 = cljs.core.next.call(null,seq50043__$1);
var G__50046 = cljs.core.first.call(null,seq50043__$2);
var seq50043__$3 = cljs.core.next.call(null,seq50043__$2);
var G__50047 = cljs.core.first.call(null,seq50043__$3);
var seq50043__$4 = cljs.core.next.call(null,seq50043__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__50044,G__50045,G__50046,G__50047,seq50043__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args50054 = [];
var len__41762__auto___50062 = arguments.length;
var i__41763__auto___50063 = (0);
while(true){
if((i__41763__auto___50063 < len__41762__auto___50062)){
args50054.push((arguments[i__41763__auto___50063]));

var G__50064 = (i__41763__auto___50063 + (1));
i__41763__auto___50063 = G__50064;
continue;
} else {
}
break;
}

var G__50061 = args50054.length;
switch (G__50061) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50054.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq50055){
var G__50056 = cljs.core.first.call(null,seq50055);
var seq50055__$1 = cljs.core.next.call(null,seq50055);
var G__50057 = cljs.core.first.call(null,seq50055__$1);
var seq50055__$2 = cljs.core.next.call(null,seq50055__$1);
var G__50058 = cljs.core.first.call(null,seq50055__$2);
var seq50055__$3 = cljs.core.next.call(null,seq50055__$2);
var G__50059 = cljs.core.first.call(null,seq50055__$3);
var seq50055__$4 = cljs.core.next.call(null,seq50055__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__50056,G__50057,G__50058,G__50059,seq50055__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args50066 = [];
var len__41762__auto___50074 = arguments.length;
var i__41763__auto___50075 = (0);
while(true){
if((i__41763__auto___50075 < len__41762__auto___50074)){
args50066.push((arguments[i__41763__auto___50075]));

var G__50076 = (i__41763__auto___50075 + (1));
i__41763__auto___50075 = G__50076;
continue;
} else {
}
break;
}

var G__50073 = args50066.length;
switch (G__50073) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50066.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq50067){
var G__50068 = cljs.core.first.call(null,seq50067);
var seq50067__$1 = cljs.core.next.call(null,seq50067);
var G__50069 = cljs.core.first.call(null,seq50067__$1);
var seq50067__$2 = cljs.core.next.call(null,seq50067__$1);
var G__50070 = cljs.core.first.call(null,seq50067__$2);
var seq50067__$3 = cljs.core.next.call(null,seq50067__$2);
var G__50071 = cljs.core.first.call(null,seq50067__$3);
var seq50067__$4 = cljs.core.next.call(null,seq50067__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__50068,G__50069,G__50070,G__50071,seq50067__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args50078 = [];
var len__41762__auto___50086 = arguments.length;
var i__41763__auto___50087 = (0);
while(true){
if((i__41763__auto___50087 < len__41762__auto___50086)){
args50078.push((arguments[i__41763__auto___50087]));

var G__50088 = (i__41763__auto___50087 + (1));
i__41763__auto___50087 = G__50088;
continue;
} else {
}
break;
}

var G__50085 = args50078.length;
switch (G__50085) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50078.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq50079){
var G__50080 = cljs.core.first.call(null,seq50079);
var seq50079__$1 = cljs.core.next.call(null,seq50079);
var G__50081 = cljs.core.first.call(null,seq50079__$1);
var seq50079__$2 = cljs.core.next.call(null,seq50079__$1);
var G__50082 = cljs.core.first.call(null,seq50079__$2);
var seq50079__$3 = cljs.core.next.call(null,seq50079__$2);
var G__50083 = cljs.core.first.call(null,seq50079__$3);
var seq50079__$4 = cljs.core.next.call(null,seq50079__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__50080,G__50081,G__50082,G__50083,seq50079__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args50090 = [];
var len__41762__auto___50098 = arguments.length;
var i__41763__auto___50099 = (0);
while(true){
if((i__41763__auto___50099 < len__41762__auto___50098)){
args50090.push((arguments[i__41763__auto___50099]));

var G__50100 = (i__41763__auto___50099 + (1));
i__41763__auto___50099 = G__50100;
continue;
} else {
}
break;
}

var G__50097 = args50090.length;
switch (G__50097) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50090.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq50091){
var G__50092 = cljs.core.first.call(null,seq50091);
var seq50091__$1 = cljs.core.next.call(null,seq50091);
var G__50093 = cljs.core.first.call(null,seq50091__$1);
var seq50091__$2 = cljs.core.next.call(null,seq50091__$1);
var G__50094 = cljs.core.first.call(null,seq50091__$2);
var seq50091__$3 = cljs.core.next.call(null,seq50091__$2);
var G__50095 = cljs.core.first.call(null,seq50091__$3);
var seq50091__$4 = cljs.core.next.call(null,seq50091__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__50092,G__50093,G__50094,G__50095,seq50091__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args50104 = [];
var len__41762__auto___50112 = arguments.length;
var i__41763__auto___50113 = (0);
while(true){
if((i__41763__auto___50113 < len__41762__auto___50112)){
args50104.push((arguments[i__41763__auto___50113]));

var G__50114 = (i__41763__auto___50113 + (1));
i__41763__auto___50113 = G__50114;
continue;
} else {
}
break;
}

var G__50111 = args50104.length;
switch (G__50111) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50104.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50102__auto__","x__50102__auto__",-1573246418,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50103__auto__","y__50103__auto__",344714075,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50102__auto__","x__50102__auto__",-1573246418,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50103__auto__","y__50103__auto__",344714075,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50102__auto__","x__50102__auto__",-1573246418,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50103__auto__","y__50103__auto__",344714075,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq50105){
var G__50106 = cljs.core.first.call(null,seq50105);
var seq50105__$1 = cljs.core.next.call(null,seq50105);
var G__50107 = cljs.core.first.call(null,seq50105__$1);
var seq50105__$2 = cljs.core.next.call(null,seq50105__$1);
var G__50108 = cljs.core.first.call(null,seq50105__$2);
var seq50105__$3 = cljs.core.next.call(null,seq50105__$2);
var G__50109 = cljs.core.first.call(null,seq50105__$3);
var seq50105__$4 = cljs.core.next.call(null,seq50105__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__50106,G__50107,G__50108,G__50109,seq50105__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args50118 = [];
var len__41762__auto___50126 = arguments.length;
var i__41763__auto___50127 = (0);
while(true){
if((i__41763__auto___50127 < len__41762__auto___50126)){
args50118.push((arguments[i__41763__auto___50127]));

var G__50128 = (i__41763__auto___50127 + (1));
i__41763__auto___50127 = G__50128;
continue;
} else {
}
break;
}

var G__50125 = args50118.length;
switch (G__50125) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50118.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50116__auto__","x__50116__auto__",917323223,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50117__auto__","y__50117__auto__",392283064,null)),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50116__auto__","x__50116__auto__",917323223,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50117__auto__","y__50117__auto__",392283064,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50116__auto__","x__50116__auto__",917323223,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__50117__auto__","y__50117__auto__",392283064,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq50119){
var G__50120 = cljs.core.first.call(null,seq50119);
var seq50119__$1 = cljs.core.next.call(null,seq50119);
var G__50121 = cljs.core.first.call(null,seq50119__$1);
var seq50119__$2 = cljs.core.next.call(null,seq50119__$1);
var G__50122 = cljs.core.first.call(null,seq50119__$2);
var seq50119__$3 = cljs.core.next.call(null,seq50119__$2);
var G__50123 = cljs.core.first.call(null,seq50119__$3);
var seq50119__$4 = cljs.core.next.call(null,seq50119__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__50120,G__50121,G__50122,G__50123,seq50119__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args50130 = [];
var len__41762__auto___50138 = arguments.length;
var i__41763__auto___50139 = (0);
while(true){
if((i__41763__auto___50139 < len__41762__auto___50138)){
args50130.push((arguments[i__41763__auto___50139]));

var G__50140 = (i__41763__auto___50139 + (1));
i__41763__auto___50139 = G__50140;
continue;
} else {
}
break;
}

var G__50137 = args50130.length;
switch (G__50137) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50130.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq50131){
var G__50132 = cljs.core.first.call(null,seq50131);
var seq50131__$1 = cljs.core.next.call(null,seq50131);
var G__50133 = cljs.core.first.call(null,seq50131__$1);
var seq50131__$2 = cljs.core.next.call(null,seq50131__$1);
var G__50134 = cljs.core.first.call(null,seq50131__$2);
var seq50131__$3 = cljs.core.next.call(null,seq50131__$2);
var G__50135 = cljs.core.first.call(null,seq50131__$3);
var seq50131__$4 = cljs.core.next.call(null,seq50131__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__50132,G__50133,G__50134,G__50135,seq50131__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args50142 = [];
var len__41762__auto___50150 = arguments.length;
var i__41763__auto___50151 = (0);
while(true){
if((i__41763__auto___50151 < len__41762__auto___50150)){
args50142.push((arguments[i__41763__auto___50151]));

var G__50152 = (i__41763__auto___50151 + (1));
i__41763__auto___50151 = G__50152;
continue;
} else {
}
break;
}

var G__50149 = args50142.length;
switch (G__50149) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50142.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq50143){
var G__50144 = cljs.core.first.call(null,seq50143);
var seq50143__$1 = cljs.core.next.call(null,seq50143);
var G__50145 = cljs.core.first.call(null,seq50143__$1);
var seq50143__$2 = cljs.core.next.call(null,seq50143__$1);
var G__50146 = cljs.core.first.call(null,seq50143__$2);
var seq50143__$3 = cljs.core.next.call(null,seq50143__$2);
var G__50147 = cljs.core.first.call(null,seq50143__$3);
var seq50143__$4 = cljs.core.next.call(null,seq50143__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__50144,G__50145,G__50146,G__50147,seq50143__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args50154 = [];
var len__41762__auto___50162 = arguments.length;
var i__41763__auto___50163 = (0);
while(true){
if((i__41763__auto___50163 < len__41762__auto___50162)){
args50154.push((arguments[i__41763__auto___50163]));

var G__50164 = (i__41763__auto___50163 + (1));
i__41763__auto___50163 = G__50164;
continue;
} else {
}
break;
}

var G__50161 = args50154.length;
switch (G__50161) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50154.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq50155){
var G__50156 = cljs.core.first.call(null,seq50155);
var seq50155__$1 = cljs.core.next.call(null,seq50155);
var G__50157 = cljs.core.first.call(null,seq50155__$1);
var seq50155__$2 = cljs.core.next.call(null,seq50155__$1);
var G__50158 = cljs.core.first.call(null,seq50155__$2);
var seq50155__$3 = cljs.core.next.call(null,seq50155__$2);
var G__50159 = cljs.core.first.call(null,seq50155__$3);
var seq50155__$4 = cljs.core.next.call(null,seq50155__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__50156,G__50157,G__50158,G__50159,seq50155__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args50166 = [];
var len__41762__auto___50174 = arguments.length;
var i__41763__auto___50175 = (0);
while(true){
if((i__41763__auto___50175 < len__41762__auto___50174)){
args50166.push((arguments[i__41763__auto___50175]));

var G__50176 = (i__41763__auto___50175 + (1));
i__41763__auto___50175 = G__50176;
continue;
} else {
}
break;
}

var G__50173 = args50166.length;
switch (G__50173) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50166.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq50167){
var G__50168 = cljs.core.first.call(null,seq50167);
var seq50167__$1 = cljs.core.next.call(null,seq50167);
var G__50169 = cljs.core.first.call(null,seq50167__$1);
var seq50167__$2 = cljs.core.next.call(null,seq50167__$1);
var G__50170 = cljs.core.first.call(null,seq50167__$2);
var seq50167__$3 = cljs.core.next.call(null,seq50167__$2);
var G__50171 = cljs.core.first.call(null,seq50167__$3);
var seq50167__$4 = cljs.core.next.call(null,seq50167__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__50168,G__50169,G__50170,G__50171,seq50167__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args50178 = [];
var len__41762__auto___50186 = arguments.length;
var i__41763__auto___50187 = (0);
while(true){
if((i__41763__auto___50187 < len__41762__auto___50186)){
args50178.push((arguments[i__41763__auto___50187]));

var G__50188 = (i__41763__auto___50187 + (1));
i__41763__auto___50187 = G__50188;
continue;
} else {
}
break;
}

var G__50185 = args50178.length;
switch (G__50185) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50178.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq50179){
var G__50180 = cljs.core.first.call(null,seq50179);
var seq50179__$1 = cljs.core.next.call(null,seq50179);
var G__50181 = cljs.core.first.call(null,seq50179__$1);
var seq50179__$2 = cljs.core.next.call(null,seq50179__$1);
var G__50182 = cljs.core.first.call(null,seq50179__$2);
var seq50179__$3 = cljs.core.next.call(null,seq50179__$2);
var G__50183 = cljs.core.first.call(null,seq50179__$3);
var seq50179__$4 = cljs.core.next.call(null,seq50179__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__50180,G__50181,G__50182,G__50183,seq50179__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__41526__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)),(function (){var x__41526__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__50190__auto__","h__50190__auto__",1451660588,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50191__auto__","x__50191__auto__",-1470867558,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50191__auto__","x__50191__auto__",-1470867558,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50199 = arguments.length;
var i__41763__auto___50200 = (0);
while(true){
if((i__41763__auto___50200 < len__41762__auto___50199)){
args__41769__auto__.push((arguments[i__41763__auto___50200]));

var G__50201 = (i__41763__auto___50200 + (1));
i__41763__auto___50200 = G__50201;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((6) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__41770__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq50192){
var G__50193 = cljs.core.first.call(null,seq50192);
var seq50192__$1 = cljs.core.next.call(null,seq50192);
var G__50194 = cljs.core.first.call(null,seq50192__$1);
var seq50192__$2 = cljs.core.next.call(null,seq50192__$1);
var G__50195 = cljs.core.first.call(null,seq50192__$2);
var seq50192__$3 = cljs.core.next.call(null,seq50192__$2);
var G__50196 = cljs.core.first.call(null,seq50192__$3);
var seq50192__$4 = cljs.core.next.call(null,seq50192__$3);
var G__50197 = cljs.core.first.call(null,seq50192__$4);
var seq50192__$5 = cljs.core.next.call(null,seq50192__$4);
var G__50198 = cljs.core.first.call(null,seq50192__$5);
var seq50192__$6 = cljs.core.next.call(null,seq50192__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__50193,G__50194,G__50195,G__50196,G__50197,G__50198,seq50192__$6);
});

cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = clojure.walk.postwalk.call(null,(function (p1__50202_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__50202_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__50202_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__50202_SHARP_));
} else {
return p1__50202_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__50203,fkv){
var vec__50205 = p__50203;
var f1 = cljs.core.nth.call(null,vec__50205,(0),null);
var k = cljs.core.nth.call(null,vec__50205,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50209 = arguments.length;
var i__41763__auto___50210 = (0);
while(true){
if((i__41763__auto___50210 < len__41762__auto___50209)){
args__41769__auto__.push((arguments[i__41763__auto___50210]));

var G__50211 = (i__41763__auto___50210 + (1));
i__41763__auto___50210 = G__50211;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__41526__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),locals,(function (){var x__41526__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),locals,(function (){var x__41526__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq50206){
var G__50207 = cljs.core.first.call(null,seq50206);
var seq50206__$1 = cljs.core.next.call(null,seq50206);
var G__50208 = cljs.core.first.call(null,seq50206__$1);
var seq50206__$2 = cljs.core.next.call(null,seq50206__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__50207,G__50208,seq50206__$2);
});

cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50216 = arguments.length;
var i__41763__auto___50217 = (0);
while(true){
if((i__41763__auto___50217 < len__41762__auto___50216)){
args__41769__auto__.push((arguments[i__41763__auto___50217]));

var G__50218 = (i__41763__auto___50217 + (1));
i__41763__auto___50217 = G__50218;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq50212){
var G__50213 = cljs.core.first.call(null,seq50212);
var seq50212__$1 = cljs.core.next.call(null,seq50212);
var G__50214 = cljs.core.first.call(null,seq50212__$1);
var seq50212__$2 = cljs.core.next.call(null,seq50212__$1);
var G__50215 = cljs.core.first.call(null,seq50212__$2);
var seq50212__$3 = cljs.core.next.call(null,seq50212__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50213,G__50214,G__50215,seq50212__$3);
});

cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50223 = arguments.length;
var i__41763__auto___50224 = (0);
while(true){
if((i__41763__auto___50224 < len__41762__auto___50223)){
args__41769__auto__.push((arguments[i__41763__auto___50224]));

var G__50225 = (i__41763__auto___50224 + (1));
i__41763__auto___50224 = G__50225;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq50219){
var G__50220 = cljs.core.first.call(null,seq50219);
var seq50219__$1 = cljs.core.next.call(null,seq50219);
var G__50221 = cljs.core.first.call(null,seq50219__$1);
var seq50219__$2 = cljs.core.next.call(null,seq50219__$1);
var G__50222 = cljs.core.first.call(null,seq50219__$2);
var seq50219__$3 = cljs.core.next.call(null,seq50219__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__50220,G__50221,G__50222,seq50219__$3);
});

cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50230 = arguments.length;
var i__41763__auto___50231 = (0);
while(true){
if((i__41763__auto___50231 < len__41762__auto___50230)){
args__41769__auto__.push((arguments[i__41763__auto___50231]));

var G__50232 = (i__41763__auto___50231 + (1));
i__41763__auto___50231 = G__50232;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq50226){
var G__50227 = cljs.core.first.call(null,seq50226);
var seq50226__$1 = cljs.core.next.call(null,seq50226);
var G__50228 = cljs.core.first.call(null,seq50226__$1);
var seq50226__$2 = cljs.core.next.call(null,seq50226__$1);
var G__50229 = cljs.core.first.call(null,seq50226__$2);
var seq50226__$3 = cljs.core.next.call(null,seq50226__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__50227,G__50228,G__50229,seq50226__$3);
});

cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__40680__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__40680__auto__)){
var and__40680__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__40680__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__40680__auto____$1;
}
} else {
return and__40680__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__50233 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__50234 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__50233;
s = G__50234;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__50235){
var vec__50239 = p__50235;
var p = cljs.core.nth.call(null,vec__50239,(0),null);
var sigs = cljs.core.nth.call(null,vec__50239,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__50239,p,sigs){
return (function (p__50240){
var vec__50241 = p__50240;
var f = cljs.core.nth.call(null,vec__50241,(0),null);
var meths = cljs.core.nthnext.call(null,vec__50241,(1));
var form = vec__50241;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(psym,pfn_prefix,vec__50239,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__41617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__41618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__41619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__41620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__41621__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__41617__auto__,prefer_table__41618__auto__,method_cache__41619__auto__,cached_hierarchy__41620__auto__,hierarchy__41621__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__41617__auto__,prefer_table__41618__auto__,method_cache__41619__auto__,cached_hierarchy__41620__auto__,hierarchy__41621__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__41621__auto__,method_table__41617__auto__,prefer_table__41618__auto__,method_cache__41619__auto__,cached_hierarchy__41620__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__41526__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__41526__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__41526__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__50242){
var vec__50245 = p__50242;
var vec__50246 = cljs.core.nth.call(null,vec__50245,(0),null);
var this$ = cljs.core.nth.call(null,vec__50246,(0),null);
var args = cljs.core.nthnext.call(null,vec__50246,(1));
var sig = vec__50246;
var body = cljs.core.nthnext.call(null,vec__50245,(1));
var x__41526__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__50247){
var vec__50250 = p__50247;
var vec__50251 = cljs.core.nth.call(null,vec__50250,(0),null);
var this$ = cljs.core.nth.call(null,vec__50251,(0),null);
var args = cljs.core.nthnext.call(null,vec__50251,(1));
var sig = vec__50251;
var body = cljs.core.nthnext.call(null,vec__50250,(1));
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__41526__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__50252){
var vec__50255 = p__50252;
var vec__50256 = cljs.core.nth.call(null,vec__50255,(0),null);
var this$ = cljs.core.nth.call(null,vec__50256,(0),null);
var args = cljs.core.nthnext.call(null,vec__50256,(1));
var sig = vec__50256;
var body = cljs.core.nthnext.call(null,vec__50255,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__41526__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__50257){
var vec__50260 = p__50257;
var vec__50261 = cljs.core.nth.call(null,vec__50260,(0),null);
var this$ = cljs.core.nth.call(null,vec__50261,(0),null);
var args = cljs.core.nthnext.call(null,vec__50261,(1));
var sig = vec__50261;
var body = cljs.core.nthnext.call(null,vec__50260,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__41526__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__50266){
var vec__50267 = p__50266;
var f = cljs.core.nth.call(null,vec__50267,(0),null);
var meths = cljs.core.nthnext.call(null,vec__50267,(1));
var form = vec__50267;
var vec__50268 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__50268,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__50268,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__50268,f__$1,meths__$1,vec__50267,f,meths,form){
return (function (p1__50262_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__50262_SHARP_);
});})(vec__50268,f__$1,meths__$1,vec__50267,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__50270){
var vec__50272 = p__50270;
var f = cljs.core.nth.call(null,vec__50272,(0),null);
var meths = cljs.core.nthnext.call(null,vec__50272,(1));
var form = vec__50272;
return cljs.core.map.call(null,((function (vec__50272,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(vec__50272,f,meths,form))
,cljs.core.map.call(null,((function (vec__50272,f,meths,form){
return (function (p1__50269_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__50269_SHARP_);
});})(vec__50272,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__50274){
var vec__50276 = p__50274;
var f = cljs.core.nth.call(null,vec__50276,(0),null);
var meths = cljs.core.nthnext.call(null,vec__50276,(1));
var form = vec__50276;
var meths__$1 = cljs.core.map.call(null,((function (vec__50276,f,meths,form){
return (function (p1__50273_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__50273_SHARP_);
});})(vec__50276,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__41526__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__41526__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__50277){
var vec__50281 = p__50277;
var f = cljs.core.nth.call(null,vec__50281,(0),null);
var meths = cljs.core.nthnext.call(null,vec__50281,(1));
var form = vec__50281;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__50281,f,meths,form){
return (function (p__50282){
var vec__50283 = p__50282;
var sig = cljs.core.nth.call(null,vec__50283,(0),null);
var body = cljs.core.nthnext.call(null,vec__50283,(1));
var meth = vec__50283;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(pf,vec__50281,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__50284){
var vec__50286 = p__50284;
var p = cljs.core.nth.call(null,vec__50286,(0),null);
var sigs = cljs.core.nth.call(null,vec__50286,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__50286,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__50286,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__50288 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__50288,(0),null);
var sigs = cljs.core.nth.call(null,vec__50288,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_50289 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_50289))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__50290 = cljs.core.next.call(null,sigs__$1);
var G__50291 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__50290;
seen = G__50291;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_50294 = cljs.core.PersistentHashSet.EMPTY;
var methods_50295__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_50295__$1)){
var vec__50293_50296 = cljs.core.first.call(null,methods_50295__$1);
var fname_50297 = cljs.core.nth.call(null,vec__50293_50296,(0),null);
var method_50298 = vec__50293_50296;
if(cljs.core.contains_QMARK_.call(null,seen_50294,fname_50297)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_50297], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_50298);

var G__50299 = cljs.core.conj.call(null,seen_50294,fname_50297);
var G__50300 = cljs.core.next.call(null,methods_50295__$1);
seen_50294 = G__50299;
methods_50295__$1 = G__50300;
continue;
} else {
}
break;
}

var G__50301 = cljs.core.conj.call(null,protos,proto);
var G__50302 = impls__$2;
protos = G__50301;
impls__$1 = G__50302;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50309 = arguments.length;
var i__41763__auto___50310 = (0);
while(true){
if((i__41763__auto___50310 < len__41762__auto___50309)){
args__41769__auto__.push((arguments[i__41763__auto___50310]));

var G__50311 = (i__41763__auto___50310 + (1));
i__41763__auto___50310 = G__50311;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__50308 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__50308,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__50308,(1),null);
if(cljs.core.truth_((function (){var and__40680__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__40680__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__50308,type,assign_impls){
return (function (p1__50303_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__50303_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__50308,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq50304){
var G__50305 = cljs.core.first.call(null,seq50304);
var seq50304__$1 = cljs.core.next.call(null,seq50304);
var G__50306 = cljs.core.first.call(null,seq50304__$1);
var seq50304__$2 = cljs.core.next.call(null,seq50304__$1);
var G__50307 = cljs.core.first.call(null,seq50304__$2);
var seq50304__$3 = cljs.core.next.call(null,seq50304__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__50305,G__50306,G__50307,seq50304__$3);
});

cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__50313){
var vec__50315 = p__50313;
var f = cljs.core.nth.call(null,vec__50315,(0),null);
var sigs = cljs.core.nth.call(null,vec__50315,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__50315,f,sigs){
return (function (p1__50312_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__50312_SHARP_),cljs.core.nnext.call(null,p1__50312_SHARP_));
});})(vec__50315,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args50316 = [];
var len__41762__auto___50319 = arguments.length;
var i__41763__auto___50320 = (0);
while(true){
if((i__41763__auto___50320 < len__41762__auto___50319)){
args50316.push((arguments[i__41763__auto___50320]));

var G__50321 = (i__41763__auto___50320 + (1));
i__41763__auto___50320 = G__50321;
continue;
} else {
}
break;
}

var G__50318 = args50316.length;
switch (G__50318) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50316.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__50323 = ret__$1;
var G__50324 = specs__$2;
ret = G__50323;
specs__$1 = G__50324;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;
cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__50325_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__50325_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__41526__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50335 = arguments.length;
var i__41763__auto___50336 = (0);
while(true){
if((i__41763__auto___50336 < len__41762__auto___50335)){
args__41769__auto__.push((arguments[i__41763__auto___50336]));

var G__50337 = (i__41763__auto___50336 + (1));
i__41763__auto___50336 = G__50337;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__50334 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__50334,(0),null);
var pmasks = cljs.core.nth.call(null,vec__50334,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50326__auto__","this__50326__auto__",-955440846,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50327__auto__","writer__50327__auto__",902196646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__50328__auto__","opt__50328__auto__",-1532807649,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50327__auto__","writer__50327__auto__",902196646,null)),(function (){var x__41526__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq50329){
var G__50330 = cljs.core.first.call(null,seq50329);
var seq50329__$1 = cljs.core.next.call(null,seq50329);
var G__50331 = cljs.core.first.call(null,seq50329__$1);
var seq50329__$2 = cljs.core.next.call(null,seq50329__$1);
var G__50332 = cljs.core.first.call(null,seq50329__$2);
var seq50329__$3 = cljs.core.next.call(null,seq50329__$2);
var G__50333 = cljs.core.first.call(null,seq50329__$3);
var seq50329__$4 = cljs.core.next.call(null,seq50329__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__50330,G__50331,G__50332,G__50333,seq50329__$4);
});

cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__50338_SHARP_){
return cljs.core.with_meta.call(null,p1__50338_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50339__auto__","this__50339__auto__",-1200001159,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50340__auto__","this__50340__auto__",-672171087,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50340__auto__","this__50340__auto__",-672171087,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50341__auto__","this__50341__auto__",1099987560,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__50342__auto__","other__50342__auto__",1204251980,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__50342__auto__","other__50342__auto__",1204251980,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50341__auto__","this__50341__auto__",1099987560,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__50342__auto__","other__50342__auto__",1204251980,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50341__auto__","this__50341__auto__",1099987560,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__50342__auto__","other__50342__auto__",1204251980,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50343__auto__","this__50343__auto__",-997752714,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50344__auto__","this__50344__auto__",2071821176,null)),(function (){var x__41526__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50345__auto__","this__50345__auto__",-1521721268,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50346__auto__","k__50346__auto__",417783801,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50345__auto__","this__50345__auto__",-1521721268,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50346__auto__","k__50346__auto__",417783801,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50347__auto__","this__50347__auto__",1202884152,null)),(function (){var x__41526__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__50348__auto__","else__50348__auto__",912068739,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__41526__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__41526__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__50348__auto__","else__50348__auto__",912068739,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50349__auto__","this__50349__auto__",424015744,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__41526__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50350__auto__","this__50350__auto__",-2037385914,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__50351__auto__","entry__50351__auto__",-1121724960,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__50351__auto__","entry__50351__auto__",-1121724960,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50350__auto__","this__50350__auto__",-2037385914,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__50351__auto__","entry__50351__auto__",-1121724960,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__50351__auto__","entry__50351__auto__",-1121724960,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50350__auto__","this__50350__auto__",-2037385914,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__50351__auto__","entry__50351__auto__",-1121724960,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50352__auto__","this__50352__auto__",-1520443821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50353__auto__","k__50353__auto__",-296136168,null)),(function (){var x__41526__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50353__auto__","k__50353__auto__",-296136168,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50353__auto__","k__50353__auto__",-296136168,null)),(function (){var x__41526__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50354__auto__","this__50354__auto__",1487870705,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50355__auto__","k__50355__auto__",198667056,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50355__auto__","k__50355__auto__",198667056,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50354__auto__","this__50354__auto__",1487870705,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50355__auto__","k__50355__auto__",198667056,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__50355__auto__","k__50355__auto__",198667056,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50357__auto__","this__50357__auto__",1032786912,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__50356_SHARP_){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.keyword.call(null,p1__50356_SHARP_);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = p1__50356_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__41526__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50359__auto__","this__50359__auto__",-1751114007,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50360__auto__","writer__50360__auto__",-1352607836,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__50361__auto__","opts__50361__auto__",146745062,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__50362__auto__","pr-pair__50362__auto__",-1198173516,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__50363__auto__","keyval__50363__auto__",-381079705,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50360__auto__","writer__50360__auto__",-1352607836,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__50361__auto__","opts__50361__auto__",146745062,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__50363__auto__","keyval__50363__auto__",-381079705,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50360__auto__","writer__50360__auto__",-1352607836,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__50362__auto__","pr-pair__50362__auto__",-1198173516,null)),(function (){var x__41526__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__50361__auto__","opts__50361__auto__",146745062,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__50358_SHARP_){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.keyword.call(null,p1__50358_SHARP_);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = p1__50358_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null));
var vec__50365 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__50365,(0),null);
var pmasks = cljs.core.nth.call(null,vec__50365,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__41526__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__41526__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__41526__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__41526__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50373 = arguments.length;
var i__41763__auto___50374 = (0);
while(true){
if((i__41763__auto___50374 < len__41762__auto___50373)){
args__41769__auto__.push((arguments[i__41763__auto___50374]));

var G__50375 = (i__41763__auto___50374 + (1));
i__41763__auto___50374 = G__50375;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__41526__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__41526__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__41526__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50366__auto__","this__50366__auto__",-884752424,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__41526__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__41526__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50366__auto__","this__50366__auto__",-884752424,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50367__auto__","writer__50367__auto__",-1001306401,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__50367__auto__","writer__50367__auto__",-1001306401,null)),(function (){var x__41526__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq50368){
var G__50369 = cljs.core.first.call(null,seq50368);
var seq50368__$1 = cljs.core.next.call(null,seq50368);
var G__50370 = cljs.core.first.call(null,seq50368__$1);
var seq50368__$2 = cljs.core.next.call(null,seq50368__$1);
var G__50371 = cljs.core.first.call(null,seq50368__$2);
var seq50368__$3 = cljs.core.next.call(null,seq50368__$2);
var G__50372 = cljs.core.first.call(null,seq50368__$3);
var seq50368__$4 = cljs.core.next.call(null,seq50368__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__50369,G__50370,G__50371,G__50372,seq50368__$4);
});

cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50393 = arguments.length;
var i__41763__auto___50394 = (0);
while(true){
if((i__41763__auto___50394 < len__41762__auto___50393)){
args__41769__auto__.push((arguments[i__41763__auto___50394]));

var G__50395 = (i__41763__auto___50394 + (1));
i__41763__auto___50394 = G__50395;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__50382 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__50382,(0),null);
var methods$ = cljs.core.nth.call(null,vec__50382,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__50382,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__50382,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__50383 = cljs.core.seq.call(null,methods$);
var chunk__50384 = null;
var count__50385 = (0);
var i__50386 = (0);
while(true){
if((i__50386 < count__50385)){
var vec__50387 = cljs.core._nth.call(null,chunk__50384,i__50386);
var mname = cljs.core.nth.call(null,vec__50387,(0),null);
var arities = cljs.core.nthnext.call(null,vec__50387,(1));
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__50396 = seq__50383;
var G__50397 = chunk__50384;
var G__50398 = count__50385;
var G__50399 = (i__50386 + (1));
seq__50383 = G__50396;
chunk__50384 = G__50397;
count__50385 = G__50398;
i__50386 = G__50399;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50383);
if(temp__4657__auto__){
var seq__50383__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50383__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__50383__$1);
var G__50400 = cljs.core.chunk_rest.call(null,seq__50383__$1);
var G__50401 = c__41503__auto__;
var G__50402 = cljs.core.count.call(null,c__41503__auto__);
var G__50403 = (0);
seq__50383 = G__50400;
chunk__50384 = G__50401;
count__50385 = G__50402;
i__50386 = G__50403;
continue;
} else {
var vec__50388 = cljs.core.first.call(null,seq__50383__$1);
var mname = cljs.core.nth.call(null,vec__50388,(0),null);
var arities = cljs.core.nthnext.call(null,vec__50388,(1));
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__50404 = cljs.core.next.call(null,seq__50383__$1);
var G__50405 = null;
var G__50406 = (0);
var G__50407 = (0);
seq__50383 = G__50404;
chunk__50384 = G__50405;
count__50385 = G__50406;
i__50386 = G__50407;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50376__auto__","x__50376__auto__",708356085,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__41526__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50376__auto__","x__50376__auto__",708356085,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__41526__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__50377__auto__","m__50377__auto__",-398755474,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__41526__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__50389){
var vec__50390 = p__50389;
var fname = cljs.core.nth.call(null,vec__50390,(0),null);
var sigs = cljs.core.nthnext.call(null,vec__50390,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__50391){
var vec__50392 = p__50391;
var fname = cljs.core.nth.call(null,vec__50392,(0),null);
var sigs = cljs.core.nthnext.call(null,vec__50392,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__41526__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__50392,fname,sigs,p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__50392,fname,sigs,p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__50382,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__41526__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq50378){
var G__50379 = cljs.core.first.call(null,seq50378);
var seq50378__$1 = cljs.core.next.call(null,seq50378);
var G__50380 = cljs.core.first.call(null,seq50378__$1);
var seq50378__$2 = cljs.core.next.call(null,seq50378__$1);
var G__50381 = cljs.core.first.call(null,seq50378__$2);
var seq50378__$3 = cljs.core.next.call(null,seq50378__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__50379,G__50380,G__50381,seq50378__$3);
});

cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__50409 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__50409,(0),null);
var bit = cljs.core.nth.call(null,vec__50409,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__41526__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__41526__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__50411 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__50411,(0),null);
var bit = cljs.core.nth.call(null,vec__50411,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__41526__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__41526__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__41526__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__41526__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__41526__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__41526__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50415 = arguments.length;
var i__41763__auto___50416 = (0);
while(true){
if((i__41763__auto___50416 < len__41762__auto___50415)){
args__41769__auto__.push((arguments[i__41763__auto___50416]));

var G__50417 = (i__41763__auto___50416 + (1));
i__41763__auto___50416 = G__50417;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq50412){
var G__50413 = cljs.core.first.call(null,seq50412);
var seq50412__$1 = cljs.core.next.call(null,seq50412);
var G__50414 = cljs.core.first.call(null,seq50412__$1);
var seq50412__$2 = cljs.core.next.call(null,seq50412__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__50413,G__50414,seq50412__$2);
});

cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50421 = arguments.length;
var i__41763__auto___50422 = (0);
while(true){
if((i__41763__auto___50422 < len__41762__auto___50421)){
args__41769__auto__.push((arguments[i__41763__auto___50422]));

var G__50423 = (i__41763__auto___50422 + (1));
i__41763__auto___50422 = G__50423;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq50418){
var G__50419 = cljs.core.first.call(null,seq50418);
var seq50418__$1 = cljs.core.next.call(null,seq50418);
var G__50420 = cljs.core.first.call(null,seq50418__$1);
var seq50418__$2 = cljs.core.next.call(null,seq50418__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__50419,G__50420,seq50418__$2);
});

cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50430 = arguments.length;
var i__41763__auto___50431 = (0);
while(true){
if((i__41763__auto___50431 < len__41762__auto___50430)){
args__41769__auto__.push((arguments[i__41763__auto___50431]));

var G__50432 = (i__41763__auto___50431 + (1));
i__41763__auto___50431 = G__50432;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__50428){
var vec__50429 = p__50428;
var k = cljs.core.nth.call(null,vec__50429,(0),null);
var v = cljs.core.nth.call(null,vec__50429,(1),null);
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq50424){
var G__50425 = cljs.core.first.call(null,seq50424);
var seq50424__$1 = cljs.core.next.call(null,seq50424);
var G__50426 = cljs.core.first.call(null,seq50424__$1);
var seq50424__$2 = cljs.core.next.call(null,seq50424__$1);
var G__50427 = cljs.core.first.call(null,seq50424__$2);
var seq50424__$3 = cljs.core.next.call(null,seq50424__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__50425,G__50426,G__50427,seq50424__$3);
});

cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50437 = arguments.length;
var i__41763__auto___50438 = (0);
while(true){
if((i__41763__auto___50438 < len__41762__auto___50437)){
args__41769__auto__.push((arguments[i__41763__auto___50438]));

var G__50439 = (i__41763__auto___50438 + (1));
i__41763__auto___50438 = G__50439;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__41526__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq50433){
var G__50434 = cljs.core.first.call(null,seq50433);
var seq50433__$1 = cljs.core.next.call(null,seq50433);
var G__50435 = cljs.core.first.call(null,seq50433__$1);
var seq50433__$2 = cljs.core.next.call(null,seq50433__$1);
var G__50436 = cljs.core.first.call(null,seq50433__$2);
var seq50433__$3 = cljs.core.next.call(null,seq50433__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__50434,G__50435,G__50436,seq50433__$3);
});

cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50450 = arguments.length;
var i__41763__auto___50451 = (0);
while(true){
if((i__41763__auto___50451 < len__41762__auto___50450)){
args__41769__auto__.push((arguments[i__41763__auto___50451]));

var G__50452 = (i__41763__auto___50451 + (1));
i__41763__auto___50451 = G__50452;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__50448 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__50449 = cljs.core.nth.call(null,vec__50448,(0),null);
var a = cljs.core.nth.call(null,vec__50449,(0),null);
var b = cljs.core.nth.call(null,vec__50449,(1),null);
var c = cljs.core.nth.call(null,vec__50449,(2),null);
var clause = vec__50449;
var more = cljs.core.nth.call(null,vec__50448,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__41526__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__50440__auto__","p__50440__auto__",254928804,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__50440__auto__","p__50440__auto__",254928804,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq50441){
var G__50442 = cljs.core.first.call(null,seq50441);
var seq50441__$1 = cljs.core.next.call(null,seq50441);
var G__50443 = cljs.core.first.call(null,seq50441__$1);
var seq50441__$2 = cljs.core.next.call(null,seq50441__$1);
var G__50444 = cljs.core.first.call(null,seq50441__$2);
var seq50441__$3 = cljs.core.next.call(null,seq50441__$2);
var G__50445 = cljs.core.first.call(null,seq50441__$3);
var seq50441__$4 = cljs.core.next.call(null,seq50441__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__50442,G__50443,G__50444,G__50445,seq50441__$4);
});

cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__40680__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__40680__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__40680__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50467 = arguments.length;
var i__41763__auto___50468 = (0);
while(true){
if((i__41763__auto___50468 < len__41762__auto___50467)){
args__41769__auto__.push((arguments[i__41763__auto___50468]));

var G__50469 = (i__41763__auto___50468 + (1));
i__41763__auto___50468 = G__50469;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__41526__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__50461){
var vec__50462 = p__50461;
var test = cljs.core.nth.call(null,vec__50462,(0),null);
var expr = cljs.core.nth.call(null,vec__50462,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__50462,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__41526__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__50462,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__41526__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__50453_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__50453_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__50454_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__50454_SHARP_)){
return cljs.core.vec.call(null,p1__50454_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50454_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__50456_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__50456_SHARP_)){
return cljs.core.vec.call(null,p1__50456_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50456_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__50455_SHARP_){
return [cljs.core.str(p1__50455_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__41526__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__41526__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__50465){
var vec__50466 = p__50465;
var m = cljs.core.nth.call(null,vec__50466,(0),null);
var c = cljs.core.nth.call(null,vec__50466,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__41526__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__41526__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq50457){
var G__50458 = cljs.core.first.call(null,seq50457);
var seq50457__$1 = cljs.core.next.call(null,seq50457);
var G__50459 = cljs.core.first.call(null,seq50457__$1);
var seq50457__$2 = cljs.core.next.call(null,seq50457__$1);
var G__50460 = cljs.core.first.call(null,seq50457__$2);
var seq50457__$3 = cljs.core.next.call(null,seq50457__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__50458,G__50459,G__50460,seq50457__$3);
});

cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args50470 = [];
var len__41762__auto___50473 = arguments.length;
var i__41763__auto___50474 = (0);
while(true){
if((i__41763__auto___50474 < len__41762__auto___50473)){
args50470.push((arguments[i__41763__auto___50474]));

var G__50475 = (i__41763__auto___50474 + (1));
i__41763__auto___50474 = G__50475;
continue;
} else {
}
break;
}

var G__50472 = args50470.length;
switch (G__50472) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args50470.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__41526__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__41526__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__50513){
var vec__50514 = p__50513;
var k = cljs.core.nth.call(null,vec__50514,(0),null);
var v = cljs.core.nth.call(null,vec__50514,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__50544__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__50544 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__50545__i = 0, G__50545__a = new Array(arguments.length -  0);
while (G__50545__i < G__50545__a.length) {G__50545__a[G__50545__i] = arguments[G__50545__i + 0]; ++G__50545__i;}
  msg = new cljs.core.IndexedSeq(G__50545__a,0);
} 
return G__50544__delegate.call(this,msg);};
G__50544.cljs$lang$maxFixedArity = 0;
G__50544.cljs$lang$applyTo = (function (arglist__50546){
var msg = cljs.core.seq(arglist__50546);
return G__50544__delegate(msg);
});
G__50544.cljs$core$IFn$_invoke$arity$variadic = G__50544__delegate;
return G__50544;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__50515){
var vec__50530 = p__50515;
var vec__50531 = cljs.core.nth.call(null,vec__50530,(0),null);
var bind = cljs.core.nth.call(null,vec__50531,(0),null);
var expr = cljs.core.nth.call(null,vec__50531,(1),null);
var mod_pairs = cljs.core.nthnext.call(null,vec__50531,(2));
var vec__50532 = cljs.core.nthnext.call(null,vec__50530,(1));
var vec__50533 = cljs.core.nth.call(null,vec__50532,(0),null);
var _ = cljs.core.nth.call(null,vec__50533,(0),null);
var next_expr = cljs.core.nth.call(null,vec__50533,(1),null);
var next_groups = vec__50532;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__50530,vec__50531,bind,expr,mod_pairs,vec__50532,vec__50533,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__50534){
var vec__50537 = p__50534;
var vec__50538 = cljs.core.nth.call(null,vec__50537,(0),null);
var k = cljs.core.nth.call(null,vec__50538,(0),null);
var v = cljs.core.nth.call(null,vec__50538,(1),null);
var pair = vec__50538;
var etc = cljs.core.nthnext.call(null,vec__50537,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__50477__auto__","iterys__50477__auto__",1144842822,null)),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__50478__auto__","fs__50478__auto__",-1864864501,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__50477__auto__","iterys__50477__auto__",1144842822,null)),(function (){var x__41526__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__50478__auto__","fs__50478__auto__",-1864864501,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__50478__auto__","fs__50478__auto__",-1864864501,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__41526__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__50530,vec__50531,bind,expr,mod_pairs,vec__50532,vec__50533,_,next_expr,next_groups,to_groups,err))
;
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__50530,vec__50531,bind,expr,mod_pairs,vec__50532,vec__50533,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__50539){
var vec__50542 = p__50539;
var vec__50543 = cljs.core.nth.call(null,vec__50542,(0),null);
var k = cljs.core.nth.call(null,vec__50543,(0),null);
var v = cljs.core.nth.call(null,vec__50543,(1),null);
var pair = vec__50543;
var etc = cljs.core.nthnext.call(null,vec__50542,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__41526__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__41526__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__41526__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__50530,vec__50531,bind,expr,mod_pairs,vec__50532,vec__50533,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50479__auto__","c__50479__auto__",-1250594719,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/rasmuserik/webworker-cljs-eval/resources/public/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2279),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2279),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__50480__auto__","size__50480__auto__",1035022799,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50479__auto__","c__50479__auto__",-1250594719,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__50480__auto__","size__50480__auto__",1035022799,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__50480__auto__","size__50480__auto__",1035022799,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50479__auto__","c__50479__auto__",-1250594719,null)),(function (){var x__41526__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__41526__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__41526__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__41526__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__50481__auto__","iter__50481__auto__",-1115148829,null)),(function (){var x__41526__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__50481__auto__","iter__50481__auto__",-1115148829,null)),(function (){var x__41526__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50552 = arguments.length;
var i__41763__auto___50553 = (0);
while(true){
if((i__41763__auto___50553 < len__41762__auto___50552)){
args__41769__auto__.push((arguments[i__41763__auto___50553]));

var G__50554 = (i__41763__auto___50553 + (1));
i__41763__auto___50553 = G__50554;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__50555__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__50555 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__50556__i = 0, G__50556__a = new Array(arguments.length -  0);
while (G__50556__i < G__50556__a.length) {G__50556__a[G__50556__i] = arguments[G__50556__i + 0]; ++G__50556__i;}
  msg = new cljs.core.IndexedSeq(G__50556__a,0);
} 
return G__50555__delegate.call(this,msg);};
G__50555.cljs$lang$maxFixedArity = 0;
G__50555.cljs$lang$applyTo = (function (arglist__50557){
var msg = cljs.core.seq(arglist__50557);
return G__50555__delegate(msg);
});
G__50555.cljs$core$IFn$_invoke$arity$variadic = G__50555__delegate;
return G__50555;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__41526__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__41526__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__41526__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50547__auto__","c__50547__auto__",-1854454343,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50547__auto__","c__50547__auto__",-1854454343,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__50547__auto__","c__50547__auto__",-1854454343,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__41526__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq50548){
var G__50549 = cljs.core.first.call(null,seq50548);
var seq50548__$1 = cljs.core.next.call(null,seq50548);
var G__50550 = cljs.core.first.call(null,seq50548__$1);
var seq50548__$2 = cljs.core.next.call(null,seq50548__$1);
var G__50551 = cljs.core.first.call(null,seq50548__$2);
var seq50548__$3 = cljs.core.next.call(null,seq50548__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__50549,G__50550,G__50551,seq50548__$3);
});

cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50561 = arguments.length;
var i__41763__auto___50562 = (0);
while(true){
if((i__41763__auto___50562 < len__41762__auto___50561)){
args__41769__auto__.push((arguments[i__41763__auto___50562]));

var G__50563 = (i__41763__auto___50562 + (1));
i__41763__auto___50562 = G__50563;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq50558){
var G__50559 = cljs.core.first.call(null,seq50558);
var seq50558__$1 = cljs.core.next.call(null,seq50558);
var G__50560 = cljs.core.first.call(null,seq50558__$1);
var seq50558__$2 = cljs.core.next.call(null,seq50558__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__50559,G__50560,seq50558__$2);
});

cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args50567 = [];
var len__41762__auto___50575 = arguments.length;
var i__41763__auto___50576 = (0);
while(true){
if((i__41763__auto___50576 < len__41762__auto___50575)){
args50567.push((arguments[i__41763__auto___50576]));

var G__50577 = (i__41763__auto___50576 + (1));
i__41763__auto___50576 = G__50577;
continue;
} else {
}
break;
}

var G__50574 = args50567.length;
switch (G__50574) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50567.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41781__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__41526__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__41526__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__50564__auto__","dims__50564__auto__",-318409461,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__50565__auto__","dimarray__50565__auto__",-714055110,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__41526__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50566__auto__","i__50566__auto__",649930688,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__50565__auto__","dimarray__50565__auto__",-714055110,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__50565__auto__","dimarray__50565__auto__",-714055110,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50566__auto__","i__50566__auto__",649930688,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__50564__auto__","dims__50564__auto__",-318409461,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__50565__auto__","dimarray__50565__auto__",-714055110,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq50568){
var G__50569 = cljs.core.first.call(null,seq50568);
var seq50568__$1 = cljs.core.next.call(null,seq50568);
var G__50570 = cljs.core.first.call(null,seq50568__$1);
var seq50568__$2 = cljs.core.next.call(null,seq50568__$1);
var G__50571 = cljs.core.first.call(null,seq50568__$2);
var seq50568__$3 = cljs.core.next.call(null,seq50568__$2);
var G__50572 = cljs.core.first.call(null,seq50568__$3);
var seq50568__$4 = cljs.core.next.call(null,seq50568__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__50569,G__50570,G__50571,G__50572,seq50568__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args50580 = [];
var len__41762__auto___50587 = arguments.length;
var i__41763__auto___50588 = (0);
while(true){
if((i__41763__auto___50588 < len__41762__auto___50587)){
args50580.push((arguments[i__41763__auto___50588]));

var G__50589 = (i__41763__auto___50588 + (1));
i__41763__auto___50588 = G__50589;
continue;
} else {
}
break;
}

var G__50586 = args50580.length;
switch (G__50586) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50580.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41781__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50579__auto__","x__50579__auto__",-740410400,null)),(function (){var x__41526__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50579__auto__","x__50579__auto__",-740410400,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq50581){
var G__50582 = cljs.core.first.call(null,seq50581);
var seq50581__$1 = cljs.core.next.call(null,seq50581);
var G__50583 = cljs.core.first.call(null,seq50581__$1);
var seq50581__$2 = cljs.core.next.call(null,seq50581__$1);
var G__50584 = cljs.core.first.call(null,seq50581__$2);
var seq50581__$3 = cljs.core.next.call(null,seq50581__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__50582,G__50583,G__50584,seq50581__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args50591 = [];
var len__41762__auto___50597 = arguments.length;
var i__41763__auto___50598 = (0);
while(true){
if((i__41763__auto___50598 < len__41762__auto___50597)){
args50591.push((arguments[i__41763__auto___50598]));

var G__50599 = (i__41763__auto___50598 + (1));
i__41763__auto___50598 = G__50599;
continue;
} else {
}
break;
}

var G__50596 = args50591.length;
switch (G__50596) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50591.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq50592){
var G__50593 = cljs.core.first.call(null,seq50592);
var seq50592__$1 = cljs.core.next.call(null,seq50592);
var G__50594 = cljs.core.first.call(null,seq50592__$1);
var seq50592__$2 = cljs.core.next.call(null,seq50592__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__50593,G__50594,seq50592__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args50603 = [];
var len__41762__auto___50609 = arguments.length;
var i__41763__auto___50610 = (0);
while(true){
if((i__41763__auto___50610 < len__41762__auto___50609)){
args50603.push((arguments[i__41763__auto___50610]));

var G__50611 = (i__41763__auto___50610 + (1));
i__41763__auto___50610 = G__50611;
continue;
} else {
}
break;
}

var G__50608 = args50603.length;
switch (G__50608) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50603.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__50601_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__50601_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__50602_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__50602_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq50604){
var G__50605 = cljs.core.first.call(null,seq50604);
var seq50604__$1 = cljs.core.next.call(null,seq50604);
var G__50606 = cljs.core.first.call(null,seq50604__$1);
var seq50604__$2 = cljs.core.next.call(null,seq50604__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__50605,G__50606,seq50604__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args50613 = [];
var len__41762__auto___50619 = arguments.length;
var i__41763__auto___50620 = (0);
while(true){
if((i__41763__auto___50620 < len__41762__auto___50619)){
args50613.push((arguments[i__41763__auto___50620]));

var G__50621 = (i__41763__auto___50620 + (1));
i__41763__auto___50620 = G__50621;
continue;
} else {
}
break;
}

var G__50618 = args50613.length;
switch (G__50618) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50613.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq50614){
var G__50615 = cljs.core.first.call(null,seq50614);
var seq50614__$1 = cljs.core.next.call(null,seq50614);
var G__50616 = cljs.core.first.call(null,seq50614__$1);
var seq50614__$2 = cljs.core.next.call(null,seq50614__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__50615,G__50616,seq50614__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args50625 = [];
var len__41762__auto___50631 = arguments.length;
var i__41763__auto___50632 = (0);
while(true){
if((i__41763__auto___50632 < len__41762__auto___50631)){
args50625.push((arguments[i__41763__auto___50632]));

var G__50633 = (i__41763__auto___50632 + (1));
i__41763__auto___50632 = G__50633;
continue;
} else {
}
break;
}

var G__50630 = args50625.length;
switch (G__50630) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__41781__auto__ = (new cljs.core.IndexedSeq(args50625.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41781__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__50623_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__50623_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__50624_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__50624_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__41526__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq50626){
var G__50627 = cljs.core.first.call(null,seq50626);
var seq50626__$1 = cljs.core.next.call(null,seq50626);
var G__50628 = cljs.core.first.call(null,seq50626__$1);
var seq50626__$2 = cljs.core.next.call(null,seq50626__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__50627,G__50628,seq50626__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50644 = arguments.length;
var i__41763__auto___50645 = (0);
while(true){
if((i__41763__auto___50645 < len__41762__auto___50644)){
args__41769__auto__.push((arguments[i__41763__auto___50645]));

var G__50646 = (i__41763__auto___50645 + (1));
i__41763__auto___50645 = G__50646;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__50638){
var vec__50639 = p__50638;
var k = cljs.core.nth.call(null,vec__50639,(0),null);
var _ = cljs.core.nth.call(null,vec__50639,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__41526__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__50640){
var vec__50641 = p__50640;
var k = cljs.core.nth.call(null,vec__50641,(0),null);
var v = cljs.core.nth.call(null,vec__50641,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__50642){
var vec__50643 = p__50642;
var k = cljs.core.nth.call(null,vec__50643,(0),null);
var v = cljs.core.nth.call(null,vec__50643,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__41526__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq50635){
var G__50636 = cljs.core.first.call(null,seq50635);
var seq50635__$1 = cljs.core.next.call(null,seq50635);
var G__50637 = cljs.core.first.call(null,seq50635__$1);
var seq50635__$2 = cljs.core.next.call(null,seq50635__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__50636,G__50637,seq50635__$2);
});

cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__50647__auto__","a__50647__auto__",-21849612,null)),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__50647__auto__","a__50647__auto__",-21849612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__50647__auto__","a__50647__auto__",-21849612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__50648__auto__","a__50648__auto__",-1647359423,null)),(function (){var x__41526__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__41526__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__50648__auto__","a__50648__auto__",-1647359423,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__41526__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50654 = arguments.length;
var i__41763__auto___50655 = (0);
while(true){
if((i__41763__auto___50655 < len__41762__auto___50654)){
args__41769__auto__.push((arguments[i__41763__auto___50655]));

var G__50656 = (i__41763__auto___50655 + (1));
i__41763__auto___50655 = G__50656;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__50649__auto__","n__50649__auto__",1046778717,null)),(function (){var x__41526__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__50649__auto__","n__50649__auto__",1046778717,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__41526__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq50650){
var G__50651 = cljs.core.first.call(null,seq50650);
var seq50650__$1 = cljs.core.next.call(null,seq50650);
var G__50652 = cljs.core.first.call(null,seq50650__$1);
var seq50650__$2 = cljs.core.next.call(null,seq50650__$1);
var G__50653 = cljs.core.first.call(null,seq50650__$2);
var seq50650__$3 = cljs.core.next.call(null,seq50650__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__50651,G__50652,G__50653,seq50650__$3);
});

cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50660 = arguments.length;
var i__41763__auto___50661 = (0);
while(true){
if((i__41763__auto___50661 < len__41762__auto___50660)){
args__41769__auto__.push((arguments[i__41763__auto___50661]));

var G__50662 = (i__41763__auto___50661 + (1));
i__41763__auto___50661 = G__50662;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((1) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41770__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__50657_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__50657_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq50658){
var G__50659 = cljs.core.first.call(null,seq50658);
var seq50658__$1 = cljs.core.next.call(null,seq50658);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__50659,seq50658__$1);
});
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50672 = arguments.length;
var i__41763__auto___50673 = (0);
while(true){
if((i__41763__auto___50673 < len__41762__auto___50672)){
args__41769__auto__.push((arguments[i__41763__auto___50673]));

var G__50674 = (i__41763__auto___50673 + (1));
i__41763__auto___50673 = G__50674;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__50663__auto__","method-table__50663__auto__",432166184,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__50664__auto__","prefer-table__50664__auto__",868102117,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__50665__auto__","method-cache__50665__auto__",-1191329421,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__50666__auto__","cached-hierarchy__50666__auto__",556773418,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__50667__auto__","hierarchy__50667__auto__",1888863061,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__41526__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__41526__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__50667__auto__","hierarchy__50667__auto__",1888863061,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__50663__auto__","method-table__50663__auto__",432166184,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__50664__auto__","prefer-table__50664__auto__",868102117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__50665__auto__","method-cache__50665__auto__",-1191329421,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__50666__auto__","cached-hierarchy__50666__auto__",556773418,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq50668){
var G__50669 = cljs.core.first.call(null,seq50668);
var seq50668__$1 = cljs.core.next.call(null,seq50668);
var G__50670 = cljs.core.first.call(null,seq50668__$1);
var seq50668__$2 = cljs.core.next.call(null,seq50668__$1);
var G__50671 = cljs.core.first.call(null,seq50668__$2);
var seq50668__$3 = cljs.core.next.call(null,seq50668__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__50669,G__50670,G__50671,seq50668__$3);
});

cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50680 = arguments.length;
var i__41763__auto___50681 = (0);
while(true){
if((i__41763__auto___50681 < len__41762__auto___50680)){
args__41769__auto__.push((arguments[i__41763__auto___50681]));

var G__50682 = (i__41763__auto___50681 + (1));
i__41763__auto___50681 = G__50682;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq50675){
var G__50676 = cljs.core.first.call(null,seq50675);
var seq50675__$1 = cljs.core.next.call(null,seq50675);
var G__50677 = cljs.core.first.call(null,seq50675__$1);
var seq50675__$2 = cljs.core.next.call(null,seq50675__$1);
var G__50678 = cljs.core.first.call(null,seq50675__$2);
var seq50675__$3 = cljs.core.next.call(null,seq50675__$2);
var G__50679 = cljs.core.first.call(null,seq50675__$3);
var seq50675__$4 = cljs.core.next.call(null,seq50675__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__50676,G__50677,G__50678,G__50679,seq50675__$4);
});

cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__50683__auto__","start__50683__auto__",-74210265,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__50684__auto__","ret__50684__auto__",-689675508,null)),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__50683__auto__","start__50683__auto__",-74210265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__50684__auto__","ret__50684__auto__",-689675508,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50699 = arguments.length;
var i__41763__auto___50700 = (0);
while(true){
if((i__41763__auto___50700 < len__41762__auto___50699)){
args__41769__auto__.push((arguments[i__41763__auto___50700]));

var G__50701 = (i__41763__auto___50700 + (1));
i__41763__auto___50700 = G__50701;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((5) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__41770__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__50696){
var map__50697 = p__50696;
var map__50697__$1 = ((((!((map__50697 == null)))?((((map__50697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50697):map__50697);
var print_fn = cljs.core.get.call(null,map__50697__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__50685__auto__","start__50685__auto__",-448945405,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__50686__auto__","ret__50686__auto__",-1971704612,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___50687__auto__","___50687__auto__",1676141627,null)),(function (){var x__41526__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__50688__auto__","end__50688__auto__",-336468654,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__50689__auto__","elapsed__50689__auto__",-2138577261,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__50688__auto__","end__50688__auto__",-336468654,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__50685__auto__","start__50685__auto__",-448945405,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__41526__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__41526__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__41526__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__50689__auto__","elapsed__50689__auto__",-2138577261,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq50690){
var G__50691 = cljs.core.first.call(null,seq50690);
var seq50690__$1 = cljs.core.next.call(null,seq50690);
var G__50692 = cljs.core.first.call(null,seq50690__$1);
var seq50690__$2 = cljs.core.next.call(null,seq50690__$1);
var G__50693 = cljs.core.first.call(null,seq50690__$2);
var seq50690__$3 = cljs.core.next.call(null,seq50690__$2);
var G__50694 = cljs.core.first.call(null,seq50690__$3);
var seq50690__$4 = cljs.core.next.call(null,seq50690__$3);
var G__50695 = cljs.core.first.call(null,seq50690__$4);
var seq50690__$5 = cljs.core.next.call(null,seq50690__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__50691,G__50692,G__50693,G__50694,G__50695,seq50690__$5);
});

cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args50702 = [];
var len__41762__auto___50705 = arguments.length;
var i__41763__auto___50706 = (0);
while(true){
if((i__41763__auto___50706 < len__41762__auto___50705)){
args50702.push((arguments[i__41763__auto___50706]));

var G__50707 = (i__41763__auto___50706 + (1));
i__41763__auto___50706 = G__50707;
continue;
} else {
}
break;
}

var G__50704 = args50702.length;
switch (G__50704) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50702.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__41526__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__41526__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;
cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50714 = arguments.length;
var i__41763__auto___50715 = (0);
while(true){
if((i__41763__auto___50715 < len__41762__auto___50714)){
args__41769__auto__.push((arguments[i__41763__auto___50715]));

var G__50716 = (i__41763__auto___50715 + (1));
i__41763__auto___50715 = G__50716;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__50709__auto__","sb__50709__auto__",53232186,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50710__auto__","x__50710__auto__",-765516589,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__50709__auto__","sb__50709__auto__",53232186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__50710__auto__","x__50710__auto__",-765516589,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__50709__auto__","sb__50709__auto__",53232186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq50711){
var G__50712 = cljs.core.first.call(null,seq50711);
var seq50711__$1 = cljs.core.next.call(null,seq50711);
var G__50713 = cljs.core.first.call(null,seq50711__$1);
var seq50711__$2 = cljs.core.next.call(null,seq50711__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__50712,G__50713,seq50711__$2);
});

cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50721 = arguments.length;
var i__41763__auto___50722 = (0);
while(true){
if((i__41763__auto___50722 < len__41762__auto___50721)){
args__41769__auto__.push((arguments[i__41763__auto___50722]));

var G__50723 = (i__41763__auto___50722 + (1));
i__41763__auto___50722 = G__50723;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((2) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41770__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__50717_SHARP_){
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = p1__50717_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq50718){
var G__50719 = cljs.core.first.call(null,seq50718);
var seq50718__$1 = cljs.core.next.call(null,seq50718);
var G__50720 = cljs.core.first.call(null,seq50718__$1);
var seq50718__$2 = cljs.core.next.call(null,seq50718__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__50719,G__50720,seq50718__$2);
});

cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__41526__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__41526__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50724__auto__","this__50724__auto__",-1800187433,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__50724__auto__","this__50724__auto__",-1800187433,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__50725){
var vec__50731 = p__50725;
var quote = cljs.core.nth.call(null,vec__50731,(0),null);
var ns = cljs.core.nth.call(null,vec__50731,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__41526__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__50731,quote,ns){
return (function (p__50734){
var vec__50735 = p__50734;
var sym = cljs.core.nth.call(null,vec__50735,(0),null);
var _ = cljs.core.nth.call(null,vec__50735,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__41526__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
});})(vec__50731,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__50736,p__50737){
var vec__50740 = p__50736;
var quote0 = cljs.core.nth.call(null,vec__50740,(0),null);
var ns = cljs.core.nth.call(null,vec__50740,(1),null);
var vec__50741 = p__50737;
var quote1 = cljs.core.nth.call(null,vec__50741,(0),null);
var sym = cljs.core.nth.call(null,vec__50741,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__41526__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50747 = arguments.length;
var i__41763__auto___50748 = (0);
while(true){
if((i__41763__auto___50748 < len__41762__auto___50747)){
args__41769__auto__.push((arguments[i__41763__auto___50748]));

var G__50749 = (i__41763__auto___50748 + (1));
i__41763__auto___50748 = G__50749;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((4) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__41770__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__41526__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__41526__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq50742){
var G__50743 = cljs.core.first.call(null,seq50742);
var seq50742__$1 = cljs.core.next.call(null,seq50742);
var G__50744 = cljs.core.first.call(null,seq50742__$1);
var seq50742__$2 = cljs.core.next.call(null,seq50742__$1);
var G__50745 = cljs.core.first.call(null,seq50742__$2);
var seq50742__$3 = cljs.core.next.call(null,seq50742__$2);
var G__50746 = cljs.core.first.call(null,seq50742__$3);
var seq50742__$4 = cljs.core.next.call(null,seq50742__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50743,G__50744,G__50745,G__50746,seq50742__$4);
});

cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__41526__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__41526__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__50750 = form_SINGLEQUOTE_;
var G__50751 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__50750;
form_SINGLEQUOTE_ = G__50751;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__41526__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__40680__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__40680__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__40680__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args50752 = [];
var len__41762__auto___50757 = arguments.length;
var i__41763__auto___50758 = (0);
while(true){
if((i__41763__auto___50758 < len__41762__auto___50757)){
args50752.push((arguments[i__41763__auto___50758]));

var G__50759 = (i__41763__auto___50758 + (1));
i__41763__auto___50758 = G__50759;
continue;
} else {
}
break;
}

var G__50754 = args50752.length;
switch (G__50754) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50752.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__50755,solo){
var vec__50756 = p__50755;
var arglist = cljs.core.nth.call(null,vec__50756,(0),null);
var body = cljs.core.nthnext.call(null,vec__50756,(1));
var method = vec__50756;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__50756,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__50756,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__50756,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__50756,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__50756,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/rasmuserik/webworker-cljs-eval/resources/public/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2725),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2725),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/rasmuserik/webworker-cljs-eval/resources/public/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2726),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2726),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
});})(sig,restarg,vec__50756,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__50756,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),params,(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__41526__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});})(sig,restarg,vec__50756,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))):null),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;
cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__50761__auto__","len__50761__auto__",-1613071176,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50762__auto__","i__50762__auto__",-602273674,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50762__auto__","i__50762__auto__",-602273674,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__50761__auto__","len__50761__auto__",-1613071176,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__41526__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50762__auto__","i__50762__auto__",-602273674,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__50762__auto__","i__50762__auto__",-602273674,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__50765){
var vec__50768 = p__50765;
var vec__50769 = cljs.core.nth.call(null,vec__50768,(0),null);
var arglist = cljs.core.nth.call(null,vec__50769,(0),null);
var body = cljs.core.nthnext.call(null,vec__50769,(1));
var method = vec__50769;
var fdecl = vec__50768;
var dest_args = ((function (vec__50768,vec__50769,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__50768,vec__50769,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});})(vec__50768,vec__50769,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__50768,vec__50769,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__41526__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__50763__auto__","args__50763__auto__",-1830816259,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__50763__auto__","args__50763__auto__",-1830816259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__50764__auto__","argseq__50764__auto__",-392191861,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__41526__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__50763__auto__","args__50763__auto__",-1830816259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/rasmuserik/webworker-cljs-eval/resources/public/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2773),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2773),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__50763__auto__","args__50763__auto__",-1830816259,null)),(function (){var x__41526__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__50764__auto__","argseq__50764__auto__",-392191861,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__50782){
var vec__50784 = p__50782;
var sig = cljs.core.nth.call(null,vec__50784,(0),null);
var body = cljs.core.nthnext.call(null,vec__50784,(1));
var method = vec__50784;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__50770_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__50770_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__50771_SHARP_){
return fixed_arity.call(null,rname,p1__50771_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__41526__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__41526__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__50772__auto__","argseq__50772__auto__",1523625621,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/rasmuserik/webworker-cljs-eval/resources/public/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2830),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2830),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__50772__auto__","argseq__50772__auto__",1523625621,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__41526__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__41526__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),(function (){var x__41526__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__41526__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4);
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4);
} else {
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__50785__i = 0, G__50785__a = new Array(arguments.length -  3);
while (G__50785__i < G__50785__a.length) {G__50785__a[G__50785__i] = arguments[G__50785__i + 3]; ++G__50785__i;}
  fdecl = new cljs.core.IndexedSeq(G__50785__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__50786){
var _AMPERSAND_form = cljs.core.first(arglist__50786);
arglist__50786 = cljs.core.next(arglist__50786);
var _AMPERSAND_env = cljs.core.first(arglist__50786);
arglist__50786 = cljs.core.next(arglist__50786);
var name = cljs.core.first(arglist__50786);
var fdecl = cljs.core.rest(arglist__50786);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__41769__auto__ = [];
var len__41762__auto___50791 = arguments.length;
var i__41763__auto___50792 = (0);
while(true){
if((i__41763__auto___50792 < len__41762__auto___50791)){
args__41769__auto__.push((arguments[i__41763__auto___50792]));

var G__50793 = (i__41763__auto___50792 + (1));
i__41763__auto___50792 = G__50793;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((3) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41770__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__41526__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__50794 = cljs.core.cons.call(null,f,p);
var G__50795 = cljs.core.next.call(null,args__$1);
p = G__50794;
args__$1 = G__50795;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__50796 = cljs.core.cons.call(null,f,p);
var G__50797 = cljs.core.next.call(null,args__$1);
p = G__50796;
args__$1 = G__50797;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__50798 = cljs.core.next.call(null,fd);
fd = G__50798;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__50799 = cljs.core.next.call(null,fd);
fd = G__50799;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__41526__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__50800 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__50801 = cljs.core.next.call(null,ds);
acc = G__50800;
ds = G__50801;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__50802 = cljs.core.next.call(null,p);
var G__50803 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__50802;
d = G__50803;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__41526__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core._conj.call(null,(function (){var x__41526__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__41526__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__41526__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto____$1);
})(),x__41526__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq50787){
var G__50788 = cljs.core.first.call(null,seq50787);
var seq50787__$1 = cljs.core.next.call(null,seq50787);
var G__50789 = cljs.core.first.call(null,seq50787__$1);
var seq50787__$2 = cljs.core.next.call(null,seq50787__$1);
var G__50790 = cljs.core.first.call(null,seq50787__$2);
var seq50787__$3 = cljs.core.next.call(null,seq50787__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__50788,G__50789,G__50790,seq50787__$3);
});
cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1482388910006