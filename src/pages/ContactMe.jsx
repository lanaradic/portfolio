import React from 'react';
import '../components/styles/contactMe.scss';
import mail from '../assets/mail-icon.svg';
import phone from '../assets/phone-icon.svg';
import github from '../assets/github-img.svg';

const ContactMe = () => {
	return (
		<div className="contatct-main">
			<div className="nav-wraper">
				<div className="projects-title-wrapper">***Contact me on***</div>
				<div className="nav-icon-title-wrapper">
					<div className="social-icon-wrapper">
						<img src={mail} height="20px" alt="mail icon" />
						<img src={phone} height="20px" alt="phone button" />
						<img src={github} height="28px" alt="github icon" />
					</div>
					<div className="social-contact-wrapper">
						<p>lanaradic1990@gmail.com</p>
						<p>099/333-28-50</p>
						<p>@lanaradic</p>
					</div>
				</div>
			</div>
			<div className="contact-main-content">kontent</div>
		</div>
	);
};

export default ContactMe;
