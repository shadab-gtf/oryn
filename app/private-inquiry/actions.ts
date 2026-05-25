"use server";

import { createInquiry, type InquiryPayload } from "@/lib/api/inquiries";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function readText(formData: FormData, key: keyof InquiryPayload): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _previousState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const payload: InquiryPayload = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    market: readText(formData, "market"),
    projectType: readText(formData, "projectType"),
    message: readText(formData, "message"),
  };

  const result = await createInquiry(payload);

  return {
    status: result.ok ? "success" : "error",
    message: result.message,
  };
}
