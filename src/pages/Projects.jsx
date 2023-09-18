import React from 'react';
import '../components/styles/projectsLayout.scss';
import iconR from '../assets/react-logo.svg';
import iconH from '../assets/html-icon.svg';
import iconC from '../assets/css-icon.svg';
import ProjectCard from '../components/ProjectCard';
import { data } from '../projects/projects';

const Projects = () => {
	return (
		<div className="projects2-wrapper">
			<div className="nav-bar-wrapper">
				<div className="projects-title-wrapper">***Skills***</div>
				<div className="nav-icons-wrapper">
					<img src={iconR} height="24px" alt="react icon" />
					<img src={iconH} height="24px" alt="html icon" />
					<img src={iconC} height="24px" alt="css icon" />
				</div>
				<p>HTML</p>
				<p>SCSS</p>
				<p>JavaScript</p>
				<p>React Js</p>
				<p>Figma</p>
				<p>Git version controll</p>
			</div>
			<div className="main-project-wrapper">
				<div className="projects-title-wrapper">***Projects***</div>
				<div className="project-cards-wrapper">
					{data.length &&
						data
							.map((item, index) => {
								return (
									<ProjectCard
										key={index}
										title={item.title}
										image={item.image}
									/>
								);
							})
							.slice(0, 6)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
