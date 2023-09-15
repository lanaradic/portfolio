import React from 'react';
import './styles/detailsMe.scss';
import { useLocation } from 'react-router-dom';
import Bio from './Bio';
import Interests from './Interests';
import Education from './Education';

const DetailsMe = () => {
	const location = useLocation();

	return (
		<div className="details-wrapper">
			<div className="details-nav-wrapper">_personal_info</div>
			{location && location.state?.tab ? (
				<div className="main-some-wrapper">
					{location.state.tab === 'Bio' && (
						<div className="some-wrapper">
							<Bio />
						</div>
					)}
					{location.state.tab === 'Interests' && (
						<div className="some-wrapper">
							<Interests />
						</div>
					)}
					{location.state.tab === 'Education' && (
						<div className="some-wrapper">
							<Education />
						</div>
					)}
				</div>
			) : (
				<div className="some-wrapper">
					<Bio />
				</div>
			)}
		</div>
	);
};

export default DetailsMe;
