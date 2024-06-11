import { NextResponse } from "next/server";
import connect from "@/app/utils/ConnectDB";
import Posts from "@/app/module/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Posts.find(username && { username }).sort({
      createAt: 1,
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Posts(body);
  try {
    await connect();
    await newPost.save();
    return new NextResponse("post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
