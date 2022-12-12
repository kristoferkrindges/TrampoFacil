import React, { useEffect, useState, useContext } from "react";
import Menu from "../Shared/Menu";
import Post from "../Shared/PostTest";
import PostService from "../../service/post";
import { Layout, Content, Title, Cont } from "./style";
import { Context } from "../../context/UserContext";
import SearchBar from "../Shared/SearchBar";

export default function Jobs() {
	const { userContext } = useContext(Context);
	const [posts, setPosts] = useState([]);
	const [result, setResult] = useState("");
	const [modal, setModal] = useState(false);
	const [id, setId] = useState("");

	const updateResult = (r) => {
		setResult(r);
	};

	useEffect(() => {
		fetchCustomers();
	}, []);

	//Get
	async function fetchCustomers() {
		const response = await PostService.getAllUserPosts();
		// console.log(response.data.posts);
		if (response.data.posts.length >= 1) {
			setPosts(response.data.posts);
		}
	}

	async function Delete() {
		const response = await PostService.delete(id);
		setModal(false);
		const r = posts.filter((item) => item._id !== id);
		setPosts(r);
	}

	return (
		<>
			<Menu type="Yes" search="home" />
			<Layout>
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
										userName={userContext.name}
										userImage={userContext.image}
									/>
								))}
						{posts.length === 0 && <p>Não há Postagens cadastradas ainda!</p>}
					</Cont>
				</Content>
			</Layout>
		</>
	);
}
