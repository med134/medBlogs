import React from "react";
import Image from "next/image";

export async function FirstBlog() {
  return (
    <div className="px-16 py-4">
      <span className="text-xl font-bold text-red-600">Categories</span>
      {category.map((item) => {
        <div key={item._id} className="flex justify-center">
          <Image
            alt="cat_photo"
            src={item.image}
            width={100}
            height={100}
            className="w-24 h-24 rounded-full"
          />
          <p>{item.label}</p>
        </div>;
      })}
    </div>
  );
}
