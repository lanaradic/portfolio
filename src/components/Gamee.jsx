import React from 'react';
import '../components/styles/gamee.scss';
import boltl from '../assets/bolt-up-left.png';
import boltr from '../assets/bolt-up-right.png';

const Gamee = () => {
	return (
		<div className="game">
			<div className="game-box">
				<img className="bolt-l" src={boltl} height="24px" alt="icon" />
				<img className="bolt-r" src={boltr} height="24px" alt="icon" />
			</div>
		</div>
	);
};

export default Gamee;
