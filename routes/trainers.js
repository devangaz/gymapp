import express from "express";
import Trainer from "../models/Trainer.js";

const router = express.Router();

// POST /add a trainer
router.post("/", async (req, res) => {
  const { name, age, specialty, email } = req.body;

  if (!name || !specialty || !email) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, specialty, and email.",
    });
  }

  try {
    const newTrainer = new Trainer({ name, age, specialty, email });
    const savedTrainer = await newTrainer.save();

    res.status(201).json({
      success: true,
      data: savedTrainer,
      message: "Trainer added successfully.",
    });
  } catch (error) {
    console.error("Error adding trainer:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// GET list of all trainers
router.get("/", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json({
      success: true,
      data: trainers,
    });
  } catch (error) {
    console.error("Error fetching trainers:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;
