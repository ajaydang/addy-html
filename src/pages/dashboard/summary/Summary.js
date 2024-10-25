import React from 'react';

const Summary = () => {
	return (
		<div className='summary'>
			<div className='summary__heading'>
				<h1>Summary</h1>
				<div className='summary__heading-date'>Jan 24,2024 - May 09, 2024</div>
			</div>

			<div className='summary__content'>
				<div className='status-summary'>
					<span className='status-summary__success'></span>
					<div className='status-summary__content'>
						<p>Total Faxes</p>
						<div className='status-summary__number'>32</div>
						<div className='status-summary__month'>
							Since last month <span>20%</span>
						</div>
					</div>
				</div>

				<div className='status-summary'>
					<span className='status-summary__success'></span>
					<div className='status-summary__content'>
						<p>Total Faxes</p>
						<div className='status-summary__number'>32</div>
						<div className='status-summary__month'>
							Since last month <span>20%</span>
						</div>
					</div>
				</div>

				<div className='status-summary'>
					<span className='status-summary__success'></span>
					<div className='status-summary__content'>
						<p>Total Faxes</p>
						<div className='status-summary__number'>32</div>
						<div className='status-summary__month'>
							Since last month <span>20%</span>
						</div>
					</div>
				</div>

				<div className='status-summary'>
					<span className='status-summary__success'></span>
					<div className='status-summary__content'>
						<p>Total Faxes</p>
						<div className='status-summary__number'>32</div>
						<div className='status-summary__month'>
							Since last month <span>20%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summary;
