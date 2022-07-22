import { toast, ToastOptions } from "react-toastify";

export const defaultToast: ToastOptions<{}> = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 3000,
  theme: "dark"
};
