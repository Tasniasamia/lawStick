import { IoEyeOutline } from "react-icons/io5";
import SearchBar from "../../../components/common/searchBar";
import UserDashboardTable from "../../../components/common/table/userDashboardTable";
import PageTitle from "../../../components/common/title/pageTitle";
import { FaRegFilePdf } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CaseRequest = () => {
    const navigate = useNavigate();
    const data = {
        error: false,
        msg: "cases fetched successfully",
        data: {
          page: 1,
          limit: 8,
          totalDocs: 17,
          totalPages: 3,
          docs: [
            {
              id: 1,
              caseType: "Real State",
              status: "ongoing",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
            {
              id: 2,
              caseType: "Real State",
              status: "pending",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
            {
              id: 3,
              caseType: "Tax Law",
              status: "closed",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
            {
              id: 4,
              caseType: "Tax Law",
              status: "success",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
            {
              id: 5,
              caseType: "Tax Law",
              status: "closed",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
            {
              id: 6,
              caseType: "Tax Law",
              status: "closed",
              attorney: "Alina Gain",
              hearing_date: "21 Dec , 2024",
            },
          ],
          hasNextPage: true,
          hasPrevPage: false,
        },
      };
    
      const columns = [
        { text: "Client Name", dataField: "attorney" ,
        formatter: (_, d) => {
          return (<div className="flex gap-2 items-center">
           <img src= "https://i.ibb.co/8LBT96YN/image.png" alt="image"className="w-[50px] h-[50px] object-center rounded-full"/>
           <span>{d.attorney}</span>
          </div>)
        }},
        { text: "Case Type", dataField: "caseType" },
        
        {
            text: " File",
            dataField: "fileType",
            formatter: (_, d) => {
              return (
                <div
                  className="flex gap-2 text-xs items-center cursor-pointer place-content-center w-[118px] h-[34px] bg-[#EDEDED] text-textColor text-[24px] rounded-[10px] border "
                  onClick={() => {
                    navigate("/user/appointment/1");
                  }}
                >
                  <FaRegFilePdf />
                  <span className="text-xs font-sans font-semibold">Evidence</span>
                </div>
              );
            },
          },
        { text: "Hearing Date", dataField: "hearing_date" },
        {
          text: "Action",
          dataField: "action",
          formatter: (_, d) => {
            return (
              <div
                className="grid cursor-pointer place-content-center w-[40px] h-[40px] hover:bg-primary hover:text-white text-[24px] rounded-[10px] border hover:border-primary border-[#E0E0E0]"
                onClick={() => {
                  navigate("/attorney/caseRequst/1");
                }}
              >
                <IoEyeOutline />
              </div>
            );
          },
        },
      ];
  return (
    <div>
      <PageTitle>
        <div className="flex sm:flex-row flex-col justify-between  items-center sm:gap-0 gap-6 lg:h-[56px] h-auto">
          <h1 className="dashboard-title">Case Request</h1>
          <SearchBar
            placeholder={"Search Here..."}
            wrapperClassName={"sm:w-[293px] w-full"}
            className={""}
            style={{ marginBottom: "-1px" }}
          />
        </div>
      </PageTitle>
      <div className=" px-[24px]">
        <UserDashboardTable data={data?.data} columns={columns} pagination />
      </div>
    </div>
  );
};

export default CaseRequest;
