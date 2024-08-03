import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import User from "@/app/module/User";

export const GET = async (request) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  try {
    await connect();
    const queryParams = {};
    if (name) {
      queryParams.name = name;
    }
    const users = await User.find(queryParams);
    return new NextResponse(JSON.stringify(users, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
export const PUT = async (request) => {
  const body = await request.json();
  const newUser = new User(body);
  try {
    await connect();
    await newUser.save();
    return new NextResponse("user has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
