import { useEffect, useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import data from "./../../../public/demodata/casedetails";
const Tabs = () => {
  let [tabData, setTabData] = useState([]);
  let [activeTab, setActiveTab] = useState("problems");

  //   let renderTabContent = () => {
  //     let selectedData = tabData[0];
  //     if (!selectedData) {
  //       return null;
  //     }

  //     switch (activeTab) {
  //       case "problem":
  //         return (
  //           <div className="">
  //             <p className="md:pb-[40px] pb-5">{tabData[0].main_description}</p>
  //             {selectedData.problem.map((item) => (
  //               <div className="pl-2 mb-4">
  //                 <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
  //                   {item.number}. {item.title}:
  //                 </h1>
  //                 <ul class="list-disc pl-6 space-y-2 work-sans text-base">
  //                   <li>{item.description}</li>
  //                 </ul>
  //               </div>
  //             ))}
  //           </div>
  //         );
  //       case "challenges":
  //         return (
  //           <div>
  //             <p className="md:pb-[40px] pb-5">{tabData[1].main_description}</p>
  //             {tabData[1].challenges.map((item) => (
  //               <div className="pl-2 mb-4">
  //                 <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
  //                   {item.number}. {item.title}:
  //                 </h1>
  //                 <ul class="list-disc pl-6 space-y-2 work-sans text-base">
  //                   <li>{item.description}</li>
  //                 </ul>
  //               </div>
  //             ))}
  //           </div>
  //         );
  //       case "solved":
  //         return (
  //           <div>
  //             <p className="md:pb-[40px] pb-5">{tabData[2].main_description}</p>
  //             {tabData[2].solved.map((item) => (
  //               <div className="pl-2 mb-4">
  //                 <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
  //                   {item.number}. {item.title}:
  //                 </h1>
  //                 <ul class="list-disc pl-6 space-y-2 work-sans text-base">
  //                   <li>{item.description}</li>
  //                   {item.description1 && <li>{item.description1}</li>}
  //                   {item.description2 && <li>{item.description2}</li>}
  //                 </ul>
  //               </div>
  //             ))}
  //           </div>
  //         );
  //       case "solved_result":
  //         return (
  //           <div>
  //             <p className="md:pb-[40px] pb-5">{tabData[3].main_description}</p>
  //             {tabData[3].solved_result.map((item) => (
  //               <div className="pl-2 mb-4">
  //                 <h1 className="font-medium link lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
  //                   {item.number}. {item.title}:
  //                 </h1>
  //                 <ul class="list-disc pl-6 space-y-2 work-sans text-base">
  //                   <li>{item.description}</li>
  //                   {item.description1 && <li>{item.description1}</li>}
  //                   {item.description2 && <li>{item.description2}</li>}
  //                 </ul>
  //               </div>

  //             ))}
  //              <button className="primary-btn">
  //                 <AiOutlineFilePdf className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3" />
  //                 Download PDF
  //               </button>
  //           </div>
  //         );
  //     }
  //   };
  const filterData = data.find((i, index) => i?.name === activeTab);
  return (
    <div className="custom-container xl:mb-[150px] md:mb-14 mb-[29px] xl:px-5  md:px-8 sm:px-4 px-2 work-sans ">
      <div className="flex flex-wrap gap-4 work-sans">
        {data?.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab?.name)}
            className={`tab-btn capitalize ${
              activeTab === tab?.name
                ? "bg-[#B68C5A] text-white"
                : "bg-white text-black border"
            }`}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      <div className="rounded-b-[20px] border md:px-[40px] md:py-[40px] px-5 py-5">
        {/* {renderTabContent()} */}
        <div>
          <p className="md:pb-[40px] pb-5">{filterData?.description}</p>
          {filterData?.points?.map((item, index) => (
            <div className="pl-2 mb-4">
              <h1 className="font-ebgramond font-medium  lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3 ">
                {index + 1}. {item.title}:
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                {item?.details?.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {
            filterData?.file && (
                <button className="primary-btn">
                <AiOutlineFilePdf className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3" />
                Download PDF
              </button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Tabs;
