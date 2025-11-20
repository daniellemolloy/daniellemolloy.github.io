import React, { PropsWithChildren } from "react";
import { useState, useEffect } from 'react'
import { Container } from './styles'

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  handleClose: () => void;
}>;

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    
  useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Container>
      <div className="background" onClick={handleClose}>
          <div className="modal" onClick={(e) => {e.stopPropagation()}}>
              <div className="close" onClick={handleClose}></div>
              {children}
          </div>
      </div>
    </Container>
  );
};

export default Modal;