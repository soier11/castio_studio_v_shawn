(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[14],{105:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(121),s=a.n(l);a(123);const n=e=>{const t=Object.assign({},e),a={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},r=Object.keys(a).filter(a=>(delete t[a],e[a])).map(e=>a[e]).join(" ");return o.a.createElement("div",Object.assign({className:"react-rater-star ".concat(r)},t))};n.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},t.a=e=>o.a.createElement(s.a,e,o.a.createElement(n,null))},113:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(101),s=a(166),n=a(109),i=a(314),c=a(88);t.a=({title:e="title",percent:t=50,isSortable:a=!1})=>o.a.createElement(l.a,null,a&&o.a.createElement(s.a,{className:"p-0 position-relative"},o.a.createElement("div",{className:"position-absolute handle card-icon"},o.a.createElement("i",{className:"simple-icon-shuffle"}))),o.a.createElement(n.a,{className:"d-flex justify-content-between align-items-center"},o.a.createElement(i.a,{className:"mb-0"},e),o.a.createElement("div",{className:"progress-bar-circle"},o.a.createElement(c.a,{strokeWidth:4,value:t,text:"".concat(t,"%")}))))},114:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(313),s=a(101),n=a(109),i=a(67),c=a(72),d=a(74);t.a=({itemClass:e="dashboard-small-chart"})=>o.a.createElement(l.a,null,o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(s.a,{className:e},o.a.createElement(n.a,null,o.a.createElement(c.f,{data:d.g})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(s.a,{className:e},o.a.createElement(n.a,null,o.a.createElement(c.f,{data:d.h})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(s.a,{className:e},o.a.createElement(n.a,null,o.a.createElement(c.f,{data:d.i})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(s.a,{className:e},o.a.createElement(n.a,null,o.a.createElement(c.f,{data:d.j})))))},182:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(101),s=a(109),n=a(314),i=a(77),c=a.n(i),d=a(64),m=a(63);const h=[{title:"Very informative content, thank you. ",detail:"Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45",thumb:"/assets/img/profile-pic-l.jpg",rate:5,key:0},{title:"This article was delightful to read. Please keep them coming.",detail:"Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18",thumb:"/assets/img/profile-pic-l-2.jpg",rate:4,key:1},{title:"Your post is bad and you should feel bad.",detail:"Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14",thumb:"/assets/img/profile-pic-l-3.jpg",rate:5,key:2},{title:"Very original idea!",detail:"Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20",thumb:"/assets/img/profile-pic-l-4.jpg",rate:3,key:3},{title:"This article was delightful to read. Please keep them coming.",detail:"Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45",thumb:"/assets/img/profile-pic-l-5.jpg",rate:2,key:4},{title:"Nah, did not like it.",detail:"24.07.2018 - 15:00",thumb:"/assets/img/profile-pic-l-2.jpg",rate:5,key:5},{title:"Laree Munsch",detail:"Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45",thumb:"/assets/img/profile-pic-l.jpg",rate:4,key:6}];var p=a(105);t.a=({className:e="",displayRate:t=!1})=>o.a.createElement(l.a,{className:e},o.a.createElement(s.a,null,o.a.createElement(n.a,null,o.a.createElement(m.a,{id:"dashboards.new-comments"})),o.a.createElement("div",{className:"dashboard-list-with-user"},o.a.createElement(c.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},h.map((e,a)=>o.a.createElement("div",{key:a,className:"d-flex flex-row mb-3 pb-3 border-bottom"},o.a.createElement(d.b,{to:"/app/pages/product/details"},o.a.createElement("img",{src:e.thumb,alt:e.title,className:"img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"})),o.a.createElement("div",{className:"pl-3 pr-2"},o.a.createElement(d.b,{to:"/app/pages/product/details"},o.a.createElement("p",{className:"font-weight-medium mb-0"},e.title),o.a.createElement("p",{className:"text-muted mb-0 text-small"},e.detail),t&&o.a.createElement("div",{className:"form-group mb-1 mt-2"},o.a.createElement(p.a,{total:5,rating:5,interactive:!1}))))))))))},536:function(e,t,a){"use strict";a.r(t);var r=a(4),o=a.n(r),l=a(313),s=a(558),n=a(559),i=a(253),c=a(254),d=a(101),m=a(190),h=a(109),p=a(104),u=a(64),b=a(60),g=a.n(b),C=a(105),f=a(70),E=a(67),v=a(63),y=a(113),x=a(75),w=a(114),k=a(99),N=a(182);class S extends r.Component{constructor(e){super(e),this.toggleTab=this.toggleTab.bind(this),this.state={activeFirstTab:"1"}}toggleTab(e){this.state.activeTab!==e&&this.setState({activeFirstTab:e})}render(){const e=this.props.intl.messages;return console.log(this.props.match),o.a.createElement(r.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(E.a,{xxs:"12"},o.a.createElement("h1",null,"\ud074\ub798\uc2a4 \uc774\ub984!!!!"),o.a.createElement(f.a,{match:this.props.match}),o.a.createElement(s.a,{tabs:!0,className:"separator-tabs ml-0 mb-5"},o.a.createElement(n.a,null,o.a.createElement(u.b,{location:{},to:"#",className:g()({active:"1"===this.state.activeFirstTab,"nav-link":!0}),onClick:()=>{this.toggleTab("1")}},o.a.createElement(v.a,{id:"pages.details"}))),o.a.createElement(n.a,null,o.a.createElement(u.b,{location:{},to:"#",className:g()({active:"2"===this.state.activeFirstTab,"nav-link":!0}),onClick:()=>{this.toggleTab("2")}},o.a.createElement(v.a,{id:"pages.orders"})))),o.a.createElement(i.a,{activeTab:this.state.activeFirstTab},o.a.createElement(c.a,{tabId:"1"},o.a.createElement(l.a,null,o.a.createElement(E.a,{xxs:"12",lg:"4",className:"mb-4"},o.a.createElement(d.a,{className:"mb-4"},o.a.createElement("div",{className:"position-absolute card-top-buttons"},o.a.createElement(m.a,{outline:!0,color:"white",className:"icon-button"},o.a.createElement("i",{className:"simple-icon-pencil"}))),o.a.createElement("img",{src:"/assets/img/detail.jpg",alt:"Detail",className:"card-img-top"}),o.a.createElement(h.a,null,o.a.createElement("p",{className:"text-muted text-small mb-2"},o.a.createElement(v.a,{id:"pages.description"})),o.a.createElement("p",{className:"mb-3"},"It\u2019s all about simplicity\u2026Less is more. Chocolate Cake exclusively brings you the classic chocolate cake. This cake is the one you always dream of-moist cake and creamy chocolate frosting.",o.a.createElement("br",null),o.a.createElement("br",null)," This cake proudly serves itself for a family gathering, a dinner party, a birthday celebration, a baby christening, and a gift to someone special or simply to have on hand on the cake stand at home served with an ice cold glass of milk!"),o.a.createElement("p",{className:"text-muted text-small mb-2"},o.a.createElement(v.a,{id:"pages.rating"})),o.a.createElement("div",{className:"mb-3"},o.a.createElement(C.a,{total:5,rating:5,interactive:!1})),o.a.createElement("p",{className:"text-muted text-small mb-2"},o.a.createElement(v.a,{id:"pages.price"})),o.a.createElement("p",{className:"mb-3"},"$8,14"),o.a.createElement("p",{className:"text-muted text-small mb-2"},o.a.createElement(v.a,{id:"pages.ingredients"})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("p",{className:"d-sm-inline-block mb-1"},o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Flour"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Chocolate"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Caster Sugar"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Baking Powder"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Milk"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Eggs"),o.a.createElement(p.a,{color:"outline-secondary mb-1 mr-1",pill:!0},"Vegetable Oil"))),o.a.createElement("p",{className:"text-muted text-small mb-2"},o.a.createElement(v.a,{id:"pages.is-vegan"})),o.a.createElement("p",null,"No"))),o.a.createElement(l.a,null,o.a.createElement(E.a,{xxs:"12",className:"mb-4"},o.a.createElement(y.a,{className:"mb-4",title:e["pages.order-status"],percent:85,isSortable:!1})),o.a.createElement(E.a,{xxs:"12",className:"mb-4"},o.a.createElement(y.a,{className:"mb-4",title:e["pages.order-status"],percent:40,isSortable:!1})))),o.a.createElement(E.a,{xxs:"12",lg:"8"},o.a.createElement(w.a,{itemClass:"dashboard-small-chart-analytics"}),o.a.createElement(k.a,{className:"mb-4",controls:!1}),o.a.createElement(N.a,{className:"mb-4",displayRate:!0})))),o.a.createElement(c.a,{tabId:"2"},o.a.createElement("div",null,"test"))))))}}t.default=Object(x.d)(S)},70:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(95),s=a(96),n=a(64),i=a(63);const c=e=>o.a.createElement(i.a,{id:"menu.".concat(e)}),d=(e,t,a)=>0===a?"":e.split(t)[0]+t,m=({match:e})=>{console.log(e);const t=e.path.substr(1);let a=t.split("/");return e.path.includes("/studio/class")?a=a.filter(e=>-1===e.indexOf("classes")):a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),console.log(a),o.a.createElement(r.Fragment,null,o.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,r)=>o.a.createElement(s.a,{key:r,active:a.length===r+1},a.length!==r+1?o.a.createElement(n.b,{to:"/"+d(t,e,r)},c(e)):c(e)))))};t.a=({heading:e,match:t})=>o.a.createElement(r.Fragment,null,e&&o.a.createElement("h1",null,o.a.createElement(i.a,{id:e})),o.a.createElement(m,{match:t}))},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return C})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return v})),a.d(t,"f",(function(){return x}));var r=a(2),o=a(4),l=a.n(o),s=a(65),n=a(78);const i={backgroundColor:Object(n.a)().foregroundColor,titleFontColor:Object(n.a)().primaryColor,borderColor:Object(n.a)().separatorColor,borderWidth:.5,bodyFontColor:Object(n.a)().primaryColor,bodySpacing:10,xPadding:15,yPadding:15,cornerRadius:.15},c={afterDatasetsUpdate:function(e){},beforeDraw:function(e){var t=e.chartArea.right,a=e.chartArea.bottom,r=e.chart.ctx;r.restore();var o=e.data.labels[0],l=e.data.datasets[0].data[0],s=e.data.datasets[0],i=s._meta[Object.keys(s._meta)[0]],c=i.total,d=parseFloat((l/c*100).toFixed(1));d=e.legend.legendItems[0].hidden?0:d,e.pointAvailable&&(o=e.data.labels[e.pointIndex],l=e.data.datasets[e.pointDataIndex].data[e.pointIndex],c=(i=(s=e.data.datasets[e.pointDataIndex])._meta[Object.keys(s._meta)[0]]).total,d=parseFloat((l/c*100).toFixed(1)),d=e.legend.legendItems[e.pointIndex].hidden?0:d),r.font="36px Nunito, sans-serif",r.fillStyle=Object(n.a)().primaryColor,r.textBaseline="middle";var m=d+"%",h=Math.round((t-r.measureText(m).width)/2),p=a/2;r.fillText(m,h,p),r.font="14px Nunito, sans-serif",r.textBaseline="middle";var u=o,b=Math.round((t-r.measureText(u).width)/2),g=a/2-30;r.fillText(u,b,g),r.save()},beforeEvent:function(e,t,a){var r=e.getElementAtEvent(t)[0];r&&(e.pointIndex=r._index,e.pointDataIndex=r._datasetIndex,e.pointAvailable=!0)}},d={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,tooltips:i,plugins:{datalabels:{display:!1}},scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:5,min:50,max:70,padding:20}}],xAxes:[{gridLines:{display:!1}}]}},m={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{display:!1}},plugins:{datalabels:{display:!1}},tooltips:i},h={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,tooltips:i,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:5,min:50,max:70,padding:20}}],xAxes:[{gridLines:{display:!1}}]}},p={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{display:!1}},tooltips:i},u={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,title:{display:!1},cutoutPercentage:80,layout:{padding:{bottom:20}},tooltips:i},b={layout:{padding:{left:5,right:5,top:10,bottom:10}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0},display:!1}],xAxes:[{display:!1}]}};class g extends l.a.Component{constructor(e){super(e),this.props.shadow&&(s.a.defaults.lineWithShadow=s.a.defaults.line,s.a.controllers.lineWithShadow=s.a.controllers.line.extend({draw:function(e){s.a.controllers.line.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,t.stroke(),s.a.controllers.line.prototype.draw.apply(this,arguments),t.restore()}}))}render(){const e=this.props,t=e.data,a=e.shadow;return l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:a?"lineWithShadow":"line",options:Object(r.a)({},h),data:t})}}l.a.Component;class C extends l.a.Component{constructor(e){super(e),this.props.shadow&&(s.a.defaults.doughnutWithShadow=s.a.defaults.doughnut,s.a.controllers.doughnutWithShadow=s.a.controllers.doughnut.extend({draw:function(e){s.a.controllers.doughnut.prototype.draw.call(this,e);let t=this.chart.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,s.a.controllers.doughnut.prototype.draw.apply(this,arguments),t.restore()}}))}render(){const e=this.props,t=e.data,a=e.shadow;return l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:a?"doughnutWithShadow":"doughnut",plugins:[c],options:Object(r.a)({},u),data:t})}}class f extends l.a.Component{constructor(e){super(e),this.props.shadow&&(s.a.defaults.lineWithShadow=s.a.defaults.line,s.a.controllers.lineWithShadow=s.a.controllers.line.extend({draw:function(e){s.a.controllers.line.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,t.stroke(),s.a.controllers.line.prototype.draw.apply(this,arguments),t.restore()}}))}render(){const e=this.props,t=e.data,a=e.shadow;return l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:a?"lineWithShadow":"line",options:Object(r.a)({},d),data:t})}}l.a.Component;class E extends l.a.Component{constructor(e){super(e),this.props.shadow&&(s.a.defaults.polarWithShadow=s.a.defaults.polarArea,s.a.controllers.polarWithShadow=s.a.controllers.polarArea.extend({draw:function(e){s.a.controllers.radar.prototype.draw.call(this,e);let t=this.chart.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=0,t.shadowOffsetY=7,t.responsive=!0,s.a.controllers.radar.prototype.draw.apply(this,arguments),t.restore()}}))}render(){const e=this.props,t=e.data,a=e.shadow;return l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:a?"polarWithShadow":"polarArea",options:Object(r.a)({},m),data:t})}}class v extends l.a.Component{constructor(e){super(e),this.props.shadow&&(s.a.defaults.radarWithShadow=s.a.defaults.radar,s.a.controllers.radarWithShadow=s.a.controllers.radar.extend({draw:function(e){s.a.controllers.radar.prototype.draw.call(this,e);let t=this.chart.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=0,t.shadowOffsetY=7,t.responsive=!0,s.a.controllers.radar.prototype.draw.apply(this,arguments),t.restore()}}))}render(){const e=this.props,t=e.data,a=e.shadow;return l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:a?"radarWithShadow":"radar",options:Object(r.a)({},p),data:t})}}l.a.Component;const y=e=>{for(var t=(e+="").split("."),a=t[0],r=t.length>1?"."+t[1]:"",o=/(\d+)(\d{3})/;o.test(a);)a=a.replace(o,"$1,$2");return a+r};class x extends l.a.Component{constructor(e){super(e),this.changeState=this.changeState.bind(this),this.state={currentValue:"",currentLabel:""},s.a.defaults.lineWithLine=s.a.defaults.line,s.a.controllers.lineWithLine=s.a.controllers.line.extend({draw:function(e){if(s.a.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){var t=this.chart.tooltip._active[0],a=this.chart.ctx,r=t.tooltipPosition().x,o=this.chart.scales["y-axis-0"].top,l=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(r,o),a.lineTo(r,l),a.lineWidth=1,a.strokeStyle="rgba(0,0,0,0.1)",a.stroke(),a.restore()}}})}changeState(e,t){this.setState({currentValue:e,currentLabel:t})}render(){const e=this.changeState,t=this.props.data;return l.a.createElement(o.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",{className:"lead color-theme-1 mb-1 value"},this.state.currentValue),l.a.createElement("p",{className:"mb-0 label text-small"},this.state.currentLabel)),l.a.createElement("div",{className:"chart"},l.a.createElement(s.b,{ref:e=>this.chart_instance=e&&e.chart_instance,type:"lineWithLine",options:Object(r.a)({},b,{tooltips:{intersect:!1,enabled:!1,custom:function(t){if(t&&t.dataPoints){var a=t.dataPoints[0].yLabel,r=t.dataPoints[0].xLabel,o=t.body[0].lines[0].split(":")[0];e("$"+y(a),o+"-"+r)}}}}),plugins:[{afterInit:function(t,a){var r=t.data.datasets[0].data[0],o=t.data.labels[0],l=t.data.datasets[0].label;e("$"+y(r),l+"-"+o)}}],data:t})))}}},74:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"f",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return m})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(78);const o=Object(r.a)(),l={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[54,63,60,65,60,68,60],borderColor:o.themeColor1,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.foregroundColor,pointRadius:6,pointBorderWidth:2,pointHoverRadius:8,fill:!1}]},s={labels:["Sales","Orders","Stock"],datasets:[{data:[80,90,70],borderWidth:2,borderColor:[o.themeColor1,o.themeColor2,o.themeColor3],backgroundColor:[o.themeColor1_10,o.themeColor2_10,o.themeColor3_10]}]},n={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[54,63,60,65,60,68,60],borderColor:o.themeColor1,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.foregroundColor,pointRadius:4,pointBorderWidth:2,pointHoverRadius:5,fill:!0,borderWidth:2,backgroundColor:o.themeColor1_10}]},i=(o.themeColor1,o.themeColor1_10,o.themeColor2,o.themeColor2_10,o.themeColor1,o.themeColor1_10,o.themeColor2,o.themeColor2_10,{datasets:[{label:"Stock",borderWidth:2,pointBackgroundColor:o.themeColor1,borderColor:o.themeColor1,backgroundColor:o.themeColor1_10,data:[80,90,70]},{label:"Order",borderWidth:2,pointBackgroundColor:o.themeColor2,borderColor:o.themeColor2,backgroundColor:o.themeColor2_10,data:[68,80,95]}],labels:["Cakes","Desserts","Cupcakes"]}),c=(o.themeColor1,o.themeColor2,o.themeColor3,o.themeColor1_10,o.themeColor2_10,o.themeColor3_10,{labels:["Cakes","Cupcakes","Desserts"],datasets:[{label:"",borderColor:[o.themeColor3,o.themeColor2,o.themeColor1],backgroundColor:[o.themeColor3_10,o.themeColor2_10,o.themeColor1_10],borderWidth:2,data:[15,25,20]}]}),d={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[1250,1300,1550,921,1810,1106,1610],datalabels:{align:"end",anchor:"end"}}]},m={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Pending Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[115,120,300,222,105,85,36],datalabels:{align:"end",anchor:"end"}}]},h={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[350,452,762,952,630,85,158],datalabels:{align:"end",anchor:"end"}}]},p={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[200,452,250,630,125,85,20],datalabels:{align:"end",anchor:"end"}}]},u={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[65,60,68,60,58,63,60],borderColor:o.themeColor2,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor2,pointHoverBackgroundColor:o.themeColor2,pointHoverBorderColor:o.foregroundColor,pointRadius:4,pointBorderWidth:2,pointHoverRadius:5,fill:!0,borderWidth:2,backgroundColor:o.themeColor2_10}]}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=()=>{let e=getComputedStyle(document.body);return{themeColor1:e.getPropertyValue("--theme-color-1").trim(),themeColor2:e.getPropertyValue("--theme-color-2").trim(),themeColor3:e.getPropertyValue("--theme-color-3").trim(),themeColor4:e.getPropertyValue("--theme-color-4").trim(),themeColor5:e.getPropertyValue("--theme-color-5").trim(),themeColor6:e.getPropertyValue("--theme-color-6").trim(),themeColor1_10:e.getPropertyValue("--theme-color-1-10").trim(),themeColor2_10:e.getPropertyValue("--theme-color-2-10").trim(),themeColor3_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor4_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor5_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor6_10:e.getPropertyValue("--theme-color-3-10").trim(),primaryColor:e.getPropertyValue("--primary-color").trim(),foregroundColor:e.getPropertyValue("--foreground-color").trim(),separatorColor:e.getPropertyValue("--separator-color").trim()}}},99:function(e,t,a){"use strict";var r=a(4),o=a.n(r),l=a(101),s=a(109),n=a(554),i=a(574),c=a(555),d=a(557),m=a(63),h=a(72),p=a(74);t.a=({className:e="",controls:t=!0})=>o.a.createElement(l.a,{className:"".concat(e," dashboard-filled-line-chart")},o.a.createElement(s.a,null,o.a.createElement("div",{className:"float-left float-none-xs"},o.a.createElement("div",{className:"d-inline-block"},o.a.createElement("h5",{className:"d-inline"},o.a.createElement(m.a,{id:"dashboards.website-visits"})),o.a.createElement("span",{className:"text-muted text-small d-block"},o.a.createElement(m.a,{id:"dashboards.unique-visitors"})))),t&&o.a.createElement("div",{className:"btn-group float-right float-none-xs mt-2"},o.a.createElement(n.a,null,o.a.createElement(i.a,{caret:!0,color:"primary",className:"btn-xs",outline:!0},o.a.createElement(m.a,{id:"dashboards.this-week"})),o.a.createElement(c.a,{right:!0},o.a.createElement(d.a,null,o.a.createElement(m.a,{id:"dashboards.last-week"})),o.a.createElement(d.a,null,o.a.createElement(m.a,{id:"dashboards.this-month"})))))),o.a.createElement("div",{className:"chart card-body pt-0"},o.a.createElement(h.a,{shadow:!0,data:p.a})))}}]);
//# sourceMappingURL=channel-details-alt.28d9e5bc.chunk.js.map