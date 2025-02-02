import { IoClose } from "react-icons/io5";
import Button from "../common/button";
import { Form, Input, Modal, Select } from "antd";
import { TbArrowRightToArc } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import FormPassword from "../common/form/password";
import { useModal } from "../../context/modalContext";
import { useState } from "react";
import PhoneNumberInput from "./../common/form/phoneNumberInput";
import FormCountrySelect from "../common/form/country";
import { Link } from "react-router-dom";
const Login = () => {
  const [form] = Form.useForm();

  const {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignUp,
    closeSignUp,
    signUpModal,
  } = useModal();

  const handleFinish = async (values) => {
    console.log("Form Values:", values);
  };
  return (
    <Modal
      footer={null}
      className=" w-full !bg-transparent "
      closeIcon={false}
      open={isLoginModalOpen}
      onCancel={closeLoginModal}
      style={{position:"relative",zIndex:"200"}}
    >
      <div className="sm:max-w-[488px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeLoginModal();
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>
        {/* Back button */}
        <div className="w-[40px] h-[40px] mb-[40px]">
          <TbArrowRightToArc
            className="text-[33.33px] text-[#242628] cursor-pointer"
            onClick={() => {
              closeLoginModal();
            }}
          />
        </div>
        {/* Form Header */}
        <h2 className="sm:leading-[32.84px] sm:text-[28px] text-base font-semibold text-[#242628] mb-[40px] ">
          Sign in
        </h2>

        {/* Form Fields */}
        <Form form={form} layout="vertical" onClick={handleFinish}>
          <>
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  Email Address
                </p>
              }
              name="email"
              className="w-full"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <input
                placeholder="Example@lawstick.com"
                type="email"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              />
            </Form.Item>

            <Form.Item
              name={"password"}
              label={
                <p className="text-base font-medium text-[#242628]">
                  {"Password"}
                </p>
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password
                placeholder={"**************"}
                className="border border-[#E0E0E0] rounded-[10px] ps-[20px] w-full pt-[19px] pb-[18px]"
                iconRender={(visible) =>
                  visible ? (
                    <FiEyeOff size={16} style={{ color: "#9CA3AF" }} />
                  ) : (
                    <FiEye size={16} style={{ color: "#9CA3AF" }} />
                  )
                }
              />
            </Form.Item>
            <div className="grid place-content-end">
              <Link
                to="/forget-password"
                className="text-primary hover:text-primary hover:underline text-base font-medium -mt-3 !mb-[24px]"
              >
                Forget Password?
              </Link>
            </div>
            {/* Sign Up Button */}
            <Button className={"w-full  my-[16px] "} type="submit">
              Log In
            </Button>
          </>
        </Form>
        {/* Google Sign Up Button */}

        <div>
          <button className="w-full bg-[#EDEDED] text-[#242628] py-3 rounded-md border font-medium link transition-colors flex items-center justify-center gap-2">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
            />
            Log In With Google
          </button>

          {/* Login Link */}
          <p className="text-center text-base capitalize text-[#242628] pt-[24px] link font-medium">
            Do not have an account?{" "}
            <span
              className="text-[#C4976A] hover:underline cursor-pointer hover:text-primary link font-medium "
              onClick={() => {
                openSignUp();
                closeLoginModal();
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
