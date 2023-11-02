import { getData } from '@/services/getData';
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
};
