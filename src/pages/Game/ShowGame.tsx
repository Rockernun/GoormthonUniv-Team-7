import React from 'react';

interface ShowGameProps {
  name: string;
  onButtonClick?: () => void; // 버튼 클릭 핸들러
  onPrevious?: () => void; // 이전 게임 핸들러
  onNext?: () => void; // 다음 게임 핸들러
}

const ShowGame: React.FC<ShowGameProps> = ({ name, onButtonClick, onPrevious }) => {
  return (
    <div className="flex mt-[200px] gap-[24px]">
      <button type="button" onClick={onPrevious}>
        <img className="w-[48px] h-[48px]" src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <p className="max-w-[205px] text-[32px] text-center whitespace-pre-line break-words">
        {name}
      </p>
      <button type="button" onClick={onButtonClick}>
        <img className="w-[48px] h-[48px]" src="/assets/right_arrow.svg" alt="right_arrow" />
      </button>
    </div>
  );
};

export default ShowGame;
