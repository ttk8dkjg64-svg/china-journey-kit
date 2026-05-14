import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Plan My Trip" text="Use this request form as the future paid-planning funnel. It is ready to connect to a backend or form provider." crumbs={[["Plan My Trip", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>What we can package</h2>
            <p>Custom itineraries, hotel area advice, train route sequencing, ticket support, food and culture routes, family pacing, and arrival setup checklists.</p>
            <h2>Suggested paid products</h2>
            <ul>
              <li>$19 downloadable first China arrival checklist.</li>
              <li>$49 route review for a self-planned itinerary.</li>
              <li>$149 custom 7-14 day planning package.</li>
              <li>Commissioned partner referrals for tours and local services.</li>
            </ul>
          </article>
          <aside className="sidebar"><LeadForm /></aside>
        </div>
      </section>
    </>
  );
}
