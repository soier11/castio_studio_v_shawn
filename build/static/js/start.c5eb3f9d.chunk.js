(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[20],{521:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var l=t(2),n=t.n(l),s=t(296),c=t(57),r=t(61),i=t(64);class m extends l.Component{render(){return n.a.createElement(l.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(r.a,{xxs:"12"},n.a.createElement(i.a,{heading:"menu.start",match:this.props.match}),n.a.createElement(r.b,{className:"mb-5"}))),n.a.createElement(s.a,null,n.a.createElement(r.a,{xxs:"12",className:"mb-4"},n.a.createElement("p",null,n.a.createElement(c.a,{id:"menu.start"})))))}}},64:function(e,a,t){"use strict";var l=t(2),n=t.n(l),s=t(93),c=t(94),r=t(58),i=t(57);const m=e=>n.a.createElement(i.a,{id:"menu.".concat(e)}),o=(e,a,t)=>0===t?"":e.split(a)[0]+a,u=({match:e})=>{console.log(e);const a=e.path.substr(1);let t=a.split("/");return e.path.includes("/studio/class")?t=t.filter(e=>-1===e.indexOf("classes")):t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),console.log(t),n.a.createElement(l.Fragment,null,n.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>n.a.createElement(c.a,{key:l,active:t.length===l+1},t.length!==l+1?n.a.createElement(r.b,{to:"/"+o(a,e,l)},m(e)):m(e)))))};a.a=({heading:e,match:a})=>n.a.createElement(l.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(i.a,{id:e})),n.a.createElement(u,{match:a}))},93:function(e,a,t){"use strict";var l=t(4),n=t(7),s=t(2),c=t.n(s),r=t(21),i=t.n(r),m=t(55),o=t.n(m),u=t(56),d={tag:u.q,listTag:u.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},b=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,r=e.children,i=e.tag,m=e.listTag,d=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(u.m)(o()(a),s),p=Object(u.m)(o()("breadcrumb",t),s);return c.a.createElement(i,Object(l.a)({},b,{className:g,"aria-label":d}),c.a.createElement(m,{className:p},r))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},94:function(e,a,t){"use strict";var l=t(4),n=t(7),s=t(2),c=t.n(s),r=t(21),i=t.n(r),m=t(55),o=t.n(m),u=t(56),d={tag:u.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.active,r=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),m=Object(u.m)(o()(a,!!s&&"active","breadcrumb-item"),t);return c.a.createElement(r,Object(l.a)({},i,{className:m,"aria-current":s?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b}}]);
//# sourceMappingURL=start.c5eb3f9d.chunk.js.map