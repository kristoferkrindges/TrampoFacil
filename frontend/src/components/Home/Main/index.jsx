import React from "react";
import {
	Container,
	Section,
	Circle,
	MainText,
	Title,
	Tastes,
	About,
	Button,
	MainImg,
	Image,
	RightBG,
	Control,
	IoCop,
} from "./style";
import logo from "../../../assets/images/imagem.png";

export default function Main() {
	return (
		<Container>
			<Section>
				<MainText>
					<Control>
						<Title>Bem vindo ao TrampoFacil</Title>
						<Tastes>Diferentes Empregos!</Tastes>
						<About>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
							et, laboriosam laborum eius rem cupiditate.
						</About>
						<Button>Escolha agora</Button>
					</Control>
				</MainText>
				<MainImg>
					<Image>
						<img src={logo} alt="trampofacil"></img>
						{/* <IoCop /> */}
					</Image>
					<RightBG />
				</MainImg>
			</Section>
		</Container>
	);
}
