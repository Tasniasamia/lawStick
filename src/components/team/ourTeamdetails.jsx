import Button from "./../common/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import PracticeLaw from "./practiceLaw";
import member from "./../../../public/images/Alina.png";
import member2 from "./../../../public/images/Aliana2.png";

const OurTeamDetails = () => {
  const practices = [
    {
      law: "Civil Litigation",
      description:
        "Representing Clients in A Broad Range Of Disputes, Including Contracts, Property, And Torts.",
    },
    {
      law: "Family Law",
      description:
        "Providing Compassionate Support in Matters Related To Divorce, Child Custody, And Spousal Support.",
    },
    {
      law: "Corporate Law",
      description:
        "Offering Legal Guidance To Businesses On Formation, Compliance, Mergers, And Acquisitions.",
    },
    {
      law: "Criminal Defense",
      description:
        "Defending Individuals Charged With Criminal Offenses, Ensuring Their Rights Are Protected.",
    },
    {
      law: "Real Estate Law",
      description:
        "Assisting Clients With Property Transactions, Zoning Issues, And Landlord-Tenant Disputes.",
    },
  ];
  const legalExperience = [
    {
      category: "Practice Area",
      description:
        "Alan Gain is an Experienced Attorney Dedicated to Delivering Expert Legal Solutions With Integrity And Predictor, Specializing in [Pencille Annuity Of Law], She Provides Personalized Implementation And Unwanting Support To Her Clients, Ensuring Their Rights Are Protected And Justice Is Served.",
    },
    {
      category: "Professional Memberships",
      description:
        "Alan 264 23 Treat She Reminis At The Forefront Of Legal Developments, Write Also Footering Collaboration With Pace To Uphold The Highest Standards Of Legal Practice. These Memberships Are A Testament To Her Dedication To Excellence, Continuous Learning, And Her Contribution To The Broader Legal Community.",
    },
  ];

  return (
    <div className="relative xl:mb-[150px] md:mb-14 mb-[60px] work-sans">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row shadow-xl rounded-[20px] md:pl-10 md:pr-10 px-5 md:gap-7 gap-6 ">
          {/* image container */}
          <div className="xl:w-[57%] xl:mx-0 w-full mx-auto order-2 flex justify-center">
            <div className="rounded-[20px]">
              <img
                className="w-[648px] lg:h-[640px] md:h-[500px] h-[355px] object-cover rounded-[20px]"
                src={member}
                alt="About Us"
              />
            </div>
          </div>

          {/* text container */}
          <div className="eb-garamond w-full xl:w-3/5 flex flex-col justify-center  py-5 order-1">
            <h1 className="header-1 mb-[10px]">Alina Gain</h1>
            <p className="font-medium text-lg ">Senior lawyer</p>
            <p className="text-[#3A3D3F] text-base font-normal md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
              Alina Gain is a skilled attorney committed to providing expert
              legal solutions and protecting clients’ rights.
            </p>

            <div className="flex flex-col md:text-start">
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3">
                Certifications and Qualifications:
              </p>
              <ul className="list-disc pl-[27px]">
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px] ">
                  Juris Doctor (JD): Earned from oxford university, specializing
                  in corporate or criminal law.
                </li>

                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Bar Admission: Licensed to practice law in California Law
                  Association.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Certified Mediator: Skilled in alternative dispute resolution
                  and mediation techniques.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Continuing Legal Education (CLE): Regularly participates in
                  advanced legal education to stay updated on legal trends and
                  changes.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Professional Memberships: Member of American Bar Association,
                  State Bar Association, etc
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-[26px] flex-wrap sm:gap-[116px] gap-5">
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[rgb(182,140,90)] hover:text-white border flex justify-center items-center cursor-pointer">
                  <FaXTwitter className="text-2xl"></FaXTwitter>
                </div>
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[#B68C5A] hover:text-white border flex justify-center items-center cursor-pointer">
                  <FaFacebookF className="text-2xl"></FaFacebookF>
                </div>
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[#B68C5A] hover:text-white border flex justify-center items-center cursor-pointer">
                  <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                </div>
              </div>
              <div>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[56px] px-5">
          <h1 className="semi-header mb-6">Professional Experience:</h1>
          <p className="leading-[28px] text-[#3A3D3F]">
            Alina Gain is a seasoned attorney with extensive experience in
            handling diverse legal cases, including [specific areas of law].
            Over the years, she has successfully represented clients in complex
            matters, showcasing her expertise in litigation, negotiation, and
            legal strategy. Her professional journey includes working with
            renowned law firms and contributing to high-profile cases,
            demonstrating her dedication to achieving favorable outcomes for her
            clients. Beyond her practice, Alina also provides pro bono legal
            counsel, ensuring access to justice for underserved communities.
          </p>
        </div>
        <div className="mt-[40px] px-5">
          <h1 className="semi-header mb-6">Practice Areas:</h1>
          <p className="leading-[28px] text-[#3A3D3F]">
            Alina Gain offers expert legal services in the following areas:
          </p>

          <div className="mt-6 flex flex-col xl:flex-row">
            <div>
              {practices?.map((data, idx) => (
                <PracticeLaw key={idx} data={data} index={idx}></PracticeLaw>
              ))}
            </div>
            <div className="flex justify-center xl:mt-0 mt-10">
              <img
                className="xl:w-[424px] xl:h-[593px] md:w-[470px] md:h-[540px]"
                src={member2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[40px] px-5">
          <div>
            <h1 className="semi-header mb-[16px]">Legal Experience: </h1>
          </div>
          {legalExperience?.map((data, idx) => {
            return (
              <div key={idx} className="mt-[24px]">
                <h2 className="font-medium text-xl leading-[23px] mb-4">
                  {data?.category}:
                </h2>
                <p className="text-[#3A3D3F]">{data?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeamDetails;
