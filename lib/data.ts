export type Destination = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  summary: string;
  tags: string[];
  facts: [string, string][];
  externalLabel: string;
  externalUrl: string;
  sections: { title: string; body: string[] }[];
};

export type Essential = {
  slug: string;
  title: string;
  summary: string;
  sections: { title: string; body: string[] }[];
  external?: { label: string; url: string };
};

export const destinations: Destination[] = [
  {
    slug: "great-wall",
    name: "Great Wall",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_of_China_July_2006.JPG?width=1600",
    alt: "Great Wall near Beijing",
    summary: "Mutianyu for first-timers, Jinshanling for hikers, Badaling for easiest access.",
    tags: ["Beijing day trip", "Reserve transfer"],
    facts: [["Base city", "Beijing"], ["Time needed", "6-9 hours"], ["Best months", "Apr-May, Sep-Oct"], ["Difficulty", "Easy to hard"]],
    externalLabel: "Beijing official page",
    externalUrl: "https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260325_4566115.html",
    sections: [
      { title: "Best section for you", body: ["Mutianyu is the best default for first-time visitors: scenic, restored, less intense than Badaling, and manageable with private transfer or bus. Badaling is easiest by public transport. Jinshanling is better for hikers and photographers."] },
      { title: "How to go", body: ["Private transfer is simplest for families and tight schedules. Bus and group tours are cheaper, but check shopping-stop policies. Public transport is possible, though station names and transfers can slow first-timers."] },
      { title: "Ticket and timing strategy", body: ["Book cable car or shuttle options when available and bring the passport used for booking. Arrive early, avoid major public holidays, and pack water because exposed wall sections get hot and windy."] }
    ]
  },
  {
    slug: "forbidden-city",
    name: "Forbidden City",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_China_Forbidden-City-03.jpg?width=1600",
    alt: "Forbidden City architecture",
    summary: "Beijing's palace core, best paired with Jingshan Park and hutong evenings.",
    tags: ["Passport ticket", "Morning route"],
    facts: [["Base city", "Beijing"], ["Time needed", "3-5 hours"], ["Closed", "Often Mondays"], ["Best pairing", "Jingshan"]],
    externalLabel: "Palace Museum official site",
    externalUrl: "https://intl.dpm.org.cn/index.html",
    sections: [
      { title: "Plan the visit", body: ["Reserve tickets early through official or trusted channels, enter with the passport used at booking, and start in the morning. Choose a main-axis route plus one or two side halls rather than trying to see everything."] },
      { title: "Best route", body: ["Enter from the south, move north through the grand halls, then climb Jingshan Park after exit for the classic roofline view. Add hutongs or a Peking duck dinner for contrast."] },
      { title: "Traveler tips", body: ["Carry your passport, not just a photo. Download translation and map apps before the day. Be ready for Tiananmen-area security queues and bag rules."] }
    ]
  },
  {
    slug: "zhangjiajie",
    name: "Zhangjiajie",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie_National_Forest_Park.jpg?width=1600",
    alt: "Zhangjiajie mountain pillars",
    summary: "Avatar-like pillars, cable cars, glass bridges, and weather-sensitive viewpoints.",
    tags: ["Nature", "2-4 days"],
    facts: [["Time needed", "3-4 days"], ["Style", "Nature"], ["Transport", "Flight or rail"]],
    externalLabel: "Zhangjiajie tourism site",
    externalUrl: "https://www.cn-zhangjiajie.com/index.php",
    sections: [
      { title: "How many days", body: ["Spend at least two full days for Zhangjiajie National Forest Park. Add Tianmen Mountain or the Grand Canyon Glass Bridge if you have a third or fourth day."] },
      { title: "Where to stay", body: ["Wulingyuan is convenient for the national park. Zhangjiajie city is better for Tianmen Mountain and rail or airport access."] },
      { title: "Key advice", body: ["Weather changes quickly; keep one flexible day if photography matters. Scenic buses, cable cars, and elevators mean travel time inside the park is real."] }
    ]
  },
  {
    slug: "guilin",
    name: "Guilin & Yangshuo",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_li_jiang_guilin_yangshuo_2011.jpg?width=1600",
    alt: "Guilin Li River karst landscape",
    summary: "Li River scenery, cycling villages, bamboo rafts, and mellow rural stays.",
    tags: ["Scenery", "3 days"],
    facts: [["Time needed", "2-4 days"], ["Best base", "Yangshuo"], ["Trip style", "Scenery"]],
    externalLabel: "Li River official site",
    externalUrl: "https://en.liriver.com.cn/",
    sections: [
      { title: "Best way to experience it", body: ["Use Guilin as the transport base and Yangshuo as the atmosphere base. A Li River cruise or selected river segment, countryside cycling, and an evening show make a strong three-day plan."] },
      { title: "Good for", body: ["Couples, photographers, families who want gentler days, and travelers who need a break from megacity pace."] },
      { title: "Watch-outs", body: ["Rain and haze affect views; build flexibility into scenic days. Some rural transfers are easier with hotel-arranged drivers."] }
    ]
  },
  {
    slug: "terracotta-army",
    name: "Terracotta Army",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qin_Terracotta_Army,_Pit_1_07.jpg?width=1600",
    alt: "Terracotta Army pit",
    summary: "Xi'an's headline sight, best with city walls and Muslim Quarter food.",
    tags: ["Archaeology", "Xi'an"],
    facts: [["Base city", "Xi'an"], ["Time needed", "Half day"], ["Best add-on", "City Wall"]],
    externalLabel: "Museum official site",
    externalUrl: "https://www.bmy.com.cn/",
    sections: [
      { title: "Visit strategy", body: ["Go early, start with the largest pit, and leave time for museum context. A guide adds real value because the scale and excavation history are easy to miss without explanation."] },
      { title: "How to combine Xi'an", body: ["Plan one day for the Terracotta Army and one day for Xi'an city wall, Muslim Quarter food, Great Mosque area, and Tang-style night views."] },
      { title: "Practical notes", body: ["Keep passport details consistent for tickets. Traffic from central Xi'an can be slow. Skip low-quality souvenir detours unless you actively want shopping."] }
    ]
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pudong_Shanghai_November_2017_panorama.jpg?width=1600",
    alt: "Shanghai skyline",
    summary: "Arrival-friendly city for skyline, food, shopping, museums, and day trips.",
    tags: ["Urban", "Metro easy"],
    facts: [["Time needed", "2-4 days"], ["Transport", "Metro"], ["Best view", "Bund"]],
    externalLabel: "Shanghai official travel",
    externalUrl: "https://english.shanghai.gov.cn/en-TravelinShanghai/index.html",
    sections: [
      { title: "What to do", body: ["Walk the Bund at blue hour, cross to Lujiazui for tower views, explore the Former French Concession, and add museums, street food, or a water-town day trip."] },
      { title: "Why travelers like it", body: ["Shanghai is relatively simple for arrivals: strong metro, many international hotels, more English support than smaller cities, and smooth connections to Hangzhou, Suzhou, and Beijing by rail."] },
      { title: "Planning advice", body: ["Use Shanghai as either the first soft landing or the final decompression city before flying out."] }
    ]
  },
  {
    slug: "chengdu",
    name: "Chengdu",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chengdu-pandas-d10.jpg?width=1600",
    alt: "Chengdu pandas",
    summary: "Pandas, teahouses, Sichuan food, and relaxed western China gateway.",
    tags: ["Food", "Pandas"],
    facts: [["Time needed", "2-3 days"], ["Best for", "Food"], ["Top sight", "Pandas"]],
    externalLabel: "Panda Base official site",
    externalUrl: "https://www.panda.org.cn/en",
    sections: [
      { title: "How to plan", body: ["Visit the panda base early in the morning, keep one meal open for hotpot, and leave time for People's Park teahouses. Chengdu works well after Xi'an or before Yunnan routes."] },
      { title: "Food and comfort", body: ["Sichuan food can be spicy, but non-spicy options exist. Use translation apps for allergies and dietary needs, and pick central hotels near metro lines."] },
      { title: "Add-ons", body: ["Leshan Giant Buddha and Mount Emei are classic extensions if you have extra days."] }
    ]
  },
  {
    slug: "yunnan",
    name: "Yunnan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_lijiang_old_town_night.jpg?width=1600",
    alt: "Yunnan old town",
    summary: "Dali, Lijiang, Shangri-La, minority culture, and mountain climate shifts.",
    tags: ["Slow travel", "Altitude"],
    facts: [["Time needed", "5-8 days"], ["Best route", "Dali-Lijiang"], ["Watch", "Altitude"]],
    externalLabel: "Yunnan travel portal",
    externalUrl: "https://english.yunnan.cn/html/travel_culture/13.html",
    sections: [
      { title: "Route idea", body: ["Fly or rail into Kunming, continue to Dali for lake scenery, Lijiang for old-town energy, and Shangri-La if you can handle altitude and want Tibetan-influenced landscapes."] },
      { title: "What to prepare", body: ["Layer clothing because altitude and evenings change the temperature. Plan slower transfers than the map suggests. Check hotel location carefully in old towns."] },
      { title: "Best for", body: ["Travelers who want China beyond the megacities and can spare at least five to seven days."] }
    ]
  }
];

