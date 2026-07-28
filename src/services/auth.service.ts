import type { ApiResponse, LoginData, LoginRequest } from "../models/login";
import { apiClient } from "../utils/apiClient";

export async function login(body: LoginRequest) {
    
  return apiClient<ApiResponse<LoginData>>({
    endpoint: "/api/auth/login",
    method: "POST",
    body,
  });
}
