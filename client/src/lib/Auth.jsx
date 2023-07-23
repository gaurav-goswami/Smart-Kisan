import { toast } from "react-hot-toast";
import { setToken, setLoading, setUserDetails } from "../app/features/Auth";

export function sendOTP(otpFunc, email, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await otpFunc(email).unwrap();
      toast.success("OTP sent successfully");
      dispatch(setLoading(false));

      navigate("/auth/verify-email");
    } catch (error) {
      console.log("error in sendotp", error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}

export function signUp(signUpFunc, signUpDetails, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await signUpFunc(signUpDetails).unwrap();
      toast.success(response.message);

      localStorage.setItem("token", response.token);
      localStorage.setItem("userDetails", JSON.stringify(response.user));

      const userAvatar = response.user?.profile
        ? response.user?.profile
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`;

      dispatch(setLoading(false));
      dispatch(setToken(response.token));
      dispatch(setUserDetails({ ...response.user, profile: userAvatar }));

      navigate("/");
    } catch (error) {
      console.log("Error in signUp", error);
      toast.error(error.data?.message);
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function loginUser(loginFunc, loginDetails, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await loginFunc(loginDetails).unwrap();

      toast.success(response.message);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userDetails", JSON.stringify(response.user));

      const userAvatar = response.user?.profile
        ? response.user?.profile
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`;

      dispatch(setLoading(false));
      dispatch(setToken(response.token));
      dispatch(setUserDetails({ ...response.user, profile: userAvatar }));

      navigate("/");
    } catch (error) {
      console.log("error in login", error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(""));

    localStorage.removeItem("token");
    toast.success("Logged Out");

    navigate("/");
  };
}
