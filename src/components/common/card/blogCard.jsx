import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const BlogCard = ({data}) => {
   
    return (
             <div className="xl:max-w-[424px] lg:max-w-full max-w-[424px] h-full mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border   relative">
                       <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                         <p className="text-base font-medium">{data?.tag}</p>
                       </div>
                       {/* div 1 */}
                       <div className="">
                         <img src={data?.image} alt="max-h-[254px] max-w-full" />
                       </div>
                       {/* div 2 */}
                       <div className="sm:p-6 p-5 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                         <p className="font-medium lg:text-lg text-base text-primary line-clamp-2 ">
                           {data?.title}
                         </p>
                         <p className="font-medium text-base text-[#3A3D3F]">
                           Update {data?.date}
                         </p>
                         <div className="flex gap-1 xl:justify-between lg:justify-start justify-between items-center xl:flex-nowrap lg:flex-wrap flex-nowrap">
                           <p>
                             By{" "}
                             <span className="text-primary underline">
                                {data?.owner}
                             </span>
                           </p>
                           <div className="flex  gap-1 items-center text-primary sm:ms-auto xl:mt-0 lg:mt-[10px] mt-0">
                            <Link to={`/blog/${data?.id}`} className="h-full w-full">
                             <p className="font-medium lg:text-xl text-base">
                               Read More
                             </p>
                             </Link>
                             <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                           </div>
                         </div>
                       </div>
                     </div>
    );
};

export default BlogCard;