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
            <h2>7 days: Beijing and Shanghai soft landing</h2>
            <div className="route"><strong>Days 1-3</strong><p>Beijing for Forbidden City, Jingshan, hutongs, Temple of Heaven, and one Great Wall day.</p></div>
            <div className="route"><strong>Day 4</strong><p>High-speed rail to Shanghai. Keep the evening simple: Bund walk, hotel check-in, and payment or app troubleshooting if needed.</p></div>
            <div className="route"><strong>Days 5-7</strong><p>Shanghai skyline, French Concession, museums, food, and optional Suzhou or Hangzhou day trip.</p></div>
            <h2>10 days: classic first China</h2>
            <div className="route"><strong>Beijing</strong><p>3 days for Forbidden City, Great Wall, hutongs, and imperial parks.</p></div>
            <div className="route"><strong>Xi'an</strong><p>2 days for Terracotta Army, city wall, and food.</p></div>
            <div className="route"><strong>Chengdu</strong><p>2 days for pandas, teahouses, and Sichuan meals.</p></div>
            <div className="route"><strong>Shanghai</strong><p>3 days for Bund, museums, day trips, and easy outbound flights.</p></div>
            <h2>14 days: nature layer</h2>
            <p>Add Guilin/Yangshuo, Zhangjiajie, Huangshan, or Yunnan after the classic route. Do not add too many nature regions at once unless you are comfortable with faster transfers and weather risk.</p>
            <div className="route"><strong>Option A</strong><p>Beijing - Xi'an - Guilin/Yangshuo - Shanghai for a balanced first trip with softer scenery days.</p></div>
            <div className="route"><strong>Option B</strong><p>Shanghai - Hangzhou/Suzhou - Huangshan - Beijing for rail-friendly city and mountain pacing.</p></div>
            <div className="route"><strong>Option C</strong><p>Chengdu - Yunnan - Shanghai for food, teahouses, old towns, mountain climate, and slower western China rhythm.</p></div>
            <h2>240-hour transit route ideas</h2>
            <p>Transit rules depend on nationality, entry port, exit route, and approved stay area. Treat these as planning patterns only, then verify the official policy before buying flights.</p>
            <div className="route"><strong>Shanghai region</strong><p>Shanghai with Suzhou and Hangzhou gives a strong visa-free-transit-style route when your entry, exit, and eligibility match the policy.</p></div>
            <div className="route"><strong>Beijing region</strong><p>Beijing plus Great Wall and city highlights works well for a shorter trip with fewer hotel moves.</p></div>
            <div className="route"><strong>Greater Bay</strong><p>Guangzhou and Shenzhen can pair with onward Hong Kong or Macau routes, but border and onward-ticket details must be exact.</p></div>
            <h2>Common planning mistakes</h2>
            <ul>
              <li>Adding too many cities because rail looks fast on the map.</li>
              <li>Ignoring passport-linked ticket rules until the week of travel.</li>
              <li>Landing without mobile data, payment backup, or hotel address in Chinese.</li>
              <li>Mixing mountain, desert, and megacity days without recovery time.</li>
              <li>Traveling during major public holidays without early reservations.</li>
            </ul>
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
