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
  return (
    <section>
      <div className="wrap content">
        <article className="article">
          {destination.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          ))}
        </article>
        <aside className="sidebar">
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
