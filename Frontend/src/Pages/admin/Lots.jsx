import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const Lots = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Section */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="Parking Lots"
          user="Ashwi"
        />

        {/* Content */}
        <div className="p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Manage Parking Lots
              </h1>

              <p className="text-gray-500 mt-1">
                View and manage all parking areas
              </p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition">
              + Add Lot
            </button>
          </div>

          {/* Lots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Lot Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Central Mall
                </h2>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <p className="text-gray-500 mt-3">
                MG Road, Bangalore
              </p>

              <div className="mt-5 space-y-2">

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Total Spots
                  </span>

                  <span className="font-semibold">
                    120
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Available
                  </span>

                  <span className="font-semibold text-green-600">
                    45
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Price / hour
                  </span>

                  <span className="font-semibold">
                    ₹50
                  </span>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">

                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Edit
                </button>

                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>

              </div>
            </div>

            {/* Lot Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  City Center
                </h2>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <p className="text-gray-500 mt-3">
                Jubilee Hills, Hyderabad
              </p>

              <div className="mt-5 space-y-2">

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Total Spots
                  </span>

                  <span className="font-semibold">
                    200
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Available
                  </span>

                  <span className="font-semibold text-green-600">
                    80
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Price / hour
                  </span>

                  <span className="font-semibold">
                    ₹70
                  </span>
                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Edit
                </button>

                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Lots;