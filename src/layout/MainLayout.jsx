import React, { useState } from 'react';
import './styles/mainLayout.scss';
import '../styles/colors.scss';
import github from '../assets/github-img.svg';
import mail from '../assets/mail.svg';
import panda2 from '../assets/panda-2.png';
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
						<div className="name-wrapper">
							<img src={panda2} height="30px" alt="logo" /> *Lana*
						</div>
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
						<div className="Empty"></div>

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
							<a href="https://github.com/lanaradic">@lanaradic</a>
						</div>
						<div className="social2">
							<img src={mail} height="24px" alt="mail icon" />
							<a href="https://mail.google.com/mail/u/1/#inbox">
								lanaradic1990@gmail.com
							</a>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default MainLayout;
