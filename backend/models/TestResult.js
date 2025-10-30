import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  subject: { type: String, required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("TestResult", testResultSchema);
