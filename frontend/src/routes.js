import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import HomeScreen from "./Pages/home";

export default function Routess() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</Router>
	);
}
