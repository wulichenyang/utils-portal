declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare const ENV: string;
declare const PROJECT_NAME: string;
declare const API_URL: string;

declare interface TodoItem {
  id: string;
  title: string;
  content: string;
  done: boolean;
  note: string;
  categoryId: string;
}

declare interface CategoryItem {
  id: string;
  title: string;
}

declare interface UpdatedTodoItem extends Partial<TodoItem> {
  id: string;
}
