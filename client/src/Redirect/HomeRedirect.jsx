import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const HomeRedirect = () => {
    const {token} = useSelector((state) => state.auth);

    if(token) {
        return <Navigate to = "/"/>
    }
    return <Outlet />
}

export default HomeRedirect;