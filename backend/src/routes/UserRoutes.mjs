// Modules
import { Router as expressRouter } from "express";

//Controller
import UserController from "../controllers/UserController.mjs";

const router = expressRouter();

// Routes
// Register user
router.post("/register", UserController.register);
// Login user
router.post("/login", UserController.login);
// Check User
router.get("/checkUser", UserController.checkUser);

export default router;
