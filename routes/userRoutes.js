import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/users", userController.getAllUsers);

export default router;
