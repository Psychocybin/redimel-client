import { NavLink, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { AuthContext } from "../../contexts/AuthContext";

function Header() {
    const { jwtToken } = useContext(AuthContext);
    const [role, setRole] = useState('');

    useEffect(() => {
        if (jwtToken !== '') {
            const decodedToken = jwtDecode(jwtToken);
            const getValues = Object.values(decodedToken);

            setRole(getValues[1]);
        } else {
            setRole('');
        }
    }, [jwtToken]);

    let adminNavigation = (
        <>
            <button className="btn-link"><NavLink
                to="/admin-panel"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Admin panel
            </NavLink></button>
        </>
    );

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

                    {role === "Writer" && adminNavigation}
                </section>
            </nav>
        </header>
    );
}

export default Header;