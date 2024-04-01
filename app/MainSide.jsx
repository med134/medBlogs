import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { getAllCat } from "./components/FetchData";


const Cat = async () => {
  const cat = await getAllCat();
  return (
    <div className="">
      {cat?.map(
        (item, index) =>
          index > 0 && (
            <>
              <div
                key={item._id}
                className="group flex justify-between items-center py-1 mt-3"
              >
                <Link
                  className="px-4 font-semibold text-gray-700 group-hover:text-mainColor group-hover:font-bold"
                  href={`/category/${item.label}`}
                >
                  {item.label}
                </Link>
                <AiOutlineRight className="group group-hover:text-mainColor group-hover:font-bold" />
              </div>
              <div className="h-[1px] mb-4 bg-slate-400"></div>
            </>
          )
      )}
    </div>
  );
};

export default Cat;
