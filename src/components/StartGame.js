import { useEffect } from "react";

function StartGame() {
    useEffect(() => {
        fetch('https://localhost:7260/api/Pages')
            .then(res => res.json())
            .then(pages => {
                console.log(pages);
            });
    }, []);

    return (
        <h5>Let's get the party started</h5>
    );
}

export default StartGame;