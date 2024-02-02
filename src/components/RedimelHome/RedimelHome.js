import { useAuth } from "../../contexts/AuthContext";

function RedimelHome() {
    const { additionalMessage, jwtToken } = useAuth();

    return (
        <div className="Redimel-home">
            {additionalMessage ? <h3>{additionalMessage}</h3> : <h4>Welcome to Redimel!!!</h4>}
            {jwtToken && <p>Explore and enjoy the world!</p>}
        </div>
    );
}

export default RedimelHome;