import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import App from "./App.tsx";
import store from "./state/store.ts";
import { Toaster } from "react-hot-toast";
import FixedLoading from "@components/Loading/FixedLoading/FixedLoading.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster
      toastOptions={{
        className: "",
        style: {
          color: "#ffffff",
          backgroundColor: "#000000",
        },
      }}
    />
    <App />
    <FixedLoading />
  </Provider>
);
