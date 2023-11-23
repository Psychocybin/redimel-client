import { Link } from "react-router-dom";

const RedimelInfo = ({
    currentInfo
}) => {
    return (
        <ul>
            <Link to={`/redimel-info/${currentInfo.id}`}><button>{<h3>{currentInfo.title}</h3>}</button></Link>
        </ul>
    );
}

export default RedimelInfo;