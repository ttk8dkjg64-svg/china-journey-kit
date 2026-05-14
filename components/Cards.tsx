import Link from "next/link";
import type { Destination, Essential } from "@/lib/data";

export function DestinationCard({ destination, compact = false }: { destination: Destination; compact?: boolean }) {
  return (
    <article className="card destination-card">
      <img src={destination.image.replace("width=1600", "width=900")} alt={destination.alt} />
      <div className="card-body">
        <h3>{destination.name}</h3>
        <p>{destination.summary}</p>
        {!compact && (
          <div className="tag-list">
            {destination.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className="external-row">
          <Link className="card-link" href={`/destinations/${destination.slug}`}>{compact ? "Open guide" : "Read guide"}</Link>
          <a className="card-link" href={destination.externalUrl} target="_blank" rel="noopener noreferrer">{destination.externalLabel}</a>
        </div>
      </div>
    </article>
  );
}

export function EssentialCard({ essential }: { essential: Essential }) {
  return (
    <article className="card pad">
      <h3>{essential.title}</h3>
      <p>{essential.summary}</p>
      <Link className="card-link" href={`/essentials/${essential.slug}`}>Open guide</Link>
    </article>
  );
}
