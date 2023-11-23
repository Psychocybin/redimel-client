import { Link } from "react-router-dom";

function Header({
}) {
    return (
        <header className="App-header">
            <h1>REDIMEL - the world of humans</h1>
            <nav>
                <Link to="/start-game">All Pages</Link>
                <p> </p>
                <Link to="/world-info">Information</Link>
                <p> </p>
                <Link to="/">Home</Link>
                <p> </p>
                <Link to="/redimel-infos">RedimelInfos</Link>
            </nav>
        </header>
    );
}

export default Header;