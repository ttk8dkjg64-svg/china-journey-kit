import Link from "next/link";
import { DestinationCard, EssentialCard } from "@/components/Cards";
import { destinations, essentials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>China travel, made China-ready.</h1>
            <p>Build a confident China trip with attraction guides, official booking links, payment setup, high-speed rail tips, hotel advice, ticket strategy, and practical routes for first-time visitors.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/itineraries">Build an itinerary</Link>
              <Link className="button" href="/essentials">Solve payments, SIM and trains</Link>
            </div>
            <div className="stat-strip">
              <div className="stat"><strong>8</strong><span>high-demand destinations</span></div>
              <div className="stat"><strong>6</strong><span>arrival pain points solved</span></div>
              <div className="stat"><strong>0</strong><span>empty navigation links</span></div>
            </div>
          </div>
          <div className="hero-panel" aria-label="Great Wall and travel planning visual" />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Most Wanted China Stops</h2>
              <p>Start with the places travelers ask for most, then use the linked guides for timing, tickets, routes, and trip-fit advice.</p>
            </div>
            <Link className="button" href="/destinations">See all guides</Link>
          </div>
          <div className="grid cols-4">
            {destinations.slice(0, 4).map((destination) => <DestinationCard key={destination.slug} destination={destination} compact />)}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>China Arrival Setup Checklist</h2>
              <p>China is easy once the basics are prepared. These guides focus on the questions visitors ask before they land.</p>
            </div>
          </div>
          <div className="grid cols-3">
            {essentials.map((essential) => <EssentialCard key={essential.slug} essential={essential} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Get Help Planning Your China Trip</h2>
              <p>When the basics feel hard, use the planning request to get route advice, ticket guidance, local experience ideas, and arrival setup support.</p>
            </div>
            <Link className="button dark" href="/company/contact">Request trip help</Link>
          </div>
          <div className="grid cols-3">
            <div className="card pad"><h3>Route review</h3><p>Share your trip length, arrival city, and travel style to find a route that avoids rushed transfer days.</p></div>
            <div className="card pad"><h3>Arrival setup</h3><p>Prepare mobile payment, connectivity, train booking, hotel check-in, and ticket details before landing.</p></div>
            <div className="card pad"><h3>Local confidence</h3><p>Use official links first, then choose vetted convenience services only where they genuinely save time.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
