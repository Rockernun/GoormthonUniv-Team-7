import Description from 'components/ToolTips/Description';
import React from 'react';

const ExplainCloud: React.FC<{ explanation: string }> = ({ explanation }) => {
  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[64px]">
      <Description text={explanation} />
      <img src="/assets/Char/smile.svg" alt="smile" />
    </div>
  );
};

export default ExplainCloud;
