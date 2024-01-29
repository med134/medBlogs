import Article from "@/app/module/Article";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    const articles = await Article.findOne({ slug });
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    await Article.findOneAndDelete({ slug });
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
export const PUT = async (request, { params }) => {
  const { slug } = params;
  const body = await request.json();
  try {
    await connect();
    await Article.findOneAndUpdate({slug}, body);
    return new NextResponse("article updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
