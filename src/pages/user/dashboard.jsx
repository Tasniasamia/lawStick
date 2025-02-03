import PageTitle from "../../components/common/title/pageTitle";
import { LuArrowLeftRight } from "react-icons/lu";
import { ImHammer2 } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import userPick from '../../../public/images/Alina.png';
const UserDashBoard = () => {
    return (
        <div>
            <PageTitle>
            <h1 className="dashboard-title">Dashboard</h1>
            </PageTitle>
            <div className="lg:px-10 px-5 pt-10">
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
              {/* 1 */}
             <DashboardCard title='Ongoing Case' number={12} bgColor='#6C757D'icon={<LuArrowLeftRight className="rotate-90"/>}/>
              {/* 2 */}
              <DashboardCard title='Total Case' number={12} bgColor='#0056B3'icon={<ImHammer2/>}/>

              {/* 3 */}
              <DashboardCard title='Success Case' number={12} bgColor='#1E7E34'icon={<GoLaw/>}/>

              {/* 4 */}
              <DashboardCard title="Message's" number={12} bgColor='#FF5722'icon={<AiOutlineMail/>}/>

            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1  gap-[22px] md:mt-[60px] mt-[50px] lg:pb-[38px] pb-5">
              <div>
                <h1 className="font-medium text-2xl mb-6">Upcoming Hearing</h1>
                <div className="flex sm:flex-row flex-col w-full items-center gap-8 sm:h-[180px] bg-[#20C997] text-white rounded-[10px] sm:px-[28px] px-4 py-4 sm:py-[28px]">
                    <div>
                    <div className="rounded-full sm:w-[60px] sm:h-[60px] h-[60px] w-[60px] flex justify-center items-center bg-white">
                      <ImHammer2  className="text-[34px] rotate-90 text-[#20C997]"/>
                    </div>
                    </div>
                  <div className="font-medium sm:max-h-none flex  flex-col ">
                    <p className="sm:text-lg text-base">Date: 19 Dec 2024</p>
                    <p>Lawyer: Arthur Canal Doyle</p>
                    <p>Location: One First Street, NE, in Washington, DC</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-2xl mb-6">Recent Message</h1>
                <div className="flex sm:flex-row flex-col items-center gap-8 sm:h-[180px] bg-[#EDEEF1] hover:bg-[#20C997] text-[#242628] hover:text-white rounded-[10px] px-[28px] py-[28px]">
                  <div>
                    <div className="rounded-full sm:h-[80px] sm:w-[80px] h-[60px] w-[60px] flex justify-center items-center ">
                      <img
                        className="sm:h-[80px] sm:w-[80px] h-[60px] w-[60px] rounded-full"
                        src={userPick}
                        alt="user"
                      />
                    </div>
                  </div>
                  <div className="sm:max-h-none  overflow-y-auto font-medium text-lg ">
                    <p className="font-semibold text-lg  work-sans">
                      Arthur Canal Doyle
                    </p>
                    <p className="simple-text !text-textColor">Send you a message</p>
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