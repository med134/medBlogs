import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import Article from "@/app/module/Article";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  const category = url.searchParams.get("category");

  try {
    await connect();
    const query = {};

    if (username) {
      query.username = username;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    const articles = await Article.find(query).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
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
