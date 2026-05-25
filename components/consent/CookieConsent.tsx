"use client";

import { useEffect, useState } from "react";

const consentStorageKey = "oryn-cookie-consent";

type ConsentState = "pending" | "visible" | "leaving" | "hidden";

function readStoredConsent() {
  try {
    return window.localStorage?.getItem(consentStorageKey) ?? null;
  } catch {
    return null;
  }
}

function writeStoredConsent(value: "accepted" | "essential") {
  try {
    window.localStorage?.setItem(consentStorageKey, value);
  } catch {}
}

export function CookieConsent() {
  const [state, setState] = useState<ConsentState>("pending");

  useEffect(() => {
    const storedConsent = readStoredConsent();

    if (storedConsent) {
      return;
    }

    const timeout = window.setTimeout(() => setState("visible"), 2200);

    return () => window.clearTimeout(timeout);
  }, []);

  function commitConsent(value: "accepted" | "essential") {
    writeStoredConsent(value);
    setState("leaving");
    window.setTimeout(() => setState("hidden"), 520);
  }

  if (state === "pending" || state === "hidden") {
    return null;
  }

  return (
    <aside
      aria-labelledby="oryn-cookie-title"
      className="oryn-cookie-panel"
      data-state={state}
      role="dialog"
    >
      <div className="oryn-cookie-panel__rule" aria-hidden="true" />
      <div className="oryn-cookie-panel__content">
        <p className="oryn-cookie-panel__label">Privacy Atmosphere</p>
        <h2 id="oryn-cookie-title" className="oryn-cookie-panel__title">
          A quieter digital stay.
        </h2>
        <p className="oryn-cookie-panel__copy">
          ORYN uses essential cookies and measured analytics to keep the
          experience composed, responsive, and discreet.
        </p>
      </div>
      <div className="oryn-cookie-panel__actions">
        <button
          className="oryn-cookie-action oryn-cookie-action--primary"
          onClick={() => commitConsent("accepted")}
          type="button"
        >
          Accept
        </button>
        <button
          className="oryn-cookie-action oryn-cookie-action--quiet"
          onClick={() => commitConsent("essential")}
          type="button"
        >
          Essential only
        </button>
      </div>
    </aside>
  );
}
