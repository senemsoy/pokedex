(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/pokeball.b9ea9d22.png"},17:function(e,a,t){e.exports=t(42)},22:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(13),c=t.n(n),o=(t(22),t(2)),r=t.n(o),i=t(14),m=t(3),d=t(15),p=t.n(d),b=(t(41),t(16)),u=t.n(b),k=function(){var e=Math.floor(893*Math.random())+1,a=Object(l.useState)(e),t=Object(m.a)(a,2),n=t[0],c=t[1],o=Object(l.useState)([]),d=Object(m.a)(o,2),b=d[0],k=d[1],v=function(){var e=Object(i.a)(r.a.mark((function e(){var a,t,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,t="https://pokeapi.co/api/v2/pokemon/".concat(n),e.next=5,p.a.get(t);case 5:l=e.sent,a.push(l.data),k(a),console.log(l),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){v()}),[]);var E=function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-background"},s.a.createElement("img",{src:u.a,className:"logo"}),s.a.createElement("h1",null,"Pokedex")))},f=function(e){return"calc(65%*".concat(.01*e,")")},N=function(e){return{normal:"#ffc1b0",fighting:"#f23d65",flying:"#0caaed",poison:"#867bff",ground:"#bb7171",rock:"#cfcbf5",bug:"#88db88",ghost:"#dedede",steel:"#76afb5",fire:"#f06c6c",water:"#72d6ce",grass:"#a1d998",electric:"#ffe585",psychic:"#82acff",ice:"#b0e7ff",dragon:"#ffa258",dark:"#b578d6",fairy:"#bea7db",unknown:"#2c8fa8",shadow:"#515a73"}[e]},h=function(e){return 1===e.types.length?N(e.types[0].type.name):"linear-gradient(to right, ".concat(N(e.types[0].type.name),", ").concat(N(e.types[1].type.name),")")};return s.a.createElement("div",{className:"App"},s.a.createElement(E,null),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v()}},s.a.createElement("label",null,s.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value.toLowerCase())},placeholder:"Search for a Pokemon!"}))),b.map((function(e){return s.a.createElement("div",{className:"container ",style:{background:h(e)}},s.a.createElement("div",{className:"pokeName"},s.a.createElement("h1",null,e.name),s.a.createElement("img",{src:e.sprites.front_default})),s.a.createElement("div",{className:"pokeTable"},s.a.createElement("div",{className:"pokeTableBody"},s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Height"),s.a.createElement("div",{className:"pokeTableCell"}," ",Math.round(3.9*e.height),'"')),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Weight"),s.a.createElement("div",{className:"pokeTableCell pokeWeight"}," ",Math.round(e.weight/4.3)," lbs")),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Type"),s.a.createElement("div",{className:"pokeTableCell"},e.types&&e.types.map((function(e){return e.type.name})).join(", "))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Abilities"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("ol",null,e.abilities&&e.abilities.map((function(e){return s.a.createElement("li",{key:e.ability.name},e.ability.name)}))))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Hp"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[5].base_stat),background:h(e)}},e.stats[5].base_stat))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Attack"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[4].base_stat),background:h(e)}},e.stats[4].base_stat))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Defense"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[3].base_stat),background:h(e)}},e.stats[3].base_stat))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Speed"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[0].base_stat),background:h(e)}},e.stats[0].base_stat))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Special Attack"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[2].base_stat),background:h(e)}},e.stats[2].base_stat))),s.a.createElement("div",{className:"pokeTableRow"},s.a.createElement("div",{className:"pokeTableCell"},"Special Defense"),s.a.createElement("div",{className:"pokeTableCell"},s.a.createElement("div",{className:"pokeStat-bar",style:{width:f(e.stats[1].base_stat),background:h(e)}},e.stats[1].base_stat))))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.513d2a7e.chunk.js.map