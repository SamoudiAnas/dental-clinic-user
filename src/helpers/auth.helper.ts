import { API_URL } from "@/constants/api";
import { CreateAccountForm, LoginForm } from "@/schemas";
import { User } from "@/typings/types";
import axios from "axios";

export const createAccount = async (data: CreateAccountForm) => {
  const res = await axios.post(
    API_URL + "/auth/create-account",
    {
      name: data.firstName + " " + data.lastName,
      phone: data.phoneNumber,
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );

  return res.data as {
    user: User;
    token: string;
  };
};

export const login = async (data: LoginForm) => {
  const res = await axios.post(
    API_URL + "/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );

  await axios.post("/api/manage-token", {
    token: res.data.token,
  });

  return res.data as {
    token: string;
    user: User;
  };
};
