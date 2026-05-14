import Link from "next/link";
import { DestinationCard, EssentialCard } from "@/components/Cards";
import { HeroDestinationCarousel } from "@/components/HeroDestinationCarousel";
import { destinations, essentials } from "@/lib/data";

export default function HomePage() {
  const planningPath = [
    ["Arrival Setup", "Get mobile data, payment apps, hotel address, and airport-to-city transport ready before the flight."],
    ["Route Shape", "Choose a realistic city order around high-speed rail, flight time, weather, and recovery days."],
    ["Ticket Timing", "Reserve passport-linked attractions early and keep official links close for policy checks."],
            ["Local Backup", "Know when to use hotel help, guided days, private transfers, or vetted booking support."]
  ];
  const tripStyles = [
    ["First China Trip", "Beijing, Xi'an, Shanghai, then one nature stop if the schedule allows.", "/itineraries"],
    ["Scenery Focus", "Guilin, Zhangjiajie, Yunnan, and slower transfers that protect weather flexibility.", "/destinations"],
    ["Food & Culture", "Chengdu, Guangzhou, Xi'an, hutongs, tea houses, markets, museums, and evening walks.", "/experiences/culture-food"],
    ["Greater Bay Route", "Guangzhou, Shenzhen, Hong Kong, Macau links, Cantonese food, design, and coastal days.", "/destinations/guangzhou"],
    ["Silk Road History", "Dunhuang, Xi'an, desert landscapes, caves, museums, and slower western China logistics.", "/destinations/dunhuang"],
    ["Winter China", "Harbin ice season, snow scenery, warm food stops, and realistic cold-weather pacing.", "/destinations/harbin"]
  ];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Plan your first China trip with confidence</h1>
            <p>Practical China travel help for first-time visitors: payments, hotels, high-speed trains, airport transfers, itineraries, and visa-free routes.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/company/contact">Plan My China Trip</Link>
              <Link className="button" href="/essentials">Read the China Travel Checklist</Link>
            </div>
            <div className="stat-strip">
              <div className="stat"><strong>70%</strong><span>professional travel preparation content</span></div>
              <div className="stat"><strong>20%</strong><span>itinerary and service consultation</span></div>
              <div className="stat"><strong>10%</strong><span>booking and partner entry points</span></div>
            </div>
          </div>
          <HeroDestinationCarousel destinations={destinations} />
        </div>
      </section>

      <section className="quick-strip" aria-label="Fast planning links">
        <div className="wrap quick-grid">
          {essentials.map((essential) => (
            <Link className="quick-card" href={`/essentials/${essential.slug}`} key={essential.slug}>
              <strong>{essential.title}</strong>
              <span>{essential.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Most Wanted China Stops</h2>
              <p>Start with high-demand cities and sights, then use each guide for timing, tickets, transfers, hotel areas, and trip-fit advice.</p>
            </div>
            <Link className="button" href="/destinations">See all guides</Link>
          </div>
          <div className="grid cols-4">
            {destinations.slice(0, 4).map((destination) => <DestinationCard key={destination.slug} destination={destination} compact />)}
          </div>
        </div>
      </section>

      <section className="planning-path">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>A Practical Planning Path</h2>
              <p>Move from uncertainty to a bookable China trip without losing time to app setup, station logistics, or ticket rules.</p>
            </div>
          </div>
          <div className="path-grid">
            {planningPath.map(([title, copy], index) => (
              <article className="path-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Service Help Without Becoming a Booking Mall</h2>
              <p>These pages are built as practical advice first, then a light consultation and affiliate path where travelers need real help.</p>
            </div>
          </div>
          <div className="grid cols-3">
            <Link className="style-card" href="/hotels">
              <h3>Hotels</h3>
              <p>Choose areas that reduce check-in friction, airport stress, metro transfers, and passport-registration surprises.</p>
              <span>Find hotel strategy</span>
            </Link>
            <Link className="style-card" href="/airport-transfers">
              <h3>Airport Transfers</h3>
              <p>Know when metro, taxi, ride-hailing, hotel pickup, or private transfer makes the most sense after a long flight.</p>
              <span>Plan arrival</span>
            </Link>
            <Link className="style-card" href="/private-tours">
              <h3>Private Tours</h3>
              <p>Use guided days where language, tickets, distance, or family pacing makes self-guided travel less efficient.</p>
              <span>Compare tour help</span>
            </Link>
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
              <h2>Choose Your Trip Style</h2>
              <p>Use a travel style as the filter, then pick destinations and services that reduce friction instead of adding more decisions.</p>
            </div>
          </div>
          <div className="grid cols-3">
            {tripStyles.map(([title, copy, href]) => (
              <Link className="style-card" href={href} key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>Explore route</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Get Help Planning Your China Trip</h2>
              <p>When payments, trains, hotels, tickets, airport arrival, and route order feel messy, use the planning request to turn the trip into a clear next step.</p>
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
