import toast from "react-hot-toast";

export const fireToastError = (message: any) => {
  try {
    // if the message is object
    if (typeof message === "object") {
      return toast.error(
        message?.error ?? message?.message ?? "Something went wrong"
      );
    }

    // if the message is string
    if (typeof message == "string") {
      return toast.error(`${message}`);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const fireToastSuccess = (message: string) => {
  toast.success(message);
};
