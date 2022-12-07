import React from "react";
import { Link, Navigate } from "react-router-dom";

import {
	Container,
	BackgroundImage,
	LeftLogin,
	TextTitle,
	RightLogin,
	CardLogin,
	CardTitle,
	SubmitLogin,
	TextField,
	Field,
	LabelField,
	LoginButton,
	ProductHunt,
	ForgotPassword,
} from "./style";

import Image from "../../../../assets/images/register.svg";
import { useState } from "react";
import { toast } from "react-toastify";
function FormLogin() {
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");

	function handlerButton(evt) {
		evt.preventDefault();
		if (password == "1234") {
			setRoute("/dashboard");
			setRedirectToDash(true);
		} else {
			toast.error("Senha incorreta");
		}
	}
	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
	return (
		<Container>
			<LeftLogin>
				{/* <TextTitle>Gerencie seus burguers em ritmo de SambaBurguer</TextTitle> */}
				<ProductHunt src={Image} />
			</LeftLogin>
			<SubmitLogin>
				<RightLogin>
					<CardLogin>
						<CardTitle>Login</CardTitle>
						<TextField>
							{/* Usuário */}
							<LabelField for="usuario">Email</LabelField>
							<Field
								placeholder="Email"
								type="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							{/* Senha */}
							<LabelField for="senha">Senha</LabelField>
							<Field
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								placeholder="Senha"
								type="password"
							/>
						</TextField>
						<LoginButton
							type="submit"
							onClick={(evt) => {
								handlerButton(evt);
							}}
						>
							Entrar
						</LoginButton>
						<Link to={"/register"}>
							<ForgotPassword>Não tem conta?</ForgotPassword>
						</Link>
					</CardLogin>
				</RightLogin>
			</SubmitLogin>
		</Container>
	);
}

export default FormLogin;
