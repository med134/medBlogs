import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_TWO);
  } catch (err) {
    throw new Error("connection failed !");
  }
};
export default connect;
