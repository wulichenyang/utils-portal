export enum TodoTypeEnum {
  ALL = 'ALL',
  DONE = 'DONE',
  NOT_DONE = 'NOT_DONE',
}

export const TodoStatusTextMap: Record<TodoTypeEnum, string> = {
  [TodoTypeEnum.ALL]: '所有',
  [TodoTypeEnum.DONE]: '已完成',
  [TodoTypeEnum.NOT_DONE]: '待办',
};
