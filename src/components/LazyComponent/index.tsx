import { Spin } from 'antd';
import React, { ReactNode, Suspense } from 'react';

interface LazyComponentProps {
  visible: boolean;
  children?: ReactNode;
}

/**
 * LazyLoad Wrapper: 传入 lazy import 的组件 和 visible 属性，仅当 visible 为 true 时才动态加载 lazy import 的组件
 */
const LazyComponent: React.FC<LazyComponentProps> = ({ visible, children }) => {
  return visible ? <Suspense fallback={<Spin />}>{children}</Suspense> : null;
};

export default LazyComponent;
