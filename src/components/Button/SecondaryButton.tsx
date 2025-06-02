import React from "react";

const SecondaryButton = ({
  children,
  bg = "transparent",
  className,
  disabled,
  ...props
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}) => {
  const bgColor = `bg-${bg} `;
  return (
    <button
      className={`${bgColor} ${
        disabled
          ? "text-[#aaaaaa] border-[#aaaaaa]"
          : "text-primary border-primary"
      }  border-[1px] px-[0.8rem] py-[0.2rem] rounded-md ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
