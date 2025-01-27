// import "../../../src/style/Style.css";
import case1 from "./../../../public/images/case-1.png";
import case2 from "./../../../public/images/case-2.png";
import case3 from "./../../../public/images/case-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CaseCard from "./card/caseCard";
import Button from "./button";


const CaseStudy = () => {
  const data=[
    {
      image: case1,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case2,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case3,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case1,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case2,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case3,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    }
  ]
  return (
    <div className="case-study text-black">
      <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[29px] ">
        <div className=" text-center sm:text-start">
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

        <div className="pt-[16px]">
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
            className="mySwiper"
          >
            {
              data?.map((i,index)=>{
                return (
                  <SwiperSlide key={index}>
                  <CaseCard data={i}/>
                  </SwiperSlide>
                )
              })
            }
       </Swiper>
        </div>
        <div className="flex justify-center text-center md:mt-[50px] mt-[27px]">
          <Button>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
