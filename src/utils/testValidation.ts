import type { TestConfig } from "../services/interfaces/test";

export interface ValidationErrors {
  name?: string;
  subject?: string;
  topics?: string;
  sub_topics?: string;
  total_time?: string;
  total_marks?: string;
  correct_marks?: string;
  wrong_marks?: string;
  unattempt_marks?: string;
}

export const validateTest = (
  formData: TestConfig
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Test name is required.";
  }

  if (!formData.subject) {
    errors.subject = "Please select a subject.";
  }

  if (!formData.topics.length) {
    errors.topics = "Please select at least one topic.";
  }

  if (!formData.sub_topics.length) {
    errors.sub_topics = "Please select at least one sub-topic.";
  }

  if (formData.total_time <= 0) {
    errors.total_time = "Total time must be greater than 0.";
  }

  if (formData.total_marks <= 0) {
    errors.total_marks = "Total marks must be greater than 0.";
  }

  if (formData.correct_marks <= 0) {
    errors.correct_marks =
      "Correct marks must be greater than 0.";
  }

  if (formData.wrong_marks > 0) {
    errors.wrong_marks =
      "Wrong marks should be zero or negative.";
  }

  return errors;
};