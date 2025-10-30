import express from "express";
import { getStudentData } from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/data", protect, getStudentData);

export default router;
