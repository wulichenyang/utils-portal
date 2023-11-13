import HighlightCode from '@/components/HighlightCode';
import {
  reactNewLazyComponentTemplateCode,
  reactNewLessTemplateCode,
  reactNewReqGetServiceTemplateCode,
  reactNewReqHooksTemplateCode,
  reactNewReqPostServiceTemplateCode,
  reactNewTemplateCode,
  reactNewUseRequestHooksTemplateCode,
} from '@/constants/reactTemplate';
import { useGetData } from '@/hooks/useGetData';
import { useGetDataList } from '@/hooks/useGetDataList';
import { PageContainer } from '@ant-design/pro-components';
import { Typography } from 'antd';

import React, { useEffect, useMemo } from 'react';

const { Title, Paragraph, Text } = Typography;

const ReactTemplate: React.FC<unknown> = () => {
  const params = useMemo(
    () => ({
      key: 123,
    }),
    [],
  );
  // const { data } = useGetData(params);
  // const { dataList, runGetDataList } = useGetDataList({});

  // useEffect(() => {
  //   runGetDataList();
  // }, []);

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

        <Title level={2}>useRequest 请求 Hooks</Title>
        <Paragraph>
          <HighlightCode code={reactNewUseRequestHooksTemplateCode} />
        </Paragraph>

        <Title level={2}>Umi Get Service</Title>
        <Paragraph>
          <HighlightCode code={reactNewReqGetServiceTemplateCode} />
        </Paragraph>

        <Title level={2}>Umi Post Service</Title>
        <Paragraph>
          <HighlightCode code={reactNewReqPostServiceTemplateCode} />
        </Paragraph>

        <Title level={2}>LazyComponent</Title>
        <Paragraph>
          <HighlightCode code={reactNewLazyComponentTemplateCode} />
        </Paragraph>
      </Typography>
    </PageContainer>
  );
};

export default ReactTemplate;
