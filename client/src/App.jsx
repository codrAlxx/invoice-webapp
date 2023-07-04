import React from 'react'
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useSelector } from "react-redux";
import EditProfileForm from "./features/users/pages/EditProfileForm";
import ProfilePage from "./features/users/pages/ProfilePage";



import { customTheme } from "./customTheme";
import useTitle from "./hooks/useTitle";

import Footer from './components/Footer'
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import AuthRequired from "./components/AuthRequired";
import IsLoggedIn from './components/IsLoggedIn';

import HomePage from './pages/HomePage'
import RegisterPage from './features/auth/pages/RegisterPage';
import VerifiedPage from "./features/auth/pages/VerifiedPage";
import LoginPage from "./features/auth/pages/LoginPage";
import ResendEmailTokenPage from "./features/auth/pages/ResendEmailToken";
import PasswordResetPage from "./features/auth/pages/PasswordReset";
import { ROLES } from "./config/roles";
import UsersList from "./features/users/pages/UsersListPage";
import DashboardPage from './features/dashboard/DashboardPage';
import CustomerCreateForm from "./features/customers/pages/CustomerCreateForm";
import CustomerEditForm from "./features/customers/pages/CustomerEditForm";
import CustomersPage from "./features/customers/pages/CustomersPage";
import SingleCustomerPage from "./features/customers/pages/SingleCustomerPage";
import DocCreateEditForm from "./features/documents/pages/DocCreateEditForm";
import DocumentsPage from "./features/documents/pages/DocumentsPage";
import SingleDocumentPage from "./features/documents/pages/SingleDocumentPage";
import {Outlet, Navigate} from 'react-router-dom'



const App = () => {
	useTitle("MERN Invoice - Home");
	const { user } = useSelector((state) => state.auth);
	// console.log(user)
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{user && <Navbar />}
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />

					{/* <Route path="register" element={<RegisterPage />} />
					<Route path="auth/verify" element={<VerifiedPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="resend" element={<ResendEmailTokenPage />} />
					<Route
						path="reset_password_request"
						element={<PasswordResetPage />}
					/> */}

				<Route element={<IsLoggedIn />}>
					<Route path="register" element={<RegisterPage />} />
					<Route path="auth/verify" element={<VerifiedPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="resend" element={<ResendEmailTokenPage />} />
					<Route
						path="reset_password_request"
						element={<PasswordResetPage />}
					/>
    			</Route>



					<Route
						element={<AuthRequired allowedRoles={[ROLES.User]} />}
					>
						<Route path="dashboard" element={<DashboardPage />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route
							path="edit-profile"
							element={<EditProfileForm />}
						/>
						<Route path="customers" element={<CustomersPage />} />
						<Route
							path="create-customer"
							element={<CustomerCreateForm />}
						/>
						<Route
							path="single-customer/:custId"
							element={<SingleCustomerPage />}
						/>
						<Route
							path="edit-customer/:custId"
							element={<CustomerEditForm />}
						/>
						<Route path="documents" element={<DocumentsPage />} />
						<Route
							path="create-doc"
							element={<DocCreateEditForm />}
						/>
						<Route
							path="create-doc"
							element={<DocCreateEditForm />}
						/>
						<Route
							path="edit-doc/:id"
							element={<DocCreateEditForm />}
						/>
						<Route
							path="document/:id"
							element={<SingleDocumentPage />}
						/>
					</Route>


					<Route
						element={<AuthRequired allowedRoles={[ROLES.Admin]} />}
					>
						<Route path="users" element={<UsersList />} />
					</Route>
					<Route path="users" element={<UsersList />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
      
			<Footer />
			<ToastContainer theme="dark" />
		</ThemeProvider>
	);
};

export default App