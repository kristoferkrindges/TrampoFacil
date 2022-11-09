import jwt from "jsonwebtoken";
import User from "../models/User.mjs";
import "dotenv/config";

// Get user by jwt token
const getUserByToken = async (token) => {
	if (!token) {
		return res.status(401).json({ message: "Access denied!" });
	}

	const secret = process.env.JWT_TOKEN;
	const decoded = jwt.verify(token, secret);
	const userId = decoded.id;
	const user = await User.findOne({ _id: userId });
	return user;
};
export default getUserByToken;
