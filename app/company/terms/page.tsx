import { PageHero } from "@/components/PageBlocks";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms" text="Travel information is provided for planning only. Official rules, prices, schedules, and entry requirements must be verified before booking." crumbs={[["Terms", ""]]} />
      <section><div className="wrap article"><h2>Disclaimer</h2><p>We are not an immigration, railway, hotel, or ticketing authority. Paid partner links should be disclosed when added.</p></div></section>
    </>
  );
}
