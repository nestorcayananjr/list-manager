import { Outlet } from "react-router-dom";
import Login from "./Login";

const useAuth = () => {
    const user = {loggedIn: false}
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Login /> 
};

export default ProtectedRoutes