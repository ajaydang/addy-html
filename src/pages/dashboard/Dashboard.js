import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Summary from './summary/Summary';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='container'>
				<Header />

				<div className='dashboard__layout'>
					<Sidebar />

					<div className='dashboard__body'>
						<Summary />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
