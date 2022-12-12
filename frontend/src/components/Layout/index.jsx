import React, { useEffect, useState, useContext } from "react";
import Menu from "../Shared/Menu";
import Post from "../Shared/Post";
import PostService from "../../service/post";
import { Layout, Content, Title, Cont, Option } from "./style";
import SearchBar from "../Shared/SearchBar";

export default function Jobs() {
	const [posts, setPosts] = useState([]);
	const [result, setResult] = useState("");

	const updateResult = (r) => {
		setResult(r);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	//Get
	async function fetchPosts() {
		const response = await PostService.getAll();
		if (response.data.posts.length >= 1) {
			setPosts(response.data.posts);
		}
	}

	return (
		<>
			<Menu type="Yes" search="home" />
			<Layout>
				<Option>
					<Content>
						<Title>Vagas</Title>
						<Cont>
							<SearchBar
								placeholder="Procure por vagas"
								data={posts}
								updateResult={updateResult}
							/>
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
									.map((value, key) => (
										<Post
											key={key}
											id={value._id}
											image={value.image}
											name={value.name}
											details={value.details}
											wage={value.wage}
											avaible={value.avaible}
											employees={value.employees}
											userId={value.author._id}
											type={false}
										/>
									))}
							{posts.length === 0 && <p>Não há Postagens cadastradas ainda!</p>}
						</Cont>
					</Content>
				</Option>
			</Layout>
		</>
	);
}
