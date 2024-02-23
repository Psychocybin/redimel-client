import { useEffect, useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { isAuth } from "../../hoc/isAuth";

import CurrentPage from "./CurrentPage";
import * as pageService from "../../services/pageService";
import * as startGameService from "../../services/startGameService";
import CurrentHero from "./CurrentHero";
import ShowHeroStats from "./ShowHeroStats";

function StartGame() {
    const { jwtToken } = useContext(AuthContext);
    const [ user, setUser ] = useState(null);
    const [ battlePoints, setBattlePoints ] = useState(null);
    const [ page, setPage ] = useState(null);
    // const [ warrior, setWarrior ] = useState(null);
    const [ heroes, setHeroes ] = useState(null);
    const [ showStats, setShowStats ] = useState([]);
    const [ currentBattlePoints, setCurrentBattlePoints ] = useState([]);


    

    useEffect(() => {
        startGameService.getUserAndPage(jwtToken)
            .then(userRes => {
                setUser(userRes.user);
                setHeroes(userRes.user.groupWest.heroes);
                // setWarrior(userRes.user.groupWest.heroes.filter(x => x.heroType === 1));
                setBattlePoints(userRes.battlePoints);
                setPage(userRes.page);
            })
            .catch(err => {
                console.log(err);
            });
    }, [jwtToken]);

    // useEffect(() => {
    //     setHeroes(user.groupWest.heroes);
    // }, [user]);

    // useEffect(() => {
    //     setWarrior(heroes.filter(x => x.name === ("Vranko")));
    // }, [heroes]);

    // console.log(user);
    // console.log(warrior);
    // console.log(battlePoints);

    let response = (user && page && battlePoints) ? true : false

    const onShowHeroHandler = (heroId, event) => {
        event.preventDefault();

        setShowStats(heroes.find(x => x.id === heroId));
        setCurrentBattlePoints(battlePoints.find(x => x.heroId === heroId));

    }

    // console.log(currentBattlePoints);

    return (
        <div>
            {response
                ? (
                    <div className="start-game-container">
                        <div className="d-flex">
                            <div className="leftpane">
                                {heroes.map(x => <CurrentHero key={x.id} heroId={x.id} heroStats={x} onShowHeroHandler={onShowHeroHandler}/>)}
                                {/* <HeroesNavbar user={user} battlePoints={battlePoints} /> */}
                            </div>
                            <div className="middlepane">
                                <CurrentPage page={page} />
                            </div>
                            <div className="rightpane">
                                {<ShowHeroStats hero={showStats} heroBattlePoints={currentBattlePoints}/>}
                            </div>
                        </div>
                    </div>
                )
                : "Loading data..."
            }
        </div >
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

export default isAuth(StartGame);