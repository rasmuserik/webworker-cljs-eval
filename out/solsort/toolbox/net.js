// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.net');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('solsort.toolbox.misc');
goog.require('cljs.core.async');
/**
 * Load a JavaScript file, and emit true on returned channel when done
 */
solsort.toolbox.net._LT_load_js = (function solsort$toolbox$net$_LT_load_js(url){
var c = cljs.core.async.chan.call(null);
var elem = document.createElement("script");
document.head.appendChild(elem);

(elem["onload"] = ((function (c,elem){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,true);
});})(c,elem))
);

(elem["src"] = url);

return c;
});
solsort.toolbox.net.utf16__GT_utf8 = (function solsort$toolbox$net$utf16__GT_utf8(s){
return unescape(encodeURIComponent(s));
});
solsort.toolbox.net.utf8__GT_utf16 = (function solsort$toolbox$net$utf8__GT_utf16(s){
return decodeURIComponent(escape(s));
});
solsort.toolbox.net.buf__GT_utf8_str = (function solsort$toolbox$net$buf__GT_utf8_str(a){
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__50828_SHARP_){
return String.fromCharCode(p1__50828_SHARP_);
}),cljs.core.seq.call(null,Array.prototype.slice.call((new Uint8Array(a))))));
});
solsort.toolbox.net.buf__GT_str = (function solsort$toolbox$net$buf__GT_str(a){
return solsort.toolbox.net.utf8__GT_utf16.call(null,solsort.toolbox.net.buf__GT_utf8_str.call(null,a));
});
solsort.toolbox.net.utf8_str__GT_buf = (function solsort$toolbox$net$utf8_str__GT_buf(s){
return Uint8Array.from(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__50829_SHARP_){
return p1__50829_SHARP_.charCodeAt((0));
}),s)));
});
solsort.toolbox.net.str__GT_buf = (function solsort$toolbox$net$str__GT_buf(s){
return solsort.toolbox.net.utf8_str__GT_buf.call(null,solsort.toolbox.net.utf16__GT_utf8.call(null,s));
});
solsort.toolbox.net.browser_crypto = cljs.core.atom.call(null,false);
solsort.toolbox.net._LT_sha256 = (function solsort$toolbox$net$_LT_sha256(buffer){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_50914){
var state_val_50915 = (state_50914[(1)]);
if((state_val_50915 === (7))){
var inst_50897 = (state_50914[(7)]);
var inst_50896 = (state_50914[(2)]);
var inst_50897__$1 = (inst_50896["subtle"]);
var state_50914__$1 = (function (){var statearr_50916 = state_50914;
(statearr_50916[(7)] = inst_50897__$1);

return statearr_50916;
})();
if(cljs.core.truth_(inst_50897__$1)){
var statearr_50917_50942 = state_50914__$1;
(statearr_50917_50942[(1)] = (11));

} else {
var statearr_50918_50943 = state_50914__$1;
(statearr_50918_50943[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (1))){
var inst_50886 = cljs.core.deref.call(null,solsort.toolbox.net.browser_crypto);
var state_50914__$1 = state_50914;
if(cljs.core.truth_(inst_50886)){
var statearr_50919_50944 = state_50914__$1;
(statearr_50919_50944[(1)] = (2));

} else {
var statearr_50920_50945 = state_50914__$1;
(statearr_50920_50945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (4))){
var inst_50907 = (state_50914[(2)]);
var inst_50908 = cljs.core.deref.call(null,solsort.toolbox.net.browser_crypto);
var inst_50909 = inst_50908.digest("SHA-256",buffer);
var inst_50910 = solsort.toolbox.misc._LT_p.call(null,inst_50909);
var state_50914__$1 = (function (){var statearr_50921 = state_50914;
(statearr_50921[(8)] = inst_50907);

return statearr_50921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50914__$1,(15),inst_50910);
} else {
if((state_val_50915 === (15))){
var inst_50912 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50914__$1,inst_50912);
} else {
if((state_val_50915 === (13))){
var inst_50904 = (state_50914[(2)]);
var inst_50905 = cljs.core.reset_BANG_.call(null,solsort.toolbox.net.browser_crypto,inst_50904);
var state_50914__$1 = state_50914;
var statearr_50922_50946 = state_50914__$1;
(statearr_50922_50946[(2)] = inst_50905);

(statearr_50922_50946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (6))){
var state_50914__$1 = state_50914;
if(cljs.core.truth_(window.msCrypto)){
var statearr_50923_50947 = state_50914__$1;
(statearr_50923_50947[(1)] = (8));

} else {
var statearr_50924_50948 = state_50914__$1;
(statearr_50924_50948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (3))){
var state_50914__$1 = state_50914;
if(cljs.core.truth_(window.crypto)){
var statearr_50925_50949 = state_50914__$1;
(statearr_50925_50949[(1)] = (5));

} else {
var statearr_50926_50950 = state_50914__$1;
(statearr_50926_50950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (12))){
var inst_50900 = solsort.toolbox.net._LT_load_js.call(null,"https://solsort.com/js/polycrypt.js");
var state_50914__$1 = state_50914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50914__$1,(14),inst_50900);
} else {
if((state_val_50915 === (2))){
var state_50914__$1 = state_50914;
var statearr_50927_50951 = state_50914__$1;
(statearr_50927_50951[(2)] = null);

(statearr_50927_50951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (11))){
var inst_50897 = (state_50914[(7)]);
var state_50914__$1 = state_50914;
var statearr_50928_50952 = state_50914__$1;
(statearr_50928_50952[(2)] = inst_50897);

(statearr_50928_50952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (9))){
var state_50914__$1 = state_50914;
var statearr_50929_50953 = state_50914__$1;
(statearr_50929_50953[(2)] = {});

(statearr_50929_50953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (5))){
var state_50914__$1 = state_50914;
var statearr_50930_50954 = state_50914__$1;
(statearr_50930_50954[(2)] = window.crypto);

(statearr_50930_50954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (14))){
var inst_50902 = (state_50914[(2)]);
var state_50914__$1 = (function (){var statearr_50931 = state_50914;
(statearr_50931[(9)] = inst_50902);

return statearr_50931;
})();
var statearr_50932_50955 = state_50914__$1;
(statearr_50932_50955[(2)] = polycrypt);

(statearr_50932_50955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (10))){
var inst_50894 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
var statearr_50933_50956 = state_50914__$1;
(statearr_50933_50956[(2)] = inst_50894);

(statearr_50933_50956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (8))){
var state_50914__$1 = state_50914;
var statearr_50934_50957 = state_50914__$1;
(statearr_50934_50957[(2)] = window.msCrypto);

(statearr_50934_50957[(1)] = (10));


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
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__ = null;
var solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____0 = (function (){
var statearr_50938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50938[(0)] = solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__);

(statearr_50938[(1)] = (1));

return statearr_50938;
});
var solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____1 = (function (state_50914){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_50914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e50939){if((e50939 instanceof Object)){
var ex__46334__auto__ = e50939;
var statearr_50940_50958 = state_50914;
(statearr_50940_50958[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50959 = state_50914;
state_50914 = G__50959;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__ = function(state_50914){
switch(arguments.length){
case 0:
return solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____1.call(this,state_50914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____0;
solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto____1;
return solsort$toolbox$net$_LT_sha256_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_50941 = f__46443__auto__.call(null);
(statearr_50941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_50941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
solsort.toolbox.net._LT_sha256_str = (function solsort$toolbox$net$_LT_sha256_str(s){
var c__46442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46442__auto__){
return (function (){
var f__46443__auto__ = (function (){var switch__46330__auto__ = ((function (c__46442__auto__){
return (function (state_50983){
var state_val_50984 = (state_50983[(1)]);
if((state_val_50984 === (1))){
var inst_50976 = solsort.toolbox.net.str__GT_buf.call(null,s);
var inst_50977 = solsort.toolbox.net._LT_sha256.call(null,inst_50976);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50983__$1,(2),inst_50977);
} else {
if((state_val_50984 === (2))){
var inst_50979 = (state_50983[(2)]);
var inst_50980 = solsort.toolbox.net.buf__GT_utf8_str.call(null,inst_50979);
var inst_50981 = btoa(inst_50980);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50983__$1,inst_50981);
} else {
return null;
}
}
});})(c__46442__auto__))
;
return ((function (switch__46330__auto__,c__46442__auto__){
return (function() {
var solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__ = null;
var solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____0 = (function (){
var statearr_50988 = [null,null,null,null,null,null,null];
(statearr_50988[(0)] = solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__);

(statearr_50988[(1)] = (1));

return statearr_50988;
});
var solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____1 = (function (state_50983){
while(true){
var ret_value__46332__auto__ = (function (){try{while(true){
var result__46333__auto__ = switch__46330__auto__.call(null,state_50983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46333__auto__;
}
break;
}
}catch (e50989){if((e50989 instanceof Object)){
var ex__46334__auto__ = e50989;
var statearr_50990_50992 = state_50983;
(statearr_50990_50992[(5)] = ex__46334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50993 = state_50983;
state_50983 = G__50993;
continue;
} else {
return ret_value__46332__auto__;
}
break;
}
});
solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__ = function(state_50983){
switch(arguments.length){
case 0:
return solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____0.call(this);
case 1:
return solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____1.call(this,state_50983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$0 = solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____0;
solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__.cljs$core$IFn$_invoke$arity$1 = solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto____1;
return solsort$toolbox$net$_LT_sha256_str_$_state_machine__46331__auto__;
})()
;})(switch__46330__auto__,c__46442__auto__))
})();
var state__46444__auto__ = (function (){var statearr_50991 = f__46443__auto__.call(null);
(statearr_50991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46442__auto__);

return statearr_50991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46444__auto__);
});})(c__46442__auto__))
);

return c__46442__auto__;
});
solsort.toolbox.net._LT_ajax = (function solsort$toolbox$net$_LT_ajax(var_args){
var args__41769__auto__ = [];
var len__41762__auto___51001 = arguments.length;
var i__41763__auto___51002 = (0);
while(true){
if((i__41763__auto___51002 < len__41762__auto___51001)){
args__41769__auto__.push((arguments[i__41763__auto___51002]));

var G__51003 = (i__41763__auto___51002 + (1));
i__41763__auto___51002 = G__51003;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((1) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((1)),(0),null)):null);
return solsort.toolbox.net._LT_ajax.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41770__auto__);
});

solsort.toolbox.net._LT_ajax.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50996){
var map__50997 = p__50996;
var map__50997__$1 = ((((!((map__50997 == null)))?((((map__50997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50997):map__50997);
var method = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var data = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"data","data",-232669377),null);
var headers = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),{});
var timeout = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var credentials = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),true);
var result = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"result","result",1415092211),"js->clj");
var c = cljs.core.async.chan.call(null);
var data_is_json = !(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,window.ArrayBuffer,window.ArrayBufferView,window.Blob], null),cljs.core.type.call(null,data)));
var data__$1 = ((data_is_json)?JSON.stringify(cljs.core.clj__GT_js.call(null,data)):data);
if(data_is_json){
(headers["Content-Type"] = "application/json");
} else {
}

goog.net.XhrIo.send(url,((function (c,data_is_json,data__$1,map__50997,map__50997__$1,method,data,headers,timeout,credentials,result){
return (function (o){
try{var res = o.target.getResponseText();
var res__$1 = (function (){var G__51000 = cljs.core.name.call(null,result);
switch (G__51000) {
case "text":
return res;

break;
case "json":
return JSON.parse(res);

break;
case "js->clj":
return cljs.core.js__GT_clj.call(null,JSON.parse(res));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.name.call(null,result))].join('')));

}
})();
return cljs.core.async.put_BANG_.call(null,c,res__$1);
}catch (e50999){var e = e50999;
return cljs.core.async.put_BANG_.call(null,c,solsort.toolbox.misc.async_err.call(null,e));
}});})(c,data_is_json,data__$1,map__50997,map__50997__$1,method,data,headers,timeout,credentials,result))
,method,data__$1,cljs.core.clj__GT_js.call(null,headers),timeout,credentials);

return c;
});

solsort.toolbox.net._LT_ajax.cljs$lang$maxFixedArity = (1);

solsort.toolbox.net._LT_ajax.cljs$lang$applyTo = (function (seq50994){
var G__50995 = cljs.core.first.call(null,seq50994);
var seq50994__$1 = cljs.core.next.call(null,seq50994);
return solsort.toolbox.net._LT_ajax.cljs$core$IFn$_invoke$arity$variadic(G__50995,seq50994__$1);
});

//# sourceMappingURL=net.js.map?rel=1482388911196