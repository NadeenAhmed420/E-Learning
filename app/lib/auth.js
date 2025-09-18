import { apiFetcher } from "./api";

export const loginUser = (email, password) =>
  apiFetcher("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export const registerUser = (
  name,
  email,
  password,
  rePassword,
  dateOfBirth,
  gender
) =>
  apiFetcher("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      rePassword,
      dateOfBirth,
      gender,
    }),
  });

export const logoutUser = () =>
  apiFetcher("/api/auth/logout", {
    method: "POST",
  });
