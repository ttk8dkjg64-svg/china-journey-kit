import { Suspense } from "react";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";

export default function PrivateToursPage() {
  return (
    <>
      <PageHero title="Private Tours and Drivers" text="Use private tours, drivers, or guided days where they solve real friction: distance, tickets, language, family pacing, or hard-to-reach sights." crumbs={[["Private Tours", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>Where private help makes sense</h2>
            <div className="booking-grid">
              <div className="booking-card"><h3>Great Wall day</h3><p>Private transfer helps avoid station confusion, shopping-stop tours, and rushed timing between wall sections.</p><span>Driver useful</span></div>
              <div className="booking-card"><h3>Zhangjiajie or Huangshan</h3><p>Weather, cable cars, park buses, stairs, and hotel location make local routing advice valuable.</p><span>Guide useful</span></div>
              <div className="booking-card"><h3>Food and culture</h3><p>A good local guide can turn markets, tea, hotpot, hutongs, or Cantonese food into a smoother experience.</p><span>Experience useful</span></div>
            </div>
            <h2>Suggested service types</h2>
            <div className="timeline-list">
              <div className="timeline-item"><strong>Driver only</strong><p>Best when you know exactly where to go but need reliable transport, airport pickup, or a day trip outside the city.</p></div>
              <div className="timeline-item"><strong>Guide only</strong><p>Best for museums, food, culture, history, and local interpretation where transport is easy.</p></div>
              <div className="timeline-item"><strong>Driver + guide</strong><p>Best for families, remote sights, time-sensitive ticket days, or first arrivals where logistics matter more than saving every dollar.</p></div>
              <div className="timeline-item"><strong>Custom day plan</strong><p>Best when you want to stay mostly independent but need a practical schedule and backup choices.</p></div>
            </div>
            <h2>Quality standards</h2>
            <ul>
              <li>Clear price, pickup time, vehicle type, cancellation policy, and included tickets.</li>
              <li>No forced shopping stops unless clearly disclosed and requested.</li>
              <li>English support or a reliable translation workflow.</li>
              <li>Realistic pacing for children, older travelers, heat, rain, and jet lag.</li>
            </ul>
            <Link className="button primary" href="/company/contact?package=Private%20Tour%20or%20Driver">Request private tour help</Link>
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
