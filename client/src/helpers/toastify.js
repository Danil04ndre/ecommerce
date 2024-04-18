import { toast } from "react-toastify";

export const notify = (type, text) => {
  const configure = {
    position: "top-left",
    pauseOnHover: false,
    autoClose: 1800,
    hideProgressBar: true,
  };

  switch (type) {
    case "success":
      toast.success(text, configure);
      break;
    case "error":
      toast.error(text, configure);
      break;
    case "warn":
      toast.warn(text, configure);
      break;
    case "info":
      toast.info(text,{
        autoClose: false,
        icon: false,
        position: "top-center",
        closeButton: false,
      });
      break;
    default:
      break;
  }
};
