import api from "../api"

export const loginUser = async (credentials : { username: string; password: string; }) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const registerUser = async (userInfo : { username: string; password: string; email: string; }) => {
  try {
    const response = await api.post("/auth/register", userInfo);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};