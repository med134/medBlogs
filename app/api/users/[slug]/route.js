import User from "@/app/module/User";
import connect from "@/app/utils/ConnectDB";
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
