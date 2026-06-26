import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award } from "lucide-react";
import { internships } from "@/data/portfolio";
import { Reveal } from "@/components/Section";

export const Route = createFileRoute("/experience/$slug")({
  head: ({ params }) => {
    const i = internships.find((x) => x.slug === params.slug);
    const title = i ? `${i.role} — ${i.company}` : "Experience";
    const description = i?.overview ?? "Internship case study.";
    const url = `/experience/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  loader: ({ params }) => {
    const i = internships.find((x) => x.slug === params.slug);
    if (!i) throw notFound();
    return i;
  },
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const i = Route.useLoaderData();
  return (
    <article className="container-editorial pt-16 pb-24">
      <Link to="/" hash="experience" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-12">
        <ArrowLeft className="size-4" /> Back to experience
      </Link>
      <Reveal>
        <div className="eyebrow mb-4">Internship · {i.duration}</div>
        <h1 className="text-5xl md:text-7xl max-w-4xl">{i.role}</h1>
        <div className="mt-4 text-xl text-muted-foreground">{i.company}</div>
      </Reveal>

      <div className="mt-20 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 md:sticky md:top-24 self-start space-y-8 text-sm">
          <Side title="Timeline" body={i.duration} />
          <Side title="Technologies">
            <div className="flex flex-wrap gap-2 mt-2">
              {i.technologies.map((t: string) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-hairline bg-secondary">{t}</span>
              ))}
            </div>
          </Side>
          {i.certificate ? (
            <Side title="Certificate">
              <a
                href={i.certificate}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${i.company} internship certificate (opens in new tab)`}
                title="View certificate"
                className="mt-2 inline-flex items-center justify-center size-9 rounded-md border border-hairline text-bronze hover:border-bronze hover:bg-secondary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Award className="size-4" aria-hidden="true" />
              </a>
            </Side>
          ) : null}


        </aside>

        <div className="md:col-span-8 space-y-14">
          <Block title="Company overview" body={i.overview} />
          <ListBlock title="Responsibilities" items={i.responsibilities} />
          <ListBlock title="Problems solved" items={i.problemsSolved} />
          <ListBlock title="Challenges" items={i.challenges} />
          <ListBlock title="Learnings" items={i.learnings} />
        </div>
      </div>
    </article>
  );
}

function Side({ title, body, children }: { title: string; body?: string; children?: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
      {body ? <div className="mt-1 font-mono text-xs text-bronze">{body}</div> : null}
      {children}
    </div>
  );
}

function Block({ title, body, children }: { title: string; body?: string; children?: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
      {body ? <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{body}</p> : null}
      {children}
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
      <ul className="space-y-3 text-lg leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="text-bronze mt-2">·</span>
            <span className="text-muted-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
