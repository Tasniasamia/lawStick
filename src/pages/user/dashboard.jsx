import PageTitle from "../../components/common/title/pageTitle";
import { LuArrowLeftRight } from "react-icons/lu";
import { ImHammer2 } from "react-icons/im";
import { GoLaw } from "react-icons/go";

const UserDashBoard = () => {
    return (
        <div>
            <PageTitle>
            <h1 className="dashboard-title">Dashboard</h1>
            </PageTitle>
            <div className="lg:px-10 px-4 pt-10">
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
              {/* 1 */}
             <DashboardCard title='Ongoing Case' number={12} bgColor='#6C757D'icon={<LuArrowLeftRight className="rotate-90"/>}/>
              {/* 2 */}
              <DashboardCard title='Total Case' number={12} bgColor='#0056B3'icon={<ImHammer2/>}/>

              {/* 3 */}
              <DashboardCard title='Success Case' number={12} bgColor='bg-[#6C757D]'icon={<GoLaw/>}/>

              {/* 4 */}
              <DashboardCard title="Message's" number={12} bgColor='bg-[#6C757D]'icon={<LuArrowLeftRight className="rotate-90"/>}/>

            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1  gap-[22px] big-mid:mt-[60px] mt-[50px]">
              <div>
                <h1 className="font-medium text-2xl mb-6">Upcoming Hearing</h1>
                <div className="flex items-center gap-8 h-[180px] bg-[#EDEEF1] hover:bg-[#20C997] text-black hover:text-white rounded-[10px] px-[28px] py-[28px]">
                  <div>
                    <div className="rounded-full sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] flex justify-center items-center bg-white">
                      {/* <img
                        className="sm:h-9 sm:w-9 h-6 w-6"
                        src={hearingPic}
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="font-medium sm:max-h-none max-h-[128px] overflow-y-auto">
                    <p className="sm:text-lg text-base">Date: 19 Dec 2024</p>
                    <p>Lawyer: Arthur Canal Doyle</p>
                    <p>Location: One First Street, NE, in Washington, DC</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-2xl mb-6">Recent Message</h1>
                <div className="flex items-center gap-8 h-[180px] bg-[#EDEEF1] hover:bg-[#20C997] text-black hover:text-white rounded-[10px] px-[28px] py-[28px]">
                  <div>
                    <div className="rounded-full sm:h-[80px] sm:w-[80px] h-[60px] w-[60px] flex justify-center items-center ">
                      {/* <img
                        className="sm:h-[80px] sm:w-[80px] h-[60px] w-[60px]"
                        src={userPic}
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="sm:max-h-none max-h-[128px] overflow-y-auto font-medium text-lg ">
                    <p className="font-semibold text-lg  work-sans">
                      Arthur Canal Doyle
                    </p>
                    <p className="simple-text">Send you a message</p>
                    <p className="simple-text text-[#818B8F]">1 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default UserDashBoard;



export const DashboardCard=({bgColor,icon,title,number})=>{
    return (
        <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
        <div className="flex items-center gap-3">
          <div className={`rounded-full text-[24px] h-10 w-10  flex justify-center items-center text-white`} style={{backgroundColor:bgColor}}>
            {icon}
          </div>
          <p className="font-medium text-[#242628] work-sans whitespace-nowrap">
            {title}
          </p>
        </div>
        <p className={`case-numbers  ml-10`} style={{color:bgColor}}>{number}</p>
      </div>
    )
}