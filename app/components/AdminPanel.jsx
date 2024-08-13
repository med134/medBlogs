import React from "react";
import { RiArticleLine } from "react-icons/ri";

const AdminPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-between items-center mb-6 bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div>
          <div className="flex items-center mb-1">
            <p className="text-2xl font-semibold">2</p>
          </div>
          <div className="text-sm font-medium text-gray-400">Users</div>
        </div>
        <RiArticleLine className="fill-white w-6 h-6" />
      </div>
    </div>
  );
};

export default AdminPanel;
