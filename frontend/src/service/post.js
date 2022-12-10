import Api from "./api";

const token = localStorage.getItem("token");

const PostService = {
	getAll: () => Api.get("/posts/list"),
	getId: (id) => Api.get(`/posts/${id}`),
	getAllUserPosts: () => Api.get("/posts/userposts"),
	created: (params) =>
		Api.post("/posts/create", params, {
			Authorization: `Bearer ${JSON.parse(token)}`,
		}),
	update: (id, params) =>
		Api.put(`/posts/${id}`, params, {
			Authorization: `Bearer ${JSON.parse(token)}`,
		}),
	delete: (id) =>
		Api.delete(`/posts/${id}`, {
			Authorization: `Bearer ${JSON.parse(token)}`,
		}),
};
export default PostService;
