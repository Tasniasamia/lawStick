import "../../../src/style/Style.css";
import case1 from "../../assets/case-1.png";
import case2 from "../../assets/case-2.png";
import case3 from "../../assets/case-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { RxBorderSolid } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";

const CaseStudy = () => {
  return (
    <div className="min-h-fit work-sans text-black">
      <div className="custom-container xl:pt-[150px] xl:pb-[75px] md:py-16 py-[29px] ">
        <div className="lg:space-y-4 eb-garamond text-center sm:text-start">
          <p className="section-subtitle">Case Study</p>
          <h1 className="section-title">
            Our Recent Case Project.
          </h1>
          <p className="section-description">
            Learn how we achieve results through expertise, dedication, and
            tailored
            <br className="hidden md:inline" />
            solutions to meet client goals.
          </p>
        </div>

        <div className="mt-[16px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case1} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                    The Anatomy of a Civil Claim: Case Study and Legal
                    Implications
                  </p>
                  <p className="h-[70px] lg:text-base text-sm text-[#3A3D3F] lg:leading-7 text-ellipsis line-clamp-3">
                    An exploration of a civil claim, analyzing its components
                    and legal implications in depth.
                  </p>
                  
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case2} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                  Property Disputes Unveiled: A Real Estate Law Case Study
                  </p>
                  <p className="h-[70px]  lg:text-base text-sm text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-3">
                  Insights into a key real estate law case and its legal impact.
                  </p>
                  
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case3} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                  The Complexities of Custody: A Family Law Case Analysis
                  </p>
                  <p className="h-[70px]  lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
                  An analysis of a family law case, focusing on legal issues in custody, divorce, and support.
                  </p>
                  
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case1} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                    The Anatomy of a Civil Claim: Case Study and Legal
                    Implications
                  </p>
                  <p className="h-[70px]  lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
                    An exploration of a civil claim, analyzing its components
                    and legal implications in depth.
                  </p>
                  {/* <div className="flex-grow"></div> */}
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case2} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                  Property Disputes Unveiled: A Real Estate Law Case Study
                  </p>
                  <p className="h-[70px]  lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
                  Insights into a key real estate law case and its legal impact.
                  </p>
                  
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                <div className="">
                  <img src={case3} alt="" />
                </div>
                <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                  <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                  The Complexities of Custody: A Family Law Case Analysis
                  </p>
                  <p className="h-[70px]  lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
                  An analysis of a family law case, focusing on legal issues in custody, divorce, and support.
                  </p>
                  
                  <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                    READ MORE <RxBorderSolid className="rotate-90" />{" "}
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>

          
            
          </Swiper>
        </div>
        <div className="flex justify-center text-center md:mt-[50px] mt-[27px]">
          <button className="bg-[#C7A87D] lg:px-7 px-5 lg:py-3 py-2 rounded-lg font-medium whitespace-nowrap  lg:text-lg text-base flex items-center gap-1 text-white ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
