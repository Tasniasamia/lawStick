import { useModal } from "../../context/modalContext";
import Button from "../common/button";

const Banner = () => {
  const {openLoginModal, closeLoginModal}=useModal();
  return (
    <div
      className="relative overflow-hidden  2xl:bg-trasnsparent bg-black   text-white pt-[89px] hero-banner xl:mb-[150px] md:mb-14 mb-[29px]"
      style={{
        backgroundImage: `url(./images/bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute h-full w-full ">
        <div className="flex md:flex-row flex-col h-full custom-container  lg:gap-[100px] gap-[50px]">
          <div className="xl:basis-2/3 lg:basis-1/2 md:basis-full">
            <div className="flex flex-col justify-center text-start w-full md:pb-16 xl:pt-[230px] lg:pt-[200px] md:pt-[120px] sm:pt-[80px] pt-[50px] pb-10 ">
              <p className="md:text-lg   sm:text-base text-sm font-medium sm:mb-[13px]">
                Dependable Legal Support with Unwavering Dedication
              </p>
              <h1 className="hero-title 2xl:text-[64px] xl:text-[55px] lg:text-[48px]  sm:text-[34px] text-[28px] leading-[35px]  font-normal  xl:leading-[76px] lg:leading-[60px] sm:leading-[40px]  md:py-0 py-2">
                Committed to Excellence,
                <br />
                Dedicated to
                <span className="text-[#D4AF37] ms-1 italic">Your Justice</span>
              </h1>
              <p className="lg:text-base md:text-xs sm:text-base   text-[15px] font-normal md:pt-[13px]  2xl:w-[666px] xl:w-[600px] lg:w-[500px]  w-full">
                We deliver tailored legal solutions with precision and
                expertise, prioritizing your case to achieve the best outcomes. With
                years of experience, we ensure your case receives the attention
                it deserves.
              </p>
              <div className=" lg:mt-10 sm:mt-5 mt-6 ">
                <Button onClick={()=>{openLoginModal()}}>
                  Get Appointed
                </Button>
              </div>
            </div>
          </div>
          <div className="xl:basis-1/3 lg:basis-1/2 md:basis-full "></div>
        </div>
      </div>
      <div className="md:flex hidden h-full">
        <div className="md:basis-1/2 basis-full"></div>
        <div className="md:basis-1/2 basis-full ">
          <div className="relative hero-images  h-full ">
            <img
              className="absolute hero-image-shape bottom-0 hidden md:block   xl:h-[828px]     2xl:right-[80px] right-0 2xl:w-[773px] xl:w-[690px]"
              src="./images/banner-bg-image.png"
              alt="..."
            />
            <img
              className="absolute bottom-0 hidden md:block translate-x-1/2 right-1/2"
              src="./images/ban-image.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

