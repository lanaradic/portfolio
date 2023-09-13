import React from 'react';
import '../components/styles/about.scss';
import AboutSideBar from '../components/AboutSideBar';

const About = () => {
	return (
		<>
			<aside className="about-me-wrapper">
				<AboutSideBar />
			</aside>
		</>
	);
};

export default About;
