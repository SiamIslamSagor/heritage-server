import express from "express";
import { logout, newUser } from "../controllers/user.js";
import { login } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyProfile } from "../controllers/user.js";

const app = express.Router();

app.post("/new", newUser);
app.post("/login", login);

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/logout", logout);

export default app;
