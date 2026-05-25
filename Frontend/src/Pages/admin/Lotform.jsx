import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const Lotform = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="Add Parking Lot"
          user="Ashwi"
        />

        {/* Page Content */}
        <div className="p-6">

          {/* Header */}
          <div className="mb-6 text-center">

            <h1 className="text-3xl font-bold text-gray-800">
              Create New Parking Lot
            </h1>

            <p className="text-gray-500 mt-1">
              Add a new parking location to the system
            </p>

          </div>

          {/* Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">

            <form className="space-y-6">

              {/* Lot Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parking Lot Name
                </label>

                <input
                  type="text"
                  placeholder="Enter parking lot name"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>

                <textarea
                  rows="3"
                  placeholder="Enter parking lot address"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Grid Fields */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Total Spots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Parking Spots
                  </label>

                  <input
                    type="number"
                    placeholder="Enter total spots"
                    className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Per Hour (₹)
                  </label>

                  <input
                    type="number"
                    placeholder="Enter parking fee"
                    className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parking Status
                </label>

                <select
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Create Lot
                </button>

                <button
                  type="reset"
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-400 transition"
                >
                  Reset
                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Lotform;