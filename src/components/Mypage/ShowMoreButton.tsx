import React from 'react';

const ShowMoreButton: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex flex-row w-full justify-between items-center h-[74px]">
      <p className="text-[24px]">{category}</p>
      <button type="button">
        <img className="w-[32px] h-[32px]" src="/assets/right_arrow.svg" alt="right_arrow" />
      </button>
    </div>
  );
};

export default ShowMoreButton;
