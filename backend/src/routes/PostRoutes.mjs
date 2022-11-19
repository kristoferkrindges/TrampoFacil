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

// Get post by Id
router.get("/:id", PostController.getPostById);

export default router;
