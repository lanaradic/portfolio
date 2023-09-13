import React from 'react';
import '../components/styles/aboutSideBar.scss';
import arrow from '../assets/arrow.svg';

const AboutSideBar = () => {
	return (
		<div className="about-sidebar-wrapper">
			<div className="personal-wrapper">
				<img src={arrow} height="14px" alt="arrow button" />
				personal-info
			</div>
			<div className="personal-list">
				<div className="list-item">Bio</div>
				<div className="list-item">Interests</div>
				<div className="list-item">Education</div>
			</div>
			<div className="contact-me-wrapper">
				<img src={arrow} height="14px" alt="arrow button" />
				contact
			</div>
		</div>
	);
};

export default AboutSideBar;
