import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>Page Not Found</h1>
        <p>The route may have moved. Start from the homepage or destination guide.</p>
        <div className="button-row">
          <Link className="button primary" href="/">Go home</Link>
          <Link className="button" href="/destinations">Destinations</Link>
        </div>
      </div>
    </section>
  );
}
