"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{81146:function(Z,h,e){e.r(h),e.d(h,{default:function(){return I}});var c=e(21612),i=e(71230),E=e(97689),N=e(67294),$={title:"title___xIGPY"},s=e(85893),x=function(m){var v=m.name;return(0,s.jsx)(c.Z,{children:(0,s.jsx)(i.Z,{children:(0,s.jsxs)(E.Z.Title,{level:3,className:$.title,children:["\u6B22\u8FCE\u4F7F\u7528 ",(0,s.jsx)("strong",{children:v})," \uFF01"]})})})},p=x,S=p,H=e(5251),T=e(33904),K=e(9927),M={container:"container___ulS8A"},D=function(){var m=(0,K.useModel)("global"),v=m.name;return(0,s.jsx)(T._z,{ghost:!0,children:(0,s.jsx)("div",{className:M.container,children:(0,s.jsx)(S,{name:(0,H.fy)(v)})})})},I=D},5251:function(Z,h,e){e.d(h,{I6:function(){return $},fy:function(){return E},ut:function(){return N}});var c=e(96486),i=e.n(c);function E(s){return s.trim()}var N=function(x){var p=(0,c.pickBy)(x,function(H,T){return H===""}),S=(0,c.size)(p);return{res:p,len:S}},$=function(x){return(0,c.keys)(x)}},21612:function(Z,h,e){e.d(h,{Z:function(){return Q}});var c=e(74902),i=e(67294),E=e(94184),N=e.n(E),$=e(98423),s=e(53124),x=e(82401),p=e(50344),S=e(25908);function H(r,a,t){return typeof t=="boolean"?t:r.length?!0:(0,p.Z)(a).some(n=>n.type===S.Z)}var T=e(67968),M=r=>{const{componentCls:a,bodyBg:t,lightSiderBg:o,lightTriggerBg:n,lightTriggerColor:l}=r;return{[`${a}-sider-light`]:{background:o,[`${a}-sider-trigger`]:{color:l,background:n},[`${a}-sider-zero-width-trigger`]:{color:l,background:n,border:`1px solid ${t}`,borderInlineStart:0}}}};const D=r=>{const{antCls:a,componentCls:t,colorText:o,triggerColor:n,footerBg:l,triggerBg:u,headerHeight:d,headerPadding:g,headerColor:y,footerPadding:P,triggerHeight:C,zeroTriggerHeight:A,zeroTriggerWidth:j,motionDurationMid:R,motionDurationSlow:f,fontSize:b,borderRadius:B,bodyBg:F,headerBg:G,siderBg:z}=r;return{[t]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:F,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-sider`]:{position:"relative",minWidth:0,background:z,transition:`all ${R}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:C},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:C,color:n,lineHeight:`${C}px`,textAlign:"center",background:u,cursor:"pointer",transition:`all ${R}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:d,insetInlineEnd:-j,zIndex:1,width:j,height:A,color:n,fontSize:r.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:z,borderStartStartRadius:0,borderStartEndRadius:B,borderEndEndRadius:B,borderEndStartRadius:0,cursor:"pointer",transition:`background ${f} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${f}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-j,borderStartStartRadius:B,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:B}}}}},M(r)),{"&-rtl":{direction:"rtl"}}),[`${t}-header`]:{height:d,padding:g,color:y,lineHeight:`${d}px`,background:G,[`${a}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:P,color:o,fontSize:b,background:l},[`${t}-content`]:{flex:"auto",minHeight:0}}};var I=(0,T.Z)("Layout",r=>[D(r)],r=>{const{colorBgLayout:a,controlHeight:t,controlHeightLG:o,colorText:n,controlHeightSM:l,marginXXS:u,colorTextLightSolid:d,colorBgContainer:g}=r,y=o*1.25;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140",bodyBg:a,headerBg:"#001529",headerHeight:t*2,headerPadding:`0 ${y}px`,headerColor:n,footerPadding:`${l}px ${y}px`,footerBg:a,siderBg:"#001529",triggerHeight:o+u*2,triggerBg:"#002140",triggerColor:d,zeroTriggerWidth:o,zeroTriggerHeight:o,lightSiderBg:g,lightTriggerBg:g,lightTriggerColor:n}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),L=function(r,a){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&a.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t};function m(r){let{suffixCls:a,tagName:t,displayName:o}=r;return n=>i.forwardRef((u,d)=>i.createElement(n,Object.assign({ref:d,suffixCls:a,tagName:t},u)))}const v=i.forwardRef((r,a)=>{const{prefixCls:t,suffixCls:o,className:n,tagName:l}=r,u=L(r,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=i.useContext(s.E_),g=d("layout",t),[y,P]=I(g),C=o?`${g}-${o}`:g;return y(i.createElement(l,Object.assign({className:N()(t||C,n,P),ref:a},u)))}),U=i.forwardRef((r,a)=>{const{direction:t}=i.useContext(s.E_),[o,n]=i.useState([]),{prefixCls:l,className:u,rootClassName:d,children:g,hasSider:y,tagName:P,style:C}=r,A=L(r,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),j=(0,$.Z)(A,["suffixCls"]),{getPrefixCls:R,layout:f}=i.useContext(s.E_),b=R("layout",l),B=H(o,g,y),[F,G]=I(b),z=N()(b,{[`${b}-has-sider`]:B,[`${b}-rtl`]:t==="rtl"},f==null?void 0:f.className,u,d,G),q=i.useMemo(()=>({siderHook:{addSider:W=>{n(k=>[].concat((0,c.Z)(k),[W]))},removeSider:W=>{n(k=>k.filter(_=>_!==W))}}}),[]);return F(i.createElement(x.V.Provider,{value:q},i.createElement(P,Object.assign({ref:a,className:z,style:Object.assign(Object.assign({},f==null?void 0:f.style),C)},j),g)))}),X=m({tagName:"div",displayName:"Layout"})(U),V=m({suffixCls:"header",tagName:"header",displayName:"Header"})(v),w=m({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(v),Y=m({suffixCls:"content",tagName:"main",displayName:"Content"})(v);var J=X;const O=J;O.Header=V,O.Footer=w,O.Content=Y,O.Sider=S.Z;var Q=O},71230:function(Z,h,e){var c=e(92820);h.Z=c.Z}}]);