// 定义tsx代码字符串
export const reactNewTemplateCode = `import React from 'react';

import styles from './index.less';

interface ComponentProps {
  name: string;
}

/**
 * Hello World
 */
const Component: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { name } = props;

  return <div className={styles['component-wrapper']}>Hello, world!</div>;
};

export default Component;`;

export const reactNewLessTemplateCode = `.component-wrapper {
  display: block;
}
`
export const reactNewReqHooksTemplateCode = `

`