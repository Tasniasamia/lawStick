import hammer from "./../../../public/images/hammer.png";
import daripalla from "./../../../public/images/daripalla.png";
import house from "./../../../public/images/house.png";
import practiceDesign from "./../../../public/images/practiceDesign.png";
import practiceRound from "./../../../public/images/practice-round-design.png";
import practiceCivil from "./../../../public/images/Practicecivil.png";
import practiceEmployee from "./../../../public/images/Practiceemployee.png";
import practiceEducation from "./../../../public/images/Practiceeducation.png";
import practiceCorporate from "./../../../public/images/Practicecorporate.png";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import  { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import ServiceCard from "../common/card/serviceCard";
import Button from "../common/button";

const Service = () => {
  let swiperRef = useRef(null);
  const data = [
    {
      image: daripalla,
      name: "Law Family",
      description:
        "Law Family Dedicated attorneys offering expert legal counsel with care, integrity and support.",
    },
    {
      image: hammer,
      name: "Law Criminal",
      description:
        "Law Criminal Expert defense protecting rights with integrity and precision.",
    },
    {
      image: house,
      name: "Law Real Estate",
      description:
        "Real Estate Law Expert guidance ensuring secure transactions with integrity.",
    },
    {
      image: house,
      name: "Law Professional Advice",
      description:
        "Real Estate Law Expert guidance ensuring secure transactions with integrity.",
    },
    {
      image: practiceCivil,
      name: "Civil Law",
      description:
        "Resolving disputes and protecting rights with expertise, integrity, and dedication.",
    },
    {
      image: practiceEmployee,
      name: "Employee Law",
      description:
        " Protecting workplace rights with expertise, integrity, dedication, and personalized legal solutions  Protecting workplace rights with expertise, integrity, dedication, and personalized legal solutions.",
    },
    {
      image: practiceEducation,
      name: "Education Law",
      description:
        "Advocating for students' rights with expertise, integrity, and personalized legal support.",
    },
    {
      image: practiceCorporate,
      name: "Coroperate Security Law",
      description:
        " Safeguarding businesses with expert legal guidance, integrity,and proactive risk management.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white relative service">
      <div className="hidden 2xl:block absolute top-0">
        <img className="brightness-50" src={practiceDesign} alt="..." />
      </div>
      <div className="hidden 2xl:block absolute bottom-0">
        <img className="" src={practiceRound} alt="..." />
      </div>

      <div className="custom-container md:py-[62px] pt-[29px] pb-[38px] ">
        {/* text */}
        <div className="sm:px-0 px-3 ">
          <div className="sm:text-start text-center">
            <p className="section-subtitle">Service</p>

            <h1 className="section-title">
              Our Practice Area
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <p className="section-description"style={{color:"white"}}>
              Our legal services protect your rights and deliver results with
              <br className="" />
              personalized expertise.
            </p>
            {/* slider navigation buttons */}
            <div className="hidden md:block">
              <div className="flex items-center gap-5">
                <div
                  onClick={() => swiperRef.current.slidePrev()}
                  className="w-[50px] h-[50px] rounded-full border hover:bg-[#B68C5A] flex justify-center items-center cursor-pointer"
                >
                  <MdChevronLeft className="text-white text-2xl " />
                </div>
                <div
                  onClick={() => swiperRef.current.slideNext()}
                  className="w-[50px] h-[50px] rounded-full border hover:bg-[#B68C5A] flex justify-center items-center cursor-pointer"
                >
                  <MdChevronRight className="text-white text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-[16px] mt-[27px] work-sans ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                return (<SwiperSlide key={index} > <ServiceCard data={i} /> </SwiperSlide>)
              })}
            
          </Swiper>
        </div>
        <div className="md:hidden block mt-6">
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center cursor-pointer"
            >
              <MdChevronLeft className="hover:text-white text-black text-2xl " />
            </div>
            <div
              onClick={() => swiperRef.current.slideNext()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center cursor-pointer"
            >
              <MdChevronRight className="hover:text-white text-black text-2xl " />
            </div>
          </div>
        </div>
        <div className="flex md:justify-end justify-center md:pt-[50px] pt-[38px] cursor-pointer">
          <Button>See all Service</Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
