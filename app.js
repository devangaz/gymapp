// backend/app.js

import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { sendEmail } from "./utils/sendEmail.js";
import trainerRouter from "./routes/trainers.js"; // <- moved to routes folder

const app = express();

// Load env variables
config({ path: "./config.env" });

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "deepakdevanga1234@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Mount trainer routes
app.use("/trainers", trainerRouter);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
