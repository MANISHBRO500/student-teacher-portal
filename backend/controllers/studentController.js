import TestResult from "../models/TestResult.js";
import Student from "../models/Student.js";

export const getStudentData = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    const tests = await TestResult.find({ studentId: req.user.id });
    res.json({ student, tests });
  } catch (err) {
    res.status(500).json({ message: "Error fetching student data" });
  }
};
