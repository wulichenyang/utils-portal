// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import { RecoilRoot } from 'recoil';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export function rootContainer(container: React.ReactNode) {
  return <RecoilRoot>{container}</RecoilRoot>;
}

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  const logoUrl =
    ENV !== 'dev' && PROJECT_NAME
      ? `/${PROJECT_NAME}/favicon.ico`
      : '/favicon.ico';
  return {
    logo: logoUrl,
    menu: {
      locale: false,
    },
  };
};

export { request } from './api';
