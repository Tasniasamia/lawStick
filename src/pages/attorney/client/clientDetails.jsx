import { BsFiletypeMp4 } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { RiFolderImageLine } from "react-icons/ri";

const ClientDetails = () => {
  const data = {
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
      caseHistory:
        "This case involves the alleged murder of Victim's Name by Party A and Party B, focusing on evidence, motive, and legal proceedings to determine accountability.",
      evidence: "",
    },
    booking_details: {
      date: "24 December 2024",
      timeSlot: "02:00 PM",
      createDate: "23 December 2024",
    },
    evidence: [
      { id: 1, type: "pdf", fileName: "Download Pdf" },
      { id: 2, type: "pdf", fileName: "Download Pdf" },
      { id: 3, type: "mp4", fileName: "Download mp4" },
      { id: 4, type: "jpg", fileName: "Download jpg" },
    ],
  };
  return (
    <div className="  xl:pb-0 pb-[20px]">
      <div className="flex justify-start border-b-2 md:py-[38px] py-[17px] big-mid:px-10 sm:px-8 px-[22px] ">
        <h1 className="dashboard-title">Client’s</h1>
      </div>

      <div className="md:px-10 px-5 md:mt-10 mt-6 md:mb-[117px] mb-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* 1 */}
          <div className="border rounded-[20px] lg:px-10 px-5 lg:py-10 py-5 min-h-[548px]">
            <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans mb-10">
              Client Info
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <img
                className="xl:h-[100px] xl:w-[100px] lg:h-[58px] lg:w-[58px] md:w-[69px] md:h-[64px] h-[48px] w-[48px]"
                src={data?.image}
                alt=""
              />
              <div className="">
                <p className="font-medium text-lg text-[#242628] work-sans">
                  {data?.name}
                </p>
                <p className="font-medium work-sans text-[#818B8F] break-all">
                  {data?.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sans-500-16 whitespace-nowrap">
                <span className="text-[#818B8F]">Phone:</span> {data?.phone}
              </p>
              <p className="text-sans-500-16">
                <span className="text-[#818B8F]">Present Address:</span>{" "}
                {data?.presentAddress}
              </p>
              <p className="text-sans-500-16">
                <span className="text-[#818B8F]">Permanent Address:</span>{" "}
                {data?.permanentAddress}
              </p>
              <p className="text-sans-500-16">
                <span className="text-[#818B8F] leading-[27px]">
                  Date Of Birth:
                </span>{" "}
                {data?.dob}
              </p>
              <p className="text-sans-500-16">
                <span className="text-[#818B8F] leading-[27px]">
                  Postal Code:
                </span>{" "}
                {data?.postalCode}
              </p>
              <p className="text-sans-500-16">
                <span className="text-[#818B8F] leading-[27px]">Country:</span>{" "}
                {data?.country}
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="border rounded-[20px] lg:px-10 px-5 lg:pt-10 lg:pb-[40px]  py-5 min-h-[548px]">
            <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
              Case Information
            </h1>

            <div className=" ">
              <p className="font-medium work-sans mb-[30px]">
                <span className="text-[#818B8F]">Case Type:</span>{" "}
                {data?.caseDetails?.caseType}
              </p>
              <p className="font-medium work-sans text-[#818B8F] flex flex-col gap-4 mb-[30px]">
                Case Short Description:
                <br />
                <span className="text-[#3A3D3F]">
                  {data?.caseDetails?.caseShortDescription}
                </span>
              </p>
              <p className="font-medium work-sans flex flex-col gap-4 ">
                <span className="text-[#818B8F]">Case_History:</span>{" "}
                <span className="leading-[27px]">
                  {data?.caseDetails?.caseHistory}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border mt-6 rounded-[20px] px-6 py-6">
          <h1 className="text-sans-500 text-2xl">Evidence</h1>
          <div className="grid sm:grid-cols-[165px_165px] grid-cols-1  sm:gap-x-[30px] ">
            {data?.evidence?.map((item, index) => {
              return (
                <div>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">{index + 1}. </span>
                    {item?.type === "pdf" && <FaRegFilePdf />}{" "}
                    {item?.type === "mp4" && <BsFiletypeMp4 />}{" "}
                    {item?.type === "jpg" && <RiFolderImageLine />}{" "}
                    {item?.fileName}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
