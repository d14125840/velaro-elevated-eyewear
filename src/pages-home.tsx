import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import heroImg from "@/assets/velaro_gafas_sola_para_subir.png";
import lifestyleImg from "@/assets/velaro-lifestyle.jpg";
import prodC1 from "@/assets/velaro_fondo_color_c1_negro_gris.png";
import prodC2 from "@/assets/velaro_fondo_color_c2_negro_marron.png";
import prodC3 from "@/assets/velaro_fondo_color_c3_azul_verde_gris.png";
import prodC4 from "@/assets/velaro_fondo_color_c4_gris_verde.png";
import prodC5 from "@/assets/velaro_fondo_color_c5_marron_cristal_azul.png";
import packagingImg from "@/assets/velaro_packaging_todo_en_uno.png";
const specsheetAsset = { url: "https://e185bc3a-d544-4dfb-96b8-37ea4ce3ee0e.lovableproject.com/__l5e/assets-v1/12ff59ad-1178-4bec-9a81-cdf263be3952/velaro-specsheet.png" };
import ig1 from "@/assets/velaro-ig-1.jpg";
import ig2 from "@/assets/velaro-ig-2.jpg";
import ig3 from "@/assets/velaro-ig-3.jpg";
import ig4 from "@/assets/velaro-ig-4.jpg";
import ig5 from "@/assets/velaro-ig-5.jpg";
import ig6 from "@/assets/velaro-ig-6.jpg";

/* ---------- CART TYPES ---------- */
type CartItem = { name: string; price: number; img: string; quantity: number };

