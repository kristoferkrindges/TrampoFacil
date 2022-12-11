import React, { useState } from "react";
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
} from "./style";
import { Link } from "react-router-dom";

export default function Post({
	id,
	details,
	wage,
	name,
	image,
	avaible,
	getId,
	modal,
	userName,
	userImage,
}) {
	const handle = () => {
		getId(id);
		modal(true);
	};
	// console.log(id);
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
							<Button>{avaible ? "Disponivel" : "Indisponivel"}</Button>
							<Peoples>
								<IoPeople></IoPeople>5
							</Peoples>
						</Order>
					</ModalContent>
				</ModalWrapper>
			</Background>
		</>
	);
}
