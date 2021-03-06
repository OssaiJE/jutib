import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import anagram from "./routes/anagram.js";
import factorial from "./routes/factorial.js";

//  This code was written so fast, it got little to no review before pushing to github.
// This was due to the limited time of 24hrs deadline, given time, it can be refractored.

//  Load config file
dotenv.config({ path: "./config/config.env" });

//  Connect to database
connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

// Morgan logs request to console
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/anagram", anagram);
app.use("/factorial", factorial);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3031;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
