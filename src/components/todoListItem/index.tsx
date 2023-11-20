import { DeleteOutlined } from '@ant-design/icons';
import { useClickAway, useKeyPress, useMemoizedFn } from 'ahooks';
import { Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { debounce } from 'lodash';
import React, { useRef, useState } from 'react';
import styles from './index.less';

interface todoListItemProps {
  index: number;
  todoListItem: TodoItem;
  onUpdateItem: (todoItem: UpdatedTodoItem) => void;
  onRemoveItem: (id: string) => void;
}
const { Title, Paragraph } = Typography;

/**
 * todo list 的 item 组件，支持编辑和预览
 */
const TodoListItem: React.FC<todoListItemProps> = (
  props: todoListItemProps,
) => {
  const { index, todoListItem, onUpdateItem, onRemoveItem } = props;
  const [isEdit, setIsEdit] = useState(false);

  const formWrapRef = useRef<HTMLDivElement>(null);
  const [form] = useForm();

  const handleOpenEdit = () => {
    setTimeout(() => setIsEdit(true));
  };

  const handleClickAway = useMemoizedFn(() => {
    if (isEdit) {
      setIsEdit(false);
    }
  });

  const handleTodoFormValuesChange = debounce(
    (changedValues: any, values: any) => {
      onUpdateItem({ id: todoListItem?.id, ...changedValues });
    },
    200,
  );

  useClickAway(handleClickAway, formWrapRef);
  useKeyPress(['enter', 'esc'], () => {
    if (isEdit) {
      setIsEdit(false);
    }
  });

  return !isEdit ? (
    <Typography className={styles['todo-item-wrapper']}>
      <Row align={'middle'}>
        <Col style={{ flex: 'none' }}>
          <div className={styles['check-box']}>
            <Checkbox
              checked={todoListItem?.done}
              onChange={() =>
                onUpdateItem({
                  id: todoListItem?.id,
                  done: !todoListItem?.done,
                })
              }
            ></Checkbox>
          </div>
        </Col>
        <Col style={{ flex: '1' }}>
          <Title className={styles['title']} level={2} onClick={handleOpenEdit}>
            <span>🔖 </span>
            {`${index}: ${todoListItem?.title || ''}`}
          </Title>
          <Paragraph className={styles['content']} onClick={handleOpenEdit}>
            {todoListItem?.content || '填写 Todo 内容...'}
          </Paragraph>
        </Col>
        {/* 当鼠标悬浮时显示删除图标 */}
        <Col style={{ flex: 'none' }}>
          <DeleteOutlined
            className={styles['delete-icon']}
            onClick={() => onRemoveItem(todoListItem?.id)}
          />
        </Col>
      </Row>
    </Typography>
  ) : (
    <div className={styles['todo-item-wrapper']} ref={formWrapRef}>
      <Form
        form={form}
        initialValues={{
          title: todoListItem?.title || '',
          content: todoListItem?.content || '',
        }}
        onValuesChange={handleTodoFormValuesChange}
      >
        <Form.Item name={'title'} label={'标题'}>
          <Input />
        </Form.Item>
        <Form.Item name={'content'} label={'内容'}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TodoListItem;
