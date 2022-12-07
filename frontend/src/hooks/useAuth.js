import api from "../service/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
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

	async function authUser(data) {
		setAuthenticated(true);
		localStorage.setItem("token", JSON.stringify(data.token));
		navigate("/");
	}

	return { authenticated, register };
}
