import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
