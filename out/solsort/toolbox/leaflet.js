// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.leaflet');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('solsort.toolbox.appdb');
goog.require('solsort.toolbox.misc');
goog.require('solsort.util');
solsort.toolbox.leaflet.cdnjs_img = (function solsort$toolbox$leaflet$cdnjs_img(file){
return [cljs.core.str("https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/"),cljs.core.str(file)].join('');
});
if(typeof solsort.toolbox.leaflet.default_marker_icon !== 'undefined'){
} else {
solsort.toolbox.leaflet.default_marker_icon = L.icon(cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.Keyword(null,"shadowAnchor","shadowAnchor",643451688),new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.Keyword(null,"shadowSize","shadowSize",-1015046863),new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.Keyword(null,"shadowUrl","shadowUrl",1986496437),new cljs.core.Keyword(null,"iconRetinaUrl","iconRetinaUrl",932366134),new cljs.core.Keyword(null,"shadowRetinaUrl","shadowRetinaUrl",-2143730376)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(38)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(42)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(41)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(45)], null),solsort.toolbox.leaflet.cdnjs_img.call(null,"marker-icon.png"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-76)], null),solsort.toolbox.leaflet.cdnjs_img.call(null,"marker-shadow.png"),solsort.toolbox.leaflet.cdnjs_img.call(null,"marker-icon-2x.png"),solsort.toolbox.leaflet.cdnjs_img.call(null,"marker-shadow.png")])));
}
solsort.toolbox.leaflet.geo__GT_vec = (function solsort$toolbox$leaflet$geo__GT_vec(o){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o.lat,o.lng], null);
});
solsort.toolbox.leaflet.vec__GT_geo = (function solsort$toolbox$leaflet$vec__GT_geo(o){
return {"lat": cljs.core.first.call(null,o), "lng": cljs.core.second.call(null,o)};
});
solsort.toolbox.leaflet.openstreetmap = (function solsort$toolbox$leaflet$openstreetmap(var_args){
var args__41769__auto__ = [];
var len__41762__auto___55454 = arguments.length;
var i__41763__auto___55455 = (0);
while(true){
if((i__41763__auto___55455 < len__41762__auto___55454)){
args__41769__auto__.push((arguments[i__41763__auto___55455]));

var G__55456 = (i__41763__auto___55455 + (1));
i__41763__auto___55455 = G__55456;
continue;
} else {
}
break;
}

var argseq__41770__auto__ = ((((1) < args__41769__auto__.length))?(new cljs.core.IndexedSeq(args__41769__auto__.slice((1)),(0),null)):null);
return solsort.toolbox.leaflet.openstreetmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41770__auto__);
});

