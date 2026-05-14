import { Planner } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";
import Link from "next/link";

export default function ItinerariesPage() {
  return (
    <>
      <PageHero title="Itineraries" text="Choose a realistic China route. The goal is fewer airport days, better rail links, and enough time to enjoy the places you came for." crumbs={[["Itineraries", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>Route chooser</h2>
            <Planner />
            <h2>5 days: Beijing focused</h2>
            <div className="route"><strong>Days 1-2</strong><p>Forbidden City, Jingshan, hutongs, Temple of Heaven, food walk.</p></div>
            <div className="route"><strong>Day 3</strong><p>Great Wall at Mutianyu or Badaling.</p></div>
            <div className="route"><strong>Days 4-5</strong><p>Summer Palace, museums, shopping, or a high-speed rail add-on if you are ambitious.</p></div>
            <h2>10 days: classic first China</h2>
            <div className="route"><strong>Beijing</strong><p>3 days for Forbidden City, Great Wall, hutongs, and imperial parks.</p></div>
            <div className="route"><strong>Xi'an</strong><p>2 days for Terracotta Army, city wall, and food.</p></div>
            <div className="route"><strong>Chengdu</strong><p>2 days for pandas, teahouses, and Sichuan meals.</p></div>
            <div className="route"><strong>Shanghai</strong><p>3 days for Bund, museums, day trips, and easy outbound flights.</p></div>
            <h2>14 days: nature layer</h2>
            <p>Add Guilin/Yangshuo or Zhangjiajie after the classic route. Do not add both unless you are comfortable with faster transfers.</p>
          </article>
          <aside className="sidebar">
            <div className="card pad">
              <h3>Need the basics?</h3>
              <Link className="card-link" href="/essentials/payments">Payments</Link>
              <Link className="card-link" href="/essentials/transport">Rail transport</Link>
              <Link className="card-link" href="/essentials/visa">Visa and transit</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
