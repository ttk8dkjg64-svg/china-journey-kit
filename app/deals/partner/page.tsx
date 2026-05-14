import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";

export default function PartnerPage() {
  return (
    <>
      <PageHero title="Partner With Us" text="We work with reliable travel services that help visitors move through China with more confidence and less friction." crumbs={[["Work With Us", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>Partner categories</h2>
            <div className="steps">
              <div className="card pad step"><h3>Arrival essentials</h3><p>Connectivity, travel insurance, hotel platforms, train support, translation tools, airport transfers, and guided tours.</p></div>
              <div className="card pad step"><h3>Trip-planning support</h3><p>Help travelers choose realistic routes, solve ticket questions, and prepare destination-specific logistics.</p></div>
              <div className="card pad step"><h3>Local partner directory</h3><p>Feature vetted guides, photographers, food tours, drivers, and boutique hotels by city.</p></div>
              <div className="card pad step"><h3>Traveler updates</h3><p>Share practical changes when visa, payment, transport, or ticket rules affect trip planning.</p></div>
            </div>
            <h2>Quality standards</h2>
            <ul>
              <li>Clear pricing and traveler-friendly cancellation terms.</li>
              <li>English support or reliable translation workflow.</li>
              <li>Accurate claims, no misleading scarcity, and no forced shopping stops.</li>
              <li>Transparent disclosure for sponsored or referral-based placements.</li>
            </ul>
          </article>
          <aside className="sidebar"><LeadForm type="partner" /></aside>
        </div>
      </section>
    </>
  );
}
