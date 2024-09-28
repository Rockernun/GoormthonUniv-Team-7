import React from 'react';

const Profile: React.FC<{ colors: string }> = ({ colors }) => {
  const boxStyle: string = `flex flex-col ${colors} justify-center items-center border border-2 border-txt_primary w-[335px] h-[86px] px-[32px] py-[16px] rounded-description shadow-description`;

  return (
    <div className={boxStyle}>
      <div className="flex flex-row justify-center items-center gap-x-[10px] h-[54px]">
        <img className="w-[54px] h-[54px]" src="/assets/Char/smile.svg" alt="profile" />
        <div className="flex flex-col text-[16px] gap-y-[10px]">
          <p>송연우</p>
          <p>supreme1mode@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
