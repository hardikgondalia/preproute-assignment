import { useState } from "react";
import TestCreationSection from "../../components/testCreation/TestCreationSection";
import TestInfo from "../../components/testCreation/TestInfo";
import QuestionsSection from "../../components/testCreation/QuestionsSection";
import SchedulerSection from "../../components/testCreation/SchedulerSection";
import { TestCreationView, type TestCreationViewType } from "../../constants/testCreationView";

const TestCreation = () => {
  const [currentView] = useState<TestCreationViewType>(
    // TestCreationView.CREATE
    // TestCreationView.QUESTIONS
    TestCreationView.SCHEDULER
  );

  return (
    <div className="h-full w-full">
      {currentView === TestCreationView.CREATE && (
        <TestCreationSection />
      )}

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