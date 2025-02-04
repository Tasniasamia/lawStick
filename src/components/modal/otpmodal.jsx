import { IoClose } from "react-icons/io5";
import Button from "../common/button";
import { TbArrowRightToArc } from "react-icons/tb";
import { useModal } from "../../context/modalContext";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Form, message, notification, Modal } from "antd";
import OTPInput from "react-otp-input";
import { useTimer } from "use-timer";
import { useNavigate } from "react-router-dom";
const OtpModal = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignUp,
    closeSignUp,
    signUpModal,
    otpModal,
    openOtpModal,
    closeOtpModal,
  } = useModal();
  const handleFinish = async (values) => {
    console.log("Form Values:", values);
  };
  const navigate = useNavigate();
  // For OTP Timer
  const { time, start, pause, reset } = useTimer({
    initialTime: 120,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    if (email) {
      start();
    }
    if (time === 0) pause();
  }, [time, start, pause, email]);
  return (
    <Modal
      footer={null}
      className=" w-full !bg-transparent auth"
      closeIcon={false}
      open={otpModal}
      onCancel={closeOtpModal}
      style={{position:"relative",zIndex:"200"}}
      wrapClassName="auth"


    >
      <div className="sm:max-w-[488px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeOtpModal();
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>
        {/* Back button */}
        <div className="w-[40px] h-[40px] mb-[40px]">
          <TbArrowRightToArc className="text-[33.33px] text-[#242628] cursor-pointer" />
        </div>
        {/* Form Header */}
        <h2 className="text-center sm:leading-[32.84px] sm:text-[28px] text-base font-semibold text-[#242628] mb-[40px] ">
          Email verification code
        </h2>

        {/* Form Fields */}
        <Form
          form={form}
          layout="vertical"
          onClick={handleFinish}
          className="sm:px-[44px] px-[20px] flex flex-col items-center"
        >
          <>
            <h1 className="text-base font-normal text-center">
              Your Code to
              <span className="text-primary ms-1">user@gmail.com</span>
            </h1>
            <Form.Item name="otp" className="my-8 flex flex-col items-center">
              <OTPInput
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "40px",
                  height: "40px",
                  marginRight: "1rem",
                  fontSize: "24px",
                  lineHeight:"28.15px",
                  border: "1px solid #EDEDED",
                  fontWeight:"500",
                  outline: "none",
                  borderRadius: "8px",
                  display:"flex",
                  columnGap:"16px",
                  justifyContent:"center"
                }}
              />
            </Form.Item>
            <p className="dark:text-White_Color capitalize mt-6 mb-2 md:text-sm text-base font-poppins">
              {`Didn't receive the code? `}
              {time === 0 ? (
                <span
                  className={`text-primary cursor-pointer `}
                  onClick={async () => {}}
                >
                  Resend
                </span>
              ) : (
                <span className="text-primary">
                  Resend in {time} {"s"}
                </span>
              )}
            </p>

            {/* Sign Up Button */}
            <Button className={"w-full  my-[16px] "} type="submit">
              Verify
            </Button>
          </>
        </Form>
      </div>
    </Modal>
  );
};

export default OtpModal;
