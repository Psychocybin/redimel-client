import { isAuth } from "../../hoc/isAuth";

function RemoveBattleGroup() {
    return (
        <div>
            Are you sure?
        </div>
    );
}

export default isAuth(RemoveBattleGroup);