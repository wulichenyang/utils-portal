import { useTodoListAtom } from '@/atoms/useTodoListAtom';
import TodoListItem from '@/components/todoListItem';
import { TodoStatusTextMap, TodoTypeEnum } from '@/constants/todoList';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import {
  Button,
  Col,
  Layout,
  Menu,
  MenuProps,
  Popconfirm,
  Radio,
  Row,
} from 'antd';
import { map } from 'lodash';
import React, { useState } from 'react';
import CategoryTitle from '../CategoryTitle';

import styles from './index.less';

const { Content, Sider } = Layout;

const TodoList: React.FC<unknown> = () => {
  const {
    isLoading,
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
  } = useTodoListAtom();

  const [groupType, setGroupType] = useState<TodoTypeEnum>(
    TodoTypeEnum.NOT_DONE,
  );

  const curDisplayTodoList = (() => {
    switch (groupType) {
      case TodoTypeEnum.ALL:
        return curTodoList;

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
      count: curTodoList?.length || 0,
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

  const leftCategoryItems: MenuProps['items'] = map(
    categoryInfo?.categoryList,
    (category) => {
      return {
        key: category?.id,
        label: category?.title,
      };
    },
  );

  const handleGroupChange = useMemoizedFn((e) => {
    setGroupType(e?.target?.value);
  });

  const handleClickMenu = useMemoizedFn((item) => {
    handleClickCategory(item?.key);
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
          onClick={() => handleAddTodoItem(categoryInfo?.curCategoryId)}
        >
          <PlusOutlined />
          Add Todo
        </Button>,
      ]}
    >
      <Layout className={styles['layout-all-wrapper']}>
        <Sider className={styles['sider-wrapper']} width={200}>
          {/* Todo Category Menu List */}
          <Menu
            className={styles['side-menu']}
            mode="inline"
            defaultSelectedKeys={[categoryInfo?.curCategoryId]}
            onClick={handleClickMenu}
            selectedKeys={[categoryInfo?.curCategoryId]}
          >
            {map(leftCategoryItems, (item: { key: string; label: string }) => (
              <Menu.Item key={item?.key}>
                <Row
                  justify="space-between"
                  className={styles['menu-item-container']}
                >
                  <Col className={styles['menu-item-left-wrapper']}>
                    {item?.label}
                  </Col>
                  <Col>
                    {/* 默认计划 id === ''，这时不能删除 category */}
                    {item?.key !== '' && (
                      <Popconfirm
                        title="确定要删除这个任务计划吗？"
                        onConfirm={(e) => {
                          e?.stopPropagation();
                          handleRemoveCategory(item?.key);
                        }}
                        onCancel={(e) => e?.stopPropagation()}
                        okText="确认"
                        cancelText="取消"
                      >
                        <Button
                          className={styles['delete-button']}
                          type="text"
                          icon={<CloseOutlined />}
                          onClick={(e) => {
                            e.stopPropagation(); // 停止事件冒泡
                          }}
                        />
                      </Popconfirm>
                    )}
                  </Col>
                </Row>
              </Menu.Item>
            ))}
          </Menu>

          {/* Add todo btn */}
          <Button
            size="large"
            onClick={handleAddCategory}
            style={{ width: 'calc(100% - 8px)', margin: '0 4px 4px' }}
          >
            <PlusOutlined style={{ display: 'inline-block', width: '100%' }} />
          </Button>
        </Sider>
        <Layout className={styles['layout-right-wrapper']}>
          <Content className={styles['content-wrapper']}>
            {/* all / todo / done - radio group*/}
            <Radio.Group
              className={styles['group-type-radio-group']}
              onChange={handleGroupChange}
              value={groupType}
            >
              {map(todoTypeEnumList, (todoTypeEnumItem) => (
                <Radio.Button
                  key={todoTypeEnumItem?.todoType}
                  value={todoTypeEnumItem?.todoType}
                >{`${todoTypeEnumItem?.status} (${todoTypeEnumItem?.count})`}</Radio.Button>
              ))}
            </Radio.Group>

            {/* Category Title */}
            <CategoryTitle
              curActiveCategoryDetail={curActiveCategoryDetail}
              onUpdateCategory={handleUpdateCategory}
            />

            {/* Todo List */}
            <Content className={styles['todo-list-content-wrapper']}>
              {map(
                curDisplayTodoList,
                (todoListItem: TodoItem, idx: number) => (
                  <TodoListItem
                    key={todoListItem?.id}
                    index={idx + 1}
                    todoListItem={todoListItem}
                    onUpdateItem={handleUpdateTodoItem}
                    onRemoveItem={handleRemoveTodoItem}
                  />
                ),
              )}
            </Content>
          </Content>
        </Layout>
      </Layout>
    </PageContainer>
  );
};

export default TodoList;
