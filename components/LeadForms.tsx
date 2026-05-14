"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ type = "trip" }: { type?: "trip" | "partner" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="card pad planner" onSubmit={onSubmit}>
      <h3>{type === "trip" ? "Trip request" : "Partner inquiry"}</h3>
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      {type === "trip" ? (
        <>
          <label>Trip month<input name="month" placeholder="e.g. October 2026" /></label>
          <label>Interests<textarea name="message" placeholder="Cities, budget, travel style, and biggest concern" /></label>
        </>
      ) : (
        <label>Offer type<select name="type"><option>Travel service</option><option>Local guide</option><option>Hotel</option><option>Transport</option></select></label>
      )}
      <button className="button primary" type="submit">{type === "trip" ? "Prepare request" : "Prepare inquiry"}</button>
      {sent && <div className="success" style={{ display: "block" }}>Thanks. This demo form is ready to connect to your CRM, email workflow, or Supabase backend.</div>}
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
