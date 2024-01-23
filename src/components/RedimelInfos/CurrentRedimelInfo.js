import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOne } from "../../services/redimelInfoService";

const CurrentRedimelInfo = () => {
    const [info, setInfo] = useState({});
    const { infoId } = useParams();

    useEffect(() => {
        getOne(infoId)
            .then(infoResult => {
                setInfo(infoResult);
            });
    }, []);

    return (
        <section className="redimel-info">
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </section>
    );
}

export default CurrentRedimelInfo;