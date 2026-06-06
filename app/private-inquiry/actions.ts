"use server";

import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";

const whatsappNumber = "919205374846";
const uploadFolder = "ss-interior/leads";

const consultationSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  phone: z.string().min(8, "Please share a valid phone number."),
  location: z.string().min(2, "Please share your location."),
  service: z.string().min(2, "Please select or describe the service required."),
  note: z.string().min(10, "Please share a few restoration details."),
});

export type ConsultationActionState = {
  status: "idle" | "uploading" | "success" | "error";
  message: string;
  whatsappUrl?: string;
  imageUrls?: string[];
};

type CloudinaryUploadResult = {
  secure_url: string;
};

type CloudinaryError = {
  error?: {
    message?: string;
    http_code?: number;
  };
  message?: string;
  http_code?: number;
};

function configureCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary credentials are not configured.");
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readImages(formData: FormData) {
  return formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);
}

async function uploadImage(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  const base64 = bytes.toString("base64");
  const dataUri = `data:${file.type};base64,${base64}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: uploadFolder,
    resource_type: "image",
    use_filename: true,
    unique_filename: true,
  });

  return (result as CloudinaryUploadResult).secure_url;
}

function buildWhatsAppMessage(input: {
  name: string;
  phone: string;
  location: string;
  service: string;
  note: string;
  imageUrls: string[];
}) {
  return `Hello SS Interior,

I would like a private restoration consultation.

Name:
${input.name}

Phone:
${input.phone}

Location:
${input.location}

Service Required:
${input.service}

Furniture Photos:
${input.imageUrls.join("\n")}

Restoration Notes:
${input.note}

Please review the furniture and advise on the restoration possibilities.

Thank you.`;
}

function buildManualWhatsAppUrl(input: {
  name: string;
  phone: string;
  location: string;
  service: string;
  note: string;
}) {
  const message = buildWhatsAppMessage({
    ...input,
    imageUrls: ["I will attach the furniture photos directly in WhatsApp."],
  });

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export async function startWhatsAppConsultation(
  formData: FormData,
): Promise<ConsultationActionState> {
  const rawPayload = {
    name: readText(formData, "name"),
    phone: readText(formData, "phone"),
    location: readText(formData, "location"),
    service: readText(formData, "service"),
    note: readText(formData, "note"),
  };

  const parsed = consultationSchema.safeParse(rawPayload);

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please review the consultation details.",
    };
  }

  const images = readImages(formData);

  if (!images.length) {
    return {
      status: "error",
      message: "Please upload at least one furniture photo before opening WhatsApp.",
    };
  }

  try {
    configureCloudinary();
    const imageUrls = await Promise.all(images.map(uploadImage));
    const message = buildWhatsAppMessage({ ...parsed.data, imageUrls });
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return {
      status: "success",
      message: "Connecting you with a restoration specialist.",
      whatsappUrl,
      imageUrls,
    };
  } catch (error: unknown) {
    const cloudinaryError = error as CloudinaryError;
    const errorMessage =
      cloudinaryError.error?.message ?? cloudinaryError.message ?? "Unknown upload error";

    console.error("Cloudinary consultation upload failed:", errorMessage);

    if (errorMessage.toLowerCase().includes("cloud_name mismatch")) {
      return {
        status: "error",
        message:
          "Cloudinary is configured with a cloud name that does not match the API key. You can continue on WhatsApp and attach the photos there.",
        whatsappUrl: buildManualWhatsAppUrl(parsed.data),
      };
    }

    return {
      status: "error",
      message:
        "The images could not be prepared. You can continue on WhatsApp and attach the photos there.",
      whatsappUrl: buildManualWhatsAppUrl(parsed.data),
    };
  }
}
