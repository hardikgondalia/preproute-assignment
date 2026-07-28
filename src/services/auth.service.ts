import { apiClient } from "../utils/apiClient";

export async function login() {
  const body = {
    userId: import.meta.env.VITE_LOGIN_ID,
    password: import.meta.env.VITE_LOGIN_PASSWORD
  }
  return apiClient({
    endpoint: "/api/auth/login",
    method: "POST",
    body,
  });
}
