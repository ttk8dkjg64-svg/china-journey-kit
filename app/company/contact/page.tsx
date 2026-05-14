import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Plan My Trip" text="Turn a destination idea into a workable China itinerary, ticket plan, transfer plan, or guided-service request." crumbs={[["Plan My Trip", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>Bookable request types</h2>
            <div className="booking-grid">
              <div className="booking-card"><h3>Route Review</h3><p>For travelers with a draft route. We check city order, rail timing, hotel areas, ticket risk, and pacing.</p><span>From $49</span></div>
              <div className="booking-card"><h3>Custom Itinerary</h3><p>A 7-14 day route plan with daily structure, transport notes, attraction order, and booking priorities.</p><span>From $149</span></div>
              <div className="booking-card"><h3>Ticket & Transfer Help</h3><p>Support for passport-linked sights, train logic, airport transfers, private day trips, and hard-to-use booking flows.</p><span>Quote by request</span></div>
            </div>
            <h2>How the request works</h2>
            <div className="timeline-list">
              <div className="timeline-item"><strong>1. Send details</strong><p>Share dates, travelers, budget, hotel level, must-see places, and any payment, SIM, visa, or ticket concerns.</p></div>
              <div className="timeline-item"><strong>2. Scope the plan</strong><p>We identify whether you need a quick route review, a custom itinerary, ticket help, or local partner support.</p></div>
              <div className="timeline-item"><strong>3. Confirm next step</strong><p>The next production step is connecting this form to email/CRM and Stripe or PayPal checkout for paid orders.</p></div>
            </div>
            <h2>Useful details to include</h2>
            <ul>
              <li>Arrival and departure city, or possible flight options.</li>
              <li>Passport nationality if you are considering visa-free transit.</li>
              <li>Hotel comfort level, walking tolerance, food interests, and travel pace.</li>
              <li>Which bookings you want help with: trains, attractions, transfers, hotels, or local tours.</li>
            </ul>
          </article>
          <aside className="sidebar">
            <Suspense fallback={<div className="card pad">Loading request form...</div>}>
              <LeadForm />
            </Suspense>
          </aside>
        </div>
      </section>
    </>
  );
}
