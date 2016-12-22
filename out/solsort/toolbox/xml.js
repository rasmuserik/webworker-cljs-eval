// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.xml');
goog.require('cljs.core');
goog.require('solsort.toolbox.misc');
goog.require('clojure.string');
solsort.toolbox.xml.name__GT_kw = (function solsort$toolbox$xml$name__GT_kw(o){
return cljs.core.keyword.call(null,[cljs.core.str(o.nodeName)].join(''));
});
solsort.toolbox.xml.dom__GT_clj = (function solsort$toolbox$xml$dom__GT_clj(dom){
var G__49537 = dom.nodeType;
if(cljs.core._EQ_.call(null,dom.DOCUMENT_NODE,G__49537)){
var tag = solsort.toolbox.xml.name__GT_kw.call(null,dom);
var children = cljs.core.map.call(null,solsort$toolbox$xml$dom__GT_clj,solsort.toolbox.misc.js_seq.call(null,dom.children));
var children__$1 = ((cljs.core.empty_QMARK_.call(null,children))?((clojure.string.blank_QMARK_.call(null,dom.textContent))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(dom.textContent)].join('')], null)):children);
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (tag,children,children__$1,G__49537){
return (function (o){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [solsort.toolbox.xml.name__GT_kw.call(null,o),o.textContent], null);
});})(tag,children,children__$1,G__49537))
),solsort.toolbox.misc.js_seq.call(null,(function (){var or__40692__auto__ = dom.attributes;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"children","children",-940561982),children__$1], null);
} else {
if(cljs.core._EQ_.call(null,dom.ELEMENT_NODE,G__49537)){
var tag = solsort.toolbox.xml.name__GT_kw.call(null,dom);
var children = cljs.core.map.call(null,solsort$toolbox$xml$dom__GT_clj,solsort.toolbox.misc.js_seq.call(null,dom.children));
var children__$1 = ((cljs.core.empty_QMARK_.call(null,children))?((clojure.string.blank_QMARK_.call(null,dom.textContent))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(dom.textContent)].join('')], null)):children);
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (tag,children,children__$1,G__49537){
return (function (o){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [solsort.toolbox.xml.name__GT_kw.call(null,o),o.textContent], null);
});})(tag,children,children__$1,G__49537))
),solsort.toolbox.misc.js_seq.call(null,(function (){var or__40692__auto__ = dom.attributes;
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"children","children",-940561982),children__$1], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,".-TEXT_NODE",".-TEXT_NODE",1175237470,null),G__49537)){
return [cljs.core.str(dom.textContent)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null),G__49537)){
return [cljs.core.str(dom.textContent)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dom.nodeType)].join('')));

}
}
}
}
});
solsort.toolbox.xml.xml_find = (function solsort$toolbox$xml$xml_find(p,xml){
if(cljs.core.truth_(p.call(null,xml))){
return xml;
} else {
return cljs.core.some.call(null,(function (p1__49538_SHARP_){
return solsort$toolbox$xml$xml_find.call(null,p,p1__49538_SHARP_);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(xml));
}
});
solsort.toolbox.xml.xml_find_child = (function solsort$toolbox$xml$xml_find_child(p,xml){
return cljs.core.some.call(null,(function (p1__49539_SHARP_){
return solsort.toolbox.xml.xml_find.call(null,p,p1__49539_SHARP_);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(xml));
});
solsort.toolbox.xml.xml__GT_sxml = (function solsort$toolbox$xml$xml__GT_sxml(xml){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xml))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xml),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(xml),cljs.core.map.call(null,solsort$toolbox$xml$xml__GT_sxml,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(xml))], null);
} else {
return xml;
}
});

//# sourceMappingURL=xml.js.map?rel=1482388853105