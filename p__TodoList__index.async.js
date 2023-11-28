"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[130],{55750:function(Yo,q,a){a.r(q),a.d(q,{default:function(){return Fo}});var lo=a(27424),U=a.n(lo),uo=a(42122),i=a.n(uo),so=a(861),oo=a.n(so),to=a(55375),F=function(g){return g.TODO_LIST_ATOM="TODO_LIST_ATOM",g.NOT_DONE_TODO_LIST_ATOM_SELECTOR="NOT_DONE_TODO_LIST_ATOM_SELECTOR",g.DONE_TODO_LIST_ATOM_SELECTOR="DONE_TODO_LIST_ATOM_SELECTOR",g.CUR_TODO_LIST_ATOM_SELECTOR="CUR_TODO_LIST_ATOM_SELECTOR",g.CUR_ACTIVE_CATEGORY_DETAIL_SELECTOR="CUR_ACTIVE_CATEGORY_DETAIL_SELECTOR",g}({}),B=a(59731),y=a(22638),vo=a(69483),V=a.n(vo),C=a(96486),j=a(67294),I=a(4480),P=(0,I.cn)({key:F.TODO_LIST_ATOM,default:{isLoading:!1,todoList:[],categoryInfo:{curCategoryId:"",categoryList:[{id:"",title:"\u9ED8\u8BA4\u8BA1\u5212"}]}}}),co=(0,I.nZ)({key:F.DONE_TODO_LIST_ATOM_SELECTOR,get:function(r){var v=r.get,n=v(P),c=n.todoList,d=n.categoryInfo;return(0,C.filter)(c,function(t){return(t==null?void 0:t.done)&&(d==null?void 0:d.curCategoryId)===((t==null?void 0:t.categoryId)||"")})}}),fo=(0,I.nZ)({key:F.NOT_DONE_TODO_LIST_ATOM_SELECTOR,get:function(r){var v=r.get,n=v(P),c=n.todoList,d=n.categoryInfo;return(0,C.filter)(c,function(t){return!(t!=null&&t.done)&&(d==null?void 0:d.curCategoryId)===((t==null?void 0:t.categoryId)||"")})}}),go=(0,I.nZ)({key:F.CUR_TODO_LIST_ATOM_SELECTOR,get:function(r){var v=r.get,n=v(P),c=n.todoList,d=n.categoryInfo;return(0,C.filter)(c,function(t){return(d==null?void 0:d.curCategoryId)===((t==null?void 0:t.categoryId)||"")})}}),To=(0,I.nZ)({key:F.CUR_ACTIVE_CATEGORY_DETAIL_SELECTOR,get:function(r){var v=r.get,n=v(P),c=n.categoryInfo;return(0,C.find)(c==null?void 0:c.categoryList,function(d){return(d==null?void 0:d.id)===(c==null?void 0:c.curCategoryId)})}}),yo=function(){var r=(0,I.FV)(P),v=U()(r,2),n=v[0],c=n.isLoading,d=n.todoList,t=n.categoryInfo,f=v[1],O=(0,I.sJ)(co),D=(0,I.sJ)(fo),E=(0,I.sJ)(go),S=(0,I.sJ)(To),h=(0,y.Z)(function(l){V().setItem(B.F.TODO_LIST_KEY,l)}),p=(0,y.Z)(function(l){V().setItem(B.F.TODO_CATEGORY_INFO_KEY,l)}),R=(0,y.Z)(function(l){var u=[].concat(oo()(d),[{id:"".concat(to.Xt).concat(new Date().getTime()),title:"",content:"",seq:"",done:!1,note:"",categoryId:l||""}]);f(function(o){return i()(i()({},o),{},{todoList:u})}),h(u)}),G=(0,y.Z)(function(l){var u=(0,C.filter)(d,function(o){return(o==null?void 0:o.id)!==l});f(function(o){return i()(i()({},o),{},{todoList:u})}),h(u)}),M=(0,y.Z)(function(l){var u=(0,C.filter)(d,function(o){return(o==null?void 0:o.categoryId)!==l});f(function(o){return i()(i()({},o),{},{todoList:u})}),h(u)}),Z=(0,y.Z)(function(l){var u=l.id,o=(0,C.map)(d,function(s){return(s==null?void 0:s.id)===u?i()(i()({},s),l):s});f(function(s){return i()(i()({},s),{},{todoList:o})}),h(o)}),z=(0,y.Z)(function(){var l=i()(i()({},t),{},{categoryList:[].concat(oo()((t==null?void 0:t.categoryList)||[]),[{id:"".concat(to.Yy).concat(new Date().getTime()),title:"\u65B0\u7684\u8BA1\u5212"}])});f(function(u){return i()(i()({},u),{},{categoryInfo:l})}),p(l)}),$=(0,y.Z)(function(l){if(l){var u,o=(0,C.findIndex)(t==null?void 0:t.categoryList,function(A){return(A==null?void 0:A.id)===l}),s=o===-1?"":(t==null||(u=t.categoryList[o-1])===null||u===void 0?void 0:u.id)||"",T=l!==(t==null?void 0:t.curCategoryId)?t==null?void 0:t.curCategoryId:s,Po=(0,C.filter)(t==null?void 0:t.categoryList,function(A){return(A==null?void 0:A.id)!==l}),ro=i()(i()({},t),{},{curCategoryId:T,categoryList:Po});f(function(A){return i()(i()({},A),{},{categoryInfo:ro})}),p(ro),M(l)}}),b=(0,y.Z)(function(l){var u=l.id,o=(0,C.map)(t==null?void 0:t.categoryList,function(T){return(T==null?void 0:T.id)===u?i()(i()({},T),l):T}),s=i()(i()({},t),{},{categoryList:o});f(function(T){return i()(i()({},T),{},{categoryInfo:s})}),p(s)}),_=(0,y.Z)(function(l){var u=i()(i()({},t),{},{curCategoryId:l});f(function(o){return i()(i()({},o),{},{categoryInfo:u})}),p(u)});return(0,j.useEffect)(function(){f(function(o){return i()(i()({},o),{},{isLoading:!0})});var l=V().getItem(B.F.TODO_CATEGORY_INFO_KEY).then(function(o){o&&f(function(s){return i()(i()({},s),{},{categoryInfo:o})})}),u=V().getItem(B.F.TODO_LIST_KEY).then(function(o){o&&f(function(s){return i()(i()({},s),{},{todoList:o})})});Promise.all([l,u]).finally(function(){f(function(o){return i()(i()({},o),{},{isLoading:!1})})})},[]),{isLoading:c,todoList:d,curTodoList:E,doneTodoList:O,notDoneTodoList:D,categoryInfo:t,curActiveCategoryDetail:S,handleAddTodoItem:R,handleRemoveTodoItem:G,handleUpdateTodoItem:Z,handleAddCategory:z,handleRemoveCategory:$,handleUpdateCategory:b,handleClickCategory:_}},Co=a(48689),ho=a(55914),Lo=a(77554),J=a(97689),k=a(71230),m=a(15746),Oo=a(56616),K=a(68916),W=a(67759),po=a(88942),N={"todo-item-wrapper":"todo-item-wrapper___tVFjc","check-box":"check-box___YMuVz",title:"title___yALYU",content:"content___MGx0F","delete-icon":"delete-icon___ZYcin"},e=a(85893),Io=J.Z.Title,xo=J.Z.Paragraph,Do=function(r){var v=r.index,n=r.todoListItem,c=r.onUpdateItem,d=r.onRemoveItem,t=(0,j.useState)(!1),f=U()(t,2),O=f[0],D=f[1],E=(0,j.useRef)(null),S=(0,po.Z)(),h=U()(S,1),p=h[0],R=function(){setTimeout(function(){return D(!0)})},G=(0,y.Z)(function(){O&&D(!1)}),M=(0,C.debounce)(function(Z,z){c(i()({id:n==null?void 0:n.id},Z))},200);return(0,ho.Z)(G,E),(0,Lo.Z)(["enter","esc"],function(){O&&D(!1)}),O?(0,e.jsx)("div",{className:N["todo-item-wrapper"],ref:E,children:(0,e.jsxs)(K.Z,{form:p,initialValues:{title:(n==null?void 0:n.title)||"",content:(n==null?void 0:n.content)||""},onValuesChange:M,children:[(0,e.jsx)(K.Z.Item,{name:"title",label:"\u6807\u9898",children:(0,e.jsx)(W.Z,{})}),(0,e.jsx)(K.Z.Item,{name:"content",label:"\u5185\u5BB9",children:(0,e.jsx)(W.Z,{})})]})}):(0,e.jsx)(J.Z,{className:N["todo-item-wrapper"],children:(0,e.jsxs)(k.Z,{align:"middle",children:[(0,e.jsx)(m.Z,{style:{flex:"none"},children:(0,e.jsx)("div",{className:N["check-box"],children:(0,e.jsx)(Oo.Z,{checked:n==null?void 0:n.done,onChange:function(){return c({id:n==null?void 0:n.id,done:!(n!=null&&n.done)})}})})}),(0,e.jsxs)(m.Z,{style:{flex:"1"},children:[(0,e.jsxs)(Io,{className:N.title,level:2,onClick:R,children:[(0,e.jsx)("span",{children:"\u{1F516} "}),"".concat(v,": ").concat((n==null?void 0:n.title)||"")]}),(0,e.jsx)(xo,{className:N.content,onClick:R,children:(n==null?void 0:n.content)||"\u586B\u5199 Todo \u5185\u5BB9..."})]}),(0,e.jsx)(m.Z,{style:{flex:"none"},children:(0,e.jsx)(Co.Z,{className:N["delete-icon"],onClick:function(){return d(n==null?void 0:n.id)}})})]})})},Zo=Do,Ao=a(38416),H=a.n(Ao),Y,L=function(g){return g.ALL="ALL",g.DONE="DONE",g.NOT_DONE="NOT_DONE",g}({}),Q=(Y={},H()(Y,L.ALL,"\u6240\u6709"),H()(Y,L.DONE,"\u5DF2\u5B8C\u6210"),H()(Y,L.NOT_DONE,"\u5F85\u529E"),Y),Eo=a(97937),no=a(24969),mo=a(33904),w=a(21612),eo=a(68508),So=a(5737),X=a(15867),ao=a(78045),jo=a(62666),No=function(r){var v=r.curActiveCategoryDetail,n=r.onUpdateCategory,c=(0,j.useState)(!1),d=U()(c,2),t=d[0],f=d[1],O=(0,j.useRef)(),D=(0,y.Z)(function(){f(!0),setTimeout(function(){var h;O==null||(h=O.current)===null||h===void 0||h.focus()})}),E=(0,y.Z)((0,C.throttle)(function(h){var p;n({id:v==null?void 0:v.id,title:h==null||(p=h.target)===null||p===void 0?void 0:p.value})},200)),S=(0,y.Z)(function(){f(!1)});return t?(0,e.jsx)(W.Z,{ref:O,value:v==null?void 0:v.title,onBlur:S,onChange:E,style:{marginBottom:"12px"}}):(0,e.jsx)(jo.Z,{level:3,onClick:D,children:(v==null?void 0:v.title)||"\u9ED8\u8BA4\u8BA1\u5212"})},Ro=No,x={"layout-all-wrapper":"layout-all-wrapper___YzEYt","sider-wrapper":"sider-wrapper___WE5eN","side-menu":"side-menu___dM783","menu-item-container":"menu-item-container___ryyZw","menu-item-left-wrapper":"menu-item-left-wrapper___IMyuH","delete-button":"delete-button___gbw7P","layout-right-wrapper":"layout-right-wrapper___yPGhM","content-wrapper":"content-wrapper___hpw17","group-type-radio-group":"group-type-radio-group___rrp0Q","todo-list-content-wrapper":"todo-list-content-wrapper___v73us"},io=w.Z.Content,Mo=w.Z.Sider,Uo=function(){var r=yo(),v=r.isLoading,n=r.curTodoList,c=r.doneTodoList,d=r.notDoneTodoList,t=r.categoryInfo,f=r.curActiveCategoryDetail,O=r.handleAddTodoItem,D=r.handleRemoveTodoItem,E=r.handleUpdateTodoItem,S=r.handleAddCategory,h=r.handleRemoveCategory,p=r.handleUpdateCategory,R=r.handleClickCategory,G=(0,j.useState)(L.NOT_DONE),M=U()(G,2),Z=M[0],z=M[1],$=function(){switch(Z){case L.ALL:return n;case L.DONE:return c;case L.NOT_DONE:return d;default:return[]}}(),b=[{todoType:L.ALL,count:(n==null?void 0:n.length)||0,status:Q[L.ALL]},{todoType:L.NOT_DONE,count:(d==null?void 0:d.length)||0,status:Q[L.NOT_DONE]},{todoType:L.DONE,count:(c==null?void 0:c.length)||0,status:Q[L.DONE]}],_=(0,C.map)(t==null?void 0:t.categoryList,function(o){return{key:o==null?void 0:o.id,label:o==null?void 0:o.title}}),l=(0,y.Z)(function(o){var s;z(o==null||(s=o.target)===null||s===void 0?void 0:s.value)}),u=(0,y.Z)(function(o){R(o==null?void 0:o.key)});return(0,e.jsx)(mo._z,{header:{title:"Todo list",subTitle:"\u522B\u8BA9\u672A\u6765\u7684\u98CE\u9669\u5F71\u54CD\u73B0\u5728\u7684\u4F60"},loading:v,children:(0,e.jsxs)(w.Z,{className:x["layout-all-wrapper"],children:[(0,e.jsxs)(Mo,{className:x["sider-wrapper"],width:200,children:[(0,e.jsx)(eo.Z,{className:x["side-menu"],mode:"inline",defaultSelectedKeys:[t==null?void 0:t.curCategoryId],onClick:u,selectedKeys:[t==null?void 0:t.curCategoryId],children:(0,C.map)(_,function(o){return(0,e.jsx)(eo.Z.Item,{children:(0,e.jsxs)(k.Z,{justify:"space-between",className:x["menu-item-container"],children:[(0,e.jsx)(m.Z,{className:x["menu-item-left-wrapper"],children:o==null?void 0:o.label}),(0,e.jsx)(m.Z,{children:(o==null?void 0:o.key)!==""&&(0,e.jsx)(So.Z,{title:"\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4EFB\u52A1\u8BA1\u5212\u5417\uFF1F",onConfirm:function(T){T==null||T.stopPropagation(),h(o==null?void 0:o.key)},onCancel:function(T){return T==null?void 0:T.stopPropagation()},okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:(0,e.jsx)(X.ZP,{className:x["delete-button"],type:"text",icon:(0,e.jsx)(Eo.Z,{}),onClick:function(T){T.stopPropagation()}})})})]})},o==null?void 0:o.key)})}),(0,e.jsx)(X.ZP,{size:"large",onClick:S,style:{width:"calc(100% - 8px)",margin:"0 4px 4px"},children:(0,e.jsx)(no.Z,{style:{display:"inline-block",width:"100%"}})})]}),(0,e.jsx)(w.Z,{className:x["layout-right-wrapper"],children:(0,e.jsxs)(io,{className:x["content-wrapper"],children:[(0,e.jsxs)(k.Z,{justify:"space-between",children:[(0,e.jsx)(m.Z,{children:(0,e.jsx)(ao.ZP.Group,{className:x["group-type-radio-group"],onChange:l,value:Z,children:(0,C.map)(b,function(o){return(0,e.jsx)(ao.ZP.Button,{value:o==null?void 0:o.todoType,children:"".concat(o==null?void 0:o.status," (").concat(o==null?void 0:o.count,")")},o==null?void 0:o.todoType)})})}),(0,e.jsx)(m.Z,{children:(0,e.jsxs)(X.ZP,{type:"primary",size:"large",onClick:function(){return O(t==null?void 0:t.curCategoryId)},children:[(0,e.jsx)(no.Z,{}),"Add Todo"]},"add-todo")})]}),(0,e.jsx)(Ro,{curActiveCategoryDetail:f,onUpdateCategory:p}),(0,e.jsx)(io,{className:x["todo-list-content-wrapper"],children:(0,C.map)($,function(o,s){return(0,e.jsx)(Zo,{index:s+1,todoListItem:o,onUpdateItem:E,onRemoveItem:D},o==null?void 0:o.id)})})]})})]})})},Fo=Uo}}]);
