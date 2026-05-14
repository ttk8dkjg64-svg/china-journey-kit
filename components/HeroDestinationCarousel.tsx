"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Destination } from "@/lib/data";

export function HeroDestinationCarousel({ destinations }: { destinations: Destination[] }) {
  const featured = useMemo(() => destinations.slice(0, 4), [destinations]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % featured.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [featured.length]);

  const next = () => setActive((current) => (current + 1) % featured.length);
  const previous = () => setActive((current) => (current - 1 + featured.length) % featured.length);

  return (
    <div className="hero-carousel" aria-label="Featured China destination guides">
      <div className="carousel-stage">
        {featured.map((destination, index) => (
          <article className={`carousel-card ${index === active ? "is-active" : ""}`} key={destination.slug}>
            <Link className="carousel-image-link" href={`/destinations/${destination.slug}`} aria-label={`Open ${destination.name} guide`}>
              <img src={destination.image.replace("width=1600", "width=900")} alt={destination.alt} />
            </Link>
            <div className="carousel-copy">
              <span>{destination.tags[0]}</span>
              <h3>{destination.name}</h3>
              <p>{destination.summary}</p>
              <div className="carousel-links">
                <Link href={`/destinations/${destination.slug}`}>Guide</Link>
                <a href={destination.externalUrl} target="_blank" rel="noopener noreferrer">Official site</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="carousel-arrow prev" type="button" onClick={previous} aria-label="Show previous destination">
        ‹
      </button>
      <button className="carousel-arrow next" type="button" onClick={next} aria-label="Show next destination">
        ›
      </button>
      <div className="carousel-dots" aria-label="Choose destination slide">
        {featured.map((destination, index) => (
          <button
            key={destination.slug}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show ${destination.name}`}
          />
        ))}
      </div>
    </div>
  );
}
