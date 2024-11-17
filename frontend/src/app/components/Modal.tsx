// app/components/Modal.tsx

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Modal açık değilse hiçbir şey render etme

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    &times; {/* Kapatma butonu */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;