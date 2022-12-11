import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// helpers
import createUserToken from "../helpers/createUserToken.mjs";
import getToken from "../helpers/getToken.mjs";
import getUserByToken from "../helpers/getUserByToken.mjs";

export default class UserController {
	static async register(req, res) {
		//destructuring in req.body args
		const { name, email, phone, type, password, confirmpassword } = req.body;

		// Validations
		if (!name) {
			res.status(422).json({ message: "The name is required" });
			return;
		}

		if (!email) {
			res.status(422).json({ message: "The e-mail is required" });
			return;
		}

		if (!phone) {
			res.status(422).json({ message: "The phone is required" });
			return;
		}

		if (!type) {
			res.status(422).json({ message: "The type is required" });
			return;
		}

		if (!password) {
			res.status(422).json({ message: "The password is required" });
			return;
		}

		if (!confirmpassword) {
			res.status(422).json({ message: "The confirm password is required" });
			return;
		}

		if (password !== confirmpassword) {
			res.status(422).json({
				message: "The password and password confirmation are not the same",
			});
			return;
		}

		// Checked email is exists
		const userExists = await User.findOne({ email: email });
		if (userExists) {
			res.status(422).json({
				message: "E-mail is exists in the system. Please use another e-mail!",
			});
			return;
		}

		// create a password
		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(password, salt);

		//Create a user
		const user = new User({
			name: name,
			email: email,
			phone: phone,
			type: type,
			password: passwordHash,
		});

		try {
			const newUser = await user.save();
			await createUserToken(newUser, req, res);
		} catch (error) {
			res.status(500).json({ message: error });
		}
	}

	static async login(req, res) {
		const { email, password } = req.body;

		if (!email) {
			res.status(422).json({ message: "The e-mail is required" });
			return;
		}

		if (!password) {
			res.status(422).json({ message: "The password is required" });
			return;
		}

		// Checked email is exists
		const user = await User.findOne({ email: email });
		if (!user) {
			res.status(422).json({
				message: "Email not registered in the System!",
			});
			return;
		}
		// Check if password match with mongoose password
		const checkPassword = await bcrypt.compare(password, user.password);
		if (!checkPassword) {
			res.status(422).json({
				message: "Password invalid!",
			});
			return;
		}
		await createUserToken(user, req, res);
	}

	// User in the system
	static async checkUser(req, res) {
		let currentUser;
		// console.log(req.headers.authorization)
		if (req.headers.authorization) {
			const token = getToken(req);
			// variable ambit
			const secret = process.env.JWT_TOKEN;
			const decoded = jwt.verify(token, secret);
			//currentUser = await User.findById(decoded.id);
			currentUser = await User.findById(decoded.id).select("-password");
			// if (currentUser) {
			// 	currentUser.password = undefined;
			// }
			//currentUser.password = undefined;
			//return
		} else {
			currentUser = null;
			//return
		}
		res.status(200).send(currentUser);
		//return
	}
	// Get user by Id
	static async getUserbyId(req, res) {
		const id = req.params.id;
		//Check if user exists and withdraw password
		const user = await User.findById(id).select("-password"); // ex password
		if (!user) {
			res.status(422).json({
				message: `User with ${id} not found`,
			});
			return;
		}
		res.status(200).json({ user });
	}

	// Protected and edit user
	static async editUser(req, res) {
		const id = req.params.id;

		//Check if user exists
		const token = getToken(req);
		const user = await getUserByToken(token);
		// if (!user) {
		// 	res.status(422).json({
		// 		message: `User with ${id} not found`,
		// 	});
		// 	return;
		// }

		const { name, email, phone, type, password, confirmpassword, image } =
			req.body;
		if (req.file) {
			user.image = req.file.filename;
		}

		//validations
		if (!name) {
			res.status(422).json({ message: "The name is required" });
			return;
		}
		user.name = name;

		if (!email) {
			res.status(422).json({ message: "The e-mail is required" });
			return;
		}
		// Check if email has already taken
		const userExists = await User.findOne({ email: email });
		if (user.email !== email && userExists) {
			res.status(422).json({ message: "Please use another e-mail" });
			return;
		}
		user.email = email;

		if (!phone) {
			res.status(422).json({ message: "The phone is required" });
			return;
		}
		user.phone = phone;
		if (!type) {
			res.status(422).json({ message: "The type is required" });
			return;
		}
		user.type = type;
		if (password !== confirmpassword) {
			res.status(422).json({
				message: "The password and password confirmation are not the same",
			});
			return;
		} else if (password === confirmpassword && password != null) {
			// create a password
			const salt = await bcrypt.genSalt(12);
			const passwordHash = await bcrypt.hash(password, salt);
			user.password = passwordHash;
		}
		user.image = image;
		try {
			// returns user updated data
			await User.findOneAndUpdate(
				{ _id: user._id },
				{ $set: user },
				{ new: true }
			);
			res.status(200).json({
				message: `User edit with successfully`,
			});
		} catch (err) {
			res.status(500).json({ message: err });
			return;
		}

		// res.status(200).json({
		// 	message: `Edit with sucess`,
		// });
		return;
	}
	static async deleteUser(req, res) {
		const id = req.params.id;

		//Check if user exists
		const token = getToken(req);
		const user = await getUserByToken(token);
		try {
			await user.delete();
			res.status(200).json({
				message: `User deleted with successufuly`,
			});
		} catch (err) {
			res.status(500).json({ message: err });
			return;
		}
		return;
	}
}
