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
  },
  {
    slug: "hangzhou",
    name: "Hangzhou",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/West_Lake,_Hangzhou.jpg?width=1600",
    alt: "Hangzhou West Lake scenery",
    summary: "West Lake, tea villages, temples, canals, and an easy high-speed rail add-on from Shanghai.",
    tags: ["Shanghai add-on", "West Lake"],
    facts: [["Base city", "Hangzhou"], ["Time needed", "1-3 days"], ["Best season", "Spring and autumn"], ["Transport", "High-speed rail"]],
    externalLabel: "Hangzhou tourism portal",
    externalUrl: "https://wgly.hangzhou.gov.cn/",
    sections: [
      { title: "Why go", body: ["Hangzhou works beautifully as a soft scenic break after Shanghai. West Lake is the headline, but the stronger trip usually adds Lingyin Temple, Longjing tea villages, canal areas, and a slow evening around the lake rather than treating the city as a rushed photo stop."] },
      { title: "How to plan it", body: ["A one-day trip from Shanghai is possible by high-speed rail, but one or two nights gives the lake more breathing room. Stay near West Lake, Wulin Square, or a metro corridor so rain, traffic, and crowds do not eat the day."] },
      { title: "Ticket and route tips", body: ["West Lake itself is open-access, while boats, temples, museums, performances, and tea experiences may have separate tickets. Weekends and holidays are crowded, so start early and use hotel help for tea village transfers if you want a calmer day."] }
    ]
  },
  {
    slug: "suzhou",
    name: "Suzhou",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suzhou_Zhuozheng_Yuan.jpg?width=1600",
    alt: "Suzhou classical garden",
    summary: "Classical gardens, canals, silk culture, old streets, and a relaxed rail trip from Shanghai.",
    tags: ["Gardens", "Shanghai day trip"],
    facts: [["Base city", "Suzhou or Shanghai"], ["Time needed", "1-2 days"], ["Best for", "Gardens and canals"], ["Transport", "Rail plus metro"]],
    externalLabel: "Suzhou official travel",
    externalUrl: "https://english.suzhou.gov.cn/szsenglish/travel/sz_en_list.shtml",
    sections: [
      { title: "Best route", body: ["For a first visit, combine one major classical garden, Pingjiang Road, a canal walk, and Suzhou Museum. The Humble Administrator's Garden is famous but busy; smaller gardens can feel more atmospheric when crowds are heavy."] },
      { title: "Day trip or overnight", body: ["A day trip from Shanghai is easy, but overnight travelers get quieter mornings and evenings. Choose a hotel near the old city or a metro line, and avoid building a schedule around too many gardens in one day."] },
      { title: "Practical notes", body: ["Garden tickets and museum reservations can be capacity-controlled. Bring the passport used for booking, keep Chinese names saved for taxis, and check whether your rail station is Suzhou, Suzhou North, or another suburban stop."] }
    ]
  },
  {
    slug: "guangzhou",
    name: "Guangzhou",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton_Tower_at_night.jpg?width=1600",
    alt: "Canton Tower and Guangzhou skyline",
    summary: "Cantonese food, old trading neighborhoods, river views, markets, museums, and Greater Bay links.",
    tags: ["Food", "Bay Area"],
    facts: [["Time needed", "2-3 days"], ["Best for", "Food and city life"], ["Transport", "Metro"], ["Add-ons", "Foshan, Hong Kong, Macau"]],
    externalLabel: "Guangzhou English portal",
    externalUrl: "https://www.lifeofguangzhou.com/",
    sections: [
      { title: "What to do", body: ["Build the trip around dim sum mornings, Shamian Island, Chen Clan Ancestral Hall, Canton Tower, Pearl River views, and old neighborhood food walks. Guangzhou is also useful for sourcing, trade fair visits, and Greater Bay Area routes."] },
      { title: "Food strategy", body: ["Reserve at least one proper Cantonese meal and one casual food crawl. Morning tea can be crowded on weekends, so go earlier or ask the hotel for local timing advice. Keep allergy and dietary notes translated because menus may be Chinese-first."] },
      { title: "Transport and stay", body: ["The metro is strong, but the city is large. Stay near Yuexiu, Tianhe, Zhujiang New Town, or the specific market or fair area you need. Guangzhou South Railway Station is useful for Hong Kong, Shenzhen, and wider China rail links."] }
    ]
  },
  {
    slug: "shenzhen",
    name: "Shenzhen",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shenzhen_Skyline_2017.jpg?width=1600",
    alt: "Shenzhen skyline",
    summary: "Modern design, coastal escapes, tech districts, creative parks, and simple links to Hong Kong.",
    tags: ["Modern China", "Hong Kong link"],
    facts: [["Time needed", "1-3 days"], ["Best for", "Design, coast, tech"], ["Transport", "Metro and rail"], ["Pair with", "Hong Kong or Guangzhou"]],
    externalLabel: "Shenzhen government travel guide",
    externalUrl: "https://www.sz.gov.cn/en_szgov/travel/guide/index.html",
    sections: [
      { title: "Why add it", body: ["Shenzhen shows a different side of China: young, coastal, design-heavy, and deeply connected to Hong Kong. It is less about ancient sights and more about urban energy, creative districts, seaside routes, museums, and easy Greater Bay movement."] },
      { title: "Good routes", body: ["Use OCT-LOFT, Nanshan museums, Sea World, Futian city views, and Dapeng coast depending on your style. If crossing from Hong Kong, check the exact border point and rail station before booking hotels."] },
      { title: "Planning advice", body: ["The city is spread out. Cluster each day by district rather than zigzagging. Beaches and Dapeng areas need more time than the map suggests, especially on weekends."] }
    ]
  },
  {
    slug: "chongqing",
    name: "Chongqing",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Night_View.jpg?width=1600",
    alt: "Chongqing night skyline",
    summary: "Mountain city streets, hotpot, river views, cyberpunk skylines, and Wulong nature add-ons.",
    tags: ["Food", "Mountain city"],
    facts: [["Time needed", "2-4 days"], ["Best for", "Food and city views"], ["Terrain", "Hilly"], ["Add-on", "Wulong"]],
    externalLabel: "Chongqing official portal",
    externalUrl: "https://www.ichongqing.info/",
    sections: [
      { title: "What makes it special", body: ["Chongqing is vertical, dramatic, and food-driven. Plan for layered streets, river viewpoints, hotpot, night scenes, and neighborhoods where navigation can feel like a puzzle in the best way."] },
      { title: "How to plan", body: ["Two days can cover city highlights such as Jiefangbei, Hongya Cave area, Liziba, river viewpoints, and food. Add one or two more days for Dazu Rock Carvings, Wulong karst landscapes, or slower neighborhood exploration."] },
      { title: "Watch-outs", body: ["Distances feel different because of hills, bridges, and stacked roads. Choose a central hotel, save Chinese addresses, and do not overload the day with too many cross-city hops. Spicy food is serious here, so prepare translated dietary notes if needed."] }
    ]
  },
  {
    slug: "huangshan",
    name: "Huangshan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Huangshan_pic_4.jpg?width=1600",
    alt: "Huangshan mountain peaks",
    summary: "Granite peaks, sunrise routes, cable cars, hot springs, and ancient Huizhou villages.",
    tags: ["Mountain", "2-3 days"],
    facts: [["Time needed", "2-3 days"], ["Best season", "Spring and autumn"], ["Difficulty", "Moderate"], ["Base", "Tunxi or mountain area"]],
    externalLabel: "Huangshan travel guide",
    externalUrl: "https://www.huangshan.gov.cn/English/Huangshanscenicplaces/TravelGuide/index.html",
    sections: [
      { title: "Best way to visit", body: ["Huangshan rewards an overnight plan. Stay on or near the mountain if sunrise matters, or stay in Tunxi for easier rail access and add Hongcun or Xidi villages for Huizhou architecture."] },
      { title: "Route planning", body: ["Cable cars reduce climbing but do not remove walking. Weather can change quickly, paths are stepped, and popular sunrise points fill early. Build a backup plan if clouds or rain affect the main viewpoints."] },
      { title: "Ticket and packing notes", body: ["Check cable car maintenance, scenic area ticket rules, and seasonal access before arrival. Pack layers, rain protection, snacks, and shoes that can handle many stairs. Large luggage is inconvenient on mountain routes."] }
    ]
  },
  {
    slug: "dunhuang",
    name: "Dunhuang",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mogao_Caves,_Dunhuang,_China.jpg?width=1600",
    alt: "Mogao Caves near Dunhuang",
    summary: "Mogao Caves, desert dunes, Silk Road history, night markets, and big western China landscapes.",
    tags: ["Silk Road", "Desert"],
    facts: [["Time needed", "2-3 days"], ["Best for", "History and desert"], ["Key ticket", "Mogao Caves"], ["Climate", "Dry, big temperature shifts"]],
    externalLabel: "Dunhuang travel platform",
    externalUrl: "https://www.chinabound.cn/dunhuang",
    sections: [
      { title: "Why go", body: ["Dunhuang is one of the strongest Silk Road stops for travelers who want China beyond big cities. The core is Mogao Caves, then Mingsha Mountain, Crescent Spring, desert sunsets, night markets, and museum context."] },
      { title: "Ticket strategy", body: ["Mogao Caves require advance planning and visitor flow is controlled. Book early, check whether English interpretation is available for your date, and keep the passport used for booking ready. Do not leave Mogao for the final hours of the trip."] },
      { title: "Route fit", body: ["Dunhuang pairs best with a wider Gansu or Silk Road route, or as a focused fly-in trip for history lovers. Distances in western China are large, so avoid squeezing it between far-apart cities without checking flight and train timing."] }
    ]
  },
  {
    slug: "harbin",
    name: "Harbin",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin_Ice_and_Snow_World.jpg?width=1600",
    alt: "Harbin Ice and Snow World",
    summary: "Ice festival season, Russian-influenced streets, winter food, music culture, and snow scenery.",
    tags: ["Winter", "Ice festival"],
    facts: [["Best season", "Dec-Feb"], ["Time needed", "2-3 days"], ["Weather", "Very cold"], ["Key area", "Ice and Snow World"]],
    externalLabel: "Harbin city portal",
    externalUrl: "https://govt.chinadaily.com.cn/regional/harbin.html",
    sections: [
      { title: "When to go", body: ["Harbin is strongest in deep winter, especially around Ice and Snow World and snow-themed events. Exact opening dates and holiday crowd levels matter, so verify current schedules before booking flights."] },
      { title: "How to prepare", body: ["Cold weather is the main logistics issue. Bring serious layers, gloves that work with phones, warm shoes, and battery backup. Plan shorter outdoor blocks and warm indoor stops."] },
      { title: "Trip shape", body: ["Use two or three days for the ice park, Central Street, Saint Sophia area, local food, and optional snow activities. Avoid peak public holiday dates if hotel prices and crowds matter."] }
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
