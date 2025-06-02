import { WheelEventHandler } from "react";

export const preventNumberInputScroll: WheelEventHandler<HTMLInputElement> = (
  e
) => {
  const target = e.currentTarget;
  target.blur();

  // Prevent the page/container scrolling
  e.stopPropagation();

  // Refocus immediately, on the next tick (after the current function is done)
  setTimeout(() => {
    target.focus();
  }, 0);
};

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !user) return null;

    const parsedUser = JSON.parse(user);

    return { user: parsedUser, token };
  } catch (error) {
    return null;
  }
};

export const objectToQueryString = (obj: {
  [key: string]: string | null | undefined | number | boolean;
}): string => {
  let keyValuePairs = [];
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      obj[key] !== undefined &&
      obj[key] !== null &&
      obj[key] !== ""
    ) {
      keyValuePairs.push(`${key}=${obj[key]}`);
    }
  }
  return keyValuePairs.join("&");
};
