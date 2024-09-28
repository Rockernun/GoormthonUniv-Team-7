import { ButtonProps } from 'types/Button.type';

export const LargeButton = ({ text, bgColor, textColor = 'text-black', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-min-24px py-4 h-[70px] w-[162px] min-w-[142px] border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span className={`text-2xl leading-[140%] flex justify-center items-center ${textColor}`}>
        {text}
      </span>
    </button>
  );
};

export const MediumButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-min-20px py-4 h-[58px] w-full max-w-full min-w-[110px] border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span className={`text-xl leading-[140%] flex justify-center items-center ${textColor}`}>
        {text}
      </span>
    </button>
  );
};

export const SmallButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-min-16px py-3 h-[46px] w-full max-w-full min-w-[88px] border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span className={`text-lg leading-[140%] flex justify-center items-center ${textColor}`}>
        {text}
      </span>
    </button>
  );
};

export const XSmallButton = ({
  text,
  bgColor,
  textColor = 'text-black',
  children,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-2 py-2 h-[33px] min-w-[40px] border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[12px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      {children ? (
        <div className="flex justify-center items-center w-full h-full">{children}</div>
      ) : (
        <span className={`text-xs leading-[140%] flex justify-center items-center ${textColor}`}>
          {text}
        </span>
      )}
    </button>
  );
};

export const XLargeButton = ({
  text,
  bgColor,
  textColor = 'text-black',
  onClick,
  img,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-min-24px py-4 h-[70px] w-[335px] min-w-[142px] border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      {img ? <img src="/assets/google.svg" alt="google" /> : ''}
      <span className={`text-2xl leading-[140%] flex justify-center items-center ${textColor}`}>
        {text}
      </span>
    </button>
  );
};
