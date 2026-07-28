import { apiClient } from "../utils/apiClient";

export async function login() {
  const body = {
  userId: "vedant-admin",
  password: "vedant123"
}
  return apiClient({
    endpoint: "/api/auth/login",
    method: "POST",
    body,
  });
}
