import ExpandedBox from 'components/box/ExpandedBox';
import React from 'react';

const PlanDiv: React.FC<{ goToIce: () => void; goToSituation: () => void }> = ({
  goToSituation,
  goToIce,
}) => {
  return (
    <div className="absolute flex flex-col gap-y-[16px] justify-center items-center bottom-[34px]">
      <ExpandedBox title="iceBraking" color="main" onClick={goToIce} isClick={false} />
      <ExpandedBox title="situation" color="main" onClick={goToSituation} isClick={false} />
    </div>
  );
};

export default PlanDiv;
