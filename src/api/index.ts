import { getToken } from '@/utils/token';
import { RequestConfig } from '@umijs/max';
import { message } from 'antd';

const isErrorStatus = (status: number): boolean => {
  // 将数字转为字符串
  const statusAsString = status.toString();

  // 检查字符串的第一个数字是否是 4 或 5
  return statusAsString?.startsWith('4') || statusAsString?.startsWith('5');
};

export const request: RequestConfig = {
  timeout: 5000,
  // other axios options you want
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      if (response?.status && isErrorStatus(response.status)) {
        switch (response.status) {
          case 400:
            message.error('请求出错(400)');
            break;
          case 401:
            message.warning('授权失败，请重新登录(401)');
            break;
          case 403:
            message.error('拒绝访问(403)');
            break;
          case 404:
            message.error('请求出错(404)');
            break;
          case 500:
            message.error('服务器错误(500)');
            break;
          case 502:
            message.error('网络错误(502)');
            break;
          case 503:
            message.error('服务不可用(503)');
            break;
          default:
            message.error(`请求出错(${error.response.status})!`);
        }
      }
    },
    errorThrower() {},
  },
  // 请求拦截
  requestInterceptors: [
    async (config: any) => {
      const token = await getToken();
      return {
        ...config,
        baseURL: API_URL, // 设置请求的 base url
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
    },
    (error: any) => {
      return error;
    },
  ],
  // 响应拦截（一般处理成功后的响应）
  responseInterceptors: [
    (response: any) => {
      const { data, code, message } = response;
      // if(code === CodeErrorEnum.XX_ERROR) message.error('')
      return response;
    },
  ],
};
