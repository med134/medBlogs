import { NextResponse } from "next/server";
import connect from "@/app/utils/ConnectDB";
import Posts from "@/app/module/Post";

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
    await Posts.findByIdAndDelete(id);
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newImage: image,
    newLink: link,
    newCategory: category,
    newCode: code,
  } = await request.json();
  await connect();
  await Posts.findByIdAndUpdate(id, {
    title,
    description,
    image,
    link,
    category,
    code,
  });
  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}
