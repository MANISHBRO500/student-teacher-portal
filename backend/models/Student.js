import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  class: { type: String },
  totalMarks: { type: Number, default: 0 },
  obtainedMarks: { type: Number, default: 0 },
  remarks: { type: String, default: "" }
});

export default mongoose.model("Student", studentSchema);
