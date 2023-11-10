import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import WorldInfo from './components/WorldInfo';
import './App.css';
import RedimelHome from './components/RedimelHome';
import StartGame from './components/Page/StartGame';

function App() {
	const [page, setPage] = useState('/');

	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<RedimelHome />} />
					<Route path='/world-info' element={<WorldInfo />} />
					<Route path='/start-game' element={<StartGame />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
