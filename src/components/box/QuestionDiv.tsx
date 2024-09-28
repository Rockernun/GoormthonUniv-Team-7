import React from 'react';

interface QuestionDivProps {
  question?: string;
  content?: string;
}

const QuestionDiv: React.FC<QuestionDivProps> = ({ question, content }) => {
  return (
    <div className="flex flex-col gap-[10px] max-w-[271px] max-h-[116px]">
      <p className="text-large text-center">{question}</p>
      <p className="text-txt_secondary text-base text-center break-words whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
};

export default QuestionDiv;
