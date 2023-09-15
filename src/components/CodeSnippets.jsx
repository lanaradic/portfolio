import React from 'react';
import './styles/codeSnippets.scss';
import github from '../assets/github-img.svg';
import code1 from '../assets/code1.png';
import code2 from '../assets/code2.png';
import code3 from '../assets/code3.png';

const CodeSnippets = () => {
	return (
		<div className="snippets-wrapper">
			<div className="snippets-title-wrapper">**/code_snippets_showcase/**</div>
			<div className="container1-wrapper">
				<div className="name-img-wrapper">
					<div className="image2-wrapper">
						<img src={github} height="30px" alt="github icon" />
					</div>
					<p>@lanaradic</p>
				</div>
				<div className="card-wrapper">
					<img src={code2} height="100px" width="331px" alt="code" />
				</div>
			</div>
			<div className="container2-wrapper">
				<div className="name-img-wrapper">
					<div className="image2-wrapper">
						<img src={github} height="30px" alt="github icon" />
					</div>
					<p>@lanaradic</p>
				</div>
				<div className="card-wrapper">
					<img src={code1} height="100px" alt="code" />
				</div>
			</div>
			<div className="container3-wrapper">
				<div className="name-img-wrapper">
					<div className="image2-wrapper">
						<img src={github} height="30px" alt="github icon" />
					</div>
					<p>@lanaradic</p>
				</div>
				<div className="card-wrapper">
					<img src={code3} height="100px" width="331px" alt="code" />
				</div>
			</div>
		</div>
	);
};

export default CodeSnippets;
