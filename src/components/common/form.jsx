import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input, Button } from "antd";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin);

export default function AnimationForm() {
  const [activeTab, setActiveTab] = useState("User");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("••••••");

  useEffect(() => {
    gsap.to("#rect", {
      duration: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".animation-form",
        scrub: 2,
        scroll: "body",
       
      },
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 0.9
      },
    });
  }, []);

  const tabs = ["User", "Employee", "Admin"];

  return (
    <div className="min-h-screen lg:my-[120px] my-[60px] bg-gradient-to-br from-emerald-50 to-teal-100 p-4 relative overflow-hidden">
      <div className="custom-container relative">
        <div className="animation-form bg-white/80 max-w-2xl mx-auto backdrop-blur-sm rounded-3xl p-8 w-full shadow-xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h1>
            <div className="flex items-center justify-center gap-4 text-gray-500">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-sm">Sign in with your credentials</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">*</span> Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@gmail.com"
                size="large"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">*</span> Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••"
                  size="large"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-emerald-500 hover:text-emerald-600 text-sm font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="primary"
              size="large"
              block
              className="!bg-emerald-500 hover:!bg-emerald-600 !text-white !rounded-lg"
            >
              Login
            </Button>
          </form>

          {/* Sign Up */}
          <div className="text-center mt-6">
            <span className="text-gray-600">Don't have an account? </span>
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-600 font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* SVG Path for Animation */}
          <div className="absolute z-30 bottom-0 w-[90%] bg-green-300 h-[5px]">
            <svg viewBox="0 0 190 50" preserveAspectRatio="none" className="w-full h-full">
              <path
                id="path"
                d="M10,40 C60,0 130,80 180,40"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Animated Hand Image */}
        <img
          src="/images/hand.png"
          id="rect"
          className="absolute z-20 left-[5%]  top-[85%]"
          alt="hand"
        />

        {/* Background Decorations */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-teal-200 rounded-full opacity-15"></div>
        <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-emerald-300 rounded-full opacity-25"></div>
      </div>
    </div>
  );
}
