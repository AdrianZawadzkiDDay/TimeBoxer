(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMEBOX_MAKE_CURRENT":return t.timebox.id;case"TIMEBOX_REMOVE":return e===t.removedTimebox.id?null:e;default:return e}}var a=n(20);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMEBOXES_SET":return t.timeboxes;case"TIMEBOX_ADD":var n=t.timebox;return[].concat(Object(a.a)(e),[n]);case"TIMEBOX_REMOVE":var r=t.removedTimebox;return e.filter(function(e){return e.id!==r.id});case"TIMEBOX_REPLACE":var i=t.replacedTimebox;return e.map(function(e){return e.id===i.id?i:e});default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMEBOX_EDIT_STOP":return null;case"TIMEBOX_EDIT_START":return t.currentlyEditedTimeboxId;default:return e}}function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LOADING_INDICATOR_DISABLE":return!1;default:return e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ERROR_SET":return t.timeboxesLoadingError;default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{currentTimeboxId:r(e.currentTimeboxId,t),timeboxes:i(e.timeboxes,t),currentlyEditedTimeboxId:o(e.currentlyEditedTimeboxId,t),timeboxesAreLoading:u(e.timeboxesAreLoading,t),timeboxesLoadingError:c(e.timeboxesLoadingError,t)}}n.d(t,"h",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"e",function(){return p}),n.d(t,"g",function(){return b}),n.d(t,"f",function(){return h}),n.d(t,"c",function(){return v});var l=function(e){return function(e){return e}(e.timeboxes)},d=function(e){return function(e){return e.filter(function(t){return t.id!==e.currentTimeboxId})}(e.timeboxes)},m=function(e,t){return function(e,t){return e.find(function(e){return e.id===t})}(e.timeboxes,t)},f=function(e){return e.timeboxesAreLoading},p=function(e){return e.timeboxesLoadingError},b=function(e,t){return e.currentlyEditedTimeboxId&&e.currentlyEditedTimeboxId===t.id},h=function(e){return!!e.currentTimeboxId},v=function(e){return h(e)?m(e,e.currentTimeboxId):null}},12:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext({accessToken:null});t.a=a},16:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise(function(t){setTimeout(t,e)})}n.d(t,"a",function(){return r})},21:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),o=n.n(i),u=n(19),c=n(17),s=n(7),l=n(11),d=n(1),m=n(2),f=n(4),p=n(3),b=n(5),h=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("Wyst\u0105pi\u0142 nast\u0119puj\u0105cy b\u0142\u0105d:",e,t)}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.children;return this.state.hasError?t:n}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component),v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.onLoginAttempt({email:n.emailInput.current.value,password:n.passwordInput.current.value}),n.emailInput.current.value="",n.passwordInput.current.value=""},n.emailInput=a.a.createRef(),n.passwordInput=a.a.createRef(),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"LoginForm"},this.props.errorMessage?a.a.createElement("div",{className:"LoginForm__error-message"},this.props.errorMessage):null,a.a.createElement("label",null,"Email",a.a.createElement("input",{ref:this.emailInput,type:"text",defaultValue:"bob@example.com"})),a.a.createElement("br",null),a.a.createElement("label",null,"Has\u0142o",a.a.createElement("input",{ref:this.passwordInput,type:"password",defaultValue:"secret"})),a.a.createElement("br",null),a.a.createElement("button",null,"Zaloguj si\u0119"))}}]),t}(a.a.Component),E=n(12),g=n(8),I=n.n(g),T=n(15),x=n(16),O={login:function(){var e=Object(T.a)(I.a.mark(function e(t){var n,r;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(200);case 2:if(n=t.email,r=t.password,"bob@example.com"!==n||"secret"!==r){e.next=5;break}return e.abrupt("return",{accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTU3MjYyMzQ5MSwiZXhwIjoxNTcyNjI3MDkxLCJzdWIiOiIyIn0.pFqv7KN01D8eHlw3D6VCKuthudZuVx4OOfiCC5NdJPk"});case 5:throw new Error("Invalid credentials");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=a.a.lazy(function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,280))}),w=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={accessToken:null,previousLoginAttemptFailed:!1},n.handleLoginAttempt=function(e){O.login(e).then(function(e){var t=e.accessToken;n.setState({accessToken:t,previousLoginAttemptFailed:!1})}).catch(function(){n.setState({previousLoginAttemptFailed:!0})})},n.handleLogout=function(){n.setState({accessToken:null,previousLoginAttemptFailed:!1})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"isUserLoggedIn",value:function(){return!!this.state.accessToken}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,{message:"Co\u015b nie dzia\u0142a w ca\u0142ej aplikacji"},this.isUserLoggedIn()?a.a.createElement(E.a.Provider,{value:{accessToken:this.state.accessToken}},a.a.createElement(a.a.Suspense,{fallback:"... Loading"},a.a.createElement(y,{onLogout:this.handleLogout}))):a.a.createElement(v,{errorMessage:this.state.previousLoginAttemptFailed?"Nie uda\u0142o si\u0119 zalogowa\u0107":null,onLoginAttempt:this.handleLoginAttempt})))}}]),t}(a.a.Component),L=(n(30),n(10)),j=Object(s.createStore)(L.h,Object(c.composeWithDevTools)(Object(s.applyMiddleware)(u.a)));o.a.render(a.a.createElement(l.a,{store:j},a.a.createElement(w,null)),document.getElementById("root"))}},[[21,1,3]]]);
//# sourceMappingURL=main.40859cf6.chunk.js.map