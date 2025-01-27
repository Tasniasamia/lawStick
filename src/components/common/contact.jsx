import bg_contact from "./../../../public/images/bg-contact.png";
import { FiSend } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./button";
import { message } from "antd";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name: " + e.target.name.value,
      "email: " + e.target.email.value,
      "message: " + e.target.message.value);
      if((e.target.name.value)|| (e.target.email.value) || (e.target.name.value)){
       message.success("Message create successfully");
       e.target.reset();
      }
    
  };
  return (
    <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[29px] ">
      <div className="relative min-h-[738px] rounded-[20px]">
        <div
          style={{ backgroundImage: `url(${bg_contact})` }}
          className="absolute inset-0 bg-cover bg-center  rounded-[20px] z-0 py-[60px] md:ps-[60px] md:pe-[78px] pe-4 ps-4"
        ></div>

        <div className="relative py-[60px] md:ps-[60px] ps-4  rounded-[20px] md:pe-[78px] pe-4 z-10 flex lg:flex-row-reverse flex-col text-black    gap-10 bg-black h-full w-full bg-opacity-[70%]">
          {/* div 1 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className="md:basis-1/2 basis-full rounded-[20px] bg-white md:pt-[60px] md:pb-[81px] pt-[43px] pb-[51px] md:w-[588px] max-w-full lg:mx-0 md:mx-auto   md:px-10 px-4 order-2 "
            style={{boxShadow: "0px 0px 10px 0px #0000000D"
            }}
          >
            {/* name */}
            <label htmlFor="name" className="block font-medium text-lg mb-2">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-4 md:h-[72px] h-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
              name="name"
              required
            />

            {/* email */}
            <label
              htmlFor="email"
              className="block font-medium text-lg mb-2 mt-6"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-4 md:h-[72px] h-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />

            {/* message */}
            <label
              htmlFor="message"
              className="block font-medium text-lg mb-2 mt-6"
            >
              Your message
            </label>
            <textarea
              name={"message"}
              type="text"
              id="message"
              className="w-full px-4 py-2 lg:h-36 md:h-[5.5rem] h-[4rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              placeholder="Enter your message"
              required
            />
            <Button
              className="flex items-center gap-[10px] mt-[50px]"
              type='submit'
            >
              <FiSend size={18.36} />
              Send Message
            </Button>
          </form>
          {/* div 2 */}
          <div className="md:basis-1/2 basis-full    text-center text-white md:mt-0 mt-7 order-1 ">
            <div className="flex justify-center">
              <Button className={"button_overwrite mb-[40px]"}>
                Contact Us
              </Button>
            </div>
            <div className="">
              <h1 className="section-title text-[#D4AF37]">
                How Can We Assist You?
              </h1>
              <p className="section-description !text-white ">
                We’re here to help with your legal needs. Reach out for expert
                advice, answers to your questions, or support tailored to your
                case. Let us assist you every step of the way
              </p>
            </div>

            <div className="flex flex-col md:justify-start justify-center gap-4  pt-[16px] ">
              {/* <div className="md:mt-[60px] mt-4 px-6 space-y-9 "> */}
              <div className="flex flex-col md:flex-row items-center md:text-start text-center gap-2 font-medium text-xl md:py-[21.5px] py-4 md:px-[24px] px-4">
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  <MdMailOutline className="h-[18px] w-[18px]" />
                </div>
                <p className="font-medium text-[20px]">support@appstick.com</p>
              </div>
              <div className="flex flex-col md:flex-row items-center  md:items-center gap-2 font-medium text-xl md:py-[21.5px] py-4 md:px-[24px] px-4">
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  {" "}
                  <FiPhone className="h-[18px] w-[18px]"></FiPhone>
                </div>
                <p className="font-medium text-[20px]">+880 1404049797</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 font-medium text-xl md:py-[21.5px] py-4 md:px-[24px] px-4">
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  <IoLocationOutline className="h-[18px] w-[18px]"></IoLocationOutline>
                </div>
                <p className="font-medium text-[20px]">Sonadanga, Khulna</p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
