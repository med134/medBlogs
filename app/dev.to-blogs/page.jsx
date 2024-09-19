import React from "react";
import { getDevTo } from "../utils/action";
import PaginateDev from "../components/PaginateDev";

const Dev = async () => {
  const dev = await getDevTo();

  return (
    <section className="py-44 dark:bg-dark p-16 md:p-8 md:py-24 xs:p-2 xs:mb-16">
      <div className="xs:mt-20">
        <h2 className="text-3xl px-4 md:text-3xl sm:text-xl font-extrabold xs:px-2 py-8 dark:text-light uppercase text-gray-800 inline-block">
          LATEST BLOGS :Dev Community
        </h2>
      </div>
      <PaginateDev dev={dev} />
    </section>
  );
};

export default Dev;
