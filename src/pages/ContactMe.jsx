import React, { useRef } from 'react';
import '../components/styles/contactMe.scss';
import mail from '../assets/mail-icon.svg';
import phone from '../assets/phone-icon.svg';
import github from '../assets/github-img.svg';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_9pwmcvf',
				'template_c93adbb',
				form.current,
				'0HFZ0-CYLortyMiWq'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		form.current.reset();
	};

	return (
		<div className="contatct-main">
			<div className="nav-wraper">
				<div className="contact-title-wrapper">***Contact me on***</div>
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
						<a href="https://github.com/lanaradic">099/3332850</a>
						<a href="https://github.com/lanaradic">@lanaradic</a>
					</div>
				</div>
			</div>
			<div className="contact-main-content">
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
};

export default ContactMe;
