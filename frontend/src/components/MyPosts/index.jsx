import React, { useState, useEffect } from "react";
import Menu from "../Shared/Menu";
import {
	Layout,
	Content,
	Option,
	Title,
	BtnContent,
	Button,
	Cont,
} from "./style";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import SearchBar from "../Shared/SearchBar";

export default function MyPosts() {
	const [posts, setPosts] = useState([]);
	const [result, setResult] = useState("");
	const updateResult = (r) => {
		setResult(r);
	};
	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<>
			<Menu type="Yes" search="home" />
			<Layout>
				<Option>
					<Content>
						<Title>
							<span>Minhas Postagens</span>
						</Title>
						<BtnContent>
							<Link to="/createdpost">
								<Button>Cadastrar</Button>
							</Link>
						</BtnContent>
						<Cont>
							<SearchBar
								placeholder="Procure por clientes"
								data={posts}
								updateResult={updateResult}
							/>
						</Cont>
						{/* {modal ? (
							<ModalDelete modal={handleModal} yes={deletePosts} />
						) : (
							<></>
						)} */}
						<Carrousel breakPoints={breakPoints}>
							{posts.length > 0 &&
								posts
									.filter((value) => {
										if (result === "") {
											return value;
										} else if (
											value.name.toLowerCase().includes(result.toLowerCase())
										) {
											return value;
										}
									})
									.map((value, key) => <h1>oi</h1>)}
							{posts.length === 0 && <p>Não há Postagens cadastradas ainda!</p>}
						</Carrousel>
					</Content>
				</Option>
			</Layout>
		</>
	);
}
