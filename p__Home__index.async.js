"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{89916:function(U,B,e){e.r(B),e.d(B,{default:function(){return x}});var j=e(21612),i=e(92820),I=i.Z,O=e(46930),y=e(67294),H={title:"title___xIGPY"},s=e(85893),L=function(f){var R=f.name;return(0,s.jsx)(j.Z,{children:(0,s.jsx)(I,{children:(0,s.jsxs)(O.Z.Title,{level:3,className:H.title,children:["\u6B22\u8FCE\u4F7F\u7528 ",(0,s.jsx)("strong",{children:R})," \uFF01"]})})})},N=L,S=N,b=e(5251),P=e(44520),u=e(9927),c={container:"container___ulS8A"},v=function(){var f=(0,u.useModel)("global"),R=f.name;return(0,s.jsx)(P._z,{ghost:!0,children:(0,s.jsx)("div",{className:c.container,children:(0,s.jsx)(S,{name:(0,b.fy)(R)})})})},x=v},5251:function(U,B,e){e.d(B,{I6:function(){return N},fy:function(){return s},ut:function(){return L}});var j=e(27424),i=e.n(j),I=e(74704),O=e.n(I),y=e(96486),H=e.n(y);function s(S){return S.trim()}var L=function(b){var P=(0,y.entries)(b),u={},c=O()(P),v;try{for(c.s();!(v=c.n()).done;){var x=v.value;x[1]===""&&(u[x[0]]=x[1])}}catch(f){c.e(f)}finally{c.f()}var p=(0,y.entries)(u).length;return{res:u,len:p}},N=function(b){return(0,y.map)((0,y.entries)(b),function(P){var u=i()(P,2),c=u[0],v=u[1];return c})}},21612:function(U,B,e){e.d(B,{Z:function(){return Q}});var j=e(74902),i=e(67294),I=e(94184),O=e.n(I),y=e(98423),H=e(53124),s=e(82401),L=e(50344),N=e(25908);function S(r,a,t){return typeof t=="boolean"?t:r.length?!0:(0,L.Z)(a).some(n=>n.type===N.Z)}var b=e(67968),u=r=>{const{componentCls:a,bodyBg:t,lightSiderBg:o,lightTriggerBg:n,lightTriggerColor:l}=r;return{[`${a}-sider-light`]:{background:o,[`${a}-sider-trigger`]:{color:l,background:n},[`${a}-sider-zero-width-trigger`]:{color:l,background:n,border:`1px solid ${t}`,borderInlineStart:0}}}};const c=r=>{const{antCls:a,componentCls:t,colorText:o,triggerColor:n,footerBg:l,triggerBg:h,headerHeight:d,headerPadding:g,headerColor:C,footerPadding:D,triggerHeight:E,zeroTriggerHeight:F,zeroTriggerWidth:z,motionDurationMid:A,motionDurationSlow:m,fontSize:$,borderRadius:T,bodyBg:W,headerBg:Z,siderBg:_}=r;return{[t]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:W,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-sider`]:{position:"relative",minWidth:0,background:_,transition:`all ${A}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:E},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:E,color:n,lineHeight:`${E}px`,textAlign:"center",background:h,cursor:"pointer",transition:`all ${A}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:d,insetInlineEnd:-z,zIndex:1,width:z,height:F,color:n,fontSize:r.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:_,borderStartStartRadius:0,borderStartEndRadius:T,borderEndEndRadius:T,borderEndStartRadius:0,cursor:"pointer",transition:`background ${m} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${m}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-z,borderStartStartRadius:T,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:T}}}}},u(r)),{"&-rtl":{direction:"rtl"}}),[`${t}-header`]:{height:d,padding:g,color:C,lineHeight:`${d}px`,background:Z,[`${a}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:D,color:o,fontSize:$,background:l},[`${t}-content`]:{flex:"auto",minHeight:0}}};var v=(0,b.Z)("Layout",r=>[c(r)],r=>{const{colorBgLayout:a,controlHeight:t,controlHeightLG:o,colorText:n,controlHeightSM:l,marginXXS:h,colorTextLightSolid:d,colorBgContainer:g}=r,C=o*1.25;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140",bodyBg:a,headerBg:"#001529",headerHeight:t*2,headerPadding:`0 ${C}px`,headerColor:n,footerPadding:`${l}px ${C}px`,footerBg:a,siderBg:"#001529",triggerHeight:o+h*2,triggerBg:"#002140",triggerColor:d,zeroTriggerWidth:o,zeroTriggerHeight:o,lightSiderBg:g,lightTriggerBg:g,lightTriggerColor:n}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),x=function(r,a){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&a.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t};function p(r){let{suffixCls:a,tagName:t,displayName:o}=r;return n=>i.forwardRef((h,d)=>i.createElement(n,Object.assign({ref:d,suffixCls:a,tagName:t},h)))}const f=i.forwardRef((r,a)=>{const{prefixCls:t,suffixCls:o,className:n,tagName:l}=r,h=x(r,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=i.useContext(H.E_),g=d("layout",t),[C,D]=v(g),E=o?`${g}-${o}`:g;return C(i.createElement(l,Object.assign({className:O()(t||E,n,D),ref:a},h)))}),R=i.forwardRef((r,a)=>{const{direction:t}=i.useContext(H.E_),[o,n]=i.useState([]),{prefixCls:l,className:h,rootClassName:d,children:g,hasSider:C,tagName:D,style:E}=r,F=x(r,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),z=(0,y.Z)(F,["suffixCls"]),{getPrefixCls:A,layout:m}=i.useContext(H.E_),$=A("layout",l),T=S(o,g,C),[W,Z]=v($),_=O()($,{[`${$}-has-sider`]:T,[`${$}-rtl`]:t==="rtl"},m==null?void 0:m.className,h,d,Z),k=i.useMemo(()=>({siderHook:{addSider:G=>{n(K=>[].concat((0,j.Z)(K),[G]))},removeSider:G=>{n(K=>K.filter(q=>q!==G))}}}),[]);return W(i.createElement(s.V.Provider,{value:k},i.createElement(D,Object.assign({ref:a,className:_,style:Object.assign(Object.assign({},m==null?void 0:m.style),E)},z),g)))}),X=p({tagName:"div",displayName:"Layout"})(R),V=p({suffixCls:"header",tagName:"header",displayName:"Header"})(f),w=p({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(f),Y=p({suffixCls:"content",tagName:"main",displayName:"Content"})(f);var J=X;const M=J;M.Header=V,M.Footer=w,M.Content=Y,M.Sider=N.Z;var Q=M}}]);
