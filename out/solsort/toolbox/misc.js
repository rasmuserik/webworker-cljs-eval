// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.misc');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.Jsonp');
goog.require('goog.net.XhrIo');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
solsort.toolbox.misc.hex_byte = (function solsort$toolbox$misc$hex_byte(i){
return (i | (256)).toString((16)).slice((-2));
});
/**
 * wrap in an js/Error object, if not already an error
 */
solsort.toolbox.misc.async_err = (function solsort$toolbox$misc$async_err(e){
if((e instanceof Error)){
return e;
} else {
var o = (new Error(e));
(o["data"] = e);

return o;
}
});
/**
 * throw e if e is an js/Error instance. used by the <? macro
 */
solsort.toolbox.misc.throw_error = (function solsort$toolbox$misc$throw_error(e){
if((e instanceof Error)){
throw e;
} else {
return e;
}
});
solsort.toolbox.misc.next_tick = (function solsort$toolbox$misc$next_tick(f){
return setTimeout(f,(0));
});
solsort.toolbox.misc.unatom = (function solsort$toolbox$misc$unatom(o){
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (16384))) || (o.cljs$core$IAtom$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,o))){
return cljs.core.deref.call(null,o);
} else {
return o;
}
});
solsort.toolbox.misc.put_BANG_close_BANG_ = (function solsort$toolbox$misc$put_BANG_close_BANG_(c,d){
if((d == null)){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return cljs.core.async.put_BANG_.call(null,c,d);
}
});
/**
 * Convert a javascript promise to a core.async channel
 */
solsort.toolbox.misc._LT_p = (function solsort$toolbox$misc$_LT_p(p){
var c = cljs.core.async.chan.call(null);
p.then(((function (c){
return (function (p1__49218_SHARP_){
return solsort.toolbox.misc.put_BANG_close_BANG_.call(null,c,p1__49218_SHARP_);
});})(c))
,((function (c){
return (function (p1__49219_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,solsort.toolbox.misc.async_err.call(null,p1__49219_SHARP_));
});})(c))
);

return c;
});
/**
 * Convert a javascript node-style async to core.async channel
 */
solsort.toolbox.misc._LT_n = (function solsort$toolbox$misc$_LT_n(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49222 = arguments.length;
var i__41763__auto___49223 = (0);
while(true){
if((i__41763__auto___49223 < len__41762__auto___49222)){
args__41769__auto__.push((arguments[i__41763__auto___49223]));

var G__49224 = (i__41763__auto___49223 + (1));
i__41763__auto___49223 = G__49224;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((1) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((1)),(0),null)):null);
return solsort.toolbox.misc._LT_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41770__auto__);
});

solsort.toolbox.misc._LT_n.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var c = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.conj.call(null,args,((function (c){
return (function (err,res){
if(cljs.core.truth_(err)){
return cljs.core.async.put_BANG_.call(null,c,solsort.toolbox.misc.async_err.call(null,err));
} else {
return solsort.toolbox.misc.put_BANG_close_BANG_.call(null,c,res);
}
});})(c))
));

return c;
});

solsort.toolbox.misc._LT_n.cljs$lang$maxFixedArity = (1);

