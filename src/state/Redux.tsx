import { Provider } from "react-redux";
import store from "./store";
// import { debounce } from "ts-debounce";
// import { saveState } from "./storage";

// store.subscribe(
//   // we use debounce to save the state once each 800ms
//   // for better performances in case multiple changes occur in a short time
//   debounce(() => {
//     saveState(store.getState());
//   }, 400)
// );

type Props = {
  children: React.ReactNode;
};

export function Redux({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
