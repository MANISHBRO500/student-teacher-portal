import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";

export const login = async (req, res) => {
  const { role, emailOrRoll, password } = req.body;

  try {
    let user;
    if (role === "teacher") {
      user = await Teacher.findOne({ email: emailOrRoll });
    } else {
      user = await Student.findOne({ rollNo: emailOrRoll });
    }

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
