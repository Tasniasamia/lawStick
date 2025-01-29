import { useState } from "react"

import { IoClose } from "react-icons/io5"
import Button from "../common/button"
import { Card, Form } from "antd"
import { TbArrowRightToArc } from "react-icons/tb";
import {FiEye, FiEyeOff} from "react-icons/fi";

const SignUp1 = ({ noCurrent,required,min,confirm,label }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")

  // Password strength calculation
  const calculateStrength = (pass) => {
    let strength = 0
    if (pass.length >= 8) strength++
    if (/[A-Z]/.test(pass)) strength++
    if (/[0-9]/.test(pass)) strength++
    if (/[^A-Za-z0-9]/.test(pass)) strength++
    return strength
  }

  const strengthLabels = ["weak", "medium", "strong"]
  const strengthColors = ["#ff4d4f", "#faad14", "#52c41a"]
  const passwordStrength = calculateStrength(password)
  const [form] = Form.useForm();
//password
const t = d => d

let rules = [
    {required, message: t('Please enter a password')},
    {min: confirm ? 0 : min, message: t('Password must be at least 6 characters')}
]

if (confirm) {
    rules.push(({getFieldValue}) => ({
        validator(_, value) {
            if ((!value && required) || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    }))
}

if (noCurrent) {
    rules.push(({getFieldValue}) => ({
        validator(_, value) {
            if ((!value && required) || getFieldValue('current_password') !== value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(t("New password can't be same as current password")));
        },
    }))
}
  const handleFinish = (values) => {
    console.log("Form Values:", values);
  };



  return (
    <div className="flex justify-center items-start bg-black bg-opacity-50 pt-[190px] ">
    <div className="sm:max-w-[488px] w-full sm:mx-0 mx-2 bg-white rounded-[20px] p-10 relative">

      {/* Close Button */}
      <button className="w-[32px] h-[32px] rounded-full bg-[#EDEDED] absolute right-6 top-6 inline-flex justify-center items-center">
        <IoClose size={20} className="text-[#242628] text-[12px]" />
      </button>
      {/* Back button */}
      <div className="w-[40px] h-[40px] mb-[40px]">
      <TbArrowRightToArc className="text-[33.33px] text-[#242628]"/>
      </div>
      {/* Form Header */}
      <h2 className="leading-[32.84px] text-[28px] font-semibold text-[#242628] mb-[40px]">Sign Up</h2>

      {/* Form Fields */}
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label={(<p className="text-base font-medium text-[#242628] ">Email Address</p>)}
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <input placeholder="Example@lawstick.com" type='email' className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"/>
        </Form.Item>
        {/* Password Field */}
        <div className="space-y-2">
        <Form.Item
            name={name || 'password'}
            label={(<p className="text-base font-medium text-[#242628] ">{label || "Password"}</p>)}
            rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
        >
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {password && (
            <div className="space-y-1 pt-[12px]">
              <div className="flex gap-4 h-[6px]">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index < passwordStrength ? strengthColors[passwordStrength - 1] : "#e8e8e8",
                    }}
                  />
                ))}
              </div>
             <div className="text-xs text-black flex justify-between pt-1 gap-[16px]">
              {
                strengthLabels?.map((i,index)=>{ return (
                    <div key={index} className={`w-1/3  text-xs font-medium ${i === "strong"?"text-green-500":"text-[#818B8F]"} capitalize`}>{i}</div>)
                })
              }
              </div> 
            </div>
          )}
          </ Form.Item>
        </div>

        {/* Confirm Password Field */}
        <Form.Item
            name={name || 'repeat'}
            label={(<p className="text-base font-medium text-[#242628] ">{ "Repeat Password"}</p>)}
            rules={[
                { required: true, message: "Please enter your email!" },
                { type: "password", message: "Enter a valid password!" },
              ]}
        >
        <div className="relative">
          <input
            name="repeat_password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••••••"
            className="border border-[#E0E0E0] rounded-[10px] px-[20px] w-full pt-[19px] pb-[18px]"
            />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>
   
    </ Form.Item>

        {/* Sign Up Button */}
        <Button className={'w-full  mb-[16px]'}>
          Sign Up
        </Button>
        </Form>
        {/* Google Sign Up Button */}
        <button
          className="w-full bg-[#EDEDED] text-[#242628] py-3 rounded-md border transition-colors flex items-center justify-center gap-2"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
          Sign Up With Google
        </button>
      
        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 pt-[24px]">
          Already Have An Account?{" "}
          <a href="#" className="text-[#C4976A] hover:underline">
            Sign In
          </a>
        </p>
   
    </div>
    </div>
  )
}

export default SignUp1

