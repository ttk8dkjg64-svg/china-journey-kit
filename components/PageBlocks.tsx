import Link from "next/link";
import type { Destination, Essential } from "@/lib/data";

export function PageHero({ title, text, image, crumbs }: { title: string; text: string; image?: string; crumbs?: [string, string][] }) {
  return (
    <section className="page-hero" style={image ? { "--hero-image": `url('${image}')` } as React.CSSProperties : undefined}>
      <div className="wrap">
        {crumbs && (
          <div className="crumbs">
            <Link href="/">Home</Link>
            {crumbs.map(([label, href]) => (
              <span key={label}><span> / </span>{href ? <Link href={href}>{label}</Link> : label}</span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function DestinationArticle({ destination }: { destination: Destination }) {
  const bookingHref = `/company/contact?destination=${encodeURIComponent(destination.name)}`;
  const packages = [
    ["Route Review", "Best for travelers with flights or cities already chosen. We check timing, rail logic, hotel areas, and ticket pressure points.", `${bookingHref}&package=Route%20Review`],
    ["Ticket Help", "Use this when passport-linked attractions, official mini-programs, or sold-out dates create friction.", `${bookingHref}&package=Ticket%20Help`],
    ["Private Day Plan", "A city-by-city day plan with transfer windows, meal areas, attraction order, and backup options for weather or crowds.", `${bookingHref}&package=Private%20Day%20Plan`]
  ];
  const dayPlan = [
    ["Morning", `Start with the highest-demand sight or transfer for ${destination.name}. Morning slots usually reduce heat, crowds, and transport stress.`],
    ["Midday", "Keep lunch near the next attraction instead of crossing the city. This protects energy and leaves room for ticket checks or queues."],
    ["Afternoon", "Add a slower cultural stop, viewpoint, museum, neighborhood walk, or hotel break depending on weather and travel style."],
    ["Evening", "Choose food, night views, a show, or a simple transfer day. Avoid late long-distance moves before early ticketed sights."]
  ];

  return (
    <section>
      <div className="wrap content">
        <article className="article">
          <div className="destination-showcase">
            <img src={destination.image.replace("width=1600", "width=1200")} alt={destination.alt} />
            <div>
              <h2>Why this stop matters</h2>
              <p>{destination.summary}</p>
              <p>This guide is built for practical trip planning: what to see, how to sequence the day, where friction usually appears, and which links to use before paying for tickets or services.</p>
            </div>
          </div>
          {destination.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          ))}
          <h2>Recommended day flow</h2>
          <div className="timeline-list">
            {dayPlan.map(([label, text]) => (
              <div className="timeline-item" key={label}>
                <strong>{label}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <h2>Bookable planning options</h2>
          <div className="booking-grid">
            {packages.map(([title, text, href]) => (
              <Link className="booking-card" href={href} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>Start request</span>
              </Link>
            ))}
          </div>
          <h2>Before you pay</h2>
          <ul>
            <li>Confirm the passport spelling and number match every ticket, train, hotel, and booking record.</li>
            <li>Check closure days, weather risk, public holidays, and timed-entry rules before locking non-refundable services.</li>
            <li>Keep the official site open while comparing third-party convenience options.</li>
            <li>Choose private transfer or guided help only when it saves real time or reduces language friction.</li>
          </ul>
        </article>
        <aside className="sidebar">
          <div className="card pad booking-panel">
            <h3>Plan or book this stop</h3>
            <p>Choose a request type and send your dates, group size, hotel level, and ticket concerns.</p>
            <Link className="button primary" href={`${bookingHref}&package=Custom%20Itinerary`}>Request itinerary</Link>
            <Link className="button" href={`${bookingHref}&package=Ticket%20and%20Transfer%20Help`}>Ticket / transfer help</Link>
          </div>
          <div className="card pad">
            <h3>Quick Facts</h3>
            {destination.facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
          <div className="card pad">
            <h3>External Site</h3>
            <p>Check opening hours, ticket notices, and current visitor information before you go.</p>
            <a className="card-link" href={destination.externalUrl} target="_blank" rel="noopener noreferrer">{destination.externalLabel}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function EssentialArticle({ essential }: { essential: Essential }) {
  return (
    <section>
      <div className="wrap content">
        <article className="article">
          {essential.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          ))}
        </article>
        <aside className="sidebar">
          <div className="card pad">
            <h3>Useful next step</h3>
            {essential.external ? (
              <a className="card-link" href={essential.external.url} target="_blank" rel="noopener noreferrer">{essential.external.label}</a>
            ) : (
              <Link className="card-link" href="/company/contact">Ask for trip help</Link>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
