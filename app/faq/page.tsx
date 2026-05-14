import Link from "next/link";
import { PageHero } from "@/components/PageBlocks";

const faqs = [
  ["Can I travel without a Chinese phone number?", "Yes, but plan carefully. Many services can work with email, passport details, hotel help, international roaming, eSIM, or a travel provider. A local number can still make ride-hailing, delivery, and some mini-programs easier."],
  ["What if Alipay or WeChat Pay fails?", "Try the other app, a different linked card, a smaller transaction, or RMB cash. Tell your bank before travel, keep at least one backup card, and test both apps before relying on them for metro, food, or taxi payments."],
  ["Do I need my physical passport for tickets?", "For major attractions, rail, hotels, and some museums, yes. Use the same passport number and spelling when booking, and carry the physical passport on travel days."],
  ["How do I buy train tickets?", "Use the official 12306 English site or app when possible. If verification or payment is difficult, use a trusted reseller or hotel help. Book popular routes early and arrive at large stations with extra time."],
  ["Can every hotel accept international travelers?", "Choose hotels that clearly support passport registration and have a 24-hour front desk if you arrive late. Save the hotel name and address in Chinese, and keep the booking confirmation offline."],
  ["Are attraction tickets easy to buy on arrival?", "Not always. High-demand museums, scenic areas, and holiday dates can sell out or require timed entry. Book early for Forbidden City, major museums, Zhangjiajie, Huangshan, Mogao Caves, and festival events."],
  ["Is visa-free transit simple?", "It can be useful, but details matter: nationality, passport, entry port, exit port, onward ticket, and approved stay area. Verify official policy before paying for flights."],
  ["Which apps should I install before departure?", "Install Alipay, WeChat, a translation app with offline packs, map tools that work in China, airline apps, and your rail or booking tools. Save passport scans, hotel addresses, and emergency contacts offline."],
  ["How much cash should I carry?", "Mobile payments are dominant, but a small RMB backup helps for edge cases, hotel deposits, tiny vendors, or app issues. Keep cash secure and avoid relying on cash as your only payment method."],
  ["What is the best first China route?", "For many travelers, Beijing, Xi'an, Shanghai, and one nature or culture extension works better than trying to see everything. Use high-speed rail where it saves time, but leave recovery days for weather, queues, and jet lag."]
];

export default function FAQPage() {
  return (
    <>
      <PageHero title="China Travel FAQ" text="Fast answers for the problems that can slow down a first China trip: payments, phones, hotels, tickets, trains, passports, and transit rules." crumbs={[["FAQ", ""]]} />
      <section>
        <div className="wrap content">
          <article className="article faq-list">
            {faqs.map(([question, answer]) => (
              <div className="faq-item" key={question}>
                <h2>{question}</h2>
                <p>{answer}</p>
              </div>
            ))}
          </article>
          <aside className="sidebar">
            <div className="card pad">
              <h3>Start here</h3>
              <Link className="card-link" href="/essentials/payments">Payment setup</Link>
              <Link className="card-link" href="/essentials/connectivity">SIM and apps</Link>
              <Link className="card-link" href="/essentials/transport">Train planning</Link>
              <Link className="card-link" href="/itineraries">Route ideas</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
