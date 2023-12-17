import React from "react";
import Link from "next/link";
import BlogLoading from "./BlogLoading";
import { getDevTo } from "./FetchData";

const SideBar = async () => {
  const post = await getDevTo();

  /* const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.5,
        delay: 2, // Delay between each child
      },
    },
  }; */
  return (
    <section>
      {post?.map((item, index) =>
        index < 6 ? (
          <div
            key={item.id}
            className="mt-3 bg-white dark:bg-dark shadow-md p-3 border border-b-gray-500 dark:border-b-light"
          >
            <p className="text-xl font-semibold text-gray-800 dark:text-light">
              {item.title}
            </p>
            <p className="mt-1 text-sm mb-2 text-gray-500 dark:text-light">
              {item.description}
            </p>

            <p className="mt-1 text-sm ml-2 mb-2 underline text-gray-900 font-semibold dark:text-light">
              #{item.tags}
            </p>

            <Link
              href={item.url}
              target="_blank"
              className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
            >
              Read more...
            </Link>
          </div>
        ) : null
      )}
    </section>
  );
};

export default SideBar;
