import React from 'react';
import titleContentsData from 'data/titleContentsData';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC<{ subject: string; nonIcon?: boolean }> = ({ subject, nonIcon }) => {
  const history = useHistory();

  const goBack = () => {
    history.go(-1);
  };

  return (
    <div className="flex py-[10px] justify-center items-center">
      <button type="button" className="absolute left-[20px]" onClick={goBack}>
        <img src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <div className="flex items-center justify-center gap-[4px]">
        {nonIcon ? (
          ''
        ) : (
          <img className="w-[20px] h-[20px]" src={`/assets/${subject}.svg`} alt={subject} />
        )}
        <p className="text-base text-center">
          {nonIcon ? `${subject}` : titleContentsData[subject].title}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
