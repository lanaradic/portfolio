import React from 'react';
import '../components/styles/hello.scss';
import rules from '../assets/Dizajn bez naslova (2).png';

const Hello = () => {
	return (
		<div className="intro">
			<h6>Hi all, I am</h6>
			<h1>Lana Radic</h1>
			<h3> /Front-end developer/ </h3>
			<p> **// try_my_game //**</p>
			<div className="rules-wrapper">
				<img src={rules} height="200px" alt="rules icon" />
			</div>
		</div>
	);
};

export default Hello;
