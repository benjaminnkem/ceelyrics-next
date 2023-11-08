"use client";
import { useState, FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const closeModal = () => {
    setShowModal(false);
    onClose && onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md relative">
            <span className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={closeModal}>
              &times;
            </span>
            <h2 className="text-xl font-bold mb-3">Modal Content</h2>
            <p className="mb-3">This is an example of a custom reusable modal in Next.js.</p>
            <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded" />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
