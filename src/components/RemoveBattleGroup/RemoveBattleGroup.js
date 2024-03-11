import { isAuth } from "../../hoc/isAuth";

function RemoveBattleGroup() {
    return (
        <div className="page-text">
            Pressing the Confirm button will DELETE the existing battlegroup of heroes as well as the progress made in the game. The adventure begins all over again!
        </div>
    );
}

export default isAuth(RemoveBattleGroup);