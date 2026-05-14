import { Suspense } from "react";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForms";
import { PageHero } from "@/components/PageBlocks";

export default function HotelsPage() {
  return (
    <>
      <PageHero title="China Hotels" text="Hotel choices can decide whether a China trip feels smooth: passport check-in, metro access, airport timing, payment backups, and the right neighborhood matter." crumbs={[["Hotels", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article">
            <h2>What to look for before booking</h2>
            <div className="booking-grid">
              <div className="booking-card"><h3>Passport check-in</h3><p>Choose hotels that clearly handle international passport registration and have a 24-hour front desk for late arrivals.</p><span>Reduce check-in risk</span></div>
              <div className="booking-card"><h3>Location first</h3><p>Pick areas near metro lines, rail stations, or your main attraction cluster instead of chasing the lowest nightly price.</p><span>Save transfer time</span></div>
              <div className="booking-card"><h3>Payment backup</h3><p>Keep mobile payment, bank card, and some RMB ready for deposits, late check-in, or card-terminal issues.</p><span>Avoid arrival stress</span></div>
            </div>
            <h2>City area shortcuts</h2>
            <div className="timeline-list">
              <div className="timeline-item"><strong>Beijing</strong><p>Dongcheng, Wangfujing, Qianmen, or strong metro access for Forbidden City, hutongs, and Great Wall pickup points.</p></div>
              <div className="timeline-item"><strong>Shanghai</strong><p>People's Square, Jing'an, the Bund, or metro-connected areas for easy arrival, food, and day trips to Suzhou or Hangzhou.</p></div>
              <div className="timeline-item"><strong>Chengdu</strong><p>Stay near central metro lines for pandas, food neighborhoods, teahouses, and rail or airport access.</p></div>
              <div className="timeline-item"><strong>Nature stops</strong><p>For Zhangjiajie, Huangshan, Guilin, and Yunnan, location can matter more than star rating because transfers are slower.</p></div>
            </div>
            <h2>Affiliate and consultation path</h2>
            <p>This page can later connect to hotel affiliate links by city and hotel class. For now, travelers can request hotel-area advice with their route, budget, arrival time, and comfort level.</p>
            <Link className="button primary" href="/company/contact?package=Hotel%20Area%20Advice">Request hotel area advice</Link>
          </article>
          <aside className="sidebar">
            <Suspense fallback={<div className="card pad">Loading form...</div>}>
              <LeadForm />
            </Suspense>
          </aside>
        </div>
      </section>
    </>
  );
}
