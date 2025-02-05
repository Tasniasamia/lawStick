import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import AttorneyCard from "../../../../components/common/card/attorneyCard";

const RecommendAttorney = ({
    isRecommended,
    setIsRecommended,
}) => {
  const data = [
    {
      name: "Alina Gain",
      designation: "Criminal Lawyer",
      experience: "4 Years",
      qualification: "Juris Doctor JD: Oxford University",
      price: 120.0,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png",
    },
    {
      name: "Michael Brown",
      designation: "Corporate Lawyer",
      experience: "6 Years",
      qualification: "LL.M in Business Law: Harvard University",
      price: 150.0,
      image: "https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png",
    },
 
  ];
  return (
    <Modal
      width={700}
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isRecommended}
      onCancel={() => setIsRecommended(false)}
      style={{ position: "relative", zIndex: "200" }}
    >
      <div className=" w-full mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative ">
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-5 top-5 inline-flex justify-center items-center"
          onClick={() => {
            setIsRecommended(false);
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>

        <h3 className="font-medium leading-[23.46px] text-[20px] pb-[24px] text-[#191930] font-ebgramond text-center ">
          Recommended Attorney
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] pt-[16px]">
        {data?.map((i, index) => {
          return <AttorneyCard key={index} data={i} setIsRecommended={setIsRecommended}/>;
        })}
      </div>
      </div>
    </Modal>
  );
};

export default RecommendAttorney;
