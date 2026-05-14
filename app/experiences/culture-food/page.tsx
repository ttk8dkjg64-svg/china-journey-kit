import { PageHero } from "@/components/PageBlocks";

export default function CultureFoodPage() {
  return (
    <>
      <PageHero title="Culture and Food" text="Use meals, neighborhoods, markets, parks, and local rituals to make the trip feel alive beyond landmark photos." crumbs={[["Culture & Food", ""]]} />
      <section>
        <div className="wrap grid cols-3">
          <article className="card pad"><h3>Food walks</h3><p>Xi'an Muslim Quarter, Chengdu hotpot, Shanghai breakfast stalls, Beijing hutong snacks.</p></article>
          <article className="card pad"><h3>Local rhythm</h3><p>Tea houses, morning parks, night markets, calligraphy streets, and riverside walks.</p></article>
          <article className="card pad"><h3>Guided experiences</h3><p>Choose vetted guides, cooking classes, food tours, and neighborhood walks when you want local context.</p></article>
        </div>
      </section>
    </>
  );
}
