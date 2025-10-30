import express from "express";
import { addMarks, addRemark, getAllStudents } from "../controllers/teacherController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-marks", protect, addMarks);
router.post("/add-remark", protect, addRemark);
router.get("/students", protect, getAllStudents);

export default router;
