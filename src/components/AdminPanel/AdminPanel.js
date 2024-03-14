import { isAdmin } from "../../hoc/isAuth";

function AdminPanel() {
    return (
        <div>
            Still nothing here!
        </div>
    );
}

export default isAdmin(AdminPanel);