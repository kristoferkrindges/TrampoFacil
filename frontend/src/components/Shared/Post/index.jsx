import React, { useState, useEffect, userContext, useContext } from "react";
import {
	Background,
	ModalWrapper,
	ModalImg,
	ModalContent,
	Icons,
	IoColorWand,
	IoTrash,
	Title,
	Details,
	Price,
	Button,
	User,
	UserName,
	UserImage,
	Order,
	Peoples,
	IoPeople,
	AiDislike,
	AiLike,
	IoAdd,
} from "./style";
import { Link } from "react-router-dom";
import UserService from "../../../service/user";
import PostService from "../../../service/post";
import { Context } from "../../../context/UserContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function Post({
	id,
	details,
	wage,
	name,
	image,
	avaible,
	getId,
	modal,
	type,
	userId,
	userImage,
	userName,
	employees,
	userInfo,
}) {
	const handle = () => {
		getId(id);
		modal(true);
	};
	const [user, setUser] = useState();
	// Redirect
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");
	// const [emp, setEmp] = useState(0);
	const { userContext, authenticated } = useContext(Context);
	useEffect(() => {
		if (!type) {
			fetchUser(userId);
			// setEmp(employees.length);
		}
	}, []);
	async function fetchUser(userId) {
		const response = await UserService.getId(userId);
		setUser(response.data.user);
	}
	console.log(employees);
	async function signU(x) {
		console.log(authenticated);
		if (!authenticated) {
			setRoute("/login");
			setRedirectToDash(true);
			return;
		}
		if (!avaible) {
			toast.error("job vacancy unavailable");
			return;
		}
		if (employees.includes(userContext._id)) {
			toast.error("User already registered");
			return;
		}
		try {
			const response = await PostService.signUp(x, {
				user: userContext._id,
			});
			toast.success("The user was push with successfully!");
			// setUser(user.employees.push(userContext._id));
			// employees.push(userContext._id);
			// setEmp(emp + 1);
		} catch (error) {
			toast.error(error.response.data.message);
		}
		// setUser(user.employees.push);
	}
	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
	if (type) {
		return (
			<>
				<Background>
					<ModalWrapper>
						<ModalImg src={image} alt="user" />
						<ModalContent>
							<Icons>
								<Link to={`/updatePost/${id}`}>
									<IoColorWand />
								</Link>
								<IoTrash onClick={handle} />
							</Icons>
							<User>
								<UserImage src={userImage}></UserImage>
								<UserName>{userName}</UserName>
							</User>
							<Title>{name}</Title>
							<Details>{details}</Details>
							<Price>R$: {wage}</Price>
							<Order>
								<Button
									style={
										avaible
											? { backgroundColor: "green" }
											: { backgroundColor: "red" }
									}
								>
									{avaible ? (
										<>
											<AiLike /> Disponivel
										</>
									) : (
										<>
											<AiDislike /> Indisponivel
										</>
									)}
								</Button>
								<Peoples>
									<IoPeople></IoPeople>
									{employees.length}
								</Peoples>
							</Order>
						</ModalContent>
					</ModalWrapper>
				</Background>
			</>
		);
	} else {
		return (
			<>
				<Background>
					<ModalWrapper>
						<ModalImg src={image} alt="user" />
						<ModalContent>
							<Icons>
								<IoPeople></IoPeople>
								{employees.length}
								{/* {emp} */}
							</Icons>
							<User>
								<UserImage src={user ? user.image : ""}></UserImage>
								<UserName>{user ? user.name : ""}</UserName>
							</User>
							<Title>{name}</Title>
							<Details>{details}</Details>
							<Price>R$: {wage}</Price>
							<Order>
								<Button
									style={
										avaible
											? { backgroundColor: "green" }
											: { backgroundColor: "red" }
									}
								>
									{avaible ? (
										<>
											<AiLike /> Disponivel
										</>
									) : (
										<>
											<AiDislike /> Indisponivel
										</>
									)}
								</Button>
								<Button
									onClick={() => {
										signU(id);
									}}
								>
									<IoAdd></IoAdd>
									{employees.includes(userContext._id)
										? "Inscrito"
										: "Inscrever-se"}
								</Button>
							</Order>
						</ModalContent>
					</ModalWrapper>
				</Background>
			</>
		);
	}
}
