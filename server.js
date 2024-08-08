// app.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
