import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";


const BrowseLots = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="user" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="Browse Parking Lots"
          user="Ashwi"
        />

        {/* Content */}
        <div className="p-6">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Available Parking Lots
            </h1>

            <p className="text-gray-500 mt-1">
              Find and reserve parking spaces easily
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full md:w-96 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Lots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Lot Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold text-gray-800">
                  Central Mall
                </h2>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Available
                </span>

              </div>

              <p className="text-gray-500 mt-3">
                MG Road, Bangalore
              </p>

              <div className="mt-5 space-y-2">

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Available Spots
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

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Security
                  </span>

                  <span className="font-semibold">
                    CCTV Enabled
                  </span>
                </div>

              </div>

              {/* Button */}
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Book Now
              </button>

            </div>

            {/* Lot Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold text-gray-800">
                  City Center
                </h2>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Available
                </span>

              </div>

              <p className="text-gray-500 mt-3">
                Jubilee Hills, Hyderabad
              </p>

              <div className="mt-5 space-y-2">

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Available Spots
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

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Security
                  </span>

                  <span className="font-semibold">
                    24/7 Monitoring
                  </span>
                </div>

              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Book Now
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BrowseLots;