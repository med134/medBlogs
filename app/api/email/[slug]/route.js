import connect from "@/app/utils/ConnectDB";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import Email from '@/app/module/Email'

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    await Email.findOneAndDelete({ slug });
    revalidatePath("/dashboard/messages");
    return new NextResponse("message deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};