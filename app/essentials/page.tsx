import { EssentialCard } from "@/components/Cards";
import { PageHero } from "@/components/PageBlocks";
import { essentials } from "@/lib/data";

export default function EssentialsPage() {
  return (
    <>
      <PageHero title="Travel Essentials" text="Fix the practical blockers before arrival: internet, payments, trains, hotels, tickets, and entry rules." crumbs={[["Travel Essentials", ""]]} />
      <section>
        <div className="wrap grid cols-3">
          {essentials.map((essential) => <EssentialCard key={essential.slug} essential={essential} />)}
        </div>
      </section>
    </>
  );
}
