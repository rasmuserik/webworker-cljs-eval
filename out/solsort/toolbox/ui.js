// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.ui');
goog.require('cljs.core');
goog.require('solsort.toolbox.misc');
goog.require('solsort.toolbox.appdb');
goog.require('reagent.core');
goog.require('cljs.reader');
solsort.toolbox.ui.html_data = (function solsort$toolbox$ui$html_data(elem){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49566){
var vec__49567 = p__49566;
var k = cljs.core.nth.call(null,vec__49567,(0),null);
var w = cljs.core.nth.call(null,vec__49567,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k.slice((5)),w], null);
}),cljs.core.filter.call(null,(function (p__49568){
var vec__49569 = p__49568;
var k = cljs.core.nth.call(null,vec__49569,(0),null);
var w = cljs.core.nth.call(null,vec__49569,(1),null);
return solsort.toolbox.misc.starts_with.call(null,k,"data-");
}),cljs.core.map.call(null,(function (attr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr.name,attr.value], null);
}),solsort.toolbox.misc.js_seq.call(null,elem.attributes)))));
});
solsort.toolbox.ui.page_ready = (function solsort$toolbox$ui$page_ready(){
return setTimeout((function (){
return (window["onSolsortReady"]).call(null);
}),(20));
});
solsort.toolbox.ui.render = (function solsort$toolbox$ui$render(o){
if(cljs.core.truth_(document.getElementById("main"))){
} else {
document.body.appendChild((function (){var G__49571 = document.createElement("div");
(G__49571["id"] = "main");

return G__49571;
})());
}

return reagent.core.render_component.call(null,o,document.getElementById("main"));
});
/**
 * simple loading indicator, showing when (appdb/db [:loading])
 */
solsort.toolbox.ui.loading = (function solsort$toolbox$ui$loading(){
var status = solsort.toolbox.appdb.db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
if(cljs.core.truth_(status)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"heigth","heigth",914329217),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"left","left",-399115937)],["48px","100%","white","center","48px",(0),"rgba(0,0,0,0.6)","100%",(100),(0.3 * window.innerHeight),"2px 2px 8px #000000",new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"fixed","fixed",-562004358),(0.7 * window.innerHeight),(0)])], null),((typeof status === 'string')?status:"Loading...")], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});
solsort.toolbox.ui.select = (function solsort$toolbox$ui$select(p__49573){
var map__49584 = p__49573;
var map__49584__$1 = ((((!((map__49584 == null)))?((((map__49584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49584):map__49584);
var db = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"db","db",993250759));
var options = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"options","options",99638489));
var class$ = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"style","style",-496642736));
console.log(new cljs.core.Symbol(null,"select","select",-1506602266,null),style);

var current = solsort.toolbox.appdb.db.call(null,db);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0)], null),style),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prn_str.call(null,current),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (current,map__49584,map__49584__$1,db,options,class$,style){
return (function (p1__49572_SHARP_){
return solsort.toolbox.appdb.db_async_BANG_.call(null,db,cljs.reader.read_string.call(null,p1__49572_SHARP_.target.value));
});})(current,map__49584,map__49584__$1,db,options,class$,style))
], null)], null),(function (){var iter__41472__auto__ = ((function (current,map__49584,map__49584__$1,db,options,class$,style){
return (function solsort$toolbox$ui$select_$_iter__49586(s__49587){
return (new cljs.core.LazySeq(null,((function (current,map__49584,map__49584__$1,db,options,class$,style){
return (function (){
var s__49587__$1 = s__49587;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49587__$1);
if(temp__4657__auto__){
var s__49587__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49587__$2)){
var c__41470__auto__ = cljs.core.chunk_first.call(null,s__49587__$2);
var size__41471__auto__ = cljs.core.count.call(null,c__41470__auto__);
var b__49589 = cljs.core.chunk_buffer.call(null,size__41471__auto__);
if((function (){var i__49588 = (0);
while(true){
if((i__49588 < size__41471__auto__)){
var vec__49592 = cljs.core._nth.call(null,c__41470__auto__,i__49588);
var k = cljs.core.nth.call(null,vec__49592,(0),null);
var v = cljs.core.nth.call(null,vec__49592,(1),null);
cljs.core.chunk_append.call(null,b__49589,(function (){var v__$1 = cljs.core.prn_str.call(null,v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0)], null),new cljs.core.Keyword(null,"key","key",-1516042587),v__$1,new cljs.core.Keyword(null,"value","value",305978217),v__$1], null),k], null);
})());

var G__49594 = (i__49588 + (1));
i__49588 = G__49594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49589),solsort$toolbox$ui$select_$_iter__49586.call(null,cljs.core.chunk_rest.call(null,s__49587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49589),null);
}
} else {
var vec__49593 = cljs.core.first.call(null,s__49587__$2);
var k = cljs.core.nth.call(null,vec__49593,(0),null);
var v = cljs.core.nth.call(null,vec__49593,(1),null);
return cljs.core.cons.call(null,(function (){var v__$1 = cljs.core.prn_str.call(null,v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0)], null),new cljs.core.Keyword(null,"key","key",-1516042587),v__$1,new cljs.core.Keyword(null,"value","value",305978217),v__$1], null),k], null);
})(),solsort$toolbox$ui$select_$_iter__49586.call(null,cljs.core.rest.call(null,s__49587__$2)));
}
} else {
return null;
}
break;
}
});})(current,map__49584,map__49584__$1,db,options,class$,style))
,null,null));
});})(current,map__49584,map__49584__$1,db,options,class$,style))
;
return iter__41472__auto__.call(null,options);
})());
});
solsort.toolbox.ui.checkbox = (function solsort$toolbox$ui$checkbox(p__49595){
var map__49598 = p__49595;
var map__49598__$1 = ((((!((map__49598 == null)))?((((map__49598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49598):map__49598);
var db = cljs.core.get.call(null,map__49598__$1,new cljs.core.Keyword(null,"db","db",993250759));
var value = solsort.toolbox.appdb.db.call(null,db);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.checkbox","img.checkbox",-207168103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,map__49598,map__49598__$1,db){
return (function (){
solsort.toolbox.appdb.db_async_BANG_.call(null,db,cljs.core.not.call(null,value));

return null;
});})(value,map__49598,map__49598__$1,db))
,new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(value)?"assets/check.png":"assets/uncheck.png")], null)], null);
});
solsort.toolbox.ui.input = (function solsort$toolbox$ui$input(p__49602){
var map__49606 = p__49602;
var map__49606__$1 = ((((!((map__49606 == null)))?((((map__49606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49606):map__49606);
var params = map__49606__$1;
var options = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"options","options",99638489));
var max_length = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var placeholder = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var db = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"db","db",993250759));
var type = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var size = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var rows = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY);
var cols = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var id = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__49606__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var G__49608 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49608) {
case "select":
return solsort.toolbox.ui.select.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));

