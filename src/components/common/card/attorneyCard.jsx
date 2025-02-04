import { useState } from "react";
import { Appointment } from "../../../pages/user/attorney/appointment";
import { useModal } from "../../../context/modalContext";

const AttorneyCard = ({ data }) => {
  const {isAppointmentOpen, setIsAppointmentOpen}=useModal();
  return (
    <div className="xl:w-[285px] w-full  px-6 py-8 border rounded-[10px] shadow-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-full flex justify-center items-center">
          <img className="h-[70px] w-[70px]" src={data?.image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p class="font-semibold text-lg leading-[21px] text-[#242628] work-sans">
            {data?.name}
          </p>
          <p className="font-medium work-sans text-[#818B8F]">
            {data?.designation}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-3 font-medium work-sans">
          Experience:{" "}
          <span className="font-medium work-sans text-[#818B8F]">
            {data?.experience}
          </span>
        </p>
        <p className="line-clamp-2">
          Qualification:{" "}
          <span className="font-medium work-sans text-[#818B8F] ">
            {data?.qualification}
          </span>
        </p>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <button className="bg-[#C7A87D] hover:bg-[#B68C5A] w-[123px] h-[43px] lg:px-[22px] px-5 py-4 rounded-lg font-medium whitespace-nowrap text-base flex items-center gap-1 text-white work-sans"onClick={()=>{setIsAppointmentOpen(true)}}>
          Book Now
        </button>
        <p className="text-[#B68C5A] font-semibold text-lg work-sans">
          ${data?.price}
        </p>
      </div>
      
    </div>
  );
};

export default AttorneyCard;
