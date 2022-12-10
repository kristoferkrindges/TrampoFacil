import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "./UserContext";

export const PrivateRouter = () => {
	const { userContext } = useContext(Context);
	console.log(userContext);
	return userContext ? <Outlet /> : <Navigate to="/login" />;
};

export const PrivateLogin = () => {
	const { userContext } = useContext(Context);
	return userContext ? <Navigate to="/profile" /> : <Outlet />;
};

export const PrivatePost = () => {
	const { userContext } = useContext(Context);
	if (userContext) {
		console.log(userContext.type);
		return userContext.type == true ? <Outlet /> : <Navigate to="/layout" />;
	}
	return userContext ? <Outlet /> : <Navigate to="/login" />;
};
