import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function Header() {
    const { jwtToken } = useContext(AuthContext);

    let guestNavigation = (
        <div id="guest">
            <p />
            <NavLink 
                to="/login"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                Login
            </NavLink>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <p />
            <NavLink 
                to="/start-game"
                className={({ isActive }) => isActive ? 'navbar-active' : undefined}
            >
                All Pages
            </NavLink>
            <p> </p>
            <Link to="/logout">
                Logout
            </Link>
        </div>
    );

    return (
        <header className="app-header">
            <h1>REDIMEL - the world of humans</h1>
            <nav className="navbar">
                <section className="redimel-info-dashboard">
                    <NavLink 
                        to="/world-info" 
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                    >
                        Information
                    </NavLink>
                    <p> </p>
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                        end
                    >
                        Home
                    </NavLink>    
                    <p> </p>
                    <NavLink 
                        to="/redimel-infos"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                    >
                        RedimelInfos
                    </NavLink>
                    <p> </p>
                    <NavLink 
                        to="/start-new-game"
                        className={({ isActive }) => isActive ? 'navbar-active' : undefined}
                    >
                        Start New Game
                    </NavLink>

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