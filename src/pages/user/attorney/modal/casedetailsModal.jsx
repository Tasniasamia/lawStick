import React, { useState } from "react";
import { Form, Grid, Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { useModal } from "../../../../context/modalContext";
import dayjs from "dayjs";
import Button from "../../../../components/common/button";
import UploadFileComponent from "../../../../components/common/form/fileUpload";
import { LuUpload } from "react-icons/lu";
const CaseDetailsModal = ({
  isCaseDetaiOpen,
  setIsCaseDetailsOpen,
  setCasedetailsValue,
  setselectDate,
  setSelectSlot,
  setIsPaymentModal,
}) => {
  setselectDate = { setselectDate };
  setSelectSlot = { setSelectSlot };
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint(); // Use the hook correctly
  const getModalWidth = () => {
    if (screens.xxl) {
      return 892;
    } else if (screens.xl) {
      return 710;
    } else if (screens.lg) {
      return 700;
    } else if (screens.md) {
      return 600;
    } else if (screens.sm) {
      return 500;
    } else {
      return "100%";
    }
  };
  return (
    <Modal
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isCaseDetaiOpen}
      onCancel={() => setIsCaseDetailsOpen(false)}
      style={{ position: "relative", zIndex: "200" }}
      width={getModalWidth()}
     >
      <div className="lg:max-w-[872px] w-full mx-auto bg-white rounded-[20px] p-[10px] relative ">
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute sm:top-0 top-[2px] right-[2px]  sm:right-0 inline-flex justify-center items-center"
          onClick={() => {
            setIsCaseDetailsOpen(false);
          }}
        >
          <IoClose
            size={20}
            className="text-[#242628] text-[12px] cursor-pointer"
          />
        </button>

        <h3 className="font-medium leading-[23.46px] text-[20px] pb-[24px] text-[#191930] font-ebgramond ">
          Case Detail's
        </h3>
        <Form
          onFinish={async (values) => {
            setCasedetailsValue({ ...values });
            setIsCaseDetailsOpen(false);
            setIsPaymentModal(true);
          }}
          layout="vertical"
        >
          <Form.Item
            name="caseType"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Case Type
              </p>
            }
          >
            <select
              className=" sm:px-4 sm:py-4 px-2 py-2 w-full placeholder:text-base placeholder:font-normal sm:h-[56px] h-[46px] border-[#E0E0E0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Case Type"
              required
            >
              <option value="realstate">Real State</option>
              <option value="familyLaw" selected>
                Family Law
              </option>
            </select>
          </Form.Item>
          <Form.Item
            name="description"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Case Short Description
              </p>
            }
          >
            <textarea
              type="text"
              className="w-full placeholder:text-base placeholder:font-normal  px-4 py-2 lg:h-[180px] md:h-[180px] h-[4rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
              required
            />
          </Form.Item>
          <Form.Item
            name="case-history"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Case History{" "}
                <span className="text-[#818B8F] ms-1">(optional)</span>
              </p>
            }
          >
            <textarea
              type="text"
              className="w-full placeholder:text-base placeholder:font-normal  px-4 py-2 lg:h-[180px] md:h-[180px] h-[4rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
            />
          </Form.Item>
          <Form.Item
            name="evidence"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Evidence <span className="text-[#818B8F] ms-1">(optional)</span>
              </p>
            }
          >
            <div className="">
              <UploadFileComponent
                name="evidence"
                // className={"upload-image"}
                childClassName={"upload border py-[18px] px-[20px] text-[#242628] text-base font-medium"}
                >
             
                  <LuUpload />
                  <p>Upload Your File</p>
              </UploadFileComponent>
            </div>
          </Form.Item>
          <button
            type="submit"
            className={`border-2 bg-primary  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-fit py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm `}
          >
            Continue
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default CaseDetailsModal;
