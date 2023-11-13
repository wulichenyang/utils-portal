import { request } from '@umijs/max';
// import { request } from '@/utils/request';

interface RequestParams {
  keyword: string;
}

interface DataListRequestParams extends RequestParams {
  type: string;
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
};

/**
 * 请求 XX 数据
 */
export const getDataList = (params?: DataListRequestParams) => {
  return request<AxiosResponse<ResponseData>>('/api/v1/get-data-list', {
    method: 'GET',
    params,
  });
};
