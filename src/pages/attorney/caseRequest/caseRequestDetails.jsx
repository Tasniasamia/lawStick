import { u } from "framer-motion/client";
import React from "react";
import { use } from "react";
import { FaRegFilePdf } from "react-icons/fa";

const CaseRequestDetails = () => {

    const userData = {
        image: "https://i.ibb.co.com/hRT4XRVP/image-3.png",
        name: "Abdullah Al Faisal",
        email: "abdullah@lawstick.com",
        phone: "+15852826740",
        presentAddress: "20 Cooper Square, New York, USA",
        permanentAddress: "20 Cooper Square, New York, USA",
        dob: "23 Dec 2024",
        postalCode: "9100",
        country: "United States of America",
        caseDetails: {
          caseType: "Murder",
          caseShortDescription:
            "This divorce case concerns Party A and Party B, filed on grounds of reason. Primary matters include the division of assets, child custody, and alimony, with the objective of achieving an equitable resolution.",
          relatedCaseDocument: "",
        },
      };
      
      

  return (
    <div className=" xl:pb-0 pb-[20px]">
    <div className="flex justify-start border-b-2 md:py-[38px] py-[17px] md:px-10 sm:px-8 px-[22px] ">
      <h1 className="dashboard-title">Case Request</h1>
    </div>

    <div className="md:px-10 px-5 md:mt-10 mt-6 md:mb-[117px] mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
        {/* 1 */}
        <div>
        <div className="border rounded-[20px] lg:px-10 px-5 lg:py-10 py-5 min-h-[548px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans mb-10">
      Client Info
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <img
          className="xl:h-[100px] xl:w-[100px] lg:h-[58px] lg:w-[58px] md:w-[69px] md:h-[64px] h-[48px] w-[48px]"
          src={userData.image}
          alt=""
        />
        <div className="">
          <p className="font-medium text-lg text-[#242628] work-sans">{userData.name}</p>
          <p className="font-medium work-sans text-[#818B8F]">{userData.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sans-500-16 whitespace-nowrap">
          <span className="text-[#818B8F]">Phone:</span> {userData.phone}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F]">Present Address:</span> {userData.presentAddress}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F]">Permanent Address:</span> {userData.permanentAddress}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Date Of Birth:</span>{" "}
          {userData.dob}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Postal Code:</span>{" "}
          {userData.postalCode}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Country:</span>{" "}
          {userData.country}
        </p>
      </div>
    </div>
        </div>
        {/* 2 */}
        <div>
        <div className="border rounded-[20px] lg:px-10 px-5 lg:pt-10 lg:pb-[58px]  py-5 min-h-[548px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
        Case Information
      </h1>

      <div className=" ">
        <p className="font-medium work-sans mb-10">
          <span className="text-[#818B8F]">Case Type:</span> {userData.caseDetails.caseType}
        </p>
        <p className="font-medium work-sans text-[#818B8F] flex flex-col gap-4 mb-10">
          Case Short Description:
          <br />
          <p className="text-[#3A3D3F]">{userData.caseDetails.caseShortDescription}</p>
        </p>
        <div>
          <p className="font-medium work-sans mb-6">
            <span className="text-[#818B8F]">Related Case Document:</span>{" "}
            {userData.caseDetails.relatedCaseDocument}
          </p>
          <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
            <FaRegFilePdf /> Download Pdf
          </button>
          <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center">
            <FaRegFilePdf /> Download Pdf
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>

      <div className="flex gap-5 mt-[50px]">
          <button className="sm:w-[130px] sm:h-14 w-[89px] h-11 text-sans-500 sm:text-lg text-base rounded-[8px] bg-[#EDEDED]">Decline</button>
          <button className="sm:w-[130px] sm:h-14 w-[89px] h-11 text-sans-500 sm:text-lg text-base rounded-[8px] bg-[#C7A87D] text-white">Accept</button>
      </div>
    </div>
  </div>
  );
};

export default CaseRequestDetails;
