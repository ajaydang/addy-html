import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className=' header__layout'>
				<Link to={'/'}>
					<img
						src='#'
						alt='Addy Healthcare'
					/>
				</Link>

				<div className='header-profile'>
					<img
						src='#'
						alt='user-profile'
					/>
					User Name
				</div>
			</div>
		</div>
	);
};

export default Header;
