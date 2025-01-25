
import { RxBorderSolid } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../button";
const CaseCard = ({data}) => {
    return (
           <div className="max-w-[424px]  mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                        <div >
                          <img src={data?.image} alt="" />
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