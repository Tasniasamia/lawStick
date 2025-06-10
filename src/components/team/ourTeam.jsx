import justice1 from "./../../../public/images/justiceIMG-1.png";
import justice2 from "./../../../public/images/justiceIMG-2.png";
import justice3 from "./../../../public/images/justiceIMG-3.png";
import justice4 from "./../../../public/images/justiceIMG-4.png";
import { useState } from "react";
import LawyerCard from "../common/card/lawyerCard";
import Pagination from "../common/pagination";

const OurTeam = () => {
  const initialData = {
    error: false,
    msg: "team fetched successfully",
    data: {
      page: 1,
      limit: 8,
      totalDocs: 17,
      totalPages: 3,
      docs: [
        { name: "William Johnson", title: "Senior Lawyer", image: justice1 },
        { name: "Alina Gain", title: "Senior Lawyer", image: justice2 },
        { name: "Alex Gain", title: "Senior Lawyer", image: justice3 },
        { name: "William Johnson", title: "Senior Lawyer ", image: justice4 },
        { name: "William Johnson", title: "Senior Lawyer", image: justice1 },
        { name: "Alina Gain", title: "Senior Lawyer", image: justice2 },
        { name: "Alex Gain", title: "Senior Lawyer", image: justice3 },
        { name: "William Johnson", title: "Senior Lawyer ", image: justice4 },
      ],
      hasNextPage: true,
      hasPrevPage: false,
    },
  };

  const [currentPage, setCurrentPage] = useState(initialData.data.page);
  const [team, setTeam] = useState(initialData.data.docs);
  const [totalPages, setTotalPages] = useState(initialData.data.totalPages);

  const handlePageChange = async (page) => {
    try {
      const response = await fetch(`/api/lawyers?page=${page}&limit=8`); // Ensure the correct API endpoint
      const data = await response.json();

      if (!data.error) {
        setTeam(data.data.docs);
        setCurrentPage(data.data.page);
        setTotalPages(data.data.totalPages);
      }
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  return (
    <div className=" work-sans text-black lawyer">
      <div className="custom-container xl:pb-[150px] md:pb-14 pb-[60px]">
        <div className="text-center">
          <p className="section-subtitle">Team</p>
          <h1 className="section-title">The Face Of Justice</h1>
          <p className="section-description">
            Meet our dedicated legal team, committed to providing expert advice
            and
            <span className="hidden md:inline">
              <br />
            </span>
            achieving the best outcomes for our clients with personalized expertise.
          </p>
        </div>

        <div className="pt-[16px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {team.map((i, index) => (
              <LawyerCard data={i} key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      </div>
    </div>
  );
};

export default OurTeam;
