import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { logout, changeMessage } = useContext(AuthContext);

    useEffect(() => {
        logout();
    }, [logout]);

    changeMessage("See you later alligator!");
    
    return <Navigate to="/" replace={true} />



    // const navigate = useNavigate();
    // const { jwtToken, logout } = useContext(AuthContext);

    // useEffect(() => {
    //     authService.logout(jwtToken)
    //         .then(() => {
    //             logout();
    //             navigate('/');
    //         });
    // }, [])

    //return null;
}
