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
      match: /.+\@.+\..+/,
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
      match: /^\+?[1-9]\d{1,14}$/,
    },
    homeAddress: {
      type: String,
    },
    skills: {
      type: [String], // Array of strings to store skills
    },
    workLinks: {
      type: [
        {
          title: { type: String }, // Title of the work link
          url: { type: String },
          image: { type: String }, // URL of the work link
        },
      ],
    },
    experience: {
      type: Number,
      default: 0,
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
