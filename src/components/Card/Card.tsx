import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#ffffff] p-[1rem] rounded-md shadow-sm ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
