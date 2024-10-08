import User from "@/app/module/User";
import connect from "@/app/utils/ConnectDB";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { userSlug } = params;
  try {
    await connect();
    await User.findOneAndDelete({ userSlug });
    revalidatePath("/dashboard/users");
    return new NextResponse("user deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
export const GET = async (request, { params }) => {
  const { userSlug } = params;
  try {
    await connect();
    const user = await User.findOne({ userSlug });
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("user not found try with another user _id", {
      status: 500,
    });
  }
};
export const PUT = async (request, { params }) => {
  const { userSlug } = params;
  const body = await request.json();
  try {
    await connect();
    await User.findOneAndUpdate({ userSlug }, body);
    return new NextResponse("profile updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
