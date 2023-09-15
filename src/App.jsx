import './App.scss';
import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
	return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/ContactMe" element={<ContactMe />} />
			</Routes>
		</MainLayout>
	);
}
export default App;