solsort.toolbox.misc._LT_n.cljs$lang$applyTo = (function (seq49220){
var G__49221 = cljs.core.first.call(null,seq49220);
var seq49220__$1 = cljs.core.next.call(null,seq49220);
return solsort.toolbox.misc._LT_n.cljs$core$IFn$_invoke$arity$variadic(G__49221,seq49220__$1);
});
solsort.toolbox.misc._LT_blob_url = (function solsort$toolbox$misc$_LT_blob_url(blob){
var reader = (new FileReader());
var c = cljs.core.async.chan.call(null);
(reader["onloadend"] = ((function (reader,c){
return (function (){
return solsort.toolbox.misc.put_BANG_close_BANG_.call(null,c,(reader["result"]));
});})(reader,c))
);

if(cljs.core.truth_(blob)){
reader.readAsDataURL(blob);
} else {
cljs.core.async.close_BANG_.call(null,c);
}

return c;
});
solsort.toolbox.misc._LT_blob_text = (function solsort$toolbox$misc$_LT_blob_text(blob){
var reader = (new FileReader());
var c = cljs.core.async.chan.call(null);
(reader["onloadend"] = ((function (reader,c){
return (function (){
return solsort.toolbox.misc.put_BANG_close_BANG_.call(null,c,(reader["result"]));
});})(reader,c))
);

if(cljs.core.truth_(blob)){
reader.readAsText(blob);
} else {
cljs.core.async.close_BANG_.call(null,c);
}

return c;
});
solsort.toolbox.misc.js_seq = (function solsort$toolbox$misc$js_seq(o){
return cljs.core.seq.call(null,Array.prototype.slice.call(o));
});
solsort.toolbox.misc.starts_with = (function solsort$toolbox$misc$starts_with(string,prefix){
return cljs.core._EQ_.call(null,prefix,string.slice((0),prefix.length));
});
solsort.toolbox.misc.run_once = (function solsort$toolbox$misc$run_once(f){
var do_run = cljs.core.atom.call(null,true);
return ((function (do_run){
return (function() { 
var G__49225__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,do_run))){
cljs.core.reset_BANG_.call(null,do_run,false);

return cljs.core.apply.call(null,f,args);
} else {
return null;
}
};
var G__49225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49226__i = 0, G__49226__a = new Array(arguments.length -  0);
while (G__49226__i < G__49226__a.length) {G__49226__a[G__49226__i] = arguments[G__49226__i + 0]; ++G__49226__i;}
  args = new cljs.core.IndexedSeq(G__49226__a,0);
} 
return G__49225__delegate.call(this,args);};
G__49225.cljs$lang$maxFixedArity = 0;
G__49225.cljs$lang$applyTo = (function (arglist__49227){
var args = cljs.core.seq(arglist__49227);
return G__49225__delegate(args);
});
G__49225.cljs$core$IFn$_invoke$arity$variadic = G__49225__delegate;
return G__49225;
})()
;
;})(do_run))
});
solsort.toolbox.misc.parse_json_or_nil = (function solsort$toolbox$misc$parse_json_or_nil(str){
try{return JSON.parse(str);
}catch (e49229){var _ = e49229;
return null;
}});
solsort.toolbox.misc.jsextend = (function solsort$toolbox$misc$jsextend(target,source){
var ks_49230 = Object.keys(source);
while(true){
if((ks_49230.length > (0))){
var k_49231 = ks_49230.pop();
(target[k_49231] = (source[k_49231]));

continue;
} else {
}
break;
}

return target;
});
solsort.toolbox.misc.chan_QMARK_ = (function solsort$toolbox$misc$chan_QMARK_(c){
return (c instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
solsort.toolbox.misc.function_QMARK_ = (function solsort$toolbox$misc$function_QMARK_(c){
return (c instanceof Function);
});
solsort.toolbox.misc._LT_seq_LT__BANG_ = (function solsort$toolbox$misc$_LT_seq_LT__BANG_(cs){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_49285){
var state_val_49286 = (state_49285[(1)]);
if((state_val_49286 === (1))){
var inst_49267 = cljs.core.PersistentVector.EMPTY;
var inst_49268 = inst_49267;
var inst_49269 = cs;
var state_49285__$1 = (function (){var statearr_49287 = state_49285;
(statearr_49287[(7)] = inst_49269);

(statearr_49287[(8)] = inst_49268);

return statearr_49287;
})();
var statearr_49288_49302 = state_49285__$1;
(statearr_49288_49302[(2)] = null);

(statearr_49288_49302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (2))){
var inst_49269 = (state_49285[(7)]);
var inst_49271 = cljs.core.first.call(null,inst_49269);
var state_49285__$1 = state_49285;
if(cljs.core.truth_(inst_49271)){
var statearr_49289_49303 = state_49285__$1;
(statearr_49289_49303[(1)] = (4));

} else {
var statearr_49290_49304 = state_49285__$1;
(statearr_49290_49304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (3))){
var inst_49283 = (state_49285[(2)]);
var state_49285__$1 = state_49285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49285__$1,inst_49283);
} else {
if((state_val_49286 === (4))){
var inst_49269 = (state_49285[(7)]);
var inst_49273 = cljs.core.first.call(null,inst_49269);
var state_49285__$1 = state_49285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49285__$1,(7),inst_49273);
} else {
if((state_val_49286 === (5))){
var inst_49268 = (state_49285[(8)]);
var state_49285__$1 = state_49285;
var statearr_49291_49305 = state_49285__$1;
(statearr_49291_49305[(2)] = inst_49268);

(statearr_49291_49305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (6))){
var inst_49281 = (state_49285[(2)]);
var state_49285__$1 = state_49285;
var statearr_49292_49306 = state_49285__$1;
(statearr_49292_49306[(2)] = inst_49281);

(statearr_49292_49306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (7))){
var inst_49269 = (state_49285[(7)]);
var inst_49268 = (state_49285[(8)]);
var inst_49275 = (state_49285[(2)]);
var inst_49276 = cljs.core.conj.call(null,inst_49268,inst_49275);
var inst_49277 = cljs.core.rest.call(null,inst_49269);
var inst_49268__$1 = inst_49276;
var inst_49269__$1 = inst_49277;
var state_49285__$1 = (function (){var statearr_49293 = state_49285;
(statearr_49293[(7)] = inst_49269__$1);

(statearr_49293[(8)] = inst_49268__$1);

return statearr_49293;
})();
var statearr_49294_49307 = state_49285__$1;
(statearr_49294_49307[(2)] = null);

(statearr_49294_49307[(1)] = (2));


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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__ = null;
var solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____0 = (function (){
var statearr_49298 = [null,null,null,null,null,null,null,null,null];
(statearr_49298[(0)] = solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__);

(statearr_49298[(1)] = (1));

return statearr_49298;
});
var solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____1 = (function (state_49285){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_49285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49299){if((e49299 instanceof Object)){
var ex__46334__auto__ = e49299;
var statearr_49300_49308 = state_49285;
(statearr_49300_49308[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49309 = state_49285;
state_49285 = G__49309;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__ = function(state_49285){
switch(arguments.length){
case 0:
return solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____1.call(this,state_49285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____0;
solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto____1;
return solsort$toolbox$misc$_LT_seq_LT__BANG__$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_49301 = f__46443__auto__.call(null);
(statearr_49301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_49301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
solsort.toolbox.misc.print_channel = (function solsort$toolbox$misc$print_channel(c){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_49358){
var state_val_49359 = (state_49358[(1)]);
if((state_val_49359 === (1))){
var state_49358__$1 = state_49358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49358__$1,(2),c);
} else {
if((state_val_49359 === (2))){
var inst_49344 = (state_49358[(2)]);
var inst_49345 = inst_49344;
var state_49358__$1 = (function (){var statearr_49360 = state_49358;
(statearr_49360[(7)] = inst_49345);

return statearr_49360;
})();
var statearr_49361_49376 = state_49358__$1;
(statearr_49361_49376[(2)] = null);

(statearr_49361_49376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (3))){
var inst_49345 = (state_49358[(7)]);
var state_49358__$1 = state_49358;
if(cljs.core.truth_(inst_49345)){
var statearr_49362_49377 = state_49358__$1;
(statearr_49362_49377[(1)] = (5));

} else {
var statearr_49363_49378 = state_49358__$1;
(statearr_49363_49378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (4))){
var inst_49356 = (state_49358[(2)]);
var state_49358__$1 = state_49358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49358__$1,inst_49356);
} else {
if((state_val_49359 === (5))){
var inst_49345 = (state_49358[(7)]);
var inst_49348 = cljs.core.print.call(null,inst_49345);
var state_49358__$1 = (function (){var statearr_49364 = state_49358;
(statearr_49364[(8)] = inst_49348);

return statearr_49364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49358__$1,(8),c);
} else {
if((state_val_49359 === (6))){
var state_49358__$1 = state_49358;
var statearr_49365_49379 = state_49358__$1;
(statearr_49365_49379[(2)] = null);

(statearr_49365_49379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (7))){
var inst_49354 = (state_49358[(2)]);
var state_49358__$1 = state_49358;
var statearr_49366_49380 = state_49358__$1;
(statearr_49366_49380[(2)] = inst_49354);

(statearr_49366_49380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (8))){
var inst_49350 = (state_49358[(2)]);
var inst_49345 = inst_49350;
var state_49358__$1 = (function (){var statearr_49367 = state_49358;
(statearr_49367[(7)] = inst_49345);

return statearr_49367;
})();
var statearr_49368_49381 = state_49358__$1;
(statearr_49368_49381[(2)] = null);

(statearr_49368_49381[(1)] = (3));


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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__ = null;
var solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____0 = (function (){
var statearr_49372 = [null,null,null,null,null,null,null,null,null];
(statearr_49372[(0)] = solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__);

(statearr_49372[(1)] = (1));

return statearr_49372;
});
var solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____1 = (function (state_49358){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_49358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49373){if((e49373 instanceof Object)){
var ex__46334__auto__ = e49373;
var statearr_49374_49382 = state_49358;
(statearr_49374_49382[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49383 = state_49358;
state_49358 = G__49383;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__ = function(state_49358){
switch(arguments.length){
case 0:
return solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____1.call(this,state_49358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____0;
solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$toolbox$misc$print_channel_$_state_machine__46331__auto____1;
return solsort$toolbox$misc$print_channel_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_49375 = f__46443__auto__.call(null);
(statearr_49375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_49375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
solsort.toolbox.misc.by_first = (function solsort$toolbox$misc$by_first(xf){
var prev_key = cljs.core.atom.call(null,null);
var values = cljs.core.atom.call(null,cljs.core.List.EMPTY);
return ((function (prev_key,values){
return (function() {
var G__49384 = null;
var G__49384__1 = (function (result){
if((cljs.core.count.call(null,cljs.core.deref.call(null,values)) > (0))){
xf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,prev_key),cljs.core.deref.call(null,values)], null));

cljs.core.reset_BANG_.call(null,values,cljs.core.List.EMPTY);
} else {
}

return xf.call(null,result);
});
var G__49384__2 = (function (result,input){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,input),cljs.core.deref.call(null,prev_key))){
return cljs.core.swap_BANG_.call(null,values,cljs.core.conj,cljs.core.rest.call(null,input));
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,values)) > (0))){
xf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,prev_key),cljs.core.deref.call(null,values)], null));
} else {
}

cljs.core.reset_BANG_.call(null,prev_key,cljs.core.first.call(null,input));

return cljs.core.reset_BANG_.call(null,values,(function (){var x__41526__auto__ = cljs.core.rest.call(null,input);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})());
}
});
G__49384 = function(result,input){
switch(arguments.length){
case 1:
return G__49384__1.call(this,result);
case 2:
return G__49384__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49384.cljs$core$IFn$_invoke$arity$1 = G__49384__1;
G__49384.cljs$core$IFn$_invoke$arity$2 = G__49384__2;
return G__49384;
})()
;})(prev_key,values))
});
solsort.toolbox.misc.transducer_status = (function solsort$toolbox$misc$transducer_status(var_args){
var args__41769__auto__ = [];
var len__41762__auto___49386 = arguments.length;
var i__41763__auto___49387 = (0);
while(true){
if((i__41763__auto___49387 < len__41762__auto___49386)){
args__41769__auto__.push((arguments[i__41763__auto___49387]));

var G__49388 = (i__41763__auto___49387 + (1));
i__41763__auto___49387 = G__49388;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((0) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((0)),(0),null)):null);
return solsort.toolbox.misc.transducer_status.cljs$core$IFn$_invoke$arity$variadic(argseq__41770__auto__);
});

solsort.toolbox.misc.transducer_status.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return (function (xf){
var prev_time = cljs.core.atom.call(null,(0));
var cnt = cljs.core.atom.call(null,(0));
return ((function (prev_time,cnt){
return (function() {
var G__49389 = null;
var G__49389__1 = (function (result){
cljs.core.apply.call(null,cljs.core.print,cljs.core.concat.call(null,s,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"done","done",750687339,null))));

return xf.call(null,result);
});
var G__49389__2 = (function (result,input){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.inc);

if(((60000) < (Date.now() - cljs.core.deref.call(null,prev_time)))){
cljs.core.reset_BANG_.call(null,prev_time,Date.now());

cljs.core.apply.call(null,cljs.core.print,cljs.core.concat.call(null,s,(function (){var x__41526__auto__ = cljs.core.deref.call(null,cnt);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41526__auto__);
})()));
} else {
}

return xf.call(null,result,input);
});
G__49389 = function(result,input){
switch(arguments.length){
case 1:
return G__49389__1.call(this,result);
case 2:
return G__49389__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49389.cljs$core$IFn$_invoke$arity$1 = G__49389__1;
G__49389.cljs$core$IFn$_invoke$arity$2 = G__49389__2;
return G__49389;
})()
;})(prev_time,cnt))
});
});

solsort.toolbox.misc.transducer_status.cljs$lang$maxFixedArity = (0);

solsort.toolbox.misc.transducer_status.cljs$lang$applyTo = (function (seq49385){
return solsort.toolbox.misc.transducer_status.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49385));
});
solsort.toolbox.misc.transducer_accumulate = (function solsort$toolbox$misc$transducer_accumulate(initial){
return (function (xf){
var acc = cljs.core.atom.call(null,initial);
return ((function (acc){
return (function() {
var G__49390 = null;
var G__49390__1 = (function (result){
if(cljs.core.truth_(cljs.core.deref.call(null,acc))){
xf.call(null,result,cljs.core.deref.call(null,acc));

cljs.core.reset_BANG_.call(null,acc,null);
} else {
}

return xf.call(null,result);
});
var G__49390__2 = (function (result,input){
return cljs.core.swap_BANG_.call(null,acc,cljs.core.conj,input);
});
G__49390 = function(result,input){
switch(arguments.length){
case 1:
return G__49390__1.call(this,result);
case 2:
return G__49390__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49390.cljs$core$IFn$_invoke$arity$1 = G__49390__1;
G__49390.cljs$core$IFn$_invoke$arity$2 = G__49390__2;
return G__49390;
})()
;})(acc))
});
});
solsort.toolbox.misc.group_lines_by_first = cljs.core.comp.call(null,solsort.toolbox.misc.by_first,cljs.core.map.call(null,(function (p__49391){
var vec__49392 = p__49391;
var k = cljs.core.nth.call(null,vec__49392,(0),null);
var v = cljs.core.nth.call(null,vec__49392,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.call(null,((function (vec__49392,k,v){
return (function (p__49393){
var vec__49394 = p__49393;
var s = cljs.core.nth.call(null,vec__49394,(0),null);
return s;
});})(vec__49392,k,v))
,v)], null);
})));
solsort.toolbox.misc.parse_path = (function solsort$toolbox$misc$parse_path(path){
return path.slice((1)).split(/[\/.]/);
});
solsort.toolbox.misc.canonize_string = (function solsort$toolbox$misc$canonize_string(s){
return s.toLowerCase().replace((new RegExp("[\u00E9\u00EA]","g")),"e").replace((new RegExp("[\u00E6\u00C6]","g")),"ae").replace((new RegExp("[\u00F8\u00D8]","g")),"o").replace((new RegExp("[\u00E5\u00C5]","g")),"aa").replace((new RegExp("(%[0-9a-fA-F][0-9a-fA-F]|[^a-z0-9])+","g"))," ").trim().replace((new RegExp(" ","g")),"-");
});
solsort.toolbox.misc.swap_trim = (function solsort$toolbox$misc$swap_trim(p__49395){
var vec__49397 = p__49395;
var a = cljs.core.nth.call(null,vec__49397,(0),null);
var b = cljs.core.nth.call(null,vec__49397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,b),clojure.string.trim.call(null,a)], null);
});
solsort.toolbox.misc.hex_color = (function solsort$toolbox$misc$hex_color(n){
return [cljs.core.str("#"),cljs.core.str(((16777216) | ((16777215) & n)).toString((16)).slice((1)))].join('');
});
solsort.toolbox.misc._unique_id_counter = cljs.core.atom.call(null,(0));
solsort.toolbox.misc.unique_id = (function solsort$toolbox$misc$unique_id(){
return [cljs.core.str("id"),cljs.core.str(cljs.core.swap_BANG_.call(null,solsort.toolbox.misc._unique_id_counter,cljs.core.inc))].join('');
});
/**
 * Limit how often a function (without arguments) is called
 */
solsort.toolbox.misc.throttle = (function solsort$toolbox$misc$throttle(f,t){
var prev_t = cljs.core.atom.call(null,(0));
var running = cljs.core.atom.call(null,false);
var scheduled = cljs.core.atom.call(null,false);
return ((function (prev_t,running,scheduled){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,running))){
return cljs.core.reset_BANG_.call(null,scheduled,true);
} else {
cljs.core.reset_BANG_.call(null,running,true);

var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__,prev_t,running,scheduled){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__,prev_t,running,scheduled){
return (function (state_49491){
var state_val_49492 = (state_49491[(1)]);
if((state_val_49492 === (7))){
var inst_49468 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
var statearr_49493_49518 = state_49491__$1;
(statearr_49493_49518[(2)] = inst_49468);

(statearr_49493_49518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (1))){
var state_49491__$1 = state_49491;
var statearr_49494_49519 = state_49491__$1;
(statearr_49494_49519[(2)] = null);

(statearr_49494_49519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (4))){
var inst_49461 = (state_49491[(7)]);
var inst_49465 = (t - inst_49461);
var inst_49466 = cljs.core.async.timeout.call(null,inst_49465);
var state_49491__$1 = state_49491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49491__$1,(7),inst_49466);
} else {
if((state_val_49492 === (13))){
var inst_49485 = cljs.core.reset_BANG_.call(null,running,false);
var state_49491__$1 = state_49491;
var statearr_49495_49520 = state_49491__$1;
(statearr_49495_49520[(2)] = inst_49485);

(statearr_49495_49520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (6))){
var inst_49472 = (state_49491[(8)]);
var inst_49471 = (state_49491[(2)]);
var inst_49472__$1 = f.call(null);
var inst_49473 = solsort.toolbox.misc.chan_QMARK_.call(null,inst_49472__$1);
var state_49491__$1 = (function (){var statearr_49496 = state_49491;
(statearr_49496[(9)] = inst_49471);

(statearr_49496[(8)] = inst_49472__$1);

return statearr_49496;
})();
if(cljs.core.truth_(inst_49473)){
var statearr_49497_49521 = state_49491__$1;
(statearr_49497_49521[(1)] = (8));

} else {
var statearr_49498_49522 = state_49491__$1;
(statearr_49498_49522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (3))){
var inst_49489 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49491__$1,inst_49489);
} else {
if((state_val_49492 === (12))){
var inst_49482 = cljs.core.reset_BANG_.call(null,scheduled,false);
var state_49491__$1 = (function (){var statearr_49499 = state_49491;
(statearr_49499[(10)] = inst_49482);

return statearr_49499;
})();
var statearr_49500_49523 = state_49491__$1;
(statearr_49500_49523[(2)] = null);

(statearr_49500_49523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (2))){
var inst_49461 = (state_49491[(7)]);
var inst_49459 = Date.now();
var inst_49460 = cljs.core.deref.call(null,prev_t);
var inst_49461__$1 = (inst_49459 - inst_49460);
var inst_49462 = cljs.core.reset_BANG_.call(null,prev_t,inst_49459);
var inst_49463 = (inst_49461__$1 < t);
var state_49491__$1 = (function (){var statearr_49501 = state_49491;
(statearr_49501[(7)] = inst_49461__$1);

(statearr_49501[(11)] = inst_49462);

return statearr_49501;
})();
if(cljs.core.truth_(inst_49463)){
var statearr_49502_49524 = state_49491__$1;
(statearr_49502_49524[(1)] = (4));

} else {
var statearr_49503_49525 = state_49491__$1;
(statearr_49503_49525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (11))){
var inst_49476 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
var statearr_49504_49526 = state_49491__$1;
(statearr_49504_49526[(2)] = inst_49476);

(statearr_49504_49526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (9))){
var state_49491__$1 = state_49491;
var statearr_49505_49527 = state_49491__$1;
(statearr_49505_49527[(2)] = null);

(statearr_49505_49527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (5))){
var state_49491__$1 = state_49491;
var statearr_49506_49528 = state_49491__$1;
(statearr_49506_49528[(2)] = null);

(statearr_49506_49528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (14))){
var inst_49487 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
var statearr_49507_49529 = state_49491__$1;
(statearr_49507_49529[(2)] = inst_49487);

(statearr_49507_49529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (10))){
var inst_49479 = (state_49491[(2)]);
var inst_49480 = cljs.core.deref.call(null,scheduled);
var state_49491__$1 = (function (){var statearr_49508 = state_49491;
(statearr_49508[(12)] = inst_49479);

return statearr_49508;
})();
if(cljs.core.truth_(inst_49480)){
var statearr_49509_49530 = state_49491__$1;
(statearr_49509_49530[(1)] = (12));

} else {
var statearr_49510_49531 = state_49491__$1;
(statearr_49510_49531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (8))){
var inst_49472 = (state_49491[(8)]);
var state_49491__$1 = state_49491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49491__$1,(11),inst_49472);
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
});})(c__46442__auto__,prev_t,running,scheduled))
;
return ((function (switch__46330__auto__,c__46442__auto__,prev_t,running,scheduled){
return (function() {
var solsort$toolbox$misc$throttle_$_state_machine__46331__auto__ = null;
var solsort$toolbox$misc$throttle_$_state_machine__46331__auto____0 = (function (){
var statearr_49514 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49514[(0)] = solsort$toolbox$misc$throttle_$_state_machine__46331__auto__);

(statearr_49514[(1)] = (1));

return statearr_49514;
});
var solsort$toolbox$misc$throttle_$_state_machine__46331__auto____1 = (function (state_49491){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_49491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e49515){if((e49515 instanceof Object)){
var ex__46334__auto__ = e49515;
var statearr_49516_49532 = state_49491;
(statearr_49516_49532[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49533 = state_49491;
state_49491 = G__49533;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$toolbox$misc$throttle_$_state_machine__46331__auto__ = function(state_49491){
switch(arguments.length){
case 0:
return solsort$toolbox$misc$throttle_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$toolbox$misc$throttle_$_state_machine__46331__auto____1.call(this,state_49491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$toolbox$misc$throttle_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$toolbox$misc$throttle_$_state_machine__46331__auto____0;
solsort$toolbox$misc$throttle_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$toolbox$misc$throttle_$_state_machine__46331__auto____1;
return solsort$toolbox$misc$throttle_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__,prev_t,running,scheduled))
})();
var state__46444__auto__ = (function (){var statearr_49517 = f__46443__auto__.call(null);
(statearr_49517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_49517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__,prev_t,running,scheduled))
);

return c__46442__auto__;
}
});
;})(prev_t,running,scheduled))
});

//# sourceMappingURL=misc.js.map?rel=1482388853042