import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal } from "@/components/Section";

export const Route = createFileRoute("/achievements/$slug")({
  head: ({ params }) => {
    const a = achievements.find((x) => x.slug === params.slug);
    const title = a ? `${a.title} — Achievement` : "Achievement";
    const description = a?.summary ?? "Achievement detail.";
    const url = `/achievements/${params.slug}`;
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
    const a = achievements.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  component: AchievementDetail,
});

function AchievementDetail() {
  const a = Route.useLoaderData();
  return (
    <article className="container-editorial pt-16 pb-32">
      <Link to="/" hash="achievements" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-12">
        <ArrowLeft className="size-4" /> Back to achievements
      </Link>
      <Reveal>
        <Award className="size-8 text-bronze mb-6" />
        <div className="eyebrow mb-4">{a.year ?? "Highlight"}</div>
        <h1 className="text-5xl md:text-7xl max-w-3xl">{a.title}</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">{a.summary}</p>
        <div className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {a.details}
        </div>
      </Reveal>
    </article>
  );
}
