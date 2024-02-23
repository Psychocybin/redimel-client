import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

// import * as authService from '../../services/authService';

export default function Logout() {
    const { logout, changeMessage } = useAuth();

    useEffect(() => {
        logout();
        changeMessage("See you later alligator!");
    }, [logout, changeMessage]);
    
    return <Navigate to="/" replace={true} />



    // const navigate = useNavigate();
    // const { jwtToken, logout, changeMessage } = useAuth();

    // useEffect(() => {
    //     authService.logout(jwtToken)
    //         .then(() => {
    //             logout();
    //             navigate('/');
    //         });
    // }, [jwtToken, logout, navigate])

    // changeMessage("See you later alligator!");

    // return null;
}
