import { RxBorderSolid } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import Button from "../button";
import { Link } from "react-router-dom";
const CaseCard = ({ data }) => {
  return (
    <div
      className="max-w-[424px] mx-auto bg-white border border-[#E0E0E0] flex flex-col items-center text-black  rounded-[10px] lg:pb-[30px] md:pb-[19px] pb-[17px] overflow-auto card"
      style={{
        boxShadow: "0px 4px 25px 0px #00000014",
      }}
    >
      <div>
        <img src={data?.image} alt="max-w-full h-[254px] " />
      </div>
      <div className="lg:px-6 px-3  lg:text-start text-center flex flex-col lg:items-start items-center">
        <p className="font-medium my-[24px] lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
          {data?.title}
        </p>
        <p className=" lg:text-base text-sm mb-[40px] text-[#3A3D3F] lg:leading-7 text-ellipsis line-clamp-3">
          {data?.description}
        </p>

        <Link
          className="flex group hover:bg-[#B68C5A] duration-300 transition-all text-[18px] h-[48px] leading-[28px] font-medium font-sans hover:text-white items-center gap-[10px] px-[24px] py-[18px] border rounded-[4px] hover:border-[#B68C5A] border-[#E0E0E0]"
          to={`/caseStudy/${data?.id}`}
        >
          READ MORE <RxBorderSolid className="rotate-90 text-[16px]" />{" "}
          <BsArrowRight className="text-[18px]" />
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
