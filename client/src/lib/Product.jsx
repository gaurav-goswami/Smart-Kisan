import { toast } from "react-hot-toast";

export const uploadProduct = async (
  productUploadFunc,
  productDetails,
  navigate,
  setLoading
) => {
  const toastId = toast.loading("Loading...");

  setLoading(true)
  try {
    const response = await productUploadFunc(productDetails).unwrap();

    console.log("product upload response", response);

    toast.success("Ready to sell 😎");
    navigate("/");
  } catch (error) {
    console.log("error in upload product", error);
    toast.error(error.data.message)
  }

  setLoading(false)
  toast.dismiss(toastId);
};
