"use server";

import { contactSchema } from "../schemas/contact-us";

interface ContactUsInput {
  userName: string;
  email: string;
  phoneNumber: string;
  monthlyBill: string;
  callMeAt: string;
}

const entryId: ContactUsInput = {
  userName: "entry.237610354",
  email: "entry.7464900",
  phoneNumber: "entry.403634722",
  monthlyBill: "entry.1191718284",
  callMeAt: "entry.1242915694",
} as const;

type EntryIdKeys = (typeof entryId)[keyof typeof entryId];

type FormState = {
  success: boolean;
  fields?: Record<string, string>;
  errors?: Record<string, string[]>;
  serverError?: boolean;
};

export const contactUs = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  /* 
    User feils which are always required 
     - name - required
     - email - required + should be email
     - phone number - required 
     - date - required. Good to have - should not be in the past. Should be between 9 to 21 hrs
    Not required
     - Monthly average bill
    
  
  */

  const userFormData = Object.fromEntries(formData);

  const parsed = contactSchema.safeParse(userFormData);
  const fields: Record<string, string> = {};

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;

    for (const key of Object.keys(userFormData)) {
      fields[key] = userFormData[key].toString();
    }
    return {
      success: false,
      fields,
      errors,
    };
  }

  const userData: { [key in EntryIdKeys]: string } = {};

  for (const [key, value] of formData.entries()) {
    if (key in entryId) {
      userData[entryId[key as keyof ContactUsInput]] = value as string;
    }
  }

  const useDataAsSearchParams = new URLSearchParams(userData).toString();

  const GOOGLE_FORMS_URL = `https://docs.google.com/forms/d/e/1FAIpQLSfb0t9VAU5RNdW58bj8nh2TgF2kVftLvbYsefgWp8FDz53obg/formResponse`;

  const response = await fetch(GOOGLE_FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: useDataAsSearchParams,
  });
  if (response.ok) {
    console.log("Data save successfully");
    return {
      success: true,
    };
  } else {
    console.log("error while saving data", response.headers, response.status);
    return {
      success: false,
      fields,
      serverError: true,
    };
  }
};
