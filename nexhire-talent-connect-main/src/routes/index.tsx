import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, Users, Briefcase, Globe, TrendingUp, Mail, Phone,
  Search, UserCheck, ClipboardCheck, Calendar, Award, Repeat,
  Menu, X, Star, Linkedin, Facebook, Twitter, Instagram,
} from "lucide-react";
import indlaw from "@/assets/industury_law.jpg"
import indinfoit from "@/assets/industury_info technology.jpg"
import indcloud from "@/assets/industury_cloud services.jpg"
import indeng from "@/assets/industury_engineering.jpg"
import indweb from "@/assets/industury_website_developement.jpg"
import logo from "@/assets/nex_logo.avif";
import heroImg from "@/assets/hero_section_image.jpg";
import aboutImg from "@/assets/about_section_img.jpg";
import t1 from "@/assets/testimonial1.jpg";
import t2 from "@/assets/testimonial2.jpg";
import indFinance from "@/assets/industury_finance.jpg";
import indMfg from "@/assets/industury_manufactureing.jpg";
import indHealth from "@/assets/industury_section_health_care.jpg";
import indTech from "@/assets/industury_section_tech.jpg";
import brandMicrosoft from "@/assets/brand_microsoft.jpg";
import brandGoogle from "@/assets/brand_google.png";
import brandAmazon from "@/assets/brand_amazon.png";
import brandOracle from "@/assets/brand_oracle.png";
import brandIbm from "@/assets/brand_ibm.png";
import brandDeloitte from "@/assets/brand_deloitte.png";
import brandAccenture from "@/assets/brand_accenture.png";
import brandInfosys from "@/assets/brand_infosys.png";
import nexBird from "@/assets/nex_bird.png";
import worldDots from "@/assets/world_dots.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexHire Staffing — Exceptional Talent With Exceptional Companies" },
      { name: "description", content: "NexHire Staffing specializes in connecting organizations with highly qualified professionals across diverse industries." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Our Process" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

function BirdMark({ className = "" }: { className?: string }) {
  return <img src={nexBird} alt="" aria-hidden className={className} />;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="NexHire" className="h-9 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center justify-center gap-9">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 justify-end">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:shadow-md">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const stats = [
    { v: "500+", l: "Successful Placements", Icon: Users },
    { v: "50+", l: "Industry Partners", Icon: Briefcase },
    { v: "10+", l: "Industries Served", Icon: Globe },
    { v: "98%", l: "Client Satisfaction", Icon: TrendingUp },
  ];
  const brands = [
    { name: "Microsoft", url: brandMicrosoft },
    { name: "Google", url: brandGoogle },
    { name: "Amazon", url: brandAmazon },
    { name: "Oracle", url: brandOracle },
    { name: "IBM", url: brandIbm },
    { name: "Deloitte", url: brandDeloitte },
    { name: "Accenture", url: brandAccenture },
    { name: "Infosys", url: brandInfosys },
  ];
  const marquee = [...brands, ...brands];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-4 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">Connecting Talent With Opportunity</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] text-foreground">
              Exceptional Talent<br />With Exceptional <span className="text-primary italic">Companies</span>
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
              NexHire Staffing specializes in connecting organizations with highly qualified professionals across diverse industries — your trusted partner in long-term recruitment success.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-sm">
                Find Talent <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img src={heroImg} alt="Recruitment professionals at work" className="h-full w-full object-cover grayscale" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -left-8"
            >
              <BirdMark className="h-32 w-auto drop-shadow-xl" />
            </motion.div>
            {/* <div className="absolute top-4 right-0 hidden sm:flex flex-col items-end gap-3 text-xs font-mono text-muted-foreground">
              <span className="text-primary font-semibold">01</span>
              <span className="h-12 w-px bg-border" />
              <span>02</span>
              <span className="h-12 w-px bg-border" />
              <span>03</span>
            </div> */}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div {...fadeUp} className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-y border-border py-10">
          {stats.map(({ v, l, Icon }) => (
            <div key={l} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-semibold text-foreground">{v}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <div className="mt-12">
          <p className="text-center text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">Trusted by 50+ companies across the globe</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-12 animate-brand-marquee">
              {marquee.map((b, i) => (
                <div
                  key={`${b.name}-${i}`}
                  className="flex items-center justify-center shrink-0 h-16 w-36 sm:w-40"
                  title={b.name}
                >
                  <img
                    src={b.url}
                    alt={b.name}
                    loading="lazy"
                    className="max-h-10 max-w-[80%] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    { name: "Engineering", img: indeng },
    { name: "Manufacturing", img: indMfg },
    { name: "Healthcare", img: indHealth },
    { name: "Financial Services", img: indFinance },
    { name: "Human Resources", img: aboutImg },
    { name: "Cloud Services", img: indcloud },
    { name: "Legal Services", img: indlaw },
    { name: "Information Technology", img: indinfoit },
    { name: "Website Development", img: indweb },
  ];
  return (
    <section id="industries" className="py-24 lg:py-32 bg-tinted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Our Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-medium">Industries We Serve</h2>
          <p className="mt-4 text-muted-foreground">We provide staffing solutions across a wide range of industries — each engagement tailored to sector-specific talent demands.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-3 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="h-30 w-44 shrink-0 overflow-hidden rounded-xl">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-medium text-base">{it.name}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
            Explore All Industries <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Direct Hire Staffing", desc: "Helping organizations secure long-term talent.", Icon: Users },
    { title: "RPO Services", desc: "Recruitment process outsourcing solutions.", Icon: Briefcase },
    { title: "Contract-To-Hire", desc: "Flexible hiring solutions before permanent placement.", Icon: Repeat },
    { title: "Talent Acquisition Consulting", desc: "Strategic hiring support to build strong teams.", Icon: ClipboardCheck },
    { title: "Executive Search", desc: "Leadership recruitment services for critical roles.", Icon: Award },
  ];
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">What We Offer</p>
          <h2 className="text-4xl lg:text-5xl font-medium">Our Services</h2>
          <p className="mt-4 text-muted-foreground">Tailored staffing solutions designed to meet your unique hiring needs.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-7 hover:bg-tinted transition-colors group">
              <s.Icon className="h-7 w-7 text-primary mb-5" />
              <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
            Explore All Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Understand Hiring Needs", Icon: Search },
    { n: "02", t: "Talent Search", Icon: Users },
    { n: "03", t: "Candidate Screening", Icon: UserCheck },
    { n: "04", t: "Interview Coordination", Icon: Calendar },
    { n: "05", t: "Placement", Icon: Award },
    { n: "06", t: "Long-Term Success", Icon: Repeat },
  ];
  return (
    <section id="process" className="py-24 lg:py-32 bg-tinted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">How We Work</p>
          <h2 className="text-4xl lg:text-5xl font-medium">Our Process</h2>
          <p className="mt-4 text-muted-foreground">A proven process to connect talent with opportunity.</p>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-background border-2 border-primary/30 text-primary mb-4 relative z-10">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono text-primary mb-2">{s.n}</div>
                <div className="text-sm font-medium">{s.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    { name: "Sarah Johnson", loc: "New York", img: t1, text: "NexHire helped me find the perfect job so quickly." },
    { name: "Michael Smith", loc: "Los Angeles", img: t2, text: "The team at NexHire delivered outstanding service, helping us find highly qualified candidates with ease. Their expertise and professionalism made the hiring process smooth and efficient." },
     
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-medium">Client Success Stories</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((t) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              className="rounded-2xl p-8 lg:p-10 border border-border"
              style={{ background: "linear-gradient(135deg, rgba(255,31,61,0.05), rgba(255,31,61,0.02))" }}
            >
              <div className="text-primary text-5xl font-serif leading-none mb-4">“</div>
              <p className="text-base lg:text-lg text-foreground/85 leading-relaxed mb-6">{t.text}</p>
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    { t: "Our Mission", d: "To connect talent with organizations through tailored and transparent staffing solutions." },
    { t: "Our Vision", d: "To be an industry leader known for innovation, excellence, integrity, and long-term partnerships." },
    { t: "Our Values", d: "Transparency, Integrity, Innovation, Diversity, Collaboration, and Long-Term Partnerships." },
  ];
  return (
    <section id="about" className="py-24 lg:py-32 bg-tinted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Who We Are</p>
          <h2 className="text-4xl lg:text-5xl font-medium mb-5">About NexHire</h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            NexHire delivers Consulting and HR services rooted in integrity, creativity, and diversity.
          </p>
          <div className="space-y-6">
            {values.map((v) => (
              <div key={v.t} className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
          <img src={aboutImg} alt="Team" className="rounded-2xl aspect-[3/4] object-cover w-full shadow-md" />
          <img src={heroImg} alt="Team" className="rounded-2xl aspect-[3/4] object-cover w-full mt-10 shadow-md grayscale" />
        </motion.div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Global Presence</p>
          <h2 className="text-4xl lg:text-5xl font-medium">Connecting talent across the globe</h2>
          <p className="mt-4 text-muted-foreground">We serve employers and candidates across multiple sectors and locations.</p>
        </motion.div>
        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto" style={{ aspectRatio: "1280 / 644" }}>
          {/* Dotted world map */}
          <img
            src={worldDots}
            alt="World map"
            className="absolute inset-0 h-full w-full object-contain select-none pointer-events-none"
          />
          {/* Hubs (approx equirectangular: x = (lon+180)/360, y = (90-lat)/180) */}
          {(() => {
            const hubs = [
              { name: "New York", x: 28.1, y: 36.0 },
              { name: "London", x: 49.5, y: 28.5 },
              { name: "Dubai", x: 65.3, y: 41.5 },
              { name: "Bengaluru", x: 71.6, y: 46.0 },
              { name: "Singapore", x: 78.6, y: 53.5 },
              { name: "Sydney", x: 89.0, y: 65.0 },
              { name: "São Paulo", x: 37.2, y: 64.0 },
            ];
            const links: [number, number][] = [
              [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [1, 3],
            ];
            return (
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                {links.map(([a, b], i) => {
                  const A = hubs[a], B = hubs[b];
                  const mx = (A.x + B.x) / 2;
                  const my = Math.min(A.y, B.y) - 10;
                  return (
                    <path
                      key={i}
                      d={`M${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
                      fill="none"
                      stroke="oklch(0.638 0.245 17)"
                      strokeWidth="1.25"
                      strokeDasharray="0.6 0.6"
                      opacity="0.7"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
                {hubs.map((h) => (
                  <g key={h.name} transform={`translate(${h.x} ${h.y})`}>
                    <circle r="1.2" fill="oklch(0.638 0.245 17)" opacity="0.25" />
                    <circle r="0.6" fill="oklch(0.638 0.245 17)" />
                  </g>
                ))}
              </svg>
            );
          })()}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-tinted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Let's Connect</p>
          <h2 className="text-4xl lg:text-5xl font-medium mb-4">Ready To Build Your Dream Team?</h2>
          <p className="text-muted-foreground mb-8">Let's find the perfect talent for your organization.</p>
          <div className="space-y-4">
            <a href="mailto:info@nex-hire.com" className="flex items-center gap-3 text-foreground hover:text-primary transition">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background border border-border text-primary"><Mail className="h-4 w-4" /></span>
              info@nex-hire.com
            </a>
            <a href="tel:+14696631311" className="flex items-center gap-3 text-foreground hover:text-primary transition">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background border border-border text-primary"><Phone className="h-4 w-4" /></span>
              +1 (469) 663-1311
            </a>
          </div>
        </motion.div>
        <motion.form {...fadeUp} onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-card border border-border p-6 lg:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="First Name" />
            <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Last Name" />
            <input type="email" className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Email Address" />
            <input type="tel" className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Phone Number" />
          </div>
          <textarea rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Your Message" />
          <label className="flex items-start gap-3 text-xs text-muted-foreground">
            <input type="checkbox" className="mt-0.5 accent-[oklch(0.638_0.245_17)]" />
            <span>By providing your phone number, you agree to receive text messages from NexHire Staffing. Message and data rates may apply. Message frequency varies.</span>
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-sm">
            Submit Message <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Company", l: ["About Us", "Our Process", "Careers", "Blog"] },
    { h: "Services", l: ["Direct Hire Staffing", "RPO Services", "Contract-To-Hire", "Executive Search", "Consulting"] },
    { h: "Industries", l: ["Engineering", "Healthcare", "IT & Technology", "Financial Services", "Manufacturing"] },
    { h: "Resources", l: ["For Candidates", "For Employers", "Job Search", "Insights & News", "FAQs"] },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-[1.2fr_2fr_1.2fr] gap-12">
        <div>
          <img src={logo} alt="NexHire" className="h-9 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs">Connecting exceptional talent with exceptional companies.</p>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Facebook, Twitter, Instagram].map((I, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="font-semibold text-sm mb-4">{c.h}</h4>
              <ul className="space-y-2.5">
                {c.l.map((x) => <li key={x}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest insights and job opportunities.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input className="flex-1 min-w-0 rounded-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your email address" />
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">Subscribe</button>
          </form>
          <div className="mt-6 text-xs text-muted-foreground space-y-1">
            <p>1414 S. Penn Square, P.O. Box 1170</p>
            <p>Oklahoma City, OK 73154</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 NexHire Staffing. All rights reserved.</p>
          <div className="flex gap-5"><a href="#" className="hover:text-primary">Privacy Policy</a><a href="#" className="hover:text-primary">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Industries />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
