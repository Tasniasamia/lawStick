import hammer from "./../../../public/images/hammer.png";
import daripalla from "./../../../public/images/daripalla.png";
import house from "./../../../public/images/house.png";
import Pagination from "./../common/pagination";
import practiceCivil from "./../../../public/images/Practicecivil.png";
import practiceEmployee from "./../../../public/images/Practiceemployee.png";
import practiceEducation from "./../../../public/images/Practiceeducation.png";
import practiceCorporate from "./../../../public/images/Practicecorporate.png";
import ServiceCard from "../common/card/serviceCard";
import { useState } from "react";

const OurService = () => {

  const data = 
  {
    error: false,
    msg: "Catches fetched successfully",
    data: {
        page: 1,
        limit: 8,
        totalDocs: 17,
        totalPages: 3,
        docs:[
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
    
  ] ,   
  hasNextPage: true,
  hasPrevPage: false
}
}

const [currentPage, setCurrentPage] = useState(data?.data?.page)
const [services, getServices] = useState(data?.data?.docs || [])
const [totalPages, setTotalPages] = useState(data?.data?.totalPages) 
const handlePageChange = async (page) => {
  try {
    const response = await fetch(`/api/products?page=${page}&limit=8`)
    const data = await response.json()

    if (!data.error) {
      getServices(data?.data?.docs)
      setCurrentPage(data?.data?.page)
      setTotalPages(data?.data?.totalPages)
    }
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}

  return (
    <div className=" text-white relative service  xl:mb-[150px] md:mb-14 mb-[29px]">
     

      <div className="custom-container  ">
        {/* text */}
        <div className="sm:px-0 px-3 ">
          <div className="sm:text-start text-center">
            <p className="section-subtitle text-[#D4AF37]">Service</p>

            <h1 className="section-title text-black">
              Our Practice Area
            </h1>
          </div>

          <div className="flex justify-between items-center ">
            <p className="section-description  text-textcolor">
              Our legal services protect your rights and deliver results with
              <br className="" />
              personalized expertise.
            </p>
          </div>
        </div>

        <div className="md:mt-[16px] mt-[27px] work-sans ">
          <div
           className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-[24px]"
          >
            
              {services?.map((i, index) => {
                return (<ServiceCard data={i} key={index}/> )
              })}
            
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      </div>
    </div>
  );
};

export default OurService;
