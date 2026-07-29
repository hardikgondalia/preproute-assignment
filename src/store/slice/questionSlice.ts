import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type QuestionType = "mcq";

export type Difficulty = "" | "easy" | "medium" | "difficult";

export type CorrectOption =
  | ""
  | "option1"
  | "option2"
  | "option3"
  | "option4";

export interface QuestionForm {
  type: QuestionType;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: CorrectOption;
  explanation: string;
  difficulty: Difficulty;
  topic?: string;
  sub_topic?: string;
  test_id: string;
  hasStarted: boolean;
  isValid: boolean;
}

export interface QuestionsState {
  testId: string | null;
  selectedQuestion: number;
  questions: Record<number, QuestionForm>;
}

interface UpdateQuestionPayload {
  questionNumber: number;
  field: keyof Omit<QuestionForm, "isValid" | "hasStarted">;
  value: string;
}

const createQuestion = (testId = ""): QuestionForm => ({
  type: "mcq",
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  correct_option: "",
  explanation: "",
  difficulty: "",
  topic: "",
  sub_topic: "",
  test_id: testId,
  hasStarted: false,
  isValid: false,
});

const isQuestionValid = (question: QuestionForm) => {
  return Boolean(
    question.question.trim() &&
      question.option1.trim() &&
      question.option2.trim() &&
      question.option3.trim() &&
      question.option4.trim() &&
      question.correct_option &&
      question.difficulty
  );
};

const initialState: QuestionsState = {
  testId: null,
  selectedQuestion: 1,
  questions: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    initializeTest(state, action: PayloadAction<string>) {
      state.testId = action.payload;
      state.selectedQuestion = 1;
      state.questions = {
        1: createQuestion(action.payload),
      };
    },

    selectQuestion(state, action: PayloadAction<number>) {
      state.selectedQuestion = action.payload;
    },

    updateQuestion(state, action: PayloadAction<UpdateQuestionPayload>) {
      const { questionNumber, field, value } = action.payload;

      const question = state.questions[questionNumber];

      if (!question) return;

      (question as Record<string, unknown>)[field] = value;

      question.hasStarted = true;

      question.isValid = isQuestionValid(question);
    },

    nextQuestion(
      state,
      action: PayloadAction<{ totalQuestions: number }>
    ) {
      if (state.selectedQuestion >= action.payload.totalQuestions) {
        return;
      }

      const nextQuestion = state.selectedQuestion + 1;

      if (!state.questions[nextQuestion]) {
        state.questions[nextQuestion] = createQuestion(
          state.testId ?? ""
        );
      }

      state.selectedQuestion = nextQuestion;
    },

    previousQuestion(state) {
      if (state.selectedQuestion > 1) {
        state.selectedQuestion--;
      }
    },

    restoreDraft(state, action: PayloadAction<QuestionsState>) {
      return action.payload;
    },

    clearQuestions() {
      return initialState;
    },
  },
});

export const {
  initializeTest,
 selectQuestion,
 updateQuestion,
  nextQuestion,
  previousQuestion,
  restoreDraft,
  clearQuestions,
} = questionSlice.actions;

export default questionSlice.reducer;