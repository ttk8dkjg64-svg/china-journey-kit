import { Suspense } from "react";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";

export default function AirportTransfersPage() {
  return (
    <>
      <PageHero title="Airport Transfers" text="A good first transfer solves the hardest arrival problems: jet lag, luggage, payment setup, Chinese addresses, late check-in, and airport distance." crumbs={[["Airport Transfers", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>Choose the right arrival option</h2>
            <div className="booking-grid">
              <div className="booking-card"><h3>Metro or airport rail</h3><p>Best for light luggage, daytime arrival, and travelers already comfortable with mobile maps and station transfers.</p><span>Lowest cost</span></div>
              <div className="booking-card"><h3>Taxi or ride-hailing</h3><p>Useful when your hotel address is saved in Chinese and payment is already working, but queues and language can vary.</p><span>Flexible</span></div>
              <div className="booking-card"><h3>Private transfer</h3><p>Best for late arrivals, families, first-time visitors, tight schedules, or when hotel check-in and phone setup are not yet solved.</p><span>Highest confidence</span></div>
            </div>
            <h2>Airport notes</h2>
            <div className="timeline-list">
              <div className="timeline-item"><strong>Beijing</strong><p>Check whether you land at Capital or Daxing. The airport difference changes transfer time, pickup cost, and hotel area logic.</p></div>
              <div className="timeline-item"><strong>Shanghai</strong><p>Pudong and Hongqiao serve different trip patterns. Hongqiao is excellent for rail connections; Pudong is common for long-haul flights.</p></div>
              <div className="timeline-item"><strong>Guangzhou</strong><p>Airport transfer can be simple by metro, but trade fair periods and late arrivals can make private pickup worthwhile.</p></div>
              <div className="timeline-item"><strong>Chengdu</strong><p>Confirm Tianfu vs Shuangliu before choosing a hotel. Tianfu is farther from many central areas.</p></div>
            </div>
            <h2>What to send for a transfer quote</h2>
            <ul>
              <li>Flight number, arrival time, airport terminal, and destination hotel.</li>
              <li>Number of travelers, luggage count, child seats, and language needs.</li>
              <li>Whether you also need SIM, payment, hotel check-in, or first-day route help.</li>
            </ul>
            <Link className="button primary" href="/company/contact?package=Airport%20Transfer">Request airport transfer help</Link>
          </article>
          <aside className="sidebar">
            <Suspense fallback={<div className="card pad">Loading form...</div>}>
              <LeadForm />
            </Suspense>
          </aside>
        </div>
      </section>
    </>
  );
}
