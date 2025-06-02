import { Outlet } from "react-router-dom";
import withAuthRedirection from "src/hoc/withAuthRedirection";

const AuthLayout = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fcfcfc] relative">
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] h-[100%] mx-auto flex flex-row items-center justify-center">
        <div className="w-[100%] h-[78%] bg-[#ffffff] shadow-xl rounded-[2rem] ">
          <div className="text-black w-[100%] lg:rounded-tl-[2rem] lg:rounded-bl-[2rem] rounded-[2rem] h-[100%] flex flex-col gap-10 justify-center items-center bg-[#ffffff] px-[2rem] py-[3rem]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthRedirection(AuthLayout);
