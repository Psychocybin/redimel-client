import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Logout() {
    const { logout, changeMessage } = useAuth();

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
