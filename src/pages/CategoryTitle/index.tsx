import { useMemoizedFn } from 'ahooks';
import { Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { throttle } from 'lodash';
import { useRef, useState } from 'react';

interface CategoryTitleProps {
  curActiveCategoryDetail: CategoryItem;
  onUpdateCategory: (category: CategoryItem) => void;
}

const CategoryTitle: React.FC<CategoryTitleProps> = (
  props: CategoryTitleProps,
) => {
  const { curActiveCategoryDetail, onUpdateCategory } = props;

  const [isEditCategoryTitle, setIsEditCategoryTitle] =
    useState<boolean>(false);

  const categoryTitleInputRef = useRef<HTMLInputElement>();

  const handleClickEditCategoryTitle = useMemoizedFn(() => {
    setIsEditCategoryTitle(true);
    setTimeout(() => {
      categoryTitleInputRef?.current?.focus();
    });
  });

  const handleChangeCategoryTitle = useMemoizedFn(
    throttle((e) => {
      onUpdateCategory({
        id: curActiveCategoryDetail?.id,
        title: e?.target?.value,
      });
    }, 200),
  );

  const handleBlurEdit = useMemoizedFn(() => {
    setIsEditCategoryTitle(false);
  });

  return isEditCategoryTitle ? (
    <Input
      ref={categoryTitleInputRef as any}
      value={curActiveCategoryDetail?.title}
      onBlur={handleBlurEdit}
      onChange={handleChangeCategoryTitle}
      style={{ marginBottom: '12px' }}
    />
  ) : (
    <Title level={3} onClick={handleClickEditCategoryTitle}>
      {curActiveCategoryDetail?.title || '默认计划'}
    </Title>
  );
};

export default CategoryTitle;
