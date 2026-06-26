import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/Section";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    const title = p ? `${p.name} — ${p.tagline}` : "Project";
    const description = p?.metaDescription ?? p?.overview ?? "Project case study.";
    const url = `/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: p?.name ?? "Project" },
        { property: "og:description", content: p?.tagline ?? description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: p.name,
                description,
                applicationCategory: p.tagline,
                url,
                author: { "@type": "Person", name: "Yaris A. Nadaf" },
                programmingLanguage: p.techStack,
              }),
            },
          ]
        : [],
    };
  },
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData();
  return (
    <article className="container-editorial pt-16 pb-24">
      <Link to="/" hash="projects" className="link-underline text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-12">
        <ArrowLeft className="size-4" /> Back to projects
      </Link>
      <Reveal>
        <div className="eyebrow mb-4">Case study</div>
        <h1 className="text-5xl md:text-7xl max-w-4xl">{p.name}</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl">{p.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={p.github} className="btn-lift inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-sm hover:border-foreground">
            <Github className="size-4" /> GitHub
          </a>
          {p.liveDemo && (
            <a href={p.liveDemo} className="btn-lift inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm">
              <ExternalLink className="size-4" /> Live demo
            </a>
          )}
        </div>
      </Reveal>

      <div className="mt-20 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 md:sticky md:top-24 self-start space-y-8 text-sm">
          <Side title="Tech stack">
            <div className="flex flex-wrap gap-2 mt-2">
              {p.techStack.map((t: string) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-hairline bg-secondary">{t}</span>
              ))}
            </div>
          </Side>
          <Side title="Database">
            <p className="mt-2 text-muted-foreground font-mono text-xs leading-relaxed">{p.databaseDesign}</p>
          </Side>
        </aside>

        <div className="md:col-span-8 space-y-14">
          <Block title="Overview" body={p.overview} />
          <Block title="Problem statement" body={p.problem} />
          <ListBlock title="Objectives" items={p.objectives} />
          <ListBlock title="Workflow" items={p.workflow} numbered />
          <ListBlock title="Features" items={p.features} />
          <ListBlock title="Challenges" items={p.challenges} />
          <ListBlock title="Solutions" items={p.solutions} />
          <ListBlock title="Lessons learned" items={p.lessons} />
          <ListBlock title="Future scope" items={p.futureScope} />
        </div>
      </div>
    </article>
  );
}

function Side({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
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
function ListBlock({ title, items, numbered }: { title: string; items: string[]; numbered?: boolean }) {
  return (
    <section>
      <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
      <ul className="space-y-3 text-lg leading-relaxed">
        {items.map((it, idx) => (
          <li key={it} className="flex gap-3">
            <span className="text-bronze mt-1 font-mono text-sm w-6">
              {numbered ? String(idx + 1).padStart(2, "0") : "·"}
            </span>
            <span className="text-muted-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
