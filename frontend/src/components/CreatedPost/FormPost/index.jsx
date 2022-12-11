import React, { useState, useEffect } from "react";
import {
	Image,
	IconImageProduct,
	ContentForm,
	Form,
	FormHeader,
	Title,
	H1,
	IconButton,
	InputGroup,
	InputBox,
	Label,
	Input,
	ContextButton,
	Button,
	IoSearc,
	Context,
	ModalImage,
	Exit,
	IoBrush,
	Select,
	Option,
} from "./style";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PostService from "../../../service/post";

function FormPost(props) {
	let { id } = useParams();

	const [name, setName] = useState("");
	const [wage, setWage] = useState();
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [avaible, setAvaible] = useState();

	//Modal
	const [modal, setModal] = useState(false);

	// Redirect
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");
	// Error form
	const [error, setError] = useState(false);

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const post = await PostService.created({
				name: name,
				wage: wage,
				details: description,
				image: image,
			});
			toast.success("Created with Successfully");
			setName("");
			setWage("");
			setDescription("");
			setImage("");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	useEffect(() => {
		if (props.option) {
			fetchPost(id);
		}
	}, []);
	async function fetchPost(id) {
		const response = await PostService.getId(id);
		setName(response.data.post.name);
		setWage(response.data.post.wage);
		setDescription(response.data.post.details);
		setImage(response.data.post.image);
		setAvaible(response.data.post.avaible);
	}

	const handleSubmitUpdate = async (evt) => {
		evt.preventDefault();
		console.log(description);
		try {
			const post = await PostService.update(id, {
				name: name,
				wage: wage,
				details: description,
				avaible: avaible,
				image: image,
			});
			setRoute("/myposts");
			setRedirectToDash(true);
			toast.success("Update with Successfully");
			// setName("");
			// setWage("");
			// setDescription("");
			// setImage("");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;

	if (props.option) {
		return (
			<Context>
				<Image>{image ? <img src={image}></img> : <IoBrush />}</Image>
				<ContentForm>
					<Form>
						<FormHeader>
							<Title>
								<H1>Atualizar</H1>
							</Title>
							<IconButton>
								<IoSearc
									onClick={() => {
										setModal(true);
									}}
								></IoSearc>
							</IconButton>
						</FormHeader>
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
						<InputGroup>
							<InputBox>
								<Label>Nome</Label>
								<Input
									type="text"
									placeholder=""
									value={name}
									required
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</InputBox>

							<InputBox>
								<Label>Remuneração</Label>
								<Input
									type="number"
									placeholder=""
									value={wage}
									required
									onChange={(e) => {
										setWage(e.target.value);
									}}
								/>
							</InputBox>

							<InputBox>
								<Label>Descrição</Label>
								<Input
									type="text"
									placeholder=""
									value={description}
									required
									onChange={(e) => {
										setDescription(e.target.value);
									}}
								/>
							</InputBox>
							<InputBox>
								<Label>Função</Label>
								<Select
									onChange={(e) => {
										setAvaible(e.target.value);
									}}
								>
									{avaible ? (
										<Option value={true} selected>
											Disponivel
										</Option>
									) : (
										<Option value={true}>Disponivel</Option>
									)}
									{!avaible ? (
										<Option value={false} selected>
											Indisponivel
										</Option>
									) : (
										<Option value={false}>Indisponivel</Option>
									)}
								</Select>
							</InputBox>
						</InputGroup>
						<ContextButton>
							<Button
								onClick={(evt) => {
									handleSubmitUpdate(evt);
								}}
							>
								Atualizar
							</Button>
						</ContextButton>
						{/* {error && <h1>Error</h1>} */}
					</Form>
				</ContentForm>
			</Context>
		);
	} else {
		return (
			<Context>
				<Image>{image ? <img src={image}></img> : <IconImageProduct />}</Image>
				<ContentForm>
					<Form>
						<FormHeader>
							<Title>
								<H1>Cadastro</H1>
							</Title>
							<IconButton>
								<IoSearc
									onClick={() => {
										setModal(true);
									}}
								></IoSearc>
							</IconButton>
						</FormHeader>
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
						<InputGroup>
							<InputBox>
								<Label>Nome</Label>
								<Input
									type="text"
									placeholder=""
									value={name}
									required
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</InputBox>

							<InputBox>
								<Label>Remuneração</Label>
								<Input
									type="number"
									placeholder=""
									value={wage}
									required
									onChange={(e) => {
										setWage(e.target.value);
									}}
								/>
							</InputBox>

							<InputBox>
								<Label>Descrição</Label>
								<Input
									type="text"
									placeholder=""
									value={description}
									required
									onChange={(e) => {
										setDescription(e.target.value);
									}}
								/>
							</InputBox>
						</InputGroup>
						<ContextButton>
							<Button
								onClick={(evt) => {
									handleSubmit(evt);
								}}
							>
								Cadastrar
							</Button>
						</ContextButton>
						{/* {error && <h1>Error</h1>} */}
					</Form>
				</ContentForm>
			</Context>
		);
	}
}

export default FormPost;
