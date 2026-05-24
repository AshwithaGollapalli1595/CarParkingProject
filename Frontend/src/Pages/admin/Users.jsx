import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const Users = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar
          title="Users"
          user="Ashwi"
        />

        {/* Page Content */}
        <div className="p-6">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Registered Users
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor all users in the parking system
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <table className="w-full">

              {/* Table Head */}
              <thead className="bg-gray-200 text-gray-700">

                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Role</th>
                  <th className="text-left p-4">Bookings</th>
                  <th className="text-left p-4">Status</th>
                </tr>

              </thead>

              {/* Table Body */}
              <tbody>

                <tr className="border-b hover:bg-gray-50">

                  <td className="p-4 font-medium">
                    Rahul Sharma
                  </td>

                  <td className="p-4 text-gray-600">
                    rahul@gmail.com
                  </td>

                  <td className="p-4">
                    User
                  </td>

                  <td className="p-4">
                    12
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </td>

                </tr>

                <tr className="border-b hover:bg-gray-50">

                  <td className="p-4 font-medium">
                    Sneha Reddy
                  </td>

                  <td className="p-4 text-gray-600">
                    sneha@gmail.com
                  </td>

                  <td className="p-4">
                    User
                  </td>

                  <td className="p-4">
                    7
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </td>

                </tr>

                <tr className="hover:bg-gray-50">

                  <td className="p-4 font-medium">
                    Admin
                  </td>

                  <td className="p-4 text-gray-600">
                    admin@parking.com
                  </td>

                  <td className="p-4">
                    Admin
                  </td>

                  <td className="p-4">
                    —
                  </td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      System
                    </span>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Users;