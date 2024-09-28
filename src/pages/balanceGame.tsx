import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/NavBar';
import Description from 'components/ToolTips/Description';
import EtcBox from 'components/box/EtcBox';

const BalanceGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { question_a: '100% 확률 10억', question_b: '50% 확률 1,000억' },
    { question_a: '무제한 여행', question_b: '무제한 식사' },
    { question_a: '평생 안 씻어도 깨끗함', question_b: '평생 폭식해도 살 안 찜' },
    { question_a: '똥맛 카레', question_b: '카레맛 똥' },
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
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
                balance={questions[currentQuestion].question_a}
              />
            </div>
            <img src="/assets/red-vs.svg" alt="red-vs" className="h-[48px] w-[48px]" />
            <div className="h-[196px]">
              <EtcBox
                subject="balance"
                color="main"
                balance={questions[currentQuestion].question_b}
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
