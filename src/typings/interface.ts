import { User } from "./types";

export interface UserData {
  id: number;
  isAdmin: boolean;
  name: string;
  email: string;
  phone: string;
  country: string;
  birthdate: string | Date;
}

export interface DecodedToken extends UserData {
  iat: number;
  exp: number;
}

export interface WithAuthProps {
  user: User;
}
