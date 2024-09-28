<<<<<<< Updated upstream
=======
import React, { useState, useEffect } from 'react';
>>>>>>> Stashed changes
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import EtcBox from 'components/box/EtcBox';
<<<<<<< Updated upstream

const BalanceGame: React.FC = () => {
=======
import { useQuery } from 'react-query';
import { BalancegameResponse } from 'types/BalancegameResponse';
import { getBalancegames } from 'hooks/useBalance';
import { Balancegame } from 'types/Balancegame.type';

const BalanceGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<BalancegameResponse, Error>('games', getBalancegames);
  if (error) {
    console.log(error.message);
  }

  const [balanceList, setBalanceList] = useState<Balancegame[]>([]);

  useEffect(() => {
    if (data) {
      setBalanceList(data.balance_games);
    }
  }, [data]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (balanceList) {
      setCurrentQuestion((prev) => (prev + 1) % balanceList?.length);
    }
  };

>>>>>>> Stashed changes
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[375px] h-[860px] p-4 bg-background_color relative">
        <div className="mt-[30px]">
          <NavBar subject="vs" />
          <div className="flex flex-col justify-center items-center ">
            <div className="h-[196px]">
<<<<<<< Updated upstream
              <EtcBox subject="balance" color="white" balance="100% 확률 10억" />
=======
              <EtcBox
                subject="balance"
                color="main"
                balance={balanceList[currentQuestion]?.question_a}
              />
>>>>>>> Stashed changes
            </div>
            <img src="/assets/red-vs.svg" alt="red-vs" className="h-[48px] w-[48px]" />
            <div className="h-[196px]">
<<<<<<< Updated upstream
              <EtcBox subject="balance" color="white" balance="50% 확률 1,000억" />
=======
              <EtcBox
                subject="balance"
                color="main"
                balance={balanceList[currentQuestion]?.question_b}
              />
>>>>>>> Stashed changes
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="absolute flex flex-col justify-center items-center w-[350px] bottom-[70px]">
              <Description text="어떤 걸 고를까요?" />
              <img className="mb-[-45px]" src="/assets/GoormCharacter.svg" alt="goorm-character" />
              <LargeButton text="다른 게임 할래요" onClick={handleNextQuestion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceGame;
