// 定义tsx代码字符串
export const reactNewTemplateCode = `import React from 'react';

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

export default Component;`;

export const reactNewLessTemplateCode = `.component-wrapper {
  display: block;
}
`;

export const reactNewReqHooksTemplateCode = `import { getData } from '@/services/getData';
import { useMemoizedFn } from 'ahooks';
import { useEffect, useState } from 'react';

/**
 * 获取 XX 数据
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
};`;

export const reactNewUseRequestHooksTemplateCode = `import { getDataList } from '@/services/getData';
import { useRequest } from 'ahooks';

/**
 * 获取 XX 数据
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
};`;

export const reactNewReqGetServiceTemplateCode = `import { request } from '@umijs/max';
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
 * 请求 XX 数据
 */
export const getData = (params?: RequestParams) => {
  return request<AxiosResponse<ResponseData>>('/api/v1/get-data', {
    method: 'GET',
    params,
  });
};`;

export const reactNewReqPostServiceTemplateCode = `import { request } from '@umijs/max';
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
 *  提交 XX 数据
 */
export const postData = (body: RequestBody) => {
  return request<AxiosResponse<ResponseData>>('/api/v1/post-data', {
    method: 'POST',
    data: body,
  });
};
`;

export const reactNewLazyComponentTemplateCode = `import { Spin } from 'antd';
import React, { ReactNode, Suspense } from 'react';

interface LazyComponentProps {
  visible: boolean;
  children?: ReactNode;
}

/**
 * LazyLoad Wrapper: 传入 lazy import 的组件 和 visible 属性，仅当 visible 为 true 时才动态加载 lazy import 的组件
 */
const LazyComponent: React.FC<LazyComponentProps> = ({ visible, children }) => {
  return visible ? <Suspense fallback={<Spin />}>{children}</Suspense> : null;
};

export default LazyComponent;
`;
