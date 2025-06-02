import React, { memo, useEffect } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({
  children,
  isOpen,
  close,
  modalHeader,
  isClosable = false,
  isOutSideClosable = true,
  width = "md",
  modalFooter,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  modalHeader?: string;
  isOutSideClosable?: boolean;
  isClosable?: boolean;
  width?: "sm" | "md" | "lg" | "xl";
  modalFooter?: React.ReactNode;
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(".modal-content")) {
        isOutSideClosable && close();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, close]);

  const getModalSize = (size: string) => {
    switch (size) {
      case "sm":
        return "w-[400px]";
      case "md":
        return "w-[500px]";
      case "lg":
        return "w-[800px]";
      case "xl":
        return "w-[1140px]";
    }
  };

  const modalWidth = getModalSize(width);

  return (
    <div
      className={`fixed top-0 right-0 left-0  z-50 flex items-center justify-center w-full h-full ${
        isOpen
          ? "text-black visible opacity-100 ease-in"
          : "invisible opacity-0 ease-out"
      } transition-all duration-100`}
    >
      <div className="fixed inset-0 bg-black/70" />

      <div
        className={`modal-content m-8 ${modalWidth} text-white relative rounded-lg bg-[#ffffff] shadow-md overflow-hidden`}
        // style={{ maxHeight: "94vh" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full text-black">
            <div
              className={`flex items-center px-[1rem] pt-[1rem] pb-[0.4rem] ${
                modalHeader
                  ? "justify-between bg-[#EDF8F5]"
                  : isClosable
                  ? "justify-end bg-[#EDF8F5]"
                  : ""
              }`}
            >
              {modalHeader && (
                <p className="sm:text-[1.2rem] font-medium">{modalHeader}</p>
              )}
              {isClosable && (
                <button
                  type="button"
                  className="text-[1.2rem] font-medium scale-x-100"
                  onClick={close}
                >
                  <XMarkIcon className="w-[1.5rem] h-[1.7rem] font-bold" />
                </button>
              )}
            </div>
            {(modalHeader || isClosable) && (
              <div className="border-b-[1.5px]"></div>
            )}

            <div className="px-[1rem] py-[1rem] max-h-[80vh] overflow-y-auto">
              {children}
            </div>
          </div>

          {modalFooter && (
            <div className="w-full text-black bg-[#EDF8F5] px-4 py-2">
              {modalFooter}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
