(this["webpackJsonptyping-training"]=this["webpackJsonptyping-training"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(8),c=n.n(i),r=(n(13),n(5)),o=n(7),d=n(6),l=n(2),u=n(4),h=(n(14),n(18)),y=n(0),f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;Object(l.a)(this,e),this._visual=n,this._key=t,this._done=null,this._id=Object(h.a)()}return Object(u.a)(e,[{key:"validate",value:function(){this._done=!0}},{key:"invalidate",value:function(){this._done=!1}},{key:"element",get:function(){var e="key";return!0===this.done&&(e+=" valid"),!1===this.done&&(e+=" invalid"),Object(y.jsx)("span",{className:e,children:this.visual},this.id)}},{key:"key",get:function(){return this._key}},{key:"visual",get:function(){return this._visual}},{key:"done",get:function(){return this._done}},{key:"id",get:function(){return this._id}}]),e}(),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.call(this," ","_")}return n}(f),p={validKeys:["q","s","d","f","j","k","l","m"],doneKeys:[],expectedKeys:[],totalKeys:0,failedKeys:0,passedKeys:0},v=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],K=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).generateSequence=function(){e.setState({doneKeys:[],expectedKeys:[]});for(var t,n=e.state.validKeys,s=[],a=0;a<4;a++){for(var i=0;i<4;i++)s.push(1===n.length?new f(n[0]):new f(n[(t=n.length-1,Math.floor(Math.random()*Math.floor(t+1)))]));3!==a&&s.push(new j)}e.setState({expectedKeys:s})},e.handleInputChange=function(t){t.preventDefault();var n=e.state.expectedKeys[0],s=n.key===t.key;s?n.validate():n.invalidate(),n.key!==t.key&&e.generateSequence(),e.setState({doneKeys:[].concat(Object(r.a)(e.state.doneKeys),[n]),expectedKeys:e.state.expectedKeys.slice(1),totalKeys:e.state.totalKeys+1,failedKeys:s?e.state.failedKeys:e.state.failedKeys+1,passedKeys:s?e.state.passedKeys+1:e.state.passedKeys}),1===e.state.expectedKeys.length&&e.generateSequence()},e.handleCheckboxChange=function(t){e.state.validKeys.includes(t)?e.setState({validKeys:e.state.validKeys.filter((function(e){return e!==t}))}):e.setState({validKeys:[].concat(Object(r.a)(e.state.validKeys),[t])})},e.state=p,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.generateSequence()}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"config",children:[Object(y.jsxs)("div",{className:"counters",children:[Object(y.jsxs)("p",{children:["Errors : ",Math.round(this.state.failedKeys/this.state.totalKeys*100),"%"]}),Object(y.jsxs)("p",{children:["Total : ",this.state.totalKeys]})]}),Object(y.jsxs)("div",{className:"char-picker",children:[v.map((function(t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"checkbox",checked:e.state.validKeys.includes(t.toLowerCase()),onChange:function(){return e.handleCheckboxChange(t.toLowerCase())}}),t]},t)})),Object(y.jsx)("button",{className:"regen-button",onClick:this.generateSequence,children:"Re-generate !"})]})]}),Object(y.jsxs)("div",{className:"text-progression",children:[this.state.doneKeys.map((function(e,t){return e.element})),this.state.expectedKeys.map((function(e,t){return e.element}))]}),Object(y.jsx)("p",{type:"text",className:"text-input",contentEditable:!0,suppressContentEditableWarning:!0,onKeyPress:this.handleInputChange})]})}}]),n}(a.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(K,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.72c0b469.chunk.js.map