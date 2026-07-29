import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slice/subjectSlice"
import topicReducer from "./slice/topicSlice"
import currentTestReducer from "./slice/currentTestSlice"

export const store = configureStore({
  reducer: {
    subject : subjectReducer,
    topic : topicReducer,
    currentTest: currentTestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;