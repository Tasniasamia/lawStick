import { Calendar, Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { useModal } from "../../../context/modalContext";
import dayjs from "dayjs";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { useState } from "react";

export const Appointment = () => {
  const { isAppointmentOpen, setIsAppointmentOpen } = useModal();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
    
  };
  const [viewDate, setViewDate] = useState(dayjs().format("dddd, D MMMM YYYY"));
  const [selectDate,setselectDate]=useState('');
  const slotTime=[
    {
        date:'04/02/2025',
        slot:['6.00pm','7.00pm','8.00pm','9.00pm','7.00am','8.00am','9.00am','10.00am','12.00pm','1.00pm','2.00pm']
    },
    {
        date:'05/02/2025',
        slot:['6.00pm','7.00pm','8.00pm','9.00pm','7.00am','8.00am','9.00am','10.00am','12.00pm','1.00pm','2.00pm']
    },
    {
        date:'06/02/2025',
        slot:['6.00pm','7.00pm','8.00pm','9.00pm','7.00am','8.00am','9.00am','10.00am','12.00pm','1.00pm','2.00pm']
    },
    {
        date:'04/02/2025',
        slot:['6.00pm','7.00pm','8.00pm','9.00pm']
    },
  ]
  return (
    <Modal
      wrapClassName="custom-appointment-modal"
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isAppointmentOpen}
      onCancel={() => setIsAppointmentOpen(false)}
      style={{ position: "relative", zIndex: "200" }}
    >
      <div className="lg:max-w-[872px] w-full  mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative ">
        {/* Close Button */}
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
          onClick={() => {
            setIsAppointmentOpen(false);
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <h3 className="font-medium leading-[23.46px] md:text-[20px] text-base pb-[24px] text-[#191930] font-sans">
              Book Appointment
            </h3>
          </div>
          <div className="h-[455px] w-[1px] bg-[#D9D9D9] lg:block hidden my-auto" />
          <div className="lg:w-1/2 w-full lg:ps-[40px]">
            <h3 className="font-medium leading-[23.46px] md:text-[20px] text-base pb-[24px] text-[#191930] font-sans ">
              Select Available Date
            </h3>
            <h3 className="font-medium  text-base pb-[24px]  font-sans  text-[#242628]">{viewDate}</h3>
            <div>
              <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                onChange={(e) => {
                    setViewDate(dayjs(e)?.format("dddd, D MMMM YYYY"));
                    setselectDate(e);
                }}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  const current = value.format("MMMM YYYY");
                  return (
                    <div className="flex justify-between items-center px-2 py-4">
                      <div className="text-base font-semibold text-[#242628] font-sans">{current}</div>
                      <div className="flex items-center gap-[24px]">
                        <button
                          onClick={() => {
                            const newValue = value.clone().subtract(1, "month");
                            onChange(newValue);
                          }}
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleLeft className="text-[16px]" />
                        </button>
                        <button
                          onClick={() => {
                            const newValue = value.clone().add(1, "month");
                            onChange(newValue);
                          }}
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleRight className="text-[16px]" />
                        </button>
                      </div>
                    </div>
                  )
                }}
              />
              <div>
              <div className="flex justify-between items-center px-2 py-4 border-b border-b-[#D9D9D9]">
              <h3 className="font-medium  text-base   font-sans  text-[#242628]">Available time slots</h3>
                      <div className="flex items-center gap-[24px]">
                        <button
                        //   onClick={() => {
                        //     const newValue = value.clone().subtract(1, "month");
                        //     onChange(newValue);
                        //   }}
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleLeft className="text-[16px]" />
                        </button>
                        <button
                        //   onClick={() => {
                        //     const newValue = value.clone().add(1, "month");
                        //     onChange(newValue);
                        //   }}
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleRight className="text-[16px]" />
                        </button>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
