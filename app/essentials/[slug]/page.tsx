import { notFound } from "next/navigation";
import { EssentialArticle, PageHero } from "@/components/PageBlocks";
import { essentials } from "@/lib/data";

export function generateStaticParams() {
  return essentials.map((essential) => ({ slug: essential.slug }));
}

export default async function EssentialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essential = essentials.find((item) => item.slug === slug);
  if (!essential) notFound();

  return (
    <>
      <PageHero title={essential.title} text={essential.summary} crumbs={[["Travel Essentials", "/essentials"], [essential.title, ""]]} />
      <EssentialArticle essential={essential} />
    </>
  );
}
