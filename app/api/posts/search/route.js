import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import Posts from "@/app/module/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  console.log("search query", query);
  try {
    await connect();
    const posts = await Posts.find();
    const filterPosts = posts.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });

    return new NextResponse(JSON.stringify(filterPosts), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
