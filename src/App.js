import { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import WorldInfo from './components/WorldInfo';
import './App.css';
import RedimelHome from './components/RedimelHome';
import StartGame from './components/Page/StartGame';

function App() {
	const [page, setPage] = useState('/redimel-home');

	const routes = {
		'/world-info': <WorldInfo />,
		'/redimel-home': <RedimelHome />,
		'/start-game': <StartGame />
	};

	const navigationChangeHandler = (path) => {
		setPage(path);
	};

	return (
		<div className="App">
			<Header
				navigationChangeHandler = {navigationChangeHandler}
			/>
			<Main>{ routes[page] }</Main>
			<Footer />
		</div>
	);
}

export default App;
