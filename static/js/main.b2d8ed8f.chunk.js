(this.webpackJsonpquotegenerator=this.webpackJsonpquotegenerator||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),o=n(4),s=n.n(o),u=n(6),i=n(3),h=n.n(i),l=n(5),p=(n(13),function(){var t=Object(l.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://type.fit/api/quotes");case 3:if(!(e=t.sent).ok){t.next=9;break}return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}());var f=function(){var t=Object(c.useState)({text:"this is the quote",author:"unknown"}),e=Object(u.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)("div",{className:"quote-container",onClick:function(){p().then((function(t){var e=Math.floor(Math.random()*t.length);a({text:t[e].text,author:t[e].author})}))},children:[Object(r.jsx)("q",{className:"text",children:n.text}),Object(r.jsx)("p",{className:"author",children:n.author}),Object(r.jsx)("p",{className:"description",children:"* Click me to show next quote"})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.b2d8ed8f.chunk.js.map