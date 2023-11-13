import { getDataList } from '@/services/getData';
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
};
