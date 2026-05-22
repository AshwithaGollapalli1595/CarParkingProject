import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Landing from "./Pages/auth/Landing";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";

// Admin Pages
import AdminDashboard from "./Pages/admin/Dashboard";
import Lotform from "./Pages/admin/Lotform";
import Lots from "./Pages/admin/Lots";
import Users from "./Pages/admin/Users";

// User Pages
import UserDashboard from "./Pages/USER/Dashboard";
import BrowseLots from "./Pages/USER/BrowseLots";
import MyBookings from "./Pages/USER/MyBookings";

// Protected Route
import ProtectedRoute from "./Components/layout/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/lots"
          element={
            <ProtectedRoute role="admin">
              <Lots />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/lotform"
          element={
            <ProtectedRoute role="admin">
              <Lotform />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <Users />
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/browselots"
          element={
            <ProtectedRoute role="user">
              <BrowseLots />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/bookings"
          element={
            <ProtectedRoute role="user">
              <MyBookings />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;