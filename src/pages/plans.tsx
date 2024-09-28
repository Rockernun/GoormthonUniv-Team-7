import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/Bar/NavBar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SelectBar from 'components/Bar/SelectBar';
import PlanDiv from 'components/\bPlans/PlanDiv';
import MypageDiv from 'components/\bPlans/MypageDiv';

const Plans: React.FC = () => {
  const history = useHistory();
  const [selected, setSelected] = useState<'plans' | 'mypage'>('plans'); // 기본 선택: 'plans'

  const goToIce = () => {
    history.push(`/plans/ice-breaking`);
  };

  const goToSituation = () => {
    history.push(`/plans/content-recommendation`);
  };

  return (
    <div className="flex flex-col items-center">
      <SelectBar selected={selected} setSelected={setSelected} />
      {selected === 'plans' ? (
        <PlanDiv goToIce={goToIce} goToSituation={goToSituation} />
      ) : (
        <MypageDiv />
      )}
    </div>
  );
};

export default Plans;
