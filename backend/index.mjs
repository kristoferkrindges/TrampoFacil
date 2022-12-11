//Modules
import express from "express";
import cors from "cors";

//Routes
import UserRoutes from "./src/routes/UserRoutes.mjs";
import PostRoutes from "./src/routes/PostRoutes.mjs";

const app = express();

//Config JSON response
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors());

// Public folder for images
app.use(express.static("public"));

//Routes
app.use("/users", UserRoutes);
app.use("/posts", PostRoutes);

app.listen(5000);
