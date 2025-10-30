import TestResult from "../models/TestResult.js";
import Student from "../models/Student.js";

export const addMarks = async (req, res) => {
  const { studentId, subject, marksObtained, totalMarks } = req.body;

  try {
    const newResult = new TestResult({ studentId, subject, marksObtained, totalMarks });
    await newResult.save();

    const student = await Student.findById(studentId);
    student.obtainedMarks += marksObtained;
    student.totalMarks += totalMarks;
    await student.save();

    res.json({ message: "Marks added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding marks" });
  }
};

export const addRemark = async (req, res) => {
  const { studentId, remark } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });
    student.remarks = remark;
    await student.save();
    res.json({ message: "Remark added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding remark" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Error fetching students" });
  }
};
