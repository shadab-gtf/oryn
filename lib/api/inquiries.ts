export type InquiryPayload = {
  name: string;
  email: string;
  market: string;
  projectType: string;
  message: string;
};

export type InquiryResult = {
  ok: boolean;
  message: string;
};

export async function createInquiry(
  payload: InquiryPayload,
): Promise<InquiryResult> {
  if (!payload.name || !payload.email || !payload.message) {
    return {
      ok: false,
      message: "Please share your name, email, and a short project note.",
    };
  }

  return {
    ok: true,
    message:
      "Your inquiry has been received. ORYN will respond with a considered next step.",
  };
}
