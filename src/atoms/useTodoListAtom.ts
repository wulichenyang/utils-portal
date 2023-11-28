import {
  DEFAULT_CATEGORY_NAME,
  NEW_CATEGORY_NAME,
  TODO_CATEGORY_ID_PREFIX,
  TODO_ID_PREFIX,
} from '@/constants';
import { AtomKeyEnum } from '@/constants/atomKeys';
import { LOCAL_FORAGE_KEY_ENUM } from '@/constants/localforage';
import { useMemoizedFn } from 'ahooks';
import localforage from 'localforage';
import { filter, find, findIndex, map } from 'lodash';
import { useEffect } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

interface CategoryInfo {
  curCategoryId: string;
  categoryList: CategoryItem[];
}

interface TodoListAtom {
  isLoading: boolean;
  todoList: TodoItem[];
  categoryInfo: CategoryInfo;
}

export const todoListAtom = atom<TodoListAtom>({
  key: AtomKeyEnum.TODO_LIST_ATOM,
  default: {
    isLoading: false,
    todoList: [],
    categoryInfo: {
      curCategoryId: '',
      categoryList: [
        {
          id: '',
          title: DEFAULT_CATEGORY_NAME,
        },
      ],
    },
  },
});

export const doneTodoListSelector = selector<TodoItem[]>({
  key: AtomKeyEnum.DONE_TODO_LIST_ATOM_SELECTOR,
  get: ({ get }) => {
    const { todoList, categoryInfo } = get(todoListAtom);

    return filter(
      todoList,
      (item: TodoItem) =>
        item?.done && categoryInfo?.curCategoryId === (item?.categoryId || ''),
    );
  },
});

export const notDoneTodoListSelector = selector<TodoItem[]>({
  key: AtomKeyEnum.NOT_DONE_TODO_LIST_ATOM_SELECTOR,
  get: ({ get }) => {
    const { todoList, categoryInfo } = get(todoListAtom);

    return filter(
      todoList,
      (item: TodoItem) =>
        !item?.done && categoryInfo?.curCategoryId === (item?.categoryId || ''),
    );
  },
});

export const curTodoListSelector = selector<TodoItem[]>({
  key: AtomKeyEnum.CUR_TODO_LIST_ATOM_SELECTOR,
  get: ({ get }) => {
    const { todoList, categoryInfo } = get(todoListAtom);

    return filter(
      todoList,
      (item: TodoItem) =>
        categoryInfo?.curCategoryId === (item?.categoryId || ''),
    );
  },
});

export const curActiveCategoryDetailSelector = selector<CategoryItem>({
  key: AtomKeyEnum.CUR_ACTIVE_CATEGORY_DETAIL_SELECTOR,
  get: ({ get }) => {
    const { categoryInfo } = get(todoListAtom);

    return find(
      categoryInfo?.categoryList,
      (cate) => cate?.id === categoryInfo?.curCategoryId,
    )!;
  },
});

