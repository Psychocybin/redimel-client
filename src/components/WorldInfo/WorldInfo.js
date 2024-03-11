import { useEffect, useState } from "react";

import { getAll } from "../../services/redimelInfoService";

function WorldInfo() {
    const [info, setInfo] = useState([]);
    const [currentInfo, setCurrentInfo] = useState([]);

    useEffect(() => {
        getAll()
            .then(info => {
                setInfo(info);
            });
    }, []);

    useEffect(() => {
        const findCurrentinfo = info.find(x => x.additionalInfo === "");

        setCurrentInfo(findCurrentinfo);
    }, [info]);

    return (
        <section>
            <section>
                {currentInfo
                    ? <section className="redimel-info">
                            <h3>{currentInfo.title}</h3>
                            <p>{currentInfo.description}</p>
                        </section>
                    : <h3>Loading...</h3>
                }
            </section>
        </section>
    );
}

export default WorldInfo;