import CategoryContentBox from 'components/box/CategoryContentBox';
import React from 'react';

const WhiteSection: React.FC = () => {
  return (
    <div className="w-full p-[20px] bg-green-50">
      <CategoryContentBox
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
      <CategoryContentBox
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
      <CategoryContentBox
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
    </div>
  );
};

export default WhiteSection;
