import React from 'react';
import '../components/styles/projectCard.scss';

const ProjectCard = ({ title, image }) => {
	return (
		<div className="project-card-wrapper">
			<div className="project-main-content">
				<img src={image} height="170px" width="200px" />
			</div>
			<div className="project-bottom">
				<a href="https://github.com/lanaradic">{title}</a>
			</div>
		</div>
	);
};

export default ProjectCard;
