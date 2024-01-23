import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WorldInfo from './components/WorldInfo/WorldInfo';
import './App.css';
import RedimelHome from './components/RedimelHome/RedimelHome';
import StartGame from './components/Page/StartGame';
import StartNewGame from './components/StartNewGame/StartNewGame';
import CurrentRedimelInfo from './components/RedimelInfos/CurrentRedimelInfo';
import RedimelInfos from './components/RedimelInfos/RedimelInfos';
import Login from './components/Login/Login';

function App() {
	const [user, setUser] = useState({
		jwtToken: '',
	});

	const onLogin = (authData) => {
		setUser(authData);
		console.log(authData);
	}

	const onLogout = () => {

	}

	return (
		<AuthContext.Provider value={true}>
			<div id='container' className="app">
				<Header jwtToken={user.jwtToken} />

				<main id='site-content' className='main'>
					<Routes>
						<Route path="/" element={<RedimelHome />} />
						<Route path="/start-new-game" element={<StartNewGame />} />
						<Route path="/login" element={<Login onLogin={onLogin} />} />
						{/* <Route path="/logout" element={<Logout onLogout={onLogout} />} /> */}
						<Route path='/world-info' element={<WorldInfo />} />
						<Route path='/start-game' element={<StartGame />} />
						<Route path='/redimel-infos' element={<RedimelInfos />} />
						<Route path="/redimel-infos/:infoId" element={<CurrentRedimelInfo />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
