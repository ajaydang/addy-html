import React from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import './scss/main.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
