import { ModalProps } from 'types/Modal.type';
import { LargeButton } from '../Button/Button';

// Modal 컴포넌트
export const Modal: React.FC<ModalProps & { onClose: () => void; onConfirm: () => void }> = ({
  innerText,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="absolute flex flex-col items-start w-[326px] min-h-[184px] left-[calc(50%-163px)] top-[calc(50%-100px)] drop-shadow-[0_4px_4px_rgba(0,0,0,1)] min-p-20px">
      <div className="flex flex-row justify-center items-end px-[10px] pt-[28px] w-[326px] h-[30px] bg-white border-t-2 border-x-2 border-txt_primary rounded-t-[16px]"></div>
      <div className="flex flex-row justify-center items-center px-[10px] py-[8px] w-[326px] h-[76px] bg-white border-x-2 border-txt_primary">
        <span className="w-[160px] h-[42px] text-sm leading-[150%] text-center text-gray-800 whitespace-pre-wrap">
          {innerText}
        </span>
      </div>
      <div className="flex flex-col justify-end items-center px-[16px] py-[16px] w-[326px] h-[95px] bg-white border-b-2 border-x-2 border-txt_primary rounded-b-[16px]">
        <div className="flex flex-col items-center gap-[18px] w-[294px] h-[68px]">
          <div className="flex flex-row justify-center items-start gap-[10px] w-[294px] h-[68px]">
            <LargeButton text="아니요" bgColor="bg-white" onClick={onClose} />
            <LargeButton
              text="네"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            />{' '}
            {/* Confirm 후 모달 닫기 */}
          </div>
        </div>
      </div>
    </div>
  );
};
