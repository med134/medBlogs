import Article from "@/app/module/Article";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  const newBlog = new Article(body);
  try {
    await connect();
    await newBlog.save();
    return new NextResponse("post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
