export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginData {
  token: string;
  user: {
    id: number;
    name: string;
  };
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: string;
}