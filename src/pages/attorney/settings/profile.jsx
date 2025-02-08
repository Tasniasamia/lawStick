import { Form, Input } from "antd";
import { useMemo } from "react";
import MultipleImage from "../../../components/common/form/image";
import { TbEdit } from "react-icons/tb";
import profileImage from "../../../../public/images/Alina.png";
import PhoneNumberInput from "../../../components/common/form/phoneNumberInput";
import JoditEditor from "jodit-react";
import { FaMinusCircle, FaPlus } from "react-icons/fa";
export const ProfileUpdate = ({ isEdit, setIsEdit }) => {
  const config = useMemo(
    () => ({
      readonly: isEdit ? false : true,
    }),
    [isEdit]
  );
  return (
    <Form
      onFinish={async (values) => {
        console.log(values);
      }}
      layout="vertical"
    >
      <div className="grid 2xl:grid-cols-[172px_644px] md:grid-cols-[142px_1fr] grid-cols-1  gap-x-[56px] ">
        {isEdit ? (
          <Form.Item name="image">
            <MultipleImage />
          </Form.Item>
        ) : (
          <div className="w-[140px] h-[140px] relative row-span-4  md:pb-0 mb-[56px]">
            <img
              src={profileImage}
              className="w-full h-full object-cover rounded-full"
            />
            <div
              className="absolute right-0 bottom-0 cursor-pointer w-[44px] h-[44px] rounded-full grid place-content-center bg-primary text-white"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <TbEdit className="text-[24px]" />
            </div>
          </div>
        )}

        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-x-[24px] ">
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">Full name</p>
            }
            name="name"
            className="!w-full"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <input
              placeholder="Martha Uilson"
              disabled={!isEdit}
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] pt-[19px] pb-[18px] w-full h-[56px]"
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Email Address
              </p>
            }
            name="email"
            className="!w-full"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <input
              placeholder="uilson@email.com"
              disabled={!isEdit}
              type="email"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
            />
          </Form.Item>

          <PhoneNumberInput
            name="phone"
            placeholder={"01614790538"}
            label={"Phone Number"}
            className={"phone"}
            disabled={!isEdit}
          />
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Designation
              </p>
            }
            name="designation"
            className="!w-full"
            rules={[
              { required: true, message: "Please enter your designation!" },
            ]}
          >
            <input
              placeholder="Senior Lawyer"
              disabled={!isEdit}
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
            />
          </Form.Item>
          <Form.Item
            name="bio"
            className="!w-full col-span-1 md:col-span-2"
            label={
              <p className="text-base font-medium text-[#242628] mb-[12px]">
                Short Bio
              </p>
            }
          >
            <textarea
              type="text"
              disabled={!isEdit}
              className="w-full placeholder:text-base placeholder:font-normal  px-4 py-2 lg:h-[180px] md:h-[180px] h-[4rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
              required
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Certifications and Qualifications
              </p>
            }
            name="certifications"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[
              { required: true, message: "Please enter your Certifications" },
            ]}
          >
            <JoditEditor
              config={config}
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Professional Experience
              </p>
            }
            name="professional_experience"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[
              {
                required: true,
                message: "Please enter your Professional Experience",
              },
            ]}
          >
            <JoditEditor
              config={config}
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Legal Experience
              </p>
            }
            name="legal_experience"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[
              { required: true, message: "Please enter your Legal Experience" },
            ]}
          >
            <JoditEditor
              config={config}
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              placeholder="This case involves Party A and Party B, concerning the alleged murder of Victim's Name."
            />
          </Form.Item>
          <div className="w-full md:col-span-2 col-span-1">
            <Form.List name="practice">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        label="Practice Title"
                        rules={[
                          {
                            required: true,
                            message: "Missing Practice Title",
                          },
                        ]}
                      >
                        <input
                          placeholder="Enter Practice Title"
                          disabled={!isEdit}
                          type="text"
                          className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px] h-[56px]"
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        label="Practice Description"
                        rules={[
                          {
                            required: true,
                            message: "Missing  Practice Description",
                          },
                        ]}
                      >
                        <JoditEditor
                          placeholder="Enter Practice Description"
                          config={config}
                        />
                      </Form.Item>
                      {isEdit && (
                        <div className="grid place-content-end">
                          <FaMinusCircle
                            disabled={!isEdit}
                            onClick={() => remove(name)}
                            className="text-[16px] grid place-content-end my-2 text-red-500"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {isEdit && (
                    <Form.Item className="grid place-content-end">
                      <span
                        type="dashed"
                        disabled={!isEdit}
                        className="border-2 mt-4 w-fit bg-primary  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4 h-fit py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm flex items-center"
                        onClick={() => add()}
                      >
                        <FaPlus className="mr-2" /> Add Practice
                      </span>
                    </Form.Item>
                  )}
                </>
              )}
            </Form.List>
          </div>
          <p className="text-[28px] font-sans mb-3 leading-[41.76px] font-medium text-[#242628] col-span-1 md:col-span-2">
            Social Links
          </p>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">Twitter</p>
            }
            name="twitter"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[{ required: true, message: "Please enter your twitter!" }]}
          >
            <input
              placeholder="www.twitter.com"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">Facebook </p>
            }
            name="facebook"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[{ required: true, message: "Please enter your postcode!" }]}
          >
            <input
              placeholder="www.facebook.com"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">Linkedin </p>
            }
            name="linkedin"
            className="!w-full  col-span-1 md:col-span-2"
            rules={[{ required: true, message: "Please enter your postcode!" }]}
          >
            <input
              placeholder="www.linkedin.com"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>

          {isEdit && (
            <div className="flex gap-6 items-center justify-end sm:col-span-2 col-span-1">
              <span
                className="capitalize w-fit px-[32px] py-[16px] rounded-[8px] bg-[#EDEDED] text-[#242628] font-sans text-[18px] leading-[24px] font-medium cursor-pointer"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                Cancel
              </span>
              <button
                type="submit"
                className={`border-2 bg-primary w-fit  button text-white hover:bg-transparent hover:text-primary border-primary lg:px-8 text-textMain !font-poppins md:px-4  py-4 px-4 whitespace-pre rounded-[8px] transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm `}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
};
