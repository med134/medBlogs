import Blog from "@/app/module/Blog";
import connect from "@/app/utils/ConnectMongo";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newBlog = new Blog(body);
  try {
    await connect();
    await newBlog.save();
    return new NextResponse("post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
