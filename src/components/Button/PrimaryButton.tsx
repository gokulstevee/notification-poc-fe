import React from "react";

const PrimaryButton = ({
  children,
  className,
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${
        disabled
          ? " text-[#aaaaaa] border-[#bfbebe] cursor-not-allowed"
          : "cursor-pointer bg-primary text-white  border-transparent hover:bg-white hover:text-primary hover:border-primary"
      } border-[1px] transition-all duration-300 px-[0.8rem] py-[0.2rem] rounded-md ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
