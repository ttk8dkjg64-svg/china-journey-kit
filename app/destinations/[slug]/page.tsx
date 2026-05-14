import { notFound } from "next/navigation";
import { DestinationArticle, PageHero } from "@/components/PageBlocks";
import { destinations } from "@/lib/data";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();

  return (
    <>
      <PageHero title={destination.name} text={destination.summary} image={destination.image} crumbs={[["Destinations", "/destinations"], [destination.name, ""]]} />
      <DestinationArticle destination={destination} />
    </>
  );
}
