import React from "react";
const FilterTemplates = ({ handleTagClick,seAttCat }) => { 
  return (
    <div className="filter templates">
      <div className="container mx-auto px-10 sm:px-2">
        <div className="p-6">
          <span className="text-lg font-semibold mb-4">Categories Cloud</span>

          <div className="flex flex-wrap gap-2 pt-4">
            <button
              onClick={seAttCat}
              className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              All Templates
            </button>
            <button
              onClick={() => handleTagClick("Landing")}
              className="bg-blue-200 hover:bg-blue-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Landing
            </button>
            <button
              onClick={() => handleTagClick("Ecommerce")}
              className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Ecommerce
            </button>

            <button
              onClick={() => handleTagClick("Card")}
              className="bg-indigo-200 hover:bg-indigo-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Card
            </button>
            <button
              onClick={() => handleTagClick("Marketing")}
              className="bg-purple-200 hover:bg-purple-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Marketing
            </button>
            <button
              onClick={() => handleTagClick("Dashboard")}
              className="bg-pink-200 hover:bg-pink-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Dashboard
            </button>
            <button
              onClick={() => handleTagClick("Business")}
              className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Business
            </button>
            <button
              onClick={() => handleTagClick("Elearning")}
              className="bg-yellow-200 hover:bg-yellow-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              Elearning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTemplates;
