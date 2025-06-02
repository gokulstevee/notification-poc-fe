import { memo } from "react";

const HTMLContentLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-transparent my-[0.5rem]">
      <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
    </div>
  );
};

export default memo(HTMLContentLoading);
