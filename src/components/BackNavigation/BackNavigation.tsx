import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const BackNavigation = ({ navigateUrl }: { navigateUrl: string }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(navigateUrl)}
      className="flex justify-center items-center cursor-pointer"
    >
      <ChevronLeftIcon className="w-[24px] h-[24px]" />
    </button>
  );
};

export default BackNavigation;
