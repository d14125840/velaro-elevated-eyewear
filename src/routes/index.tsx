import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/velaro-hero.jpg";
import lifestyleImg from "@/assets/velaro-lifestyle.jpg";
import noirImg from "@/assets/velaro-noir.jpg";
import titanImg from "@/assets/velaro-titan.jpg";
import goldImg from "@/assets/velaro-gold.jpg";
import packagingAsset from "@/assets/velaro-packaging-new.png.asset.json";
import specsheetAsset from "@/assets/velaro-specsheet.png.asset.json";
import ig1 from "@/assets/velaro-ig-1.jpg";
import ig2 from "@/assets/velaro-ig-2.jpg";
import ig3 from "@/assets/velaro-ig-3.jpg";
import ig4 from "@/assets/velaro-ig-4.jpg";
import ig5 from "@/assets/velaro-ig-5.jpg";
import ig6 from "@/assets/velaro-ig-6.jpg";
import logoVAsset from "@/assets/velaro-logo-full.png.asset.json";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SplitText } from "@/components/SplitText";
import { CounterUp } from "@/components/CounterUp";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ParticleField } from "@/components/ParticleField";
import { ImageReveal } from "@/components/ImageReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELARO — Crafted for those who stand out" },
      { name: "description", content: "Premium polarized sunglasses designed for confidence, elegance and everyday luxury. Discover the VELARO Aura Collection." },
      { property: "og:title", content: "VELARO — Crafted for those who stand out" },
      { property: "og:description", content: "Premium polarized sunglasses designed for confidence, elegance and everyday luxury." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: VelaroHome,
});

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="velaro-glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 sm:px-10">
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-foreground/80 md:flex">
          <MagneticButton strength={0.2}>
            <a href="#collection" className="hover:text-gold transition-colors">Shop</a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#story" className="hover:text-gold transition-colors">Story</a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#packaging" className="hover:text-gold transition-colors">Packaging</a>
          </MagneticButton>
        </nav>
        <a href="#" className="justify-self-center">
          <img src={logoVAsset.url} alt="VELARO" className="h-10 w-auto brightness-110 sm:h-12" />
        </a>
        <nav className="hidden items-center justify-end gap-8 text-xs uppercase tracking-[0.28em] text-foreground/80 md:flex">
          <MagneticButton strength={0.2}>
            <a href="#journal" className="hover:text-gold transition-colors">Journal</a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#cart" className="text-gold">Bag (0)</a>
          </MagneticButton>
        </nav>
        <div className="justify-self-end md:hidden">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Menu</span>
        </div>
      </div>
      <div className="gold-rule opacity-40" />
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background grain">
      {/* Animated gradient mesh background */}
      <div className="velaro-gradient-mesh pointer-events-none absolute inset-0 -z-20" />

      {/* Particle field */}
      <ParticleField count={30} className="-z-5" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="velaro-glow absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 text-center sm:px-10">
        <p className="eyebrow reveal" style={{ animationDelay: "0.1s" }}>
          Velaro Signature Collection
        </p>

        <SplitText
          as="h1"
          text="Crafted for those who stand out."
          className="mt-8 max-w-5xl text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-[5.5rem]"
          delay={300}
          staggerDelay={100}
        />

        <p
          className="reveal mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.55s" }}
        >
          Premium polarized sunglasses designed for confidence, elegance
          and everyday luxury.
        </p>

        <div
          className="reveal mt-12 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.75s" }}
        >
          <MagneticButton>
            <a href="#collection" className="btn-gold">Shop Now</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#story" className="btn-ghost-gold">Discover Velaro</a>
          </MagneticButton>
        </div>

        <div
          className="reveal-slow relative mt-20 w-full max-w-5xl"
          style={{ animationDelay: "0.9s" }}
        >
          <div
            className="absolute inset-x-10 top-1/2 -z-10 h-64 -translate-y-1/2 blur-3xl"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <img
            src={heroImg}
            alt="VELARO signature sunglasses with gold detailing"
            width={1600}
            height={1200}
            className="velaro-float mx-auto w-full select-none object-contain"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll
        </div>
      </div>
    </section>
  );
}

