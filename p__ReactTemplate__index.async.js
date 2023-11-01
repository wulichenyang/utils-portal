"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{67526:function(F,a,n){n.r(a),n.d(a,{default:function(){return g}});var T=n(67294),s=n(20637),f=n(80237),u={"highlight-code-wrapper":"highlight-code-wrapper___dO3KZ"},e=n(85893),c=function(C){var x=C.code,j=s.Z.highlight("tsx",x).value;return(0,e.jsx)("div",{className:u["highlight-code-wrapper"],children:(0,e.jsx)("pre",{children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:j}})})})},l=c,d=`import React from 'react';

import styles from './index.less';

interface ComponentProps {
  name: string;
}

/**
 * Hello World
 */
const Component: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { name } = props;

  return <div className={styles['component-wrapper']}>Hello, world!</div>;
};

export default Component;`,h=`.component-wrapper {
  display: block;
}
`,i=`

`,p=n(1524),o=n(35132),t=o.Z.Title,r=o.Z.Paragraph,R=o.Z.Text,m=function(){return(0,e.jsx)(p._z,{header:{title:"React \u6A21\u7248"},children:(0,e.jsxs)(o.Z,{children:[(0,e.jsx)(t,{children:"React \u6A21\u677F"}),(0,e.jsx)(r,{children:"\u7B80\u5355\u68B3\u7406\u4E86\u4E00\u4E9B React \u91CC\u5E38\u89C1\u5F00\u53D1\u4F1A\u7528\u5230\u7684\u6A21\u677F\uFF0C\u5305\u62EC hooks \u548C component \u7B49"}),(0,e.jsx)(t,{level:2,children:"React \u65B0\u51FD\u6570\u7EC4\u4EF6"}),(0,e.jsx)(t,{level:3,children:"TSX \u6A21\u677F"}),(0,e.jsx)(r,{children:(0,e.jsx)(l,{code:d})}),(0,e.jsx)(t,{level:3,children:"less \u6A21\u677F"}),(0,e.jsx)(r,{children:(0,e.jsx)(l,{code:h})}),(0,e.jsx)(t,{level:2,children:"React \u8BF7\u6C42 Hooks"}),(0,e.jsx)(r,{children:(0,e.jsx)(l,{code:i})})]})})},g=m}}]);
