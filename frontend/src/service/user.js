import Api from "./api";

const UserService = {
	getId: (id) => Api.get(`/users/${id}`),
};
export default UserService;
