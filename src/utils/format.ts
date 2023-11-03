import { keys, pickBy, size } from 'lodash';

// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export const getEmptyI18nObj = (obj: Record<string, string>) => {
  const res = pickBy(obj, (value: string, key: string) => {
    return value === '';
  });

  const len = size(res);
  return { res, len };
};

export const getExcelCol = (obj: any) => {
  return keys(obj);
};
