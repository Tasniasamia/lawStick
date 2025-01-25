'use client';
import{ useState } from 'react';
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Button = ({children,onClick,type = 'button',loadingText = 'Loading...',className}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    if (type === 'submit') {
      setIsLoading(true);
    }
    if (onClick) {
      await onClick(event);
    }
    if (type === 'submit') {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      type={type}
      onClick={handleClick}
      className={`border-2 g-primary ${className} button text-white hover:bg-transparent hover:text-primary border-primary lg:px-4 text-textMain !font-poppins md:px-4 h-fit py-2 px-4 whitespace-pre rounded transition-all !font-medium duration-300 ease-in-out sm:text-base capitalize text-sm ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white'}  `}
      disabled={isLoading}
    >
      {isLoading ? loadingText : children}
    </motion.button>
  );
};

export default Button;