import { entries, map } from 'lodash';

// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export const getEmptyI18nObj = (obj: any) => {
  let temp = entries(obj);
  let res = {};
  for (let kv of temp) {
    if (kv[1] === '') {
      // @ts-ignore
      res[kv[0]] = kv[1];
    }
  }
  const len = entries(res).length;
  return { res, len };
};

export const getExcelCol = (obj: any) => {
  // @ts-ignore
  return map(entries(obj), ([k, v]) => {
    return k;
  });
};
