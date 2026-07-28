import { apiClient } from "../utils/apiClient";
import type { ApiResponse } from "./interfaces/common";

export async function login(body:any) {
  return apiClient<ApiResponse>({
    endpoint: "/api/auth/login",
    method: "POST",
    body,
  });
}
