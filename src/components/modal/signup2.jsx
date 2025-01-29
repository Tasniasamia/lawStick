import { IoClose } from "react-icons/io5";
import Button from "../common/button";
import { Form, Modal } from "antd";
import { TbArrowRightToArc } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import FormPassword from "../common/form/password";
import { useModal } from "../../context/modalContext";

const SignUp2 = () => {
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

  const handleFinish = async (values) => {
    console.log("Form Values:", values);
    closeLoginModal();
    closeSignUp2();
    closeSignUp1();
  };

  return (
    <Modal
      footer={null}
      className=" w-full !bg-transparent "
      closeIcon={false}
      open={openSignUp2}
      onCancel={closeSignUp2}
    >
      <div className="sm:max-w-[488px] w-full sm:mx-0 mx-2 bg-white rounded-[20px] p-10 relative">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            closeSignUp2();
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
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Email Address
              </p>
            }
            name="email"
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

          <FormPassword
            name="password"
            checkPassword={true}
            label="Password"
            required={true}
            min={8}
          />
          <FormPassword
            name="confirm_password"
            checkPassword={false}
            label="Repeat Password"
            confirm
          />

          {/* Sign Up Button */}
          <Button className={"w-full  my-[16px]"} type="submit">
            Sign Up
          </Button>
        </Form>
        {/* Google Sign Up Button */}
        <button className="w-full bg-[#EDEDED] text-[#242628] py-3 rounded-md border transition-colors flex items-center justify-center gap-2">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4"
          />
          Sign Up With Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 pt-[24px]">
          Already Have An Account?{" "}
          <a href="#" className="text-[#C4976A] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default SignUp2;
