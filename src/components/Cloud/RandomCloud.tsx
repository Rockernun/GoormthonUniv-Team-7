import { LargeButton } from 'components/Button/Button';
import Initial from 'components/ToolTips/Initial';
import initialConsonants from 'data/initialConstatnts';
import React, { useState } from 'react';

const RandomCloud: React.FC = () => {
  const [initial, setInitial] = useState<string[]>(getRandomConsonants());

  function getRandomConsonants(): string[] {
    const randomConsonants: string[] = []; // 타입 명시
    while (randomConsonants.length < 2) {
      const randomIndex = Math.floor(Math.random() * initialConsonants.length);
      const consonant = initialConsonants[randomIndex];
      if (!randomConsonants.includes(consonant)) {
        randomConsonants.push(consonant);
      }
    }
    return randomConsonants;
  }

  const handleChangeWord = () => {
    setInitial(getRandomConsonants());
  };

  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[44px]">
      <Initial initial={initial} />
      <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
      <LargeButton text="다른 제시어" onClick={handleChangeWord} />
    </div>
  );
};

export default RandomCloud;
