(this.webpackJsonpstudio_v2=this.webpackJsonpstudio_v2||[]).push([[8],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(2),n=a.n(s),l=a(239);class i extends n.a.Component{componentDidMount(){this.player=Object(l.a)(this.videoNode,this.props,(function(){}))}componentWillUnmount(){this.player&&this.player.dispose()}render(){return n.a.createElement("div",null,n.a.createElement("div",{"data-vjs-player":!0},n.a.createElement("video",{ref:e=>this.videoNode=e,poster:"/assets/img/detail-1.jpg",className:this.props.className||""})))}}},196:function(e,t){},197:function(e,t){},526:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var s=a(2),n=a.n(s),l=a(296),i=a(128),c=a(206),r=a(361),m=a(58),o=a(57),d=a(61),h=a(182),p=a.n(h),u=(a(183),a(69)),g=a(556),E=a(64);class b extends s.Component{constructor(e){super(),this.toggle=()=>{this.setState(e=>({tooltipOpen:!e.tooltipOpen}))},this.changeMode=()=>{this.setState(e=>({switchChecked:!e.switchChecked}))},this.state={switchChecked:!1,tooltipOpen:!1}}render(){const e=this.props,t=e.match,a=e.heading;return n.a.createElement(l.a,null,n.a.createElement(d.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(o.a,{id:a})),n.a.createElement("div",{className:"text-zero top-right-button-container float-right"},n.a.createElement("div",{className:"d-flex align-middle p-2 channel-settings-wrap"},n.a.createElement(o.a,{id:"\ucc44\ub110\uc0c1\ud0dc"}),n.a.createElement(p.a,{id:"Channel-Tooltip-Switch",className:"custom-switch custom-switch-primary custom-switch-small",checked:this.state.switchChecked,onChange:this.changeMode}),n.a.createElement(g.a,{placement:"top",isOpen:this.state.tooltipOpen,target:"Channel-Tooltip-Switch",toggle:this.toggle},this.state.switchChecked?"\uacf5\uac1c":"\ube44\uacf5\uac1c"))),n.a.createElement(E.a,{match:t})),n.a.createElement(d.b,{className:"mb-5"})))}}var f=Object(u.d)(b),v=a(362),N=a.n(v);a(363);class x extends s.Component{constructor(e){super(e),this.handleTagChange=e=>{this.setState({tags:e})},this.state={tags:[]}}render(){const e=this.props.intl.messages;return n.a.createElement(N.a,{value:this.state.tags,onChange:this.handleTagChange,inputProps:{placeholder:e["pages.tags"]}})}}var C=Object(u.d)(x),y=a(130),w=a(364);class k extends s.Component{constructor(e){super(e),this.onThumbClick=this.onThumbClick.bind(this),this.state={photoIndex:0,isOpen:!1}}onThumbClick(){this.setState({isOpen:!0})}render(){const e=this.state.isOpen;return n.a.createElement(s.Fragment,null,n.a.createElement(m.b,{to:"#",location:{},onClick:()=>this.onThumbClick()},n.a.createElement("img",{src:this.props.thumb,alt:"thumbnail",className:this.props.className})),e&&n.a.createElement(w.a,{mainSrc:this.props.large,onCloseRequest:()=>this.setState({isOpen:!1})}))}}var O=k;class S extends s.Component{constructor(e){super(e),this.state={data:{type:"video",name:"Mayra Sibley",date:"10 minutes ago",profilePic:"/assets/img/profile-pic-l.jpg",detail:"I\u2019m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.",image:"/assets/img/detail-5.jpg",video:"http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4"}},this.renderContent=this.renderContent.bind(this)}renderContent(){return"image"===this.state.data.type?n.a.createElement(O,{thumb:this.state.data.image,large:this.state.data.image,className:"social-header card-img"}):"video"===this.state.data.type?n.a.createElement(y.a,{autoplay:!1,controls:!0,className:"social-header video-js card-img video-content",poster:this.state.data.image,sources:[{src:this.state.data.video,type:"video/mp4"}]}):void 0}render(){const e=this.props.match;return n.a.createElement(s.Fragment,null,n.a.createElement(f,{heading:"menu.channel",match:e}),n.a.createElement(l.a,null,n.a.createElement(d.a,{xxs:"12",className:"mb-5"},n.a.createElement(i.a,null,this.renderContent())),n.a.createElement(d.a,{xxs:"12",className:"col-left"},n.a.createElement(O,{thumb:this.state.data.profilePic,large:this.state.data.profilePic,className:"img-thumbnail card-img social-profile-img"}),n.a.createElement(i.a,{className:"mb-4"},n.a.createElement(c.a,null,n.a.createElement("div",{className:"text-center pt-4"},n.a.createElement("p",{className:"list-item-heading pt-2"},this.state.data.name)),n.a.createElement("p",{className:"text-muted text-small mb-2"},n.a.createElement(o.a,{id:"\ud06c\ub9ac\ub808\uc774\ud130 \uc18c\uac1c (\uc57d\ub825 \ub4f1)"})),n.a.createElement(r.a,{className:"form-control mb-3",type:"textarea",name:"text",id:"exampleText",defaultValue:this.state.data.detail}),n.a.createElement("p",{className:"text-muted text-small mb-2"},n.a.createElement(o.a,{id:"pages.tags"})),n.a.createElement(C,null),n.a.createElement("p",{className:"text-muted text-small mt-3 mb-2"},n.a.createElement(o.a,{id:"menu.contact"})),n.a.createElement("div",{className:"social-icons"},n.a.createElement("ul",{className:"list-unstyled list-inline"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement(m.b,{to:"#"},n.a.createElement("i",{className:"simple-icon-social-facebook"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement(m.b,{to:"#"},n.a.createElement("i",{className:"simple-icon-social-twitter"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement(m.b,{to:"#"},n.a.createElement("i",{className:"simple-icon-social-instagram"}))))))))))}}},64:function(e,t,a){"use strict";var s=a(2),n=a.n(s),l=a(93),i=a(94),c=a(58),r=a(57);const m=e=>n.a.createElement(r.a,{id:"menu.".concat(e)}),o=(e,t,a)=>0===a?"":e.split(t)[0]+t,d=({match:e})=>{console.log(e);const t=e.path.substr(1);let a=t.split("/");return e.path.includes("/studio/class")?a=a.filter(e=>-1===e.indexOf("classes")):a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),console.log(a),n.a.createElement(s.Fragment,null,n.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,s)=>n.a.createElement(i.a,{key:s,active:a.length===s+1},a.length!==s+1?n.a.createElement(c.b,{to:"/"+o(t,e,s)},m(e)):m(e)))))};t.a=({heading:e,match:t})=>n.a.createElement(s.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(r.a,{id:e})),n.a.createElement(d,{match:t}))}}]);
//# sourceMappingURL=channel.7e6c2f11.chunk.js.map