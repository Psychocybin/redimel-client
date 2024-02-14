import { useEffect, useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import CurrentPage from "./CurrentPage";
import * as pageService from "../../services/pageService";
import * as startGameService from "../../services/startGameService";

function StartGame() {
    const { jwtToken } = useContext(AuthContext);
    const [ user, setUser ] = useState(null);
    const [ battlePoints, setBattlePoints ] = useState(null);
    const [ page, setPage ] = useState(null);

    useEffect(() => {
        startGameService.getUserAndPage(jwtToken)
            .then(userRes => {
                setUser(userRes.user);
                setBattlePoints(userRes.battlePoints);
                setPage(userRes.page);
            })
            .catch(err => {
                console.log(err);
            });
    }, [jwtToken]);

    console.log(user);
    console.log(page);
    console.log(battlePoints);

    let response;

    if (!user || !page || !battlePoints) {
        response = 'NOBODY HOME';
    } else {
        response = 'OKOKOKOKOK';
    }

    return (
        <div>
            {response}
        </div>
    );



    // const { jwtToken } = useContext(AuthContext);
    // const [pages, setPages] = useState([]);

    // useEffect(() => {
    //     pageService.getAll(jwtToken)
    //         .then(pages => {
    //             setPages(pages);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, [jwtToken]);

    // return (
    //     <div>
    //         { pages.length > 0
    //             ? pages.map(x => <CurrentPage key={x.id} page={x} />) 
    //             : <h3>No Pages!</h3>
    //         }
    //     </div>
    // );
}

export default StartGame;