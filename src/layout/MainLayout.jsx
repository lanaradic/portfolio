import React, { useState } from 'react';
import './styles/mainLayout.scss';
import '../styles/colors.scss';
import github from '../assets/github-img.svg';
import mail from '../assets/mail.svg';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
	const [active, setActive] = useState('Home');
	const handleLinkClick = (link) => {
		setActive(link);
		console.log(active);
	};

	return (
		<>
			<div className="main-layout-wrapper">
				<div className="main-content-wrapper">
					<header className="header-wrapper">
						<div className="name-wrapper">_Lana_Radic</div>
						<Link onClick={() => handleLinkClick('_hello')} to="/">
							<div
								className={`hello-wrapper ${
									active === '_hello' ? 'active' : ''
								}`}
							>
								_hello
							</div>
						</Link>
						<Link onClick={() => handleLinkClick('_about_me')} to="/About">
							<div
								className={`about-wrapper ${
									active === '_about_me' ? 'active' : ''
								}`}
							>
								_about_me
							</div>
						</Link>
						<Link onClick={() => handleLinkClick('_projects')} to="/Projects">
							<div
								className={`projects-wrapper ${
									active === '_projects' ? 'active' : ''
								}`}
							>
								_projects
							</div>
						</Link>
						<div className="empty"></div>
						<Link
							onClick={() => handleLinkClick('_contact_me')}
							to="/ContactMe"
						>
							<div
								className={`contact-wrapper ${
									active === '_contact_me' ? 'active' : ''
								}`}
							>
								_contact_me
							</div>
						</Link>
					</header>

					<div className="mid-wrapper">{children}</div>

					<footer className="footer-wrapper">
						<div className="find-wrapper">_find_me_on:</div>
						<div className="social">
							<img src={github} height="24px" alt="github icon" />
							<p>@lanaradic</p>
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
