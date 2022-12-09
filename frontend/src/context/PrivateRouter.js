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
