import { z } from "zod";

const phoneNumberRegex = new RegExp(
  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
);

export const contactSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a vaild email" }),
  phoneNumber: z
    .string()
    .regex(phoneNumberRegex, "Please enter a valid phone number"),
});
