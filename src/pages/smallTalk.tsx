import React, { useState } from 'react';
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/NavBar';
import Description from 'components/ToolTips/Description';

//  MBTI 부분을 텍스트로 받아와야 오고, 그에 맞게 Description의 text도 바뀌어야 함.
const SmallTalk: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const topic = [
    {
      subject: 'MBTI',
      description: 'MBTI에 대해 이야기해보세요!',
      category: 'small_talk',
    },
    {
      subject: '스포츠',
      description: '좋아하는 스포츠가 뭐야?',
      category: 'small_talk',
    },
    {
      subject: '게임',
      description: '무슨 게임 해?',
      category: 'small_talk',
    },
    {
      subject: '아이돌',
      description: '어떤 아이돌 좋아해?',
      category: 'small_talk',
    },
  ];

  const handleNextTopic = () => {
    setCurrentTopic((prev) => (prev + 1) % topic.length);
  };

  return (
    <div className="p-[11px]">
      <NavBar subject="drink" />
      <div className="flex flex-col justify-center items-center relative">
        <div className="flex gap-2 justify-center items-center h-[450px] text-txt_secondary">
          <img src="/assets/cloud.svg" alt="cloud-emoji" className="h-6 w-6" />
          <div>스몰토크 주제</div>
        </div>
        <div className="absolute text-6xl top-64">{topic[currentTopic].subject}</div>
      </div>
      <div className="absolute flex flex-col justify-center items-center w-[352px] bottom-[44px]">
        <Description text={topic[currentTopic].description} />
        <img className="mb-[-45px]" src="/assets/GoormCharacter.svg" alt="goorm-character" />
        <LargeButton text="다른 게임 할래요" onClick={handleNextTopic} />
      </div>
    </div>
  );
};

export default SmallTalk;

//  밸런스 게임 선택하도록
//  퍼센트를 기입함으로써 중복 선택하는 사람들 방지
