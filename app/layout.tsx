import type { Metadata } from "next";
import localFont from "next/font/local";
import { PageTransition } from "@/components/motion/PageTransition";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { GodLevelLoader } from "@/components/motion/GodLevelLoader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/seo/metadata";
import { organizationSchema } from "@/lib/seo/schema";
import "./globals.css";

const ramillas = localFont({
  src: "../public/fonts/TT-Ramillas-Light.woff2",
  variable: "--font-ramillas",
  weight: "300",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "SS Interior | Luxury Furniture Restoration Atelier",
    description:
      "Luxury furniture restoration, bespoke upholstery, leather renewal, and heritage sofa transformation for refined homes, hotels, and interior designers.",
  }),
  icons: {
    icon: "/new-logo.png",
    shortcut: "/new-logo.png",
    apple: "/new-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", ramillas.variable)} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-[#0B0B0B]" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  const cleanupKey = "ss-interior-sw-cleaned";

  async function cleanupLegacyServiceWorkers() {
    if (!("serviceWorker" in navigator)) return;

    const registrations = await navigator.serviceWorker.getRegistrations();
    const cachesKeys = "caches" in window ? await caches.keys() : [];

    await Promise.all([
      ...registrations.map((registration) => registration.unregister()),
      ...cachesKeys.map((key) => caches.delete(key)),
    ]);

    if (!sessionStorage.getItem(cleanupKey) && (registrations.length || cachesKeys.length)) {
      sessionStorage.setItem(cleanupKey, "true");
      window.location.reload();
    }
  }

  cleanupLegacyServiceWorkers().catch(() => {});
})();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <MotionProvider>
          <GodLevelLoader />
          <SiteHeader />
          <PageTransition />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
