(this["webpackJsonpbluedot-client"]=this["webpackJsonpbluedot-client"]||[]).push([[0],{183:function(e,t,c){},184:function(e,t,c){"use strict";c.r(t),c.d(t,"history",(function(){return ye}));var r,s=c(2),a=c(1),n=c.n(a),i=c(68),l=c.n(i),o=c(85),j=c(11),b=c(24),d=c(194),h=function(e){return Object(s.jsx)(d.a,Object(b.a)({className:"layout",direction:"column",align:"center",overflowX:"hidden"},e))},u=c(4),x=c(206),m=c(198),O=c(212),p=c(214),g=function(e){var t=e.onClick;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(p.a,{bg:"primary.700",onClick:t,children:"\ud68c\uc6d0\uac00\uc785/\ub85c\uae34"})})},f=Object(a.memo)(g),w=function(e){return Object(s.jsx)(p.a,{variant:"outline",bg:"primary.500",children:"bluedot"})},v=Object(a.memo)(w),y=c(196),k=c(50),C=function(e){var t=e.children;return Object(s.jsx)(y.b,{listStyleType:"none",marginRight:"20px",children:t})},S=function(e){return Object(s.jsxs)(y.c,{display:"flex",flexGrow:1,children:[Object(s.jsx)(C,{children:Object(s.jsx)(k.a,{to:"/",children:"\ud648"})}),Object(s.jsx)(C,{children:Object(s.jsx)(k.a,{to:"/videos",children:"\ub2f7\ube44\ub514\uc624"})}),Object(s.jsx)(C,{children:Object(s.jsx)(k.a,{to:"/following",children:"\ud314\ub85c\uc6b0"})})]})},F=c(200),z=c(201),B=c(34),A=c(65),T=A.a({email:A.b().matches(/^((?!gmail(?=(.com))).)*$/,{message:"\uad6c\uae00\ub85c \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694",excludeEmptyString:!0}).matches(/^.*((.com)|(.net)|(.site)|(.kr)|(.edu)|(.org)|(.co)|(.xyz))$/,"\uc774\uba54\uc77c\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694").matches(/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)$/,"\uc601\ubb38\uacfc \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694").email("\uc774\uba54\uc77c\ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4").required("\ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4")}),_=c(215),q=function(e){return Object(s.jsx)(_.a,Object(b.a)(Object(b.a)({borderColor:"lightgray"},e),{},{children:e.children}))},M=Object(a.memo)(q),N=c(142),D=c(143),I=function(e){var t=e.name,c="\uad6c\uae00"===t?N.a:D.a;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(p.a,{bg:"white",border:"1px lightgrey solid",w:"100%",color:"dimgrey",fontWeight:"semiregular",fontSize:".9rem",_hover:{background:"custom.subtle"},_active:{background:"custom.subtle"},children:[Object(s.jsx)(m.a,{as:c,mr:"2",mt:"0.5",color:"#1877F2",fontSize:"1.05rem"}),t,"\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uae30"]})})},J=c(199),W=function(e){var t=e.children;return Object(s.jsx)(J.a,{color:"crimson",fontSize:".9rem",m:"0",children:t})},E=function(e){var t=e.setModalMode;return Object(s.jsxs)(O.d,{children:[Object(s.jsx)(O.f,{textAlign:"center",children:"\ub85c\uadf8\uc778\ud558\uae30"}),Object(s.jsx)(O.c,{}),Object(s.jsx)(O.b,{children:Object(s.jsx)(B.c,{initialValues:{email:""},onSubmit:function(e,c){(0,c.setSubmitting)(!1),t(1)},validationSchema:T,children:function(e){var t=e.values,c=e.errors,r=e.isSubmitting;return Object(s.jsx)(B.b,{noValidate:!0,children:Object(s.jsxs)(F.b,{spacing:"3",children:[Object(s.jsx)(m.a,{as:"label",htmlFor:"email",children:"\uc774\uba54\uc77c"}),Object(s.jsx)(M,{as:B.a,type:"email",name:"email",value:t.email,borderColor:c.email?"custom.warn":"lightgrey",focusBorderColor:"primary.800"}),c.email&&Object(s.jsx)(W,{children:c.email}),Object(s.jsx)(p.a,{type:"submit",w:"100%",bg:"custom.cta",color:"white",isDisabled:r||!!c.email,_disabled:{background:"lightgrey"},_hover:{background:"primary.400"},children:"\uc774\uba54\uc77c\ub85c \uc2dc\uc791"}),Object(s.jsx)(z.a,{pt:"3",borderColor:"#aaa"})]})})}})}),Object(s.jsx)(O.e,{display:"unset",children:Object(s.jsxs)(F.b,{children:[Object(s.jsx)(I,{name:"\ud398\uc774\uc2a4\ubd81"}),Object(s.jsx)(I,{name:"\uad6c\uae00"})]})})]})},H=c(202),P=c(203),L=c(213),R=c(204),V=c(205),G=A.a({name:A.b().max(12).required("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),password:A.b().required("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694")}),$=function(e){var t=n.a.useState([!1,!1]),c=Object(u.a)(t,2),r=c[0],a=c[1],i=r.every(Boolean),l=r.some(Boolean)&&!i,o=n.a.useState(!1),j=Object(u.a)(o,2),b=j[0],d=j[1],h=function(){return d(!b)},x=function(e){return a([e.target.checked,e.target.checked])};return Object(s.jsxs)(O.d,{children:[Object(s.jsx)(O.f,{textAlign:"center",children:"\ud68c\uc6d0\uac00\uc785"}),Object(s.jsx)(O.c,{}),Object(s.jsx)(O.b,{children:Object(s.jsx)(B.c,{initialValues:{email:"",name:"",password:"",allowance:[]},onSubmit:function(e,t){var c=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),c(!1)}),200)},validationSchema:G,children:function(e){var t=e.values,c=(e.isSubmitting,e.errors),a=e.touched;return Object(s.jsxs)(B.b,{noValidate:!0,children:[Object(s.jsx)(m.a,{as:"label",htmlFor:"email",children:"\uc774\uba54\uc77c"}),Object(s.jsx)(M,{as:B.a,type:"email",name:"email",value:"ReturnValue@mailCheckAPI.com",border:"none+",focusBorderColor:"transparent",bg:"#eee",isReadOnly:!0}),Object(s.jsx)(m.a,{as:"label",htmlFor:"name",children:"\uc774\ub984"}),Object(s.jsx)(M,{as:B.a,name:"name",id:"name",value:t.name,border:"1px lightgrey solid",focusBorderColor:"primary.800"}),c.name&&a.name&&Object(s.jsx)(W,{children:c.name}),Object(s.jsx)(m.a,{as:"label",htmlFor:"password",children:"\ube44\ubc00\ubc88\ud638"}),Object(s.jsxs)(H.a,{size:"md",children:[Object(s.jsx)(M,{as:B.a,type:b?"text":"password",name:"password",id:"password",pr:"4.5rem",placeholder:"Enter password",border:"1px lightgrey solid",focusBorderColor:"primary.800",value:t.password}),Object(s.jsx)(P.a,{width:"4.5rem",w:"40px",children:Object(s.jsx)(p.a,{size:"sm",p:"0",onMouseDown:h,onMouseUp:h,children:b?Object(s.jsx)(R.a,{}):Object(s.jsx)(V.a,{})})})]}),c.password&&a.password&&Object(s.jsx)(W,{children:c.password}),Object(s.jsxs)(m.a,{mt:5,children:[Object(s.jsx)("label",{children:Object(s.jsx)(B.a,{as:L.a,name:"allowance",type:"checkbox",children:"\uc804\uccb4 \ub3d9\uc758",isChecked:i,isIndeterminate:l,onChange:x,defaultIsChecked:!0,border:"lightgrey"})}),Object(s.jsx)(z.a,{mt:2,borderColor:"#aaa"}),Object(s.jsxs)(F.b,{mt:2,spacing:2,children:[Object(s.jsx)("label",{children:Object(s.jsx)(B.a,{as:L.a,name:"allowance",type:"checkbox",isChecked:r[0],onChange:x,children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\ub3d9\uc758 \ubc0f \uc774\uc6a9 \ub3d9\uc758 (\ud544\uc218)",border:"lightgrey",variantcolor:""})}),Object(s.jsx)("label",{children:Object(s.jsx)(B.a,{as:L.a,name:"allowance",type:"checkbox",isChecked:r[1],onChange:x,children:"\ub9c8\ucf00\ud305 \uc815\ubcf4 \uc774\uc6a9\uc5d0 \uad00\ud55c \ub3d9\uc758",border:"lightgrey"})})]})]}),Object(s.jsx)(O.e,{px:0,children:Object(s.jsx)(p.a,{type:"submit",w:"100%",bg:"custom.cta",color:"white",_disabled:{background:"lightgrey"},_hover:{background:"primary.400"},children:"\uac00\uc785\ud558\uae30"})})]})}})})]})};function K(){var e=Object(x.a)(),t=e.isOpen,c=e.onOpen,n=e.onClose,i=Object(a.useState)(r.mailCheck),l=Object(u.a)(i,2),o=l[0],b=l[1],h=Object(a.useCallback)((function(){b(0),c()}),[c]),p=Object(a.useCallback)((function(e){switch(e){case 0:return Object(s.jsx)(E,{setModalMode:b});case 1:return Object(s.jsx)($,{setModalMode:b});default:return Object(s.jsx)(j.a,{to:"/"})}}),[b]);return Object(s.jsx)(m.a,{className:"nav-wrapper",as:"nav",p:".5rem",color:"white",w:"100vw",bg:"rgba(0,0,0,.3)",pos:"fixed",userSelect:"none",zIndex:"2",style:{backdropFilter:"blur(5px)"},children:Object(s.jsxs)(d.a,{className:"nav-container",align:"center",justify:"space-between",w:["90vw","96vw"],m:"auto",children:[Object(s.jsx)(v,{}),Object(s.jsx)(S,{}),Object(s.jsx)(f,{onClick:h}),t&&Object(s.jsxs)(O.a,{blockScrollOnMount:!0,closeOnOverlayClick:!0,isOpen:t,onClose:n,isCentered:!0,preserveScrollBarGap:!0,closeOnEsc:!0,children:[Object(s.jsx)(O.g,{}),p(o)]})]})})}!function(e){e[e.mailCheck=0]="mailCheck",e[e.signIn=1]="signIn"}(r||(r={}));var Q=c(102),U=c.n(Q),Z=(c(129),c(130),function(){return Object(s.jsx)(m.a,{as:"section",children:Object(s.jsxs)(y.a,Object(b.a)(Object(b.a)({as:U.a,w:"100vw",h:"56.2vw",maxH:"420px"},{dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:2500}),{},{bg:"rgba(255, 208, 122, 0.323)",children:[Object(s.jsx)(m.a,{as:"li",listStyleType:"none",bg:"url(https://static.wanted.co.kr/images/newintro/main_kr_mobile.jpg)",backgroundSize:"cover",bgPos:"50%",bgRepeat:"no-repeat",w:"100vw",h:"56.2vw",maxH:"420px",pos:"relative",children:Object(s.jsxs)(m.a,{pos:"absolute",bottom:"20%",left:"60%",w:"35vw",bg:"custom.subtle",children:[Object(s.jsx)(m.a,{as:"h3",fontSize:"1.6rem",children:"\ub2f7\ube44\ub514\uc624"}),Object(s.jsx)(m.a,{as:"p",fontSize:"1rem",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora dolores voluptatum fugit repellendus, numquam quos!"})]})}),Object(s.jsx)(m.a,{bg:"url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)",backgroundSize:"cover",bgPos:"50%",bgRepeat:"no-repeat",w:"100vw",h:"56.2vw",maxH:"420px",pos:"relative",children:Object(s.jsxs)(m.a,{pos:"absolute",bottom:"20%",left:"60%",w:"35vw",bg:"custom.subtle",children:[Object(s.jsx)(m.a,{as:"h3",fontSize:"1.6rem",children:"\ub2f7\ube44\ub514\uc624"}),Object(s.jsx)(m.a,{as:"p",fontSize:"1rem",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora dolores voluptatum fugit repellendus, numquam quos!"})]})})]}))})}),X=(c(183),function(e){return Object(s.jsxs)(m.a,{as:"section",w:"90vw",padding:"20px 0",className:"user-carousel",children:[Object(s.jsxs)(m.a,{as:"h2",children:[Object(s.jsx)(J.a,{d:"inline-block",mr:"1rem",children:"\uc544\ud2f0\uc2a4\ud2b8 \uc18c\uac1c"}),Object(s.jsx)(k.a,{to:"/artists",style:{fontSize:".5rem"},children:"\uc804\uccb4 \ubcf4\uae30"})]}),Object(s.jsx)(y.a,Object(b.a)(Object(b.a)({as:U.a,p:"12px"},{className:"slider variable-width",dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,variableWidth:!0}),{},{children:Array(20).fill(null).map((function(e,t){return Object(s.jsxs)(m.a,{d:"flex",align:"center",pr:"12px",children:[Object(s.jsx)("div",{className:"carousel-item",style:{border:"1px solid blue",color:"white",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTATsQ5Hr_2CJV2TKSo-Py7vjwJ-FGbDncW7A&usqp=CAU)",width:90,height:90,backgroundSize:"cover",transition:".2s .6s"}}),Object(s.jsx)("h1",{children:"".concat(t).repeat(2)})]},t)}))}))]})}),Y=function(e){return Object(s.jsxs)(m.a,{as:"section",border:"2px solid crimson",w:"90vw",children:[Object(s.jsx)("h2",{children:"\uc7a5\ub974\ubcc4 \uc544\ud2f0\uc2a4\ud2b8 \uac8c\uc2dc\ubb3c"}),Object(s.jsxs)(y.a,{children:[Object(s.jsx)(y.b,{children:"\uc804\uccb4"}),Object(s.jsx)(y.b,{children:"\uc74c\uc545"}),Object(s.jsx)(y.b,{children:"\ub4dc\uc7cc"})]}),Object(s.jsxs)(y.a,{children:[Object(s.jsx)(y.b,{children:"\ubb34\ud55c"}),Object(s.jsx)(y.b,{children:"\xdf"}),Object(s.jsx)(y.b,{children:"KK"})]})]})},ee=function(){return Object(s.jsxs)(h,{children:[Object(s.jsx)(K,{}),Object(s.jsx)(Z,{}),Object(s.jsx)(X,{}),Object(s.jsx)(Y,{})]})},te=function(){return Object(s.jsxs)("section",{style:{textAlign:"center"},children:[Object(s.jsx)("h1",{children:"\uc800\ub7f0..! \ud398\uc774\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(s.jsx)("a",{href:"/",children:"\ud648\uc73c\ub85c\uac00\uae30"})]})},ce=c(145),re=c(207),se=c(208),ae=c(209),ne=c(210),ie=c(216),le=function(e){var t=Object(a.useState)(!0),c=Object(u.a)(t,2),r=c[0];c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(K,{}),Object(s.jsxs)(m.a,{className:"profile-cover_img",pos:"relative",children:[Object(s.jsx)(re.a,{minH:"100px",ratio:16/3,children:Object(s.jsx)(se.a,{src:"https://images.unsplash.com/photo-1531481517150-2228446fb6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"})}),Object(s.jsx)(p.a,{pos:"absolute",size:"sm",bottom:"10%",right:"5%",children:"\ud3b8\uc9d1"})]}),Object(s.jsxs)(ae.a,{maxW:"lg",children:[Object(s.jsx)(m.a,{p:"4",children:Object(s.jsxs)(d.a,{justify:"space-between",wrap:"wrap",children:[Object(s.jsxs)(m.a,{flex:"1",children:[Object(s.jsxs)(d.a,{children:[Object(s.jsx)(ne.a,{mr:"10px"}),Object(s.jsxs)(m.a,{w:"100%",pos:"relative",children:[Object(s.jsxs)(d.a,{direction:"column",h:"100%",children:[Object(s.jsx)(J.a,{children:"\ub370\uc774\ubbf8\uc5b8 \ub8e8\uc774\uc2a4"}),Object(s.jsx)(J.a,{color:"custom.subText",children:"\uc2f1\uc5b4\uc1a1\ub77c\uc774\ud130, \uc2dc\uc778"}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)("span",{children:"\ud314\ub85c"}),Object(s.jsx)("span",{children:"20"}),Object(s.jsx)("span",{children:"\ub2f7\ube44\ub514\uc624"}),Object(s.jsx)("span",{children:"21"})]})]}),r&&Object(s.jsx)(p.a,{pos:"absolute",right:"0",top:"0",children:"\ud504\ub85c\ud544 \uad00\ub9ac"})]})]}),Object(s.jsx)(J.a,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium officia delectus veritvoluptates neque ullam iure, ipsa adipisci!"})]}),Object(s.jsx)(m.a,{flex:"1",m:"0 10px",children:Object(s.jsx)("video",{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"})})]})}),Object(s.jsxs)(ae.a,{bg:"yellow.300",className:"artist-posts",children:[Object(s.jsxs)(m.a,{className:"tab-menu",children:[Object(s.jsx)(p.a,{as:"h3",children:"\uac8c\uc2dc\ubb3c"}),Object(s.jsx)(p.a,{as:"h3",children:"\ub2f7\ube44\ub514\uc624"})]}),Object(s.jsx)(ie.a,{bg:"violet.100",as:"ul",minChildWidth:"120px",spacing:"10px",children:Array(12).fill(null).map((function(e,t){return Object(s.jsx)(y.b,{d:"inline",bg:"cyan.200",children:t})}))})]})]})]})},oe=function(){return Object(s.jsx)(ce.ErrorBoundary,{FallbackComponent:te,children:Object(s.jsx)(o.a,{history:ye,children:Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{path:"/profile",component:le}),Object(s.jsx)(j.b,{path:"/",component:ee})]})})})},je=c(211),be=c(186),de=c(148),he=Object(b.a)(Object(b.a)({},de.b),{},{styles:Object(b.a)(Object(b.a)({},de.b.styles),{},{global:{body:{color:"#181818"},h2:{}}}),colors:Object(b.a)(Object(b.a)({},de.b.colors),{},{primary:{100:"#CFD1FD",200:"#A7ABFB",300:"#8388F9",400:"#6268F8",500:"#444BF7",600:"#262EF6",700:"#0B14F5",800:"#0911DD",900:"#080FC7"},basicBlack:"#181818",custom:{warn:"#ff4747",cta:"#0000FF",subtle:"#f1f1f1",subText:"#aaa"}})}),ue=function(){return Object(s.jsxs)(je.a,{theme:he,resetCSS:!0,children:[Object(s.jsx)(be.a,{}),Object(s.jsx)(oe,{})]})},xe=c(88),me=c(31);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,217)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),r(e),s(e),a(e),n(e)}))},pe=c(53),ge=c(147),fe=c(131),we=function(e){return Object(pe.combineReducers)({router:Object(o.b)(e)})},ve=function(e){return Object(pe.createStore)(we(e),Object(ge.composeWithDevTools)(Object(pe.applyMiddleware)(Object(fe.a)(e))))},ye=Object(me.a)(),ke=ve(ye);l.a.render(Object(s.jsx)(a.StrictMode,{children:Object(s.jsx)(xe.a,{store:ke,children:Object(s.jsx)(ue,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Oe()}},[[184,1,2]]]);
//# sourceMappingURL=main.eb6a008f.chunk.js.map