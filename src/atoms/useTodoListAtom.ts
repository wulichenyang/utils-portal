import { TODO_ID_PREFIX } from '@/constants';
import { AtomKeyEnum } from '@/constants/atomKeys';
import { LOCAL_FORAGE_KEY_ENUM } from '@/constants/localforage';
import { useMemoizedFn } from 'ahooks';
import localforage from 'localforage';
import { filter, map } from 'lodash';
import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

export const todoListAtom = atom<{
  isLoading: boolean;
  todoList: TodoItem[];
}>({
  key: AtomKeyEnum.TODO_LIST_ATOM,
  default: {
    isLoading: false,
    todoList: [],
  },
});

export const useTodoListAtom = () => {
  const [{ isLoading, todoList }, setAtomState] = useRecoilState(todoListAtom);

  const saveTodoListToStorage = useMemoizedFn((todoList: TodoItem[]) => {
    localforage.setItem<TodoItem[]>(
      LOCAL_FORAGE_KEY_ENUM.TODO_LIST_KEY,
      todoList,
    );
  });

  // 添加 todo item
  const handleAddTodoItem = useMemoizedFn(() => {
    const newTodoList = [
      ...todoList,
      {
        id: `${TODO_ID_PREFIX}${new Date().getTime()}`,
        title: '',
        content: '',
        seq: '',
        done: false,
        note: '',
      },
    ];

    // 新增 atom 数据
    setAtomState((prevState) => ({
      ...prevState,
      todoList: newTodoList,
    }));

    // 持久存储到 Storage
    saveTodoListToStorage(newTodoList);
  });

  // 删除 todo item
  const handleRemoveTodoItem = useMemoizedFn((id: string) => {
    const newTodoList = filter(todoList, (todoListItem: TodoItem) => {
      return todoListItem?.id !== id;
    });

    // 删除 atom 数据
    setAtomState((prevState) => ({
      ...prevState,
      todoList: newTodoList,
    }));

    // 持久存储到 Storage
    saveTodoListToStorage(newTodoList);
  });

  // 更新 todo item
  const handleUpdateTodoItem = useMemoizedFn((todoItem: UpdatedTodoItem) => {
    const { id } = todoItem;
    const newTodoList = map(todoList, (todoListItem: TodoItem) => {
      if (todoListItem?.id === id) {
        return {
          ...todoListItem,
          ...todoItem,
        };
      } else return todoListItem;
    }) as TodoItem[];

    // 更新 atom 数据
    setAtomState((prevState) => ({
      ...prevState,
      todoList: newTodoList,
    }));

    // 持久存储到 Storage
    saveTodoListToStorage(newTodoList);
  });

  // 从 Storage 读取初始化数据
  useEffect(() => {
    setAtomState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    localforage
      .getItem<TodoItem[]>(LOCAL_FORAGE_KEY_ENUM.TODO_LIST_KEY)
      .then((res) => {
        setAtomState((prevState) => ({
          ...prevState,
          todoList: res || [],
        }));
      })
      .finally(() => {
        setAtomState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      });
  }, []);

  return {
    isLoading,
    todoList,
    handleAddTodoItem,
    handleRemoveTodoItem,
    handleUpdateTodoItem,
  };
};