export const useTodoListAtom = () => {
  const [{ isLoading, todoList, categoryInfo }, setAtomState] =
    useRecoilState(todoListAtom);

  const doneTodoList = useRecoilValue(doneTodoListSelector);
  const notDoneTodoList = useRecoilValue(notDoneTodoListSelector);
  const curTodoList = useRecoilValue(curTodoListSelector);
  const curActiveCategoryDetail = useRecoilValue(
    curActiveCategoryDetailSelector,
  );

  const saveTodoListToStorage = useMemoizedFn((todoList: TodoItem[]) => {
    localforage.setItem<TodoItem[]>(
      LOCAL_FORAGE_KEY_ENUM.TODO_LIST_KEY,
      todoList,
    );
  });

  const saveCategoryInfoToStorage = useMemoizedFn(
    (categoryInfo: CategoryInfo) => {
      localforage.setItem<CategoryInfo>(
        LOCAL_FORAGE_KEY_ENUM.TODO_CATEGORY_INFO_KEY,
        categoryInfo,
      );
    },
  );

  // 添加 todo item
  const handleAddTodoItem = useMemoizedFn((categoryId: string) => {
    const newTodoList = [
      ...todoList,
      {
        id: `${TODO_ID_PREFIX}${new Date().getTime()}`,
        title: '',
        content: '',
        seq: '',
        done: false,
        note: '',
        categoryId: categoryId || '',
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

  const handleRemoveTodoItemByCategory = useMemoizedFn((categoryId: string) => {
    const newTodoList = filter(todoList, (todoListItem: TodoItem) => {
      return todoListItem?.categoryId !== categoryId;
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

  // 添加 category
  const handleAddCategory = useMemoizedFn(() => {
    const newCategoryInfo = {
      ...categoryInfo,

      categoryList: [
        ...(categoryInfo?.categoryList || []),
        {
          id: `${TODO_CATEGORY_ID_PREFIX}${new Date().getTime()}`,
          title: NEW_CATEGORY_NAME,
        },
      ],
    };

    // 新增 atom 数据
    setAtomState((prevState) => ({
      ...prevState,
      categoryInfo: newCategoryInfo,
    }));

    // 持久存储到 Storage
    saveCategoryInfoToStorage(newCategoryInfo);
  });

  // 删除 category
  const handleRemoveCategory = useMemoizedFn((categoryId: string) => {
    // 不能删除 id === '' 的默认计划
    if (categoryId) {
      const curCategoryIndex = findIndex(
        categoryInfo?.categoryList,
        (cate) => cate?.id === categoryId,
      );
      const prevCategoryId =
        curCategoryIndex === -1
          ? ''
          : categoryInfo?.categoryList[curCategoryIndex - 1]?.id || '';

      const nextCurCategoryId =
        categoryId !== categoryInfo?.curCategoryId
          ? categoryInfo?.curCategoryId
          : prevCategoryId;

      const newCategoryList = filter(
        categoryInfo?.categoryList,
        (categoryItem: CategoryItem) => {
          return categoryItem?.id !== categoryId;
        },
      ) as CategoryItem[];

      const newCategoryInfo = {
        ...categoryInfo,
        curCategoryId: nextCurCategoryId,
        categoryList: newCategoryList,
      };

      // 新增 atom 数据
      setAtomState((prevState) => ({
        ...prevState,
        categoryInfo: newCategoryInfo,
      }));

      // 持久存储到 Storage
      saveCategoryInfoToStorage(newCategoryInfo);

      // 删除该 category 下的 todo-list
      handleRemoveTodoItemByCategory(categoryId);
    }
  });

  // 更新 category
  const handleUpdateCategory = useMemoizedFn((category: CategoryItem) => {
    const { id } = category;
    const newCategoryList = map(
      categoryInfo?.categoryList,
      (categoryItem: CategoryItem) => {
        if (categoryItem?.id === id) {
          return {
            ...categoryItem,
            ...category,
          };
        } else return categoryItem;
      },
    ) as CategoryItem[];

    const newCategoryInfo = {
      ...categoryInfo,
      categoryList: newCategoryList,
    };

    // 新增 atom 数据
    setAtomState((prevState) => ({
      ...prevState,
      categoryInfo: newCategoryInfo,
    }));

    // 持久存储到 Storage
    saveCategoryInfoToStorage(newCategoryInfo);
  });

  const handleClickCategory = useMemoizedFn((categoryId: string) => {
    const newCategoryInfo = {
      ...categoryInfo,
      curCategoryId: categoryId,
    };

    setAtomState((prevState) => ({
      ...prevState,
      categoryInfo: newCategoryInfo,
    }));

    // 持久存储到 Storage
    saveCategoryInfoToStorage(newCategoryInfo);
  });

  // 从 Storage 读取初始化数据
  useEffect(() => {
    setAtomState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    // cur category
    const promise1 = localforage
      .getItem<CategoryInfo>(LOCAL_FORAGE_KEY_ENUM.TODO_CATEGORY_INFO_KEY)
      .then((res) => {
        if (res) {
          setAtomState((prevState) => ({
            ...prevState,
            categoryInfo: res,
          }));
        }
      });

    // todo list
    const promise2 = localforage
      .getItem<TodoItem[]>(LOCAL_FORAGE_KEY_ENUM.TODO_LIST_KEY)
      .then((res) => {
        if (res) {
          setAtomState((prevState) => ({
            ...prevState,
            todoList: res,
          }));
        }
      });

    Promise.all([promise1, promise2]).finally(() => {
      setAtomState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    });
  }, []);

  return {
    isLoading,
    todoList,
    curTodoList,
    doneTodoList,
    notDoneTodoList,
    categoryInfo,
    curActiveCategoryDetail,
    handleAddTodoItem,
    handleRemoveTodoItem,
    handleUpdateTodoItem,
    handleAddCategory,
    handleRemoveCategory,
    handleUpdateCategory,
    handleClickCategory,
  };
};
