import React, { useState, useEffect, useContext } from "react";
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
import Post from "../Shared/Post";
import PostService from "../../service/post";
import ModalDelete from "../Shared/ModalDelete";
import { Context } from "../../context/UserContext";

export default function MyPosts() {
	const { userContext } = useContext(Context);
	const [posts, setPosts] = useState([]);

	const [result, setResult] = useState("");
	const [modal, setModal] = useState(false);
	const [id, setId] = useState("");
	const handleModal = (r) => {
		setModal(r);
	};
	const handleId = (r) => {
		setId(r);
	};
	const updateResult = (r) => {
		setResult(r);
	};
	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 2 },
	];
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
	console.log(id);
	async function Delete() {
		const response = await PostService.delete(id);
		setModal(false);
		const r = posts.filter((item) => item._id !== id);
		setPosts(r);
	}
	console.log(posts);
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
								placeholder="Procure por postagens"
								data={posts}
								updateResult={updateResult}
							/>
						</Cont>
						{modal ? <ModalDelete modal={handleModal} yes={Delete} /> : <></>}
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
									.map((value, key) => (
										<Post
											key={key}
											id={value._id}
											image={value.image}
											name={value.name}
											details={value.details}
											wage={value.wage}
											avaible={value.avaible}
											modal={handleModal}
											getId={handleId}
											userName={userContext.name}
											userImage={userContext.image}
											type={true}
											employees={value.employees}
										/>
									))}
							{posts.length === 0 && <p>Não há Postagens cadastradas ainda!</p>}
						</Carrousel>
					</Content>
				</Option>
			</Layout>
		</>
	);
}
