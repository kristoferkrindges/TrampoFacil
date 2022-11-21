import Post from "../models/Post.mjs";
//helpers
import getToken from "../helpers/getToken.mjs";
import getUserByToken from "../helpers/getUserByToken.mjs";
import mongoose from "mongoose";

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

	// List all posts created
	static async getPosts(req, res) {
		// const getPost = await Post.find({});
		const posts = await Post.find().sort("-createdAt");
		res.status(200).json({
			posts: posts,
		});

		// res.status(200).json({
		// 	message: "All posts created in our platform.",
		// 	getPost,
		// });
	}

	// List post by ID
	static async getPostById(req, res) {
		const id = req.params.id;
		//This
		const ObjectId = mongoose.Types.ObjectId;
		if (!ObjectId.isValid(id)) {
			res.status(422).json({
				message: `Post with ${id} invalid.`,
			});
			return;
		}
		// const post = await Post.findOne({_id: id});

		const post = await Post.findById(id);

		if (!post) {
			res.status(404).json({
				message: "Post not found.",
			});
		}
		// res.status(200).json({ post : post });
		//
		if (!id) {
			res.status(422).json({
				message: `Post with ${id} not found.`,
			});
			return;
		} else {
			res.status(200).json({ post });
		}
	}

	static async getAllUserPosts(req, res) {
		const token = getToken(req);
		const user = await getUserByToken(token);
		const posts = await Post.find({ "user._id": user._id }).sort("-createdAt");
		res.status(200).json({ posts: posts });
	}
}
