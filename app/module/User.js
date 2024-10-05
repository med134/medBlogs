import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    job: {
      type: String,
      required: false,
    },
    userSlug: {
      type: String,
    },
    phone: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    skills: {
      type: [String], // Array of strings to store skills
    },
    workLinks: {
      type: {
        github: { type: String },
        website: { type: String },
        linkedin: { type: String },
      }, // Object to store different types of work links
    },
    experience: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
module.exports = mongoose.models?.users || mongoose.model("users", userSchema);
