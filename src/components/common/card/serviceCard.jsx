import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({data}) => {
    return (
            <div className='relative serviceCard'>
            <div className="border border-opacity-[50%]  max-w-[312px] sm:mx-0 mx-auto duration-700 transition-all bg-white group hover:border-primary hover:bg-primary space-y-6 text-black flex flex-col justify-between items-center p-4 text-center  rounded-[10px] hover:text-white relative"style={{boxShadow:"0px 0px 20px 0px #0000001A" 
}}>
                      <img
                        className="absolute bottom-0 right-0 group-hover:hidden duration-700 transition-all"
                        src="./images/practice-design.png"
                        alt=""
                      />
                      <img
                        className="absolute bottom-0 right-0 group-hover:block  duration-700 transition-all"
                        src="./images/practiceStyleWhite.png"
                        alt=""
                      />
                        <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                          <img
                            className="md:w-11 md:h-11 w-7 h-7"
                            src={data?.image}
                            alt=""
                          />
                        </div>
                        <p className="text-xl font-semibold">{data?.name}</p>
                        <p className="text-base line-clamp-3 !mb-[16px]">
                          {data?.description}
                        </p>
                       <Link to={`/service/${data?.id}`}>
                        <div className="h-10 w-10  rounded-full bg-[#F9EAF3] hover:bg-white  flex justify-center items-center  duration-700 transition-all cursor-pointer">
                          <MdOutlineArrowRightAlt className="text-primary text-2xl"></MdOutlineArrowRightAlt>
                        </div>
                        </Link>
                      </div>
                      </div>
    );
};

export default ServiceCard;