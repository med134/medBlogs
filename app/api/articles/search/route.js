import Article from "@/app/module/Article";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  console.log("search query", query);
  try {
    await connect();
    const articles = await Article.find();
    const filterArticles = articles.filter((item) => {
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    return new NextResponse(JSON.stringify(filterArticles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