/* ---------- LIFESTYLE ---------- */
function Lifestyle() {
  return (
    <section className="relative bg-background velaro-section-transition">
      <div className="relative h-[70vh] w-full overflow-hidden sm:h-[85vh]">
        <ImageReveal direction="left" duration={1200}>
          <img
            src={lifestyleImg}
            alt="Model wearing VELARO sunglasses in cinematic lighting"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-[70vh] sm:h-[85vh] w-full object-cover"
          />
        </ImageReveal>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 flex h-full items-center absolute inset-0">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:px-10 md:grid-cols-2">
            <div className="max-w-lg">
              <p className="eyebrow scroll-reveal">The Velaro Atelier</p>
              <SplitText
                as="h2"
                text="More than eyewear."
                className="mt-6 text-4xl text-foreground sm:text-6xl"
                delay={200}
              />
              <p className="scroll-reveal mt-6 text-base font-light leading-relaxed text-foreground/80">
                VELARO was created for individuals who appreciate timeless
                style, confidence and attention to detail. Every pair is
                designed to elevate your presence — from the cut of the
                acetate to the weight in your hand.
              </p>
              <div className="scroll-reveal mt-10">
                <MagneticButton>
                  <a href="#story" className="btn-ghost-gold">Our philosophy</a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY VELARO ---------- */
const features = [
  { t: "UV400 Protection", d: "Full-spectrum defense against UVA and UVB radiation.", i: SunIcon },
  { t: "Polarized Lenses", d: "Cinematic clarity, zero glare. Engineered in Italy.", i: LensIcon },
  { t: "Premium Materials", d: "Hand-finished acetate and surgical-grade metal alloys.", i: GemIcon },
  { t: "Lightweight Comfort", d: "Balanced under 28 grams — built for all-day wear.", i: FeatherIcon },
  { t: "Luxury Packaging", d: "Signature magnetic box, leather case and microfiber.", i: BoxIcon },
  { t: "30-Day Guarantee", d: "Wear them, live in them, return them. Risk-free.", i: ShieldIcon },
];

function WhyVelaro() {
  return (
    <section className="relative border-t border-border bg-background py-28 sm:py-40 velaro-section-transition">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow scroll-reveal">Why Velaro</p>
          <SplitText
            as="h2"
            text="Engineered without compromise."
            className="mt-6 text-4xl text-foreground sm:text-5xl"
            delay={100}
          />
          <div className="gold-rule mx-auto mt-8 w-24 scroll-reveal" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ t, d, i: Icon }, index) => (
            <div
              key={t}
              className="spotlight-card group relative bg-background p-10 transition-colors duration-500 hover:bg-card scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <Icon />
              <h3 className="mt-8 text-2xl text-foreground">{t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{d}</p>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LIMITED EDITION ---------- */
function LimitedEdition() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-32 sm:py-48 velaro-section-transition">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="absolute inset-x-0 top-0 gold-rule opacity-50" />
      <div className="absolute inset-x-0 bottom-0 gold-rule opacity-50" />

      <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">First Production Run · 2026</p>
        <SplitText
          as="h2"
          text="Limited First Edition Release"
          className="mt-8 text-5xl text-foreground sm:text-7xl"
          delay={100}
          staggerDelay={120}
        />
        <p className="scroll-reveal mt-8 text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          A limited number of pieces are available during the first
          production run. Each frame is numbered. Each owner becomes part
          of a small, deliberate circle.
        </p>

        {/* Featured first edition spec sheet */}
        <figure className="scroll-reveal-scale mt-16 group relative">
          <div
            className="absolute -inset-6 -z-10 opacity-50 blur-3xl"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-luxe)]">
            <img
              src={specsheetAsset.url}
              alt="VELARO One — First Edition: Black, Tortoise and Crystal. Technical specifications, materials and included packaging."
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full object-contain transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="mt-6 text-[10px] uppercase tracking-[0.32em] text-gold">
            Velaro One · Black · Tortoise · Crystal
          </figcaption>
        </figure>

        <p className="scroll-reveal mt-12 text-sm uppercase tracking-[0.32em] text-gold">
          Own a piece of the beginning.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="text-center scroll-reveal">
            <div className="text-3xl font-light text-gold sm:text-5xl">
              <CounterUp end={500} duration={2500} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Pieces</div>
          </div>
          <div className="text-center scroll-reveal" style={{ transitionDelay: "100ms" }}>
            <div className="text-3xl font-light text-gold sm:text-5xl">
              <CounterUp end={3} prefix="0" duration={2000} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Frames</div>
          </div>
          <div className="text-center scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="text-3xl font-light text-gold sm:text-5xl">
              <CounterUp end={1} prefix="0" duration={1500} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Edition</div>
          </div>
        </div>

        <div className="scroll-reveal mt-12">
          <MagneticButton>
            <a href="#collection" className="btn-gold">Reserve Yours</a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTION ---------- */
const products = [
  { name: "Velaro Noir", frame: "Black frame", lens: "Dark polarized lenses", price: "€79.99", img: noirImg },
  { name: "Velaro Titan", frame: "Silver frame", lens: "Grey polarized lenses", price: "€79.99", img: titanImg },
  { name: "Velaro Gold", frame: "Gold frame", lens: "Brown polarized lenses", price: "€79.99", img: goldImg },
];

function Collection() {
  return (
    <section id="collection" className="bg-background py-28 sm:py-40 velaro-section-transition">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow scroll-reveal">The Aura Collection</p>
            <SplitText
              as="h2"
              text="Three frames. One signature."
              className="mt-6 text-5xl text-foreground sm:text-7xl"
              delay={100}
            />
          </div>
          <a href="#" className="scroll-reveal text-xs uppercase tracking-[0.32em] text-gold hover:underline">View all →</a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {products.map((p, index) => (
            <TiltCard key={p.name} className="scroll-reveal" maxTilt={8} scale={1.03}>
              <article
                className="spotlight-card group relative"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <ImageReveal direction="bottom" duration={900} delay={index * 150}>
                  <div className="relative overflow-hidden bg-card aspect-square">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: "var(--gradient-radial-gold)" }}
                    />
                    <img
                      src={p.img}
                      alt={`${p.name} — ${p.frame} with ${p.lens}`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="relative h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 p-4 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                      <div className="flex gap-3">
                        <MagneticButton strength={0.15} className="flex-1">
                          <button className="btn-gold w-full !py-3 !px-4 !text-[10px]">Add to Cart</button>
                        </MagneticButton>
                        <button className="btn-ghost-gold !py-3 !px-4 !text-[10px]">Quick View</button>
                      </div>
                    </div>
                  </div>
                </ImageReveal>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-2xl text-foreground">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {p.frame} · {p.lens}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-lg font-light text-gold">{p.price}</div>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PACKAGING ---------- */
function Packaging() {
  const items = [
    "Premium black magnetic box",
    "Protective leather carrying case",
    "Microfiber cleaning cloth",
    "Numbered warranty card",
  ];
  return (
    <section id="packaging" className="relative border-y border-border bg-background py-28 sm:py-40 velaro-section-transition">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <ImageReveal direction="left" duration={1100}>
          <div className="relative">
            <div
              className="absolute -inset-10 -z-10 opacity-60 blur-3xl"
              style={{ background: "var(--gradient-radial-gold)" }}
            />
            <img
              src={packagingAsset.url}
              alt="VELARO premium magnetic box, leather case and microfiber cloth"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full object-cover shadow-[var(--shadow-luxe)]"
            />
          </div>
        </ImageReveal>

        <div className="max-w-lg">
          <p className="eyebrow scroll-reveal">The Unboxing</p>
          <SplitText
            as="h2"
            text="Luxury in every detail."
            className="mt-6 text-4xl text-foreground sm:text-6xl"
            delay={200}
          />
          <p className="scroll-reveal mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Every VELARO order arrives in our signature premium packaging,
            designed to create a luxury unboxing experience worthy of the
            piece inside.
          </p>

          <ul className="mt-10 space-y-5">
            {items.map((i, idx) => (
              <li
                key={i}
                className="scroll-reveal flex items-center gap-5 border-b border-border/60 pb-5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="font-display text-xl text-gold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-light text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- BRAND STORY ---------- */
function Story() {
  return (
    <section id="story" className="relative bg-background py-32 sm:py-48 velaro-section-transition">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10 scroll-reveal">
        <p className="eyebrow">The Vision Behind Velaro</p>
        <SplitText
          as="h2"
          text="Confidence begins with how you present yourself."
          className="mt-8 text-4xl text-foreground sm:text-6xl"
          delay={150}
          staggerDelay={90}
        />
        <div className="gold-rule mx-auto mt-10 w-24" />
        <div className="mt-10 space-y-6 text-base font-light leading-loose text-muted-foreground sm:text-lg">
          <p>VELARO was founded with a simple vision.</p>
          <p>
            To create premium eyewear that combines luxury aesthetics,
            superior craftsmanship and accessible pricing — without ever
            asking the wearer to choose between them.
          </p>
          <p className="text-foreground/90">
            We believe confidence begins with how you present yourself to
            the world.
          </p>
        </div>
        <p className="mt-12 font-display text-2xl italic text-gold">— The Velaro Atelier</p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { n: "Michael R.", q: "Exceptional quality. People constantly ask where I got them." },
  { n: "David M.", q: "They look and feel far more expensive than they are." },
  { n: "James L.", q: "Best sunglasses I have owned." },
  { n: "Carlos V.", q: "The packaging alone feels premium." },
  { n: "Alex T.", q: "Elegant, lightweight and stylish." },
];

function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden border-y border-border bg-card py-28 sm:py-32 velaro-section-transition">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">Worn worldwide</p>
        <SplitText
          as="h2"
          text="The Velaro verdict."
          className="mt-6 text-4xl text-foreground sm:text-5xl"
          delay={100}
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-card to-transparent" />
        <div className="velaro-marquee flex w-max gap-6 px-6">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="w-[340px] shrink-0 border border-border bg-background p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="text-gold tracking-[0.4em] text-sm">★★★★★</div>
              <blockquote className="mt-6 font-display text-xl font-light italic leading-relaxed text-foreground">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {t.n} · Verified Owner
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSTAGRAM ---------- */
const igs = [ig1, ig2, ig3, ig4, ig5, ig6];

function Instagram() {
  return (
    <section id="journal" className="bg-background py-28 sm:py-32 velaro-section-transition">
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">@velaro.eyewear</p>
        <SplitText
          as="h2"
          text="Join the Velaro lifestyle."
          className="mt-6 text-4xl text-foreground sm:text-5xl"
          delay={100}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-1 sm:grid-cols-3 lg:grid-cols-6">
        {igs.map((src, i) => (
          <ImageReveal key={i} direction="bottom" delay={i * 100} duration={800}>
            <a
              href="#"
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt={`VELARO Instagram lifestyle ${i + 1}`}
                width={768}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.32em] text-gold">View</span>
              </div>
            </a>
          </ImageReveal>
        ))}
      </div>

      <div className="mt-12 text-center scroll-reveal">
        <MagneticButton>
          <a href="#" className="btn-ghost-gold">Follow Us</a>
        </MagneticButton>
      </div>
    </section>
  );
}

/* ---------- NEWSLETTER ---------- */
function Newsletter() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-background py-28 sm:py-36 velaro-section-transition">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10 scroll-reveal">
        <p className="eyebrow">The Inner Circle</p>
        <SplitText
          as="h2"
          text="Become part of the inner circle."
          className="mt-6 text-4xl text-foreground sm:text-6xl"
          delay={100}
        />
        <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
          Get early access to new releases, private drops and exclusive
          offers reserved for members.
        </p>

        <form
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="border border-border bg-transparent px-6 py-4 text-sm tracking-wider text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
          <MagneticButton>
            <button type="submit" className="btn-gold">Subscribe</button>
          </MagneticButton>
        </form>
        <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          No spam · Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Shop", l: ["The Aura Collection", "Limited Edition", "Accessories", "Gift Cards"] },
    { h: "Velaro", l: ["About", "Journal", "Press", "Sustainability"] },
    { h: "Support", l: ["Shipping", "Returns", "Warranty", "Contact"] },
    { h: "Follow", l: ["Instagram", "TikTok", "Pinterest", "YouTube"] },
  ];
  return (
    <footer id="contact" className="border-t border-border bg-background pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_3fr]">
          <div className="scroll-reveal">
            <img src={logoVAsset.url} alt="VELARO" className="h-12 w-auto brightness-110" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Premium polarized eyewear, hand-finished and built for the
              ones who prefer to be seen on their own terms.
            </p>
            <div className="gold-rule mt-8 w-24" />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {cols.map((c, idx) => (
              <div key={c.h} className="scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-gold">{c.h}</h4>
                <ul className="mt-6 space-y-3">
                  {c.l.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[10px] uppercase tracking-[0.32em] text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Velaro Atelier. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- ICONS ---------- */
function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold">
      {children}
    </div>
  );
}
function SunIcon() { return <IconWrap><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg></IconWrap>; }
function LensIcon() { return <IconWrap><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="7" cy="13" r="4"/><circle cx="17" cy="13" r="4"/><path d="M11 13h2M2 11l2-1M22 11l-2-1"/></svg></IconWrap>; }
function GemIcon() { return <IconWrap><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 9l6-6 6 6-6 12L6 9z M3 9h18"/></svg></IconWrap>; }
function FeatherIcon() { return <IconWrap><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 4c-4 0-9 1-12 4s-4 8-4 12c4 0 9-1 12-4s4-8 4-12zM4 20l8-8M14 10h-4v4"/></svg></IconWrap>; }
function BoxIcon() { return <IconWrap><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M3 12l9 4 9-4"/></svg></IconWrap>; }
function ShieldIcon() { return <IconWrap><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4zM9 12l2 2 4-4"/></svg></IconWrap>; }

/* ---------- PAGE ---------- */
function VelaroHome() {
  const mainRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for all .scroll-reveal elements
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for section transitions
  useEffect(() => {
    const sections = document.querySelectorAll(".velaro-section-transition");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LoadingScreen duration={2200} />
      <CustomCursor />
      <ScrollProgress />
      <div ref={mainRef} className="bg-background text-foreground velaro-snap-container">
        <Nav />
        <main>
          <Hero />
          <Lifestyle />
          <WhyVelaro />
          <LimitedEdition />
          <Collection />
          <Packaging />
          <Story />
          <Testimonials />
          <Instagram />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export { VelaroHome };
