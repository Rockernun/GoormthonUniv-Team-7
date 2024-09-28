import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/NavBar';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Plans: React.FC = () => {
  const history = useHistory();

  const goToIce: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/plans/ice-braking`);
  };

  const goToSituation: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/plans/content-recommendation`);
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="플랜 둘러보기" nonIcon />
      <div className="absolute flex flex-col gap-y-[16px] justify-center items-center bottom-[34px]">
        <button type="button" onClick={goToIce}>
          <ExpandedBox title="iceBraking" color="main" isClick={false} />
        </button>
        <button type="button" onClick={goToSituation}>
          <ExpandedBox title="situation" color="main" isClick={false} />
        </button>
      </div>
    </div>
  );
};

export default Plans;
