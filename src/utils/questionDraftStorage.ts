import type { QuestionsState } from "../store/slice/questionSlice";

const STORAGE_KEY = "question_drafts";

type QuestionDrafts = Record<string, QuestionsState>;

export const saveQuestionDraft = (
  testId: string,
  state: QuestionsState,
) => {
  try {
    const drafts: QuestionDrafts = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}",
    );

    drafts[testId] = state;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch (error) {
    console.error("Failed to save draft", error);
  }
};

export const loadQuestionDraft = (
  testId: string,
): QuestionsState | null => {
  try {
    const drafts: QuestionDrafts = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}",
    );

    return drafts[testId] ?? null;
  } catch (error) {
    console.error("Failed to load draft", error);
    return null;
  }
};

export const removeQuestionDraft = (testId: string) => {
  try {
    const drafts: QuestionDrafts = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}",
    );

    delete drafts[testId];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch (error) {
    console.error("Failed to remove draft", error);
  }
};

export const clearAllQuestionDrafts = () => {
  localStorage.removeItem(STORAGE_KEY);
};