import React from "react";
import PageTitle from "../../../components/common/title/pageTitle";

const CaseDetails = () => {
  return (
    <div>
      <PageTitle>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-6">
          <h1 className="dashboard-title">Case History</h1>
        </div>
      </PageTitle>
     

        <div className="md:px-10 px-5 md:mt-10 mt-6 md:mb-[62px] mb-[30px]  ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            {/* 1 */}
            <div>
              <div className="border rounded-[20px] md:px-10 px-5 md:py-10 py-5 md:min-h-[649px]">
                <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans mb-10">
                  Attorney Info
                </h1>
                <div className="flex items-center gap-3 mb-8">
                  <img
                    className="lg:h-[100px] lg:w-[100px] md:w-[69px] md:h-[64px] h-[48px] w-[48px]"
                    src={"https://i.ibb.co.com/PvNX9d5x/case-History-guy.png"}
                    alt=""
                  />
                  <div className="">
                    <p className="font-medium text-lg text-[#242628] work-sans">
                      Abdullah Al Faisal
                    </p>
                    <p className="font-medium work-sans text-[#818B8F]">
                      Criminal Lawyer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="font-medium work-sans break-all">
                    <span className="text-[#818B8F]">Email:</span>{" "}
                    Abdullah@lawstick.com
                  </p>
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F]">Phone:</span> +15852826740
                  </p>
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F]">Experience:</span> 4 years
                  </p>
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F] leading-[27px]">
                      Qualification:
                    </span>{" "}
                    Qualification Juris Doctor (JD): Earned from oxford
                    university, specializing in corporate or criminal law. Bar
                    Admission: Licensed to practice law in California Law
                    Association.Certified Mediator: Skilled in alternative
                    dispute resolution and mediation techniques.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div>
              <div className="border rounded-[20px] md:px-10 px-5 md:py-10 py-5 md:min-h-[649px]">
                <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
                  Case Info
                </h1>

                <div className="flex flex-col gap-6">
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F]">Case Type:</span> Murder
                  </p>
                  <p className="font-medium work-sans text-[#818B8F]">
                    Case Short Description:
                    <br />
                    <p className="text-[#3A3D3F]">
                      This divorce case concerns Party A and Party B, filed on
                      grounds of reason. Primary matters include the division of
                      assets, child custody, and alimony, with the objective of
                      achieving an equitable resolution.
                    </p>
                  </p>

                  <p className="font-medium work-sans text-[#818B8F]">
                    Case History:
                    <br />
                    <p className="text-[#3A3D3F]">
                      This case involves the alleged murder of Victim's Name by
                      Party A and Party B, focusing on evidence, motive, and
                      legal proceedings to determine accountability.
                    </p>
                  </p>
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F]">Case Status:</span>{" "}
                    <span className="w-[88px] h-[34px] text-white bg-gray-600 text-sm work-sans font-semibold rounded-[50px] px-4 py-[9px] capitalize">
                      ongoing
                    </span>
                  </p>
                  <p className="font-medium work-sans">
                    <span className="text-[#818B8F]">Hearing Date:</span> 21 Dec
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CaseDetails;
