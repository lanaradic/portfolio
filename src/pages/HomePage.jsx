import React from 'react';
import Hello from '../components/Hello.jsx';
import Gamee from '../components/Gamee.jsx';
import '../components/styles/home.scss';

const HomePage = () => {
	return (
		<div className="home-wrapper">
			<Hello />
			<Gamee />
		</div>
	);
};

export default HomePage;
