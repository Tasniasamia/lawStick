import { FiSend } from "react-icons/fi";
import Button from "../common/button";
import { message } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock,FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";

const OurContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name: " + e.target.name.value,
      "email: " + e.target.email.value,
      "number: " + e.target.phone_number.value,
      "caseType: " + e.target.caseType.value,
      "message: " + e.target.message.value
    );
    if (e.target.name.value || e.target.email.value || e.target.name.value) {
      message.success("Message create successfully");
      e.target.reset();
    }
  };
  return (
    <div className="custom-container xl:mb-[150px] md:mb-14 mb-[60px] flex xl:flex-row flex-col gap-[56px]">
      <div className="md:basis-1/2 basis-full">
        <h1 className="header-1">Contact Us</h1>
        <p className="section-description md:w-[550px] w-full text-textColor">
          We’re here to help. Contact us today for personalized legal support
          and solutions.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[60px] sm:mb-[90px] mb-[45px]">
          <div className="flex gap-[8px]">
              <AiOutlineMail className="text-[30px] text-[#242628] mx-[5px]" />
            <div>
              <p className="text-[#242628] leading-[23.46px] text-[20px] font-medium capitalize">
                Email to us
              </p>
              <div className="pt-3">
                <p className="text-textColor">support@lawstick.com</p>
                <p className="text-textColor">info@lawstick.com</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px]">
              <LuPhone className="text-[30px] text-[#242628] mx-[5px]" />
            <div>
              <p className="text-[#242628] leading-[23.46px] text-[20px] font-medium capitalize">
                Call to us
              </p>
              <div className="pt-3">
                <p className="text-textColor">000 - 123 - 456789</p>
                <p className="text-textColor">000 - 123 - 456789</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px]">
              <CiLocationOn className="text-[30px] text-[#242628] mx-[5px]" />
            <div>
              <p className="text-[#242628] leading-[23.46px] text-[20px] font-medium capitalize">
                Visit Our Office Branch
              </p>
              <div className="pt-3">
                <p className="text-textColor">No: 58 A, East Madison Street,<br/>
                Baltimore, MD, USA 4508</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px]">
              <FaRegClock className="text-[30px] text-[#242628] mx-[5px]" />
            <div>
              <p className="text-[#242628] leading-[23.46px] text-[20px] font-medium capitalize">
                Business Hours
              </p>
              <div className="pt-3">
                <p className="text-textColor">Mon-Saturday, 09am -05pm</p>
                <p className="text-textColor">Mon-Saturday, 09am -05pm</p>
              </div>
            </div>
          </div>
        </div>
       <div className="flex gap-[8px] items-center">
        <div className="w-[64px] bg-transparent text-[#242628] hover:bg-primary hover:text-white h-[64px] flex justify-center items-center duration-300 transition-all rounded-full"><FaFacebookF className="text-[24px]"/></div>
        <div className="w-[64px] bg-transparent text-[#242628] hover:bg-primary hover:text-white h-[64px] flex justify-center items-center duration-300 transition-all rounded-full"><FaInstagram  className="text-[24px]"/></div>
        <div className="w-[64px] bg-transparent text-[#242628] hover:bg-primary hover:text-white h-[64px] flex justify-center items-center duration-300 transition-all rounded-full"><FaTwitter  className="text-[24px]"/></div>
       </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="md:basis-1/2 basis-full rounded-[20px] bg-white p-[40px] border border-[#E0E0E0]   md:px-10 px-4 order-2 "
      >
        <div className="flex sm:flex-row flex-col gap-6 mb-[24px]">
          {/* name */}
          <div className="lg:w-1/2 w-full">
            <label htmlFor="name" className="block font-medium text-base mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className=" px-[20px] pt-[21px] pb-5  h-[60px] w-full border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Full Name"
              name="name"
              required
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label htmlFor="email" className="block font-medium text-base mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" px-[20px] w-full pt-[21px] pb-5  h-[60px] border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-6 mb-[24px]">
          {/* name */}
          <div className="lg:w-1/2 w-full">
            <label
              htmlFor="phone-number"
              className="block font-medium text-base mb-3"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="phone-number"
              className=" px-[20px] pt-[21px] pb-5  h-[60px] w-full border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mobile Number"
              name="phone_number"
              required
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label
              htmlFor="casetype"
              className="block font-medium text-base mb-3"
            >
              Case Type
            </label>
            <select
              id="casetype"
              className=" px-[20px] w-full pt-[21px] pb-5  h-[60px] border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Case Type"
              name="caseType"
              required
            >
              <option value="civil">Civil</option>
              <option value="criminal" selected>
                Crimial
              </option>
            </select>
          </div>
        </div>
        {/* email */}

        {/* message */}
        <label
          htmlFor="message"
          className="block font-medium text-lg mb-2 mt-[19px]"
        >
          Your message
        </label>
        <textarea
          name={"message"}
          type="text"
          id="message"
          className="w-full px-[20px]  pt-[21px] pb-5  lg:h-[185px] md:h-[5.5rem] h-[4rem] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Enter your message"
          required
        />
        <Button
          className="flex items-center justify-center gap-[10px] mt-[50px] w-full rounded-[20px]"
          type="submit"
        >
          <FiSend size={18.36} />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default OurContact;
