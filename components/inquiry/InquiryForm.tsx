"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  startWhatsAppConsultation,
  type ConsultationActionState,
} from "@/app/private-inquiry/actions";
import { Button } from "@/components/ui/Button";

const consultationSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  phone: z.string().min(8, "Please share a valid phone number."),
  location: z.string().min(2, "Please share your location."),
  service: z.string().min(2, "Please describe the service required."),
  note: z.string().min(10, "Please share a few restoration details."),
  photos: z
    .custom<FileList>()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Please upload at least one furniture photo.",
    }),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const initialState: ConsultationActionState = {
  status: "idle",
  message: "",
};

const fieldClass =
  "w-full border-b border-[rgba(199,165,106,0.25)] bg-transparent py-4 text-base text-[#F5F2EC] outline-none transition-colors placeholder:text-[#F5F2EC]/35 focus:border-[#C7A56A]";

const labelClass = "text-xs uppercase tracking-[0.18em] text-[#C7A56A]/78";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-2 text-sm leading-6 text-[#C7A56A]">{message}</p>;
}

export function InquiryForm() {
  const [state, setState] = useState<ConsultationActionState>(initialState);
  const [isPending, startTransition] = useTransition();
  const [progress, setProgress] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      service: "",
      note: "",
    },
  });

  const selectedPhotos = watch("photos");
  const photoCount = selectedPhotos?.length ?? 0;

  const statusLabel = useMemo(() => {
    if (state.status === "success") {
      return "Connecting You With A Restoration Specialist";
    }

    if (isPending) {
      return "Preparing Your Consultation...";
    }

    return "Private Atelier Review";
  }, [isPending, state.status]);

  useEffect(() => {
    if (!isPending) {
      if (state.status !== "success") setProgress(0);
      return;
    }

    setProgress(18);
    const interval = window.setInterval(() => {
      setProgress((current) => Math.min(current + 12, 92));
    }, 420);

    return () => window.clearInterval(interval);
  }, [isPending, state.status]);

  useEffect(() => {
    if (state.status !== "success" || !state.whatsappUrl) return;

    setProgress(100);
    const timeout = window.setTimeout(() => {
      window.location.href = state.whatsappUrl as string;
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [state.status, state.whatsappUrl]);

  function onSubmit(values: ConsultationFormValues) {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("phone", values.phone);
    formData.set("location", values.location);
    formData.set("service", values.service);
    formData.set("note", values.note);

    Array.from(values.photos).forEach((file) => {
      formData.append("photos", file);
    });

    setState({
      status: "uploading",
      message: "Preparing Your Consultation...",
    });

    startTransition(async () => {
      const result = await startWhatsAppConsultation(formData);
      setState(result);
    });
  }

  return (
    <form
      className="border-t border-[rgba(199,165,106,0.25)] pt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8 border border-[rgba(199,165,106,0.18)] bg-[#111111]/70 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[#C7A56A]">
          {statusLabel}
        </p>
        <div className="mt-4 h-px w-full overflow-hidden bg-[#F5F2EC]/10">
          <div
            className="h-full bg-[#C7A56A] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-sm leading-7 text-[#F5F2EC]/62">
          {isPending
            ? "Uploading furniture images to the SS Interior atelier archive before opening WhatsApp."
            : state.status === "success"
              ? "Your images are ready. WhatsApp will open with a prepared consultation message."
              : "Share the piece, upload its details, and continue directly into a private WhatsApp consultation."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            className={fieldClass}
            autoComplete="name"
            placeholder="Your name"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </label>

        <label className="block">
          <span className={labelClass}>Phone Number</span>
          <input
            className={fieldClass}
            autoComplete="tel"
            placeholder="+91 92053 74846"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </label>

        <label className="block">
          <span className={labelClass}>Location</span>
          <input
            className={fieldClass}
            placeholder="Home, hotel, office, or studio location"
            {...register("location")}
          />
          <FieldError message={errors.location?.message} />
        </label>

        <label className="block">
          <span className={labelClass}>Service Required</span>
          <input
            className={fieldClass}
            placeholder="Leather renewal, upholstery, full transformation"
            {...register("service")}
          />
          <FieldError message={errors.service?.message} />
        </label>
      </div>

      <label className="mt-8 block">
        <span className={labelClass}>Furniture Photos</span>
        <input
          className="mt-4 w-full border border-dashed border-[rgba(199,165,106,0.35)] bg-[#0B0B0B] p-5 text-sm text-[#F5F2EC]/70 file:mr-4 file:border-0 file:bg-[#C7A56A] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#0B0B0B]"
          type="file"
          accept="image/*"
          multiple
          {...register("photos")}
        />
        <p className="mt-3 text-sm leading-6 text-[#F5F2EC]/50">
          Upload front, side, material, and detail photographs. Selected: {photoCount}
        </p>
        <FieldError message={errors.photos?.message} />
      </label>

      <label className="mt-8 block">
        <span className={labelClass}>Restoration Notes</span>
        <textarea
          className={`${fieldClass} min-h-36 resize-y leading-7`}
          placeholder="Share the piece, material, current condition, and the atmosphere you want it to return to."
          {...register("note")}
        />
        <FieldError message={errors.note?.message} />
      </label>

      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Preparing consultation" : "Request Private Consultation"}
        </Button>
        {state.message ? (
          <div className="grid gap-3">
            <p
              className="text-sm leading-6 text-[#F5F2EC]/70"
              role="status"
              aria-live="polite"
            >
              {state.message}
            </p>
            {state.status === "error" && state.whatsappUrl ? (
              <a
                className="inline-flex w-fit border border-[rgba(199,165,106,0.45)] px-5 py-3 text-sm font-medium text-[#C7A56A] transition-colors hover:border-[#C7A56A] hover:text-[#F5F2EC]"
                href={state.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Continue on WhatsApp
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}
