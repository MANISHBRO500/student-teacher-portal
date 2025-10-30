// server.js

// --------------------- Imports ---------------------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// --------------------- Config -----------------------
dotenv.config(); // must be before using process.env

const app = express();

// --------------------- Middlewares ------------------
app.use(cors());
app.use(express.json());

// --------------------- MongoDB Connection ------------
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI is missing! Please set it in Render Environment Variables.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// --------------------- Routes ------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    message: "🎓 Student–Teacher Portal Backend Running Successfully!",
    database: "MongoDB Connected ✅",
  });
});

// Example route (you can add real ones later)
app.get("/api/test", (req, res) => {
  res.json({ msg: "Backend API test route working fine!" });
});

// --------------------- Server ------------------------
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
