import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import WorldInfo from './components/WorldInfo';
import './App.css';
import RedimelHome from './components/RedimelHome';
import StartGame from './components/Page/StartGame';
import CurrentRedimelInfo from './components/RedimelInfos/CurrentRedimelInfo'; 
import RedimelInfos from './components/RedimelInfos/RedimelInfos';

function App() {

	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<RedimelHome />} />
					<Route path='/world-info' element={<WorldInfo />} />
					<Route path='/start-game' element={<StartGame />} />
					<Route path='/redimel-infos' element={<RedimelInfos />} />
                    <Route path="/redimel-info/:infoId" element={<CurrentRedimelInfo />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
