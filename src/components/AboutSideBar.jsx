import React, { useState } from 'react';
import '../components/styles/aboutSideBar.scss';
import arrow from '../assets/arrow.svg';
import map1 from '../assets/map1.svg';
import map2 from '../assets/map2.svg';
import map3 from '../assets/map3.svg';
import { Link } from 'react-router-dom';

const AboutSideBar = () => {
	const [active, setActive] = useState('Bio');
	const handleLinkClick = (link) => {
		setActive(link);
		console.log(active);
	};
	return (
		<div className="about-sidebar-wrapper">
			<div className="personal-wrapper">
				<img src={arrow} height="14px" alt="arrow button" />
				personal_info
			</div>
			<div className="personal-list">
				<Link
					onClick={() => handleLinkClick('Bio')}
					to="/About"
					state={{ tab: 'Bio' }}
				>
					<div className={`list-item ${active === 'Bio' ? 'active' : ''}`}>
						<img src={map1} height="14px" alt="map button" />
						Bio
					</div>
				</Link>
				<Link
					onClick={() => handleLinkClick('Interests')}
					to="/About"
					state={{ tab: 'Interests' }}
				>
					<div
						className={`list-item ${active === 'Interests' ? 'active' : ''}`}
					>
						<img src={map2} height="14px" alt="map button" />
						Interests
					</div>
				</Link>
				<Link
					onClick={() => handleLinkClick('Education')}
					to="/About"
					state={{ tab: 'Education' }}
				>
					<div
						className={`list-item ${active === 'Education' ? 'active' : ''}`}
					>
						<img src={map3} height="14px" alt="map button" />
						Education
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AboutSideBar;
