import { useNavigate } from "react-router-dom";
import UserDashboardTable from "../../../components/common/table/userDashboardTable";
import PageTitle from "../../../components/common/title/pageTitle";
import { IoEyeOutline } from "react-icons/io5";

const UserAppointment = () => {
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
    { text: "Case Type", dataField: "caseType" },
    { text: "Attorney", dataField: "attorney" },
    { text: "Hearing Date", dataField: "hearing_date" },
    {
      text: "Action",
      dataField: "action",
      formatter: (_, d) => {
        return (
          <div
            className="grid cursor-pointer place-content-center w-[40px] h-[40px] hover:bg-primary hover:text-white text-[24px] rounded-[10px] border hover:border-primary border-[#E0E0E0]"
            onClick={() => {
              navigate("/user/appointment/1");
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
        <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-6">
          <h1 className="dashboard-title">Appointment</h1>
          <div>
            <select
              id="casetype"
              className=" sm:px-4 sm:py-4 px-2 py-2 w-[220px]  sm:h-[56px] h-[46px] border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Case Type"
              name="caseType"
              required
            >
              <option value="ongoin">ongoing</option>
              <option value="criminal" selected>
                Crimial
              </option>
            </select>
          </div>
        </div>
      </PageTitle>
      <div className=" px-[24px]">
        <UserDashboardTable data={data?.data} columns={columns} pagination />
      </div>
    </div>
  );
};

export default UserAppointment;
