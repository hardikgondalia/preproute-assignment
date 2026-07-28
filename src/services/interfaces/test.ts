export interface TestConfig {
    name: string;
    type: string;
    subject: string;
    topics: string[];
    sub_topics: string[];
    correct_marks: number;
    wrong_marks: number;
    unattempt_marks: number;
    difficulty: "easy" | "medium" | "hard"; // Using a literal union type for strict validation
    total_time: number;
    total_marks: number;
    total_questions: number;
    status: string | null;                  // Allows either a string or explicit null value
}