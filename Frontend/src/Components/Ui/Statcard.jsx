// src/Components/ui/StatCard.jsx

import React from "react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between hover:shadow-xl transition duration-300">
      
      <div>
        <h3 className="text-gray-500 text-sm font-medium">
          {title}
        </h3>

        <h1 className="text-3xl font-bold mt-2 text-gray-800">
          {value}
        </h1>
      </div>

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl ${color}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;