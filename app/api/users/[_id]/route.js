import User from "@/app/module/User";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
export const DELETE = async (request, { params }) => {
  const { _id } = params;
  try {
    await connect();
    await User.findOneAndDelete({ _id });
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
export const GET = async (request, { params }) => {
  const { _id } = params;
  try {
    await connect();
    const user = await User.findById(_id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("user not found try with another user _id", {
      status: 500,
    });
  }
};
