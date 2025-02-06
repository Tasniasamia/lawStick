import { useNavigate } from "react-router-dom";
import UserDashboardTable from "../../../components/common/table/userDashboardTable";
import PageTitle from "../../../components/common/title/pageTitle";
import { IoClose, IoEyeOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "../../../components/common/button";
import UploadFileComponent from "../../../components/common/form/fileUpload";
import { useState } from "react";
import { Form, Modal } from "antd";
const CaseFile = () => {
  const navigate = useNavigate();
  const [isUpload, setIsUpload] = useState(false);
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
          fileName: "Real State",
          status: "ongoing",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
        {
          id: 2,
          fileName: "Real State",
          status: "pending",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
        {
          id: 3,
          fileName: "Tax Law",
          status: "closed",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
        {
          id: 4,
          fileName: "Tax Law",
          status: "success",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
        {
          id: 5,
          fileName: "Tax Law",
          status: "closed",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
        {
          id: 6,
          fileName: "Tax Law",
          status: "closed",
          attorney: "Alina Gain",
          date: "21 Dec , 2024",
        },
      ],
      hasNextPage: true,
      hasPrevPage: false,
    },
  };

  const columns = [
    { text: "Date", dataField: "date" },
    { text: "Attorney", dataField: "attorney" },
    { text: "File Name", dataField: "fileName" },
    {
      text: "File Type",
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
    {
      text: "File",
      dataField: "file",
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
          <h1 className="dashboard-title">Files</h1>
          <Button
            className="flex gap-2 items-center"
            onClick={() => {
              setIsUpload(true);
            }}
          >
            <AiOutlineDownload />
            Upload you file
          </Button>
        </div>
      </PageTitle>
      <div className=" px-[24px]">
        <UserDashboardTable data={data?.data} columns={columns} pagination />
      </div>
      <Modal
        width={600}
        className="!bg-transparent "
        footer={null}
        closeIcon={false}
        open={isUpload}
        onCancel={() => setIsUpload(false)}
        style={{ position: "relative", zIndex: "200" }}
      >
        <div className=" w-full mx-auto bg-white rounded-[20px] p-[10px] relative ">
          <button
            className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute sm:right-0 sm:top-0 top-[2px] right-[2px] inline-flex justify-center items-center"
            onClick={() => {
              setIsUpload(false);
            }}
          >
            <IoClose
              size={20}
              className="text-[#242628] text-[12px] cursor-pointer"
            />
          </button>
          <h3 className="font-semibold leading-[32.84px] text-[28px] pb-[24px] text-[#242628] font-sans ">
            Send File
          </h3>
          <Form
            onFinish={async (values) => {
             console.log("values",values);
            }}
            layout="vertical"
          >
            <Form.Item
              label={
                <p className="text-base font-medium text-[#242628] ">
                  File Name
                </p>
              }
              name="fileName"
              className="!w-full"
              rules={[
                {
                  required: true,
                  message: "Please enter your File name!",
                },
              ]}
            >
              <input
                placeholder="File Name"
                type="text"
                className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              />
            </Form.Item>

            <Form.Item
              name="evidence"
              label={
                <p className="text-base font-medium text-[#242628] mb-[12px]">
                  Upload File
                </p>
              }
            >
              <div className="">
                <UploadFileComponent
                  name="evidence"
                  className={"upload-image"}
                  childClassName={"px-[24px] py-[8px] "}
                />
              </div>
            </Form.Item>
            <button
              type="submit"
              className={`border-2 bg-primary flex gap-2 justify-center items-center  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-fit py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm `}
            >
              <AiOutlineDownload />
              Upload file
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CaseFile;
