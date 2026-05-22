import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">

        <h1 className="text-2xl font-bold text-blue-600">
          ParkEase
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 max-w-4xl leading-tight">
          Smart Vehicle Parking Management System
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Easily browse parking lots, reserve slots, manage bookings,
          and monitor parking availability through a modern dashboard.
        </p>

        <div className="flex gap-4 mt-10">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition text-lg font-medium"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-gray-400 px-8 py-3 rounded-xl hover:bg-gray-200 transition text-lg font-medium"
          >
            Login
          </Link>

        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            Easy Booking
          </h2>

          <p className="text-gray-600">
            Reserve parking slots quickly with a simple and user-friendly interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            Real-Time Availability
          </h2>

          <p className="text-gray-600">
            View available parking spots instantly and avoid unnecessary waiting.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            Admin Dashboard
          </h2>

          <p className="text-gray-600">
            Manage parking lots, monitor bookings, and analyze parking usage efficiently.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing;