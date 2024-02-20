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
                changeMessage("YOU ALREADY HAVE BATTLE GROUP");
            })

        navigate('/');
    }

    return (
        <section className="dropdown-menu">
            <form id="dropdown" method="POST" onSubmit={onSelectHandler}>
                <fieldset>
                    <legend>Choose your battle group!</legend>
                    <p className="field">
                        <DropdownMenu heroTypes={warriorTypes}/>
                        <DropdownMenu heroTypes={fighterTypes}/>
                        <DropdownMenu heroTypes={defenderTypes}/>
                        <DropdownMenu heroTypes={helperTypes}/>
                        <DropdownMenu heroTypes={mysticTypes}/>
                    </p>
                    <input className="button-submit" type="submit" value="Create Battle Group"/>
                </fieldset>
                <Link to="/remove-battle-group">Remove Battle Group</Link>
            </form>
        </section>
    );
}

const EnhancedComponent = isAuth(StartNewGame);

export default EnhancedComponent;