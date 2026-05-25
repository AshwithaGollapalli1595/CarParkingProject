import React from "react";

import Sidebar from "../../Components/Layout/Sidebar";
import Navbar from "../../Components/Layout/Navbar";
import StatCard from "../../Components/Ui/Statcard";

const AdminDashboard = () => {

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="Admin Dashboard"
          user="admin"
        />

        {/* Page Content */}
        <div className="p-6">

          {/* Heading */}
          <div className="mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor parking lots, users, and bookings
            </p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <StatCard
              title="Total Users"
              value="1,245"
              color="#2563EB"
            />

            <StatCard
              title="Parking Lots"
              value="18"
              color="#16A34A"
            />

            <StatCard
              title="Active Bookings"
              value="324"
              color="#9333EA"
            />

            <StatCard
              title="Revenue Today"
              value="₹24,500"
              color="#EA580C"
            />

          </div>

          {/* Recent Activity + Quick Info */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Recent Bookings */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Recent Bookings
              </h2>

              <div className="space-y-4">

                {/* Booking Item */}
                <div className="flex items-center justify-between border-b pb-3">

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Ashwitha
                    </h3>

                    <p className="text-sm text-gray-500">
                      Central Mall Parking
                    </p>
                  </div>

                  <span className="text-green-600 font-semibold">
                    Confirmed
                  </span>

                </div>

                {/* Booking Item */}
                <div className="flex items-center justify-between border-b pb-3">

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Rahul
                    </h3>

                    <p className="text-sm text-gray-500">
                      City Center Parking
                    </p>
                  </div>

                  <span className="text-yellow-600 font-semibold">
                    Pending
                  </span>

                </div>

                {/* Booking Item */}
                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Sneha
                    </h3>

                    <p className="text-sm text-gray-500">
                      Metro Parking Zone
                    </p>
                  </div>

                  <span className="text-green-600 font-semibold">
                    Confirmed
                  </span>

                </div>

              </div>

            </div>

            {/* Parking Status */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Parking Status
              </h2>

              <div className="space-y-5">

                {/* Parking Item */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span className="text-gray-700 font-medium">
                      Central Mall
                    </span>

                    <span className="text-sm text-gray-500">
                      45 / 60 occupied
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>
                  </div>

                </div>

                {/* Parking Item */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span className="text-gray-700 font-medium">
                      City Center
                    </span>

                    <span className="text-sm text-gray-500">
                      80 / 100 occupied
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-green-600 h-3 rounded-full w-4/5"></div>
                  </div>

                </div>

                {/* Parking Item */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span className="text-gray-700 font-medium">
                      Metro Zone
                    </span>

                    <span className="text-sm text-gray-500">
                      25 / 50 occupied
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-purple-600 h-3 rounded-full w-1/2"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;