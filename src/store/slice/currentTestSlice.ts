import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CurrentTestState {
  data: any | null; // we'll replace `any` with Test later
  loading: boolean;
  error: string | null;
}

const initialState: CurrentTestState = {
  data: null,
  loading: false,
  error: null,
};

const currentTestSlice = createSlice({
  name: "currentTest",
  initialState,
  reducers: {
    setCurrentTestLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setCurrentTest(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.error = null;
    },

    setCurrentTestError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    clearCurrentTest(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setCurrentTestLoading,
  setCurrentTest,
  setCurrentTestError,
  clearCurrentTest,
} = currentTestSlice.actions;

export default currentTestSlice.reducer;