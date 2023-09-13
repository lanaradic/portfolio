import './styles/mainLayout.scss';
import React from 'react';
import '../styles/colors.scss';
import github from '../assets/github-img.svg';
import mail from '../assets/mail.svg';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
	return (
		<>
			<div className="main-layout-wrapper">
				<div className="main-content-wrapper">
					<header className="header-wrapper">
						<div className="name-wrapper">Lana_Radic</div>
						<Link to="/">
							<div className="hello-wrapper">_hello</div>
						</Link>
						<Link to="/About">
							<div className="about-wrapper">_about_me</div>
						</Link>

						<div className="projects-wrapper">_projects</div>
						<div className="empty"></div>
						<div className="contact-wrapper">_contact_me</div>
					</header>

					<div className="mid-wrapper">{children}</div>

					<footer className="footer-wrapper">
						<div className="find-wrapper">_find_me_on:</div>
						<div className="social">
							<img src={github} height="24px" alt="github icon" />
							<p>lanaradic</p>
						</div>
						<div className="social2">
							<img src={mail} height="24px" alt="mail icon" />
							<p>lanaradic1990@gmail.com</p>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default MainLayout;
