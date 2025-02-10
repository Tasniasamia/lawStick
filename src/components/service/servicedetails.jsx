
import { useEffect, useState } from "react";
import Service_LawInfo from "./service_law_info";
import SerdetailsImage from './../../../public/images/ServiceDetailsImage.png';
import data from "./../../../public/demodata/service";
const OurServiceDetails = () => {


  

  return (
    <div className="min-h-fit  text-white relative">
      <div className="custom-container xl:mb-[150px] md:mb-14 mb-[60px]  text-black eb-garamond">
        <img src={SerdetailsImage} alt="image" />

        <div className="md:mt-[56px] mt-[28px] lg:mb-14">
          <h1 className="header-1 mb-[10px]">
            Law Family
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] ">
            Dedicated to providing comprehensive legal services for all
            family-related matters, including divorce, child custody, child
            support, spousal support, adoption, prenuptial agreements, and
            domestic disputes. We understand the emotional and personal
            challenges involved, which is why we approach every case with care,
            empathy, and a commitment to achieving the best possible outcome for
            you and your family. With a focus on integrity and personalized
            solutions, our team works tirelessly to protect your rights and
            ensure a fair resolution in even the most complex situations.
          </p>
        </div>

        <div className="text-[#242628]">
          <div className="lg:mt-0 mt-6">
            <h1 className="semi-header text-[#242628]  ">
              Key Areas of Family Law:
            </h1>
          </div>
 
          <div>
            {
               data.map((info, idx) => <Service_LawInfo
               key={idx}
               info={info}
               ></Service_LawInfo>)
            }
          </div>
         
        </div>

        <div className="lg:mt-14 mt-6 ">
          <h1 className="lg:text-[32px] md:text-[25px] text-[22px] font-medium text-[#242628] lg:leading-[41px] md:mb-6 font-ebgramond">
            Why Family Law Matters:
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] ">
            Family law is not just about legal proceedings; it’s about
            addressing deeply personal and emotional matters. A family lawyer
            acts as both an advocate and a counselor, helping clients navigate
            their challenges with empathy and precision. They aim to secure the
            best outcomes while minimizing emotional and financial strain.
          </p>
        </div>
        <div className="lg:mt-14 mt-6 ">
          <h1 className="lg:text-[32px] md:text-[25px] text-[22px] font-medium text-[#242628] lg:leading-[41px] md:mb-6 font-ebgramond">
            How We Handle Family Law Cases:
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] ">
            At LawStick, we approach every family law case with the utmost care
            and professionalism. Our goal is to provide personalized,
            compassionate legal counsel while safeguarding your rights and
            interests. We understand the sensitive nature of these cases and are
            committed to resolving them efficiently and equitably, ensuring a
            better future for you and your family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServiceDetails;
