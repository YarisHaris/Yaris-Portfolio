import resumeAsset from "@/assets/resume.pdf.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  Mail,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { HeroScene } from "@/components/HeroScene";
import { Section, Reveal } from "@/components/Section";
import {
  internships,
  projects,
  skillCategories,
  achievements,
  type SkillCategory,
} from "@/data/portfolio";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yaris A. Nadaf — Backend, Full Stack, AI/ML & IoT Engineer" },
      {
        name: "description",
        content:
          "Personal portfolio of Yaris A. Nadaf. Selected internships, AI projects, and case studies — built with care.",
      },
      { property: "og:title", content: "Yaris A. Nadaf — Engineer" },
      { property: "og:description", content: "Backend · Full Stack · AI/ML · IoT" },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yaris A. Nadaf",
          jobTitle: "Backend, Full Stack, AI/ML & IoT Engineer",
          url: "/",
          sameAs: [
            "https://github.com/YarisHaris",
            "https://www.linkedin.com/in/yaris-nadaf-3128a7382",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [skill, setSkill] = useState<SkillCategory | null>(null);

  return (
    <>
      <Hero />
      <About />
      <Skills onOpen={setSkill} />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />

      <Sheet open={!!skill} onOpenChange={(o) => !o && setSkill(null)}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto bg-card">
          {skill && (
            <>
              <SheetHeader>
                <div className="eyebrow mb-2">Skill category</div>
                <SheetTitle className="font-serif text-3xl">{skill.name}</SheetTitle>
                <SheetDescription className="text-base text-muted-foreground">
                  {skill.overview}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 space-y-8 text-sm">
                <Panel title="Technologies">
                  <Chips items={skill.technologies} />
                </Panel>
                <Panel title="Internship usage">
                  {skill.internshipUsage.length ? (
                    <ul className="space-y-1">
                      {skill.internshipUsage.map((i) => (
                        <li key={i}>· {i}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">No internship usage yet.</p>
                  )}
                </Panel>
                <Panel title="Related projects">
                  {skill.relatedProjects.length ? (
                    <ul className="space-y-1">
                      {skill.relatedProjects.map((i) => (
                        <li key={i}>· {i}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Coming soon.</p>
                  )}
                </Panel>
                <Panel title="GitHub">
                  {skill.github.length ? (
                    <ul className="space-y-1">
                      {skill.github.map((g) => (
                        <li key={g}>
                          <a className="underline hover:text-bronze" href={`https://${g}`}>
                            {g}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">—</p>
                  )}
                </Panel>
                <Panel title="Learning timeline">
                  <ul className="space-y-2">
                    {skill.timeline.map((t) => (
                      <li key={t.year} className="flex gap-4">
                        <span className="font-mono text-xs text-bronze w-20">{t.year}</span>
                        <span>{t.milestone}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
      <Toaster />
    </>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-2">{title}</div>
      {children}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className="text-xs px-2.5 py-1 rounded-full border border-hairline bg-secondary"
        >
          {i}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="container-editorial pt-16 md:pt-24 pb-20 md:pb-32 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7">
        <motion.div
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Yaris A. Nadaf — Portfolio · 2025
        </motion.div>
        <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] leading-[1.02]">
          {"Hi, I'm Yaris.".split(" ").map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="italic text-muted-foreground"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            I build reliable software <br className="hidden md:block" />
            across Backend, AI, Web and IoT.
          </motion.span>
        </h1>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm hover:opacity-90 transition"
          >
            View Projects
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={resumeAsset.url}
            className="group inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm hover:border-foreground transition"
          >
            Download Resume
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
        <div className="mt-12 flex flex-wrap gap-6 text-xs text-muted-foreground">
          <Tag icon={<Briefcase className="size-3.5" />} label="Backend Engineer" />
          <Tag icon={<Layers className="size-3.5" />} label="Full Stack" />
          <Tag icon={<Award className="size-3.5" />} label="AI / ML" />
          <Tag icon={<GraduationCap className="size-3.5" />} label="IoT Builder" />
        </div>
      </div>
      <div className="lg:col-span-5 h-[420px] md:h-[520px] rounded-3xl overflow-hidden bg-secondary">
        <HeroScene />
      </div>
    </section>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-bronze">{icon}</span>
      {label}
    </span>
  );
}

function About() {
  const stats = [
    { k: "3+", v: "Internships" },
    { k: "5+", v: "Projects" },
    { k: "4", v: "Domains" },
  ];
  return (
    <Section id="about" eyebrow="About" title="Engineer first, generalist by curiosity.">
      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a final-year B.E. student in Artificial Intelligence & Machine Learning at BLDEA's
            V.P. Dr. P.G. Halakatti College of Engineering and Technology. My work moves between
            backend systems, full-stack products, applied AI, and the occasional piece of physical
            hardware.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I care about software that is small, correct, and pleasant to use — and about the
            details that separate a prototype from a product.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 border-t border-hairline">
            {stats.map((s) => (
              <div key={s.v} className="py-8 border-r last:border-r-0 border-hairline text-center">
                <div className="font-serif text-5xl md:text-6xl text-bronze">{s.k}</div>
                <div className="mt-2 eyebrow">{s.v}</div>
              </div>

            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Skills({ onOpen }: { onOpen: (s: SkillCategory) => void }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit, organised."
      intro="Click any category to open a detailed panel — what's inside, where I've used it, and the projects it ships in."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {skillCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onOpen(cat)}
            className="card-lift group text-left p-6 rounded-2xl border border-hairline bg-card"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-serif text-2xl">{cat.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {cat.technologies.length} technologies
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-bronze group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <p className="mt-6 text-sm text-muted-foreground line-clamp-2">{cat.overview}</p>
          </button>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where the foundations come from.">
      <Reveal>
        <div className="rounded-2xl border border-hairline bg-card p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center">
          <div className="md:w-1/3">
            <div className="eyebrow">2021 — 2025</div>
            <div className="font-mono text-xs mt-2 text-bronze">CGPA · 7.33</div>
          </div>
          <div className="md:w-2/3">
            <div className="font-serif text-2xl md:text-3xl">
              B.E. Artificial Intelligence & Machine Learning
            </div>
            <div className="mt-2 text-muted-foreground">
              BLDEA's V.P. Dr. P.G. Halakatti College of Engineering and Technology
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships, in order."
      intro="Three industry internships across full-stack, backend, and web fundamentals. Open any entry for details."
    >
      <ul className="divide-y divide-hairline border-y border-hairline">
        {internships.map((i) => (
          <li key={i.slug}>
            <Link
              to="/experience/$slug"
              params={{ slug: i.slug }}
              className="card-lift group grid md:grid-cols-12 gap-4 py-8 items-baseline -mx-4 px-4 rounded-lg"
            >
              <div className="md:col-span-2 font-mono text-xs text-bronze">{i.duration}</div>
              <div className="md:col-span-7">
                <div className="font-serif text-2xl md:text-3xl">{i.role}</div>
                <div className="text-muted-foreground mt-1">{i.company}</div>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                  Read about this experience
                  <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects — built end to end."
      intro="Each project has full details: problem, architecture, build, and what I'd do next."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <Reveal key={p.slug} delay={idx * 0.05}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="card-lift group block h-full rounded-2xl border border-hairline bg-card overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-serif text-2xl">{p.name}</div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-bronze group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0" />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{p.tagline}</div>
                <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{p.overview}</p>
                <div className="mt-6 eyebrow">Details</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Moments that mattered.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <Link
            to="/achievements/$slug"
            params={{ slug: a.slug }}
            key={a.slug}
            className="card-lift group rounded-2xl border border-hairline bg-card p-6 flex flex-col"
          >
            <Award className="size-5 text-bronze" />
            <div className="font-serif text-xl mt-4">{a.title}</div>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{a.summary}</p>
            <span className="mt-4 text-xs text-muted-foreground group-hover:text-foreground inline-flex items-center gap-1">
              View achievement details <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      intro="Drop a note about your project, role, or idea — I read everything."
    >
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const f = new FormData(form);
              const name = String(f.get("name") ?? "").trim();
              const email = String(f.get("email") ?? "").trim();
              const message = String(f.get("message") ?? "").trim();
              if (!name || !email || !message) {
                toast.error("Please fill out every field.");
                return;
              }
              const subject = encodeURIComponent(`Portfolio enquiry — ${name}`);
              const body = encodeURIComponent(
                `${message}\n\n— ${name}\n${email}`,
              );
              window.location.href = `mailto:yarisnadaf@gmail.com?subject=${subject}&body=${body}`;
              toast.success("Opening your mail app — message ready to send.");
              form.reset();
            }}
          >
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
            <Field name="message" label="Message" textarea />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm hover:opacity-90"
            >
              <Send className="size-4" /> Send message
            </button>
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-hairline bg-card p-6">
            <div className="eyebrow">Direct</div>
            <a
              href="mailto:yarisnadaf@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-sm hover:text-bronze"
            >
              <Mail className="size-4 shrink-0" /> Yaris Nadaf
            </a>
            <div className="mt-5 eyebrow">Elsewhere</div>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-bronze" href="https://github.com/YarisHaris" target="_blank" rel="noreferrer">
                  <Github className="size-4" /> Yaris Nadaf
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-bronze" href="https://www.linkedin.com/in/yaris-nadaf-3128a7382" target="_blank" rel="noreferrer">
                  <Linkedin className="size-4" /> Yaris Nadaf
                </a>
              </li>
            </ul>
          </div>

        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const Cmp = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <Cmp
        name={name}
        type={type}
        rows={textarea ? 5 : undefined}
        className="mt-2 w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2.5 text-base"
      />
    </label>
  );
}
