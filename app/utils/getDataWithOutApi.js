import Category from "../module/Category";
import { connect } from "./ConnectMongo";

export const getCategories = async () => {
  try {
    connect();
    const cat = await Category.find();
    return cat;
  } catch (err) {
    console.log(err);
    throw new Error("Failed get category");
  }
};
