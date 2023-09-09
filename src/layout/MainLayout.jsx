import './styles/mainLayout.scss';
import React from 'react';
import '../styles/colors.scss';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
	return (
		<>
			<div className="main-layout-wrapper">
				<main className="main-content-wrapper">
					<header className="header-wrapper">links</header>
					{children}
					<footer className="footer-wrapper">dno</footer>
				</main>
			</div>
		</>
	);
};

MainLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
};

export default MainLayout;
