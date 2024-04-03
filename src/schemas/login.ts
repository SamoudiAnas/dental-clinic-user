import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});

export type LoginForm = z.infer<typeof loginSchema>;
