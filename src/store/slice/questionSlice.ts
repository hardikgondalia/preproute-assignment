import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type QuestionType = "mcq";

export type Difficulty = "" | "easy" | "medium" | "difficult";

export type CorrectOption = "" | "option1" | "option2" | "option3" | "option4";

export interface QuestionForm {
  id: string;
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
  selectedQuestionId: string | null;
  questionOrder: string[];
  questions: Record<string, QuestionForm>;
}

interface UpdateQuestionPayload {
  questionId: string;
  field: keyof Omit<QuestionForm, "id" | "isValid" | "hasStarted">;
  value: string;
}

const generateQuestionId = () => crypto.randomUUID();

const createQuestion = (testId = ""): QuestionForm => ({
  id: generateQuestionId(),
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

const isQuestionValid = (question: QuestionForm) =>
  Boolean(
    question.question.trim() &&
    question.option1.trim() &&
    question.option2.trim() &&
    question.option3.trim() &&
    question.option4.trim() &&
    question.correct_option &&
    question.difficulty,
  );

const initialState: QuestionsState = {
  testId: null,
  selectedQuestionId: null,
  questionOrder: [],
  questions: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    initializeTest(state, action: PayloadAction<string>) {
      const question = createQuestion(action.payload);

      state.testId = action.payload;
      state.selectedQuestionId = question.id;
      state.questionOrder = [question.id];
      state.questions = {
        [question.id]: question,
      };
    },

    selectQuestion(state, action: PayloadAction<string>) {
      if (state.questions[action.payload]) {
        state.selectedQuestionId = action.payload;
      }
    },

    updateQuestion(state, action: PayloadAction<UpdateQuestionPayload>) {
      const { questionId, field, value } = action.payload;

      const question = state.questions[questionId];

      if (!question) return;

      (question as Record<string, unknown>)[field] = value;

      question.hasStarted = true;
      question.isValid = isQuestionValid(question);
    },

    addQuestion(state) {
      const question = createQuestion(state.testId ?? "");

      state.questions[question.id] = question;
      state.questionOrder.push(question.id);
      state.selectedQuestionId = question.id;
    },

    deleteQuestion(state, action: PayloadAction<string>) {
      const questionId = action.payload;

      if (!state.questions[questionId]) return;

      delete state.questions[questionId];

      state.questionOrder = state.questionOrder.filter((id) => id !== questionId);

      if (state.selectedQuestionId === questionId) {
        state.selectedQuestionId = state.questionOrder[state.questionOrder.length - 1] ?? null;
      }
    },

    nextQuestion(state, action: PayloadAction<number>) {
      const maxQuestions = action.payload;

      if (!state.selectedQuestionId) return;

      const index = state.questionOrder.indexOf(state.selectedQuestionId);

      if (index === state.questionOrder.length - 1) {
        if (state.questionOrder.length >= maxQuestions) {
          return;
        }

        const question = createQuestion(state.testId ?? "");

        state.questions[question.id] = question;
        state.questionOrder.push(question.id);
        state.selectedQuestionId = question.id;

        return;
      }

      state.selectedQuestionId = state.questionOrder[index + 1];
    },

    previousQuestion(state) {
      if (!state.selectedQuestionId) return;

      const index = state.questionOrder.indexOf(state.selectedQuestionId);

      if (index > 0) {
        state.selectedQuestionId = state.questionOrder[index - 1];
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
  addQuestion,
  deleteQuestion,
  nextQuestion,
  previousQuestion,
  restoreDraft,
  clearQuestions,
} = questionSlice.actions;

export default questionSlice.reducer;
