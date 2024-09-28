import { useState } from 'react';
import { XSmallButton } from '../Button/Button';
import { TabProps } from 'types/Tab.type';

export const Tab = ({ buttonTexts }: TabProps) => {
  const [active, setActive] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden pl-[20px] py-[10px]">
      <div className="flex flex-row justify-start items-center gap-[10px] whitespace-nowrap">
        {buttonTexts.map((text, index) => (
          <XSmallButton
            key={index}
            text={text}
            textColor={active === index ? 'text-black' : 'text-black'}
            bgColor={active === index ? 'bg-main_primary' : 'bg-white'}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
