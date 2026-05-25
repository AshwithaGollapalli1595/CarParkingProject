import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="user" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="User Dashboard"
          user="Ashwitha G"
        />

        {/* Dashboard Content */}
        <div className="p-6">

          {/* Welcome Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your bookings and browse available parking lots easily.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-gray-500 text-sm">
                Total Bookings
              </h2>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                12
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-gray-500 text-sm">
                Active Parking
              </h2>

              <p className="text-3xl font-bold text-green-600 mt-2">
                1
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-gray-500 text-sm">
                Total Spent
              </h2>

              <p className="text-3xl font-bold text-purple-600 mt-2">
                ₹2400
              </p>
            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-md mt-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="border-b pb-3">
                <p className="font-medium text-gray-700">
                  Booked parking at Central Mall
                </p>

                <span className="text-sm text-gray-500">
                  2 hours ago
                </span>
              </div>

              <div className="border-b pb-3">
                <p className="font-medium text-gray-700">
                  Released parking slot
                </p>

                <span className="text-sm text-gray-500">
                  Yesterday
                </span>
              </div>

              <div>
                <p className="font-medium text-gray-700">
                  New booking successful
                </p>

                <span className="text-sm text-gray-500">
                  3 days ago
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;