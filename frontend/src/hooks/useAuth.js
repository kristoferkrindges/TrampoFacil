import api from "../service/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const navigate = useNavigate();
	const [userContext, setUserContext] = useState();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
			// setUserContext(infoUser());
		}
	}, []);

	async function register(user) {
		try {
			const data = await api.post("/users/register", user).then((response) => {
				return response.data;
			});
			toast.success("Cadastrado com sucesso");
			await authUser(data);
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
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	async function authUser(data) {
		setAuthenticated(true);
		localStorage.setItem("token", JSON.stringify(data.token));
		navigate("/layout");
	}

	async function infoUser() {
		try {
			const data = await api.get("/users/checkuser").then((response) => {
				return response.data;
			});
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

	function logout() {
		console.log("deslogado");
		setAuthenticated(false);
		localStorage.removeItem("token");
		api.defaults.headers.Authorization = undefined;
		// navigate("/");
	}

	return { logout, authenticated, register, login, infoUser, userContext };
}
