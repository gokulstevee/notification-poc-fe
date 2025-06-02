import { memo } from "react";

const TableLoading = () => {
  return (
    <div className="flex space-x-1 justify-center items-center bg-transparent my-[0.5rem] py-[5rem]">
      <div className="h-2 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      <div className="h-4 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-6 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="h-4 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.1s]"></div>
      <div className="h-2 w-1 bg-primary rounded-full animate-bounce"></div>
    </div>
  );
};

export default memo(TableLoading);
