import { useEffect, useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import CurrentPage from "./CurrentPage";
import * as pageService from "../../services/pageService";

function StartGame() {
    const { jwtToken } = useContext(AuthContext);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        pageService.getAll(jwtToken)
            .then(pages => {
                setPages(pages);
            });
    }, [jwtToken]);

    return (
        <div>
            { pages.length > 0
                ? pages.map(x => <CurrentPage key={x.id} page={x} />) 
                : <h3>No Pages!</h3>
            }
        </div>
    );
}

export default StartGame;