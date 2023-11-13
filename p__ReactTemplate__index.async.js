"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{53692:function(b,g,t){t.r(g),t.d(g,{default:function(){return Z}});var d=t(67294),C=t(20637),U=t(80237),L={"highlight-code-wrapper":"highlight-code-wrapper___dO3KZ"},e=t(85893),y=function(n){var s=n.code,u=C.Z.highlight("tsx",s).value;return(0,e.jsx)("div",{className:L["highlight-code-wrapper"],children:(0,e.jsx)("pre",{children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:u}})})})},o=y,R=`import React from 'react';

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

export default Component;`,j=`.component-wrapper {
  display: block;
}
`,E=`import { getData } from '@/services/getData';
import { useMemoizedFn } from 'ahooks';
import { useEffect, useState } from 'react';

/**
 * \u83B7\u53D6 XX \u6570\u636E
 */
export const useGetData = (params: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleGetData = useMemoizedFn(() => {
    setLoading(true);

    getData(params)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    if (params) {
      handleGetData();
    }
  }, [params]);

  return { data, isLoading };
};`,F=`import { getDataList } from '@/services/getData';
import { useRequest } from 'ahooks';

/**
 * \u83B7\u53D6 XX \u6570\u636E
 */
export const useGetDataList = (params: any) => {
  const {
    data: dataList,
    loading: isLoading,
    run: runGetDataList,
  } = useRequest(getDataList, {
    manual: true,
    refreshDeps: [],
    defaultParams: [{ keyword: 'keyword', type: 'type' }],
    onSuccess: (res, params) => {},
    onError: (e, params) => {},
  });

  return { dataList, isLoading, runGetDataList };
};`,T=`import { request } from '@umijs/max';
// import { request } from '@/utils/request';

interface RequestParams {
  keyword: string;
}

interface ResponseData {
  id: string;
  name: string;
}

export interface AxiosResponse<T> {
  code?: number;
  message?: string;
  data: T;
}

/**
 * \u8BF7\u6C42 XX \u6570\u636E
 */
export const getData = (params?: RequestParams) => {
  return request<AxiosResponse<ResponseData>>('/api/v1/get-data', {
    method: 'GET',
    params,
  });
};`,S=`import { request } from '@umijs/max';
// import { request } from '@/utils/request';

interface RequestBody {
  id: string;
}

interface ResponseData {
  id: string;
  name: string;
}

export interface AxiosResponse<T> {
  code?: number;
  message?: string;
  data: T;
}

/**
 *  \u63D0\u4EA4 XX \u6570\u636E
 */
export const postData = (body: RequestBody) => {
  return request<AxiosResponse<ResponseData>>('/api/v1/post-data', {
    method: 'POST',
    data: body,
  });
};
`,G=`import { Spin } from 'antd';
import React, { ReactNode, Suspense } from 'react';

interface LazyComponentProps {
  visible: boolean;
  children?: ReactNode;
}

/**
 * LazyLoad Wrapper: \u4F20\u5165 lazy import \u7684\u7EC4\u4EF6 \u548C visible \u5C5E\u6027\uFF0C\u4EC5\u5F53 visible \u4E3A true \u65F6\u624D\u52A8\u6001\u52A0\u8F7D lazy import \u7684\u7EC4\u4EF6
 */
const LazyComponent: React.FC<LazyComponentProps> = ({ visible, children }) => {
  return visible ? <Suspense fallback={<Spin />}>{children}</Suspense> : null;
};

export default LazyComponent;
`,A=t(27424),v=t.n(A),x=t(9927),P=function(n){return(0,x.request)("/api/v1/get-data",{method:"GET",params:n})},z=function(n){return(0,x.request)("/api/v1/get-data-list",{method:"GET",params:n})},B=t(22638),q=function(n){var s=(0,d.useState)(null),u=v()(s,2),i=u[0],m=u[1],c=(0,d.useState)(!1),h=v()(c,2),f=h[0],D=h[1],k=(0,B.Z)(function(){D(!0),P(n).then(function(M){m(M.data)}).finally(function(){D(!1)})});return(0,d.useEffect)(function(){n&&k()},[n]),{data:i,isLoading:f}},H=t(80769),N=function(n){var s=(0,H.Z)(z,{manual:!0,refreshDeps:[],defaultParams:[{keyword:"keyword",type:"type"}],onSuccess:function(h,f){},onError:function(h,f){}}),u=s.data,i=s.loading,m=s.run;return{dataList:u,isLoading:i,runGetDataList:m}},X=t(44520),p=t(46930),a=p.Z.Title,r=p.Z.Paragraph,O=p.Z.Text,w=function(){var n=(0,d.useMemo)(function(){return{key:123}},[]),s=q(n),u=s.data,i=N({}),m=i.dataList,c=i.runGetDataList;return(0,d.useEffect)(function(){c()},[]),(0,e.jsx)(X._z,{header:{title:"React \u6A21\u7248"},children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(a,{children:"React \u6A21\u677F"}),(0,e.jsx)(r,{children:"\u7B80\u5355\u68B3\u7406\u4E86\u4E00\u4E9B React \u91CC\u5E38\u89C1\u5F00\u53D1\u4F1A\u7528\u5230\u7684\u6A21\u677F\uFF0C\u5305\u62EC hooks \u548C component \u7B49"}),(0,e.jsx)(a,{level:2,children:"React \u65B0\u51FD\u6570\u7EC4\u4EF6"}),(0,e.jsx)(a,{level:3,children:"TSX \u6A21\u677F"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:R})}),(0,e.jsx)(a,{level:3,children:"less \u6A21\u677F"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:j})}),(0,e.jsx)(a,{level:2,children:"React \u8BF7\u6C42 Hooks"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:E})}),(0,e.jsx)(a,{level:2,children:"useRequest \u8BF7\u6C42 Hooks"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:F})}),(0,e.jsx)(a,{level:2,children:"Umi Get Service"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:T})}),(0,e.jsx)(a,{level:2,children:"Umi Post Service"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:S})}),(0,e.jsx)(a,{level:2,children:"LazyComponent"}),(0,e.jsx)(r,{children:(0,e.jsx)(o,{code:G})})]})})},Z=w}}]);
