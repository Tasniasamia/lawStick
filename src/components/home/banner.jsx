import { useEffect } from "react";
import { useModal } from "../../context/modalContext";
import Button from "../common/button";
import gsap from "gsap";

const Banner = () => {
  const { openLoginModal, closeLoginModal } = useModal();
  useEffect(() => {
    gsap.fromTo(
      ".title",
      {
        y: "0vw",
        opacity: 0,
        repeat:true
      },
      {
        y: "1vw",
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        repeat:true,
      }
    );
  }, []);
  

  return (
    <div
      className="relative overflow-hidden 2xl:bg-trasnsparent bg-black text-white pt-[89px] hero-banner xl:mb-[150px] md:mb-14 mb-[60px]"
      style={{
        backgroundImage: `url(./images/bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute h-full w-full">
        <div className="flex md:flex-row flex-col h-full custom-container lg:gap-[100px] gap-[50px]">
          <div className="xl:basis-2/3 lg:basis-1/2 md:basis-full">
            <div className="flex flex-col justify-center text-start w-full md:pb-16 xl:pt-[230px]  md:pt-[100px] sm:pt-[80px] pt-[40px] pb-10">
              {/* Subtitle - Adjusted for better small screen readability */}
              <p className="md:text-lg sm:text-[18px] text-sm font-medium sm:mb-[13px] mb-2 px-4 sm:px-0 leading-[21.18px] tracking-widest">
                Dependable Legal Support with Unwavering Dedication
              </p>
              
              {/* Main title - Improved spacing and readability for mobile */}
              <h1 className="hero-title title 2xl:text-[64px] xl:text-[55px] lg:text-[48px] md:text-[32px] text-[26px] leading-[1.3] font-normal xl:leading-[76px] lg:leading-[60px] md:leading-[40px] px-4 sm:px-0">
                Committed to Excellence,
                <br />
                Dedicated to
                <span className="text-[#D4AF37] ms-1 italic font-semibold">Your Justice</span>
              </h1>

              {/* Mobile image container - Optimized positioning */}
              <div className="h-[360px] relative w-full md:hidden block mt-6 mb-4 translate-y-[-80px] ">
                <img
                  className="w-full h-full object-contain absolute top-0"
                  src="./images/ban-image.png"
                  alt="..."
                />
              </div>

              {/* Description text - Adjusted for mobile readability */}
              <p className="lg:text-base md:mt-0 xs:mt-[-90px] mt-[-115px] md:text-sm  md:text-start text-center text-sm font-normal md:pt-[13px] pt-0 2xl:w-[666px] xl:w-[600px] lg:w-[500px] w-full px-4 sm:px-0">
                We deliver tailored legal solutions with precision and expertise, 
                prioritizing your case to achieve the best outcomes. With years 
                of experience, we ensure your case receives the attention it deserves.
              </p>

              {/* Button container - Improved mobile positioning */}
              <div className="lg:mt-10 sm:mt-5 mt-6 px-4 sm:px-0 grid md:place-content-start place-content-center">
                <button className="px-[32px] py-[16px] bg-primary text-white font-medium text-[18px] leading-[24px] font-sans rounded-[8px]" onClick={openLoginModal}>
                  Get Appointed
                </button>
              </div>
            </div>
          </div>
          <div className="xl:basis-1/3 lg:basis-1/2 md:basis-full" />
        </div>
      </div>

      {/* Desktop/tablet image section - Unchanged */}
      <div className="md:flex hidden h-full">
        <div className="md:basis-1/2 basis-full" />
        <div className="md:basis-1/2 basis-full">
          <div className="relative hero-images h-full">
            <img
              className="absolute hero-image-shape bottom-0 hidden md:block xl:h-[828px] 2xl:right-[80px] right-0 2xl:w-[773px] xl:w-[690px]"
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