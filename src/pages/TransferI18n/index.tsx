import { getEmptyI18nObj, getExcelCol } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input } from 'antd';
import { RuleObject } from 'antd/es/form';
import { StoreValue } from 'antd/es/form/interface';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react';

const { TextArea } = Input;

const TransferI18n: React.FC<unknown> = () => {
  const [rawJSONObj, setRawJSONObj] = useState<Record<string, string>>({});
  const [targetJSONString, setTargetJSONString] = useState<string>('');
  const [targetLen, setTargetLen] = useState(0);
  const [newMsgKeyList, setNewMsgKeyList] = useState<string[]>([]);

  const handleSourceObjChange = (
    value: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    let obj = {};
    try {
      obj = JSON.parse(value?.target?.value);
    } catch (e) {
      obj = {};
    }
    setRawJSONObj(obj);
  };

  const handleSourceObjValidator = (
    _: RuleObject,
    value: StoreValue,
    // callback: (error?: string) => void,
  ) => {
    let isValid = false;
    try {
      JSON.parse(value);
      isValid = true;
    } catch (e) {
      isValid = false;
    }
    if (!isValid) {
      return Promise.reject(new Error('JSON 格式不正确'));
    }
    return Promise.resolve();
  };

  useEffect(() => {
    const { res, len } = getEmptyI18nObj(rawJSONObj);
    const targetJSONString = JSON.stringify(res);
    setTargetJSONString(targetJSONString === '{}' ? '' : targetJSONString);
    setTargetLen(len);
    setNewMsgKeyList(getExcelCol(res));

    // request('/zhuanlan.zhihu.com/p/647304838').then((res) => {
    //   console.log(res);
    // });
  }, [rawJSONObj]);

  return (
    <PageContainer
      header={{
        title: 'i18n 转化',
      }}
    >
      <>
        <Form>
          <Form.Item
            name="sourceJson"
            rules={[{ validator: handleSourceObjValidator }]}
          >
            <TextArea
              style={{ height: 240, marginBottom: 24 }}
              onChange={handleSourceObjChange}
              placeholder="输入新增后的 i18n JSON 数据"
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              style={{ height: 240 }}
              value={targetJSONString}
              placeholder="输出的新增空文案 JSON 数据"
            />
          </Form.Item>
          <p>{`新增文案 Length: ${targetLen}`}</p>
          <p>{`新增 Excel 文案 key 列表，复制到 Excel 文件等文案人员翻译： `}</p>
          <div>
            {map(newMsgKeyList, (key, i) => (
              <div key={i}>
                <span key={i} style={{ color: 'green' }}>
                  {key}
                </span>
              </div>
            ))}
          </div>
        </Form>
      </>
    </PageContainer>
  );
};

export default TransferI18n;
