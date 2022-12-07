import React, { useState, useContext } from "react";
import {
	Container,
	LeftRegister,
	TextTitle,
	RightRegister,
	SubmitRegister,
	CardRegister,
	CardTitle,
	SingupImage,
	TextField,
	Field,
	LabelField,
	RegisterButton,
	Select,
	Option,
} from "./style";
import Image from "../../../../assets/images/Queue-rafiki.svg";
import { Context } from "../../../../context/UserContext";
export default function Register() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [phone, setPhone] = useState();
	const [type, setType] = useState();

	const { register } = useContext(Context);

	function handleSubmitUser(evt) {
		evt.preventDefault();
		const user = {
			name: name,
			email: email,
			phone: phone,
			type: type,
			password: password,
			confirmpassword: confirmPassword,
		};
		console.log(user);
		register(user);
	}
	return (
		<Container>
			<LeftRegister>
				{/* <TextTitle>Tenha acesso completo </TextTitle> */}
				<SingupImage src={Image} alt="Marketing illustrations by Storyset" />
			</LeftRegister>
			<SubmitRegister>
				<RightRegister>
					<CardRegister>
						<CardTitle>Cadastro</CardTitle>
						<TextField>
							{/* Nome */}
							<LabelField for="name">Nome</LabelField>
							<Field
								placeholder="Nome"
								id="name"
								type="name"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							{/* Email */}
							<LabelField for="email">Email</LabelField>
							<Field
								placeholder="Email"
								id="email"
								name="email"
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							{/* Phone */}
							<LabelField for="phone">Telefone</LabelField>
							<Field
								placeholder="Telefone"
								id="phone"
								name="phone"
								type="text"
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
							{/* Type */}
							<LabelField for="type">Tipo</LabelField>
							<Select
								onChange={(e) => {
									setType(e.target.value);
								}}
							>
								<Option value="">Escolha</Option>
								<Option value={true}>Empresa</Option>
								<Option value={false}>Cliente</Option>
							</Select>
							<LabelField for="senha">Senha</LabelField>
							<Field
								placeholder="Senha"
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<LabelField for="senha">Confirmar senha</LabelField>
							<Field
								placeholder="Senha"
								id="password"
								name="password"
								type="password"
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
							/>
						</TextField>
						<RegisterButton
							type="submit"
							onClick={(evt) => {
								handleSubmitUser(evt);
							}}
						>
							Cadastrar
						</RegisterButton>
					</CardRegister>
				</RightRegister>
			</SubmitRegister>
		</Container>
	);
}
