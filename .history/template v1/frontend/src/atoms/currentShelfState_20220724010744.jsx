import { atom } from "recoil";

// Takes index of current album in focus
export const currentShelfState = atom({
  key: "currentShelfState", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});