import { apiClient } from "../utils/apiClient";
import type { BulkQuestionRequest, TestConfig } from "./interfaces/test";

export async function getAllSubjects() {
    return apiClient({
        endpoint: "/api/subjects",
        method: "GET"
    });
}

export async function getTopicBySubject(subjectId: string) {
    return apiClient({
        endpoint: `/api/topics/subject/${subjectId}`,
        method: "GET"
    });
}

export async function getSubTopicsByTopic(topicId: string) {
    return apiClient({
        endpoint: `/api/sub-topics/topic/${topicId}`,
        method: "GET"
    });
}

export async function getAllTests() {
    return apiClient({
        endpoint: `/api/tests`,
        method: "GET"
    });
}

export async function createTest(body: TestConfig) {
    return apiClient({
        endpoint: `/api/tests`,
        method: "POST",
        body
    });
}

export async function updateTest(body: any, id: string) {
    return apiClient({
        endpoint: `/api/tests/${id}`,
        method: "PUT",
        body
    });
}

export async function getTestById(id: string) {
    return apiClient({
        endpoint: `/api/tests/${id}`,
        method: "GET"
    });
}

export async function createBulkQuestions(body:BulkQuestionRequest) {
    return apiClient({
        endpoint: `/api/questions/bulk`,
        method: "POST",
        body
    });
}
