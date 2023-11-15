import { useTodoListAtom } from '@/atoms/useTodoListAtom';
import TodoListItem from '@/components/todoListItem';
import { TodoStatusTextMap, TodoTypeEnum } from '@/constants/todoList';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import { Button, Radio } from 'antd';
import { map } from 'lodash';

import React, { useState } from 'react';

const TodoList: React.FC<unknown> = () => {
  const {
    isLoading,
    todoList,
    doneTodoList,
    notDoneTodoList,
    handleAddTodoItem,
    handleRemoveTodoItem,
    handleUpdateTodoItem,
  } = useTodoListAtom();

  const [groupType, setGroupType] = useState<TodoTypeEnum>(
    TodoTypeEnum.NOT_DONE,
  );
  const curTodoList = (() => {
    switch (groupType) {
      case TodoTypeEnum.ALL:
        return todoList;

      case TodoTypeEnum.DONE:
        return doneTodoList;

      case TodoTypeEnum.NOT_DONE:
        return notDoneTodoList;

      default:
        return [];
    }
  })();

  const todoTypeEnumList = [
    {
      todoType: TodoTypeEnum.ALL,
      count: todoList?.length || 0,
      status: TodoStatusTextMap[TodoTypeEnum.ALL],
    },
    {
      todoType: TodoTypeEnum.NOT_DONE,
      count: notDoneTodoList?.length || 0,
      status: TodoStatusTextMap[TodoTypeEnum.NOT_DONE],
    },
    {
      todoType: TodoTypeEnum.DONE,
      count: doneTodoList?.length || 0,
      status: TodoStatusTextMap[TodoTypeEnum.DONE],
    },
  ];

  const handleGroupChange = useMemoizedFn((e) => {
    setGroupType(e?.target?.value);
  });

  return (
    <PageContainer
      header={{
        title: 'Todo list',
        subTitle: '别让未来的风险影响现在的你',
      }}
      loading={isLoading}
      extra={[
        <Button
          key="add-todo"
          type="primary"
          size="large"
          onClick={handleAddTodoItem}
        >
          <PlusOutlined />
          Add Todo
        </Button>,
      ]}
    >
      <Radio.Group
        onChange={handleGroupChange}
        value={groupType}
        style={{ marginBottom: 20 }}
      >
        {map(todoTypeEnumList, (todoTypeEnumItem) => (
          <Radio.Button
            key={todoTypeEnumItem?.todoType}
            value={todoTypeEnumItem?.todoType}
          >{`${todoTypeEnumItem?.status} (${todoTypeEnumItem?.count})`}</Radio.Button>
        ))}
      </Radio.Group>
      {map(curTodoList, (todoListItem: TodoItem, idx: number) => (
        <TodoListItem
          key={todoListItem?.id}
          index={idx + 1}
          todoListItem={todoListItem}
          onUpdateItem={handleUpdateTodoItem}
          onRemoveItem={handleRemoveTodoItem}
        />
      ))}
    </PageContainer>
  );
};

export default TodoList;
