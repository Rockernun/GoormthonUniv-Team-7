import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/NavBar';
import Description from 'components/ToolTips/Description';
import EtcBox from 'components/box/EtcBox';
import { useQuery } from 'react-query';
import { BalancegameResponse } from 'types/BalancegameResponse';
import { getBalancegames } from 'hooks/useBalance';
import { useState } from 'react';

const BalanceGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<BalancegameResponse, Error>('games', getBalancegames);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (data) {
      setCurrentQuestion((prev) => (prev + 1) % data?.games.length);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[375px] h-[860px] p-4 bg-background_color relative">
        <div className="mt-[30px]">
          <NavBar subject="vs" />
          <div className="flex flex-col justify-center items-center ">
            <div className="h-[196px]">
              <EtcBox
                subject="balance"
                color="main"
                balance={data?.games[currentQuestion].question_a}
              />
            </div>
            <img src="/assets/red-vs.svg" alt="red-vs" className="h-[48px] w-[48px]" />
            <div className="h-[196px]">
              <EtcBox
                subject="balance"
                color="main"
                balance={data?.games[currentQuestion].question_b}
              />
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
