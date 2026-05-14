import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "China Journey Kit | China Travel Guide",
  description: "A practical China travel guide: top attractions, SIM, payment, trains, hotels, tickets, visa transit, and itinerary planning.",
  icons: { icon: "/assets/icon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" className="next-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
