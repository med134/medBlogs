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
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
const User = mongoose.model.users || mongoose.model("users", userSchema);
export default User;
