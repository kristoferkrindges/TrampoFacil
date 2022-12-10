import React, { useState, useEffect, useContext } from "react";
import {
	Container,
	Context2,
	Top,
	Bottom,
	Layout,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Buttons,
	HireMe,
	Social,
	Title,
	UserDetails,
	InputBox,
	InputName,
	TextInput,
	Left,
	Right,
	ContainerInput,
	Controller,
	IoMail,
	IoLock,
	IoPerson,
	IoSearc,
	ModalImage,
	Input,
	Exit,
	IoPerson2,
	HireMe2,
	IoPhonePortrait,
	IoPricetag,
} from "./style";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../../context/UserContext";

function FormProfile(props) {
	//Contexto
	const { userContext, UpdateUser, DeleteUser } = useContext(Context);
	//Others
	//Modal
	const [modal, setModal] = useState(false);
	// Redirect
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");
	// Error form
	const [error, setError] = useState(false);

	const [open, setOpen] = useState(false);
	function HandlerOpen() {
		if (open == false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}
	const [id, setId] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [phone, setPhone] = useState();
	const [type, setType] = useState();
	const [image, setImage] = useState();

	useEffect(() => {
		config();
	}, [userContext]);

	function config() {
		if (userContext) {
			setId(userContext._id);
			setName(userContext.name);
			setEmail(userContext.email);
			setPhone(userContext.phone);
			if (userContext.type == true) {
				setType("Empresa");
			} else {
				setType("Cliente");
			}
			setImage(userContext.image);
		}
	}

	function handleSubmitUser(evt) {
		evt.preventDefault();
		const user = {
			name: name,
			email: email,
			phone: phone,
			type: userContext.type,
			password: password,
			confirmpassword: confirmPassword,
			image: image,
		};
		UpdateUser(user, id);
	}
	function handleDelete() {
		props.modal(true);
	}

	// Produtc final
	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
	return (
		<Container>
			<Context2>
				<Layout style={!open ? { background: "none" } : {}}>
					<Top>
						<CardContent>
							<Image>
								<Logo
									src={
										image
											? image
											: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
									}
								/>
								<IoSearc
									onClick={() => {
										setModal(true);
									}}
								></IoSearc>
							</Image>
							{modal ? (
								<ModalImage>
									<InputBox>
										<Input
											type="text"
											placeholder=""
											value={image}
											onChange={(e) => {
												setImage(e.target.value);
											}}
										/>
									</InputBox>
									<Exit
										onClick={() => {
											setModal(false);
										}}
									>
										Pronto
									</Exit>
								</ModalImage>
							) : (
								<></>
							)}
							<Social>
								<IoPerson2
									onClick={() => {
										handleDelete();
									}}
								/>
							</Social>
							<NameSubject>
								<Name style={open ? { display: "none" } : {}}>
									{open ? name : name}
								</Name>
							</NameSubject>
							<Buttons
								onClick={HandlerOpen}
								style={open ? { display: "none" } : {}}
							>
								<HireMe2>Editar</HireMe2>
							</Buttons>
						</CardContent>
					</Top>
					<Bottom style={!open ? { display: "none" } : {}}>
						<Title>Editar Perfil</Title>
						<UserDetails>
							<Left>
								<Controller>
									<span>Nome</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={name}
											onChange={(e) => {
												setName(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Email</span>
									<ContainerInput>
										<InputName
											type="email"
											placeholder=""
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
										<TextInput>
											<IoMail />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Senha</span>
									<ContainerInput>
										<InputName
											type="password"
											placeholder=""
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
										<TextInput>
											<IoLock />
										</TextInput>
									</ContainerInput>
								</Controller>
							</Left>
							<Right>
								<Controller>
									<span>Telefone</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={phone}
											onChange={(e) => {
												setPhone(e.target.value);
											}}
										/>
										<TextInput>
											<IoPhonePortrait />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Tipo</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											disabled
											value={type}
											onChange={(e) => {
												setType(e.target.value);
											}}
										/>
										<TextInput>
											<IoPricetag />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Confirmar Senha</span>
									<ContainerInput>
										<InputName
											type="password"
											placeholder=""
											value={confirmPassword}
											onChange={(e) => {
												setConfirmPassword(e.target.value);
											}}
										/>
										<TextInput>
											<IoLock />
										</TextInput>
									</ContainerInput>
								</Controller>
							</Right>
						</UserDetails>
						<Buttons onClick={HandlerOpen} style={open ? {} : {}}>
							<HireMe
								onClick={(evt) => {
									HandlerOpen();
									handleSubmitUser(evt);
								}}
							>
								Pronto
							</HireMe>
						</Buttons>
					</Bottom>
				</Layout>
			</Context2>
		</Container>
	);
}

export default FormProfile;
