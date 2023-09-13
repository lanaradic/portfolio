import './App.scss';
import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';

function App() {
	return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</MainLayout>
	);
}
export default App;
