import { useState } from "react";
import React from "react";

import StartGame from "./StartGame";

function Main(props) {
    let [count, setCount] = useState(0);

    const addButtonClickHandler = () => setCount(count + 1);

    return (
        <main className="Main">
            <button><StartGame />start game</button>
            <p>{props.children}</p>
            <p>{count}</p>
            <button onClick={addButtonClickHandler}>+</button>
        </main>
    );
}

export default Main;