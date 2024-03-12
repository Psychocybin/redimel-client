import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

import { isAuth } from "../../hoc/isAuth";
import { useAuth } from "../../contexts/AuthContext";
import { AuthContext } from "../../contexts/AuthContext";
import { createBattleGroup } from "../../services/createBattleGroup";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

const warriorTypes = ["warrior", "Gladiator", "Mercenary", "Soldier"];
const fighterTypes = ["fighter", "Hunter", "Pirate", "Savage"];
const defenderTypes = ["defender", "Knight", "MonsterSlayer", "Robber"];
const helperTypes = ["helper", "Acrobat", "Merchant", "Thief"];
const mysticTypes = ["mystic", "Librarian", "Magician", "Missionary"];

function StartNewGame() {
    const { jwtToken } = useContext(AuthContext);
    const { changeMessage } = useAuth();
    const navigate = useNavigate();

    const onSelectHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let warrior = formData.get('warrior');
        let fighter = formData.get('fighter');
        let defender = formData.get('defender');
        let helper = formData.get('helper');
        let mystic = formData.get('mystic');

        await createBattleGroup(jwtToken, warrior, fighter, defender, helper, mystic)
            .then((message) => {
                changeMessage(message);
            })
            .catch(err => {
                changeMessage("YOU ALREADY HAVE A BATTLE GROUP!");
            })

        navigate('/');
    }

    return (
        <div className="page-text">
            <section className="dropdown-menu">
                <form id="dropdown" method="POST" onSubmit={onSelectHandler}>
                    <fieldset>
                        <legend>Choose your battle group</legend>
                        <p className="field">
                            <DropdownMenu heroTypes={warriorTypes} />
                            <DropdownMenu heroTypes={fighterTypes} />
                            <DropdownMenu heroTypes={defenderTypes} />
                            <DropdownMenu heroTypes={helperTypes} />
                            <DropdownMenu heroTypes={mysticTypes} />
                        </p>
                        <input className="button-submit" type="submit" value="Create Battle Group" />
                    </fieldset>
                    <p className="dropdown-menu-p"><Link to="/remove-battle-group">Remove Battle Group</Link></p>
                </form>
            </section>
            <p>
                Before you start the game you need to choose which characters you want to participate in your battle group. This group contains five types of heroes - warrior, fighter, defender, helper and mystic. For each type you can choose from three heroes. Fill in your group and click Create Battle Group. Your adventure begins by pressing the button Continue game. If you want to start over, you must first delete your current battle group. For this selection, press Remove Battle Group.
            </p>
        </div>
    );
}

const EnhancedComponent = isAuth(StartNewGame);

export default EnhancedComponent;