(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),c=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(4),o=n(5),l=n(7),u=n(6),g=n(8),m=n(1);var v=function(e){return r.a.createElement("div",{className:"input-section"},r.a.createElement("h1",{className:"description-text"},"The",r.a.createElement("br",null),r.a.createElement("span",{className:"almighty-text"},"Almighty"),r.a.createElement("br",null),"String Reverser"),r.a.createElement("input",{className:"text-box",placeholder:"(Type your string here!)",type:"text",onChange:e.getString}))};var h=function(e){return r.a.createElement("div",{className:"results-section"},r.a.createElement("p",{className:"results-text"},e.reversedString))},d=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={givenString:""},e.getString=e.getString.bind(Object(m.a)(Object(m.a)(e))),e}return Object(g.a)(t,e),Object(o.a)(t,[{key:"getString",value:function(e){this.setState({givenString:e.target.value})}},{key:"reverseString",value:function(e){return e.split("").reverse().join("")}},{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement(v,{getString:this.getString}),r.a.createElement(h,{reversedString:this.reverseString(this.state.givenString)}))}}]),t}(r.a.Component);n(15);var p=function(){return r.a.createElement("div",{className:"app-section"},r.a.createElement(d,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8b267ce2.chunk.js.map