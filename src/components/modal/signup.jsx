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
const SignUp = () => {
  const [tab, setTab] = useState("step1");

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
    isProfleUpdate1,
    openUpdateProfile1,
    closeUpdateProfile1,
    isProfleUpdate2,
    openUpdateProfile2,
    closeUpdateProfile2,
  } = useModal();

  const handleFinish = async (values) => {
    console.log("Form Values:", values);
    if (values) {
      closeSignUp();
      openUpdateProfile1();
    }
  };
  const [password, setPassword] = useState("");
  return (
    <Modal
      footer={null}
      wrapClassName="auth"
      className=" w-full !bg-transparent auth"
      closeIcon={false}
      open={signUpModal}
      onCancel={() => {
        closeSignUp();
      }}
      style={{ position: "relative", zIndex: "200" }}
    >
      <div className="sm:max-w-[488px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeSignUp();
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
              closeSignUp();
              openLoginModal();
            }}
          />
        </div>
        {/* Form Header */}
        <h2 className="leading-[32.84px] text-[28px]  font-semibold text-[#242628] mb-[40px] ">
          Sign Up
        </h2>

        {/* Form Fields */}
        <Form layout="vertical" onFinish={handleFinish}>
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
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
              />
            </Form.Item>

            <FormPassword
              name="password"
              checkPassword={true}
              label="Password"
              min={8}
              password={password}
              setPassword={setPassword}
              className="h-[56px]"
            />
            <Form.Item
              name={"confirm_password"}
              label={
                <p className="text-base font-medium text-[#242628]">
                  {"Repeat Password"}
                </p>
              }
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject("Please confirm your password!");
                    }
                    if (password !== value) {
                      return Promise.reject("The two passwords do not match!");
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder={"**************"}
                className="border border-[#E0E0E0] rounded-[10px] ps-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
                iconRender={(visible) =>
                  visible ? (
                    <FiEye size={16} style={{ color: "#9CA3AF" }} />
                  ) : (
                    <FiEyeOff size={16} style={{ color: "#9CA3AF" }} />
                  )
                }
              />
            </Form.Item>

            {/* Sign Up Button */}
            <button
              className={
                "border-2 mb-4 bg-primary  button text-white hover:bg-transparent w-full hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-[56px] py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm"
              }
              type="submit"
            >
              Sign Up
            </button>
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
            Sign Up With Google
          </button>

          {/* Login Link */}
          <p className="text-center text-base capitalize text-[#242628] pt-[24px] link font-medium">
            Already Have An Account?{" "}
            <span
              className="text-[#C4976A] hover:underline cursor-pointer font-medium hover:text-primary link"
              onClick={() => {
                openLoginModal();
                closeSignUp();
              }}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignUp;
