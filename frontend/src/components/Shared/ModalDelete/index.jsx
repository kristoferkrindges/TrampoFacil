import React, { useState, useEffect, useContext } from "react";
import {
	Dark,
	Context2,
	Container,
	ModalBox,
	Icon,
	Title,
	SubTitle,
	Buttons,
	Button,
	NameSubject,
	Image,
	Buttoned,
} from "./style";
import { Context } from "../../../context/UserContext";

export default function ModalDelete(props) {
	const { DeleteUser, userContext } = useContext(Context);
	const handleNot = () => {
		props.modal(false);
	};

	const handleYes = () => {
		console.log("yes");
		DeleteUser(userContext._id);
	};

	return (
		<Dark>
			<Context2>
				<Container>
					<ModalBox>
						<Image>
							<Icon></Icon>
						</Image>
						<NameSubject>
							<Title>Aviso</Title>
							<SubTitle>Tem certeza que deseja excluir sua conta?</SubTitle>
						</NameSubject>
						<Buttons>
							<Buttoned onClick={handleNot}>Não</Buttoned>
							<Button onClick={handleYes}>Sim</Button>
						</Buttons>
					</ModalBox>
				</Container>
			</Context2>
		</Dark>
	);
}
