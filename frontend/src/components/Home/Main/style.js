import styled from "styled-components";
import {
	IoContrastOutline,
	IoContrastSharp,
	IoSearchSharp,
} from "react-icons/io5";

export const IoCart = styled(IoContrastOutline)`
	width: 20px;
	height: 20px;
`;

export const IoCop = styled(IoSearchSharp)`
	width: 50rem;
	height: 50rem;
	position: absolute;
	bottom: -2rem;
	right: 5rem;
	z-index: 1;
	object-fit: cover;
	@media only screen and (max-width: 1024px) {
		bottom: 1.5rem;
		width: 48rem;
		right: -6rem;
	}

	@media only screen and (max-width: 600px) {
		/* position: relative; */
		top: -8rem;
		width: 35rem;
		right: -2.5rem;
	}
`;

export const Container = styled.header`
	height: calc(90vh - 5rem);
	position: relative;
	top: 5rem;
	display: grid;
	place-items: center;
	overflow: hidden;
	@media only screen and (max-width: 1024px) {
		height: 100%;
		padding: 14rem 0 0;
	}

	@media only screen and (max-width: 600px) {
		height: 90vh;
		padding: 0;
	}
`;

export const Section = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	height: 100%;
	margin: 0 auto;
	width: 80%;
	max-width: 1800px;

	@media only screen and (max-width: 1024px) {
		align-items: flex-end;
		height: 100%;
	}

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		margin-top: 4.4rem;
		gap: 0;
	}
`;
// Tudo com img width: 100% object-fit: cover;
export const MainText = styled.div`
	display: flex;
	align-items: center;
	height: 100%;

	@media only screen and (max-width: 1024px) {
		margin-bottom: 6rem;
	}

	@media only screen and (max-width: 600px) {
		text-align: center;
		margin-bottom: 2rem;
	}
`;

export const Control = styled.div``;

export const Title = styled.h3`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.buttons};
	margin-bottom: 0.6rem;

	@media only screen and (max-width: 1024px) {
		margin-left: 1.5rem;
		font-size: 1.4rem;
	}

	@media only screen and (max-width: 600px) {
		font-size: 1.2rem;
	}
`;

export const About = styled.p`
	margin: 1.2rem 0 2rem;
	@media only screen and (max-width: 1024px) {
		margin-left: 1.5rem;
	}
	@media only screen and (max-width: 600px) {
		margin: 0.5rem 1.2rem 1.8rem;
	}
`;

export const Tastes = styled.h1`
	font-size: 4rem;
	margin-bottom: 1rem;
	line-height: 4rem;

	@media only screen and (max-width: 1024px) {
		font-size: 3.4rem;
		margin-left: 1.5rem;
	}

	@media only screen and (max-width: 600px) {
		font-size: 2.5rem;
		margin: 0.5rem 0.5rem 0.2rem 0.5rem;
	}
`;

export const Button = styled.a`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: black;
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	margin-top: 50px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
		font-size: 20px;
	}
	@media only screen and (max-width: 1024px) {
		margin-left: 1.5rem;
		font-size: 12px;
	}

	@media only screen and (max-width: 600px) {
		margin-top: 1rem;
		font-size: 14px;
	}
`;

// Icon transition all 400ms ease;
export const MainImg = styled.div`
	position: relative;
	height: 100%;

	@media only screen and (max-width: 1024px) {
		align-self: flex-end;
		height: 100%;
	}

	@media only screen and (max-width: 600px) {
	}
`;

export const Image = styled.div`
	width: 68rem;
	position: absolute;
	bottom: 1rem;
	right: -19rem;
	z-index: 1;

	& img {
		width: 100%;
		object-fit: cover;
	}
	@media only screen and (max-width: 1024px) {
		bottom: 1.5rem;
		width: 48rem;
		right: -6rem;
	}

	@media only screen and (max-width: 600px) {
		/* position: relative; */
		top: -8rem;
		width: 35rem;
		right: -2.5rem;
	}
`;

export const RightBG = styled.div`
	width: 70rem;
	height: 70rem;
	border-radius: 50%;
	background: ${({ theme }) => theme.buttons};
	position: absolute;
	right: -40rem;
	bottom: -22rem;

	@media only screen and (max-width: 1024px) {
		width: 38rem;
		height: 38rem;
		right: 20%;
		bottom: 60%;
		/* right: 50%;
		bottom: 50%; */
		transform: translate(50%, 50%);
	}

	@media only screen and (max-width: 600px) {
		bottom: 20%;
		right: 49%;
		width: 35rem;
		height: 35rem;
	}
`;
