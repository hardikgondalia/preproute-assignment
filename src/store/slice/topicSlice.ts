import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getTopicBySubject } from "../../services/task.service";

export interface Topic {
  id: string;
  name: string;
  subject_id: string;
  disabled?: boolean;
}

interface TopicState {
  topicsBySubject: Record<string, Topic[]>;
  loadingBySubject: Record<string, boolean>;
  loadedBySubject: Record<string, boolean>;
  errorBySubject: Record<string, string | null>;
}

const initialState: TopicState = {
  topicsBySubject: {},
  loadingBySubject: {},
  loadedBySubject: {},
  errorBySubject: {},
};

export const fetchTopics = createAsyncThunk<
  { subjectId: string; topics: Topic[] },
  string,
  { state: RootState; rejectValue: string }
>(
  "topic/fetchTopics",
  async (subjectId, { getState, rejectWithValue }) => {
    const { topic } = getState();

    // Return cached data if already loaded
    if (topic.loadedBySubject[subjectId]) {
      return {
        subjectId,
        topics: topic.topicsBySubject[subjectId] ?? [],
      };
    }

    try {
      const response: any = await getTopicBySubject(subjectId);

      return {
        subjectId,
        topics: response.data ?? [],
      };
    } catch (error: any) {
      return rejectWithValue(
        error?.message ?? "Failed to fetch topics."
      );
    }
  }
);

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    clearTopics(state) {
      state.topicsBySubject = {};
      state.loadingBySubject = {};
      state.loadedBySubject = {};
      state.errorBySubject = {};
    },

    clearTopicsBySubject(state, action) {
      const subjectId = action.payload;

      delete state.topicsBySubject[subjectId];
      delete state.loadingBySubject[subjectId];
      delete state.loadedBySubject[subjectId];
      delete state.errorBySubject[subjectId];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state, action) => {
        const subjectId = action.meta.arg;

        state.loadingBySubject[subjectId] = true;
        state.errorBySubject[subjectId] = null;
      })

      .addCase(fetchTopics.fulfilled, (state, action) => {
        const { subjectId, topics } = action.payload;

        state.loadingBySubject[subjectId] = false;
        state.loadedBySubject[subjectId] = true;
        state.topicsBySubject[subjectId] = topics;
      })

      .addCase(fetchTopics.rejected, (state, action) => {
        const subjectId = action.meta.arg;

        state.loadingBySubject[subjectId] = false;
        state.errorBySubject[subjectId] =
          action.payload ?? "Failed to fetch topics.";
      });
  },
});

export const { clearTopics, clearTopicsBySubject } = topicSlice.actions;

export const selectTopicsBySubject =
  (subjectId: string) => (state: RootState) =>
    state.topic.topicsBySubject[subjectId] ?? [];

export const selectTopicsLoading =
  (subjectId: string) => (state: RootState) =>
    state.topic.loadingBySubject[subjectId] ?? false;

export const selectTopicsLoaded =
  (subjectId: string) => (state: RootState) =>
    state.topic.loadedBySubject[subjectId] ?? false;

export const selectTopicsError =
  (subjectId: string) => (state: RootState) =>
    state.topic.errorBySubject[subjectId] ?? null;

export default topicSlice.reducer;