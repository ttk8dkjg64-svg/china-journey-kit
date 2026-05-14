import { PageHero } from "@/components/PageBlocks";
import { externalSources } from "@/lib/data";

export default function SourcesPage() {
  return (
    <>
      <PageHero title="Sources" text="Core travel-planning pages prioritize official public information and link outward where rules can change." crumbs={[["Sources", ""]]} />
      <section>
        <div className="wrap article">
          <h2>Official references</h2>
          <ul>
            {externalSources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
