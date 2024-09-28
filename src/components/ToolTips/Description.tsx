import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[335px]">
      <div className="border-2 border-txt_primary px-[16px] py-[12px] rounded-description shadow-description bg-white">
        <p className="text-base text-center whitespace-pre-wrap">{text}</p>
      </div>
      <img className="mt-[-8px]" src="/assets/triangle.svg" alt="triangle" />
    </div>
  );
};

export default Description;
