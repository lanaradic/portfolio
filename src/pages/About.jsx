import React from 'react';
import '../components/styles/about.scss';
import AboutSideBar from '../components/AboutSideBar';
import DetailsMe from '../components/DetailsMe';
import CodeSnippets from '../components/CodeSnippets';

const About = () => {
	return (
		<>
			<aside className="about-me-wrapper">
				<AboutSideBar />
				<DetailsMe />
				<CodeSnippets />
			</aside>
		</>
	);
};

export default About;
