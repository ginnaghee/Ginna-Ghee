import { apiRequest } from "./queryClient";

export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const response = await apiRequest("POST", "/api/contacts", data);
    return await response.json();
  } catch (error) {
    throw new Error("Failed to send email. Please try again later.");
  }
}
