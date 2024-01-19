import { NextResponse } from "next/server";
import connect from "@/app/utils/ConnectDB";
import Posts from "@/app/module/Post";

export const GET = async (request, { params }) => {
  const id = params.id;
  try {
    await connect();
    const post = await Posts.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Posts.findByIdAndDelete(id);
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
export const PUT = async (request, { params }) => {
  const { id } = params;
  const body = await request.json();
  try {
    await connect();
    await Posts.findByIdAndUpdate(id, body);
    return new NextResponse("post updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
