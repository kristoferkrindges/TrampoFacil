import api from "../service/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const navigate = useNavigate();
	const [userContext, setUserContext] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
			api.get("/users/checkuser").then((response) => {
				setUserContext(response.data);
			});
		}
	}, []);

	useEffect(() => {
		api.get("/users/checkuser").then((response) => {
			setUserContext(response.data);
		});
	}, []);

	async function register(user) {
		try {
			const data = await api.post("/users/register", user).then((response) => {
				return response.data;
			});
			toast.success("Cadastrado com sucesso");
			await authUser(data);
			navigate(0);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	}

	async function login(user) {
		try {
			const data = await api.post("/users/login", user).then((response) => {
				return response.data;
			});
			await authUser(data);
			navigate(0);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	async function UpdateUser(user, id) {
		try {
			const data = await api
				.patch(`/users/edit/${id}`, user)
				.then((response) => {
					return response.data.message;
				});
			// navigate(0);
			setUserContext(user);
			toast.success(data);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	async function DeleteUser(id) {
		try {
			const data = await api.delete(`/users/delete/${id}`).then((response) => {
				return response.data.message;
			});
			toast.success(data);
			logout();
			navigate("/");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	async function authUser(data) {
		setAuthenticated(true);
		localStorage.setItem("token", JSON.stringify(data.token));
		navigate("/profile");
	}

	function logout() {
		console.log("deslogado");
		setAuthenticated(false);
		localStorage.removeItem("token");
		api.defaults.headers.Authorization = undefined;
		setUserContext(undefined);
		// navigate("/");
	}

	return {
		logout,
		authenticated,
		register,
		login,
		userContext,
		UpdateUser,
		DeleteUser,
	};
}
