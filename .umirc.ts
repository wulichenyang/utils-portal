import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Utils Portal',
  },
  define: {
    PROJECT_NAME: process.env.PROJECT_NAME,
  },
  routes: [
    {
      path: '/',
      redirect: '/todo-list',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: 'CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      name: 'i18n 转化',
      path: '/transfer-i18n',
      component: './TransferI18n',
    },
    {
      name: 'React 模版',
      path: '/react-template',
      component: './ReactTemplate',
    },
    {
      name: 'Todo List',
      path: '/todo-list',
      component: './TodoList',
    },
    {
      path: '*',
      component: './404',
    },
  ],
  npmClient: 'yarn',
});