break;
case "checkbox":
return solsort.toolbox.ui.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));

break;
case "textarea":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[max_length,cljs.core.prn_str.call(null,db),placeholder,cljs.core.prn_str.call(null,db),solsort.toolbox.appdb.db.call(null,db),size,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),style),rows,cols,id,class$,((function (G__49608,map__49606,map__49606__$1,params,options,max_length,placeholder,db,type,size,rows,style,cols,id,class$){
return (function (p1__49600_SHARP_){
return solsort.toolbox.appdb.db_BANG_.call(null,db,p1__49600_SHARP_.target.value);
});})(G__49608,map__49606,map__49606__$1,params,options,max_length,placeholder,db,type,size,rows,style,cols,id,class$))
])], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[max_length,cljs.core.prn_str.call(null,db),placeholder,cljs.core.prn_str.call(null,db),solsort.toolbox.appdb.db.call(null,db),type,size,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),style),id,class$,((function (G__49608,map__49606,map__49606__$1,params,options,max_length,placeholder,db,type,size,rows,style,cols,id,class$){
return (function (p1__49601_SHARP_){
return solsort.toolbox.appdb.db_BANG_.call(null,db,p1__49601_SHARP_.target.value);
});})(G__49608,map__49606,map__49606__$1,params,options,max_length,placeholder,db,type,size,rows,style,cols,id,class$))
])], null);

}
});
/**
 * used by rot90
 */
solsort.toolbox.ui.fix_height = (function solsort$toolbox$ui$fix_height(o){
var node = reagent.core.dom_node.call(null,o);
var child = ((node["children"])[(0)]);
var width = (child["clientHeight"]);
var height = (child["clientWidth"]);
var style = (node["style"]);
(style["height"] = [cljs.core.str(height),cljs.core.str("px")].join(''));

return (style["width"] = [cljs.core.str(width),cljs.core.str("px")].join(''));
});
/**
 * reagent-component rotating its content 90 degree
 */
solsort.toolbox.ui.rot90 = cljs.core.with_meta.call(null,(function (elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"0% 0%",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90deg)",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], null),elem], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),solsort.toolbox.ui.fix_height,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),solsort.toolbox.ui.fix_height], null));

//# sourceMappingURL=ui.js.map?rel=1482388853278