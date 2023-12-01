import { cloneDeep, isArray, pullAt } from 'lodash';

export const arrayMove = (arr: any[], fromIndex: number, toIndex: number) => {
  if (isArray(arr)) {
    let clonedArr = cloneDeep(arr);
    const [element] = pullAt(clonedArr, fromIndex); // 将元素从旧位置移除
    clonedArr.splice(toIndex, 0, element); // 将元素插入到新位置
    return clonedArr;
  }
  return arr; // 当 arr 不是数组时，返回原参数
};
