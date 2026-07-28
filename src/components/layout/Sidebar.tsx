import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r">

      <nav className="flex flex-col p-4 gap-2">

        <Link
          to="/dashboard"
          className="rounded p-3 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          to="/test-creation"
          className="rounded p-3 hover:bg-gray-100"
        >
          Test Creation
        </Link>

      </nav>

    </aside>
  );
};

export default Sidebar;