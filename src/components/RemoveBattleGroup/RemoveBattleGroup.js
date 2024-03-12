import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { isAuth } from "../../hoc/isAuth";
import { useAuth } from "../../contexts/AuthContext";

import { removeBattleGroup } from "../../services/removeBattleGroup";

function RemoveBattleGroup() {
    const { jwtToken } = useContext(AuthContext);
    const { changeMessage } = useAuth();
    const navigate = useNavigate();

    const onRemoveBattleGroup = async (e) => {
        e.preventDefault();

        await removeBattleGroup(jwtToken)
            .then((message) => {
                changeMessage(message);
            })
            .catch((err) => {
                changeMessage(err);
            })

        navigate('/', { replace: true });
    }

    return (
        <>
            <div className="page-text">
                Pressing the Confirm button will DELETE the existing battlegroup of heroes as well as the progress made in the game. The adventure begins all over again!
            </div>
            <button className="remove-battle-group-btn" onClick={onRemoveBattleGroup}>Confirm REMOVE</button>
        </>
    );
}

export default isAuth(RemoveBattleGroup);