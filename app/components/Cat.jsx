"use client";
import useSWR from "swr";
import Link from "next/link";
import Skeleton from "./Skeleton ";

const Cat = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(`/api/categories`, fetcher);

  return (
    <>
      <span className="font-os text-lg font-bold py-3 dark:text-light">
        Categories
      </span>
      {isLoading ? (
        <Skeleton />
      ) : (
        data?.map((item) => (
          <ul key={item._id} className="inline-flex items-start">
            <li className="flex mx-1">
              <Link
                className="p-2 px-3 border-red-500 mb-1 rounded font-medium hover:bg-transparent hover:border-red-600 border bg-red-400/25 dark:bg-purple text-red-800 dark:text-light"
                href={`/category/${item.value}`}
              >
                {item?.label}
              </Link>
            </li>
          </ul>
        ))
      )}
    </>
  );
};

export default Cat;
