import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">


      <div className="flex flex-1">

        <Sidebar />

        <div className="w-full flex flex-col">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>

      </div>

    </div>
  );
};

export default MainLayout;