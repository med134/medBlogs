import connect from "@/app/utils/ConnectDB";
import { NextResponse } from "next/server";
import Email from "@/app/module/Email";
export const GET = async (request) => {
  try {
    await connect();
    const users = await Email.find();
    return new NextResponse(JSON.stringify(users, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
export const POST = async (request) => {
  const body = await request.json();
  const message = new Email(body);
  try {
    await connect();
    await message.save();
    return new NextResponse("message has been send", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
