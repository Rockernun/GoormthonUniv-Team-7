import { useState, useEffect } from 'react';

interface TimerProps {
  isRunning: boolean;
  onTimeUpdate: (minutes: number, seconds: number) => void; // 새로운 prop 추가
}

const Timer: React.FC<TimerProps> = ({ isRunning, onTimeUpdate }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    onTimeUpdate(minutes, seconds); // 상위 컴포넌트에 시간 업데이트
  }, [time, onTimeUpdate]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[342px] bg-white border border-txt_primary border-2 px-[16px] py-[12px] rounded-description shadow-description">
        <p className="text-[36px] text-center leading-[150%] whitespace-pre-wrap break-words">
          <time>
            {`0${Math.floor(time / 60000)}`.slice(-2)} :{' '}
            {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
          </time>
        </p>
      </div>
      <img className="mt-[-8px]" src="/assets/triangle.svg" alt="triangle" />
    </div>
  );
};

export default Timer;
