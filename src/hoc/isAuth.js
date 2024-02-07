import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function isAuth(Component) {
    
    const WrapperComponent = (props) => {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to="/login" />
    };

    return WrapperComponent;
};