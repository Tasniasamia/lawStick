
import caseStudy2Image from "./../../../public/images/Case_Study_2_Image.png";
import data from "./../../../public/demodata/case";
import Case_Info from "./case_info";
const OurCaseDetails = () => {


  return (
    <div className="min-h-fit work-sans text-white relative">
      <div className="custom-container mb-[60px] text-black">
        {/* xl:mb-[150px] md:mb-14 mb-[29px] */}
        <img src={caseStudy2Image} alt="" />

        <div className="md:mt-[56px] mt-[28px] md:mb-14 lg:mb-[56px] ">
          <h1 className="header-1 mb-[10px] md:mb-[1.5rem] lg:mb-[56px]">
            The Anatomy Of A Civil Claim: Case Study And <br />
            Legal Implications
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] ">
            Purpose of the Study: Outline the goal of understanding civil claims
            and their legal ramifications.
          </p>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] mt-6">
            {" "}
            The primary purpose of this study is to explore the framework,
            procedures, and implications of civil claims in the legal system. By
            examining the nuances of civil litigation, this study seeks to
            provide a comprehensive understanding of how individuals and
            entities resolve disputes in a non-criminal context.
          </p>
        </div>

        <div>
          {data?.map((data, idx) => (
            <Case_Info key={idx} data={data}></Case_Info>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCaseDetails;
