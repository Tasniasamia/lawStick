import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const LawyerCard = ({ data }) => {
  return (
    <Link to={`/team/${data?.id}`}>
    <div
      className="max-w-[312px]  group mx-auto flex flex-col items-center border  text-center text-[#242628] rounded-[10px]  px-4 pt-4 pb-6 "
      style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
      >
      <div className="flex justify-around items-center">
        <img className="rounded-t-[10px]" src={data?.image} alt="max-h-[280px] max-w-[280px] object-cover" />
      </div>

      <div>
        <p className="text-lg font-semibold text-[#242628] group-hover:text-[#B68C5A] cursor-pointer mt-[24px]">
          {data?.name}
        </p>
        <p className="text-base font-medium text-textColor">{data?.title}</p>

        <div className="flex justify-center gap-4 mt-6">
          <div className="h-8 w-8 cursor-pointer border border-borderColor rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A] duration-500 transition-all hover:-translate-y-1.5">
            <FaFacebookF />
          </div>
          <div className="h-8 w-8  cursor-pointer border border-borderColor rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A] duration-500 transition-all hover:-translate-y-1.5">
            <FaTwitter />
          </div>
          <div className="h-8 w-8  cursor-pointer border border-borderColor rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A] duration-500 transition-all hover:-translate-y-1.5">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default LawyerCard;
