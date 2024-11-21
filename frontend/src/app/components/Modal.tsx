// app/components/Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Modal açık değilse hiçbir şey render etme

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl relative">
        {/* Kapatma butonu, modalın içinde ama üst kısmında */}
        <button
          className="absolute top-2 right-4 bg-white border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center hover:bg-red-400 transition duration-200"
          onClick={onClose}
        >
          <span className="text-gray-800">&times;</span> {/* Kapatma butonu */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
