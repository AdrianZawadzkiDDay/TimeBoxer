(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,t){},164:function(e,t){},178:function(e,t){},180:function(e,t){},208:function(e,t){},210:function(e,t){},211:function(e,t){},216:function(e,t){},218:function(e,t){},224:function(e,t){},226:function(e,t){},245:function(e,t){},257:function(e,t){},260:function(e,t){},280:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a);var r=function(e){var t=e.children;if(t.length<1)throw new Error("Header has to have at least one child!");return i.a.createElement("header",{className:"header"},t)},u=n(278),o=n(1),l=n(2),c=n(4),s=n(3),m=n(14),d=n(5);function f(e){var t=e.className,n=e.minutes,a=e.seconds;return i.a.createElement("h2",{style:{},className:"Clock  "+t},"Pozosta\u0142o ",n,":",a)}f.defaultProps={className:""};var p=f,b=n(154),h=n.n(b);var E=function(e){var t=e.className,n=void 0===t?"":t,a=e.percent,r=void 0===a?33:a,u=e.big,o=void 0!==u&&u,l=e.color,c=void 0===l?null:l,s=h()("progress",n,{"progress--big":o,"progress--color-red":"red"===c});return i.a.createElement("div",{className:s},i.a.createElement("div",{className:"progress__bar",style:{width:"".concat(r,"%")}}))};var T=n(10),v=n(153),I=n(8),O=n.n(I),j=n(15),x=n(155),y=n.n(x),C=n(16),M=[{id:1,title:"Ucz\u0119 si\u0119 o promises",totalTimeInMinutes:25},{id:2,title:"Poznaj\u0119 REST API",totalTimeInMinutes:10},{id:3,title:"\u0106wicz\u0119 async/await",totalTimeInMinutes:15},{id:4,title:"Ucz\u0119 si\u0119 fetch",totalTimeInMinutes:5}];function g(e){var t=M.findIndex(function(t){return t.id===e});if(t<0)throw new Error("Timebox o podanym id nie istnieje");return t}var k={getAllTimeboxes:function(){var e=Object(j.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(200);case 2:return console.log("GET all",M),e.abrupt("return",[].concat(M));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addTimebox:function(){var e=Object(j.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(200);case 2:return n=Object(v.a)({},t,{id:y.a.v4()}),M.push(n),console.log("POST",M),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),replaceTimebox:function(){var e=Object(j.a)(O.a.mark(function e(t){var n,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(200);case 2:if(t.id){e.next=4;break}throw new Error("Cannot replace timebox without an id.");case 4:return n=g(t.id),a=Object(v.a)({},t),M[n]=a,console.log("PUT",M),e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeTimebox:function(){var e=Object(j.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(200);case 2:if(t.id){e.next=4;break}throw new Error("Cannot remove timebox without an id.");case 4:n=g(t.id),M.splice(n,1),console.log("DELETE",M);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(e){return{type:"TIMEBOX_ADD",timebox:e}},S=function(e){return{type:"TIMEBOX_REPLACE",replacedTimebox:e}},P=function(e){return{type:"TIMEBOX_REMOVE",removedTimebox:e}},R=function(){return{type:"TIMEBOX_EDIT_STOP"}},z=function(){return function(e,t){Object(T.f)(t())&&e(P(Object(T.c)(t())))}},N=function(e){return function(t){k.getAllTimeboxes(e).then(function(e){return t(function(e){return{type:"TIMEBOXES_SET",timeboxes:e}}(e))}).catch(function(e){return t(function(e){return{type:"ERROR_SET",error:e}}(e))}).finally(function(){return t({type:"LOADING_INDICATOR_DISABLE"})})}},D=function(e,t){return function(n){k.removeTimebox(e,t).then(function(){return n(P(e))})}},F=n(11),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={isRunning:!1,isPaused:!1,isFinished:!1,pausesCount:0,elapsedTimeInSeconds:0},n.handleStart=n.handleStart.bind(Object(m.a)(n)),n.handleStop=n.handleStop.bind(Object(m.a)(n)),n.togglePause=n.togglePause.bind(Object(m.a)(n)),n.intervalId=null,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){!t.isFinished&&this.state.isFinished&&this.props.onFinish()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"handleStart",value:function(e){this.setState({isRunning:!0}),this.startTimer()}},{key:"handleStop",value:function(e){this.setState({isRunning:!1,isPaused:!1,pausesCount:0,elapsedTimeInSeconds:0}),this.stopTimer()}},{key:"startTimer",value:function(){var e=this;null===this.intervalId&&(this.intervalId=window.setInterval(function(){e.setState(function(t){var n=60*e.props.totalTimeInMinutes,a=Math.min(t.elapsedTimeInSeconds+.1,n),i=t.isFinished||a>=n;return i&&e.stopTimer(),{elapsedTimeInSeconds:a,isFinished:i,isRunning:t.isRunning&&!i,isPaused:t.isPaused&&!i}})},100))}},{key:"stopTimer",value:function(){window.clearInterval(this.intervalId),this.intervalId=null}},{key:"togglePause",value:function(){this.setState(function(e){var t=!e.isPaused;return t?this.stopTimer():this.startTimer(),{isPaused:t,pausesCount:t?e.pausesCount+1:e.pausesCount}})}},{key:"render",value:function(){var e,t=this.state,n=t.isFinished,a=t.isPaused,r=t.isRunning,o=t.pausesCount,l=t.elapsedTimeInSeconds,c=this.props,s=c.title,m=60*c.totalTimeInMinutes,d=(e=m-l,[Math.floor(e/60),Math.floor(e%60)]),f=Object(u.a)(d,2),b=f[0],h=f[1],T=l/m*100;return i.a.createElement("div",{className:"CurrentTimebox"},i.a.createElement("h1",null,s),i.a.createElement(p,{minutes:b,seconds:h,className:a?"inactive":""}),i.a.createElement(E,{percent:T,className:a?"inactive":"",color:"red",big:!0}),i.a.createElement("button",{onClick:this.handleStart,disabled:r||n},"Start"),i.a.createElement("button",{onClick:this.handleStop,disabled:!r},"Stop"),i.a.createElement("button",{onClick:this.togglePause,disabled:!r},a?"Wzn\xf3w":"Pauzuj"),"Liczba przerw: ",o)}}]),t}(i.a.Component);var A=Object(F.b)(function(e){return{currentTimebox:Object(T.c)(e)}},function(e,t){return{onFinish:function(){return e(z())}}})(function(e){var t=e.currentTimebox,n=e.onFinish;if(t){var a=t.title,r=t.totalTimeInMinutes;return i.a.createElement(_,{title:a,totalTimeInMinutes:r,onFinish:n})}return null}),U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.onCreate({title:n.titleInput.current.value,totalTimeInMinutes:n.totalTimeInMinutesInput.current.value}),n.titleInput.current.value="",n.totalTimeInMinutesInput.current.value=""},n.titleInput=i.a.createRef(),n.totalTimeInMinutesInput=i.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"TimeboxCreator"},i.a.createElement("label",null,"Co robisz?",i.a.createElement("input",{ref:this.titleInput,type:"text"})),i.a.createElement("br",null),i.a.createElement("label",null,"Ile minut?",i.a.createElement("input",{ref:this.totalTimeInMinutesInput,type:"number",step:"0.01"})),i.a.createElement("br",null),i.a.createElement("button",null,"Dodaj timebox"))}}]),t}(i.a.Component),B=n(12);function q(e){var t=e.timeboxes,n=e.renderTimebox;return i.a.createElement("div",{className:"TimeboxesList"},t.map(n))}Object(F.b)(function(e){return{timeboxes:Object(T.b)(e)}})(q);var L=Object(F.b)(function(e){return{timeboxes:Object(T.d)(e)}})(q);var X=function(e){var t=e.title,n=e.totalTimeInMinutes,a=e.onDelete,r=e.onEdit,u=e.onMakeCurrent;return i.a.createElement("div",{className:"Timebox"},i.a.createElement("h3",null,t," - ",n," min."),i.a.createElement("button",{onClick:a},"Usu\u0144"),i.a.createElement("button",{onClick:r},"Zmie\u0144"),i.a.createElement("button",{onClick:u},"Zacznij teraz"))},V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.onUpdate({title:n.titleInput.current.value,totalTimeInMinutes:n.totalTimeInMinutesInput.current.value}),n.resetToInitialValues()},n.handleCancel=function(){n.resetToInitialValues(),n.props.onCancel()},n.titleInput=i.a.createRef(),n.totalTimeInMinutesInput=i.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"resetToInitialValues",value:function(){this.titleInput.current.value=this.props.initialTitle,this.totalTimeInMinutesInput.current.value=this.props.initialTotalTimeInMinutes}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"TimeboxEditor"},i.a.createElement("label",null,"Co robisz?",i.a.createElement("input",{ref:this.titleInput,defaultValue:this.props.initialTitle,type:"text"})),i.a.createElement("br",null),i.a.createElement("label",null,"Ile minut?",i.a.createElement("input",{ref:this.totalTimeInMinutesInput,defaultValue:this.props.initialTotalTimeInMinutes,type:"number",step:"0.01"})),i.a.createElement("br",null),i.a.createElement("a",{onClick:this.handleCancel},"Anuluj"),i.a.createElement("button",null,"Zapisz zmiany"))}}]),t}(i.a.Component),J=Object(F.b)(function(e,t){return{isEdited:Object(T.g)(e,t.timebox)}},function(e,t){return{onEdit:function(){return e({type:"TIMEBOX_EDIT_START",currentlyEditedTimeboxId:t.timebox.id})},onCancel:function(){return e(R())},onMakeCurrent:function(){return e({type:"TIMEBOX_MAKE_CURRENT",timebox:t.timebox})}}})(function(e){var t=e.timebox,n=e.isEdited,a=e.onEdit,r=e.onCancel,u=e.onUpdate,o=e.onDelete,l=e.onMakeCurrent;return i.a.createElement(i.a.Fragment,null,n?i.a.createElement(V,{initialTitle:t.title,initialTotalTimeInMinutes:t.totalTimeInMinutes,onCancel:r,onUpdate:u}):i.a.createElement(X,{key:t.id,title:t.title,totalTimeInMinutes:t.totalTimeInMinutes,onDelete:o,onEdit:a,onMakeCurrent:l}))});var W=function(){var e=Object(F.c)(),t=Object(a.useContext)(B.a).accessToken,n=Object(F.d)(T.a),r=Object(F.d)(T.e);return Object(a.useEffect)(function(){e(N(t))},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{onCreate:function(n){try{k.addTimebox(n,t).then(function(t){return e(w(t))})}catch(a){console.log("Jest b\u0142\u0105d przy tworzeniu timeboxa:",a)}}}),n?"Timeboxy si\u0119 \u0142aduj\u0105...":null,r?"Nie uda\u0142o si\u0119 za\u0142adowa\u0107 :(":null,i.a.createElement(L,{renderTimebox:function(n){return i.a.createElement(J,{timebox:n,onUpdate:function(a){var i=Object(v.a)({},n,a);k.replaceTimebox(i,t).then(function(t){return e(S(t))}),e(R())},onDelete:function(){return e(D(n,t))}})}}))},Z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={quote:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;n.e(5).then(n.t.bind(null,279,7)).then(function(t){e.setState({quote:t.getQuote()})}).catch(function(){return console.log("Couldn't load quotes")})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.state.quote?i.a.createElement("figure",null,i.a.createElement("blockquote",null,this.state.quote.text),i.a.createElement("figcaption",null,i.a.createElement("cite",null,this.state.quote.author))):"...")}}]),t}(i.a.Component),G=n(158),H=n.n(G);var K=function(e){return i.a.createElement(B.a.Consumer,null,function(e){var t=e.accessToken;return i.a.createElement(i.a.Fragment,null,"Witaj ",function(e){return H.a.decode(e).email}(t))})};t.default=function(e){return e.onLogout,i.a.createElement(i.a.Fragment,null,i.a.createElement(r,null,i.a.createElement(K,null)),i.a.createElement(W,null),i.a.createElement(A,null),i.a.createElement(Z,null))}}}]);
//# sourceMappingURL=4.535e5f42.chunk.js.map