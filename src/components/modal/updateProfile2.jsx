import { IoClose } from "react-icons/io5";
import Button from "../common/button";
import { Form, Input, Modal, Select } from "antd";
import { TbArrowRightToArc } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import FormPassword from "../common/form/password";
import { useModal } from "../../context/modalContext";
import { useState } from "react";
import PhoneNumberInput from "../common/form/phoneNumberInput";
import FormCountrySelect from "../common/form/country";
const UpdateProfile2 = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(true);

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
  };
  return (
    <Modal
      footer={null}
      className=" w-full !bg-transparent auth"
      closeIcon={false}
      open={isProfleUpdate2}
      onCancel={closeUpdateProfile2}
      style={{ position: "relative", zIndex: "200" }}
      wrapClassName="auth"
    >
      <div className="sm:max-w-[488px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeUpdateProfile2();
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
              if (user) {
                openUpdateProfile1();
                closeUpdateProfile2();
              }
            }}
          />
        </div>
        {/* Form Header */}
        <h2 className="leading-[32.84px] text-[28px]  font-semibold text-[#242628] mb-[40px] ">
          Update Your Profile
        </h2>

        {/* Form Fields */}
        <Form form={form} layout="vertical" onClick={handleFinish}>
          <>
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  Present Address
                </p>
              }
              name="present_address"
              rules={[
                {
                  required: true,
                  message: "Please enter your present address!",
                },
              ]}
           
            >
              <input
                placeholder="20 Cooper Square, New York, USA"
                type="text"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
              />
            </Form.Item>
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  Permanent Address
                </p>
              }
              name="permanent_address"
           
              rules={[
                {
                  required: true,
                  message: "Please enter your permanent address!",
                },
              ]}
            >
              <input
                placeholder="20 Cooper Square, New York, USA"
                type="text"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
              />
            </Form.Item>
            <FormCountrySelect
              name={"country"}
              label={"Country"}
              required={true}
            />

            <button
              className={
                "border-2 mb-4 mt-[16px] bg-primary  button text-white hover:bg-transparent w-full hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-[56px] py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm"
              }
              type="submit"
            >
              Next
            </button>
          </>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateProfile2;
