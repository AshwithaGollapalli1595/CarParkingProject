const Navbar = ({ title = "Dashboard", user = "Ashwi" }) => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* User Info */}
        <div className="text-right">
          <p className="text-sm text-gray-500">
            Welcome
          </p>

          <h2 className="font-semibold text-gray-800">
            {user}
          </h2>
        </div>

        {/* Profile Circle */}
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          {user.charAt(0)}
        </div>

        {/* Logout Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;