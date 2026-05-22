import { Link } from "react-router-dom";

const Sidebar = ({ role = "admin" }) => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10">
        ParkEase
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-col gap-4">

        {/* Admin Links */}
        {role === "admin" && (
          <>
            <Link
              to="/admin/dashboard"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/lots"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Lots
            </Link>

            <Link
              to="/admin/lotform"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Add Lot
            </Link>

            <Link
              to="/admin/users"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Users
            </Link>
          </>
        )}

        {/* User Links */}
        {role === "user" && (
          <>
            <Link
              to="/user/dashboard"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Dashboard
            </Link>

            <Link
              to="/user/browselots"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              Browse Lots
            </Link>

            <Link
              to="/user/bookings"
              className="hover:bg-gray-700 p-3 rounded-lg transition"
            >
              My Bookings
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;