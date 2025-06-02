import React from "react";
import { getUserFromLocalStorage } from "@utils/main";
import { useLocation } from "react-router-dom";

const AuthPages = ["/login", "/signup"];

const withAuthRedirection = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const ComponentWithAuthRedirection: React.FC<P> = (props) => {
    const location = useLocation();

    const data = getUserFromLocalStorage();

    if (AuthPages.includes(location.pathname)) {
      // If accessed login route with session then re-direct to protected route home page
      if (data) {
        window.location.href = "/post";

        return null;
      }
    } else {
      // If accessed protected route without session then re-direct to login page
      if (!data) {
        window.location.href = "/login";

        return null;
      }
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthRedirection;
};

export default withAuthRedirection;
