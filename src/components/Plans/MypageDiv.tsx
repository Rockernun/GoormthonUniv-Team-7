import Profile from 'components/Mypage/Profile';
import ShowMoreButton from 'components/Mypage/ShowMoreButton';
import React from 'react';

const MypageDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Profile colors="bg-white" />
      <ShowMoreButton category="즐겨잦기" />
    </div>
  );
};

export default MypageDiv;
