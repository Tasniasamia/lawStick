import React, { useState } from "react";
import { Calendar, Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { useModal } from "../../../../context/modalContext";
import dayjs from "dayjs";
import Button from "../../../../components/common/button";
import { FaRegCalendarAlt } from "react-icons/fa";

const CalendarModal = ({
  slotTime,
  selectDate,
  setselectDate,
  selectSlot,
  setSelectSlot,
  setIsCaseDetailsOpen,
}) => {
  const { isAppointmentOpen, setIsAppointmentOpen } = useModal();
  const [viewDate, setViewDate] = useState(dayjs().format("dddd, D MMMM YYYY"));
  const [pageCount, setPageCount] = useState(1);
  const findSlot = slotTime?.find((item) => item?.date === selectDate);

  const slotsPerPage = 9;
  const displayedSlots = findSlot?.slot?.slice(
    (pageCount - 1) * slotsPerPage,
    pageCount * slotsPerPage
  );

  const handlePageChange = (direction) => {
    if (
      direction === "next" &&
      pageCount * slotsPerPage < findSlot?.slot?.length
    ) {
      setPageCount(pageCount + 1);
    } else if (direction === "prev" && pageCount > 1) {
      setPageCount(pageCount - 1);
    }
  };

  const isPastTime = (slotTime) => {
    const now = dayjs(); // Current date & time
    const selected = dayjs(selectDate, "DD/MM/YYYY"); // Selected date

    if (selected.isBefore(now, "day")) {
      return true; // Past date → Disable all slots
    } else if (selected.isSame(now, "day")) {
      // Convert slot time to 24-hour format for proper comparison
      const slot24Hour = dayjs(slotTime, ["h.mmA"]).format("HH:mm");
      const current24Hour = now.format("HH:mm");

      return slot24Hour < current24Hour; // Disable past slots
    }

    return false; // Future date → Enable all slots
  };
  return (
    <Modal
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isAppointmentOpen}
      onCancel={() => {
        setIsAppointmentOpen(false);
        setSelectSlot("");
        setselectDate("");
      }}
      style={{ position: "relative", zIndex: "200" }}
      width="800px"
    >
      <div className=" w-full mx-auto bg-white rounded-[20px] p-[10px] relative ">
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute sm:right-0 right-[2px] top-[2px] sm:top-0 inline-flex justify-center items-center"
          onClick={() => {
            setIsAppointmentOpen(false);
            setSelectSlot("");
            setselectDate("");
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>
        <div className="flex xl:flex-row flex-col gap-x-0 gap-y-10">
          <div className="xl:w-1/2 w-full">
            <h3 className="font-medium leading-[23.46px] text-[20px] pb-[24px] text-[#191930] font-ebgramond ">
              Book Appointment
            </h3>
            <div className="pe-[40px]">
            <div className="flex items-center gap-3 mb-8 border-b pb-[25px] ">
              <img
                className="h-16 w-16"
                src={"https://i.ibb.co.com/jvN1vRy0/ex-Attorney.png"}
                alt={"attorney"}
              />
              <div>
                <p className="font-medium text-lg text-[#242628]">
                  William Scott
                </p>
                <p className="font-medium text-[#3A3D3F]">Criminal Lawer</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 !text-base">
              <p className=" max-w-[356px]">
                <span className="font-medium">Biography:</span>{" "}
                <span className="text-[#3A3D3F]">
                  Alina Gain is an experienced attorney specializing in family
                  law, providing dedicated, personalized legal solutions with
                  integrity
                </span>
              </p>
              <p>
                <span className="font-medium">Degree:</span>{" "}
                <span className="text-[#3A3D3F]">
                  Juris Doctor JD: Oxford University
                </span>
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                <span className="text-[#3A3D3F]">4 years</span>
              </p>
              <p>
                <span className="font-medium">Qualification:</span>{" "}
                <span className="text-[#3A3D3F]">
                  LL.M in Taxation: Columbia University
                </span>
              </p>
            </div>
            </div>
          </div>
          <div className="h-[455px] w-[1px] bg-[#D9D9D9] xl:block hidden my-auto" />
          <div className="xl:w-1/2 w-full xl:ps-[40px]">
            <h3 className="font-medium leading-[23.46px] md:text-[20px] text-base pb-[24px] text-[#191930] font-sans ">
              Select Available Date
            </h3>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base pb-[24px] font-sans text-[#242628] flex items-center gap-1">
                <FaRegCalendarAlt /> {viewDate}
              </h3>
              {selectDate && (
                <button
                  onClick={() => {
                    setselectDate("");
                    setSelectSlot("");
                  }}
                  className="text-primary font-medium text-base pb-[24px] font-sans "
                >
                  Change
                </button>
              )}
            </div>
            <div>
              {selectDate ? (
                <div>
                  <div className="flex justify-between mb-[24px] items-center px-2 py-6 border-b border-b-[#D9D9D9]">
                    <h3 className="font-medium text-base font-sans text-[#242628]">
                      Available time slots
                    </h3>

                    <div className="flex items-center gap-[24px]">
                      <button
                        onClick={() => handlePageChange("prev")}
                        disabled={pageCount === 1}
                        className="hover:text-blue-600 text-textColor"
                      >
                        <TfiAngleLeft className="text-[16px]" />
                      </button>
                      <button
                        onClick={() => handlePageChange("next")}
                        disabled={
                          pageCount * slotsPerPage >= findSlot?.slot?.length
                        }
                        className="hover:text-blue-600 text-textColor"
                      >
                        <TfiAngleRight className="text-[16px]" />
                      </button>
                    </div>
                  </div>
                  {displayedSlots?.length > 0 ? (
                    <div>
                      <div className="grid grid-cols-3 gap-[14px]">
                        {displayedSlots.map((time, index) => (
                          <button
                            key={index}
                            disabled={isPastTime(time)}
                            className={`px-4 py-2 m-1 border rounded-[8px] ${
                              time === selectSlot
                                ? "bg-primary bg-opacity-10 text-primary border-primary transition"
                                : "text-[#242628] border-[#E0E0E0] "
                            } text-sm 
            ${
              isPastTime(time)
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "hover:bg-primary hover:bg-opacity-10 hover:text-primary hover:border-primary transition"
            }
          `}
                            onClick={() => {
                              setSelectSlot(time);
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <Button
                        className="w-full mt-[27px]"
                        onClick={() => {
                          setIsCaseDetailsOpen(true);
                          setIsAppointmentOpen(false);
                        }}
                      >
                        Continue
                      </Button>
                    </div>
                  ) : (
                    <div>No slot available</div> // ✅ Fixed the tag closure
                  )}
                </div>
              ) : (
                <Calendar
                  fullscreen={false}
                  onSelect={(value) => {
                    setViewDate(dayjs(value).format("dddd, D MMMM YYYY"));
                    setselectDate(dayjs(value).format("DD/MM/YYYY")); // ✅
                    setPageCount(1);
                  }}
                  headerRender={({ value, type, onChange, onTypeChange }) => {
                    const current = value.format("MMMM YYYY");
                    return (
                      <div className="flex justify-between items-center px-2 py-4">
                        <div className="text-base font-semibold text-[#242628] font-sans">
                          {current}
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <button
                            onClick={() => {
                              const newValue = value
                                .clone()
                                .subtract(1, "month");
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
                    );
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CalendarModal;
