import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

// Telas
import HomeScreen from "./Pages/home";
import LoginScreen from "./Pages/login";
import RegisterScreen from "./Pages/register";
import LayoutScreen from "./Pages/layout";
import ProfileScreen from "./Pages/profile";
import { PrivateRouter, PrivateLogin } from "./context/PrivateRouter";

// ContextUser
import { UserProvider } from "./context/UserContext";

export default function Routess() {
	return (
		<Router>
			<UserProvider>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/login" element={<PrivateLogin />}>
						<Route path="/login" element={<LoginScreen />}></Route>
					</Route>
					{/* <Route path="/login" element={<LoginScreen />} /> */}
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/layout" element={<LayoutScreen />} />
					<Route path="/profile" element={<PrivateRouter />}>
						<Route path="/profile" element={<ProfileScreen />}></Route>
					</Route>
					{/* <Route path="/profile" element={<ProfileScreen />} /> */}
				</Routes>
			</UserProvider>
		</Router>
	);
}
