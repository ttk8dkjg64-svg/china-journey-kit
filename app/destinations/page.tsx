import { DestinationCard } from "@/components/Cards";
import { PageHero } from "@/components/PageBlocks";
import { destinations } from "@/lib/data";

export default function DestinationsPage() {
  return (
    <>
      <PageHero title="Destination Guides" text="Pick the China stop that matches your travel style, then open the detailed guide for tickets, timing, transport, and itinerary fit." image="https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_China_Forbidden-City-03.jpg?width=1600" crumbs={[["Destinations", ""]]} />
      <section>
        <div className="wrap grid cols-4">
          {destinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}
        </div>
      </section>
    </>
  );
}
