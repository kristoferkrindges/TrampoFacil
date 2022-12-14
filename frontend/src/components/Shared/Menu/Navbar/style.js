import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {
	IoContrastOutline,
	IoContrastSharp,
	IoExtensionPuzzleOutline,
	IoIdCardOutline,
	IoAlbums,
	IoLogOutOutline,
	IoAnalyticsOutline,
	IoBriefcase,
} from "react-icons/io5";

export const IoIdCard = styled(IoIdCardOutline)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoBrief = styled(IoBriefcase)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoLogOut = styled(IoLogOutOutline)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoCart = styled(IoContrastOutline)`
	width: 20px;
	height: 20px;
	margin-left: 40px;
	margin-right: 20px;
`;

export const IoCart2 = styled(IoContrastOutline)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoAlbum = styled(IoAlbums)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

export const Nav = styled.nav`
	background-color: ${({ theme }) => theme.navbar};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 999;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1600px;
`;

export const NavLogo = styled(LinkR)`
	color: ${({ theme }) => theme.title};
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
	img {
		cursor: pointer;
		width: 60px;
		margin-right: 20%;
		border: none;
		border-radius: 5px;
	}
	h1 {
		font-size: 20px;
	}
	h1:hover {
		color: #fc4c35;
	}
	@media screen and (max-width: 768px) {
		h1 {
			display: none;
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${({ theme }) => theme.buttons};
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(LinkR)`
	color: white;
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&.active {
		color: #15cdfc;
	}
	&:hover {
		transition: all 0.2s ease-in-out;
		color: ${({ theme }) => theme.buttons};
	}
`;

export const NavLinks = styled(LinkS)`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		border-bottom: 3px solid #01bf71;
	}
	&:hover {
		color: #fc4c35;
		font-size: 20px;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
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
		font-size: 20px;
	}
`;

export const IoExtensionPuzzle = styled(IoExtensionPuzzleOutline)`
	width: 20px;
	height: 20px;
	&:hover {
		opacity: 0.5;
	}
`;

// Menu bolinha
export const Profile = styled.div`
	position: relative;
	margin-right: 85%;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
		margin-top: 15%;
		margin-right: 35%;
		/* margin-left: 5%; */
	}
`;

export const ProfileLink = styled.ul`
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	background: ${({ theme }) => theme.navbar};
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	width: 160px;
	opacity: 1;
	/* pointer-events: none; */
	transition: all 0.3s ease;
`;

export const Li = styled.li`
	& a {
		padding: 10px 16px;
		display: flex;
		grid-gap: 10px;
		font-size: 14px;
		color: white;
		align-items: center;
		transition: all 0.3s ease;
		cursor: pointer;
	}
	& a:hover {
		background: ${({ theme }) => theme.buttons};
	}
`;

export const Alink = styled.a`
	padding: 10px 16px;
	display: flex;
	grid-gap: 10px;
	font-size: 14px;
	color: white;
	align-items: center;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.buttons};
	}
`;
