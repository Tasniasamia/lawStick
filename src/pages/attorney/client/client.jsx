import { IoEyeOutline } from "react-icons/io5";
import SearchBar from "../../../components/common/searchBar";
import UserDashboardTable from "../../../components/common/table/userDashboardTable";
import PageTitle from "../../../components/common/title/pageTitle";
import { FaRegFilePdf } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate=useNavigate();
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
          email: "Rw4a4@example.com",
          phone: "1234567890",
          name: "Alina Gain",
        },
        {
          id: 2,
          email: "client@gmail.com",
          phone: "1234567330",
          name: "Alina Gain2",
        },
        {
          id: 3,
          name: "Abc Gain",
          email: "Rw4a4@example.com",
          phone: "1234567890",
        },
        {
          id: 4,
          name: "Abc Gain",
          email: "Rw4a4@example.com",
          phone: "1234567890",
        },
        {
          id: 5,
          name: "Abc Gain",
          email: "Rw4a4@example.com",
          phone: "1234567890",
        },
        {
          id: 6,
          name: "Abc Gain",
          email: "Rw4a4@example.com",
          phone: "1234567890",
        },
      ],
      hasNextPage: true,
      hasPrevPage: false,
    },
  };

  const columns = [
    {
      text: "Client Name",
      dataField: "name",
      formatter: (_, d) => {
        return (
          <div className="flex gap-2 items-center">
            <img
              src="https://i.ibb.co/8LBT96YN/image.png"
              alt="image"
              className="w-[50px] h-[50px] object-center rounded-full"
            />
            <span>{d.name}</span>
          </div>
        );
      },
    },
    { text: "Email", dataField: "email" },
    { text: "Phone", dataField: "phone" },
    {
      text: "Action",
      dataField: "action",

      formatter: (_, d) => {
        return (
          <div
            className="grid cursor-pointer place-content-center w-[40px] h-[40px] hover:bg-primary hover:text-white text-[24px] rounded-[10px] border hover:border-primary border-[#E0E0E0]"
            onClick={() => {
              navigate("/attorney/clients/1");
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
          <h1 className="dashboard-title">Client's</h1>
        </div>
      </PageTitle>
      <div className=" px-[24px]">
        <UserDashboardTable data={data?.data} columns={columns} pagination />
      </div>
    </div>
  );
};

export default Clients;
