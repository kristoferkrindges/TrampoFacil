import styled from "styled-components";
import {
	IoCameraOutline,
	IoExtensionPuzzleOutline,
	IoBrushOutline,
} from "react-icons/io5";

export const IconImageProduct = styled(IoExtensionPuzzleOutline)`
	width: 31rem;
	height: 31rem;
	stroke: black;
`;

export const IoBrush = styled(IoBrushOutline)`
	width: 31rem;
	height: 31rem;
	stroke: black;
`;

export const Select = styled.select`
	margin: 0.6rem 0;
	padding: 0.8rem 1.2rem;
	border: none;
	border-radius: 10px;
	box-shadow: 1px 1px 6px #0000001c;
	font-size: 0.8rem;
	min-width: 28.8ch;
	outline: 1px solid ${({ theme }) => theme.text};

	&:hover {
		background-color: #eeeeee75;
	}

	&:focus-visible {
		outline: 1px solid ${({ theme }) => theme.buttons};
	}
	&::placeholder {
		color: #000000be;
	}
`;
export const Option = styled.option``;

export const Context = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.bg};
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
	padding: 1rem;
	margin: auto;

	@media screen and (max-width: 1330px) {
		width: 50%;
		flex-direction: column;
	}

	@media screen and (max-width: 1064px) {
		width: 90%;
		height: auto;
	}
`;

export const IoSearc = styled(IoCameraOutline)`
	width: 2rem;
	height: 2rem;
	cursor: pointer;
	stroke: ${({ theme }) => theme.text};

	&:hover {
		opacity: 0.5;
	}
`;

export const Image = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.buttons};
	border-radius: 10%;
	padding: 1rem;

	& img {
		width: 100%;
		border-radius: 10%;
	}

	@media screen and (max-width: 1330px) {
		display: none;
	}
`;

export const ContentForm = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bg};

	@media screen and (max-width: 1330px) {
		width: 100%;
	}
`;

export const Form = styled.form``;

export const FormHeader = styled.div`
	margin-bottom: 3rem;
	display: flex;
	justify-content: space-between;
`;

export const IconButton = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.div``;

export const H1 = styled.h1`
	&::after {
		content: "";
		display: block;
		width: 5rem;
		height: 0.3rem;
		background-color: ${({ theme }) => theme.buttons};
		margin: 0 auto;
		position: absolute;
		border-radius: 10px;
	}
`;

export const InputGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem 0;

	@media screen and (max-width: 1064px) {
		/* flex-direction: column;
        z-index: 5;
        padding-right: 5rem;
        max-height: 10rem;
        overflow-y: scroll;
        flex-wrap: nowrap; */
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.1rem;
`;

export const InputDate = styled.input`
	margin: 0.6rem 0;
	padding: 0.8rem 1.2rem;
	border: none;
	border-radius: 10px;
	box-shadow: 1px 1px 6px #0000001c;
	font-size: 0.8rem;
	min-width: 26.8ch;

	&:hover {
		background-color: #eeeeee75;
	}

	&:focus-visible {
		outline: 1px solid ${({ theme }) => theme.buttons};
	}
	&::placeholder {
		color: #000000be;
	}
`;

export const Input = styled.input`
	margin: 0.6rem 0;
	padding: 0.8rem 1.2rem;
	border: none;
	border-radius: 10px;
	box-shadow: 1px 1px 6px #0000001c;
	font-size: 0.8rem;
	outline: 1px solid ${({ theme }) => theme.text};

	&:hover {
		background-color: #eeeeee75;
	}

	&:focus-visible {
		outline: 1px solid ${({ theme }) => theme.buttons};
	}
	&::placeholder {
		color: #000000be;
	}
`;

export const Label = styled.div`
	font-size: 0.75rem;
	font-weight: 600;
	color: ${({ theme }) => theme.text};
`;

export const ContextButton = styled.div``;

export const Button = styled.button`
	width: 100%;
	margin-top: 2.5rem;
	border: none;
	background-color: ${({ theme }) => theme.buttons};
	padding: 0.62rem;
	border-radius: 5px;
	cursor: pointer;
	font-size: 0.93rem;
	font-weight: bold;
	color: black;

	&:hover {
		opacity: 0.7;
	}
`;

export const ModalImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 32%;
	height: 8vw;
	position: absolute;
	background-color: ${({ theme }) => theme.buttons};
	z-index: 5;
	border-radius: 10px;

	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);

	input {
		width: 100%;
	}
`;
export const Exit = styled.a`
	width: 17%;
	border-radius: 50px;
	background: ${({ theme }) => theme.text};
	white-space: nowrap;
	padding: 10px 22px;
	color: ${({ theme }) => theme.buttons};
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
	}
`;

export const GenderInputs = styled.div`
	@media screen and (max-width: 1064px) {
		margin-top: 2rem;
	}
`;

export const GenderTitle = styled.div`
	@media screen and (max-width: 1064px) {
		margin: 0;
	}
`;

export const H6 = styled.h6`
	font-size: 0.75rem;
	font-weight: 600;
	color: #000000c0;
`;

export const GenderGroup = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.62rem;
	padding: 0 0.5rem;

	@media screen and (max-width: 1064px) {
		flex-direction: column;
	}
`;

export const GenderInput = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 1064px) {
		margin-top: 0.5rem;
	}
`;
export const InputRadio = styled.input`
	margin-right: 0.35rem;
`;
