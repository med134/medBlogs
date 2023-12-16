import { NextResponse } from "next/server";
import Posts from "@/app/modules/Post";
import connect from "@/app/utils/ConnectDB";

export const GET = async (request, { params }) => {
  const { id } = params;
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
     await Posts.findByIdAndDelete(id)
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};

