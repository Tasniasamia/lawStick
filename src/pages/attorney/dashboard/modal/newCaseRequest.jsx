import React from 'react';
import attorneyImage from '../../../../../public/images/Alina.png';
import { useModal } from '../../../../context/modalContext';
import { Grid, Modal } from 'antd';
import { IoClose } from 'react-icons/io5';
const NewCaseRequest = () => {
    const { isCaseRequest,setIsCaseRequest}=useModal();
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint(); // Use the hook correctly
    const getModalWidth = () => {
      if (screens.xxl) {
        return 489;
      } else if (screens.xl) {
        return 489;
      } else if (screens.lg) {
        return 600;
      } else if (screens.md) {
        return 600;
      } else if (screens.sm) {
        return 600;
      } else {
        return "100%";
      }
    };
    return (
         <Modal
            className="!bg-transparent"
            footer={null}
            closeIcon={false}
            open={isCaseRequest}
            wrapClassName='attorneySection'
            onCancel={() => {
                setIsCaseRequest(false)

            }}
            style={{ position: "relative", zIndex: "200" }}
            width={getModalWidth()}
          >
            <div className=" w-full mx-auto bg-white rounded-[20px] relative py-[50px]">
              <button
                className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
                onClick={() => {
                setIsCaseRequest(false)
                }}
              >
                <IoClose
                  size={20}
                  className="text-[#242628] text-[12px] cursor-pointer"
                />
              </button>
          <div className="text-center pt-[21px] md:mb-10 mb-5">
            <h1 className="font-medium text-2xl font-ebgramond mb-6 capitalize">
              Appointment Time Is Complete
            </h1>
            <p className="font-ebgramond font-medium text-lg capitalize">
              Now You Can Receive Case Request
            </p>
          </div>
          <div className="sm:max-w-[297px] max-w-[280px] mx-auto ">
            <div className="border border-[#E0E0E0] rounded-[10px] px-[24px]  py-8 h-[324px] md:mb-10 mb-5">
              <div className="flex items-center gap-3 mb-6">
                <img
                  className="sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] rounded-full"
                  src={attorneyImage}
                  alt=""
                />
                <div className="flex flex-col sm:gap-3 gap-1">
                  <p className="work-sans font-semibold text-lg">Alina Gain</p>
                  <p className="text-sans-400-16 text-[#818B8F]">alinagain@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sans-500-16">
                  <span
                    className="text-[#818B8F]">Case Type:
                  </span>{" "}
                  Murder
                </p>
                <p className="text-sans-500-16">
                  <span
                    className="text-[#818B8F]">Case Description:
                  </span>{" "}
                  This case involves Party A and Party B, concerning the alleged murder of Victim's Name. 
                </p>
              </div>
            </div>
            
          </div>
          <div className=" flex sm:flex-row gap-4 justify-center">
              <button className="md:px-[32px] px-4 md:py-[16px] py-3 border text-sans-500 sm:text-lg text-sm rounded-[8px] bg-[#EDEDED] w-fit">View Details</button>
              <button className="md:px-[32px] px-4 md:py-[16px] py-3  border text-sans-500 sm:text-lg text-sm rounded-[8px]  bg-[#C7A87D] text-white w-fit">Send Me Request</button>
          </div>
        </div>
      </Modal>
    );
};

export default NewCaseRequest;