import { atom } from "recoil";

// Takes index of current album in focus
export const itemState = atom({
  key: "itemState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});