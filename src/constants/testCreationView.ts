export const TestCreationView = {
  CREATE: "CREATE",
  QUESTIONS: "QUESTIONS",
  SCHEDULER: "SCHEDULER",
} as const;

export type TestCreationViewType =
  (typeof TestCreationView)[keyof typeof TestCreationView];