export const essentials: Essential[] = [
  {
    slug: "connectivity",
    title: "SIM, eSIM and Apps",
    summary: "Get online before you need a map, train code, payment QR, or translation help.",
    sections: [
      { title: "Best setup", body: ["Prepare an eSIM or international roaming before landing, then decide whether you need a local SIM after arrival. Local SIMs may require passport registration and airport counters vary by city and arrival time."] },
      { title: "Install before departure", body: ["Install Alipay and WeChat, a translation app with offline packs, map tools that work in China, and rail access through 12306 or your preferred booking provider."] },
      { title: "Practical safety", body: ["Keep your hotel address and emergency contact offline. Do not rely on SMS-only account recovery while switching SIMs."] }
    ]
  },
  {
    slug: "payments",
    title: "Payments in China",
    summary: "Set up mobile payments before arrival and keep a backup for hotels, deposits, and edge cases.",
    external: { label: "Official payment guide", url: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html" },
    sections: [
      { title: "What works", body: ["Travelers can usually use Alipay and WeChat Pay by linking international bank cards such as Visa or Mastercard. UnionPay, bank cards, and RMB cash can still be useful backups."] },
      { title: "Before you fly", body: ["Download Alipay and WeChat, register, verify identity where requested, link at least one card, tell your bank you will travel in China, and carry some RMB cash."] },
      { title: "On the ground", body: ["Most merchants use QR payment. Scan the merchant code or show your payment code. If a transaction fails, try the other app, a different card, or cash."] }
    ]
  },
  {
    slug: "transport",
    title: "Transport and Trains",
    summary: "Use high-speed rail between cities and metro or ride-hailing inside cities, with passport details kept exact.",
    external: { label: "12306 English site", url: "https://www.12306.cn/en/" },
    sections: [
      { title: "High-speed rail", body: ["China Railway's official English 12306 site and app support ticket purchase, changes, and refunds. Travelers use valid passports for real-name ticketing and station entry."] },
      { title: "Booking steps", body: ["Create a 12306 account or use a trusted reseller if you need simpler English support. Complete passport verification early, book popular routes when sales open, and arrive early at large stations."] },
      { title: "City transport", body: ["Metro systems in Beijing, Shanghai, Chengdu, Xi'an, and Guangzhou are efficient. Save hotel names in Chinese for taxis and ride-hailing."] }
    ]
  },
  {
    slug: "hotels",
    title: "Hotels and Stays",
    summary: "Choose places that reduce friction: passport check-in support, good transit, and a realistic arrival plan.",
    sections: [
      { title: "Traveler-ready booking criteria", body: ["Choose hotels that can process passport registration, sit near metro or rail links, provide a clear Chinese address, and keep a 24-hour front desk for late arrivals."] },
      { title: "Where to stay", body: ["In Beijing, stay near Dongcheng, Wangfujing, or convenient metro lines. In Shanghai, consider People's Square, Jing'an, or the Bund area."] },
      { title: "Deposits and payment", body: ["Some hotels may request deposits. Keep a mobile payment app, bank card, and small cash reserve ready."] }
    ]
  },
  {
    slug: "tickets",
    title: "Attraction Tickets",
    summary: "Many headline sights use timed reservations and passport-linked entry.",
    sections: [
      { title: "General rules", body: ["Use the same passport spelling and number everywhere, book high-demand museums and scenic areas early, bring the physical passport, and watch closure days or timed slots."] },
      { title: "Where friction appears", body: ["Some official mini-programs are Chinese-first. If a booking flow blocks you, use a hotel concierge, reputable reseller, or guided product."] },
      { title: "High-demand examples", body: ["Forbidden City, popular Great Wall cable cars, Zhangjiajie scenic zones, Terracotta Army peak periods, and major museums can all sell out or become slow around holidays."] }
    ]
  },
  {
    slug: "visa",
    title: "Visa and Transit",
    summary: "Entry rules change. Verify nationality, route, ports, documents, and onward ticket before paying for flights.",
    external: { label: "Official transit policy", url: "https://english.www.gov.cn/english.www.gov.cn/news/202412/17/content_WS6760ead6c6d0868f4e8ee0c1.html" },
    sections: [
      { title: "240-hour transit basics", body: ["China's optimized visa-free transit policy allows eligible travelers from listed countries to transit through specified ports and stay in approved areas for up to 240 hours when traveling onward to a third country or region."] },
      { title: "Pre-booking checklist", body: ["Check passport eligibility, covered entry and exit ports, onward travel to a third country or region, and documents that match your declared plan."] },
      { title: "Important note", body: ["This is planning guidance, not legal advice. Always verify with official immigration or consular channels before travel."] }
    ]
  }
];

export const externalSources = [
  ["Payment service guide", "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html"],
  ["12306 China Railway English", "https://www.12306.cn/en/"],
  ["12306 ticketing FAQ", "https://www.12306.cn/en/faq.html?item=2"],
  ["China transit policy", "https://english.www.gov.cn/english.www.gov.cn/news/202412/17/content_WS6760ead6c6d0868f4e8ee0c1.html"],
  ["Travel China official tourism website", "https://www.travelchina.org.cn/en"]
];
