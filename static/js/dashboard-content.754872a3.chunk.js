(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[17],{105:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(121),s=a.n(l);a(123);const o=e=>{const t=Object.assign({},e),a={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},r=Object.keys(a).filter(a=>(delete t[a],e[a])).map(e=>a[e]).join(" ");return n.a.createElement("div",Object.assign({className:"react-rater-star ".concat(r)},t))};o.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},t.a=e=>n.a.createElement(s.a,e,n.a.createElement(o,null))},120:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(101),s=a(109),o=a(554),i=a(574),c=a(555),u=a(557),d=a(63),m=a(72),p=a(74);t.a=()=>n.a.createElement(l.a,{className:"dashboard-filled-line-chart"},n.a.createElement(s.a,null,n.a.createElement("div",{className:"float-left float-none-xs"},n.a.createElement("div",{className:"d-inline-block"},n.a.createElement("h5",{className:"d-inline"},n.a.createElement(d.a,{id:"dashboards.conversion-rates"})),n.a.createElement("span",{className:"text-muted text-small d-block"},n.a.createElement(d.a,{id:"dashboards.per-session"})))),n.a.createElement("div",{className:"btn-group float-right float-none-xs mt-2"},n.a.createElement(o.a,null,n.a.createElement(i.a,{caret:!0,color:"secondary",className:"btn-xs",outline:!0},n.a.createElement(d.a,{id:"dashboards.this-week"})),n.a.createElement(c.a,{right:!0},n.a.createElement(u.a,null,n.a.createElement(d.a,{id:"dashboards.last-week"})),n.a.createElement(u.a,null,n.a.createElement(d.a,{id:"dashboards.this-month"})))))),n.a.createElement("div",{className:"chart card-body pt-0"},n.a.createElement(m.a,{shadow:!0,data:p.b})))},121:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Star",{enumerable:!0,get:function(){return _star.default}}),exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(4)),_propTypes=_interopRequireDefault(__webpack_require__(27)),_star=_interopRequireDefault(__webpack_require__(122));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=r?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(a,n,l):a[n]=e[n]}}return a.default=e,t&&t.set(e,a),a}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(a,!0).forEach((function(t){_defineProperty(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!==typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(){var e="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0;e&&e(module)}();var __signature__="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Rater=function(_Component){function Rater(e){var t;return _classCallCheck(this,Rater),(t=_possibleConstructorReturn(this,_getPrototypeOf(Rater).call(this,e))).state={rating:e.rating,lastRating:e.rating,isRating:!1},t}return _inherits(Rater,_Component),_createClass(Rater,[{key:"willRate",value:function(e,t){this.setState({rating:e,isRating:!0});var a=this.props.onRating;a&&a(_objectSpread({},t,{rating:e}))}},{key:"onRate",value:function(e,t){this.setState({rating:e,lastRating:e,isRating:!1});var a=this.props.onRate;a&&a(_objectSpread({},t,{rating:e}))}},{key:"onCancelRate",value:function(){var e=this.state.lastRating;this.setState({rating:e,isRating:!1});var t=this.props.onCancelRate;t&&t({rating:e})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){var a=e.rating;a!==t.rating&&this.setState({rating:a,lastRating:a})}},{key:"render",value:function(){var e=this,t=this.props,a=t.total,r=t.interactive,n=t.children,l=_objectWithoutProperties(t,["total","interactive","children"]),s=this.state,o=s.rating,i=s.isRating;n=_react.Children.toArray(n),delete l.rating,delete l.onRate,delete l.onRating,delete l.onCancelRate;var c=Array.apply(null,Array(a)).map((function(t,a){var l={isActive:!i&&o-a>=1,willBeActive:i&&a<o,isActiveHalf:!i&&o-a>=.5&&o-a<1,isDisabled:!r};return _react.default.createElement("div",{key:"star-".concat(a),onClick:r?e.onRate.bind(e,a+1):null,onMouseOver:r?e.willRate.bind(e,a+1):null},n.length?_react.default.cloneElement(n[a%n.length],l):_react.default.createElement(_star.default,l))}));return r?_react.default.createElement("div",_extends({className:"react-rater",onMouseOut:this.onCancelRate.bind(this)},l),c):_react.default.createElement("div",_extends({className:"react-rater"},l),c)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Rater}(_react.Component);exports.default=Rater,Rater.propTypes={total:_propTypes.default.number,rating:_propTypes.default.number,interactive:_propTypes.default.bool,children:_propTypes.default.any,onRate:_propTypes.default.func,onRating:_propTypes.default.func,onCancelRate:_propTypes.default.func},Rater.defaultProps={total:5,rating:0,interactive:!0},function(){var e="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;e&&e.register(Rater,"Rater","/Users/simon/Individual/react-rater/src/index.js")}(),function(){var e="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0;e&&e(module)}()}).call(this,__webpack_require__(83)(module))},122:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(4)),n=l(a(27));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var t="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0;t&&t(e)}();"undefined"!==typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o=function(e){var t=Object.assign({},e),a={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},n=Object.keys(a).filter((function(a){return delete t[a],e[a]})).map((function(e){return a[e]})).join(" ");return r.default.createElement("div",s({className:"react-rater-star ".concat(n)},t),"\u2605")};o.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},o.propTypes={isActive:n.default.bool,isActiveHalf:n.default.bool,willBeActive:n.default.bool,isDisabled:n.default.bool};var i=o,c=i;t.default=c,function(){var e="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;e&&(e.register(o,"Star","/Users/simon/Individual/react-rater/src/star.js"),e.register(i,"default","/Users/simon/Individual/react-rater/src/star.js"))}(),function(){var t="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0;t&&t(e)}()}).call(this,a(83)(e))},123:function(e,t,a){},163:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(101),s=a(109),o=a(88);t.a=({icon:e="iconsminds-bell",title:t="title",detail:a="detail",percent:r=80,progressText:i="8/10"})=>n.a.createElement(l.a,{className:"progress-banner"},n.a.createElement(s.a,{className:"justify-content-between d-flex flex-row align-items-center"},n.a.createElement("div",null,n.a.createElement("i",{className:"".concat(e," mr-2 text-white align-text-bottom d-inline-block")}),n.a.createElement("div",null,n.a.createElement("p",{className:"lead text-white"},t),n.a.createElement("p",{className:"text-small text-white"},a))),n.a.createElement("div",{className:"progress-bar-circle progress-bar-banner position-relative"},n.a.createElement(o.a,{strokeWidth:4,value:r,text:i}))))},182:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(101),s=a(109),o=a(314),i=a(77),c=a.n(i),u=a(64),d=a(63);const m=[{title:"Very informative content, thank you. ",detail:"Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45",thumb:"/assets/img/profile-pic-l.jpg",rate:5,key:0},{title:"This article was delightful to read. Please keep them coming.",detail:"Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18",thumb:"/assets/img/profile-pic-l-2.jpg",rate:4,key:1},{title:"Your post is bad and you should feel bad.",detail:"Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14",thumb:"/assets/img/profile-pic-l-3.jpg",rate:5,key:2},{title:"Very original idea!",detail:"Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20",thumb:"/assets/img/profile-pic-l-4.jpg",rate:3,key:3},{title:"This article was delightful to read. Please keep them coming.",detail:"Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45",thumb:"/assets/img/profile-pic-l-5.jpg",rate:2,key:4},{title:"Nah, did not like it.",detail:"24.07.2018 - 15:00",thumb:"/assets/img/profile-pic-l-2.jpg",rate:5,key:5},{title:"Laree Munsch",detail:"Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45",thumb:"/assets/img/profile-pic-l.jpg",rate:4,key:6}];var p=a(105);t.a=({className:e="",displayRate:t=!1})=>n.a.createElement(l.a,{className:e},n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(d.a,{id:"dashboards.new-comments"})),n.a.createElement("div",{className:"dashboard-list-with-user"},n.a.createElement(c.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},m.map((e,a)=>n.a.createElement("div",{key:a,className:"d-flex flex-row mb-3 pb-3 border-bottom"},n.a.createElement(u.b,{to:"/app/pages/product/details"},n.a.createElement("img",{src:e.thumb,alt:e.title,className:"img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"})),n.a.createElement("div",{className:"pl-3 pr-2"},n.a.createElement(u.b,{to:"/app/pages/product/details"},n.a.createElement("p",{className:"font-weight-medium mb-0"},e.title),n.a.createElement("p",{className:"text-muted mb-0 text-small"},e.detail),t&&n.a.createElement("div",{className:"form-group mb-1 mt-2"},n.a.createElement(p.a,{total:5,rating:5,interactive:!1}))))))))))},231:function(e,t,a){"use strict";var r=a(9),n=a(11),l=a(69),s=a(66),o=a(4),i=a.n(o),c=a(27),u=a.n(c),d=a(60),m=a.n(d),p=a(62),f={children:u.a.node,inline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.m)(m()(t,!!l&&"form-inline"),a);return i.a.createElement(s,Object(r.a)({},c,{ref:o,className:u}))},t}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},t.a=b},546:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),l=a(75),s=a(313),o=a(67),i=a(70),c=a(137),u=a(101),d=a(554),m=a(574),p=a(555),f=a(557),b=a(109),h=a(314),g=a(231),y=a(550),v=a(551),E=a(223),_=a(190),k=a(79),O=a(63),w=a(80);const j=[{label:"Cake",value:"cake",key:0},{label:"Cupcake",value:"cupcake",key:1},{label:"Dessert",value:"dessert",key:2}];class R extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({selectedOption:e})},this.state={selectedOptions:[]}}render(){return n.a.createElement(u.a,null,n.a.createElement("div",{className:"position-absolute card-top-buttons"},n.a.createElement(d.a,null,n.a.createElement(m.a,{color:"",className:"btn btn-header-light icon-button"},n.a.createElement("i",{className:"simple-icon-refresh"})),n.a.createElement(p.a,{right:!0},n.a.createElement(f.a,null,n.a.createElement(O.a,{id:"dashboards.sales"})),n.a.createElement(f.a,null,n.a.createElement(O.a,{id:"dashboards.orders"})),n.a.createElement(f.a,null,n.a.createElement(O.a,{id:"dashboards.refunds"}))))),n.a.createElement(b.a,null,n.a.createElement(h.a,null,n.a.createElement(O.a,{id:"dashboards.quick-post"})),n.a.createElement(g.a,{className:"dashboard-quick-post"},n.a.createElement(y.a,{row:!0},n.a.createElement(v.a,{sm:"3"},n.a.createElement(O.a,{id:"dashboards.title"})),n.a.createElement(o.a,{sm:"9"},n.a.createElement(E.a,{type:"text",name:"text"}))),n.a.createElement(y.a,{row:!0},n.a.createElement(v.a,{sm:"3"},n.a.createElement(O.a,{id:"dashboards.content"})),n.a.createElement(o.a,{sm:"9"},n.a.createElement(E.a,{type:"textarea",rows:"3"}))),n.a.createElement(y.a,{row:!0},n.a.createElement(v.a,{sm:"3"},n.a.createElement(O.a,{id:"dashboards.category"})),n.a.createElement(o.a,{sm:"9"},n.a.createElement(k.b,{components:{Input:w.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",value:this.state.selectedOption,onChange:this.handleChange,options:j}))),n.a.createElement(_.a,{className:"float-right",color:"primary"},n.a.createElement(O.a,{id:"dashboards.save-and-publish"})))))}}var N=a(138),P=a(139),x=a(163),C=a(99),H=a(120),T=a(182);class A extends r.Component{render(){const e=this.props.intl.messages;return n.a.createElement(r.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(o.a,{xxs:"12"},n.a.createElement(i.a,{heading:"menu.content",match:this.props.match}),n.a.createElement(o.b,{className:"mb-5"}))),n.a.createElement(s.a,null,n.a.createElement(o.a,{lg:"12",xl:"6"},n.a.createElement(c.a,null),n.a.createElement(s.a,null,n.a.createElement(o.a,{md:"12",className:"mb-4"},n.a.createElement(R,null)))),n.a.createElement(o.a,{lg:"12",xl:"6",className:"mb-4"},n.a.createElement(N.a,{title:"dashboards.top-viewed-posts"}))),n.a.createElement(s.a,null,n.a.createElement(o.a,{sm:"12",lg:"4",className:"mb-4"},n.a.createElement(P.a,null)),n.a.createElement(o.a,{md:"6",lg:"8",className:"mb-4"},n.a.createElement(T.a,null))),n.a.createElement(s.a,null,n.a.createElement(o.a,{sm:"12",md:"6",className:"mb-4"},n.a.createElement(C.a,null)),n.a.createElement(o.a,{sm:"12",md:"6",className:"mb-4"},n.a.createElement(H.a,null))),n.a.createElement(s.a,null,n.a.createElement(o.a,{lg:"4",md:"6",className:"mb-4"},n.a.createElement(x.a,{icon:"iconsminds-clock",title:"5 ".concat(e["dashboards.posts"]),detail:e["dashboards.pending-for-publish"],percent:500/12,progressText:"5/12"})),n.a.createElement(o.a,{lg:"4",md:"6",className:"mb-4"},n.a.createElement(x.a,{icon:"iconsminds-male",title:"4 ".concat(e["dashboards.users"]),detail:e["dashboards.on-approval-process"],percent:400/6,progressText:"4/6"})),n.a.createElement(o.a,{lg:"4",md:"6",className:"mb-4"},n.a.createElement(x.a,{icon:"iconsminds-bell",title:"8 ".concat(e["dashboards.alerts"]),detail:e["dashboards.waiting-for-notice"],percent:80,progressText:"8/10"}))))}}t.default=Object(l.d)(A)},80:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(79);t.a=e=>{var t=Object.assign({},e);return delete t.autoCorrect,delete t.autoCapitalize,n.a.createElement(l.a.Input,t)}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(4),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function l(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,l=e.pathRadius,i=e.strokeWidth,c=e.style;return Object(r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:l,dashRatio:n,counterClockwise:a})),d:s({pathRadius:l,counterClockwise:a}),strokeWidth:i,fillOpacity:0})}function s(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,l=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-l:l)+"px"}}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,s=e.counterClockwise,o=e.styles,i=e.strokeWidth,c=e.text,u=this.getPathRadius(),d=this.getPathRatio();return Object(r.createElement)("svg",{className:n.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(r.createElement)("circle",{className:n.background,style:o.background,cx:50,cy:50,r:50}):null,Object(r.createElement)(l,{className:n.trail,counterClockwise:s,dashRatio:t,pathRadius:u,strokeWidth:i,style:o.trail}),Object(r.createElement)(l,{className:n.path,counterClockwise:s,dashRatio:d*t,pathRadius:u,strokeWidth:i,style:o.path}),c?Object(r.createElement)("text",{className:n.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)},99:function(e,t,a){"use strict";var r=a(4),n=a.n(r),l=a(101),s=a(109),o=a(554),i=a(574),c=a(555),u=a(557),d=a(63),m=a(72),p=a(74);t.a=({className:e="",controls:t=!0})=>n.a.createElement(l.a,{className:"".concat(e," dashboard-filled-line-chart")},n.a.createElement(s.a,null,n.a.createElement("div",{className:"float-left float-none-xs"},n.a.createElement("div",{className:"d-inline-block"},n.a.createElement("h5",{className:"d-inline"},n.a.createElement(d.a,{id:"dashboards.website-visits"})),n.a.createElement("span",{className:"text-muted text-small d-block"},n.a.createElement(d.a,{id:"dashboards.unique-visitors"})))),t&&n.a.createElement("div",{className:"btn-group float-right float-none-xs mt-2"},n.a.createElement(o.a,null,n.a.createElement(i.a,{caret:!0,color:"primary",className:"btn-xs",outline:!0},n.a.createElement(d.a,{id:"dashboards.this-week"})),n.a.createElement(c.a,{right:!0},n.a.createElement(u.a,null,n.a.createElement(d.a,{id:"dashboards.last-week"})),n.a.createElement(u.a,null,n.a.createElement(d.a,{id:"dashboards.this-month"})))))),n.a.createElement("div",{className:"chart card-body pt-0"},n.a.createElement(m.a,{shadow:!0,data:p.a})))}}]);
//# sourceMappingURL=dashboard-content.754872a3.chunk.js.map