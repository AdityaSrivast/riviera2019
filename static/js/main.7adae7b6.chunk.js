(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a.p+"static/media/pepsi.e223a418.png"},155:function(e,t,a){e.exports=a.p+"static/media/about.ebf5b3ae.png"},159:function(e,t,a){e.exports=a.p+"static/media/rivieralogowhite.dd5e2891.png"},242:function(e,t,a){e.exports=a(452)},247:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/events.78407c67.jpg"},250:function(e,t,a){},310:function(e,t,a){},312:function(e,t,a){},314:function(e,t,a){},412:function(e,t){},414:function(e,t){},430:function(e,t,a){},446:function(e,t,a){},448:function(e,t,a){},450:function(e,t,a){},452:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),i=a.n(r),o=(a(247),a(15)),l=a(16),s=a(18),m=a(17),u=a(19),p=a(454),E=a(455),d=a(453),f=(a(249),a(27)),h=a(48),v=a.n(h),g=a(47),w=a.n(g),b=a(63),O=a.n(b),y=(a(64),a(160),a(65)),j=a.n(y),S=(n.Component,a(21)),x=a.n(S),C=(a(250),a(153)),N=a.n(C),T=a(68),R=a.n(T),I=(n.Component,a(310),n.Component,a(155)),k=a.n(I),A=(a(312),n.Component,a(9)),P=(a(314),a(316),a(318),a(456)),V=a(156),D=a.n(V),M=(n.Component,a(158)),H=a.n(M),W=a(159),_=a.n(W),B=(a(430),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).pad=function(e){return(e<10?"0":"")+e},e.getCountdown=function(){var t,a,n,c=e.pad,r=(new Date).getTime(),i=(e.state.target_date-r)/1e3;t=c(parseInt(i/86400)),i%=86400,a=c(parseInt(i/3600)),i%=3600,n="<span>"+t+"</span><span>"+a+"</span><span>"+c(parseInt(i/60))+"</span><span class='hide-in-phone'>"+c(parseInt(i%60))+"</span>",e.setState({countdown:n})},e.state={countdown:"",target_date:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date("14 February 2019").getTime();this.setState({target_date:t}),this.getCountdown(),setInterval(function(){e.getCountdown()},1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"cs-wrapper"},c.a.createElement("div",{id:"stars"}),c.a.createElement("div",{id:"stars2"}),c.a.createElement("div",{id:"stars3"}),c.a.createElement("div",{className:"rv-text"},c.a.createElement("img",{src:_.a,alt:"Logo"})),c.a.createElement("div",{className:"cs-text-wrapper"},c.a.createElement("div",{className:"cs-text"},c.a.createElement("br",null),c.a.createElement("div",{className:"social-icons"},c.a.createElement("a",{href:"https://www.facebook.com/rivieraVITUniversity/"},c.a.createElement("i",{class:"fa fa-facebook fa-2x","aria-hidden":"true"})),c.a.createElement("a",{href:"https://www.instagram.com/rivieravituniversity/"},c.a.createElement("i",{class:"fa fa-instagram fa-2x","aria-hidden":"true"})),c.a.createElement("a",{href:"https://www.youtube.com/channel/UCdqk7wzTloAVBY_j4p4weAg"},c.a.createElement("i",{class:"fa fa-youtube fa-2x","aria-hidden":"true"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"countdown"},c.a.createElement("div",{className:"tiles"},H()(this.state.countdown)),c.a.createElement("div",{class:"labels"},c.a.createElement("li",null,"Days"),c.a.createElement("li",null,"Hours"),c.a.createElement("li",null,"Mins"),c.a.createElement("li",{className:"hide-in-phone"},"Secs"))))))}}]),t}(n.Component)),U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggleDrawer=function(t,a){return function(){e.setState({left:a})}},e.state={left:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;c.a.createElement("div",{className:e.list},c.a.createElement(v.a,null,["HOME","EVENTS","SPORTS","PROSHOWS","TEAM RIVIERA","SPONSORS & PARTNERS","CONTACT"].map(function(e,t){return c.a.createElement(w.a,{button:!0,key:e},c.a.createElement(O.a,{primary:e}))})));return c.a.createElement("div",null,c.a.createElement(B,null))}}]),t}(n.Component),F=Object(f.withStyles)({list:{width:250}})(U),J=a(161),q=(a(446),function(e){return console.log(e.image),c.a.createElement("div",{className:"header",style:{backgroundImage:"url(".concat(e.image,")")}},c.a.createElement("h2",null,e.title))}),z=a(25),L=a.n(z),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={category:""},a.handleChange=function(e){return function(t){a.setState(Object(J.a)({},e,t.target.value))}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(q,{title:"EVENTS RIVIERA '19",image:L.a}),c.a.createElement("div",{className:"events"},c.a.createElement(A.c,{container:!0},c.a.createElement(A.c,{item:!0,md:6,xs:6},c.a.createElement(A.b,{className:"category-select"},c.a.createElement(A.d,{htmlFor:"category"},"Category"),c.a.createElement(A.f,{value:this.state.category,onChange:this.handleChange("category"),inputProps:{name:"category",id:"category"}},c.a.createElement(A.e,{value:""}),c.a.createElement(A.e,{value:10},"Ten"),c.a.createElement(A.e,{value:20},"Twenty"),c.a.createElement(A.e,{value:30},"Thirty")))),c.a.createElement(A.c,{item:!0,md:6,xs:6}))))}}]),t}(n.Component),$=function(){return c.a.createElement(q,{title:"SPORTS RIVIERA '19",image:L.a})},G=function(){return c.a.createElement(q,{title:"PROSHOWS",image:L.a})},K=function(){return c.a.createElement(q,{title:"TEAM RIVIERA '19",image:L.a})},Q=function(){return c.a.createElement(q,{title:"SPONSORS & PARTNERS",image:L.a})},X=function(){return c.a.createElement(q,{title:"CONTACT US",image:L.a})},Z=(a(448),a(450),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,{basename:"/riviera2019"},c.a.createElement(E.a,null,c.a.createElement(d.a,{exact:!0,path:"/",component:F}),c.a.createElement(d.a,{exact:!0,path:"/events",component:Y}),c.a.createElement(d.a,{exact:!0,path:"/sports",component:$}),c.a.createElement(d.a,{exact:!0,path:"/proshows",component:G}),c.a.createElement(d.a,{exact:!0,path:"/team",component:K}),c.a.createElement(d.a,{exact:!0,path:"/sponsors",component:Q}),c.a.createElement(d.a,{exact:!0,path:"/contact",component:X}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a.p+"static/media/rivieralogo.3927447f.png"},68:function(e,t,a){e.exports=a.p+"static/media/maruti.383ae734.jpg"}},[[242,2,1]]]);
//# sourceMappingURL=main.7adae7b6.chunk.js.map