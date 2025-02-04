import { useState } from "react";
import { Calendar, Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { useModal } from "../../../context/modalContext";
import dayjs from "dayjs";

export const Appointment = () => {
  const { isAppointmentOpen, setIsAppointmentOpen } = useModal();
  const [viewDate, setViewDate] = useState(dayjs().format("dddd, D MMMM YYYY"));
  const [selectDate, setselectDate] = useState("");
  const [pageCount, setPageCount] = useState(1); // Pagination state
  //   dayjs().format("DD/MM/YYYY")
  const slotTime = [
    {
      date: "04/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
        "12.00PM",
        "1.00PM",
        "2.00PM",
        "10.00PM",
      ],
    },
    {
      date: "05/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
      ],
    },
    {
      date: "06/02/2025",
      slot: [
        "6.00PM",
        "7.00PM",
        "8.00AM",
        "9.00PM",
        "7.00PM",
        "8.00PM",
        "9.00AM",
        "10.00AM",
        "12.00PM",
        "1.00PM",
        "2.00PM",
        "10.00PM",
      ],
    },
  ];

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

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  // 🔥 Compare date & time for disabling past slots
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
      wrapClassName="custom-appointment-modal"
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isAppointmentOpen}
      onCancel={() => setIsAppointmentOpen(false)}
      style={{ position: "relative", zIndex: "200" }}
    >
      <div className="lg:max-w-[872px] w-full mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative ">
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
            <h3 className="font-medium leading-[23.46px] text-[20px] pb-[24px] text-[#191930] font-ebgramond ">
              Book Appointment
            </h3>
          </div>
          <div className="h-[455px] w-[1px] bg-[#D9D9D9] lg:block hidden my-auto" />
          <div className="lg:w-1/2 w-full lg:ps-[40px]">
            <h3 className="font-medium leading-[23.46px] md:text-[20px] text-base pb-[24px] text-[#191930] font-sans ">
              Select Available Date
            </h3>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base pb-[24px] font-sans text-[#242628]">
                {viewDate}
              </h3>
              {selectDate && (
                <button
                  onClick={() => {
                    setselectDate("");
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
                    <div className="grid grid-cols-3 gap-[14px]">
                      {displayedSlots.map((time, index) => (
                        <button
                          key={index}
                          disabled={isPastTime(time)}
                          className={`px-4 py-2 m-1 border rounded-[8px] text-sm text-[#242628] border-[#E0E0E0] 
          ${
            isPastTime(time)
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "hover:bg-primary hover:bg-opacity-10 hover:text-primary hover:border-primary transition"
          }
        `}
                        >
                          {time}
                        </button>
                      ))}
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