/* ---------- NAV ---------- */
function Nav({ cartItemCount, onCartClick }: { cartItemCount: number; onCartClick: () => void }) {
  return (
    <header className="velaro-glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 sm:px-10">
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-foreground/80 md:flex">
          <a href="#collection" className="hover:text-gold transition-colors">Tienda</a>
          <a href="#story" className="hover:text-gold transition-colors">Historia</a>
          <a href="#packaging" className="hover:text-gold transition-colors">Embalaje</a>
        </nav>
        <a href="#" className="justify-self-center">
          <span className="font-display text-3xl text-gold tracking-[0.15em]">VELARO</span>
        </a>
        <nav className="hidden items-center justify-end gap-8 text-xs uppercase tracking-[0.28em] text-foreground/80 md:flex">
          <a href="#journal" className="hover:text-gold transition-colors">Diario</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contacto</a>
          <button onClick={onCartClick} className="text-gold cursor-pointer bg-transparent border-none font-sans text-xs uppercase tracking-[0.28em]">Carrito ({cartItemCount})</button>
        </nav>
        <div className="justify-self-end md:hidden">
          <button onClick={onCartClick} className="text-xs uppercase tracking-[0.28em] text-gold bg-transparent border-none cursor-pointer font-sans">Carrito ({cartItemCount})</button>
        </div>
      </div>
      <div className="gold-rule opacity-40" />
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroWords = "Diseñado para quienes destacan.".split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        const translateY = scrollY * 0.15;
        heroImageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback: force split-word visibility after 3s in case CSS animation fails
  useEffect(() => {
    const timer = setTimeout(() => {
      const words = document.querySelectorAll(".velaro-split-word");
      words.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background grain">
      {/* animated gradient mesh */}
      <div className="velaro-hero-mesh" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="velaro-glow absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 text-center sm:px-10">
        <p className="eyebrow reveal" style={{ animationDelay: "0.1s" }}>
          Colección Velaro Signature
        </p>

        <h1 className="mt-8 max-w-5xl text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-[5.5rem]">
          {heroWords.map((word, i) => (
            <span
              key={i}
              className="velaro-split-word"
              style={{ animationDelay: `${0.3 + i * 0.12}s`, marginRight: "0.3em" }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="reveal mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.55s" }}
        >
          Gafas de sol polarizadas premium diseñadas para transmitir confianza, elegancia
          y lujo cotidiano.
        </p>

        <div
          className="reveal mt-12 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.75s" }}
        >
          <a href="#collection" className="btn-gold">Comprar Ahora</a>
          <a href="#story" className="btn-ghost-gold">Descubre Velaro</a>
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
            ref={heroImageRef}
            src={heroImg}
            alt="VELARO signature sunglasses with gold detailing"
            width={1600}
            height={1200}
            className="mx-auto w-full select-none object-contain will-change-transform"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 velaro-scroll-indicator">
          <span>Explorar</span>
          <div className="velaro-scroll-line" />
        </div>
      </div>
    </section>
  );
}

/* ---------- LIFESTYLE ---------- */
function Lifestyle() {
  return (
    <section className="relative bg-background">
      <div className="relative h-[70vh] w-full overflow-hidden sm:h-[85vh]">
        <img
          src={lifestyleImg}
          alt="Model wearing VELARO sunglasses in cinematic lighting"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-[70vh] sm:h-[85vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 flex h-full items-center absolute inset-0">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:px-10 md:grid-cols-2">
            <div className="max-w-lg">
              <p className="eyebrow scroll-reveal">El Atelier Velaro</p>
              <h2 className="scroll-reveal mt-6 text-4xl text-foreground sm:text-6xl">
                Más que gafas.
              </h2>
              <p className="scroll-reveal mt-6 text-base font-light leading-relaxed text-foreground/80">
                VELARO fue creado para quienes aprecian un estilo atemporal,
                confianza y atención al detalle. Cada par está diseñado
                para elevar tu presencia — desde el corte del acetato
                hasta el peso en tu mano.
              </p>
              <div className="scroll-reveal mt-10">
                <a href="#story" className="btn-ghost-gold">Nuestra filosofía</a>
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
  { t: "Protección UV400", d: "Defensa completa contra radiación UVA y UVB.", icon: "sun" },
  { t: "Lentes Polarizadas", d: "Claridad cinemática, sin reflejos. Diseñadas en Italia.", icon: "lens" },
  { t: "Materiales Premium", d: "Acetato acabado a mano y aleaciones metálicas de grado quirúrgico.", icon: "gem" },
  { t: "Comodidad Ultraligera", d: "Equilibradas con menos de 28 gramos — para uso todo el día.", icon: "feather" },
  { t: "Embalaje de Lujo", d: "Caja magnética exclusiva, funda de piel y microfibra.", icon: "box" },
  { t: "Garantía 30 Días", d: "Úsalas, vívelas, devuélvelas. Sin riesgo.", icon: "shield" },
];

function FeatureIcon({ name }: { name: string }) {
  const wrap = (children: ReactNode) => (
    <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold">
      {children}
    </div>
  );
  switch (name) {
    case "sun":
      return wrap(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>);
    case "lens":
      return wrap(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="7" cy="13" r="4"/><circle cx="17" cy="13" r="4"/><path d="M11 13h2M2 11l2-1M22 11l-2-1"/></svg>);
    case "gem":
      return wrap(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 9l6-6 6 6-6 12L6 9z M3 9h18"/></svg>);
    case "feather":
      return wrap(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 4c-4 0-9 1-12 4s-4 8-4 12c4 0 9-1 12-4s4-8 4-12zM4 20l8-8M14 10h-4v4"/></svg>);
    case "box":
      return wrap(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M3 12l9 4 9-4"/></svg>);
    case "shield":
      return wrap(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4zM9 12l2 2 4-4"/></svg>);
    default:
      return wrap(<span />);
  }
}

function WhyVelaro() {
  return (
    <section className="relative border-t border-border bg-background py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow scroll-reveal">Por qué Velaro</p>
          <h2 className="scroll-reveal mt-6 text-4xl text-foreground sm:text-5xl">
            Ingeniería sin compromiso.
          </h2>
          <div className="gold-rule mx-auto mt-8 w-24 scroll-reveal" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ t, d, icon }, index) => (
            <div
              key={t}
              className="group relative bg-background p-10 transition-colors duration-500 hover:bg-card scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureIcon name={icon} />
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
function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, target]);

  const display = target < 10 ? String(count).padStart(2, "0") : String(count);

  return (
    <div ref={ref} className="text-center scroll-reveal">
      <div className="text-3xl font-light text-gold sm:text-5xl">{display}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{label}</div>
    </div>
  );
}

function LimitedEdition() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-32 sm:py-48">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="absolute inset-x-0 top-0 gold-rule opacity-50" />
      <div className="absolute inset-x-0 bottom-0 gold-rule opacity-50" />

      <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">Primera Producción &middot; 2026</p>
        <h2 className="scroll-reveal mt-8 text-5xl text-foreground sm:text-7xl">
          Lanzamiento Primera Edición Limitada
        </h2>
        <p className="scroll-reveal mt-8 text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
          Un número limitado de piezas disponibles en la primera
          producción. Cada montura está numerada. Cada propietario forma
          parte de un círculo exclusivo.
        </p>

        <figure className="scroll-reveal mt-16 group relative">
          <div
            className="absolute -inset-6 -z-10 opacity-50 blur-3xl"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-luxe)]">
            <img
              src={specsheetAsset.url}
              alt="VELARO One -- First Edition: Black, Tortoise and Crystal. Technical specifications, materials and included packaging."
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full object-contain transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="mt-6 text-[10px] uppercase tracking-[0.32em] text-gold">
            Velaro One &middot; Black &middot; Tortoise &middot; Crystal
          </figcaption>
        </figure>

        <p className="scroll-reveal mt-12 text-sm uppercase tracking-[0.32em] text-gold">
          Sé parte del origen.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <AnimatedCounter target={500} label="Piezas" />
          <AnimatedCounter target={3} label="Monturas" />
          <AnimatedCounter target={1} label="Edición" />
        </div>

        <div className="scroll-reveal mt-12">
          <a href="#collection" className="btn-gold">Reserva la Tuya</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTION ---------- */
const products = [
  { name: "VELARO Eclipse", frame: "Negro/Gris", lens: "Grey Polarized", price: 79.99, img: prodC1 },
  { name: "VELARO Onyx", frame: "Negro/Marron", lens: "Brown Polarized", price: 79.99, img: prodC2 },
  { name: "VELARO Aether", frame: "Azul-Verde", lens: "Grey-Green Polarized", price: 89.99, img: prodC3 },
  { name: "VELARO Phantom", frame: "Gris/Verde", lens: "Green Polarized", price: 79.99, img: prodC4 },
  { name: "VELARO Solstice", frame: "Tortoise/Crystal", lens: "Blue Polarized", price: 89.99, img: prodC5 },
];

function Collection({ onAddToCart }: { onAddToCart: (product: { name: string; price: number; img: string }) => void }) {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <section id="collection" className="bg-background py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow scroll-reveal">La Colección Aura</p>
            <h2 className="scroll-reveal mt-6 text-5xl text-foreground sm:text-7xl">
              Cinco monturas. Una firma.
            </h2>
          </div>
          <a href="#" className="scroll-reveal text-xs uppercase tracking-[0.32em] text-gold hover:underline">Ver todo &rarr;</a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {products.map((p) => (
            <article
              key={p.name}
              className="scroll-reveal product-card-3d group relative w-full md:w-[calc(33.333%-2rem)] sm:w-[calc(50%-1.5rem)]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden bg-card aspect-square">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "var(--gradient-radial-gold)" }}
                />
                <img
                  src={p.img}
                  alt={`${p.name} -- ${p.frame} with ${p.lens}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="velaro-clip-reveal relative h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 p-4 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex gap-3">
                    <button
                      className="btn-gold flex-1 !py-3 !px-4 !text-[10px]"
                      onClick={() => onAddToCart({ name: p.name, price: p.price, img: p.img })}
                    >
                      Añadir al Carrito
                    </button>
                    <button className="btn-ghost-gold !py-3 !px-4 !text-[10px]">Vista Rápida</button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {p.frame} &middot; {p.lens}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-lg font-light text-gold">&euro;{p.price.toFixed(2)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PACKAGING ---------- */
function Packaging() {
  const items = [
    "Caja magnética negra premium",
    "Funda protectora de piel",
    "Paño de microfibra",
    "Tarjeta de garantía numerada",
  ];
  return (
    <section id="packaging" className="relative border-y border-border bg-background py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <div className="relative scroll-reveal">
          <div
            className="absolute -inset-10 -z-10 opacity-60 blur-3xl"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <img
            src={packagingImg}
            alt="VELARO premium magnetic box, leather case and microfiber cloth"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full object-cover shadow-[var(--shadow-luxe)]"
          />
        </div>

        <div className="max-w-lg">
          <p className="eyebrow scroll-reveal">La Experiencia de Apertura</p>
          <h2 className="scroll-reveal mt-6 text-4xl text-foreground sm:text-6xl">
            Lujo en cada detalle.
          </h2>
          <p className="scroll-reveal mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Cada pedido de VELARO llega en nuestro embalaje premium exclusivo,
            diseñado para crear una experiencia de apertura digna de la
            pieza que contiene.
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
    <section id="story" className="relative bg-background py-32 sm:py-48">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10 scroll-reveal">
        <p className="eyebrow">La Visión detrás de Velaro</p>
        <h2 className="mt-8 text-4xl text-foreground sm:text-6xl">
          La confianza comienza con cómo te presentas al mundo.
        </h2>
        <div className="gold-rule mx-auto mt-10 w-24" />
        <div className="mt-10 space-y-6 text-base font-light leading-loose text-muted-foreground sm:text-lg">
          <p>VELARO nació con una visión simple.</p>
          <p>
            Crear gafas premium que combinan estética de lujo,
            artesanía superior y precio accesible — sin pedir al
            usuario que elija entre ellas.
          </p>
          <p className="text-foreground/90">
            Creemos que la confianza comienza con cómo te presentas al
            mundo.
          </p>
        </div>
        <p className="mt-12 font-display text-2xl italic text-gold">— El Atelier Velaro</p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { n: "Michael R.", q: "Calidad excepcional. La gente no para de preguntarme dónde las compré." },
  { n: "David M.", q: "Se ven y se sienten mucho más caras de lo que son." },
  { n: "James L.", q: "Las mejores gafas de sol que he tenido." },
  { n: "Carlos V.", q: "Solo el embalaje ya se siente premium." },
  { n: "Alex T.", q: "Elegantes, ligeras y con estilo." },
];

function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden border-y border-border bg-card py-28 sm:py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">Usadas en todo el mundo</p>
        <h2 className="scroll-reveal mt-6 text-4xl text-foreground sm:text-5xl">
          El veredicto Velaro.
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-card to-transparent" />
        <div className="velaro-marquee flex w-max gap-6 px-6">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="w-[340px] shrink-0 border border-border bg-background p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="text-gold tracking-[0.4em] text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="mt-6 font-display text-xl font-light italic leading-relaxed text-foreground">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {t.n} &middot; Comprador Verificado
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
    <section id="journal" className="bg-background py-28 sm:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center sm:px-10">
        <p className="eyebrow scroll-reveal">@velaro.eyewear</p>
        <h2 className="scroll-reveal mt-6 text-4xl text-foreground sm:text-5xl">
          Únete al estilo de vida Velaro.
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-1 sm:grid-cols-3 lg:grid-cols-6">
        {igs.map((src, i) => (
          <a
            key={i}
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
              <span className="text-xs uppercase tracking-[0.32em] text-gold">Ver</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center scroll-reveal">
        <a href="#" className="btn-ghost-gold">Síguenos</a>
      </div>
    </section>
  );
}

/* ---------- NEWSLETTER ---------- */
function Newsletter() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-background py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10 scroll-reveal">
        <p className="eyebrow">El Círculo Interior</p>
        <h2 className="mt-6 text-4xl text-foreground sm:text-6xl">
          Forma parte del círculo interior.
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
          Accede antes que nadie a nuevos lanzamientos, drops privados y ofertas
          exclusivas para miembros.
        </p>

        <form
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="tu@email.com"
            className="border border-border bg-transparent px-6 py-4 text-sm tracking-wider text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
          <button type="submit" className="btn-gold">Suscribirse</button>
        </form>
        <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Sin spam &middot; Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Tienda", l: ["La Colección Aura", "Edición Limitada", "Accesorios", "Tarjetas Regalo"] },
    { h: "Velaro", l: ["Nosotros", "Diario", "Prensa", "Sostenibilidad"] },
    { h: "Soporte", l: ["Envíos", "Devoluciones", "Garantía", "Contacto"] },
    { h: "Síguenos", l: ["Instagram", "TikTok", "Pinterest", "YouTube"] },
  ];
  return (
    <footer id="contact" className="border-t border-border bg-background pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_3fr]">
          <div className="scroll-reveal">
            <span className="font-display text-3xl text-gold tracking-[0.15em]">VELARO</span>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Gafas polarizadas premium, acabadas a mano para quienes
              prefieren ser vistos en sus propios términos.
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
          <p>&copy; {new Date().getFullYear()} Velaro Atelier. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Política de Privacidad</a>
            <a href="#" className="hover:text-gold">Términos</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- CART DRAWER ---------- */
function CartDrawer({
  cart,
  cartOpen,
  onClose,
  onRemove,
}: {
  cart: CartItem[];
  cartOpen: boolean;
  onClose: () => void;
  onRemove: (name: string) => void;
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? "cart-overlay-visible" : ""}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside className={`cart-drawer ${cartOpen ? "cart-drawer-open" : ""}`}>
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-display text-2xl text-foreground">Tu Carrito</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center mt-12">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.name} className="cart-item flex gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 w-20 object-cover bg-card shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                    <p className="text-sm text-gold mt-1">&euro;{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.name)}
                    className="text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors bg-transparent border-none cursor-pointer self-start pt-1"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Total</span>
              <span className="text-xl font-light text-gold">&euro;{total.toFixed(2)}</span>
            </div>
            <button className="btn-gold w-full">Finalizar Compra</button>
          </div>
        )}
      </aside>
    </>
  );
}

/* ---------- SCROLL PROGRESS BAR ---------- */
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="velaro-progress-bar"
      style={{ width: `${scrollProgress * 100}%` }}
    />
  );
}

/* ---------- PAGE ---------- */
export default function VelaroHome() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("velaro-cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("velaro-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: { name: string; price: number; img: string }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name: product.name, price: product.price, img: product.img, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // IntersectionObserver for all .scroll-reveal elements
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

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

  // IntersectionObserver for .velaro-clip-reveal elements
  useEffect(() => {
    const clipElements = document.querySelectorAll(".velaro-clip-reveal");
    if (clipElements.length === 0) return;

    const clipObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            clipObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    clipElements.forEach((el) => clipObserver.observe(el));

    return () => clipObserver.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="bg-background text-foreground">
      <ScrollProgressBar />
      <Nav cartItemCount={cartItemCount} onCartClick={() => setCartOpen(true)} />
      <CartDrawer cart={cart} cartOpen={cartOpen} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
      <main>
        <Hero />
        <Lifestyle />
        <WhyVelaro />
        <LimitedEdition />
        <Collection onAddToCart={addToCart} />
        <Packaging />
        <Story />
        <Testimonials />
        <Instagram />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
