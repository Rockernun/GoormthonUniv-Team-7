import React from 'react';

const CategoryContentBox: React.FC<{ category: string; content: string }> = ({
  category,
  content,
}) => {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <p className="">{category}</p>
      <p>{content}</p>
    </div>
  );
};

export default CategoryContentBox;
