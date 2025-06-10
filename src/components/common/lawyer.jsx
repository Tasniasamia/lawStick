import justice1 from "./../../../public/images/justiceIMG-1.png";
import justice2 from "./../../../public/images/justiceIMG-2.png";
import justice3 from "./../../../public/images/justiceIMG-3.png";
import justice4 from "./../../../public/images/justiceIMG-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LawyerCard from "../common/card/lawyerCard";

const Lawyer = () => {
  const data = [
    {
      name: "William Johnson",
      title: "Senior Lawyer",
      image: justice1,
    },
    {
      name: "Alina Gain",
      title: "Senior Lawyer",
      image: justice2,
    },
    {
      name: "Alex Gain",
      title: "Senior Lawyer",
      image: justice3,
    },
    {
      name: "William Johnson",
      title: "Senior Lawyer ",
      image: justice4,
    },
    {
      name: "William Johnson",
      title: "Senior Lawyer",
      image: justice1,
    },
    {
      name: "Alina Gain",
      title: "Senior Lawyer",
      image: justice2,
    },
    {
      name: "Alex Gain",
      title: "Senior Lawyer",
      image: justice3,
    },
    {
      name: "William Johnson",
      title: "Senior Lawyer ",
      image: justice4,
    },
  ];
  return (
    <div className=" min-h-fit work-sans text-black lawyer">
      <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[60px] ">
        <div className=" text-center">
          <p className="section-subtitle">Team</p>
          <h1 className="section-title">The Face Of Justice</h1>
          <p className="section-description ">
            Meet our dedicated legal team, committed to providing expert advice
            and
            <span className="hidden md:inline">
              <br />
            </span>
            achieving the best outcomes for our clients personalized expertise.
          </p>
        </div>

        <div className="mt-[16px] ">
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
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {data?.map((i, index) => {
              return (
                <SwiperSlide key={index}>
                  <LawyerCard data={i} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
