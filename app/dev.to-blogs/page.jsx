import React from "react";
import { getDevTo } from "../utils/action";
import PaginateDev from "../components/PaginateDev";

const Dev = async () => {
  const dev = await getDevTo();

  return (
    <section className="py-44 dark:bg-dark p-16 md:p-8 md:py-24 xs:py-20 xs:mb-16 xs:p-1">
      <h1 className="text-3xl px-6 md:text-3xl xs:text-xl xs:px-10 font-extrabold py-8 dark:text-light uppercase text-gray-800 inline-block">
        LATEST BLOGS :Dev Community
      </h1>
      <PaginateDev dev={dev} />
    </section>
  );
};

export default Dev;
