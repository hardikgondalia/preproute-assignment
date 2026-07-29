import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getTestById } from "../services/task.service";
import type { ApiResponse } from "../services/interfaces/common";
import { setCurrentTest, setCurrentTestError, setCurrentTestLoading } from "../store/slice/currentTestSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useCurrentTest = () => {
  const { testId } = useParams();
  const dispatch = useAppDispatch();
  const currentTestState = useAppSelector((state) => state.currentTest);

  useEffect(() => {
    if (!testId) return;
    if (currentTestState.data?.id === testId) return;
    const fetchTest = async () => {
      try {
        dispatch(setCurrentTestLoading(true));
        const response = (await getTestById(testId)) as ApiResponse;
        dispatch(setCurrentTest(response.data));
      } catch {
        dispatch(setCurrentTestError("Unable to load test."));
      } finally {
        dispatch(setCurrentTestLoading(false));
      }
    };
    fetchTest();
  }, [testId, currentTestState.data?.id, dispatch]);
  return currentTestState;
};
export default useCurrentTest;
