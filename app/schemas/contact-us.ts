import { z } from "zod";

const phoneNumberRegex = new RegExp(/\d{5}([- ]*)\d{6}/);

export const contactSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a vaild email" }),
  phoneNumber: z
    .string()
    .regex(phoneNumberRegex, "Please enter a valid phone number"),
});
