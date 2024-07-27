import React from "react";

const SkeletonLoader = () => {
  return (
    <table className="w-full">
      <tbody>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <tr
            key={index}
            className="p-2 px-4 py-2 justify-between items-center border border-gray-100 animate-pulse"
          >
            <td className="p-2 flex justify-center items-center">
              <div className="ml-4 h-6 w-48 bg-gray-300 rounded"></div>
            </td>
            <td className="bg-white px-5 text-sm">
              <div className="h-6 w-36 bg-gray-300 rounded"></div>
            </td>
            <td>
              <div className="h-6 w-24 bg-gray-300 rounded"></div>
            </td>
            <td className="flex ml-6 space-x-6 p-2">
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkeletonLoader;
