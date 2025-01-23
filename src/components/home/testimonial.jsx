import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import Test1 from "./../../../public/images/Testi-1.png";
import Test2 from "./../../../public/images/Testi-2.png";

import TLeft from "./../../../public/images/testi-left.png";
import TRight from "./../../../public/images/testi-right.png";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../common/card/testimonialCard";

const Testimonial = () => {
  let sliderRef = useRef(null);
  const data = [
    {
      image: Test1,
      name: "Jordan Air",
      law: "Civil Law",
      review:
        " I couldn’t have asked for better representation. The team was professional, thorough, and dedicated to my case. They ensured my rights were protected and achieved a favorable outcome.",
      rate: 4,
    },
    {
      image: Test2,
      name: "Jordan Air",
      law: "Civil Law",
      review:
        " I couldn’t have asked for better representation. The team was professional, thorough, and dedicated to my case. They ensured my rights were protected and achieved a favorable outcome.",
      rate: 4.5,
    },
    {
      image: Test1,
      name: "Jordan Air",
      law: "Civil Law",
      review:
        " I couldn’t have asked for better representation. The team was professional, thorough, and dedicated to my case. They ensured my rights were protected and achieved a favorable outcome.",
      rate: 4.5,
    },
    {
      image: Test2,
      name: "Jordan Air",
      law: "Civil Law",
      review:
        " I couldn’t have asked for better representation. The team was professional, thorough, and dedicated to my case. They ensured my rights were protected and achieved a favorable outcome.",
      rate: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white relative z-40 testimonial">
      <div className="hidden 3xl:block absolute bottom-0">
        <img className="brightness-50" src={TLeft} alt="..." />
      </div>
      <div className="hidden 3xl:block absolute right-0">
        <img className="brightness-50" src={TRight} alt="..." />
      </div>

      <div className="custom-container lg:py-[130px] md:py-[80px] py-[29px] ">
        <div className="flex flex-col md:flex-row w-full lg:gap-12 md:gap-7 gap-5">
          {/* grid 1 */}
          <div className="w-full md:w-2/3  work-sans md:order-1 order-2">
            <Swiper
              onSwiper={(swiper) => (sliderRef.current = swiper)}
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
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              // modules={[Pagination]}
              className="mySwiper"
            >
              {data?.map((i, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TestimonialCard data={i} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="md:hidden block mt-[20px]">
              <div className="flex md:justify-start justify-center gap-4">
                <div
                  onClick={() => sliderRef.current.slidePrev()}
                  className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-primary flex justify-center items-center"
                >
                  <MdChevronLeft className="hover:text-white text-black text-2xl " />
                </div>
                <div
                  onClick={() => sliderRef.current.slideNext()}
                  className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-primary flex justify-center items-center"
                >
                  <MdChevronRight className="hover:text-white text-black text-2xl " />
                </div>
              </div>
            </div>
          </div>

          {/* grid 2 */}
          <div className="w-full md:w-1/3 flex justify-center flex-col  md:text-start text-center md:order-2 order-1">
            <p className="section-subtitle">Testimonials</p>

            <h1 className="section-title " style={{ paddingTop: "2px" }}>
              What Our Client Say
              <span className="text-[#D4AF37]"> About Us</span>
            </h1>

            <p
              className="section-description"
              style={{ color: "white", paddingTop: "2px" }}
            >
              Our clients' words reflect trust, expertise, and exceptional
              results.
            </p>
            <div className="hidden md:block mt-[-4px]">
              <div className="flex md:justify-start justify-center gap-4">
                <div
                  onClick={() => sliderRef.current.slidePrev()}
                  className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-primary flex justify-center items-center"
                >
                  <MdChevronLeft className="hover:text-white text-black text-2xl " />
                </div>
                <div
                  onClick={() => sliderRef.current.slideNext()}
                  className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-primary flex justify-center items-center"
                >
                  <MdChevronRight className="hover:text-white text-black text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
