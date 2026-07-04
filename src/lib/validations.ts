import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  partySize: z
    .string()
    .min(1, "Select party size"),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
