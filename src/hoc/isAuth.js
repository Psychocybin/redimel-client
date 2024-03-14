import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

import { useAuth } from "../contexts/AuthContext";
import { AuthContext } from "../contexts/AuthContext";

export function isAuth(Component) {

    const WrapperComponent = (props) => {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to="/login" />
    };

    return WrapperComponent;
};

export function isAdmin(Component) {

    const WrapperComponent = (props) => {
        const { jwtToken } = useContext(AuthContext);
        let role;

        if (jwtToken !== '') {
            role = roleState();
        }

        function roleState() {
            const decodedToken = jwtDecode(jwtToken);
            const getValues = Object.values(decodedToken);

            return getValues[1];
        }

        return role === "Writer"
            ? <Component {...props} />
            : <Navigate to="/" />
    };

    return WrapperComponent;
};