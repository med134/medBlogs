import React from "react";
import { ContactMenu } from "./ProjectArrays";

const CategoryCard = () => {
  return (
    <div className="w-full flex justify-between items-start mb-4 sm:mb-2">
      {ContactMenu.map((item) => {
        const LinkIcon = item.icon;
        return (
          <a
            key={item.name}
            href={item.link}
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            name={item.ariaLabel}
            className={item.className}
          >
            <LinkIcon size={24} className="text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default CategoryCard;
