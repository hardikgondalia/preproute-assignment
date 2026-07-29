import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-[calc(100%-240px)] h-screen flex flex-col">
          <Header />
          <main className="w-full h-[calc(100%-93px)] flex flex-col gap-5 py-6 px-5 overflow-hidden">
            <Breadcrumb />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;