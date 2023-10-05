// toastService.js
import { toast } from "react-toastify";

export const showToast = (message, type) => {
  toast[type](message, {
    autoClose: 2000,
  });
};
