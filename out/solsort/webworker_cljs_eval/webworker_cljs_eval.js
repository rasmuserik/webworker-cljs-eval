// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.webworker_cljs_eval.webworker_cljs_eval');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('solsort.toolbox.ui');
goog.require('solsort.util');
goog.require('cljs.js');
goog.require('cljs.core.async');
goog.require('solsort.toolbox.setup');
goog.require('solsort.toolbox.appdb');
goog.require('clojure.string');
goog.require('cljs.reader');
solsort.webworker_cljs_eval.webworker_cljs_eval.message_handler = (function solsort$webworker_cljs_eval$webworker_cljs_eval$message_handler(message){
var G__51738 = (message["type"]);
switch (G__51738) {
case "pong":
return solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819),(message["src"]),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),Date.now());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((message["type"]))].join('')));

}
});
if(typeof solsort.webworker_cljs_eval.webworker_cljs_eval.workers !== 'undefined'){
} else {
solsort.webworker_cljs_eval.webworker_cljs_eval.workers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
solsort.webworker_cljs_eval.webworker_cljs_eval.new_worker = (function solsort$webworker_cljs_eval$webworker_cljs_eval$new_worker(){
var worker = (new Worker(URL.createObjectURL((new Blob(["onmessage=function(e){eval(e.data)}"],{"type": "application/javascript"})))));
var id = [cljs.core.str(cljs.core.random_uuid.call(null))].join('');
worker.postMessage([cljs.core.str("ID="),cljs.core.str(JSON.stringify(id))].join(''));

worker.postMessage("console.log('new worker:', ID)");

worker.postMessage("\nCLOSURE_IMPORT_SCRIPT = function(name) {\n   importScripts('http://localhost:3449/out/goog/' + name);\n};\nimportScripts('http://localhost:3449/out/goog/base.js');\nimportScripts('http://localhost:3449/out/cljs_deps.js');\n");

(worker["onmessage"] = ((function (worker,id){
return (function (e){
var o = (e["data"]);
(o["src"] = id);

return solsort.webworker_cljs_eval.webworker_cljs_eval.message_handler.call(null,o);
});})(worker,id))
);

cljs.core.swap_BANG_.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers,cljs.core.assoc,id,worker);

return solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"running","running",1554969103),true], null));
});
solsort.webworker_cljs_eval.webworker_cljs_eval.kill_worker = (function solsort$webworker_cljs_eval$webworker_cljs_eval$kill_worker(id){
cljs.core.get.call(null,cljs.core.deref.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers),id).terminate();

cljs.core.swap_BANG_.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers,cljs.core.dissoc,id);

return solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819),id], null));
});
if(cljs.core.truth_(solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)))){
} else {
solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),"(ns hello\n;(:require [cljs.reader])\n)\n     (js/console.log \"here\")\n     (js/console.log \"here2\") ");
}
cljs.js._STAR_load_fn_STAR_ = (function (m,cb){
solsort.util.log.call(null,new cljs.core.Symbol(null,"load-fn","load-fn",-480612807,null),m);

var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_51783){
var state_val_51784 = (state_51783[(1)]);
if((state_val_51784 === (7))){
var state_51783__$1 = state_51783;
var statearr_51785_51809 = state_51783__$1;
(statearr_51785_51809[(2)] = new cljs.core.Keyword(null,"clj","clj",-660495428));

(statearr_51785_51809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (1))){
var inst_51741 = (state_51783[(7)]);
var inst_51741__$1 = (function (){return ((function (inst_51741,state_val_51784,c__46442__auto__){
return (function (p1__51740_SHARP_){
return solsort.util._LT_p.call(null,fetch([cljs.core.str("http://localhost:3449/out/"),cljs.core.str(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str(p1__51740_SHARP_)].join('')));
});
;})(inst_51741,state_val_51784,c__46442__auto__))
})();
var inst_51742 = inst_51741__$1.call(null,".cljs");
var state_51783__$1 = (function (){var statearr_51786 = state_51783;
(statearr_51786[(7)] = inst_51741__$1);

return statearr_51786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51783__$1,(2),inst_51742);
} else {
if((state_val_51784 === (4))){
var inst_51741 = (state_51783[(7)]);
var inst_51749 = inst_51741.call(null,".cljc");
var state_51783__$1 = state_51783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51783__$1,(6),inst_51749);
} else {
if((state_val_51784 === (13))){
var inst_51766 = (state_51783[(2)]);
var state_51783__$1 = state_51783;
var statearr_51787_51810 = state_51783__$1;
(statearr_51787_51810[(2)] = inst_51766);

(statearr_51787_51810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (6))){
var inst_51751 = (state_51783[(2)]);
var state_51783__$1 = state_51783;
var statearr_51788_51811 = state_51783__$1;
(statearr_51788_51811[(2)] = inst_51751);

(statearr_51788_51811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (3))){
var inst_51744 = (state_51783[(8)]);
var state_51783__$1 = state_51783;
var statearr_51789_51812 = state_51783__$1;
(statearr_51789_51812[(2)] = inst_51744);

(statearr_51789_51812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (12))){
var inst_51768 = (state_51783[(2)]);
var inst_51769 = inst_51768.text();
var inst_51770 = solsort.util._LT_p.call(null,inst_51769);
var state_51783__$1 = state_51783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51783__$1,(14),inst_51770);
} else {
if((state_val_51784 === (2))){
var inst_51744 = (state_51783[(8)]);
var inst_51744__$1 = (state_51783[(2)]);
var inst_51745 = (inst_51744__$1["status"]);
var inst_51746 = cljs.core._EQ_.call(null,(200),inst_51745);
var state_51783__$1 = (function (){var statearr_51790 = state_51783;
(statearr_51790[(8)] = inst_51744__$1);

return statearr_51790;
})();
if(inst_51746){
var statearr_51791_51813 = state_51783__$1;
(statearr_51791_51813[(1)] = (3));

} else {
var statearr_51792_51814 = state_51783__$1;
(statearr_51792_51814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (11))){
var inst_51741 = (state_51783[(7)]);
var inst_51764 = inst_51741.call(null,".js");
var state_51783__$1 = state_51783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51783__$1,(13),inst_51764);
} else {
if((state_val_51784 === (9))){
var inst_51753 = (state_51783[(9)]);
var inst_51759 = (state_51783[(2)]);
var inst_51760 = (inst_51753["status"]);
var inst_51761 = cljs.core._EQ_.call(null,(200),inst_51760);
var state_51783__$1 = (function (){var statearr_51793 = state_51783;
(statearr_51793[(10)] = inst_51759);

return statearr_51793;
})();
if(inst_51761){
var statearr_51794_51815 = state_51783__$1;
(statearr_51794_51815[(1)] = (10));

} else {
var statearr_51795_51816 = state_51783__$1;
(statearr_51795_51816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (5))){
var inst_51753 = (state_51783[(9)]);
var inst_51753__$1 = (state_51783[(2)]);
var inst_51754 = (inst_51753__$1["status"]);
var inst_51755 = cljs.core._EQ_.call(null,(200),inst_51754);
var state_51783__$1 = (function (){var statearr_51796 = state_51783;
(statearr_51796[(9)] = inst_51753__$1);

return statearr_51796;
})();
if(inst_51755){
var statearr_51797_51817 = state_51783__$1;
(statearr_51797_51817[(1)] = (7));

} else {
var statearr_51798_51818 = state_51783__$1;
(statearr_51798_51818[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (14))){
var inst_51759 = (state_51783[(10)]);
var inst_51772 = (state_51783[(2)]);
var inst_51773 = new cljs.core.Symbol(null,"load-fn-result","load-fn-result",606116423,null);
var inst_51774 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51775 = [inst_51759,inst_51772];
var inst_51776 = cljs.core.PersistentHashMap.fromArrays(inst_51774,inst_51775);
var inst_51777 = solsort.util.log.call(null,inst_51773,inst_51776);
var inst_51778 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_51779 = [inst_51759,inst_51772];
var inst_51780 = cljs.core.PersistentHashMap.fromArrays(inst_51778,inst_51779);
var inst_51781 = cb.call(null,inst_51780);
var state_51783__$1 = (function (){var statearr_51799 = state_51783;
(statearr_51799[(11)] = inst_51777);

return statearr_51799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51783__$1,inst_51781);
} else {
if((state_val_51784 === (10))){
var inst_51753 = (state_51783[(9)]);
var state_51783__$1 = state_51783;
var statearr_51800_51819 = state_51783__$1;
(statearr_51800_51819[(2)] = inst_51753);

(statearr_51800_51819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51784 === (8))){
var state_51783__$1 = state_51783;
var statearr_51801_51820 = state_51783__$1;
(statearr_51801_51820[(2)] = new cljs.core.Keyword(null,"js","js",1768080579));

(statearr_51801_51820[(1)] = (9));


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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__ = null;
var solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____0 = (function (){
var statearr_51805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51805[(0)] = solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__);

(statearr_51805[(1)] = (1));

return statearr_51805;
});
var solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____1 = (function (state_51783){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_51783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e51806){if((e51806 instanceof Object)){
var ex__46334__auto__ = e51806;
var statearr_51807_51821 = state_51783;
(statearr_51807_51821[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51822 = state_51783;
state_51783 = G__51822;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__ = function(state_51783){
switch(arguments.length){
case 0:
return solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____0.call(this);
case 1:
return solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____1.call(this,state_51783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____0;
solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto____1;
return solsort$webworker_cljs_eval$webworker_cljs_eval$state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_51808 = f__46443__auto__.call(null);
(statearr_51808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_51808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
if(typeof solsort.webworker_cljs_eval.webworker_cljs_eval.compiler_state !== 'undefined'){
} else {
solsort.webworker_cljs_eval.webworker_cljs_eval.compiler_state = cljs.js.empty_state.call(null);
}
solsort.webworker_cljs_eval.webworker_cljs_eval._LT_compile = (function solsort$webworker_cljs_eval$webworker_cljs_eval$_LT_compile(){
var c = cljs.core.async.chan.call(null);
cljs.js.compile_str.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.compiler_state,solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)),((function (c){
return (function (result){
cljs.core.prn.call(null,result);

solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled-code","compiled-code",1972996630)], null),[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result))].join(''));

return cljs.core.async.close_BANG_.call(null,c);
});})(c))
);

return c;
});
solsort.webworker_cljs_eval.webworker_cljs_eval.ping = (function solsort$webworker_cljs_eval$webworker_cljs_eval$ping(id){
solsort.toolbox.appdb.db_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819),id,new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),Date.now());

return cljs.core.get.call(null,cljs.core.deref.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers),id).postMessage("postMessage({type: 'pong'})");
});
solsort.webworker_cljs_eval.webworker_cljs_eval.pinger = (function solsort$webworker_cljs_eval$webworker_cljs_eval$pinger(){
return cljs.core.doall.call(null,(function (){var iter__41472__auto__ = (function solsort$webworker_cljs_eval$webworker_cljs_eval$pinger_$_iter__51831(s__51832){
return (new cljs.core.LazySeq(null,(function (){
var s__51832__$1 = s__51832;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51832__$1);
if(temp__4657__auto__){
var s__51832__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51832__$2)){
var c__41470__auto__ = cljs.core.chunk_first.call(null,s__51832__$2);
var size__41471__auto__ = cljs.core.count.call(null,c__41470__auto__);
var b__51834 = cljs.core.chunk_buffer.call(null,size__41471__auto__);
if((function (){var i__51833 = (0);
while(true){
if((i__51833 < size__41471__auto__)){
var vec__51837 = cljs.core._nth.call(null,c__41470__auto__,i__51833);
var id = cljs.core.nth.call(null,vec__51837,(0),null);
var worker = cljs.core.nth.call(null,vec__51837,(1),null);
cljs.core.chunk_append.call(null,b__51834,solsort.webworker_cljs_eval.webworker_cljs_eval.ping.call(null,id));

var G__51839 = (i__51833 + (1));
i__51833 = G__51839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51834),solsort$webworker_cljs_eval$webworker_cljs_eval$pinger_$_iter__51831.call(null,cljs.core.chunk_rest.call(null,s__51832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51834),null);
}
} else {
var vec__51838 = cljs.core.first.call(null,s__51832__$2);
var id = cljs.core.nth.call(null,vec__51838,(0),null);
var worker = cljs.core.nth.call(null,vec__51838,(1),null);
return cljs.core.cons.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.ping.call(null,id),solsort$webworker_cljs_eval$webworker_cljs_eval$pinger_$_iter__51831.call(null,cljs.core.rest.call(null,s__51832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41472__auto__.call(null,solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819)], null)));
})());
});
if(typeof solsort.webworker_cljs_eval.webworker_cljs_eval.start_ping !== 'undefined'){
} else {
solsort.webworker_cljs_eval.webworker_cljs_eval.start_ping = setInterval((function (){
return solsort.webworker_cljs_eval.webworker_cljs_eval.pinger.call(null);
}),(2000));
}
solsort.webworker_cljs_eval.webworker_cljs_eval.worker_list = (function solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"worker-list"], null)], null),(function (){var iter__41472__auto__ = (function solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933(s__51934){
return (new cljs.core.LazySeq(null,(function (){
var s__51934__$1 = s__51934;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51934__$1);
if(temp__4657__auto__){
var s__51934__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51934__$2)){
var c__41470__auto__ = cljs.core.chunk_first.call(null,s__51934__$2);
var size__41471__auto__ = cljs.core.count.call(null,c__41470__auto__);
var b__51936 = cljs.core.chunk_buffer.call(null,size__41471__auto__);
if((function (){var i__51935 = (0);
while(true){
if((i__51935 < size__41471__auto__)){
var vec__51981 = cljs.core._nth.call(null,c__41470__auto__,i__51935);
var id = cljs.core.nth.call(null,vec__51981,(0),null);
var worker = cljs.core.nth.call(null,vec__51981,(1),null);
cljs.core.chunk_append.call(null,b__51936,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51935,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__){
return (function (){
return solsort.webworker_cljs_eval.webworker_cljs_eval.kill_worker.call(null,id);
});})(i__51935,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__))
], null),"Kill"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51935,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__){
return (function (){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__51935,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (i__51935,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__){
return (function (state_51993){
var state_val_51994 = (state_51993[(1)]);
if((state_val_51994 === (1))){
var inst_51982 = solsort.webworker_cljs_eval.webworker_cljs_eval._LT_compile.call(null);
var state_51993__$1 = state_51993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51993__$1,(2),inst_51982);
} else {
if((state_val_51994 === (2))){
var inst_51984 = (state_51993[(2)]);
var inst_51985 = cljs.core.deref.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers);
var inst_51986 = cljs.core.get.call(null,inst_51985,id);
var inst_51987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51988 = [new cljs.core.Keyword(null,"compiled-code","compiled-code",1972996630)];
var inst_51989 = (new cljs.core.PersistentVector(null,1,(5),inst_51987,inst_51988,null));
var inst_51990 = solsort.toolbox.appdb.db.call(null,inst_51989);
var inst_51991 = inst_51986.postMessage(inst_51990);
var state_51993__$1 = (function (){var statearr_51995 = state_51993;
(statearr_51995[(7)] = inst_51984);

return statearr_51995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51993__$1,inst_51991);
} else {
return null;
}
}
});})(i__51935,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__))
;
return ((function (i__51935,switch__46330__auto__,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__){
return (function() {
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__ = null;
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0 = (function (){
var statearr_51999 = [null,null,null,null,null,null,null,null];
(statearr_51999[(0)] = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__);

(statearr_51999[(1)] = (1));

return statearr_51999;
});
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1 = (function (state_51993){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_51993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e52000){if((e52000 instanceof Object)){
var ex__46334__auto__ = e52000;
var statearr_52001_52025 = state_51993;
(statearr_52001_52025[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52026 = state_51993;
state_51993 = G__52026;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__ = function(state_51993){
switch(arguments.length){
case 0:
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1.call(this,state_51993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0;
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1;
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__;
})()
;})(i__51935,switch__46330__auto__,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__))
})();
var state__46444__auto__ = (function (){var statearr_52002 = f__46443__auto__.call(null);
(statearr_52002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_52002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(i__51935,c__46442__auto__,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__))
);

return c__46442__auto__;
});})(i__51935,vec__51981,id,worker,c__41470__auto__,size__41471__auto__,b__51936,s__51934__$2,temp__4657__auto__))
], null),"run code in worker"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Ping:",(new cljs.core.Keyword(null,"pong","pong",-172484958).cljs$core$IFn$_invoke$arity$1(worker) - new cljs.core.Keyword(null,"ping","ping",-1670114784).cljs$core$IFn$_invoke$arity$1(worker))], null)], null));

var G__52027 = (i__51935 + (1));
i__51935 = G__52027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51936),solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933.call(null,cljs.core.chunk_rest.call(null,s__51934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51936),null);
}
} else {
var vec__52003 = cljs.core.first.call(null,s__51934__$2);
var id = cljs.core.nth.call(null,vec__52003,(0),null);
var worker = cljs.core.nth.call(null,vec__52003,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__52003,id,worker,s__51934__$2,temp__4657__auto__){
return (function (){
return solsort.webworker_cljs_eval.webworker_cljs_eval.kill_worker.call(null,id);
});})(vec__52003,id,worker,s__51934__$2,temp__4657__auto__))
], null),"Kill"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__52003,id,worker,s__51934__$2,temp__4657__auto__){
return (function (){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__){
return (function (state_52015){
var state_val_52016 = (state_52015[(1)]);
if((state_val_52016 === (1))){
var inst_52004 = solsort.webworker_cljs_eval.webworker_cljs_eval._LT_compile.call(null);
var state_52015__$1 = state_52015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52015__$1,(2),inst_52004);
} else {
if((state_val_52016 === (2))){
var inst_52006 = (state_52015[(2)]);
var inst_52007 = cljs.core.deref.call(null,solsort.webworker_cljs_eval.webworker_cljs_eval.workers);
var inst_52008 = cljs.core.get.call(null,inst_52007,id);
var inst_52009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52010 = [new cljs.core.Keyword(null,"compiled-code","compiled-code",1972996630)];
var inst_52011 = (new cljs.core.PersistentVector(null,1,(5),inst_52009,inst_52010,null));
var inst_52012 = solsort.toolbox.appdb.db.call(null,inst_52011);
var inst_52013 = inst_52008.postMessage(inst_52012);
var state_52015__$1 = (function (){var statearr_52017 = state_52015;
(statearr_52017[(7)] = inst_52006);

return statearr_52017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52015__$1,inst_52013);
} else {
return null;
}
}
});})(c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__){
return (function() {
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__ = null;
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0 = (function (){
var statearr_52021 = [null,null,null,null,null,null,null,null];
(statearr_52021[(0)] = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__);

(statearr_52021[(1)] = (1));

return statearr_52021;
});
var solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1 = (function (state_52015){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_52015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e52022){if((e52022 instanceof Object)){
var ex__46334__auto__ = e52022;
var statearr_52023_52028 = state_52015;
(statearr_52023_52028[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52029 = state_52015;
state_52015 = G__52029;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__ = function(state_52015){
switch(arguments.length){
case 0:
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1.call(this,state_52015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____0;
solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto____1;
return solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__))
})();
var state__46444__auto__ = (function (){var statearr_52024 = f__46443__auto__.call(null);
(statearr_52024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_52024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,vec__52003,id,worker,s__51934__$2,temp__4657__auto__))
);

return c__46442__auto__;
});})(vec__52003,id,worker,s__51934__$2,temp__4657__auto__))
], null),"run code in worker"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Ping:",(new cljs.core.Keyword(null,"pong","pong",-172484958).cljs$core$IFn$_invoke$arity$1(worker) - new cljs.core.Keyword(null,"ping","ping",-1670114784).cljs$core$IFn$_invoke$arity$1(worker))], null)], null),solsort$webworker_cljs_eval$webworker_cljs_eval$worker_list_$_iter__51933.call(null,cljs.core.rest.call(null,s__51934__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41472__auto__.call(null,cljs.core.filter.call(null,((function (iter__41472__auto__){
return (function (p1__51840_SHARP_){
return new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51840_SHARP_));
});})(iter__41472__auto__))
,solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workers","workers",-2054878819)], null))));
})());
});
solsort.webworker_cljs_eval.webworker_cljs_eval.app = (function solsort$webworker_cljs_eval$webworker_cljs_eval$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [solsort.toolbox.ui.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"right","right",-452581833),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is an experiment with clojurescript compilation and running code in webworkers."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),solsort.webworker_cljs_eval.webworker_cljs_eval._LT_compile], null),"compile"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),solsort.webworker_cljs_eval.webworker_cljs_eval.new_worker], null),"new worker"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solsort.webworker_cljs_eval.webworker_cljs_eval.worker_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"compiled-code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled-code","compiled-code",1972996630)], null))], null)], null)], null);
});
solsort.util.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solsort.webworker_cljs_eval.webworker_cljs_eval.app], null));

//# sourceMappingURL=webworker_cljs_eval.js.map?rel=1482388922585