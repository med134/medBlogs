import User from "@/app/module/User";
import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, imageUrl, userSlug, job, phone, homeAddress } =
    await req.json();
  await connect();
  const newUser = new User({
    name,
    email,
    imageUrl,
    job,
    userSlug,
    phone,
    homeAddress,
  });
  try {
    await newUser.save();
    return new NextResponse("user has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
