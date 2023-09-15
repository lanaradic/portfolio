import React, { useEffect, useState } from 'react';
import '../components/styles/gamee.scss';
import boltl from '../assets/bolt-up-left.png';
import boltr from '../assets/bolt-up-right.png';

const Gamee = () => {
	const [computerSelection, setComputerSelection] = useState(null);
	const [userSelection, setUserSelection] = useState(null);
	const [finalOutput, setFinalOutput] = useState(null);
	const selection = ['🧱', '📰', '✂️', '🦎', '🖖'];
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	// eslint-disable-next-line no-unused-vars
	const score = (setFinalOutput) => {
		if (setFinalOutput === 'YOU WON!!! 🎉') {
			setPlayerScore(playerScore + 1);
		} else if (setFinalOutput === 'YOU LOSE!!! ') {
			setComputerScore(computerScore + 1);
		}
	};

	const clickHandler = (value) => {
		setUserSelection(value);
		randomChoiceGenerator();
	};

	const randomChoiceGenerator = () => {
		const randomSelection =
			selection[Math.floor(Math.random() * selection.length)];
		setComputerSelection(randomSelection);
	};

	useEffect(() => {
		{
			switch (userSelection + computerSelection) {
				case '✂️📰':
				case '🧱✂️':
				case '📰🧱':
				case '🦎📰':
				case '🖖✂️':
				case '🧱🦎':
				case '📰🖖':
				case '🖖🧱':
				case '✂️🦎':
				case '🦎🖖':
					setFinalOutput('YOU WON!!! 🎉');
					setPlayerScore(playerScore + 1);
					break;
				case '📰✂️':
				case '✂️🧱':
				case '🧱📰':
				case '📰🦎':
				case '✂️🖖':
				case '🦎🧱':
				case '🖖📰':
				case '🧱🖖':
				case '🦎✂️':
				case '🖖🦎':
					setFinalOutput('YOU LOSE!!! 👎 ');
					setComputerScore(computerScore + 1);
					break;
				case '🧱🧱':
				case '📰📰':
				case '✂️✂️':
				case '🦎🦎':
				case '🖖🖖':
					setFinalOutput("IT'S A DRAW!!! 💥 ");
					break;
			}
		}
	}, [computerSelection, userSelection]);

	return (
		<>
			<div className="game">
				<div className="game-box">
					<div className="bolt-wrapper">
						<img className="bolt-l" src={boltl} height="24px" alt="icon" />
						<img className="bolt-r" src={boltr} height="24px" alt="icon" />
					</div>
					<div className="title-w">
						<span>*Rock Paper Scissors Lizard Spock*</span>
					</div>
					<div className="score-wrapper">
						<div className="show-score">SCORE: </div>
						<div className="show-score">
							{playerScore}:{computerScore}
						</div>
					</div>

					<div className="container">
						<div className="section">
							<div className="info">
								<h4>You:</h4>
							</div>
							<div className="show">{userSelection}</div>
						</div>

						<div className="section">
							<div className="info">
								<h4>Computer:</h4>
							</div>
							<div className="show computer">{computerSelection}</div>
						</div>
					</div>

					<h2>{finalOutput} </h2>

					<div className="attack-btn">
						{selection.map((select, index) => (
							<button key={index} onClick={() => clickHandler(select)}>
								{select}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Gamee;
