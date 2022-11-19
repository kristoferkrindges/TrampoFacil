import { Router as expressRouter } from "express";

//Controller
import PostController from "../controllers/PostController.mjs";

//Middlewares
import withAuth from "../helpers/withAuth.mjs";
import imageUp from "../helpers/imageUpload.mjs";

const router = expressRouter();

router.post("/create", withAuth, PostController.create);

export default router;
