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
} from "./style";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostService from "../../../service/post";

function FormPost(props) {
	// Prudct Section
	const [name, setName] = useState("");
	const [wage, setWage] = useState();
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	//Modal
	const [modal, setModal] = useState(false);

	// Redirect
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");
	// Error form
	const [error, setError] = useState(false);

	//Product
	const handleSubmitProduct = async (evt) => {
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

	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
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
								handleSubmitProduct(evt);
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

export default FormPost;
