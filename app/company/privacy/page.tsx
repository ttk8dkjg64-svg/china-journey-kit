import { PageHero } from "@/components/PageBlocks";

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" text="This demo does not transmit form data. Before launch marketing, connect forms to a compliant provider and publish your real data controller details." crumbs={[["Privacy", ""]]} />
      <section><div className="wrap article"><h2>Current data use</h2><p>Forms display local confirmation only. No analytics, advertising pixels, or third-party scripts are installed.</p><h2>Before public campaigns</h2><p>Add consent management, referral disclosure, email opt-in language, deletion request workflow, and jurisdiction-specific privacy text.</p></div></section>
    </>
  );
}
