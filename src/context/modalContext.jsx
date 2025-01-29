// ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [signUp1Modal,setSignUp1Modal]=useState(false);
  const [signUp2Modal,setSignUp2Modal]=useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openSignUp1 = () => setSignUp1Modal(true);
  const closeSignUp1 = () => setSignUp1Modal(false);

  const openSignUp2 = () => setSignUp2Modal(true);
  const closeSignUp2 = () => setSignUp2Modal(false);

  return (
    <ModalContext.Provider
      value={{ isLoginModalOpen, openLoginModal, closeLoginModal,openSignUp1,closeSignUp1,openSignUp2,closeSignUp2,signUp1Modal,signUp2Modal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
