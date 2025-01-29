import { IoClose } from "react-icons/io5";
import Button from "../common/button";
import { Form, Modal } from "antd";
import { TbArrowRightToArc } from "react-icons/tb";
import FormPassword from "../common/form/password";
import { useModal } from "../../context/modalContext";
import PhoneNumberInput from "./../common/form/phoneNumberInput";
const SignUp1 = () => {
  const [form] = Form.useForm();
  const {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignUp1,
    closeSignUp1,
    openSignUp2,
    closeSignUp2,
    signUp1Modal,
    signUp2Modal,
  } = useModal();

  

  return (
    <Modal
      open={signUp1Modal}
      onCancel={closeSignUp1}
      footer={null}
      className=" w-full !bg-transparent"
      closeIcon={false}
    >
      <div className="sm:max-w-[488px] w-full sm:mx-0 mx-2 bg-white rounded-[20px] p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeSignUp1();
          }}
        >
          <IoClose size={20} className="text-[#242628] text-[12px]" />
        </button>
        {/* Back button */}
        <div className="w-[40px] h-[40px] mb-[40px]">
          <TbArrowRightToArc className="text-[33.33px] text-[#242628]" />
        </div>
        {/* Form Header */}
        <h2 className="leading-[32.84px] text-[28px] font-semibold text-[#242628] mb-[40px]">
          Sign Up
        </h2>

        {/* Form Fields */}
        <Form form={form} layout="vertical">
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Full Name
              </p>
            }
            name="name"
            rules={[
              { required: true, message: "Please enter your name!" },
            ]}
          >
            <input
              placeholder="Full Name"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            />
          </Form.Item>

          <PhoneNumberInput name="phone_number"label={'Phone Number'}/>
         <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Date
              </p>
            }
            name="date"
            rules={[
              { required: true, message: "Please enter date!" },
            ]}
          >
            <input
              placeholder="Full Name"
              type="date"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            />
          </Form.Item>

          {/* Sign Up Button */}
          <Button className={"w-full  my-[16px]"} onClick={()=>{closeLoginModal();closeSignUp1();openSignUp2();}}>Next</Button>
        </Form>
      </div>
    </Modal>
  );
};

export default SignUp1;
