(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[19],{119:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(101),s=a(554),c=a(574),i=a(555),m=a(557),o=a(109),d=a(314),u=a(63),M=a(72),T=a(74);t.a=()=>n.a.createElement(r.a,null,n.a.createElement("div",{className:"position-absolute card-top-buttons"},n.a.createElement(s.a,null,n.a.createElement(c.a,{color:"",className:"btn btn-header-light icon-button"},n.a.createElement("i",{className:"simple-icon-refresh"})),n.a.createElement(i.a,{right:!0},n.a.createElement(m.a,null,n.a.createElement(u.a,{id:"dashboards.sales"})),n.a.createElement(m.a,null,n.a.createElement(u.a,{id:"dashboards.orders"})),n.a.createElement(m.a,null,n.a.createElement(u.a,{id:"dashboards.refunds"}))))),n.a.createElement(o.a,null,n.a.createElement(d.a,null,n.a.createElement(u.a,{id:"dashboards.sales"})),n.a.createElement("div",{className:"dashboard-line-chart"},n.a.createElement(M.c,{shadow:!0,data:T.d}))))},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var l=a(4),n=a.n(l),r=a(64),s=a(77),c=a.n(s),i=a(101),m=a(109),o=a(314),d=a(104),u=a(63),M=a(110);function T(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"position-absolute card-top-buttons"},n.a.createElement("button",{className:"btn btn-header-light icon-button"},n.a.createElement("i",{className:"simple-icon-refresh"}))),n.a.createElement(m.a,null,n.a.createElement(o.a,null,n.a.createElement(u.a,{id:"dashboards.recent-orders"})),n.a.createElement("div",{className:"scroll dashboard-list-with-thumbs"},n.a.createElement(c.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},M.a.slice(0,6).map((e,t)=>n.a.createElement("div",{key:t,className:"d-flex flex-row mb-3"},n.a.createElement(r.b,{to:"/app/pages/product/details",className:"d-block position-relative"},n.a.createElement("img",{src:e.img,alt:e.title,className:"list-thumbnail border-0"}),n.a.createElement(d.a,{key:t,className:"position-absolute badge-top-right",color:e.statusColor,pill:!0},e.status)),n.a.createElement("div",{className:"pl-3 pt-2 pr-2 pb-2"},n.a.createElement(r.b,{to:"/app/pages/product/details"},n.a.createElement("p",{className:"list-item-heading"},e.title),n.a.createElement("div",{className:"pr-4"},n.a.createElement("p",{className:"text-muted mb-1 text-small"},e.description)),n.a.createElement("div",{className:"text-primary text-small font-weight-medium d-none d-sm-block"},e.createDate)))))))))}},176:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(101),s=a(109),c=a(314),i=a(63),m=a(72),o=a(74);t.a=()=>n.a.createElement(r.a,{className:"h-100"},n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement(i.a,{id:"dashboards.product-categories"})),n.a.createElement("div",{className:"dashboard-donut-chart"},n.a.createElement(m.b,{shadow:!0,data:o.c}))))},179:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(101),s=a(109),c=a(314),i=a(177),m=a(112),o=a.n(m);const d=e=>n.a.createElement("div",{className:"big-calendar-header"},n.a.createElement("div",{className:"float-left"},n.a.createElement("label",null,(()=>{const t=o()(e.date);return n.a.createElement("span",null,n.a.createElement("span",null,t.format("MMMM")," "),n.a.createElement("span",null," ",t.format("YYYY")))})())),n.a.createElement("div",{className:"float-right"},n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-primary calendar-today-btn mr-2",onClick:()=>{e.onNavigate("TODAY")}},"Today"),n.a.createElement("button",{className:"btn calendar-prev-btn mr-1",onClick:()=>{e.onNavigate("PREV")}},n.a.createElement("span",{className:"simple-icon-arrow-left"})),n.a.createElement("button",{className:"btn calendar-next-btn",onClick:()=>{e.onNavigate("NEXT")}},n.a.createElement("span",{className:"simple-icon-arrow-right"})))));var u=a(63);var M=[{key:0,title:"Meeting with Account",allDay:!0,start:"Tue Jul 31 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Thu Aug 02 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:1,title:"Delivery",start:"Mon Sep 10 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Mon Sep 10 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:2,title:"Sale Week",start:"Sun Oct 14 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Oct 21 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:3,title:"Delivery",start:"Tue Nov 13 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Tue Nov 13 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:4,title:"Tax Days",start:"Sun Dec 09 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Fri Dec 14 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:5,title:"Marketing Conference",start:"Sun Nov 04 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Wed Nov 07 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:6,title:"Meeting",start:"Sat Dec 08 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Sat Dec 08 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:7,title:"Sales",start:"Tue Dec 25 2018 00:00:00 GMT+0300 (GMT+03:00)",end:"Fri Dec 28 2018 00:00:00 GMT+0300 (GMT+03:00)"},{key:8,title:"Store Repairs",start:"Mon Jan 14 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Wed Jan 16 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:9,title:"Web Meeting",start:"Tue Feb 05 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Fri Feb 08 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:10,title:"Delivery",start:"Fri Feb 22 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sat Feb 23 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:11,title:"Sales Week",start:"Sun Mar 10 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Mar 17 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:12,title:"Tax",start:"Wed Mar 27 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Thu Mar 28 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:13,title:"Meeting",start:"Sun Apr 14 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Mon Apr 15 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:14,title:"Delivery",start:"Mon Apr 22 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Fri Apr 26 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:15,title:"Account",start:"Wed May 08 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Thu May 09 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:16,title:"Shop Opening",start:"Tue May 14 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Thu May 16 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:17,title:"Vacation",start:"Sun Jun 09 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Jun 23 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:18,title:"Account Inspection",start:"Tue Jul 09 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Jul 14 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:19,title:"Marketing",start:"Wed Jul 17 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Thu Jul 18 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:20,title:"Delivery",start:"Sat Aug 10 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Aug 11 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:21,title:"Sales Week",start:"Sun Aug 18 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Aug 25 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:22,title:"Teem Workshop",start:"Fri Sep 13 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sun Sep 15 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:23,title:"Account Meeting",start:"Tue Oct 08 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Wed Oct 09 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:23,title:"Vacation",start:"Mon Oct 21 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Sat Oct 26 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:24,title:"Meeting",start:"Thu Nov 14 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Fri Nov 15 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:25,title:"Sales Meeting",start:"Fri Nov 22 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Tue Nov 26 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:26,title:"Account",start:"Sun Dec 08 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Mon Dec 09 2019 00:00:00 GMT+0300 (GMT+03:00)"},{key:26,title:"Annual Meeting",start:"Tue Dec 24 2019 00:00:00 GMT+0300 (GMT+03:00)",end:"Wed Dec 25 2019 00:00:00 GMT+0300 (GMT+03:00)"}],T=a(22);const G=Object(i.b)(o.a);t.a=()=>n.a.createElement(r.a,null,n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement(u.a,{id:"dashboards.calendar"})),n.a.createElement(i.a,{localizer:G,style:{minHeight:"500px"},events:M,rtl:Object(T.b)().isRtl,views:["month"],components:{toolbar:d}})))},180:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(64),s=a(77),c=a.n(s),i=a(101),m=a(109),o=a(314),d=a(63);var u=[{title:"Mayra Sibley",detail:"09.08.2018 - 12:45",thumb:"/assets/img/profile-pic-l.jpg"},{title:"Mimi Carreira",detail:"05.08.2018 - 10:20",thumb:"/assets/img/profile-pic-l-2.jpg"},{title:"Philip Nelms",detail:"05.08.2018 - 09:12",thumb:"/assets/img/profile-pic-l-3.jpg"},{title:"Terese Threadgill",detail:"01.08.2018 - 18:20",thumb:"/assets/img/profile-pic-l-4.jpg"},{title:"Kathryn Mengel",detail:"27.07.2018 - 11:45",thumb:"/assets/img/profile-pic-l-5.jpg"},{title:"Esperanza Lodge",detail:"24.07.2018 - 15:00",thumb:"/assets/img/profile-pic-l-2.jpg"},{title:"Laree Munsch",detail:"24.05.2018 - 11:00",thumb:"/assets/img/profile-pic-l.jpg"}];t.a=()=>n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,null,n.a.createElement(d.a,{id:"dashboards.tickets"})),n.a.createElement("div",{className:"dashboard-list-with-user"},n.a.createElement(c.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},u.map((e,t)=>n.a.createElement("div",{key:t,className:"d-flex flex-row mb-3 pb-3 border-bottom"},n.a.createElement(r.b,{to:"/app/pages/product/details"},n.a.createElement("img",{src:e.thumb,alt:e.title,className:"img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"})),n.a.createElement("div",{className:"pl-3 pr-2"},n.a.createElement(r.b,{to:"/app/pages/product/details"},n.a.createElement("p",{className:"font-weight-medium mb-0 "},e.title),n.a.createElement("p",{className:"text-muted mb-0 text-small"},e.detail)))))))))},535:function(e,t,a){"use strict";a.r(t);var l=a(4),n=a.n(l),r=a(75),s=a(313),c=a(67),i=a(70),m=a(137),o=a(160),d=a(180),u=a(179),M=a(138),T=a(139),G=a(119),p=a(176);class E extends l.Component{render(){return n.a.createElement(l.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(c.a,{xxs:"12"},n.a.createElement(i.a,{heading:"menu.ecommerce",match:this.props.match}),n.a.createElement(c.b,{className:"mb-5"}))),n.a.createElement(s.a,null,n.a.createElement(c.a,{lg:"12",xl:"6"},n.a.createElement(m.a,null),n.a.createElement(s.a,null,n.a.createElement(c.a,{md:"12",className:"mb-4"},n.a.createElement(G.a,null)))),n.a.createElement(c.a,{lg:"12",xl:"6",className:"mb-4"},n.a.createElement(o.a,null))),n.a.createElement(s.a,null,n.a.createElement(c.a,{lg:"4",md:"12",className:"mb-4"},n.a.createElement(p.a,{chartClass:"dashboard-donut-chart"})),n.a.createElement(c.a,{lg:"4",md:"6",className:"mb-4"},n.a.createElement(T.a,null)),n.a.createElement(c.a,{lg:"4",md:"6",className:"mb-4"},n.a.createElement(d.a,null))),n.a.createElement(s.a,null,n.a.createElement(c.a,{xl:"6",lg:"12",className:"mb-4"},n.a.createElement(u.a,null)),n.a.createElement(c.a,{xl:"6",lg:"12",className:"mb-4"},n.a.createElement(M.a,null))))}}t.default=Object(r.d)(E)}}]);
//# sourceMappingURL=dashboard-ecommerce.7aeea282.chunk.js.map