solsort.toolbox.leaflet.openstreetmap.cljs$core$IFn$_invoke$arity$variadic = (function (o,args){
var id = (function (){var or__40692__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
var or__40692__auto____$1 = (function (){var and__40680__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(and__40680__auto__)){
return cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(o));
} else {
return and__40680__auto__;
}
})();
if(cljs.core.truth_(or__40692__auto____$1)){
return or__40692__auto____$1;
} else {
return [cljs.core.str("leaflet"),cljs.core.str([cljs.core.str(Math.random())].join('').slice((2)))].join('');
}
}
})();
var path = (function (){var or__40692__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solsort-ui","solsort-ui",1647653813),id], null);
}
})();
var o__$1 = cljs.core.into.call(null,solsort.toolbox.appdb.db.call(null,path,cljs.core.PersistentArrayMap.EMPTY),o);
var o__$2 = cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var or__40692__auto__ = new cljs.core.Keyword(null,"pos0","pos0",-325665366).cljs$core$IFn$_invoke$arity$1(o__$1);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [55.67,12.57], null);
}
})(),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var or__40692__auto__ = new cljs.core.Keyword(null,"zoom0","zoom0",-1614149457).cljs$core$IFn$_invoke$arity$1(o__$1);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return (10);
}
})(),new cljs.core.Keyword(null,"tile-url","tile-url",1060802431),"http://{s}.tile.osm.org/{z}/{x}/{y}.png",new cljs.core.Keyword(null,"attribution","attribution",1937239286)," OpenStreetMap | <a href=https://solsort.com target=_blank>solsort.com</a>"], null),o__$1);
var o__$3 = cljs.core.into.call(null,o__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"db","db",993250759),path], null));
var leaflet = cljs.core.atom.call(null,null);
var marker_objs = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var prev_markers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
solsort.toolbox.appdb.db_BANG_.call(null,path,o__$3);

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),cljs.core.prn_str.call(null,path),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function() { 
var G__55457__delegate = function (o__$4,args__$1){
var p_55458 = solsort.toolbox.appdb.db.call(null,path);
var p_55459__$1 = cljs.core.into.call(null,p_55458,o__$4);
var p_55460__$2 = cljs.core.assoc.call(null,p_55459__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1);
if(cljs.core._EQ_.call(null,p_55460__$2,solsort.toolbox.appdb.db.call(null,path))){
} else {
solsort.toolbox.appdb.db_BANG_.call(null,path,p_55460__$2);
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(o__$4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(o__$4)], null),"OpenStreetMap ",id], null);
};
var G__55457 = function (o__$4,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__55461__i = 0, G__55461__a = new Array(arguments.length -  1);
while (G__55461__i < G__55461__a.length) {G__55461__a[G__55461__i] = arguments[G__55461__i + 1]; ++G__55461__i;}
  args__$1 = new cljs.core.IndexedSeq(G__55461__a,0);
} 
return G__55457__delegate.call(this,o__$4,args__$1);};
G__55457.cljs$lang$maxFixedArity = 1;
G__55457.cljs$lang$applyTo = (function (arglist__55462){
var o__$4 = cljs.core.first(arglist__55462);
var args__$1 = cljs.core.rest(arglist__55462);
return G__55457__delegate(o__$4,args__$1);
});
G__55457.cljs$core$IFn$_invoke$arity$variadic = G__55457__delegate;
return G__55457;
})()
;})(id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (){
var o_55463__$4 = solsort.toolbox.appdb.db.call(null,path);
cljs.core.reset_BANG_.call(null,leaflet,L.map(id));

cljs.core.deref.call(null,leaflet).setView(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(o_55463__$4)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(o_55463__$4));

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(o_55463__$4))){
cljs.core.deref.call(null,leaflet).on("click",((function (o_55463__$4,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (p1__55444_SHARP_){
return solsort.toolbox.appdb.db.call(null,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-click","on-click",1632826543))).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var ll = (p1__55444_SHARP_["latlng"]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ll["lat"]),(ll["lng"])], null);
})()], null));
});})(o_55463__$4,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
);
} else {
}

L.tileLayer(new cljs.core.Keyword(null,"tile-url","tile-url",1060802431).cljs$core$IFn$_invoke$arity$1(o_55463__$4),{"attribution": new cljs.core.Keyword(null,"attribution","attribution",1937239286).cljs$core$IFn$_invoke$arity$1(o_55463__$4)}).addTo(cljs.core.deref.call(null,leaflet));

cljs.core.deref.call(null,leaflet).attributionControl.setPrefix("Leaflet");

cljs.core.deref.call(null,leaflet).on("moveend",((function (o_55463__$4,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (p1__55445_SHARP_){
var pos = p1__55445_SHARP_.target.getCenter();
var zoom = p1__55445_SHARP_.target.getZoom();
return solsort.toolbox.appdb.db_BANG_.call(null,path,cljs.core.into.call(null,solsort.toolbox.appdb.db.call(null,path),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.lat,pos.lng], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom], null)));
});})(o_55463__$4,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
);

