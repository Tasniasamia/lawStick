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
import UpdateProfile2 from "./updateProfile2";
import MultipleImage from "../common/form/image";
const UpdateProfile1 = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(true);

  const {
    isLoginModalOpen, openLoginModal, closeLoginModal,openSignUp,closeSignUp,signUpModal, otpModal,openOtpModal,closeOtpModal,isProfleUpdate1,openUpdateProfile1,closeUpdateProfile1,isProfleUpdate2,openUpdateProfile2,closeUpdateProfile2 
  } = useModal();

  const handleFinish = async (values) => {
    console.log("Form Values:", values);
    openUpdateProfile2();
    closeUpdateProfile1();
  };
  return (
    <Modal
      footer={null}
      className=" w-full !bg-transparent "
      closeIcon={false}
      open={isProfleUpdate1}
      onCancel={closeUpdateProfile1}
    >
      <div className="sm:max-w-[488px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeUpdateProfile1();
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
                openSignUp();
                closeUpdateProfile1();
              }
            }}
          />
        </div>
        {/* Form Header */}
        <h2 className="sm:leading-[32.84px] sm:text-[28px] text-base font-semibold text-[#242628] mb-[40px] ">
          Update Your Profile
        </h2>

        {/* Form Fields */}
        <Form form={form} layout="vertical" onClick={handleFinish}>
          <>
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  Full name
                </p>
              }
              name="name"
              className="!w-full"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <input
                placeholder="Asif Rahman"
                type="text"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              />
            </Form.Item>
            <PhoneNumberInput
              name="phone"
              placeholder={"01614790538"}
              label={"Phone Number"}
            />
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  Date of Birth
                </p>
              }
              name="dob"
              rules={[{ required: true, message: "Please enter your dob!" }]}
            >
              <input
                type="date"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              />
            </Form.Item>
            <Form.Item name="image"label={
                <p className="text-base font-medium text-[#242628] ">
                  Profile Image
                </p>
              }>
              <MultipleImage/>
            </Form.Item>
            <Button className={"w-full  my-[16px] "} type="submit">
              Next
            </Button>
          </>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateProfile1;
