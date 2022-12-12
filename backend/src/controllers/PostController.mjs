import Post from "../models/Post.mjs";
//helpers
import getToken from "../helpers/getToken.mjs";
import getUserByToken from "../helpers/getUserByToken.mjs";
import mongoose from "mongoose";

export default class PostController {
	static async create(req, res) {
		const { name, wage, details, image } = req.body;
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
		// const post = new Post({
		// 	name,
		// 	wage,
		// 	details,
		// 	avaible,
		// 	author: {
		// 		_id: user._id,
		// 		name: user.name,
		// 		image: user.image,
		// 		email: user.email,
		// 		phone: user.phone,
		// 	},
		// 	employees: [],
		// });
		const post = new Post({
			name,
			wage,
			details,
			avaible,
			image,
			author: {
				_id: user._id,
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

	static async SignUp(req, res) {
		const id = req.params.id;
		const { user } = req.body;
		const ObjectId = mongoose.Types.ObjectId;
		if (!ObjectId.isValid(id)) {
			res.status(422).json({
				message: `User with ${id} invalid.`,
			});
			return;
		}
		if (!user) {
			res.status(422).json({ message: "The user is required" });
			return;
		}
		try {
			const post = await Post.findById(id);
			if (post.employees.includes(user)) {
				res.status(422).json({ message: "User already registered" });
				return;
			}
			post.employees.push(user);
			await Post.findByIdAndUpdate(id, post);
			// console.log(user);
			res.status(201).json({
				message: "The user was push with successfully!",
			});
			return;
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
		const posts = await Post.find({ "author._id": user._id }).sort(
			"-createdAt"
		);
		res.status(200).json({ posts });
	}

	// Update Post
	static async updatePost(req, res) {
		const id = req.params.id;

		const { name, wage, details, avaible, image } = req.body;

		//const images = req.files;

		const updateData = {};
		const ObjectId = mongoose.Types.ObjectId;
		if (!ObjectId.isValid(id)) {
			res.status(422).json({
				message: `Post with ${id} invalid.`,
			});
			return;
		}
		//check if exists
		const post = await Post.findOne({ _id: id });

		if (!post) {
			res.status(404).json({ message: "Post not found" });
			return;
		}
		// check if logged in user registered the post
		const token = getToken(req);
		const user = await getUserByToken(token);
		// if user id is != to user_id in posts
		if (post.author._id.toString() !== user._id.toString()) {
			res.status(422).json({ message: "Access denied! Not your post" });
			return;
		}
		//Validations
		if (!name) {
			res.status(422).json({ message: "The name is required" });
			return;
		} else {
			updateData.name = name;
		}

		if (!wage) {
			res.status(422).json({ message: "The wage is required" });
			return;
		} else {
			updateData.wage = wage;
		}

		if (!details) {
			res.status(422).json({ message: "The details is required" });
			return;
		} else {
			updateData.details = details;
		}
		if (!avaible) {
			res.status(422).json({ message: "The avaible is required" });
			return;
		} else {
			updateData.avaible = avaible;
		}
		//image...
		updateData.image = image;
		await Post.findByIdAndUpdate(id, updateData);
		res.status(200).json({ message: "Post updated with successful" });
	}

	// Delete Post
	static async removePostById(req, res) {
		const id = req.params.id;
		// check if id is valid
		const ObjectId = mongoose.Types.ObjectId;
		if (!ObjectId.isValid(id)) {
			res.status(422).json({
				message: `Post with ${id} invalid.`,
			});
			return;
		}

		// check if post exists
		const post = await Post.findOne({ _id: id });

		if (!post) {
			res.status(404).json({ message: "Post not found" });
			return;
		}
		// check if logged in user registered the post
		const token = getToken(req);
		const user = await getUserByToken(token);
		// if user id is != to user_id in posts
		if (post.author._id.toString() !== user._id.toString()) {
			res.status(422).json({ message: "Access denied!" });
			return;
		}

		await Post.findByIdAndRemove(id);
		res.status(200).json({ message: "Post removed with successful" });
	}
}