return console.log("did-mount",document.getElementById(id));
});})(id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (component){
var o__$4 = solsort.toolbox.appdb.db.call(null,path);
var map_pos = solsort.toolbox.leaflet.geo__GT_vec.call(null,cljs.core.deref.call(null,leaflet).getCenter());
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(o__$4);
var markers = cljs.core.filter.call(null,((function (o__$4,map_pos,pos,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (p1__55446_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.first.call(null,p1__55446_SHARP_));
});})(o__$4,map_pos,pos,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(o__$4));
var markers__$1 = cljs.core.map.call(null,((function (o__$4,map_pos,pos,markers,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (p1__55447_SHARP_){
return cljs.core.assoc.call(null,cljs.core.second.call(null,p1__55447_SHARP_),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.drop.call(null,(2),p1__55447_SHARP_));
});})(o__$4,map_pos,pos,markers,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,markers);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,leaflet).getZoom(),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(o__$4))) && (cljs.core._EQ_.call(null,pos,map_pos))){
} else {
cljs.core.deref.call(null,leaflet).setView(cljs.core.clj__GT_js.call(null,pos),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(o__$4));
}

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,prev_markers),markers__$1)){
return null;
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,prev_markers)) < cljs.core.count.call(null,markers__$1))){
cljs.core.doall.call(null,(function (){var iter__41472__auto__ = ((function (o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function solsort$toolbox$leaflet$iter__55450(s__55451){
return (new cljs.core.LazySeq(null,((function (o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (){
var s__55451__$1 = s__55451;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55451__$1);
if(temp__4657__auto__){
var s__55451__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55451__$2)){
var c__41470__auto__ = cljs.core.chunk_first.call(null,s__55451__$2);
var size__41471__auto__ = cljs.core.count.call(null,c__41470__auto__);
var b__55453 = cljs.core.chunk_buffer.call(null,size__41471__auto__);
if((function (){var i__55452 = (0);
while(true){
if((i__55452 < size__41471__auto__)){
var m = cljs.core._nth.call(null,c__41470__auto__,i__55452);
cljs.core.chunk_append.call(null,b__55453,(function (){var marker = L.marker(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(m)),{"icon": (function (){var or__40692__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return solsort.toolbox.leaflet.default_marker_icon;
}
})()});
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(m))){
marker.on("click",new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(m));
} else {
}

cljs.core.swap_BANG_.call(null,marker_objs,cljs.core.conj,marker);

return marker.addTo(cljs.core.deref.call(null,leaflet));
})());

var G__55464 = (i__55452 + (1));
i__55452 = G__55464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55453),solsort$toolbox$leaflet$iter__55450.call(null,cljs.core.chunk_rest.call(null,s__55451__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55453),null);
}
} else {
var m = cljs.core.first.call(null,s__55451__$2);
return cljs.core.cons.call(null,(function (){var marker = L.marker(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(m)),{"icon": (function (){var or__40692__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40692__auto__)){
return or__40692__auto__;
} else {
return solsort.toolbox.leaflet.default_marker_icon;
}
})()});
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(m))){
marker.on("click",new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(m));
} else {
}

cljs.core.swap_BANG_.call(null,marker_objs,cljs.core.conj,marker);

return marker.addTo(cljs.core.deref.call(null,leaflet));
})(),solsort$toolbox$leaflet$iter__55450.call(null,cljs.core.rest.call(null,s__55451__$2)));
}
} else {
return null;
}
break;
}
});})(o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,null,null));
});})(o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
;
return iter__41472__auto__.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,prev_markers)),markers__$1));
})());
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,((function (o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (prev,current,o__$5){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(current))){
return null;
} else {
o__$5.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(current)));

return o__$5.update();
}
});})(o__$4,map_pos,pos,markers,markers__$1,id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,cljs.core.deref.call(null,prev_markers),markers__$1,cljs.core.deref.call(null,marker_objs)));

(window["leaflet"] = cljs.core.deref.call(null,leaflet));

return cljs.core.reset_BANG_.call(null,prev_markers,markers__$1);
}
});})(id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers){
return (function (){
return console.log("will-unmount");
});})(id,path,o__$1,o__$2,o__$3,leaflet,marker_objs,prev_markers))
], null));
});

solsort.toolbox.leaflet.openstreetmap.cljs$lang$maxFixedArity = (1);

solsort.toolbox.leaflet.openstreetmap.cljs$lang$applyTo = (function (seq55448){
var G__55449 = cljs.core.first.call(null,seq55448);
var seq55448__$1 = cljs.core.next.call(null,seq55448);
return solsort.toolbox.leaflet.openstreetmap.cljs$core$IFn$_invoke$arity$variadic(G__55449,seq55448__$1);
});

//# sourceMappingURL=leaflet.js.map?rel=1482388930311