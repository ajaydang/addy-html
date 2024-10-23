/* eslint-disable react/react-in-jsx-scope */
import './scss/main.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.tsx';

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
