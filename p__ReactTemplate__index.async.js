"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{97695:function(L,o,t){t.r(o),t.d(o,{default:function(){return j}});var l=t(20637),E=t(80237),u=t(67294),d={"highlight-code-wrapper":"highlight-code-wrapper___dO3KZ"},e=t(85893),c=function(i){var D=i.code,F=l.Z.highlight("tsx",D).value;return(0,e.jsx)("div",{className:d["highlight-code-wrapper"],children:(0,e.jsx)("pre",{children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:F}})})})},s=(0,u.memo)(c),p=`import React from 'react';

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

export default Component;`,m=`.component-wrapper {
  display: block;
}
`,h=`import { getData } from '@/services/getData';
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
        if (res) {
          setData(res?.data);
        }
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
};`,g=`import { getDataList } from '@/services/getData';
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
};`,v=`import { request } from '@umijs/max';
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
};`,x=`import { request } from '@umijs/max';
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
`,C=`import { Spin } from 'antd';
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
`,f=t(33904),r=t(97689),n=r.Z.Title,a=r.Z.Paragraph,T=r.Z.Text,R=function(){var i=(0,u.useMemo)(function(){return{key:123}},[]);return(0,e.jsx)(f._z,{header:{title:"React \u6A21\u7248"},children:(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(n,{children:"React \u6A21\u677F"}),(0,e.jsx)(a,{children:"\u7B80\u5355\u68B3\u7406\u4E86\u4E00\u4E9B React \u91CC\u5E38\u89C1\u5F00\u53D1\u4F1A\u7528\u5230\u7684\u6A21\u677F\uFF0C\u5305\u62EC hooks \u548C component \u7B49"}),(0,e.jsx)(n,{level:2,children:"React \u65B0\u51FD\u6570\u7EC4\u4EF6"}),(0,e.jsx)(n,{level:3,children:"TSX \u6A21\u677F"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:p})}),(0,e.jsx)(n,{level:3,children:"less \u6A21\u677F"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:m})}),(0,e.jsx)(n,{level:2,children:"React \u8BF7\u6C42 Hooks"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:h})}),(0,e.jsx)(n,{level:2,children:"useRequest \u8BF7\u6C42 Hooks"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:g})}),(0,e.jsx)(n,{level:2,children:"Umi Get Service"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:v})}),(0,e.jsx)(n,{level:2,children:"Umi Post Service"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:x})}),(0,e.jsx)(n,{level:2,children:"LazyComponent"}),(0,e.jsx)(a,{children:(0,e.jsx)(s,{code:C})})]})})},j=R}}]);
