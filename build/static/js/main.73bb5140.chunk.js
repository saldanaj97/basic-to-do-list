(this["webpackJsonpto-do-web"]=this["webpackJsonpto-do-web"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),c=(n(14),n(6)),l=n(3),s=n(4),u=n(7),m=n(5),h=n(8),d=(n(15),function(t){return i.a.createElement("ul",null,t.items.map((function(t,e){return i.a.createElement("li",{key:e},t)})))}),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){n.setState({term:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.setState({term:"",items:[].concat(Object(c.a)(n.state.items),[n.state.term])})},n.state={date:new Date,term:"",items:[]},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return i.a.createElement("div",{className:"Heading"},i.a.createElement("title",null,"To-Do List"),i.a.createElement("h1",null,"Juan's To-Do List"),i.a.createElement("h2",null,"Today's date is: ",this.state.date.toLocaleDateString()),i.a.createElement("h2",null," ",this.state.date.toLocaleTimeString()," "),i.a.createElement("div",null,i.a.createElement("form",{className:"App",onSubmit:this.onSubmit},i.a.createElement("input",{value:this.state.term,onChange:this.onChange}),i.a.createElement("button",null,"Submit")),i.a.createElement(d,{items:this.state.items})))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.73bb5140.chunk.js.map