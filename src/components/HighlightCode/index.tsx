import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import styles from './index.less';

interface HighlightCodeProps {
  code: string;
}

/**
 * code 字符串高亮显示
 */
const HighlightCode: React.FC<HighlightCodeProps> = (
  props: HighlightCodeProps,
) => {
  const { code } = props;
  const highlightedCode = hljs.highlight('tsx', code).value;

  return (
    <div className={styles['highlight-code-wrapper']}>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
};

export default HighlightCode;
