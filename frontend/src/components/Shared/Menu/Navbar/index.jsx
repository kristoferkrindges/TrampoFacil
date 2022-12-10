import React, { useContext, useRef, useState, useEffect } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavLink,
	IoCart,
	Profile,
	ProfileLink,
	Li,
	IoIdCard,
	IoExtensionPuzzle,
	IoLogOut,
	IoAlbum,
	IoCart2,
	Alink,
	IoBrief,
} from "./style";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "../../../../App";
import logo from "../../../../assets/images/imagem.png";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/UserContext";

export default function Navbar({ toggle, resp, type }) {
	const { setTheme, theme } = useContext(ThemeContext);
	const { authenticated, logout, userContext } = useContext(Context);

	const [hero, setHero] = useState(false);
	function HandlerOpen() {
		if (hero == false) {
			setHero(true);
		} else {
			setHero(false);
		}
	}
	if (type == "Yes") {
		return (
			<>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<img className="logo" src={logo}></img>
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars></FaBars>
						</MobileIcon>
						<NavMenu>
							<NavLink to={"/"}>Home</NavLink>
							<NavLink to={"/layout"}>Vagas</NavLink>
							<NavLink>Sobre</NavLink>
						</NavMenu>
						<NavBtn>
							<Profile>
								{authenticated ? (
									userContext ? (
										userContext.image ? (
											<img
												onClick={HandlerOpen}
												src={userContext.image}
												alt=""
											/>
										) : (
											<img
												onClick={HandlerOpen}
												src={
													"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
												}
												alt=""
											/>
										)
									) : (
										<img
											onClick={HandlerOpen}
											src={
												"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
											}
											alt=""
										/>
									)
								) : (
									<img
										onClick={HandlerOpen}
										src={
											"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
										}
										alt=""
									/>
								)}

								<ProfileLink
									style={hero ? { display: "block" } : { display: "none" }}
								>
									<Li>
										<Link to="/profile">
											<IoIdCard></IoIdCard> Perfil
										</Link>
									</Li>
									{/* {userContext ? userContext.type == true ? ( : (<></>) : } */}
									{userContext ? (
										userContext.type == true ? (
											<>
												<Li>
													<Link to="/createdpost">
														<IoExtensionPuzzle></IoExtensionPuzzle> Publicar
													</Link>
												</Li>
												<Li>
													<Link to="/myposts">
														<IoAlbum /> Postagens
													</Link>
												</Li>
											</>
										) : (
											<Li>
												<Link to="/layout">
													<IoBrief></IoBrief> Vagas
												</Link>
											</Li>
										)
									) : (
										<></>
									)}

									<Li>
										<Alink
											isActive={theme === "dark"}
											onClick={() =>
												setTheme((p) => (p === "light" ? "dark" : "light"))
											}
										>
											<IoCart2 />
											DarkMode
										</Alink>
									</Li>
									<Li onClick={authenticated ? logout : ""}>
										<Link to={authenticated ? "/" : "/login"}>
											<IoLogOut></IoLogOut> {authenticated ? "Sair" : "Entrar"}
										</Link>
									</Li>
								</ProfileLink>
							</Profile>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</>
		);
	} else {
		return (
			<>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<img className="logo" src={logo}></img>
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars></FaBars>
						</MobileIcon>
						<NavMenu>
							<NavLink to={"/"}>Home</NavLink>
							<NavLink to={"/layout"}>Vagas</NavLink>
							<NavLink>Sobre</NavLink>
						</NavMenu>
						{authenticated ? (
							<NavBtn>
								<Profile>
									{authenticated ? (
										userContext ? (
											userContext.image ? (
												<img
													onClick={HandlerOpen}
													src={userContext.image}
													alt=""
												/>
											) : (
												<img
													onClick={HandlerOpen}
													src={
														"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
													}
													alt=""
												/>
											)
										) : (
											<img
												onClick={HandlerOpen}
												src={
													"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
												}
												alt=""
											/>
										)
									) : (
										<img
											onClick={HandlerOpen}
											src={
												"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
											}
											alt=""
										/>
									)}

									<ProfileLink
										style={hero ? { display: "block" } : { display: "none" }}
									>
										<Li>
											<Link to="/profile">
												<IoIdCard></IoIdCard> Perfil
											</Link>
										</Li>
										{userContext ? (
											userContext.type == true ? (
												<>
													<Li>
														<Link to="/createdpost">
															<IoExtensionPuzzle></IoExtensionPuzzle> Publicar
														</Link>
													</Li>
													<Li>
														<Link to="/myposts">
															<IoAlbum /> Postagens
														</Link>
													</Li>
												</>
											) : (
												<Li>
													<Link to="/layout">
														<IoBrief></IoBrief> Vagas
													</Link>
												</Li>
											)
										) : (
											<></>
										)}
										<Li>
											<Alink
												isActive={theme === "dark"}
												onClick={() =>
													setTheme((p) => (p === "light" ? "dark" : "light"))
												}
											>
												<IoCart2 />
												DarkMode
											</Alink>
										</Li>
										<Li onClick={authenticated ? logout : ""}>
											<Link to={authenticated ? "/" : "/login"}>
												<IoLogOut></IoLogOut>{" "}
												{authenticated ? "Sair" : "Entrar"}
											</Link>
										</Li>
									</ProfileLink>
								</Profile>
							</NavBtn>
						) : (
							<NavBtn>
								<NavBtnLink to="/login">{resp}</NavBtnLink>
								<IoCart
									isActive={theme === "dark"}
									onClick={() =>
										setTheme((p) => (p === "light" ? "dark" : "light"))
									}
								/>
							</NavBtn>
						)}
					</NavbarContainer>
				</Nav>
			</>
		);
	}
}
