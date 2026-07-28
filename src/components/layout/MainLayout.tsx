import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">

      <Header />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MainLayout;