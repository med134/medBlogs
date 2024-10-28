import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: false,
    },
    name: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    job: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      match: /^\+?[1-9]\d{1,14}$/,
    },
    homeAddress: {
      type: String,
    },
    skills: {
      type: [String],
      default: [], // Array of strings to store skills
    },
    workLinks: [
      {
        title: { type: String }, // Title of the work link
        url: { type: String },
        image: {
          type: String,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
module.exports = mongoose.models?.users || mongoose.model("users", userSchema);
