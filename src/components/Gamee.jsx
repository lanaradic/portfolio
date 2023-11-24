import React, { useEffect, useState } from 'react';
import '../components/styles/gamee.scss';

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
	const resetGame = () => {
		setPlayerScore(null);
		setComputerScore(null);
		setFinalOutput(null);
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
				<div
					style={{
						backgroundImage:
							"url('src/assets/depositphotos_32108825-stock-photo-blue-sunrise-view-of-earth.jpg')",
					}}
					className="game-box"
				>
					<div className="title-w">
						<span>***MY GAME***</span>
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
					<button onClick={resetGame}>Reset</button>
				</div>
			</div>
		</>
	);
};

export default Gamee;
