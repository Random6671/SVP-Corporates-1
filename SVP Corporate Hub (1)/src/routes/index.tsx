import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import aptStudio from "@/assets/apt-studio.jpg";
import aptExecutive from "@/assets/apt-executive.jpg";
import aptOnebed from "@/assets/apt-onebed.jpg";
import aptDeluxe from "@/assets/apt-deluxe.jpg";
import aptTwobed from "@/assets/apt-twobed.jpg";
import aptPenthouse from "@/assets/apt-penthouse.jpg";
import amConcierge from "@/assets/amenity-concierge.jpg";
import amRooftop from "@/assets/amenity-rooftop.jpg";
import amRestaurant from "@/assets/amenity-restaurant.jpg";
import offDine from "@/assets/offer-dine.jpg";
import offCity from "@/assets/offer-city.jpg";
import offBusiness from "@/assets/offer-business.jpg";
import offWellness from "@/assets/offer-wellness.jpg";
import offRetreat from "@/assets/offer-retreat.jpg";
import offAirport from "@/assets/offer-airport.jpg";
import detail1 from "@/assets/detail-1.jpg";
import detail2 from "@/assets/detail-2.jpg";
import detail3 from "@/assets/detail-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVP Corporates — Serviced Apartments in Nagpur" },
      {
        name: "description",
        content:
          "Bespoke serviced apartments in Nagpur for executives and long-stay guests. Quietly refined interiors, 24/7 concierge, and business-ready comforts by SVP Corporates.",
      },
      { property: "og:title", content: "SVP Corporates — Serviced Apartments in Nagpur" },
      {
        property: "og:description",
        content: "Bespoke serviced apartments in Nagpur — quietly refined, business-ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Stay", href: "#stay" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

const apartments = [
  {
    img: aptStudio,
    tag: "1 Guest · Queen bed",
    name: "Studio",
    price: "6,500",
  },
  {
    img: aptExecutive,
    tag: "2 Guests · Queen bed",
    name: "Executive Studio",
    price: "8,200",
  },
  {
    img: aptOnebed,
    tag: "2 Guests · King bed",
    name: "One-Bedroom",
    price: "10,500",
  },
  {
    img: aptDeluxe,
    tag: "2 Guests · King bed",
    name: "Deluxe One-Bedroom",
    price: "12,800",
  },
  {
    img: aptTwobed,
    tag: "4 Guests · 2 Queen beds",
    name: "Two-Bedroom",
    price: "16,400",
  },
  {
    img: aptPenthouse,
    tag: "4 Guests · 2 King beds",
    name: "Penthouse Suite",
    price: "24,000",
  },
];

const amenities = [
  {
    img: amConcierge,
    name: "24/7 Concierge",
    line: "A dedicated desk that anticipates before you ask.",
  },
  {
    img: amRooftop,
    name: "Rooftop Lounge",
    line: "Evenings above the noise of the city.",
  },
  {
    img: amRestaurant,
    name: "In-house Restaurant",
    line: "Regional plates and quiet service, morning to late.",
  },
];

const capabilities = [
  "Business Centre",
  "Housekeeping, twice daily",
  "Airport Transfer",
  "High-speed Wi-Fi",
  "Laundry & Pressing",
  "Secure Parking",
];

const awards = [
  { name: "Best Serviced Apartments in Central India", org: "Hospitality Circle 2025" },
  { name: "Excellence in Long-Stay Service", org: "India Hotel Awards 2024" },
  { name: "Traveller’s Choice", org: "Corporate Journey Guide 2025" },
  { name: "Top Business Retreat", org: "Nagpur Chamber of Commerce" },
  { name: "Design & Hospitality Merit", org: "Central India Design Review" },
];

const testimonials = [
  {
    quote:
      "Ten weeks between projects in Nagpur and it never felt temporary. The team learned my coffee order in three days.",
    name: "Meera Kulkarni",
    role: "Partner, Advisory Practice",
  },
  {
    quote:
      "Every detail is considered. The linens, the lighting, the quiet lift — it’s the closest thing to a home our travelling directors have.",
    name: "Rohan Deshpande",
    role: "COO, Manufacturing Group",
  },
  {
    quote:
      "SVP became our default for the Nagpur leg. Long stays, short stays, board dinners — one call, always handled.",
    name: "Anika Ferreira",
    role: "Executive Assistant to the Chairman",
  },
];

const offers = [
  { img: offDine, name: "Dine & Stay", line: "Nightly stay paired with breakfast and a private dinner for two." },
  { img: offRetreat, name: "Corporate Retreat", line: "Boardroom, catering, and adjoining suites for weekday offsites." },
  { img: offCity, name: "Weekend Escape", line: "Two nights, late checkout, and a curated Nagpur itinerary." },
  { img: offWellness, name: "Wellness Weekend", line: "Two spa treatments, dawn yoga, and slow breakfasts in-suite." },
  { img: offAirport, name: "Airport & Stay", line: "Doorstep chauffeur to and from Dr. Babasaheb Ambedkar Airport." },
  { img: offBusiness, name: "Business Trip Special", line: "Extended stays with pressed shirts, dedicated desk, and priority laundry." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stay />
      <Amenities />
      <Awards />
      <Showcase />
      <Testimonials />
      <Offers />
      <Contact />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border text-foreground"
          : "bg-transparent border-b border-transparent text-bone"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">SVP</span>
          <span
            className={`eyebrow hidden sm:inline transition-colors ${
              scrolled ? "" : "!text-bone/70"
            }`}
          >
            Corporates · Nagpur
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`group inline-flex items-center gap-2 border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all md:px-5 ${
            scrolled
              ? "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground"
              : "border-bone bg-bone text-graphite hover:bg-transparent hover:text-bone"
          }`}
        >
          Reserve
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>

  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Interior of an SVP Corporates serviced apartment at golden hour"
        width={1600}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/25 to-graphite/85" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 pb-14 pt-32 text-bone md:px-10 md:pb-20 md:pt-40">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-bone/70" />
          <span className="eyebrow !text-bone/80">Bespoke Corporate Hospitality · Est. Nagpur</span>
        </div>

        <div className="max-w-5xl">
          <h1 className="display text-[13vw] leading-[0.9] sm:text-[10vw] md:text-[8.2vw] lg:text-[128px]">
            Quietly<br />
            <em className="italic font-normal">refined</em> stays<br />
            in Nagpur.
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-bone/85">
            Serviced apartments for executives, long-stay professionals, and the occasional weekend of nothing in particular. Twelve residences. One quietly attentive team.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-bone px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-graphite transition-all hover:bg-bone/90"
            >
              Book your stay
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#stay"
              className="inline-flex items-center gap-3 border border-bone/40 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-bone/10"
            >
              Explore apartments
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-bone/20 pt-8 text-bone/80 md:grid-cols-4 md:gap-10">
          {[
            ["12", "Residences"],
            ["24/7", "Concierge"],
            ["3 min", "To Civil Lines"],
            ["₹6,500", "From, per night"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl">{n}</div>
              <div className="eyebrow mt-2 !text-bone/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 items-end gap-6 pb-14 md:pb-20">
      <div className="col-span-12 flex items-center gap-4 md:col-span-3">
        <span className="font-display text-5xl text-foreground/25">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display col-span-12 text-[9vw] leading-[0.95] sm:text-6xl md:col-span-9 md:text-7xl lg:text-[92px]">
        {title}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="01"
          eyebrow="About SVP"
          title={
            <>
              Long stays, made to
              <br />
              feel like <em className="italic font-normal">arrivals</em>.
            </>
          }
        />
        <Reveal>
          <div className="grid grid-cols-12 gap-8 border-t border-border pt-12 md:gap-12 md:pt-16">
            <div className="col-span-12 md:col-span-6">
              <p className="font-display text-3xl leading-[1.15] text-foreground md:text-4xl">
                We built SVP for the guests who arrive on a Sunday with a two-month brief — and end up staying nine.
              </p>
            </div>
            <div className="col-span-12 space-y-6 text-[15px] leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
              <p>
                Our residences sit five minutes from Nagpur’s business districts, dressed in linen, oak, and quiet stone. Kitchens stocked to your list. Wardrobes with room for a real one, not a cabin bag.
              </p>
              <p>
                The team is small and stays with us — the same concierge who greets you in March is the one who remembers your late flight in September.
              </p>
              <div className="hairline flex items-center justify-between pt-6">
                <span className="eyebrow">Since 2011</span>
                <span className="eyebrow">Family-owned · Nagpur</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stay() {
  return (
    <section id="stay" className="border-b border-border bg-sand px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="02"
          eyebrow="Apartments"
          title={
            <>
              Twelve residences,
              <br />
              six ways to stay.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {apartments.map((a, i) => (
            <Reveal key={a.name} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <a href="#contact" className="group block">
                <div className="relative overflow-hidden bg-graphite/5">
                  <img
                    src={a.img}
                    alt={`${a.name} apartment interior`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-bone/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-graphite backdrop-blur">
                    {a.tag}
                  </span>
                </div>
                <div className="hairline mt-6 flex items-end justify-between pt-4">
                  <div>
                    <h3 className="font-display text-2xl leading-tight md:text-[28px]">{a.name}</h3>
                    <div className="eyebrow mt-2">From ₹{a.price} / night</div>
                  </div>
                  <span className="pb-1 text-foreground transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="border-b border-border bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="03"
          eyebrow="Amenities"
          title={
            <>
              Every hour of the day,
              <br />
              <em className="italic font-normal">quietly</em> covered.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {amenities.map((a) => (
            <Reveal key={a.name}>
              <div className="group">
                <div className="overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display mt-6 text-2xl md:text-[26px]">{a.name}</h3>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-muted-foreground">{a.line}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="hairline mt-20 grid grid-cols-2 gap-6 pt-10 sm:grid-cols-3 md:grid-cols-6">
          {capabilities.map((c) => (
            <div key={c} className="text-[13px] leading-snug text-foreground/80">
              <span className="mb-3 block h-px w-6 bg-foreground/40" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="border-b border-border bg-graphite px-6 py-24 text-bone md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 items-end gap-6 pb-14 md:pb-20">
          <div className="col-span-12 flex items-center gap-4 md:col-span-3">
            <span className="font-display text-5xl text-bone/25">04</span>
            <span className="eyebrow !text-bone/60">Recognition</span>
          </div>
          <h2 className="display col-span-12 text-[9vw] leading-[0.95] sm:text-6xl md:col-span-9 md:text-7xl lg:text-[92px]">
            The quiet accolades <em className="italic font-normal">we tend to </em>
            forget to mention.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-bone/15 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.name}>
              <div className="flex items-start gap-6">
                <span className="font-display text-3xl text-bone/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-bone md:text-[26px]">
                    {a.name}
                  </h3>
                  <div className="eyebrow mt-3 !text-bone/50">{a.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="border-b border-border bg-sand px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="05"
          eyebrow="Featured Residence"
          title={
            <>
              Deluxe One-Bedroom,
              <br />
              a slow <em className="italic font-normal">walkthrough</em>.
            </>
          }
        />
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <img
              src={detail1}
              alt="Round wooden table with books and a glass"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-4 max-w-sm font-display text-lg italic leading-snug text-muted-foreground">
              The reading nook, laid quietly for a Sunday you didn’t plan to have.
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:mt-24">
            <img
              src={detail3}
              alt="Bedroom with a bathtub by the window"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[16/11] w-full object-cover"
            />
            <p className="mt-4 max-w-md font-display text-lg italic leading-snug text-muted-foreground">
              A soaking tub by the window — Nagpur’s dusk, at eye level.
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6">
            <img
              src={detail2}
              alt="Patterned armchair beside a brass side table"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-4 max-w-sm font-display text-lg italic leading-snug text-muted-foreground">
              Small brass, deep upholstery, dried stems — the details, kept.
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 md:mt-16">
            <div className="flex h-full flex-col justify-between bg-background p-8 md:p-12">
              <div>
                <span className="eyebrow">Plan · 62 sq. m.</span>
                <h3 className="font-display mt-6 text-4xl leading-[1] md:text-5xl">
                  Bedroom · Bath ·<br />
                  Living · Kitchenette
                </h3>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-y-5 text-[13px]">
                {[
                  ["Guests", "Up to 2"],
                  ["Bed", "King, linen"],
                  ["View", "City / East"],
                  ["Bath", "Stone soaking"],
                  ["Desk", "Full-height"],
                  ["Wi-Fi", "1 Gbps"],
                ].map(([k, v]) => (
                  <div key={k} className="hairline pt-3">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-b border-border bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="06"
          eyebrow="Guests · Long stays"
          title={
            <>
              Kind things,
              <br />
              said <em className="italic font-normal">unprompted</em>.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 border-t border-border pt-14 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name}>
              <div>
                <span className="font-display text-6xl leading-none text-foreground/25">“</span>
                <p className="font-display mt-2 text-2xl leading-[1.25] text-foreground md:text-[26px]">
                  {t.quote}
                </p>
                <div className="hairline mt-8 pt-4">
                  <div className="text-[14px] font-medium text-foreground">{t.name}</div>
                  <div className="eyebrow mt-1">{t.role}</div>
                </div>
                <div className="eyebrow mt-4">
                  0{i + 1} <span className="text-foreground/40">/ 03</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="offers" className="border-b border-border bg-sand px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          index="07"
          eyebrow="Offers & Packages"
          title={
            <>
              Reasons to stay
              <br />
              a night <em className="italic font-normal">longer</em>.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} className={i % 3 === 1 ? "lg:mt-14" : ""}>
              <a href="#contact" className="group block">
                <div className="overflow-hidden bg-graphite/5">
                  <img
                    src={o.img}
                    alt={o.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="hairline mt-6 flex items-baseline justify-between gap-4 pt-4">
                  <h3 className="font-display text-2xl leading-tight md:text-[26px]">{o.name}</h3>
                  <span className="eyebrow">0{i + 1}</span>
                </div>
                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                  {o.line}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-graphite px-6 py-24 text-bone md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 border-b border-bone/15 pb-16 md:pb-24">
          <div className="col-span-12 md:col-span-4">
            <span className="eyebrow !text-bone/60">Reserve</span>
          </div>
          <h2 className="display col-span-12 text-[11vw] leading-[0.95] text-bone md:col-span-8 md:text-8xl lg:text-[108px]">
            Stay with
            <br />
            <em className="italic font-normal">SVP</em>, Nagpur.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-14 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <div className="font-display text-3xl text-bone">SVP<br />Corporates</div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-bone/60">
              Serviced apartments and bespoke corporate hospitality. Nagpur, Maharashtra.
            </p>
          </div>

          <div>
            <span className="eyebrow !text-bone/50">Residence</span>
            <address className="mt-4 not-italic text-[14px] leading-relaxed text-bone/90">
              SVP Corporates<br />
              Civil Lines<br />
              Nagpur 440001<br />
              Maharashtra, India
            </address>
          </div>

          <div>
            <span className="eyebrow !text-bone/50">Reservations</span>
            <div className="mt-4 space-y-1 text-[14px] leading-relaxed text-bone/90">
              <div>+91 712 000 0000</div>
              <a href="mailto:stay@svpcorporates.in" className="block underline-offset-4 hover:underline">
                stay@svpcorporates.in
              </a>
              <div className="pt-3 text-bone/60">Front desk, 24 hours.</div>
            </div>
          </div>

          <div>
            <span className="eyebrow !text-bone/50">Hours & Follow</span>
            <div className="mt-4 space-y-1 text-[14px] text-bone/90">
              <div>Check-in — 14:00</div>
              <div>Check-out — 12:00</div>
              <div>Concierge — Always</div>
              <div className="hairline mt-6 flex gap-5 pt-4 !border-bone/15 text-[13px] text-bone/70">
                <a href="#" className="hover:text-bone">Instagram</a>
                <a href="#" className="hover:text-bone">LinkedIn</a>
                <a href="#" className="hover:text-bone">Journal</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-8 text-[11px] uppercase tracking-[0.2em] text-bone/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SVP Corporates, Nagpur</div>
          <div>Designed with care · Made to be lived in</div>
        </div>
      </div>
    </footer>
  );
}
