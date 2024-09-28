import { LargeButton, XLargeButton } from 'components/Button/Button';
import Description from 'components/ToolTips/Description';
import Timer from 'components/ToolTips/Timer';
import React, { useState } from 'react';

interface ButtonCloudProps {
  name: string;
  explanation: string;
  isRunning: boolean; // isRunning prop 추가
  onToggleRunning: () => void; // 상태 변경 핸들러 추가
}

const ButtonCloud: React.FC<ButtonCloudProps> = ({
  name,
  explanation,
  isRunning,
  onToggleRunning,
}) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const handleTimeUpdate = (mins: number, secs: number) => {
    setMinutes(mins);
    setSeconds(secs);
  };

  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[44px]">
      {isRunning ? (
        <Timer isRunning={isRunning} onTimeUpdate={handleTimeUpdate} />
      ) : (
        <Description
          text={
            isRunning || (minutes === 0 && seconds === 0)
              ? explanation
              : `${minutes}분 ${seconds}초나 진행했어요! 다음 게임도 진행해볼까요?`
          }
        />
      )}
      <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
      <XLargeButton
        onClick={onToggleRunning}
        text={
          isRunning ? '그만하기' : minutes === 0 && seconds === 0 ? '시작하기' : '다시 시작하기'
        }
      />
    </div>
  );
};

export default ButtonCloud;
