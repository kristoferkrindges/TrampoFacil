import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.JWT_TOKEN;
const createUserToken = async (user, req, res) => {
	const token = jwt.sign(
		{
			name: user.name,
			id: user._id,
		},
		secret
	);
	// return token (name and id)
	res.status(200).json({
		message: "Você está autenticado",
		token: token,
		userId: user._id,
	});
};
export default createUserToken;
