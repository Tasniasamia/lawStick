import news1 from "./../../../public/images/news-1.png";
import news2 from "./../../../public/images/news-2.png";
import news3 from "./../../../public/images/news-3.png";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import BlogCard from "./card/blogCard";

const NewsBlog = () => {
  let sliderRef = useRef(null);
  const data = [
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
    },
    {
      tag: "Weapon Crime",
      image: news2,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
    },
    {
      tag: "Weapon Crime",
      image: news3,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
    },
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
    },
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
    },
  ];

  return (
    <div className="  text-black">
      <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[29px] ">
        <div className=" sm:text-start text-center">
          <p className="section-subtitle text-[#D4AF37]">News & Blog</p>
          <h1 className="section-title">Our Latest Blog & News</h1>
          <p className="section-description">
            Stay informed with our latest blogs and news, featuring expert
            insights,
            <br className="hidden md:inline" />
            updates, and valuable legal advice
          </p>
        </div>

        <div className="!pt-[16px]">
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
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {data?.map((i, index) => {
              return (
                <SwiperSlide key={index}>
                  <BlogCard data={i} />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex justify-center text-center mt-[50px]">
          <div className="flex gap-4">
            <div
              onClick={() => sliderRef.current.slidePrev()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
            >
              <MdChevronLeft className="hover:text-white text-black text-2xl " />
            </div>
            <div
              onClick={() => sliderRef.current.slideNext()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
            >
              <MdChevronRight className="hover:text-white text-black text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
