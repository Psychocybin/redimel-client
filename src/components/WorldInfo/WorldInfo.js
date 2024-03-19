import { useEffect, useState } from "react";

import { getAll } from "../../services/redimelInfoService";
import { convertStringToArray } from "../../services/AuxiliaryService";

function WorldInfo() {
    const [currentInfo, setCurrentInfo] = useState([]);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        getAll()
            .then(info => {
                setCurrentInfo(info.find(x => x.additionalInfo === "rules"));
            });
    }, []);

    useEffect(() => {
        if (currentInfo.description !== undefined) {
            setDescription(convertStringToArray(currentInfo.description));
        }
    }, [currentInfo]);

    return (
        <section>
            <section>
                {currentInfo
                    ? <section className="redimel-info">
                            <h3>{currentInfo.title}</h3>
                            {description && description.map((x, index) => <p key={index}>{x}</p>)}
                        </section>
                    : <h3>Loading...</h3>
                }
            </section>
        </section>
    );
}

export default WorldInfo;