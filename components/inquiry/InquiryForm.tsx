"use client";

import { useActionState } from "react";
import {
  submitInquiry,
  type InquiryFormState,
} from "@/app/private-inquiry/actions";
import { Button } from "@/components/ui/Button";

const initialState: InquiryFormState = {
  status: "idle",
  message: "",
};

const fieldClass =
  "w-full border-b border-ivory-050/18 bg-transparent py-4 text-base text-ivory-050 outline-none transition-colors placeholder:text-ivory-050/35 focus:border-bronze-300";

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );

  return (
    <form action={formAction} className="border-t border-ivory-050/12 pt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Name
          </span>
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Email
          </span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="private@email.com"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Market
          </span>
          <input
            className={fieldClass}
            name="market"
            placeholder="Dubai, Monaco, London"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Project Type
          </span>
          <input
            className={fieldClass}
            name="projectType"
            placeholder="Residence, development, launch"
          />
        </label>
      </div>
      <label className="mt-8 block">
        <span className="text-xs uppercase tracking-[0.18em] text-stone-300">
          Project Note
        </span>
        <textarea
          className={`${fieldClass} min-h-36 resize-y leading-7`}
          name="message"
          required
          placeholder="Share the nature of the residence, development, or private experience."
        />
      </label>
      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending" : "Send private inquiry"}
        </Button>
        {state.message ? (
          <p
            className="text-sm leading-6 text-ivory-050/70"
            role="status"
            aria-live="polite"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
