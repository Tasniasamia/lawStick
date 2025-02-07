import {  useState } from "react";
import PageTitle from "../../../components/common/title/pageTitle";
import {  Form, Input} from "antd";
import { FiLock, FiUnlock } from "react-icons/fi";
import { ProfileUpdate } from "./profile";

const AttorneyProfileSettings = () => {
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

export default AttorneyProfileSettings;
export const PasswordUpdate = ({ setTab }) => {
  return (
    <div>
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
