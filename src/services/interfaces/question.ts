export interface TestQuestion {
    type: "mcq"; // Using a literal type since it specifies the format
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correct_option: "option1" | "option2" | "option3" | "option4"; // Restricts to valid options
    explanation: string;
    difficulty: "easy" | "medium" | "hard"; // Enforces standard difficulty levels
    test_id: string; // Fits UUID format
}