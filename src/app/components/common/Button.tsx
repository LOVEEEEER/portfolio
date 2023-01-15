import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={
        "text-white bg-black px-4 py-1.5 rounded-full font-normal hover:bg-grey ease-in duration-200" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
