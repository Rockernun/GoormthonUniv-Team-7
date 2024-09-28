import React from 'react';
import { Modal } from './Modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // 확인 핸들러 추가
}

const GameModal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-txt_primary bg-opacity-65 z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <Modal
          innerText="게임을 그만하고 다음 게임으로 넘어갈까요?"
          onClose={onClose}
          onConfirm={onConfirm} // 확인 핸들러 전달
        />
      </div>
    </div>
  );
};

export default GameModal;
