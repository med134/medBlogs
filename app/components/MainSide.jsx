import React, { useMemo } from "react";
import Link from "next/link";

const MainSide = ({ posts }) => {
  const categoryCounts = useMemo(() => {
    const counts = {};

    // Counting posts for each category
    posts.forEach((post) => {
      const category = post.category; // Assuming each post has a 'category' property
      counts[category] = (counts[category] || 0) + 1;
    });

    return counts;
  }, [posts]);

  return (
    <div className="block mt-3">
      {Object.entries(categoryCounts).map(([category, count]) => (
        <>
          <div
            key={category}
            className="flex justify-between items-center py-1"
          >
            <Link
              className="px-4 font-semibold text-gray-700 hover:text-mainColor hover:font-bold xl:px-1"
              href={`/category/${category}`}
            >
              {category}
            </Link>
            <span className="font-bold text-gray-700">{count}</span>
          </div>
          <div className="h-[1px] mb-4 bg-slate-400"></div>
        </>
      ))}
    </div>
  );
};

export default MainSide;
