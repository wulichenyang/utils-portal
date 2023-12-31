import { useTodoListAtom } from '@/atoms/useTodoListAtom';

import { DEFAULT_CATEGORY_NAME } from '@/constants';
import { TodoStatusTextMap, TodoTypeEnum } from '@/constants/todoList';
import { useScrollToBottom } from '@/hooks/useScrollToBottom';
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
import React from 'react';

import SortableTodoList from '@/components/SortableTodoList';
import CategoryTitle from '../CategoryTitle';
import styles from './index.less';

const { Content, Sider } = Layout;

const TodoList: React.FC<unknown> = () => {
  const {
    isLoading,
    curTodoList,
    doneTodoList,
    notDoneTodoList,
    curDisplayTodoList,
    categoryInfo,
    groupType,
    curActiveCategoryDetail,
    handleAddTodoItem,
    handleRemoveTodoItem,
    handleUpdateTodoItem,
    handleSortTodoItemEnd,
    handleSetGroupType,
    handleAddCategory,
    handleRemoveCategory,
    handleUpdateCategory,
    handleClickCategory,
  } = useTodoListAtom();

  const { domRef: todoListWrapDomRef, scrollToBottom } = useScrollToBottom();

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
    handleSetGroupType(e?.target?.value);
  });

  const handleClickMenu = useMemoizedFn((item) => {
    handleClickCategory(item?.key);
  });

  const handleClickAddTodoItem = useMemoizedFn((curCategoryId: string) => {
    handleAddTodoItem(curCategoryId);
    setTimeout(() => scrollToBottom());
  });

  return (
    <PageContainer
      header={{
        title: 'Todo list',
        subTitle: '别让未来的风险影响现在的你',
      }}
      loading={isLoading}
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
                    {item?.label || DEFAULT_CATEGORY_NAME}
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
            <Row justify={'space-between'}>
              <Col>
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
              </Col>
              <Col>
                <Button
                  key="add-todo"
                  type="primary"
                  size="large"
                  onClick={() =>
                    handleClickAddTodoItem(categoryInfo?.curCategoryId)
                  }
                >
                  <PlusOutlined />
                  Add Todo
                </Button>
              </Col>
            </Row>

            {/* Category Title */}
            <CategoryTitle
              curActiveCategoryDetail={curActiveCategoryDetail}
              onUpdateCategory={handleUpdateCategory}
            />

            {/* Sortable Todo List */}
            <Content
              ref={todoListWrapDomRef}
              className={styles['todo-list-content-wrapper']}
            >
              <SortableTodoList
                items={curDisplayTodoList}
                distance={1}
                lockAxis="y"
                lockToContainerEdges={true}
                lockOffset="0%"
                onSortEnd={handleSortTodoItemEnd}
                onRemoveItem={handleRemoveTodoItem}
                onUpdateItem={handleUpdateTodoItem}
              />
            </Content>
          </Content>
        </Layout>
      </Layout>
    </PageContainer>
  );
};

export default TodoList;
