import { request } from '@umijs/max';
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
