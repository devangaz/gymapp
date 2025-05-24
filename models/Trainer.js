import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Trainer name is required"],
      trim: true,
    },
    age: {
      type: Number,
      min: [18, "Trainer must be at least 18 years old"],
      required: [true, "Trainer age is required"],
    },
    specialty: {
      type: String,
      required: [true, "Specialty is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address",
      ],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export default mongoose.model("Trainer", trainerSchema);
