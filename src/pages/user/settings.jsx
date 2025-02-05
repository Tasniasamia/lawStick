import { useState } from "react";
import PageTitle from "../../components/common/title/pageTitle";
import profileImge from "../../../public/images/Alina.png";
import { DatePicker, Form, Input, Switch } from "antd";
import PhoneNumberInput from "../../components/common/form/phoneNumberInput";
import FormCountrySelect from "../../components/common/form/country";
import MultipleImage from "../../components/common/form/image";
import { TbEdit } from "react-icons/tb";
import { FiLock, FiUnlock } from "react-icons/fi";
const UserProfileSettings = () => {
  const [tab, setTab] = useState("profile");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <PageTitle>
        <h1 className="dashboard-title">Settings</h1>
      </PageTitle>
      <div className="lg:px-10 px-5 py-10">
        <div className="flex items-center gap-[24px] pb-[56px]">
          <button
            className={`px-[12px] rounded-[10px] py-[11px] text-base font-medium font-sans ${
              tab === "profile"
                ? "bg-primary text-white"
                : "bg-[#EDEDED] text-[#242628]"
            }`}
            onClick={() => {
              setTab("profile");
            }}
          >
            Profile
          </button>
          <button
            className={`px-[12px] rounded-[10px]  py-[11px] text-base font-medium font-sans ${
              tab === "password"
                ? "bg-primary text-white"
                : "bg-[#EDEDED] text-[#242628]"
            }`}
            onClick={() => {
              setTab("password");
            }}
          >
            Password
          </button>
        </div>
        {tab === "profile" && (
          <ProfileUpdate isEdit={isEdit} setIsEdit={setIsEdit} />
        )}
        {tab === "password" && <PasswordUpdate setTab={setTab} />}
      </div>
    </div>
  );
};

export default UserProfileSettings;

export const ProfileUpdate = ({ isEdit, setIsEdit }) => {
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
              src={profileImge}
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
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] pt-[19px] pb-[18px] w-full "
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
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Date of Birth
              </p>
            }
            name="dob"
            rules={[{ required: true, message: "Please enter your dob!" }]}
            className="datepick"
          >
            {/* <input
              type="date"
              disabled={!isEdit}
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            /> */}
            <DatePicker
              format={"DD MMM YYYY"}
              onChange={(date, dateString) => console.log(dateString)}
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
                Present Address
              </p>
            }
            name="present-address"
            className="!w-full"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <input
              placeholder="20 Cooper Square, New York, USA"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Permanent Address
              </p>
            }
            name="permanent-address"
            className="!w-full"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <input
              placeholder="20 Cooper Square, New York, USA"
              type="text"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-base font-medium text-[#242628] ">
                Postal Code{" "}
              </p>
            }
            name="postCode"
            className="!w-full"
            rules={[{ required: true, message: "Please enter your postcode!" }]}
          >
            <input
              placeholder="9300"
              type="number"
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
              disabled={!isEdit}
            />
          </Form.Item>
          <FormCountrySelect
            name={"country"}
            label={"Country"}
            required={true}
            disabled={!isEdit}
          />
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

export const PasswordUpdate = ({ setTab }) => {
  const [isTwoFactor, setIsTwoFactor] = useState(true);
  return (
    <div className="">
      <h2 className="leading-[28.15px] text-[#242628] font-medium md:text-[24px] text-[20px] font-sans mb-[24px]">
        Two-factor Authentication
      </h2>
      <div className="flex gap-x-[24px] md:items-center text-textColor font-sans mb-[56px]">
        <Switch
          checked={isTwoFactor}
          onChange={(checked) => {
            setIsTwoFactor(checked);
            console.log(checked);
          }}
          style={{ transform: "scale(1.5)", marginInlineStart: "10px" }}
        />
        <p className="text-base">Enable or disable Two-factor Authentication</p>
      </div>
      <h2 className="leading-[28.15px] text-[#242628] font-medium md:text-[24px] text-[20px] font-sans mb-[24px]">
        Change Password
      </h2>
      <Form
        layout="vertical"
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <div className="md:max-w-[342px] w-full">
          <Form.Item
            name={"password"}
            label={
              <p className="text-base font-medium text-[#242628]">
                {"Current Password"}
              </p>
            }
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              placeholder={"**************"}
              className="border border-[#E0E0E0] rounded-[10px] ps-[20px] w-full pt-[19px] pb-[18px]"
              iconRender={(visible) =>
                visible ? (
                  <FiUnlock size={16} style={{ color: "#9CA3AF" }} />
                ) : (
                  <FiLock size={16} style={{ color: "#9CA3AF" }} />
                )
              }
            />
          </Form.Item>
          <Form.Item
            name={"newpassword"}
            label={
              <p className="text-base font-medium text-[#242628]">
                {"New Password"}
              </p>
            }
            rules={[
              {
                required: true,
                message: "Please enter your new password",
              },
            ]}
          >
            <Input.Password
              placeholder={"**************"}
              className="border border-[#E0E0E0] rounded-[10px] ps-[20px] w-full pt-[19px] pb-[18px]"
              iconRender={(visible) =>
                visible ? (
                  <FiUnlock size={16} style={{ color: "#9CA3AF" }} />
                ) : (
                  <FiLock size={16} style={{ color: "#9CA3AF" }} />
                )
              }
            />
          </Form.Item>
        </div>
        <div className="flex gap-6 items-center justify-end sm:col-span-2 col-span-1">
          <span
            className="capitalize w-fit px-[32px] py-[16px] rounded-[8px] bg-[#EDEDED] text-[#242628] font-sans text-[18px] leading-[24px] font-medium cursor-pointer"
            onClick={() => {
              setTab("profile");
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
      </Form>
    </div>
  );
};
