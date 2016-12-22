// Compiled by ClojureScript 1.8.51 {}
goog.provide('solsort.toolbox.setup');
goog.require('cljs.core');
goog.require('devtools.core');
if(cljs.core.truth_(window.applicationCache)){
(window.applicationCache["onupdateready"] = (function (){
return location.reload();
}));
} else {
}
if(typeof solsort.toolbox.setup.dev_tools !== 'undefined'){
} else {
solsort.toolbox.setup.dev_tools = devtools.core.install_BANG_.call(null);
}
window.addEventListener("error",(function (err){
return console.log("Error",err);
}));

//# sourceMappingURL=setup.js.map?rel=1482388922264