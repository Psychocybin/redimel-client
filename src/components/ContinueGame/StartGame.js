import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { isAuth } from "../../hoc/isAuth";

import CurrentPage from "./CurrentPage";
// import * as pageService from "../../services/pageService";
import * as startGameService from "../../services/startGameService";
import CurrentGroupWest from "./CurrentGroupWest";
import CurrentHero from "./CurrentHero";
import ShowHeroStats from "./ShowHeroStats";
import ShowGroupWestStats from "./ShowGroupWestStats";

function StartGame() {
    const { jwtToken } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [battlePoints, setBattlePoints] = useState(null);
    const [page, setPage] = useState(null);
    const [showGroupWestStats, setShowGroupWestStats] = useState(null);
    const [showHeroStats, setShowHeroStats] = useState(null);
    const [currentBattlePoints, setCurrentBattlePoints] = useState(null);

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

    let response = (user && page && battlePoints) ? true : false

    const onShowHeroHandler = (heroId, event) => {
        event.preventDefault();

        setShowGroupWestStats(null);

        setShowHeroStats(user.groupWest.heroes.find(x => x.id === heroId));
        setCurrentBattlePoints(battlePoints.find(x => x.heroId === heroId));
    }

    const onShowGroupWestHandler = (e) => {
        e.preventDefault();

        let gw = {
            timeCounter: user.timeCounter,
            actualMission: user.groupWest.actualMission,
            missions: user.groupWest.missions,
            battleGroups: user.groupWest.aditionalPoints.battleGroups,
            negotiations: user.groupWest.aditionalPoints.negotiations,
            cover: user.groupWest.aditionalPoints.cover,
            importantInformation: user.groupWest.aditionalPoints.importantInformation,
            morals: user.groupWest.aditionalPoints.morals,
            slainMonsters: user.groupWest.aditionalPoints.slainMonsters,
            teamGame: user.groupWest.aditionalPoints.teamGame,
            temporaryPoints: user.groupWest.aditionalPoints.temporaryPoints
        }

        setShowHeroStats(null);
        setCurrentBattlePoints(null);

        setShowGroupWestStats(gw);
    }

    // console.log(user);

    return (
        <div>
            {response
                ? (
                    <div className="start-game-container">
                        <div className="d-flex">
                            <div className="leftpane">
                                <li>
                                    <ul key={user.groupWest.id + 1}><CurrentGroupWest key={user.groupWest.id} currentGroupName={"GroupWest"} onShowGroupWestHandler={onShowGroupWestHandler} /></ul>
                                    {user.groupWest.heroes.sort((x, y) => (x.orderOfBattle - y.orderOfBattle)).map(x =>
                                        <ul key={x.id + 1}><CurrentHero key={x.id} heroId={x.id} heroType={x.heroType} onShowHeroHandler={onShowHeroHandler} /></ul>
                                    )}
                                </li>
                            </div>
                            <div className="middlepane">
                                <CurrentPage page={page} />
                            </div>
                            <div className="rightpane">
                                {showGroupWestStats && <ShowGroupWestStats groupWest={showGroupWestStats} />}
                                {showHeroStats && <ShowHeroStats hero={showHeroStats} heroBattlePoints={currentBattlePoints} />}
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