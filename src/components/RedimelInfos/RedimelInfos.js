import { useEffect, useState } from "react";

import { getAll } from "../../services/redimelInfoService";

import RedimelInfo from "./RedimelInfo";

const RedimelInfos = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getAll()
            .then(info => {
                setInfo(info);
            });
    }, []);

    return (
        <section className="redimel-infos-h1">
            <h1>Additional information about Redimel</h1>

            <section>
                {info.length > 0
                    ? info.filter(x => x.additionalInfo === "redimel").map(x => <RedimelInfo key={x.id} currentInfo={x} />)
                    : <h3>Loading...</h3>
                }
            </section>
        </section>
    );
}

export default RedimelInfos;