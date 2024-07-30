import React from 'react';

const SkeletonLoader = ({indexUser}) => {
  return (
    <table className="w-full">
      <tbody>
        {[indexUser].map((_, index) => (
          <tr
            key={index}
            className="p-2 px-4 py-2 max-w-full justify-between items-center border border-gray-100 animate-pulse"
          >
            <td className="p-2 flex justify-center items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="ml-4 h-6 w-32 bg-gray-300 rounded"></div>
            </td>
            <td className="bg-white px-5 text-sm">
              <div className="h-6 w-48 bg-gray-300 rounded"></div>
            </td>
            <td>
              <div className="h-6 w-24 bg-gray-300 rounded"></div>
            </td>
            <td className="flex space-x-2 p-2">
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkeletonLoader;
