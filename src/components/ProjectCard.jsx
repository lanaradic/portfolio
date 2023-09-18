import React from 'react';
import '../components/styles/projectCard.scss';

const ProjectCard = ({ title, image }) => {
	return (
		<div className="project-card-wrapper">
			<div className="project-main-content">{image}</div>
			<div className="project-bottom">{title}</div>
		</div>
	);
};

export default ProjectCard;
