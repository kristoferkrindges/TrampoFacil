//Modules
import express from "express";
import cors from "cors";

//Routes
import UserRoutes from "./src/routes/UserRoutes.mjs";

const app = express();

//Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("./src/public"));

//Routes
app.use("/users", UserRoutes);

app.listen(5000);
