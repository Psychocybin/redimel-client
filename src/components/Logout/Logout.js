import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    authService.logout();
    logout();

    return <Navigate to="/login" replace={true} />
}

export default Logout;