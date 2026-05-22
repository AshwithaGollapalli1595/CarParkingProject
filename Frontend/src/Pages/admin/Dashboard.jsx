import Sidebar from "../../Components/layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      
      <Sidebar role="admin" />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>
      </div>

    </div>
  );
};

export default Dashboard;