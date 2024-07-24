import { API_URL } from "@/constants/api";
import { CreateAccountForm, LoginForm } from "@/schemas";
import axios from "axios";

export const createAccount = async (data: CreateAccountForm) => {
  await axios.post(
    API_URL + "/auth/create-account",
    {
      name: data.firstName + " " + data.lastName,
      phone: data.phoneNumber,
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
};

export const login = async (data: LoginForm) => {
  await axios.post(
    API_URL + "/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
};
