// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.source_map.base64_vlq');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.source_map.base64');
goog.require('goog.string.StringBuffer');
cljs.source_map.base64_vlq.vlq_base_shift = (5);
cljs.source_map.base64_vlq.vlq_base = ((1) << cljs.source_map.base64_vlq.vlq_base_shift);
cljs.source_map.base64_vlq.vlq_base_mask = (cljs.source_map.base64_vlq.vlq_base - (1));
cljs.source_map.base64_vlq.vlq_continuation_bit = cljs.source_map.base64_vlq.vlq_base;
cljs.source_map.base64_vlq.to_vlq_signed = (function cljs$source_map$base64_vlq$to_vlq_signed(v){
if((v < (0))){
return (((- v) << (1)) + (1));
} else {
return ((v << (1)) + (0));
}
});
cljs.source_map.base64_vlq.from_vlq_signed = (function cljs$source_map$base64_vlq$from_vlq_signed(v){
var neg_QMARK_ = cljs.core._EQ_.call(null,(v & (1)),(1));
var shifted = (v >> (1));
if(neg_QMARK_){
return (- shifted);
} else {
return shifted;
}
});
cljs.source_map.base64_vlq.encode_val = (function cljs$source_map$base64_vlq$encode_val(n){
var sb = (new goog.string.StringBuffer());
var vlq = cljs.source_map.base64_vlq.to_vlq_signed.call(null,n);
var digit_41867 = (vlq & cljs.source_map.base64_vlq.vlq_base_mask);
var vlq_41868__$1 = (vlq >>> cljs.source_map.base64_vlq.vlq_base_shift);
while(true){
if((vlq_41868__$1 > (0))){
var digit_41869__$1 = (digit_41867 | cljs.source_map.base64_vlq.vlq_continuation_bit);
sb.append(cljs.source_map.base64.encode.call(null,digit_41869__$1));

var G__41870 = (vlq_41868__$1 & cljs.source_map.base64_vlq.vlq_base_mask);
var G__41871 = (vlq_41868__$1 >>> cljs.source_map.base64_vlq.vlq_base_shift);
digit_41867 = G__41870;
vlq_41868__$1 = G__41871;
continue;
} else {
sb.append(cljs.source_map.base64.encode.call(null,digit_41867));
}
break;
}

return [cljs.core.str(sb)].join('');
});
cljs.source_map.base64_vlq.encode = (function cljs$source_map$base64_vlq$encode(v){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.source_map.base64_vlq.encode_val,v));
});
cljs.source_map.base64_vlq.decode = (function cljs$source_map$base64_vlq$decode(s){
var l = s.length;
var i = (0);
var result = (0);
var shift = (0);
while(true){
if((i >= l)){
throw (new Error("Expected more digits in base 64 VLQ value."));
} else {
}

var digit = cljs.source_map.base64.decode.call(null,s.charAt(i));
var i__$1 = (i + (1));
var continuation_QMARK_ = ((digit & cljs.source_map.base64_vlq.vlq_continuation_bit) > (0));
var digit__$1 = (digit & cljs.source_map.base64_vlq.vlq_base_mask);
var result__$1 = (result + (digit__$1 << shift));
var shift__$1 = (shift + cljs.source_map.base64_vlq.vlq_base_shift);
if(continuation_QMARK_){
var G__41872 = i__$1;
var G__41873 = result__$1;
var G__41874 = shift__$1;
i = G__41872;
result = G__41873;
shift = G__41874;
continue;
} else {
return (new cljs.core.LazySeq(null,((function (i,result,shift,i__$1,continuation_QMARK_,digit__$1,result__$1,shift__$1,digit,l){
return (function (){
return cljs.core.cons.call(null,cljs.source_map.base64_vlq.from_vlq_signed.call(null,result__$1),(function (){var s__$1 = s.substring(i__$1);
if(clojure.string.blank_QMARK_.call(null,s__$1)){
return null;
} else {
return cljs$source_map$base64_vlq$decode.call(null,s__$1);
}
})());
});})(i,result,shift,i__$1,continuation_QMARK_,digit__$1,result__$1,shift__$1,digit,l))
,null,null));
}
break;
}
});

//# sourceMappingURL=base64_vlq.js.map?rel=1482388837860