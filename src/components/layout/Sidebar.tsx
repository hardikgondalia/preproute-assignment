import { Link, useLocation } from "react-router-dom";
import useBreadcrumb from "../../contexts/useBreadcrumb";
import QuestionsSidebar from "./QuestionsSidebar";

const Sidebar = () => {
  const { setBreadcrumb } = useBreadcrumb();
  const location = useLocation();
  const showQuestionSidebar = /^\/test-creation\/[^/]+\/(questions|scheduler)$/.test(location.pathname);
  return (
    <aside className="w-60 bg-white border-r border-[#E5E7EB]">
      <div className="w-full px-5.5 pt-6 pb-11.5">
        <a href="" className="flex items-center w-42.5 h-10.25">
          <img src="/images/logo.svg" alt="" className="w-full h-full" />
        </a>
      </div>

      {showQuestionSidebar ? (
        <QuestionsSidebar />
      ) : (
        <nav className="flex flex-col gap-1.25 px-1.5">
          <Link
            to="/dashboard"
            className="py-2.75 px-4 flex items-center gap-2.25 font-medium text-[#6B7180] hover:bg-[#F8FAFF] transition-colors duration-300"
            onClick={() => {
              setBreadcrumb({
                menu: "Dashboard",
                page: "",
                tab: "",
              });
            }}
          >
            <img src="/images/dashboard.svg" alt="" className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/test-creation"
            className="rounded py-2.75 px-4 flex items-center gap-2.25 font-medium text-[#6B7180] hover:bg-[#F8FAFF] transition-colors duration-300"
            onClick={() => {
              setBreadcrumb({
                menu: "Test Creation",
                page: "Create Test",
                tab: "Chapter Wise",
              });
            }}
          >
            <img src="/images/edit-active.svg" alt="" className="w-5 h-5" />
            <span>Test Creation</span>
          </Link>

          <Link
            to="/test-tracking"
            className="rounded py-2.75 px-4 flex items-center gap-2.25 font-medium text-[#6B7180] hover:bg-[#F8FAFF] transition-colors duration-300"
          >
            <img src="/images/test.svg" alt="" className="w-5 h-5" />
            <span>Test Tracking</span>
          </Link>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
