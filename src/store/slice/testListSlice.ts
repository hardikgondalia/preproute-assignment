import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface Test {
  id: string;
  name: string;
  subject: string;
  type: string;
  total_questions: number;
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface TestListState {
  loading: boolean;
  tests: Test[];
  filters: {
    name: string;
    status: string;
    date: string;
  };
}

const initialState: TestListState = {
  loading: false,
  tests: [],
  filters: {
    name: "",
    status: "",
    date: "",
  },
};

const testListSlice = createSlice({
  name: "testList",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setTestList(state, action: PayloadAction<Test[]>) {
      state.tests = action.payload;
    },

    updateTestById(
      state,
      action: PayloadAction<{
        id: string;
        data: Partial<Test>;
      }>,
    ) {
      const { id, data } = action.payload;

      const index = state.tests.findIndex((test) => test.id === id);

      if (index !== -1) {
        state.tests[index] = {
          ...state.tests[index],
          ...data,
        };
      }
    },

    clearTestList(state) {
      state.tests = [];
    },

    setFilters(state, action: PayloadAction<Partial<TestListState["filters"]>>) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },

    clearFilters(state) {
      state.filters = {
        name: "",
        status: "",
        date: "",
      };
    },
  },
});

export const { setLoading, setTestList, updateTestById, clearTestList ,setFilters,clearFilters, } = testListSlice.actions;

export default testListSlice.reducer;

export const selectFilteredTests = (state: RootState) => {
  const { tests, filters } = state.testList;

  return tests.filter((test) => {
    const matchName = !filters.name || test.name.toLowerCase().includes(filters.name.toLowerCase());

    const matchStatus = !filters.status || test.status === filters.status;

    const matchDate = !filters.date || test.created_at?.slice(0, 10) === filters.date;

    return matchName && matchStatus && matchDate;
  });
};
