import React from 'react';
import '../components/styles/projectCard.scss';
import spock from '../assets/spock.png';

const ProjectCard = ({ title, image }) => {
	return (
		<div className="project-card-wrapper">
			<div className="project-main-content">
				{image}
				<img src={spock} height="170px" width="240px" alt="map button" />
			</div>
			<div className="project-bottom">{title}My first game</div>
		</div>
	);
};

export default ProjectCard;
