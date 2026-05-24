import axiosInstance from "@/lib/axios";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: "user" | "admin";
  createdAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

// Login
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/login", {
    email,
    password,
  });
  
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  
  return response.data;
};

// Register
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/register", {
    name,
    email,
    password,
  });
  
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  
  return response.data;
};

// Logout
export const logout = (): void => {
  localStorage.removeItem("token");
};

// Get current user
export const getCurrentUser = async (): Promise<User> => {
  const response = await axiosInstance.get<User>("/auth/me");
  return response.data;
};
