import React, { useState } from "react";
import { Form, Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { useModal } from "../../../../context/modalContext";
import dayjs from "dayjs";
import Button from "../../../../components/common/button";
import FileUploader from "../../../../components/common/form/fileUpload";
const CaseDetailsModal = ({
  isCaseDetaiOpen,
  setIsCaseDetailsOpen,
  setCasedetailsValue,
  setselectDate,
  setSelectSlot
}) => {
  setselectDate={setselectDate}
  setSelectSlot={setSelectSlot}
  return (
    <Modal
      wrapClassName="custom-appointment-modal"
      className="!bg-transparent"
      footer={null}
      closeIcon={false}
      open={isCaseDetaiOpen}
      onCancel={() => setIsCaseDetailsOpen(false)}
      style={{ position: "relative", zIndex: "200" }}
    >
      <div className="lg:max-w-[872px] w-full mx-auto bg-white rounded-[20px] p-4 sm:p-10 relative ">
        <button
          className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center"
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
            name="Evidence"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Evidence <span className="text-[#818B8F] ms-1">(optional)</span>
              </p>
            }
          >
            <FileUploader />
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
