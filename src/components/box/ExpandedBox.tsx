import React, { MouseEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import titleContentsData from 'data/titleContentsData';
import bgColors from 'data/bgColors';

interface ExpandedBoxProps {
  title: string;
  color: keyof typeof bgColors;
  isClick: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | (() => void); // 유니언 타입으로 설정
  expandedClick?: () => void;
  redirectUrl?: string;
}

const ExpandedBox: React.FC<ExpandedBoxProps> = ({
  title,
  isClick,
  color,
  onClick,
  expandedClick,
  redirectUrl,
}) => {
  const history = useHistory();

  const handleRedirect = () => {
    if (redirectUrl) {
      history.push(redirectUrl);
    }
  };

  const boxStyle: string = `flex flex-col ${bgColors[color]} justify-center items-center border border-2 border-txt_primary gap-[21px] w-[335px] min-h-[110px] max-h-[327px] px-[32px] py-[38px] rounded-description shadow-description cursor-pointer`;

  return (
    <div className={boxStyle} onClick={onClick}>
      <div className="flex gap-[10px]">
        <img src={`/assets/${title}.svg`} alt={title} />
        <p className="text-[24px] text-center leading-title">{titleContentsData[title].title}</p>
      </div>
      {!isClick ? (
        <div
          className="flex w-[295px] h-[215px] justify-center items-center"
          onClick={() => {
            expandedClick && expandedClick();
            handleRedirect(); // URL로 이동
          }}
        >
          <p className="text-txt_secondary text-base text-center leading-content whitespace-pre-wrap">
            {titleContentsData[title].content}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExpandedBox;
