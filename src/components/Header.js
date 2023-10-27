function Header({
    navigationChangeHandler,
}) {
    const onHeaderClick = (e) => {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            let url = new URL(e.target.href);

            navigationChangeHandler(url.pathname);
        }
    };

    return (
        <header className="App-header" onClick={onHeaderClick}>
            <h1>REDIMEL - the world of humans</h1>
            <nav>
                <a href="/start-game">All Pages</a>
                <p> </p>
                <a href="/world-info">Information</a>
                <p> </p>
                <a href="/redimel-home">Home</a>
            </nav>
        </header>
    );
}

export default Header;