"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export function LeadForm({ type = "trip" }: { type?: "trip" | "partner" }) {
  const [sent, setSent] = useState(false);
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") ?? "";
  const packageName = searchParams.get("package") ?? "";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="card pad planner" onSubmit={onSubmit}>
      <h3>{type === "trip" ? "Booking request" : "Partner inquiry"}</h3>
      {type === "trip" && (destination || packageName) && (
        <div className="notice">
          {destination && <p><strong>Destination:</strong> {destination}</p>}
          {packageName && <p><strong>Request type:</strong> {packageName}</p>}
        </div>
      )}
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      {type === "trip" ? (
        <>
          <label>Travelers<select name="travelers" defaultValue="2"><option>1</option><option>2</option><option>3-4</option><option>5-8</option><option>9+</option></select></label>
          <label>Trip month<input name="month" placeholder="e.g. October 2026" /></label>
          <label>Budget range<select name="budget" defaultValue="mid"><option value="lean">Lean / self-guided</option><option value="mid">Comfortable mid-range</option><option value="premium">Premium private support</option><option value="unsure">Not sure yet</option></select></label>
          <label>Interests<textarea name="message" placeholder="Cities, dates, hotel level, ticket needs, transport comfort, and biggest concern" /></label>
        </>
      ) : (
        <label>Offer type<select name="type"><option>Travel service</option><option>Local guide</option><option>Hotel</option><option>Transport</option></select></label>
      )}
      <button className="button primary" type="submit">{type === "trip" ? "Create booking request" : "Prepare inquiry"}</button>
      {sent && (
        <div className="success" style={{ display: "block" }}>
          Request prepared. Next step: connect this form to email, Supabase, Airtable, or Stripe checkout so travelers can submit and pay online.
        </div>
      )}
    </form>
  );
}

export function Planner() {
  const [days, setDays] = useState("7");
  const [style, setStyle] = useState("first");
  const routes: Record<string, string> = {
    classic: "Beijing for the Great Wall and Forbidden City, Xi'an for the Terracotta Army, Shanghai for the skyline.",
    nature: "Zhangjiajie for sandstone peaks, Guilin and Yangshuo for karst rivers, Yunnan for old towns and mountains.",
    family: "Beijing icons, Chengdu pandas and food, Shanghai museums and easy transport.",
    first: "Beijing, Xi'an, Chengdu and Shanghai with high-speed rail between major stops."
  };

  return (
    <form className="planner">
      <label>Trip length<select value={days} onChange={(event) => setDays(event.target.value)}><option>5</option><option>7</option><option>10</option><option>14</option></select></label>
      <label>Travel style<select value={style} onChange={(event) => setStyle(event.target.value)}><option value="first">First China trip</option><option value="classic">Classic icons</option><option value="nature">Nature and scenery</option><option value="family">Family comfort</option></select></label>
      <div className="notice">{days} days: {routes[style]}</div>
    </form>
  );
}
