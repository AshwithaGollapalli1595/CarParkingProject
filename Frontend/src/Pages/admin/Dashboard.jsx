import Sidebar from "../../Components/layout/Sidebar";
import Navbar from "../../Components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">

      <Sidebar role="admin" />

      <div className="flex-1">

        <Navbar
          title="Admin Dashboard"
          user="Ashwi"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold">
            Dashboard Content
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;