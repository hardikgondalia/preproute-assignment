import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getAllSubjects } from "../../services/task.service";

export interface Subject {
  id: string;
  name: string;
}

interface SubjectState {
  items: Subject[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialState: SubjectState = {
  items: [],
  loading: false,
  loaded: false,
  error: null,
};

export const fetchSubjects = createAsyncThunk<
  Subject[],
  void,
  { state: RootState; rejectValue: string }
>(
  "subject/fetchSubjects",
  async (_, { getState, rejectWithValue }) => {
    const { subject } = getState();

    // Don't call API again if already loaded
    if (subject.loaded) {
      return subject.items;
    }

    try {
      const response: any = await getAllSubjects();

      return response.data ?? [];
    } catch (error: any) {
      return rejectWithValue(
        error?.message ?? "Failed to fetch subjects."
      );
    }
  }
);

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    clearSubjects(state) {
      state.items = [];
      state.loading = false;
      state.loaded = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.items = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Failed to fetch subjects.";
      });
  },
});

export const { clearSubjects } = subjectSlice.actions;

export const selectSubjects = (state: RootState) => state.subject.items;

export const selectSubjectsLoading = (state: RootState) =>
  state.subject.loading;

export const selectSubjectsLoaded = (state: RootState) =>
  state.subject.loaded;

export const selectSubjectsError = (state: RootState) =>
  state.subject.error;

export default subjectSlice.reducer;