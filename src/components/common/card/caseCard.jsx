import { RxBorderSolid } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../button";
const CaseCard = ({ data }) => {
  return (
    <div
      className="max-w-[424px] mx-auto bg-white border border-[#E0E0E0] flex flex-col items-center text-black gap-3 rounded-[10px] lg:pb-[30px] md:pb-[19px] pb-[17px] overflow-auto"
      style={{
        boxShadow: "0px 4px 25px 0px #00000014",}}
   
    >
      <div>
        <img src={data?.image} alt="max-w-full h-[254px] " />
      </div>
      <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
        <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
          {data?.title}
        </p>
        <p className=" lg:text-base text-sm text-[#3A3D3F] lg:leading-7 text-ellipsis line-clamp-3">
          {data?.description}
        </p>

        <Button className="flex items-center gap-[10px]">
          READ MORE <RxBorderSolid className="rotate-90" />{" "}
          <FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  );
};

export default CaseCard;
