import { Form } from "antd";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const FormPassword = ({ noCurrent, required, min, confirm, label, checkPassword, placeholder, name }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [form]=Form.useForm();

    const [password, setPassword] = useState('');
    // Password strength calculation
    const calculateStrength = (pass) => {
        let strength = 0;
        if (pass?.length >= 8) strength;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        return strength;
    };

    const strengthLabels = ["weak", "medium", "strong"];
    const strengthColors = ["#ff4d4f", "#faad14", "#28A745"];
    const passwordStrength = calculateStrength(password);

    let rules = [
        { required:checkPassword? false :required, message: "Please enter a password" },
        { min: confirm ? 0 : min, message: "Password must be at least 6 characters" },
    ];

    if (confirm) {
        rules.push(({ getFieldValue }) => ({
          validator(_, value) {
            // Allow empty if field is not required
            if (!value && !required) return Promise.resolve();
            
            // Check match only if value exists
            if (getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match!'));
          },
        }));
      }
    if (noCurrent) {
        rules.push(({ getFieldValue }) => ({
            validator(_, value) {
                if (!value && required) return Promise.reject("New password required");
                if (getFieldValue("current_password") !== value) return Promise.resolve();
                return Promise.reject("New password can't be the same as current password");
            },
        }));
    }

    return (
        <Form.Item
            name={name}
            label={<p className="text-base font-medium text-[#242628]">{label || "Password"}</p>}
            rules={password ? rules : []}
        >
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder || "**************"}
                    onChange={(e) => checkPassword && setPassword(e.target.value)}
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
            {password && !confirm && (
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
                        {strengthLabels.map((i, index) => (
                            <div
                                key={index}
                                className={`w-1/3 text-xs font-medium ${i === "strong" ? "text-[#28A745]" : "text-[#818B8F]"} capitalize`}
                            >
                                {i}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Form.Item>
    );
};

export default FormPassword;
