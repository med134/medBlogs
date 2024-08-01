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
      unique: false,
    },
    job: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    homeAddress: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
module.exports = mongoose.models.users || mongoose.model("users", userSchema);
