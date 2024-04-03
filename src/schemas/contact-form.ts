import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
