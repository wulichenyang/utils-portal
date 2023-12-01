import TodoListItem from '@/components/SortableTodoList/TodoListItem';
import { map } from 'lodash';
import { memo } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

interface SortableTodoItemProps {
  value: TodoItem;
  idx: number;
  onUpdateItem: (todoItem: UpdatedTodoItem) => void;
  onRemoveItem: (id: string) => void;
}

const SortableTodoItem = SortableElement<SortableTodoItemProps>(
  (props: SortableTodoItemProps) => {
    const { value, idx, onUpdateItem, onRemoveItem } = props;
    return (
      <TodoListItem
        key={value?.id}
        index={idx + 1}
        todoListItem={value}
        onUpdateItem={onUpdateItem}
        onRemoveItem={onRemoveItem}
      />
    );
  },
);

interface SortableTodoListProps {
  items: TodoItem[];
  onUpdateItem: (todoItem: UpdatedTodoItem) => void;
  onRemoveItem: (id: string) => void;
}

const SortableTodoList = SortableContainer<SortableTodoListProps>(
  (props: SortableTodoListProps) => {
    const { items, onUpdateItem, onRemoveItem } = props;

    return (
      <div>
        {map(items, (todoListItem, idx) => (
          <SortableTodoItem
            key={`item-${todoListItem?.id}`}
            index={idx}
            value={todoListItem}
            idx={idx}
            onUpdateItem={onUpdateItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    );
  },
);

export default memo(SortableTodoList);
