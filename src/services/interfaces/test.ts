export interface TestConfig {
  name: string;
  type: string;
  subject: string;
  topics: string[];
  sub_topics: string[];
  correct_marks: number;
  wrong_marks: number;
  unattempt_marks: number;
  difficulty: Difficulty; // Using a literal union type for strict validation
  total_time: number;
  total_marks: number;
  total_questions: number;
  status: string | null; // Allows either a string or explicit null value
}

export type Difficulty = "easy" | "medium" | "difficult";

export type QuestionType = "mcq";

export type CorrectOption = "option1" | "option2" | "option3" | "option4";

export interface QuestionForm {
  type: QuestionType;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: CorrectOption | "";
  explanation: string;
  difficulty: Difficulty | "";
  topic_id?: string;
  sub_topic_id?: string;
  test_id: string;
}

export interface BulkQuestionRequest {
  questions: QuestionForm[];
}
