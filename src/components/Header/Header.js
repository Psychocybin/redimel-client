import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function Header() {
    const { jwtToken } = useContext(AuthContext);

    let guestNavigation = (
        <>
            <button className="btn-link"><NavLink
                to="/login"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Login
            </NavLink></button>
            <button className="btn-link"><NavLink
                to="/register"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Register
            </NavLink></button>
        </>
    );

    let userNavigation = (
        <>
            <button className="btn-link"><NavLink
                to="/start-new-game"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Start new game
            </NavLink></button>
            <button className="btn-link"><NavLink
                to="/start-game"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Continue game
            </NavLink></button>
            <button className="btn-link"><Link to="/logout">
                Logout
            </Link></button>
        </>
    );

    return (
        <header className="app-header">
            <h1>Redimel - the world of humans</h1>
            <nav className="navbar">
                <section className="redimel-info-dashboard">
                <button className="btn-link"><NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                        end
                    >
                        Home
                    </NavLink></button>
                    <button className="btn-link"><NavLink
                        to="/world-info"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                    >
                        Rules
                    </NavLink></button>
                    <button className="btn-link"><NavLink
                        to="/redimel-infos"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                    >
                        Information
                    </NavLink></button>

                    {jwtToken
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;