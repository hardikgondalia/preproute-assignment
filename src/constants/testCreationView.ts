export const TestCreationView = {
  CREATE: "CREATE",
  QUESTIONS: "QUESTIONS",
  SCHEDULER: "SCHEDULER",
  PREVIEW: "PREVIEW",
} as const;

export type TestCreationViewType =
  (typeof TestCreationView)[keyof typeof TestCreationView];