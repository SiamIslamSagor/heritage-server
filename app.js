import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import propertyRoute from "./routes/property.js";
import userRoute from "./routes/user.js";
import { generateFakeProperties } from "./seeders/property.js";

dotenv.config({
  path: "./.env",
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

connectDB(mongoURI);

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);

app.use("/property", propertyRoute);

// generateFakeProperties(30);

app.get("/", (req, res) => {
  res.send("Hello World: HOME");
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Heritage Server is running on ${port}`);
});
