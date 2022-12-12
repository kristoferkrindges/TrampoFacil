import styled from "styled-components";
import { MdClose } from "react-icons/md";
import {
	IoPencilOutline,
	IoTrashBinOutline,
	IoColorWandSharp,
	IoPeopleOutline,
	IoAddCircle,
} from "react-icons/io5";

import { AiFillLike, AiFillDislike } from "react-icons/ai";

export const AiLike = styled(AiFillLike)`
	/* width: 5px;
	height: 5px; */
	stroke: ${({ theme }) => theme.text};
`;

export const IoAdd = styled(IoAddCircle)`
	/* width: 5px;
	height: 5px; */
	stroke: ${({ theme }) => theme.text};
`;

export const AiDislike = styled(AiFillDislike)`
	/* width: 5px;
	height: 5px; */
	stroke: ${({ theme }) => theme.text};
`;

export const IoTrash = styled(IoTrashBinOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: ${({ theme }) => theme.text};

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPeople = styled(IoPeopleOutline)`
	width: 20px;
	height: 20px;
	stroke: ${({ theme }) => theme.text};
`;

export const IoColorWand = styled(IoColorWandSharp)`
	width: 20px;
	height: 20px;
	margin-bottom: 5px;
	cursor: pointer;
	stroke: ${({ theme }) => theme.text};

	&:hover {
		opacity: 0.5;
	}
`;
export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: ${({ theme }) => theme.text};
		opacity: 1;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 0.6;
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		right: 5px;
	}
`;

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40vw;
	height: 30vh;
	/* background-color: orange; */
`;

export const ModalWrapper = styled.div`
	width: 40vw;
	height: 25vh;
	position: relative;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	/* border: 1px solid black; */
	background: ${({ theme }) => theme.bg};
	/* background-color: red; */
	color: ${({ theme }) => theme.text};
	display: grid;
	grid-template-columns: 0.5fr 1fr;
	/* position: absolute; */
	z-index: 5;
	border-radius: 10px;
	/* top: -50px; */
`;

export const ModalImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px 0 0 10px;
	background: #000;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.5;
	color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 20px;
	background: ${({ theme }) => theme.buttons};
	color: white;
	font-weight: bold;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	text-align: center;

	&:hover {
		background: #333;
	}
`;

export const Price = styled.h2`
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.text};
`;

export const Details = styled.p`
	/* margin-top: 1rem; */
	color: ${({ theme }) => theme.text};
	text-align: center;
`;

export const Title = styled.h1`
	margin-top: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 25px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
`;

export const User = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const UserName = styled.h3`
	font-size: 0.9rem;
	margin-left: 10px;
	color: ${({ theme }) => theme.text};
`;

export const UserImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

export const Order = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	/* padding: 11px 20px 11px 20px; */
	width: 100%;
`;

export const Peoples = styled.div``;
