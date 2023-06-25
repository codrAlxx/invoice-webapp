import React from 'react'
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";




import { customTheme } from "./customTheme";
import useTitle from "./hooks/useTitle";

import Footer from './components/Footer'
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";


import HomePage from './pages/HomePage'
import RegisterPage from './features/auth/pages/RegisterPage';
import VerifiedPage from "./features/auth/pages/VerifiedPage";
import LoginPage from "./features/auth/pages/LoginPage";

const App = () => {
	useTitle("MERN Invoice - Home");

	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{/* {user && <Navbar />} */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />

					<Route path="register" element={<RegisterPage />} />
					<Route path="auth/verify" element={<VerifiedPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<NotFound />} />

				</Route>
			</Routes>
      
			<Footer />
			<ToastContainer theme="dark" />
		</ThemeProvider>
	);
};

export default App