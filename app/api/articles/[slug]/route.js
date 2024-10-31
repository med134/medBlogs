import Article from "@/app/module/Article";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";


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
