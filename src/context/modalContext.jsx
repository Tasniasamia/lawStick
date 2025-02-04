// ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModal,setSignUpModal]=useState(false);
  const [otpModal,setOtpModal]=useState(false);
  const [isProfleUpdate1,setIsProfileUpdate1]=useState(false);
  const [isProfleUpdate2,setIsProfileUpdate2]=useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);



  const openSignUp = () => setSignUpModal(true);
  const closeSignUp = () => setSignUpModal(false);

  const openUpdateProfile1=()=>setIsProfileUpdate1(true);
  const closeUpdateProfile1=()=>setIsProfileUpdate1(false);

  const openUpdateProfile2=()=>setIsProfileUpdate2(true);
  const closeUpdateProfile2=()=>setIsProfileUpdate2(false);

  const openOtpModal = () => setOtpModal(true);
  const closeOtpModal = () => setOtpModal(false);

  return (
    <ModalContext.Provider
      value={{isAppointmentOpen, setIsAppointmentOpen, isLoginModalOpen, openLoginModal, closeLoginModal,openSignUp,closeSignUp,signUpModal, otpModal,openOtpModal,closeOtpModal,isProfleUpdate1,openUpdateProfile1,closeUpdateProfile1,isProfleUpdate2,openUpdateProfile2,closeUpdateProfile2}}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
