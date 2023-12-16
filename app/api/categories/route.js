import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import Category from "@/app/module/Categories";

export const GET = async () => {
  try {
    await connect();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


