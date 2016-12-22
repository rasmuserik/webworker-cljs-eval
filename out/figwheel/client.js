// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args54640 = [];
var len__41762__auto___54643 = arguments.length;
var i__41763__auto___54644 = (0);
while(true){
if((i__41763__auto___54644 < len__41762__auto___54643)){
args54640.push((arguments[i__41763__auto___54644]));

var G__54645 = (i__41763__auto___54644 + (1));
i__41763__auto___54644 = G__54645;
continue;
} else {
}
break;
}

var G__54642 = args54640.length;
switch (G__54642) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54640.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__41769__auto__ = [];
var len__41762__auto___54648 = arguments.length;
var i__41763__auto___54649 = (0);
while(true){
if((i__41763__auto___54649 < len__41762__auto___54648)){
args__41769__auto__.push((arguments[i__41763__auto___54649]));

var G__54650 = (i__41763__auto___54649 + (1));
i__41763__auto___54649 = G__54650;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54647){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54647));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__41769__auto__ = [];
var len__41762__auto___54652 = arguments.length;
var i__41763__auto___54653 = (0);
while(true){
if((i__41763__auto___54653 < len__41762__auto___54652)){
args__41769__auto__.push((arguments[i__41763__auto___54653]));

var G__54654 = (i__41763__auto___54653 + (1));
i__41763__auto___54653 = G__54654;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54651){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54651));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54655 = cljs.core._EQ_;
var expr__54656 = (function (){var or__40692__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54659){if((e54659 instanceof Error)){
var e = e54659;
return false;
} else {
throw e54659;

}
}})();
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54655.call(null,"true",expr__54656))){
return true;
} else {
if(cljs.core.truth_(pred__54655.call(null,"false",expr__54656))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54656)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e54661){if((e54661 instanceof Error)){
var e = e54661;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54661;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54662){
var map__54665 = p__54662;
var map__54665__$1 = ((((!((map__54665 == null)))?((((map__54665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54665):map__54665);
var message = cljs.core.get.call(null,map__54665__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54665__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__40692__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__40680__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__40680__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__40680__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46442__auto___54827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___54827,ch){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___54827,ch){
return (function (state_54796){
var state_val_54797 = (state_54796[(1)]);
if((state_val_54797 === (7))){
var inst_54792 = (state_54796[(2)]);
var state_54796__$1 = state_54796;
var statearr_54798_54828 = state_54796__$1;
(statearr_54798_54828[(2)] = inst_54792);

(statearr_54798_54828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (1))){
var state_54796__$1 = state_54796;
var statearr_54799_54829 = state_54796__$1;
(statearr_54799_54829[(2)] = null);

(statearr_54799_54829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (4))){
var inst_54749 = (state_54796[(7)]);
var inst_54749__$1 = (state_54796[(2)]);
var state_54796__$1 = (function (){var statearr_54800 = state_54796;
(statearr_54800[(7)] = inst_54749__$1);

return statearr_54800;
})();
if(cljs.core.truth_(inst_54749__$1)){
var statearr_54801_54830 = state_54796__$1;
(statearr_54801_54830[(1)] = (5));

} else {
var statearr_54802_54831 = state_54796__$1;
(statearr_54802_54831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (15))){
var inst_54756 = (state_54796[(8)]);
var inst_54771 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54756);
var inst_54772 = cljs.core.first.call(null,inst_54771);
var inst_54773 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54772);
var inst_54774 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54773)].join('');
var inst_54775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54774);
var state_54796__$1 = state_54796;
var statearr_54803_54832 = state_54796__$1;
(statearr_54803_54832[(2)] = inst_54775);

(statearr_54803_54832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (13))){
var inst_54780 = (state_54796[(2)]);
var state_54796__$1 = state_54796;
var statearr_54804_54833 = state_54796__$1;
(statearr_54804_54833[(2)] = inst_54780);

(statearr_54804_54833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (6))){
var state_54796__$1 = state_54796;
var statearr_54805_54834 = state_54796__$1;
(statearr_54805_54834[(2)] = null);

(statearr_54805_54834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (17))){
var inst_54778 = (state_54796[(2)]);
var state_54796__$1 = state_54796;
var statearr_54806_54835 = state_54796__$1;
(statearr_54806_54835[(2)] = inst_54778);

(statearr_54806_54835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (3))){
var inst_54794 = (state_54796[(2)]);
var state_54796__$1 = state_54796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54796__$1,inst_54794);
} else {
if((state_val_54797 === (12))){
var inst_54755 = (state_54796[(9)]);
var inst_54769 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54755,opts);
var state_54796__$1 = state_54796;
if(cljs.core.truth_(inst_54769)){
var statearr_54807_54836 = state_54796__$1;
(statearr_54807_54836[(1)] = (15));

} else {
var statearr_54808_54837 = state_54796__$1;
(statearr_54808_54837[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (2))){
var state_54796__$1 = state_54796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54796__$1,(4),ch);
} else {
if((state_val_54797 === (11))){
var inst_54756 = (state_54796[(8)]);
var inst_54761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54762 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54756);
var inst_54763 = cljs.core.async.timeout.call(null,(1000));
var inst_54764 = [inst_54762,inst_54763];
var inst_54765 = (new cljs.core.PersistentVector(null,2,(5),inst_54761,inst_54764,null));
var state_54796__$1 = state_54796;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54796__$1,(14),inst_54765);
} else {
if((state_val_54797 === (9))){
var inst_54756 = (state_54796[(8)]);
var inst_54782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54783 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54756);
var inst_54784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54783);
var inst_54785 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54784)].join('');
var inst_54786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54785);
var state_54796__$1 = (function (){var statearr_54809 = state_54796;
(statearr_54809[(10)] = inst_54782);

return statearr_54809;
})();
var statearr_54810_54838 = state_54796__$1;
(statearr_54810_54838[(2)] = inst_54786);

(statearr_54810_54838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (5))){
var inst_54749 = (state_54796[(7)]);
var inst_54751 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54752 = (new cljs.core.PersistentArrayMap(null,2,inst_54751,null));
var inst_54753 = (new cljs.core.PersistentHashSet(null,inst_54752,null));
var inst_54754 = figwheel.client.focus_msgs.call(null,inst_54753,inst_54749);
var inst_54755 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54754);
var inst_54756 = cljs.core.first.call(null,inst_54754);
var inst_54757 = figwheel.client.autoload_QMARK_.call(null);
var state_54796__$1 = (function (){var statearr_54811 = state_54796;
(statearr_54811[(9)] = inst_54755);

(statearr_54811[(8)] = inst_54756);

return statearr_54811;
})();
if(cljs.core.truth_(inst_54757)){
var statearr_54812_54839 = state_54796__$1;
(statearr_54812_54839[(1)] = (8));

} else {
var statearr_54813_54840 = state_54796__$1;
(statearr_54813_54840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (14))){
var inst_54767 = (state_54796[(2)]);
var state_54796__$1 = state_54796;
var statearr_54814_54841 = state_54796__$1;
(statearr_54814_54841[(2)] = inst_54767);

(statearr_54814_54841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (16))){
var state_54796__$1 = state_54796;
var statearr_54815_54842 = state_54796__$1;
(statearr_54815_54842[(2)] = null);

(statearr_54815_54842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (10))){
var inst_54788 = (state_54796[(2)]);
var state_54796__$1 = (function (){var statearr_54816 = state_54796;
(statearr_54816[(11)] = inst_54788);

return statearr_54816;
})();
var statearr_54817_54843 = state_54796__$1;
(statearr_54817_54843[(2)] = null);

(statearr_54817_54843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54797 === (8))){
var inst_54755 = (state_54796[(9)]);
var inst_54759 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54755,opts);
var state_54796__$1 = state_54796;
if(cljs.core.truth_(inst_54759)){
var statearr_54818_54844 = state_54796__$1;
(statearr_54818_54844[(1)] = (11));

} else {
var statearr_54819_54845 = state_54796__$1;
(statearr_54819_54845[(1)] = (12));

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
});})(c__46442__auto___54827,ch))
;
return ((function (switch__46330__auto__,c__46442__auto___54827,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____0 = (function (){
var statearr_54823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54823[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__);

(statearr_54823[(1)] = (1));

return statearr_54823;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____1 = (function (state_54796){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_54796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e54824){if((e54824 instanceof Object)){
var ex__46334__auto__ = e54824;
var statearr_54825_54846 = state_54796;
(statearr_54825_54846[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54847 = state_54796;
state_54796 = G__54847;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__ = function(state_54796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____1.call(this,state_54796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46331__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___54827,ch))
})();
var state__46444__auto__ = (function (){var statearr_54826 = f__46443__auto__.call(null);
(statearr_54826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___54827);

return statearr_54826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___54827,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54848_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54848_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54851 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54851){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54850){if((e54850 instanceof Error)){
var e = e54850;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54851], null));
} else {
var e = e54850;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54851))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54852){
var map__54859 = p__54852;
var map__54859__$1 = ((((!((map__54859 == null)))?((((map__54859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54859):map__54859);
var opts = map__54859__$1;
var build_id = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54859,map__54859__$1,opts,build_id){
return (function (p__54861){
var vec__54862 = p__54861;
var map__54863 = cljs.core.nth.call(null,vec__54862,(0),null);
var map__54863__$1 = ((((!((map__54863 == null)))?((((map__54863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54863):map__54863);
var msg = map__54863__$1;
var msg_name = cljs.core.get.call(null,map__54863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54862,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54862,map__54863,map__54863__$1,msg,msg_name,_,map__54859,map__54859__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54862,map__54863,map__54863__$1,msg,msg_name,_,map__54859,map__54859__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54859,map__54859__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54869){
var vec__54870 = p__54869;
var map__54871 = cljs.core.nth.call(null,vec__54870,(0),null);
var map__54871__$1 = ((((!((map__54871 == null)))?((((map__54871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54871):map__54871);
var msg = map__54871__$1;
var msg_name = cljs.core.get.call(null,map__54871__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54870,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54873){
var map__54883 = p__54873;
var map__54883__$1 = ((((!((map__54883 == null)))?((((map__54883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54883):map__54883);
var on_compile_warning = cljs.core.get.call(null,map__54883__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54883__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54883,map__54883__$1,on_compile_warning,on_compile_fail){
return (function (p__54885){
var vec__54886 = p__54885;
var map__54887 = cljs.core.nth.call(null,vec__54886,(0),null);
var map__54887__$1 = ((((!((map__54887 == null)))?((((map__54887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54887):map__54887);
var msg = map__54887__$1;
var msg_name = cljs.core.get.call(null,map__54887__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54886,(1));
var pred__54889 = cljs.core._EQ_;
var expr__54890 = msg_name;
if(cljs.core.truth_(pred__54889.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54890))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54889.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54890))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54883,map__54883__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,msg_hist,msg_names,msg){
return (function (state_55098){
var state_val_55099 = (state_55098[(1)]);
if((state_val_55099 === (7))){
var inst_55026 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55026)){
var statearr_55100_55146 = state_55098__$1;
(statearr_55100_55146[(1)] = (8));

} else {
var statearr_55101_55147 = state_55098__$1;
(statearr_55101_55147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (20))){
var inst_55092 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55102_55148 = state_55098__$1;
(statearr_55102_55148[(2)] = inst_55092);

(statearr_55102_55148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (27))){
var inst_55088 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55103_55149 = state_55098__$1;
(statearr_55103_55149[(2)] = inst_55088);

(statearr_55103_55149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (1))){
var inst_55019 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55019)){
var statearr_55104_55150 = state_55098__$1;
(statearr_55104_55150[(1)] = (2));

} else {
var statearr_55105_55151 = state_55098__$1;
(statearr_55105_55151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (24))){
var inst_55090 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55106_55152 = state_55098__$1;
(statearr_55106_55152[(2)] = inst_55090);

(statearr_55106_55152[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (4))){
var inst_55096 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55098__$1,inst_55096);
} else {
if((state_val_55099 === (15))){
var inst_55094 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55107_55153 = state_55098__$1;
(statearr_55107_55153[(2)] = inst_55094);

(statearr_55107_55153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (21))){
var inst_55053 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55108_55154 = state_55098__$1;
(statearr_55108_55154[(2)] = inst_55053);

(statearr_55108_55154[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (31))){
var inst_55077 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55077)){
var statearr_55109_55155 = state_55098__$1;
(statearr_55109_55155[(1)] = (34));

} else {
var statearr_55110_55156 = state_55098__$1;
(statearr_55110_55156[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (32))){
var inst_55086 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55111_55157 = state_55098__$1;
(statearr_55111_55157[(2)] = inst_55086);

(statearr_55111_55157[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (33))){
var inst_55075 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55112_55158 = state_55098__$1;
(statearr_55112_55158[(2)] = inst_55075);

(statearr_55112_55158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (13))){
var inst_55040 = figwheel.client.heads_up.clear.call(null);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(16),inst_55040);
} else {
if((state_val_55099 === (22))){
var inst_55057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55058 = figwheel.client.heads_up.append_warning_message.call(null,inst_55057);
var state_55098__$1 = state_55098;
var statearr_55113_55159 = state_55098__$1;
(statearr_55113_55159[(2)] = inst_55058);

(statearr_55113_55159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (36))){
var inst_55084 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55114_55160 = state_55098__$1;
(statearr_55114_55160[(2)] = inst_55084);

(statearr_55114_55160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (29))){
var inst_55068 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55115_55161 = state_55098__$1;
(statearr_55115_55161[(2)] = inst_55068);

(statearr_55115_55161[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (6))){
var inst_55021 = (state_55098[(7)]);
var state_55098__$1 = state_55098;
var statearr_55116_55162 = state_55098__$1;
(statearr_55116_55162[(2)] = inst_55021);

(statearr_55116_55162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (28))){
var inst_55064 = (state_55098[(2)]);
var inst_55065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55066 = figwheel.client.heads_up.display_warning.call(null,inst_55065);
var state_55098__$1 = (function (){var statearr_55117 = state_55098;
(statearr_55117[(8)] = inst_55064);

return statearr_55117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(29),inst_55066);
} else {
if((state_val_55099 === (25))){
var inst_55062 = figwheel.client.heads_up.clear.call(null);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(28),inst_55062);
} else {
if((state_val_55099 === (34))){
var inst_55079 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(37),inst_55079);
} else {
if((state_val_55099 === (17))){
var inst_55046 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55118_55163 = state_55098__$1;
(statearr_55118_55163[(2)] = inst_55046);

(statearr_55118_55163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (3))){
var inst_55038 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55038)){
var statearr_55119_55164 = state_55098__$1;
(statearr_55119_55164[(1)] = (13));

} else {
var statearr_55120_55165 = state_55098__$1;
(statearr_55120_55165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (12))){
var inst_55034 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55121_55166 = state_55098__$1;
(statearr_55121_55166[(2)] = inst_55034);

(statearr_55121_55166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (2))){
var inst_55021 = (state_55098[(7)]);
var inst_55021__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_55098__$1 = (function (){var statearr_55122 = state_55098;
(statearr_55122[(7)] = inst_55021__$1);

return statearr_55122;
})();
if(cljs.core.truth_(inst_55021__$1)){
var statearr_55123_55167 = state_55098__$1;
(statearr_55123_55167[(1)] = (5));

} else {
var statearr_55124_55168 = state_55098__$1;
(statearr_55124_55168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (23))){
var inst_55060 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55060)){
var statearr_55125_55169 = state_55098__$1;
(statearr_55125_55169[(1)] = (25));

} else {
var statearr_55126_55170 = state_55098__$1;
(statearr_55126_55170[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (35))){
var state_55098__$1 = state_55098;
var statearr_55127_55171 = state_55098__$1;
(statearr_55127_55171[(2)] = null);

(statearr_55127_55171[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (19))){
var inst_55055 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55055)){
var statearr_55128_55172 = state_55098__$1;
(statearr_55128_55172[(1)] = (22));

} else {
var statearr_55129_55173 = state_55098__$1;
(statearr_55129_55173[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (11))){
var inst_55030 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55130_55174 = state_55098__$1;
(statearr_55130_55174[(2)] = inst_55030);

(statearr_55130_55174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (9))){
var inst_55032 = figwheel.client.heads_up.clear.call(null);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(12),inst_55032);
} else {
if((state_val_55099 === (5))){
var inst_55023 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_55098__$1 = state_55098;
var statearr_55131_55175 = state_55098__$1;
(statearr_55131_55175[(2)] = inst_55023);

(statearr_55131_55175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (14))){
var inst_55048 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55048)){
var statearr_55132_55176 = state_55098__$1;
(statearr_55132_55176[(1)] = (18));

} else {
var statearr_55133_55177 = state_55098__$1;
(statearr_55133_55177[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (26))){
var inst_55070 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_55098__$1 = state_55098;
if(cljs.core.truth_(inst_55070)){
var statearr_55134_55178 = state_55098__$1;
(statearr_55134_55178[(1)] = (30));

} else {
var statearr_55135_55179 = state_55098__$1;
(statearr_55135_55179[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (16))){
var inst_55042 = (state_55098[(2)]);
var inst_55043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55044 = figwheel.client.heads_up.display_exception.call(null,inst_55043);
var state_55098__$1 = (function (){var statearr_55136 = state_55098;
(statearr_55136[(9)] = inst_55042);

return statearr_55136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(17),inst_55044);
} else {
if((state_val_55099 === (30))){
var inst_55072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55073 = figwheel.client.heads_up.display_warning.call(null,inst_55072);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(33),inst_55073);
} else {
if((state_val_55099 === (10))){
var inst_55036 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55137_55180 = state_55098__$1;
(statearr_55137_55180[(2)] = inst_55036);

(statearr_55137_55180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (18))){
var inst_55050 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55051 = figwheel.client.heads_up.display_exception.call(null,inst_55050);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(21),inst_55051);
} else {
if((state_val_55099 === (37))){
var inst_55081 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55138_55181 = state_55098__$1;
(statearr_55138_55181[(2)] = inst_55081);

(statearr_55138_55181[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (8))){
var inst_55028 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(11),inst_55028);
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
});})(c__46442__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46330__auto__,c__46442__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____0 = (function (){
var statearr_55142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55142[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__);

(statearr_55142[(1)] = (1));

return statearr_55142;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____1 = (function (state_55098){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_55098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e55143){if((e55143 instanceof Object)){
var ex__46334__auto__ = e55143;
var statearr_55144_55182 = state_55098;
(statearr_55144_55182[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55183 = state_55098;
state_55098 = G__55183;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__ = function(state_55098){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____1.call(this,state_55098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,msg_hist,msg_names,msg))
})();
var state__46444__auto__ = (function (){var statearr_55145 = f__46443__auto__.call(null);
(statearr_55145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_55145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,msg_hist,msg_names,msg))
);

return c__46442__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46442__auto___55246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto___55246,ch){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto___55246,ch){
return (function (state_55229){
var state_val_55230 = (state_55229[(1)]);
if((state_val_55230 === (1))){
var state_55229__$1 = state_55229;
var statearr_55231_55247 = state_55229__$1;
(statearr_55231_55247[(2)] = null);

(statearr_55231_55247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55230 === (2))){
var state_55229__$1 = state_55229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55229__$1,(4),ch);
} else {
if((state_val_55230 === (3))){
var inst_55227 = (state_55229[(2)]);
var state_55229__$1 = state_55229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55229__$1,inst_55227);
} else {
if((state_val_55230 === (4))){
var inst_55217 = (state_55229[(7)]);
var inst_55217__$1 = (state_55229[(2)]);
var state_55229__$1 = (function (){var statearr_55232 = state_55229;
(statearr_55232[(7)] = inst_55217__$1);

return statearr_55232;
})();
if(cljs.core.truth_(inst_55217__$1)){
var statearr_55233_55248 = state_55229__$1;
(statearr_55233_55248[(1)] = (5));

} else {
var statearr_55234_55249 = state_55229__$1;
(statearr_55234_55249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55230 === (5))){
var inst_55217 = (state_55229[(7)]);
var inst_55219 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55217);
var state_55229__$1 = state_55229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55229__$1,(8),inst_55219);
} else {
if((state_val_55230 === (6))){
var state_55229__$1 = state_55229;
var statearr_55235_55250 = state_55229__$1;
(statearr_55235_55250[(2)] = null);

(statearr_55235_55250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55230 === (7))){
var inst_55225 = (state_55229[(2)]);
var state_55229__$1 = state_55229;
var statearr_55236_55251 = state_55229__$1;
(statearr_55236_55251[(2)] = inst_55225);

(statearr_55236_55251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55230 === (8))){
var inst_55221 = (state_55229[(2)]);
var state_55229__$1 = (function (){var statearr_55237 = state_55229;
(statearr_55237[(8)] = inst_55221);

return statearr_55237;
})();
var statearr_55238_55252 = state_55229__$1;
(statearr_55238_55252[(2)] = null);

(statearr_55238_55252[(1)] = (2));


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
});})(c__46442__auto___55246,ch))
;
return ((function (switch__46330__auto__,c__46442__auto___55246,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46331__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46331__auto____0 = (function (){
var statearr_55242 = [null,null,null,null,null,null,null,null,null];
(statearr_55242[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46331__auto__);

(statearr_55242[(1)] = (1));

return statearr_55242;
});
var figwheel$client$heads_up_plugin_$_state_machine__46331__auto____1 = (function (state_55229){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_55229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e55243){if((e55243 instanceof Object)){
var ex__46334__auto__ = e55243;
var statearr_55244_55253 = state_55229;
(statearr_55244_55253[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55254 = state_55229;
state_55229 = G__55254;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46331__auto__ = function(state_55229){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46331__auto____1.call(this,state_55229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46331__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46331__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto___55246,ch))
})();
var state__46444__auto__ = (function (){var statearr_55245 = f__46443__auto__.call(null);
(statearr_55245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto___55246);

return statearr_55245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto___55246,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_55275){
var state_val_55276 = (state_55275[(1)]);
if((state_val_55276 === (1))){
var inst_55270 = cljs.core.async.timeout.call(null,(3000));
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55275__$1,(2),inst_55270);
} else {
if((state_val_55276 === (2))){
var inst_55272 = (state_55275[(2)]);
var inst_55273 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55275__$1 = (function (){var statearr_55277 = state_55275;
(statearr_55277[(7)] = inst_55272);

return statearr_55277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55275__$1,inst_55273);
} else {
return null;
}
}
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____0 = (function (){
var statearr_55281 = [null,null,null,null,null,null,null,null];
(statearr_55281[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__);

(statearr_55281[(1)] = (1));

return statearr_55281;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____1 = (function (state_55275){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_55275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e55282){if((e55282 instanceof Object)){
var ex__46334__auto__ = e55282;
var statearr_55283_55285 = state_55275;
(statearr_55283_55285[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55286 = state_55275;
state_55275 = G__55286;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__ = function(state_55275){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____1.call(this,state_55275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46331__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_55284 = f__46443__auto__.call(null);
(statearr_55284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_55284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55309){
var state_val_55310 = (state_55309[(1)]);
if((state_val_55310 === (1))){
var inst_55303 = cljs.core.async.timeout.call(null,(2000));
var state_55309__$1 = state_55309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55309__$1,(2),inst_55303);
} else {
if((state_val_55310 === (2))){
var inst_55305 = (state_55309[(2)]);
var inst_55306 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_55307 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55306);
var state_55309__$1 = (function (){var statearr_55311 = state_55309;
(statearr_55311[(7)] = inst_55305);

return statearr_55311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55309__$1,inst_55307);
} else {
return null;
}
}
});})(c__46442__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____0 = (function (){
var statearr_55315 = [null,null,null,null,null,null,null,null];
(statearr_55315[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__);

(statearr_55315[(1)] = (1));

return statearr_55315;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____1 = (function (state_55309){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_55309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e55316){if((e55316 instanceof Object)){
var ex__46334__auto__ = e55316;
var statearr_55317_55319 = state_55309;
(statearr_55317_55319[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55320 = state_55309;
state_55309 = G__55320;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__ = function(state_55309){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____1.call(this,state_55309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,figwheel_version,temp__4657__auto__))
})();
var state__46444__auto__ = (function (){var statearr_55318 = f__46443__auto__.call(null);
(statearr_55318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_55318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,figwheel_version,temp__4657__auto__))
);

return c__46442__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55321){
var map__55325 = p__55321;
var map__55325__$1 = ((((!((map__55325 == null)))?((((map__55325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55325):map__55325);
var file = cljs.core.get.call(null,map__55325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55327 = "";
var G__55327__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55327),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55327);
var G__55327__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55327__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55327__$1);
if(cljs.core.truth_((function (){var and__40680__auto__ = line;
if(cljs.core.truth_(and__40680__auto__)){
return column;
} else {
return and__40680__auto__;
}
})())){
return [cljs.core.str(G__55327__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55327__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55328){
var map__55335 = p__55328;
var map__55335__$1 = ((((!((map__55335 == null)))?((((map__55335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55335):map__55335);
var ed = map__55335__$1;
var formatted_exception = cljs.core.get.call(null,map__55335__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55335__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55335__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55337_55341 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55338_55342 = null;
var count__55339_55343 = (0);
var i__55340_55344 = (0);
while(true){
if((i__55340_55344 < count__55339_55343)){
var msg_55345 = cljs.core._nth.call(null,chunk__55338_55342,i__55340_55344);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55345);

var G__55346 = seq__55337_55341;
var G__55347 = chunk__55338_55342;
var G__55348 = count__55339_55343;
var G__55349 = (i__55340_55344 + (1));
seq__55337_55341 = G__55346;
chunk__55338_55342 = G__55347;
count__55339_55343 = G__55348;
i__55340_55344 = G__55349;
continue;
} else {
var temp__4657__auto___55350 = cljs.core.seq.call(null,seq__55337_55341);
if(temp__4657__auto___55350){
var seq__55337_55351__$1 = temp__4657__auto___55350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55337_55351__$1)){
var c__41503__auto___55352 = cljs.core.chunk_first.call(null,seq__55337_55351__$1);
var G__55353 = cljs.core.chunk_rest.call(null,seq__55337_55351__$1);
var G__55354 = c__41503__auto___55352;
var G__55355 = cljs.core.count.call(null,c__41503__auto___55352);
var G__55356 = (0);
seq__55337_55341 = G__55353;
chunk__55338_55342 = G__55354;
count__55339_55343 = G__55355;
i__55340_55344 = G__55356;
continue;
} else {
var msg_55357 = cljs.core.first.call(null,seq__55337_55351__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55357);

var G__55358 = cljs.core.next.call(null,seq__55337_55351__$1);
var G__55359 = null;
var G__55360 = (0);
var G__55361 = (0);
seq__55337_55341 = G__55358;
chunk__55338_55342 = G__55359;
count__55339_55343 = G__55360;
i__55340_55344 = G__55361;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55362){
var map__55365 = p__55362;
var map__55365__$1 = ((((!((map__55365 == null)))?((((map__55365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55365):map__55365);
var w = map__55365__$1;
var message = cljs.core.get.call(null,map__55365__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__40680__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__40680__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__40680__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55373 = cljs.core.seq.call(null,plugins);
var chunk__55374 = null;
var count__55375 = (0);
var i__55376 = (0);
while(true){
if((i__55376 < count__55375)){
var vec__55377 = cljs.core._nth.call(null,chunk__55374,i__55376);
var k = cljs.core.nth.call(null,vec__55377,(0),null);
var plugin = cljs.core.nth.call(null,vec__55377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55373,chunk__55374,count__55375,i__55376,pl_55379,vec__55377,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55379.call(null,msg_hist);
});})(seq__55373,chunk__55374,count__55375,i__55376,pl_55379,vec__55377,k,plugin))
);
} else {
}

var G__55380 = seq__55373;
var G__55381 = chunk__55374;
var G__55382 = count__55375;
var G__55383 = (i__55376 + (1));
seq__55373 = G__55380;
chunk__55374 = G__55381;
count__55375 = G__55382;
i__55376 = G__55383;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55373);
if(temp__4657__auto__){
var seq__55373__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55373__$1)){
var c__41503__auto__ = cljs.core.chunk_first.call(null,seq__55373__$1);
var G__55384 = cljs.core.chunk_rest.call(null,seq__55373__$1);
var G__55385 = c__41503__auto__;
var G__55386 = cljs.core.count.call(null,c__41503__auto__);
var G__55387 = (0);
seq__55373 = G__55384;
chunk__55374 = G__55385;
count__55375 = G__55386;
i__55376 = G__55387;
continue;
} else {
var vec__55378 = cljs.core.first.call(null,seq__55373__$1);
var k = cljs.core.nth.call(null,vec__55378,(0),null);
var plugin = cljs.core.nth.call(null,vec__55378,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55373,chunk__55374,count__55375,i__55376,pl_55388,vec__55378,k,plugin,seq__55373__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55388.call(null,msg_hist);
});})(seq__55373,chunk__55374,count__55375,i__55376,pl_55388,vec__55378,k,plugin,seq__55373__$1,temp__4657__auto__))
);
} else {
}

var G__55389 = cljs.core.next.call(null,seq__55373__$1);
var G__55390 = null;
var G__55391 = (0);
var G__55392 = (0);
seq__55373 = G__55389;
chunk__55374 = G__55390;
count__55375 = G__55391;
i__55376 = G__55392;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args55393 = [];
var len__41762__auto___55400 = arguments.length;
var i__41763__auto___55401 = (0);
while(true){
if((i__41763__auto___55401 < len__41762__auto___55400)){
args55393.push((arguments[i__41763__auto___55401]));

var G__55402 = (i__41763__auto___55401 + (1));
i__41763__auto___55401 = G__55402;
continue;
} else {
}
break;
}

var G__55395 = args55393.length;
switch (G__55395) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55393.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55396_55404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55397_55405 = null;
var count__55398_55406 = (0);
var i__55399_55407 = (0);
while(true){
if((i__55399_55407 < count__55398_55406)){
var msg_55408 = cljs.core._nth.call(null,chunk__55397_55405,i__55399_55407);
figwheel.client.socket.handle_incoming_message.call(null,msg_55408);

var G__55409 = seq__55396_55404;
var G__55410 = chunk__55397_55405;
var G__55411 = count__55398_55406;
var G__55412 = (i__55399_55407 + (1));
seq__55396_55404 = G__55409;
chunk__55397_55405 = G__55410;
count__55398_55406 = G__55411;
i__55399_55407 = G__55412;
continue;
} else {
var temp__4657__auto___55413 = cljs.core.seq.call(null,seq__55396_55404);
if(temp__4657__auto___55413){
var seq__55396_55414__$1 = temp__4657__auto___55413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55396_55414__$1)){
var c__41503__auto___55415 = cljs.core.chunk_first.call(null,seq__55396_55414__$1);
var G__55416 = cljs.core.chunk_rest.call(null,seq__55396_55414__$1);
var G__55417 = c__41503__auto___55415;
var G__55418 = cljs.core.count.call(null,c__41503__auto___55415);
var G__55419 = (0);
seq__55396_55404 = G__55416;
chunk__55397_55405 = G__55417;
count__55398_55406 = G__55418;
i__55399_55407 = G__55419;
continue;
} else {
var msg_55420 = cljs.core.first.call(null,seq__55396_55414__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55420);

var G__55421 = cljs.core.next.call(null,seq__55396_55414__$1);
var G__55422 = null;
var G__55423 = (0);
var G__55424 = (0);
seq__55396_55404 = G__55421;
chunk__55397_55405 = G__55422;
count__55398_55406 = G__55423;
i__55399_55407 = G__55424;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__41769__auto__ = [];
var len__41762__auto___55429 = arguments.length;
var i__41763__auto___55430 = (0);
while(true){
if((i__41763__auto___55430 < len__41762__auto___55429)){
args__41769__auto__.push((arguments[i__41763__auto___55430]));

var G__55431 = (i__41763__auto___55430 + (1));
i__41763__auto___55430 = G__55431;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55426){
var map__55427 = p__55426;
var map__55427__$1 = ((((!((map__55427 == null)))?((((map__55427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55427):map__55427);
var opts = map__55427__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55425){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55425));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55433){if((e55433 instanceof Error)){
var e = e55433;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55433;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55437){
var map__55438 = p__55437;
var map__55438__$1 = ((((!((map__55438 == null)))?((((map__55438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55438):map__55438);
var msg_name = cljs.core.get.call(null,map__55438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1482388930036