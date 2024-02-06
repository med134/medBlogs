import React from "react";
import Link from "next/link";
import PageNotFound from "@/app/PageNotFound";
const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <PageNotFound />;
  }

  return res.json();
};

const CategoryTaskBar = async () => {
  const data = await getData();
  return (
    <div className="">
      <ul className="flex justify-around items-center bg-light py-2 overflow-hidden">
        {data?.map(
          (item, index) =>
            index > 0 && (
              <Link
                className="category-task-bar rounded-lg py-2 px-4 text-dark font-bold"
                key={item._id}
                href={`/category/${item.value}`}
              >
                #{item.label}
              </Link>
            )
        )}
      </ul>
    </div>
  );
};

export default CategoryTaskBar;
