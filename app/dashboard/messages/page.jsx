import React from "react";
import { FormatDate, getMessages } from "@/app/utils/action";

const page = async () => {
  const message = await getMessages();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Messages</h1>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          {message?.map((item) => (
            <div className="p-4 mb-4 bg-slate-300 shadow-md" key={item._id}>
              <tr className="p-4  px-4 py-2 max-w-full flex justify-between items-center border border-gray-100">
                <td className="p-2">
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                </td>
                <td className="px-5 text-sm">
                  <p className="text-gray-600 px-4">{item.email}</p>
                </td>
                <td>
                  <p className="text-sm px-5">{FormatDate(item.createdAt)}</p>
                </td>
              </tr>
              <p className="p-4">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
