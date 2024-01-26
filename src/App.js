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
import Logout from './components/Logout/Logout';

function App() {
	const [user, setUser] = useState({
		jwtToken: '',
	});

	function login(authData) {
		setUser(authData);
	}

	function logout() {
		setUser('');
	}

	return (
		<AuthContext.Provider value={{...user, login, logout}}>
			<div id='container' className="app">
				<Header jwtToken={user.jwtToken} />

				<main id='site-content' className='main'>
					<Routes>
						<Route path="/" element={<RedimelHome />} />
						<Route path="/start-new-game" element={<StartNewGame />} />
						<Route path="/login" element={<Login />} />d
						<Route path="/logout" element={<Logout />} />
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
