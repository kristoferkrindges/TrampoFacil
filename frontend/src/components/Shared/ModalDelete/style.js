import styled from "styled-components";
import { IoAlertCircleOutline } from "react-icons/io5";

export const Icon = styled(IoAlertCircleOutline)`
	width: 100%;
	height: 100%;
	cursor: pointer;
	stroke: ${({ theme }) => theme.buttons};

	&:hover {
		opacity: 0.5;
	}
`;

export const Dark = styled.div`
	background: rgba(0, 0, 0, 0.8);
	width: 100vw;
	height: 100vh;
	position: fixed; //absolute
	z-index: 999;
	top: 0px;
	right: 0px;
`;

export const Context2 = styled.div`
	position: absolute;
	height: 40vh;
	width: 48vh;
	z-index: 200;
	left: 39.5%;
	top: 35%;
`;

export const Container = styled.section`
	background: ${({ theme }) => theme.bg};
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	position: relative;
	margin: 20px 30px;
	height: 40vh;
	width: 40vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	/* border: 1px solid black; */

	/* &::before {
		content: "";
		position: absolute;
		height: 43%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	} */

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}

	@media (max-width: 768px) {
		height: 35vh;
		width: 22vh;
	}
`;

export const Image = styled.div`
	height: 150px;
	width: 150px;
	border-radius: 25px;
	padding: 3px;
	/* background: ${({ theme }) => theme.buttons}; */

	@media (max-width: 768px) {
		height: 150px;
		width: 150px;
	}
`;

export const Button = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: none;
	color: #fff;
	padding: 8px 42px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
	}
`;

export const Buttoned = styled.button`
	background: ${({ theme }) => theme.text};
	outline: none;
	border: none;
	color: ${({ theme }) => theme.bg};
	padding: 8px 42px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
	}
`;

export const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
`;

export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.text};
`;

export const Title = styled.h2`
	font-size: 2.5rem;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const SubTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: 500;
	text-align: center;
	margin-top: 20px;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
