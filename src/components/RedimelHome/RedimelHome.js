import { useAuth } from "../../contexts/AuthContext";

import imgFile from '../../images/RedimelMap.jpg';

function RedimelHome() {
    const { additionalMessage, jwtToken } = useAuth();

    return (
        <div className="redimel-home">
            {additionalMessage ? <h3>{additionalMessage}</h3> : <h4>Welcome to the world of Redimel!</h4>}
            {/* {jwtToken && <p>Explore and enjoy!</p>} */}
            <img src={imgFile} alt='Stylized atom' />
        </div>
    );
}

export default RedimelHome;