import { z } from "zod";

export const appointmentSchema = z.object({
  id: z.number().optional(),
  date: z.date(),
  startTime: z.date(),
  endTime: z.date(),
  userId: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;
