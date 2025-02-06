import { Flex, Progress } from "antd";
import RadialBarChart from "./chat";
import { LuArrowLeftRight } from "react-icons/lu";
import { ImHammer2 } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
const AttorneyDashBoard = () => {
  const clients = [
    {
      name: "John Doe",
      image: "https://i.ibb.co/8LBT96YN/image.png",
      caseNumber: 7,
    },
    {
      name: "Jane Smith",
      image: "https://i.ibb.co/YFNVbqN1/image-1.png",
      caseNumber: 5,
    },
    {
      name: "Robert Brown",
      image: "https://i.ibb.co/q3K4Jg4m/image-1.png",
      caseNumber: 2,
    },
    {
      name: "Emily Johnson",
      image: "https://i.ibb.co/5XB3Ky2C/image-3.png",
      caseNumber: 1,
    },
  ];
  const nextAppointment = [
    {
      name: "Ava Elizabeth",
      image: "https://i.ibb.co/67fL6PWn/image.png",
      designation: "Senior Attorney",
    },
    {
      name: "Mason Elijah",
      image: "https://i.ibb.co/8LBT96YN/image.png",
      designation: "Legal Advisor",
    },
    {
      name: "Noah William",
      image: "https://i.ibb.co/YFNVbqN1/image-1.png",
      designation: "Junior Associate",
    },
    {
      name: "Sophia Marie",
      image: "https://i.ibb.co/RTvSxrDP/image-3.png",
      designation: "Paralegal",
    },
  ];

  const messages = [
    {
      name: "Ethan James",
      image: "https://i.ibb.co/gMmjQL51/image.png",
      time: 5,
    },
    {
      name: "Olivia Grace",
      image: "https://i.ibb.co/S4Q1vbkS/image-1.png",
      time: 4,
    },
    {
      name: "Sophia Marie",
      image: "https://i.ibb.co/BHQLGwXW/image-2.png",
      time: 6,
    },
  ];

  return (
    <div className="  xl:pb-0 pb-[20px] ">
      <h1 className="dashboard-title md:py-[38px] py-[17px] big-mid:px-12 sm:px-8 px-[22px] border-b-2">
        Dashboard
      </h1>

      <div className="lg:px-10 px-5 mt-10 mb-10">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
          {/* 1 */}
          <DashboardCard
            title="Ongoing Case"
            number={12}
            bgColor="#6C757D"
            icon={<LuArrowLeftRight className="rotate-90" />}
          />
          {/* 2 */}
          <DashboardCard
            title="Total Case"
            number={12}
            bgColor="#0056B3"
            icon={<ImHammer2 />}
          />

          {/* 3 */}
          <DashboardCard
            title="Success Case"
            number={12}
            bgColor="#1E7E34"
            icon={<GoLaw />}
          />

          {/* 4 */}
          <DashboardCard
            title="Message's"
            number={12}
            bgColor="#FF5722"
            icon={<AiOutlineMail />}
          />
        </div>

        <div className="mt-6 grid xl:grid-cols-[232px_240px_1fr] sm:grid-cols-2 grid-cols-1    gap-6">
          {/* First inner div */}
          <div className=" border rounded-[10px] shadow-lg  relative overflow-hidden h-[276px]">
            <p className="text-sans-500-16">Case Overview</p>
            <RadialBarChart />
          </div>

          {/* Second inner div */}
          <div className="border px-4 py-6 rounded-[10px] shadow-lg  ">
            <p className="text-sans-500-16 mb-4">Upcoming Hearing</p>

            <div className="mb-4">
              <p className="case-numbers text-blue-700 flex flex-col gap-[8px]">
                10{" "}
                <span className="text-sans-500-16 text-[#818B8F]">
                  December
                </span>
              </p>
            </div>

            <div>
              <p className="text-sans-500-16 mb-3">Case Description</p>
              <p className="work-sans text-sm text-[#3A3D3F]">
                Disputes over individual rights, responsibilities, and private
                relations.
              </p>
            </div>
          </div>

          {/* Third inner div */}
          <div className=" px-[17px] py-6 border rounded-[10px] shadow-lg">
            <p className="text-sans-500-16 mb-[28px]">Case Request level</p>
            {/* charts starts */}
            <div className="overflow-x-auto sm:overflow-x-hidden"></div>
          </div>
        </div>

        {/* progress starts */}
        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* First inner div */}
          <div className="xl:col-span-3 sm:col-span-6 col-span-12 border px-4 py-4 rounded-[10px] shadow-lg h-[276px]">
            <p className="text-sans-500-16 mb-4">Clients</p>

            <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
              <div className="flex flex-col gap-4">
                {clients.map((client, idx) => (
                  <Clients_progress key={idx} client={client} />
                ))}
              </div>
            </div>
          </div>

          {/* Second inner div */}
          <div className="xl:col-span-3 sm:col-span-6 col-span-12 border px-4 py-4 rounded-[10px] shadow-lg h-[276px] ">
            <p className="text-sans-500-16 mb-4">Next Appointment’s</p>

            <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
              <div className="flex flex-col gap-4 ">
                {nextAppointment.map((singleAppointment, idx) => (
                  <NextAppointment
                    key={idx}
                    singleAppointment={singleAppointment}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Third inner div */}
          <div className="xl:col-span-6 col-span-12 px-4 py-4 border rounded-[10px] shadow-lg h-[276px]">
            <p className="text-sans-500-16 mb-[28px]">Message</p>

            <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
              <div className="flex flex-col gap-4 ">
                {messages.map((message, idx) => (
                  <SingleMessage key={idx} message={message} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyDashBoard;

export const DashboardCard = ({ bgColor, icon, title, number }) => {
  return (
    <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-full text-[24px] h-10 w-10  flex justify-center items-center text-white`}
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </div>
        <p className="font-medium text-[#242628] work-sans whitespace-nowrap">
          {title}
        </p>
      </div>
      <p className={`case-numbers  ml-10`} style={{ color: bgColor }}>
        {number}
      </p>
    </div>
  );
};

export const Clients_progress = ({ client }) => {
  let { name, image, caseNumber } = client;

  // progress calculation
  let clientCases = caseNumber;
  let totalCases = 6;
  let progressPercent = Math.ceil((clientCases / totalCases) * 100);
  console.log("progress:", progressPercent);

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full">
        <Flex vertical gap="small" className="w-full">
          <Progress percent={progressPercent} size="small" className="w-full"showInfo={false}  />
        </Flex>
        <p className="text-sans-500-14 text-[#818B8F]">{caseNumber} Cases</p>
      </div>
    </div>
  );
};

const NextAppointment = ({ singleAppointment }) => {
  let { name, image, designation } = singleAppointment;

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full">
        <p className="text-sans-500-16">{name}</p>
        <p className="text-sans-500-14 text-[#818B8F]">{designation}</p>
      </div>
    </div>
  );
};

export const SingleMessage = ({ message }) => {
  let { name, image, time } = message;

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-sans-500-16">{name}</p>
          <p className="text-sans-500-14 text-[#818B8F]">Send you a message</p>
        </div>
        <div>
          <p>{time} min ago</p>
        </div>
      </div>
    </div>
  );
};
