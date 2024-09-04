import express from "express";
import { uploadProperty } from "../controllers/property.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.post("/upload", uploadProperty);

export default app;
