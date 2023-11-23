import { useEffect, useState } from "react";

import CurrentPage from "./CurrentPage";
import * as pageService from "../../services/pageService";

function StartGame() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        pageService.getAll()
            .then(pages => {
                setPages(pages);
            });
    }, []);

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