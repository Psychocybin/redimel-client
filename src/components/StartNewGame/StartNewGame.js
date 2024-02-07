import { isAuth } from "../../hoc/isAuth";
function StartNewGame() {


    return (
        <div>
            <h2>START</h2>
        </div>
    );
}

const EnhancedComponent = isAuth(StartNewGame);

export default EnhancedComponent;