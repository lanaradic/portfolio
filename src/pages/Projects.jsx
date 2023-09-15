import React from 'react';
import '../components/styles/projectsLayout.scss';
import iconR from '../assets/react-logo.svg';
import iconH from '../assets/html-icon.svg';
import iconC from '../assets/css-icon.svg';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
	return (
		<div className="projects2-wrapper">
			<div className="nav-bar-wrapper">
				<div className="projects-title-wrapper">Skills</div>
				<div className="nav-icons-wrapper">
					<img src={iconR} height="30px" alt="react icon" />
					<img src={iconH} height="30px" alt="html icon" />
					<img src={iconC} height="30px" alt="css icon" />
				</div>
				<p>HTML</p>
				<p>SCSS</p>
				<p>JavaScript</p>
				<p>React Js</p>
				<p>Figma</p>
				<p>Git version controll</p>
			</div>
			<div className="main-project-wrapper">
				<div className="projects-title-wrapper">Projects</div>
				<div className="project-cards-wrapper">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default Projects;
