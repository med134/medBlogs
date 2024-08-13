import React from "react";

const AdminPanel = () => {
  return (
    <div>
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div className="flex justify-between mb-6">
          <div>
            <div className="flex items-center mb-1">
              <div className="text-2xl font-semibold">2</div>
            </div>
            <div className="text-sm font-medium text-gray-400">Users</div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle text-gray-400 hover:text-gray-600"
            >
              <i className="ri-more-fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
