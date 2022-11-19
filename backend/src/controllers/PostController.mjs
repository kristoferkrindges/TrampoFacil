import Post from "../models/Post.mjs";
//helpers
import getToken from "../helpers/getToken.mjs";
import getUserByToken from "../helpers/getUserByToken.mjs";

export default class PostController {
	static async create(req, res) {
		const { name, wage, details } = req.body;
		const avaible = true;

		//Image

		//Validations
		if (!name) {
			res.status(422).json({ message: "The name is required" });
			return;
		}
		if (!wage) {
			res.status(422).json({ message: "The wage is required" });
			return;
		}

		if (!details) {
			res.status(422).json({ message: "The details is required" });
			return;
		}

		//get owner post
		const token = getToken(req);
		const user = await getUserByToken(token);
		//Validation is type true
		if (user.type == false) {
			res.status(422).json({ message: "The type must be true" });
			return;
		}
		// create
		const post = new Post({
			name,
			wage,
			details,
			avaible,
			author: {
				_id: user._id,
				name: user.name,
				image: user.image,
				email: user.email,
				phone: user.phone,
			},
			employees: [],
		});

		try {
			const newPost = await post.save();
			res.status(201).json({
				message: "The post was created with successfully!",
				newPost,
			});
		} catch (error) {
			res.status(500).json({ message: error });
		}
	}
}
