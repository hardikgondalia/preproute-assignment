import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import TestCreationSection from "../../components/testCreation/TestCreationSection";
import TestInfo from "../../components/testCreation/TestInfo";
import QuestionsSection from "../../components/testCreation/QuestionsSection";
import SchedulerSection from "../../components/testCreation/SchedulerSection";

import { TestCreationView, type TestCreationViewType } from "../../constants/testCreationView";

import useCurrentTest from "../../hooks/useCurrentTest";
import { useAppDispatch } from "../../store/hooks";
import type { RootState } from "../../store/store";
import { initializeTest } from "../../store/slice/questionSlice";
import Preview from "../../components/testCreation/Preview_Publish";

const TestCreation = () => {
  const { pathname } = useLocation();
  useCurrentTest();
  const dispatch = useAppDispatch();
  const { selectedQuestionId, testId } = useSelector((state: RootState) => state.questions);
  useEffect(() => {
    // Only initialize when opening the Questions page
    if (pathname.includes("/questions") && !selectedQuestionId && testId) {
      dispatch(initializeTest(testId));
    }
  }, [dispatch, pathname, selectedQuestionId, testId]);

  let currentView: TestCreationViewType = TestCreationView.CREATE;

  if (pathname.includes("/questions")) {
    currentView = TestCreationView.QUESTIONS;
  } else if (pathname.includes("/scheduler")) {
    currentView = TestCreationView.SCHEDULER;
  }else if(pathname.includes("/preview")){
    currentView = TestCreationView.PREVIEW;
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

      {currentView === TestCreationView.PREVIEW && (
        <div className="h-full flex flex-col gap-5">
          <Preview/>
        </div>
      )}
    </div>
  );
};

export default TestCreation;
