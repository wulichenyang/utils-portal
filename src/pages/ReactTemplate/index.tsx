import HighlightCode from '@/components/HighlightCode';
import {
  reactNewLessTemplateCode,
  reactNewReqGetServiceTemplateCode,
  reactNewReqHooksTemplateCode,
  reactNewReqPostServiceTemplateCode,
  reactNewTemplateCode,
} from '@/constants/reactTemplate';
import { PageContainer } from '@ant-design/pro-components';
import { Typography } from 'antd';

import React from 'react';

const { Title, Paragraph, Text } = Typography;

const ReactTemplate: React.FC<unknown> = () => {
  return (
    <PageContainer
      header={{
        title: 'React 模版',
      }}
    >
      <Typography>
        <Title>React 模板</Title>

        <Paragraph>
          简单梳理了一些 React 里常见开发会用到的模板，包括 hooks 和 component
          等
        </Paragraph>

        <Title level={2}>React 新函数组件</Title>
        <Title level={3}>TSX 模板</Title>
        <Paragraph>
          <HighlightCode code={reactNewTemplateCode} />
        </Paragraph>
        <Title level={3}>less 模板</Title>
        <Paragraph>
          <HighlightCode code={reactNewLessTemplateCode} />
        </Paragraph>

        <Title level={2}>React 请求 Hooks</Title>
        <Paragraph>
          <HighlightCode code={reactNewReqHooksTemplateCode} />
        </Paragraph>

        <Title level={2}>Umi Get Service</Title>
        <Paragraph>
          <HighlightCode code={reactNewReqGetServiceTemplateCode} />
        </Paragraph>

        <Title level={2}>Umi Post Service</Title>
        <Paragraph>
          <HighlightCode code={reactNewReqPostServiceTemplateCode} />
        </Paragraph>
      </Typography>
    </PageContainer>
  );
};

export default ReactTemplate;
