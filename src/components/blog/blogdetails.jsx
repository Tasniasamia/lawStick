import dayjs from "dayjs";
import SearchBar from "../common/searchBar";
import post1 from "./../../../public/images/post1.png";
import post2 from "./../../../public/images/post2.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";

const Details = () => {
  const posts = [
    {
      id: 1,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post1,
      createAt: "2025-01-27",
    },
    {
      id: 2,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post2,
      createAt: "2025-01-26",
    },
    {
      id: 3,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post2,
      createAt: "2025-01-25",
    },
    {
      id: 4,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post1,
      createAt: "2025-01-24",
    },
    {
      id: 5,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post2,
      createAt: "2025-01-23",
    },
    {
      id: 6,
      title: "Expert Guidance for Real Estate Transactions and Disputes",
      image: post2,
      createAt: "2025-01-22",
    },
  ];
  const tags = [
    "fitness",
    "facts",
    "health",
    "medicine",
    "lifestyle",
    "strength",
    "nutrition",
    "women’s health",
  ];
  const data=[
    {
       title:"Thorough Case Evaluation" ,
       features:[
        "Analyze all evidence and legal aspects to build a strong defense",
        "Analyze all evidence and legal aspects to build a strong defense"
       ],
       id:1
    },
    {
        title:"Thorough Case Evaluation" ,
        features:[
         "Analyze all evidence and legal aspects to build a strong defense",
         "Analyze all evidence and legal aspects to build a strong defense"
        ],
        id:2
     },
     {
        title:"Thorough Case Evaluation" ,
        features:[
         "Analyze all evidence and legal aspects to build a strong defense",
         "Analyze all evidence and legal aspects to build a strong defense"
        ],
        id:3
     }
  ]
  return (
    <div className="custom-container xl:mb-[150px] md:mb-14 mb-[60px]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[32px]">
        {/* Sidebar Section */}
        <div className="col-span-1 xl:w-[393px] w-full">
          <SearchBar wrapperClassName={'xl:w-[393px] w-full'}/>
          {/* post  */}
          <div className="mb-[40px]">
            <h2 className="header-2">Recent Post</h2>
            <div className="py-[40px] px-[24px] border border-[#E0E0E0] rounded-lg mb-[40px]">
              <div className="flex flex-col h-[286px] overflow-y-auto scroll-container">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="min-h-[96px] py-[16px] border-b border-[#E0E0E0] flex gap-[12px] items-center cursor-pointer"
                  >
                    {/* Post Image */}
                    <img
                      src={post?.image}
                      alt="post-thumbnail"
                      className="h-full w-[80px] rounded-[10px]"
                    />
                    {/* Post Content */}
                    <div>
                      <p className="font-medium line-clamp-2 min-h-[54px] capitalize">
                        {post?.title}
                      </p>
                      <p className="text-xs font-medium">
                        <span className="text-[#3A3D3F]">Date: </span>
                        <span className="text-[#D4AF37]">
                          {dayjs(post?.createAt).format("MMMM DD, YYYY")}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* categories  */}
          <div className="mb-[40px]">
            <h2 className="header-2">Categories</h2>
            <div className="py-[40px] px-[24px] border border-[#E0E0E0] rounded-lg mb-[40px]">
              <div className="flex flex-col h-[245px] overflow-y-auto scroll-container">
                {posts.map((i, index) => (
                  <div
                    key={index}
                    className=" pt-[24px] !pb-[14px] flex justify-between border-b border-[#E0E0E0]  text-[#242628] group group-hover:text-primary cursor-pointer duration-300 transition-all"
                  >
                    {/* Post Image */}
                  <p className="text-[16px] font-medium leading-[18.77px] line-clamp-1 h-[20px] group-hover:text-primary capitalize duration-300 transition-all">
                      {i?.title}
                    </p>
                    <FaAngleDoubleRight className="!text-[20px] group-hover:text-primary duration-300 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* tags */}
          <div className="mb-[40px]">
            <h2 className="header-2">Popular Tags</h2>
            <div className="py-[40px] px-[24px] border border-[#E0E0E0] rounded-lg mb-[40px]">
              <div className="flex flex-wrap gap-[6px]">
                {tags.map((i, index) => (
                  <button
                    key={index}
                    className="bg-primary text-white px-[12px] py-[4px] cursor-pointer capitalize rounded"
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="lg:col-span-2 col-span-1 ">
            <img src='/images/blog.png'className="w-full md:h-[444px] h-[280px] rounded-[20px] object-cover mb-[24px]"alt="blog"/>
                <div className="text-[#808080] flex flex-wrap gap-[16px] pb-[16px] mb-[40px]  border-b border-b-[#E0E0E0] ">
                <div className="flex gap-[12px] items-center border-e w-fit border-[#808080]">
                    <div className="w-[24px] h-[24px] flex justify-center items-center"><SlCalender className="text-lg font-bold"/></div>
                    <p className=" pe-[16px]">17 Dec 2024</p>
                </div>
                <div className="flex gap-[12px] items-center border-e w-fit border-[#808080] ">
                    <div className="w-[24px] h-[24px] flex justify-center items-center"><CiUser className="text-lg font-bold"/></div>
                    <p className=" pe-[16px]">Admin</p>
                </div>
                <div className="flex gap-[12px] items-center border-0 w-fit border-[#808080]">
                   <p className=" pe-[16px]">Real State</p>
                </div>
               </div>
               <div>
                <h2 className="blog-header text-[28px] text-[#242628] font-medium leading-[36.54px] text-left decoration-slice break-all mb-[24px]">
                Expert Defense for Weapon Crime Charges
                </h2>
                <p className="text-textColor font-normal mb-[40px]">Our firm specializes in providing exceptional defense for weapon crime charges, ensuring your rights and freedom are safeguarded. With extensive experience in criminal law, we analyze every aspect of your case, challenge improper procedures, and develop a robust defense strategy. From unlawful possession to use or distribution of firearms, we are committed to delivering results with integrity, precision, and relentless advocacy. Trust our skilled attorneys to fight for the best possible resolution, guiding you through every step of the legal process with care and expertise.</p>
                <div className="mb-[40px]">
                {
                    data?.map((i,index)=>{
                        return (
                            <div key={index} >
                            <div className="header-2 flex items-center gap-[12px]">
                            <p className="ps-[12px]">{index+1}.</p>
                            <p >{i?.title}</p>
                            </div>
                            <ol className="px-[60px] flex flex-col pb-[24px] list-disc ">
                             {
                                i?.features?.map((i,index)=>{
                                    return (
                                        <li key={index} className="text-textColor  leading-[27.2px] text-[16px] font-normal">{i}</li>
                                    )
                                })
                             }
                            </ol>
                            </div>
                        )
                    })
                }
                </div>
                <h2 className="blog-header text-[28px] text-[#242628] font-medium leading-[36.54px] text-left decoration-slice break-all mb-[24px]">
                Why You Need the Top Lawyers in weapon crime
                </h2>
                <p className="text-textColor font-normal ">Having the best lawyer ensures expert legal guidance and a strong, strategic approach to your case. A skilled lawyer protects your rights, navigates complex legal systems, and works tirelessly to achieve the best possible outcome. Their expertise can make a significant difference, offering clarity, confidence, and peace of mind during challenging times.</p>
               </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
