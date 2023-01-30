import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import NotFoundPage from './pages/exceptions/404';
import ReaderPage from './pages/home';

function App() {
	const routes = (
		<Routes>
			<Route path="/" element={<Navigate to="/home/reader" replace={true} />} />
			<Route path="/home" element={<BasicLayout />}>
				<Route path="/home/reader" element={<ReaderPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
	return (
		<BrowserRouter>{ routes }</BrowserRouter>
	);
}

export default App;
