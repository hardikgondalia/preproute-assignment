import TestCreationSection from "../../components/testCreation/TestCreationSection";
import TestInfo from "../../components/testCreation/TestInfo";
import QuestionsSection from "../../components/testCreation/QuestionsSection";
import SchedulerSection from "../../components/testCreation/SchedulerSection";
import { TestCreationView, type TestCreationViewType } from "../../constants/testCreationView";
import { useLocation, } from "react-router-dom";
import useCurrentTest from "../../hooks/useCurrentTest";

const TestCreation = () => {
  const { pathname } = useLocation();
  useCurrentTest();
  let currentView: TestCreationViewType = TestCreationView.CREATE;
  if (pathname.includes("/questions")) {
    currentView = TestCreationView.QUESTIONS;
  } else if (pathname.includes("/scheduler")) {
    currentView = TestCreationView.SCHEDULER;
  }

  return (
    <div className="h-full w-full overflow-hidden">
      {currentView === TestCreationView.CREATE && <TestCreationSection />}

      {currentView === TestCreationView.QUESTIONS && (
        <div className="h-full flex flex-col gap-5">
          <TestInfo />
          <QuestionsSection />
        </div>
      )}

      {currentView === TestCreationView.SCHEDULER && (
        <div className="h-full flex flex-col gap-5">
          <TestInfo />
          <SchedulerSection />
        </div>
      )}
    </div>
  );
};

export default TestCreation;
