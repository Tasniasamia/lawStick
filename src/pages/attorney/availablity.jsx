import React, { useState } from "react";
import PageTitle from "../../components/common/title/pageTitle";
import { Calendar, Checkbox } from "antd";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Button from "../../components/common/button";
import dayjs from "dayjs";
const Availablity = () => {
  const slots = [
    "9.00AM",
    "10.00AM",
    "11.00AM",
    "12.00PM",
    "1.00PM",
    "2.00PM",
    "3.00PM",
    "4.00PM",
    "5.00PM",
    "6.00PM",
    "7.00PM",
    "8.00PM",
    "9.00PM",
    "10.00PM",
  ];
  const [selectDate, setselectDate] = useState("");
  const [selectSlots, setSelectSlots] = useState("");

  return (
    <div>
      <PageTitle>
        <h1 className="dashboard-title">Availability</h1>
      </PageTitle>
      <div className="lg:p-10 p-5 ">
        <div className="grid sm:grid-cols-3  grid-cols-1 gap-6">
          <div className="sm:col-span-2 md:max-w-[596px]  attorney">
            <h2 className="text-[20px] font-medium leading-[23.46px] text-[#191930] font-sans mb-5 md:mb-10">
              Select Date & Time
            </h2>
            <Calendar
              fullscreen={false}
              onSelect={(value) => {
                setselectDate(dayjs(value).format("DD/MM/YYYY"));
              }}
              headerRender={({ value, type, onChange, onTypeChange }) => {
                const current = value.format("MMMM YYYY");
                return (
                  <div className="flex justify-between items-center px-2 xl:px-8 py-4">
                    <div className="text-base font-semibold text-[#242628] font-sans">
                      {current}
                    </div>
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
                );
              }}
            />
          </div>
          {selectDate && (
            <div className="md:max-w-[268px] w-full">
              <h2 className="text-[20px] text-center font-medium leading-[23.46px] text-[#191930] font-sans md:mb-10 mb-5">
                Show Time i’m Free
              </h2>
              <div className="flex flex-col gap-4 h-[440px] overflow-y-auto custom-scrollbar">
                {slots.map((slot, index) => (
                  <div
                    key={index}
                    className="flex px-[20px] border border-[#EDEDED] rounded-[10px] justify-between  items-center text-base py-4 text-center font-medium font-sans"
                  >
                    <Checkbox
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectSlots([...selectSlots, slot]);
                        }
                        console.log(slot);
                      }}
                    />
                    <p>{slot}</p>
                    <p />
                  </div>
                ))}
              </div>
              <div className="grid place-content-end">
                <Button
                  className={'mt-[50px]'}
                  onClick={() => {
                    console.log(selectDate, selectSlots);
                  }}
                >
                  Save Time & Date
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availablity;
