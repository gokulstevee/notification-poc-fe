import { Outlet } from "react-router-dom";
import withAuthRedirection from "src/hoc/withAuthRedirection";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default withAuthRedirection(AppLayout);
