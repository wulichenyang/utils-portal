import { DeleteOutlined } from '@ant-design/icons';
import { useClickAway, useKeyPress, useMemoizedFn } from 'ahooks';
import { Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { debounce } from 'lodash';
import React, { memo, useRef, useState } from 'react';
import styles from './index.less';

interface todoListItemProps {
  index: number;
  todoListItem: TodoItem;
  onUpdateItem: (todoItem: UpdatedTodoItem) => void;
  onRemoveItem: (id: string) => void;
}
const { Title, Paragraph } = Typography;
const { TextArea } = Input;
/**
 * todo list 的 item 组件，支持编辑和预览
 */
const TodoListItem: React.FC<todoListItemProps> = (
  props: todoListItemProps,
) => {
  const { index, todoListItem, onUpdateItem, onRemoveItem } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [form] = useForm();

  const formWrapRef = useRef<HTMLDivElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentTextAreaRef = useRef<HTMLInputElement>(null);

  const handleOpenEdit = useMemoizedFn((callback: () => void) => {
    setTimeout(() => {
      setIsEdit(true);
      callback();
    });
  });

  const handleClickTitle = useMemoizedFn(() => {
    handleOpenEdit(() => setTimeout(() => titleInputRef?.current?.focus()));
  });

  const handleClickContent = useMemoizedFn(() => {
    handleOpenEdit(() =>
      setTimeout(() => {
        contentTextAreaRef?.current?.focus();
        (
          contentTextAreaRef?.current as any
        )?.resizableTextArea?.textArea?.setSelectionRange(-1, -1);
      }),
    );
  });

  const handleClickAway = useMemoizedFn(() => {
    if (isEdit) {
      setIsEdit(false);
    }
  });

  const handleTodoFormValuesChange = useMemoizedFn(
    debounce((changedValues: any, __values: any) => {
      onUpdateItem({ id: todoListItem?.id, ...changedValues });
    }, 200),
  );

  useClickAway(handleClickAway, formWrapRef);
  useKeyPress(['enter', 'esc'], () => {
    if (isEdit) {
      setIsEdit(false);
    }
  });

  return (
    <div className={styles['todo-item-wrapper']}>
      {!isEdit ? (
        <Typography>
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
              <Title
                className={styles['title']}
                level={2}
                onClick={handleClickTitle}
              >
                <span>🔖 </span>
                {`${index}: ${todoListItem?.title || ''}`}
              </Title>
              <Paragraph
                className={styles['content']}
                onClick={handleClickContent}
              >
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
        <div ref={formWrapRef}>
          <Form
            form={form}
            initialValues={{
              title: todoListItem?.title || '',
              content: todoListItem?.content || '',
            }}
            onValuesChange={handleTodoFormValuesChange}
          >
            <Form.Item name={'title'} label={'标题'}>
              <Input ref={titleInputRef as any} bordered={false} />
            </Form.Item>
            <Form.Item name={'content'} label={'内容'}>
              <TextArea ref={contentTextAreaRef as any} bordered={false} />
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default memo(TodoListItem);
