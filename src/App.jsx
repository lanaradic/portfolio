import './App.scss';
import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
	return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</MainLayout>
	);
}
export default App;
