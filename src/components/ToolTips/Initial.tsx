import React from 'react';

interface InitialProps {
  initial: string[];
}

const Initial: React.FC<InitialProps> = ({ initial }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[342px] bg-white border border-txt_primary border-2 px-[16px] py-[12px] rounded-description shadow-description">
        <p className="text-base text-center leading-content">제시어</p>
        <p className="text-[36px] text-center leading-[150%] whitespace-pre-wrap break-words">
          '{initial.join(' ')}'
        </p>
      </div>
      <img className="mt-[-8px]" src="/assets/triangle.svg" alt="triangle" />
    </div>
  );
};

export default Initial;
