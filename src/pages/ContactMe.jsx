import React from 'react';
import '../components/styles/contactMe.scss';
import mail from '../assets/mail-icon.svg';
import phone from '../assets/phone-icon.svg';
import github from '../assets/github-img.svg';
import panda from '../assets/panda-2.png';

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
						<a href="https://mail.google.com/mail/u/1/#inbox">
							lanaradic1990@gmail.com
						</a>
						<p>099/333-28-50</p>
						<a href="https://github.com/lanaradic">@lanaradic</a>
					</div>
				</div>
			</div>
			<div className="contact-main-content">
				<img src={panda} height="300px" width="400px" alt="panda icon" />
			</div>
		</div>
	);
};

export default ContactMe;
