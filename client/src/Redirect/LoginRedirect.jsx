import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoginRedirect = () => {
    const {token} = useSelector((state) => state.auth);

    if(token) {
        return <Outlet />
    }
    return <Navigate to ="/auth/login"/>
}

export default LoginRedirect;