// Modules
import { Router as expressRouter } from "express";

//Middlewares
import withAuth from "../helpers/withAuth.mjs";
import imageUp from "../helpers/imageUpload.mjs";

//Controller
import UserController from "../controllers/UserController.mjs";

const router = expressRouter();

// Routes publics
// Register user
router.post("/register", UserController.register);
// Login user
router.post("/login", UserController.login);
// Check User
router.get("/checkUser", UserController.checkUser);
// Get user by Id
router.get("/:id", UserController.getUserbyId);

// Routes protected and middlewares
// Edit user
router.patch(
	"/edit/:id",
	withAuth,
	imageUp.single("image"),
	UserController.editUser
);
// Remove user
router.delete("/delete/:id", withAuth, UserController.deleteUser);

export default router;
