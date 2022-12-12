import { Router as expressRouter } from "express";

//Controller
import PostController from "../controllers/PostController.mjs";

//Middlewares
import withAuth from "../helpers/withAuth.mjs";
import imageUp from "../helpers/imageUpload.mjs";

const router = expressRouter();

// Create post
router.post("/create", withAuth, PostController.create);

// Get all posts
router.get("/list", PostController.getPosts);

// Get all posts
// router.get("/", PostController.getAll);

// Get Posts user
router.get("/userposts", withAuth, PostController.getAllUserPosts);

// Get post by Id
router.get("/:id", PostController.getPostById);

// SignUp User
router.patch("/signup/:id", withAuth, PostController.SignUp);

//Update
router.patch(
	"/:id",
	withAuth,
	imageUp.single("image"),
	PostController.updatePost
);

//Delete
router.delete("/:id", withAuth, PostController.removePostById);

export default router;
