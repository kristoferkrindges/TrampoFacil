import Api from "./api";

const UserService = {
	add: (params) => Api.post("/users/register", params),
};
export default UserService;
