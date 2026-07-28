const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export interface QueryParams {
  [key: string]: string | number | boolean | undefined | null;
}

export interface ApiError {
  message: string;
  status: number;
  data?: unknown;
}

interface ErrorResponse {
  message?: string;
  error?: string;
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiClientOptions {
  endpoint: string;
  method?: HttpMethod;
  body?: unknown;
  queryParams?: QueryParams;
  headers?: HeadersInit;
  isFormData?: boolean;
  signal?: AbortSignal;
}

export async function apiClient<T>({
  endpoint,
  method = "GET",
  body,
  queryParams,
  headers = {},
  isFormData = false,
  signal,
}: ApiClientOptions): Promise<T> {
  const url = new URL(endpoint, BASE_URL);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const requestHeaders = new Headers(headers);

  if (!isFormData) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(url.toString(), {
    method,
    headers: requestHeaders,
    body: method !== "GET" && body ? (isFormData ? (body as FormData) : JSON.stringify(body)) : undefined,
    credentials: "include",
    signal,
  });

  const contentType = response.headers.get("content-type") ?? "";

  const responseData: unknown = contentType.includes("application/json") ? await response.json() : await response.text();

  if (!response.ok) {
    const errorBody = responseData as ErrorResponse;
    const error: ApiError = {
      status: response.status,
      message: errorBody.message ?? errorBody.error ?? response.statusText ?? "Something went wrong",
      data: responseData,
    };

    if (response.status === 401) {
      localStorage.removeItem("A_user");

      // Redirect using React Router
      window.location.href = "/login";
    }

    throw error;
  }

  return responseData as T;
}
