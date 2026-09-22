export interface RegisterRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  email: string;
  createdAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
}

