(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[9],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(4),n=a.n(s),l=a(15),o=a.n(l),i=a(128);class r extends n.a.Component{constructor(...e){super(...e),this.handleDocumentClick=this.handleDocumentClick.bind(this),this.toggle=this.toggle.bind(this),this.state={isOpen:!1}}handleDocumentClick(e){const t=o.a.findDOMNode(this);t.contains(e.target)||t===e.target||this.toggle(e)}toggle(e){e.preventDefault();const t=this.state.isOpen;t?this.removeEvents():this.addEvents(),this.setState({isOpen:!t})}componentWillUnmount(){this.removeEvents()}addEvents(){["click","touchstart"].forEach(e=>document.addEventListener(e,this.handleDocumentClick,!0))}removeEvents(){["click","touchstart"].forEach(e=>document.removeEventListener(e,this.handleDocumentClick,!0))}render(){return n.a.createElement("div",{className:"app-menu ".concat(this.state.isOpen?"shown":"")},this.props.children,n.a.createElement(i.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:this.toggle},n.a.createElement("i",{className:"simple-icon-options"})))}}},104:function(e,t,a){"use strict";var s=a(9),n=a(11),l=a(4),o=a.n(l),i=a(27),r=a.n(i),c=a(60),d=a.n(c),m=a(62),p={color:r.a.string,pill:r.a.bool,tag:m.q,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),children:r.a.node,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.color,i=e.innerRef,r=e.pill,c=e.tag,p=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),u=Object(m.m)(d()(t,"badge","badge-"+l,!!r&&"badge-pill"),a);return p.href&&"span"===c&&(c="a"),o.a.createElement(c,Object(s.a)({},p,{className:u,ref:i}))};u.propTypes=p,u.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=u},128:function(e,t,a){"use strict";var s=a(9),n=a(11),l=a(69),o=a(66),i=a(4),r=a.n(i),c=a(27),d=a.n(c),m=a(60),p=a.n(m),u=a(62),h={tag:u.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.active,o=e.tag,i=e.innerRef,c=Object(n.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(u.m)(p()(t,"nav-link",{disabled:c.disabled,active:l}),a);return r.a.createElement(o,Object(s.a)({},c,{ref:i,onClick:this.onClick,className:d}))},t}(r.a.Component);b.propTypes=h,b.defaultProps={tag:"a"},t.a=b},155:function(e,t,a){"use strict";var s=a(9),n=a(4),l=a.n(n),o=a(27),i=a.n(o),r=a(106),c={children:i.a.node},d=function(e){return l.a.createElement(r.a,Object(s.a)({group:!0},e))};d.propTypes=c,t.a=d},221:function(e,t,a){"use strict";var s=a(9),n=a(11),l=a(4),o=a.n(l),i=a(27),r=a.n(i),c=a(60),d=a.n(c),m=a(62),p={tag:m.q,wrapTag:m.q,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},u=function(e){var t,a=e.className,l=e.cssModule,i=e.children,r=e.toggle,c=e.tag,p=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),E=Object(m.m)(d()(a,"modal-header"),l);if(!b&&r){var f="number"===typeof h?String.fromCharCode(h):h;t=o.a.createElement("button",{type:"button",onClick:r,className:Object(m.m)("close",l),"aria-label":u},o.a.createElement("span",{"aria-hidden":"true"},f))}return o.a.createElement(p,Object(s.a)({},g,{className:E}),o.a.createElement(c,{className:Object(m.m)("modal-title",l)},i),b||t)};u.propTypes=p,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},222:function(e,t,a){"use strict";var s=a(9),n=a(11),l=a(4),o=a.n(l),i=a(27),r=a.n(i),c=a(60),d=a.n(c),m=a(62),p={tag:m.q,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),r=Object(m.m)(d()(t,"modal-body"),a);return o.a.createElement(l,Object(s.a)({},i,{className:r}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},224:function(e,t,a){"use strict";var s=a(9),n=a(11),l=a(4),o=a.n(l),i=a(27),r=a.n(i),c=a(60),d=a.n(c),m=a(62),p={tag:m.q,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),r=Object(m.m)(d()(t,"modal-footer"),a);return o.a.createElement(l,Object(s.a)({},i,{className:r}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},259:function(e,t,a){"use strict";var s=a(92),n=a(9),l=a(69),o=a(66),i=a(4),r=a.n(i),c=a(27),d=a.n(c),m=a(60),p=a.n(m),u=a(15),h=a.n(u),b=a(62),g={children:d.a.node.isRequired,node:d.a.any},E=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);E.propTypes=g;var f=E,v=a(127);function y(){}var C=d.a.shape(v.a.propTypes),O={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:C,modalTransition:C,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool},k=Object.keys(O),N={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:y,onClosed:y,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},j=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(l.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(l.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(l.a)(a)),a.handleEscape=a.handleEscape.bind(Object(l.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(l.a)(a)),a.handleTab=a.handleTab.bind(Object(l.a)(a)),a.onOpened=a.onOpened.bind(Object(l.a)(a)),a.onClosed=a.onClosed.bind(Object(l.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(l.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(l.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,s=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),s&&s(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||y)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||y)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var s=this.getFocusedChild(),n=0,l=0;l<a;l+=1)if(t[l]===s){n=l;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.l.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,k);return r.a.createElement("div",Object(n.a)({},a,{className:Object(b.m)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.m)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,l=a.wrapClassName,o=a.modalClassName,i=a.backdropClassName,c=a.cssModule,d=a.isOpen,m=a.backdrop,u=a.role,h=a.labelledBy,g=a.external,E=a.innerRef,y={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:u,tabIndex:"-1"},C=this.props.fade,O=Object(s.a)({},v.a.defaultProps,{},this.props.modalTransition,{baseClass:C?this.props.modalTransition.baseClass:"",timeout:C?this.props.modalTransition.timeout:0}),k=Object(s.a)({},v.a.defaultProps,{},this.props.backdropTransition,{baseClass:C?this.props.backdropTransition.baseClass:"",timeout:C?this.props.backdropTransition.timeout:0}),N=m&&(C?r.a.createElement(v.a,Object(n.a)({},k,{in:d&&!!m,cssModule:c,className:Object(b.m)(p()("modal-backdrop",i),c)})):r.a.createElement("div",{className:Object(b.m)(p()("modal-backdrop","show",i),c)}));return r.a.createElement(f,{node:this._element},r.a.createElement("div",{className:Object(b.m)(l)},r.a.createElement(v.a,Object(n.a)({},y,O,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.m)(p()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:E}),g,this.renderModalDialog()),N))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);j.propTypes=O,j.defaultProps=N,j.openCount=0;t.a=j},545:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a.n(s),l=a(21),o=a(75),i=a(313),r=a(190),c=a(155),d=a(573),m=a(574),p=a(555),u=a(557),h=a(560),b=a(554),g=a(63),E=a(67),f=a(70),v=a(1),y=a(101),C=a(109),O=a(104),k=a(64);var N=n.a.memo(({item:e,handleCheckChange:t,isSelected:a})=>n.a.createElement(E.a,{xxs:"12"},n.a.createElement(y.a,{className:"card d-flex flex-row mb-3"},n.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},n.a.createElement(C.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},n.a.createElement(k.b,{to:"/app/applications/survey/".concat(e.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"},n.a.createElement("i",{className:"".concat("COMPLETED"===e.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),n.a.createElement("span",{className:"align-middle d-inline-block"},e.title)),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},e.category),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},e.createDate),n.a.createElement("div",{className:"w-15 w-xs-100"},n.a.createElement(O.a,{color:e.labelColor,pill:!0},e.label))),n.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4"},n.a.createElement(d.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:a=>t(a,e.id),label:""})))))),j=a(259),x=a(221),T=a(222),A=a(551),S=a(223),M=a(224),w=a(79),_=a(80);class I extends s.Component{constructor(e){super(e),this.addNetItem=()=>{const e={title:this.state.title,label:this.state.label.value,labelColor:this.state.label.color,category:this.state.category.value,status:this.state.status};this.props.addSurveyItem(e),this.props.toggleModal(),this.setState({title:"",label:{},category:{},status:"ACTIVE"})},this.state={title:"",label:{},labelColor:"",category:{},status:"PENDING"}}render(){const e=this.props.surveyListApp,t=e.labels,a=e.categories,s=this.props,l=s.modalOpen,o=s.toggleModal;return n.a.createElement(j.a,{isOpen:l,toggle:o,wrapClassName:"modal-right",backdrop:"static"},n.a.createElement(x.a,{toggle:o},n.a.createElement(g.a,{id:"survey.add-new-title"})),n.a.createElement(T.a,null,n.a.createElement(A.a,{className:"mt-4"},n.a.createElement(g.a,{id:"survey.title"})),n.a.createElement(S.a,{type:"text",defaultValue:this.state.title,onChange:e=>{this.setState({title:e.target.value})}}),n.a.createElement(A.a,{className:"mt-4"},n.a.createElement(g.a,{id:"survey.category"})),n.a.createElement(w.b,{components:{Input:_.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:a.map((e,t)=>({label:e,value:e,key:t})),value:this.state.category,onChange:e=>{this.setState({category:e})}}),n.a.createElement(A.a,{className:"mt-4"},n.a.createElement(g.a,{id:"survey.label"})),n.a.createElement(w.b,{components:{Input:_.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:t.map((e,t)=>({label:e.label,value:e.label,key:t,color:e.color})),value:this.state.label,onChange:e=>{this.setState({label:e})}}),n.a.createElement(A.a,{className:"mt-4"},n.a.createElement(g.a,{id:"survey.status"})),n.a.createElement(d.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===this.state.status,onChange:e=>{this.setState({status:"on"===e.target.value?"COMPLETED":"ACTIVE"})}}),n.a.createElement(d.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"ACTIVE",checked:"ACTIVE"===this.state.status,onChange:e=>{this.setState({status:"on"!==e.target.value?"COMPLETED":"ACTIVE"})}})),n.a.createElement(M.a,null,n.a.createElement(r.a,{color:"secondary",outline:!0,onClick:o},n.a.createElement(g.a,{id:"survey.cancel"})),n.a.createElement(r.a,{color:"primary",onClick:()=>this.addNetItem()},n.a.createElement(g.a,{id:"survey.submit"}))))}}var L=Object(l.b)(({surveyListApp:e})=>({surveyListApp:e}),{addSurveyItem:v.eb})(I),D=a(559),F=a(77),P=a.n(F),B=a(60),z=a.n(B),R=a(100);class V extends s.Component{constructor(e){super()}addFilter(e,t){this.props.getSurveyListWithFilter(e,t)}render(){const e=this.props.surveyListApp,t=e.surveyItems,a=e.filter,s=e.allSurveyItems,l=e.loading,o=e.labels,i=e.categories;return n.a.createElement(R.a,null,n.a.createElement(P.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},n.a.createElement("div",{className:"p-4"},n.a.createElement("p",{className:"text-muted text-small"},n.a.createElement(g.a,{id:"survey.status"}),"Status"),n.a.createElement("ul",{className:"list-unstyled mb-5"},n.a.createElement(D.a,{className:z()({active:!a})},n.a.createElement(k.b,{to:"#",onClick:e=>this.addFilter("",""),location:{}},n.a.createElement("i",{className:"simple-icon-reload"}),n.a.createElement(g.a,{id:"survey.all-surveys"}),n.a.createElement("span",{className:"float-right"},l&&s.length))),n.a.createElement(D.a,{className:z()({active:a&&"status"===a.column&&"ACTIVE"===a.value})},n.a.createElement(k.b,{to:"#",location:{},onClick:e=>this.addFilter("status","ACTIVE")},n.a.createElement("i",{className:"simple-icon-refresh"}),n.a.createElement(g.a,{id:"survey.active-surveys"}),n.a.createElement("span",{className:"float-right"},l&&t.filter(e=>"ACTIVE"===e.status).length))),n.a.createElement(D.a,{className:z()({active:a&&"status"===a.column&&"COMPLETED"===a.value})},n.a.createElement(k.b,{to:"#",location:{},onClick:e=>this.addFilter("status","COMPLETED")},n.a.createElement("i",{className:"simple-icon-check"}),n.a.createElement(g.a,{id:"survey.completed-surveys"}),n.a.createElement("span",{className:"float-right"},l&&t.filter(e=>"COMPLETED"===e.status).length)))),n.a.createElement("p",{className:"text-muted text-small"},n.a.createElement(g.a,{id:"survey.categories"})),n.a.createElement("ul",{className:"list-unstyled mb-5"},i.map((e,t)=>n.a.createElement(D.a,{key:t},n.a.createElement("div",{onClick:t=>this.addFilter("category",e)},n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{type:"radio",className:"custom-control-input",defaultChecked:a&&"category"===a.column&&a.value===e}),n.a.createElement("label",{className:"custom-control-label"},e)))))),n.a.createElement("p",{className:"text-muted text-small"},n.a.createElement(g.a,{id:"survey.labels"})),n.a.createElement("div",null,o.map((e,t)=>n.a.createElement("p",{className:"d-sm-inline-block mb-1",key:t},n.a.createElement(k.b,{to:"#",location:{},onClick:t=>this.addFilter("label",e.label)},n.a.createElement(O.a,{className:"mb-1",color:"".concat(a&&"label"===a.column&&a.value===e.label?e.color:"outline-"+e.color),pill:!0},e.label))))))))}}var q=Object(l.b)(({surveyListApp:e})=>({surveyListApp:e}),{getSurveyListWithFilter:v.sb})(V);class K extends s.Component{constructor(e){super(e),this.toggleDisplayOptions=()=>{this.setState({displayOptionsIsOpen:!this.state.displayOptionsIsOpen})},this.toggleModal=()=>{this.setState({modalOpen:!this.state.modalOpen})},this.toggleSplit=()=>{this.setState(e=>({dropdownSplitOpen:!e.dropdownSplitOpen}))},this.changeOrderBy=e=>{this.props.getSurveyListWithOrder(e)},this.handleKeyPress=e=>{"Enter"===e.key&&this.props.getSurveyListSearch(e.target.value)},this.handleCheckChange=(e,t)=>{null==this.state.lastChecked&&this.setState({lastChecked:t});let a=Object.assign([],this.props.surveyListApp.selectedItems);if(a.includes(t)?a=a.filter(e=>e!==t):a.push(t),this.props.selectedSurveyItemsChange(a),e.shiftKey){var s=this.props.surveyListApp.surveyItems,n=this.getIndex(t,s,"id"),l=this.getIndex(this.state.lastChecked,s,"id");s=s.slice(Math.min(n,l),Math.max(n,l)+1),a.push(...s.map(e=>e.id)),a=Array.from(new Set(a)),this.props.selectedSurveyItemsChange(a)}},this.handleChangeSelectAll=()=>{this.props.surveyListApp.loading&&(this.props.surveyListApp.selectedItems.length>=this.props.surveyListApp.surveyItems.length?this.props.selectedSurveyItemsChange([]):this.props.selectedSurveyItemsChange(this.props.surveyListApp.surveyItems.map(e=>e.id)))},this.state={dropdownSplitOpen:!1,modalOpen:!1,lastChecked:null,title:"",label:{},category:{},status:"ACTIVE",displayOptionsIsOpen:!1}}componentDidMount(){this.props.getSurveyList(),document.body.classList.add("right-menu")}componentWillUnmount(){document.body.classList.remove("right-menu")}getIndex(e,t,a){for(var s=0;s<t.length;s++)if(t[s][a]===e)return s;return-1}render(){const e=this.props.surveyListApp,t=e.surveyItems,a=e.searchKeyword,l=e.loading,o=e.orderColumn,v=e.orderColumns,y=e.selectedItems,C=this.props.intl.messages,O=this.state.modalOpen;return console.log(l),n.a.createElement(s.Fragment,null,n.a.createElement(i.a,{className:"app-row survey-app"},n.a.createElement(E.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(g.a,{id:"menu.survey"})),l&&n.a.createElement("div",{className:"text-zero top-right-button-container"},n.a.createElement(r.a,{color:"primary",size:"lg",className:"top-right-button mr-1",onClick:this.toggleModal},n.a.createElement(g.a,{id:"survey.add-new"})),n.a.createElement(c.a,{isOpen:this.state.dropdownSplitOpen,toggle:this.toggleSplit},n.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},n.a.createElement(d.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:y.length>=t.length,onClick:()=>this.handleChangeSelectAll(),onChange:()=>this.handleChangeSelectAll(),label:n.a.createElement("span",{className:"custom-control-label ".concat(y.length>0&&y.length<t.length?"indeterminate":"")})})),n.a.createElement(m.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),n.a.createElement(p.a,{right:!0},n.a.createElement(u.a,null,n.a.createElement(g.a,{id:"survey.delete"})),n.a.createElement(u.a,null,n.a.createElement(g.a,{id:"survey.another-action"}))))),n.a.createElement(f.a,{match:this.props.match})),n.a.createElement("div",{className:"mb-2"},n.a.createElement(r.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:this.toggleDisplayOptions},n.a.createElement(g.a,{id:"survey.display-options"})," ",n.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),n.a.createElement(h.a,{id:"displayOptions",className:"d-md-block mb-2",isOpen:this.state.displayOptionsIsOpen},n.a.createElement("div",{className:"d-block d-md-inline-block"},n.a.createElement(b.a,{className:"mr-1 float-md-left btn-group mb-1"},n.a.createElement(m.a,{caret:!0,color:"outline-dark",size:"xs"},n.a.createElement(g.a,{id:"survey.orderby"}),o?o.label:""),n.a.createElement(p.a,null,v.map((e,t)=>n.a.createElement(u.a,{key:t,onClick:()=>this.changeOrderBy(e.column)},e.label)))),n.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},n.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:C["menu.search"],defaultValue:a,onKeyPress:e=>this.handleKeyPress(e)}))))),n.a.createElement(E.b,{className:"mb-5"}),n.a.createElement(i.a,null,l?t.map((e,t)=>n.a.createElement(N,{key:"todo_item_".concat(t),item:e,handleCheckChange:this.handleCheckChange,isSelected:!!l&&y.includes(e.id)})):n.a.createElement("div",{className:"loading"})))),l&&n.a.createElement(q,null),n.a.createElement(L,{toggleModal:this.toggleModal,modalOpen:O}))}}t.default=Object(o.d)(Object(l.b)(({surveyListApp:e})=>({surveyListApp:e}),{getSurveyList:v.qb,getSurveyListWithOrder:v.tb,getSurveyListSearch:v.rb,selectedSurveyItemsChange:v.Ab})(K))},70:function(e,t,a){"use strict";var s=a(4),n=a.n(s),l=a(95),o=a(96),i=a(64),r=a(63);const c=e=>n.a.createElement(r.a,{id:"menu.".concat(e)}),d=(e,t,a)=>0===a?"":e.split(t)[0]+t,m=({match:e})=>{console.log(e);const t=e.path.substr(1);let a=t.split("/");return e.path.includes("/studio/class")?a=a.filter(e=>-1===e.indexOf("classes")):a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),console.log(a),n.a.createElement(s.Fragment,null,n.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,s)=>n.a.createElement(o.a,{key:s,active:a.length===s+1},a.length!==s+1?n.a.createElement(i.b,{to:"/"+d(t,e,s)},c(e)):c(e)))))};t.a=({heading:e,match:t})=>n.a.createElement(s.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(r.a,{id:e})),n.a.createElement(m,{match:t}))},80:function(e,t,a){"use strict";var s=a(4),n=a.n(s),l=a(79);t.a=e=>{var t=Object.assign({},e);return delete t.autoCorrect,delete t.autoCapitalize,n.a.createElement(l.a.Input,t)}}}]);
//# sourceMappingURL=application-survey.f94ebe09.chunk.js.map