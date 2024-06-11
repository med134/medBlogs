import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import Category from "@/app/module/Category";

export const GET = async () => {
  try {
    await connect();
    const categories = await Category.find().sort({ slug: 1 });
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
