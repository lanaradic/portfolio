import React from 'react';
import '../components/styles/aboutSideBar.scss';
import arrow from '../assets/arrow.svg';
import mail from '../assets/mail-icon.svg';
import phone from '../assets/phone-icon.svg';
import map1 from '../assets/map1.svg';
import map2 from '../assets/map2.svg';
import map3 from '../assets/map3.svg';

const AboutSideBar = () => {
	return (
		<div className="about-sidebar-wrapper">
			<div className="personal-wrapper">
				<img src={arrow} height="14px" alt="arrow button" />
				personal_info
			</div>
			<div className="personal-list">
				<div className="list-item">
					<img src={map1} height="14px" alt="map button" />
					Bio
				</div>
				<div className="list-item">
					<img src={map2} height="14px" alt="map button" />
					Interests
				</div>
				<div className="list-item">
					<img src={map3} height="14px" alt="map button" />
					Education
				</div>
			</div>
			<div className="contact-me-wrapper">
				<img src={arrow} height="14px" alt="arrow button" />
				contact
			</div>
			<div className="contact-list">
				<div className="list-item">
					<img src={mail} height="14px" alt="mail button" />
					lanaradic1990
				</div>
				<div className="list-item">
					<img src={phone} height="14px" alt="phone button" />
					099_333_28_50
				</div>
			</div>
		</div>
	);
};

export default AboutSideBar;
