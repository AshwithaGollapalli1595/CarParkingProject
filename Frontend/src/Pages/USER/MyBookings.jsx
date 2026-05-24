import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const MyBookings = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="user" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="My Bookings"
          user="Ashwi"
        />

        {/* Content */}
        <div className="p-6">

          {/* Heading */}
          <div className="mb-6">

            <h1 className="text-3xl font-bold text-gray-800">
              Booking History
            </h1>

            <p className="text-gray-500 mt-1">
              Track your active and previous parking reservations
            </p>

          </div>

          {/* Booking Cards */}
          <div className="space-y-6">

            {/* Booking Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Left Section */}
                <div>

                  <h2 className="text-2xl font-bold text-gray-800">
                    Central Mall Parking
                  </h2>

                  <p className="text-gray-500 mt-2">
                    MG Road, Bangalore
                  </p>

                  <div className="mt-4 space-y-1">

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Slot:
                      </span>{" "}
                      A-12
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Booking Time:
                      </span>{" "}
                      10:00 AM
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Duration:
                      </span>{" "}
                      3 Hours
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Cost:
                      </span>{" "}
                      ₹150
                    </p>

                  </div>

                </div>

                {/* Right Section */}
                <div className="flex flex-col items-start md:items-end gap-4">

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">
                    Active
                  </span>

                  <button className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition">
                    Release Spot
                  </button>

                </div>

              </div>

            </div>

            {/* Booking Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Left */}
                <div>

                  <h2 className="text-2xl font-bold text-gray-800">
                    City Center Parking
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Hyderabad
                  </p>

                  <div className="mt-4 space-y-1">

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Slot:
                      </span>{" "}
                      B-08
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Booking Time:
                      </span>{" "}
                      Yesterday
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Duration:
                      </span>{" "}
                      2 Hours
                    </p>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Cost:
                      </span>{" "}
                      ₹140
                    </p>

                  </div>

                </div>

                {/* Right */}
                <div className="flex flex-col items-start md:items-end gap-4">

                  <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                    Completed
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyBookings;