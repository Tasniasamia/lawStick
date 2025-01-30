// ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModal,setSignUpModal]=useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);



  const openSignUp = () => setSignUpModal(true);
  const closeSignUp = () => setSignUpModal(false);

  return (
    <ModalContext.Provider
      value={{ isLoginModalOpen, openLoginModal, closeLoginModal,openSignUp,closeSignUp,signUpModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
