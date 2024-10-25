import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__logo'>
				<img
					src='#'
					alt='Addy Healthcare'
				/>
			</div>
			<div className='sidebar-menu'>
				<div className='sidebar-menu__header'>
					<Link
						to={'/dashboard'}
						className='sidebar-menu__link'
					>
						<span></span> Dashboard
					</Link>

					<Link
						to={'/dashboard'}
						className='sidebar-menu__link'
					>
						<span></span> Faxes
					</Link>

					<Link
						to={'/dashboard'}
						className='sidebar-menu__link'
					>
						<span></span> Reports
					</Link>
				</div>
				<div className='sidebar-menu__footer'>
					<Link
						to={'/dashboard'}
						className='sidebar-menu__link'
					>
						<span></span> Help & Support
					</Link>

					<Link
						to={'/dashboard'}
						className='sidebar-menu__link'
					>
						<span></span> Settings
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
