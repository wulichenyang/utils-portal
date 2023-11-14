import { useTodoListAtom } from '@/atoms/useTodoListAtom';
import TodoListItem from '@/components/todoListItem';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import { map } from 'lodash';

import React from 'react';

const TodoList: React.FC<unknown> = () => {
  const {
    isLoading,
    todoList,
    handleAddTodoItem,
    handleRemoveTodoItem,
    handleUpdateTodoItem,
  } = useTodoListAtom();

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
      {map(todoList, (todoListItem: TodoItem, idx: number) => (
        <TodoListItem
          key={todoListItem?.id}
          index={idx + 1}
          todoListItem={todoListItem}
          onUpdateItem={handleUpdateTodoItem}
        />
      ))}
    </PageContainer>
  );
};

export default TodoList;
