"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{97695:function(T,o,n){n.r(o),n.d(o,{default:function(){return v}});var D=n(67294),i=n(20637),F=n(80237),u={"highlight-code-wrapper":"highlight-code-wrapper___dO3KZ"},e=n(85893),d=function(C){var j=C.code,R=i.Z.highlight("tsx",j).value;return(0,e.jsx)("div",{className:u["highlight-code-wrapper"],children:(0,e.jsx)("pre",{children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:R}})})})},s=d,l=`import React from 'react';

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

export default Component;`,c=`.component-wrapper {
  display: block;
}
`,p=`import { getData } from '@/services/getData';
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
};`,m=`import { request } from '@umijs/max';
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
};`,h=`import { request } from '@umijs/max';
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
`,g=n(1524),r=n(35132),t=r.Z.Title,a=r.Z.Paragraph,y=r.Z.Text,x=function(){return(0,e.jsx)(g._z,{header:{title:"React \u6A21\u7248"},children:(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(t,{children:"React \u6A21\u677F"}),(0,e.jsx)(a,{children:"\u7B80\u5355\u68B3\u7406\u4E86\u4E00\u4E9B React \u91CC\u5E38\u89C1\u5F00\u53D1\u4F1A\u7528\u5230\u7684\u6A21\u677F\uFF0C\u5305\u62EC hooks \u548C component \u7B49"}),(0,e.jsx)(t,{level:2,children:"React \u65B0\u51FD\u6570\u7EC4\u4EF6"}),(0,e.jsx)(t,{level:3,children:"TSX \u6A21\u677F"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:l})}),(0,e.jsx)(t,{level:3,children:"less \u6A21\u677F"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:c})}),(0,e.jsx)(t,{level:2,children:"React \u8BF7\u6C42 Hooks"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:p})}),(0,e.jsx)(t,{level:2,children:"Umi Get Service"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:m})}),(0,e.jsx)(t,{level:2,children:"Umi Post Service"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:h})})]})})},v=x}}]);
