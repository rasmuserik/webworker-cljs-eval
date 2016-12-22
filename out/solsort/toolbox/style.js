// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.style');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('clojure.string');
solsort.toolbox.style.normalize_css = [cljs.core.str("/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css"),cljs.core.str(" */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size"),cljs.core.str("-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,"),cljs.core.str("header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,"),cljs.core.str("progress,video{display:inline-block;vertical-align:baseline}audio:not(["),cljs.core.str("controls]){display:none;height:0}[hidden],template{display:none}a{"),cljs.core.str("background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border"),cljs.core.str("-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font"),cljs.core.str("-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:"),cljs.core.str("80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:"),cljs.core.str("baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){"),cljs.core.str("overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}"),cljs.core.str("pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-"),cljs.core.str("size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;"),cljs.core.str("margin:0}button{overflow:visible}button,select{text-transform:none}button,"),cljs.core.str("html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-"),cljs.core.str("webkit-appearance:button;cursor:pointer}button[disabled],html input["),cljs.core.str("disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{"),cljs.core.str("border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input"),cljs.core.str("[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-"),cljs.core.str("webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button"),cljs.core.str("{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-"),cljs.core.str("sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,"),cljs.core.str("input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}"),cljs.core.str("fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}"),cljs.core.str("legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold"),cljs.core.str("}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}")].join('');
solsort.toolbox.style.grid = (function solsort$toolbox$style$grid(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Ubuntu",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"400",new cljs.core.Keyword(null,"src","src",-1651076051),"url(//solsort.com/font/ubuntu-latin1.ttf)format(truetype)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".inline-block",".inline-block",688295942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ccc",".ccc",-909578005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".noclear",".noclear",1434906796),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".right",".right",-168396226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".left",".left",470594696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".scontain",".scontain",-367927917),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(960),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".scol",".scol",834363431),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@media (min-width: 600px)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".scol",".scol",834363431),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(12),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(12),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null)], null),cljs.core.map.call(null,(function (p__50812){
var vec__50813 = p__50812;
var id = cljs.core.nth.call(null,vec__50813,(0),null);
var w = cljs.core.nth.call(null,vec__50813,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("@media "),cljs.core.str(w)].join(''),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41472__auto__ = ((function (vec__50813,id,w){
return (function solsort$toolbox$style$grid_$_iter__50814(s__50815){
return (new cljs.core.LazySeq(null,((function (vec__50813,id,w){
return (function (){
var s__50815__$1 = s__50815;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50815__$1);
if(temp__4657__auto__){
var s__50815__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50815__$2)){
var c__41470__auto__ = cljs.core.chunk_first.call(null,s__50815__$2);
var size__41471__auto__ = cljs.core.count.call(null,c__41470__auto__);
var b__50817 = cljs.core.chunk_buffer.call(null,size__41471__auto__);
if((function (){var i__50816 = (0);
while(true){
if((i__50816 < size__41471__auto__)){
var i = cljs.core._nth.call(null,c__41470__auto__,i__50816);
cljs.core.chunk_append.call(null,b__50817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(id),cljs.core.str(i)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((Math.floor((i / .0024)) / (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null));

var G__50818 = (i__50816 + (1));
i__50816 = G__50818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50817),solsort$toolbox$style$grid_$_iter__50814.call(null,cljs.core.chunk_rest.call(null,s__50815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50817),null);
}
} else {
var i = cljs.core.first.call(null,s__50815__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(id),cljs.core.str(i)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((Math.floor((i / .0024)) / (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),solsort$toolbox$style$grid_$_iter__50814.call(null,cljs.core.rest.call(null,s__50815__$2)));
}
} else {
return null;
}
break;
}
});})(vec__50813,id,w))
,null,null));
});})(vec__50813,id,w))
;
return iter__41472__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})())], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".ws","all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".wm","(min-width:480px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".wl","(min-width:840px)"], null)], null)));
});
solsort.toolbox.style.css_name = (function solsort$toolbox$style$css_name(id){
return clojure.string.replace.call(null,cljs.core.name.call(null,id),/[A-Z]/,(function (p1__50819_SHARP_){
return [cljs.core.str("-"),cljs.core.str(p1__50819_SHARP_.toLowerCase())].join('');
}));
});
solsort.toolbox.style.handle_rule = (function solsort$toolbox$style$handle_rule(p__50820){
var vec__50822 = p__50820;
var k = cljs.core.nth.call(null,vec__50822,(0),null);
var v = cljs.core.nth.call(null,vec__50822,(1),null);
if(typeof v === 'number'){
return [cljs.core.str(solsort.toolbox.style.css_name.call(null,k)),cljs.core.str(":"),cljs.core.str(v),cljs.core.str("px;")].join('');
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"",cljs.core.map.call(null,solsort$toolbox$style$handle_rule,cljs.core.seq.call(null,v)))),cljs.core.str("}")].join('');
} else {
return [cljs.core.str(solsort.toolbox.style.css_name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');

}
}
});
solsort.toolbox.style.handle_block = (function solsort$toolbox$style$handle_block(p__50823){
var vec__50825 = p__50823;
var id = cljs.core.nth.call(null,vec__50825,(0),null);
var rules = cljs.core.nth.call(null,vec__50825,(1),null);
return [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"",cljs.core.map.call(null,solsort.toolbox.style.handle_rule,cljs.core.seq.call(null,rules)))),cljs.core.str("}")].join('');
});
solsort.toolbox.style.clj__GT_css = (function solsort$toolbox$style$clj__GT_css(o){
clojure.string.join.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,o)));

return clojure.string.join.call(null,cljs.core.map.call(null,solsort.toolbox.style.handle_block,cljs.core.seq.call(null,o)));
});
solsort.toolbox.style.js__GT_css = (function solsort$toolbox$style$js__GT_css(o){
return solsort.toolbox.style.clj__GT_css.call(null,cljs.core.js__GT_clj.call(null,o));
});
solsort.toolbox.style.load_style_BANG_ = (function solsort$toolbox$style$load_style_BANG_(s,id){
return ((function (){var or__40692__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
var elem = document.createElement("style");
(elem["id"] = id);

document.head.appendChild(elem);

return elem;
}
})()["innerHTML"] = ((typeof s === 'string')?s:solsort.toolbox.style.clj__GT_css.call(null,s)));
});
solsort.toolbox.style.style_tag = (function solsort$toolbox$style$style_tag(o){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["dangerouslySetInnerHTML",{"__html": solsort.toolbox.style.clj__GT_css.call(null,o)}], null)], null);
});

//# sourceMappingURL=style.js.map?rel=1482388910922