import resumeAsset from "@/assets/resume.pdf.asset.json";
import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const nav = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Work" },
  { to: "/#experience", label: "Experience" },
  { to: "/#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/YarisHaris", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/yaris-nadaf-3128a7382", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:yarisnadaf@gmail.com", label: "Email", Icon: Mail },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_82%,transparent)]">
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl">Yaris</span>
          <span className="text-muted-foreground text-xs">— portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) =>
            onHome && n.to.includes("#") ? (
              <a key={n.to} href={n.to.replace("/", "")} className="nav-link text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ) : (
              <Link
                key={n.to}
                to="/"
                hash={n.to.includes("#") ? n.to.split("#")[1] : undefined}
                className="nav-link text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            {socials.map(({ href, label, Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="icon-lift inline-flex items-center justify-center size-9 rounded-full text-muted-foreground hover:bg-secondary"
                  >
                    <Icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
          <ThemeToggle />
          <a
            href={resumeAsset.url}
            className="btn-lift ml-1 text-sm px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="hairline" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32">
      <div className="hairline" />
      <div className="container-editorial py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-serif text-2xl mb-2">Yaris A. Nadaf</div>
          <p className="text-muted-foreground">
            Backend · Full Stack · AI/ML · IoT. Building reliable software.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="icon-lift inline-flex items-center justify-center size-9 rounded-full border border-hairline text-muted-foreground hover:border-bronze"
                  >
                    <Icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3">Sections</div>
          <ul className="space-y-1.5">
            <li><a href="#about" className="hover:text-bronze">About</a></li>
            <li><a href="#projects" className="hover:text-bronze">Projects</a></li>
            <li><a href="#experience" className="hover:text-bronze">Experience</a></li>
            <li><a href="#contact" className="hover:text-bronze">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Elsewhere</div>
          <ul className="space-y-1.5">
            <li>
              <a className="inline-flex items-center gap-2 nav-link hover:text-bronze" href="https://github.com/YarisHaris" target="_blank" rel="noreferrer">
                <Github className="size-4" /> Yaris Nadaf
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 nav-link hover:text-bronze" href="https://www.linkedin.com/in/yaris-nadaf-3128a7382" target="_blank" rel="noreferrer">
                <Linkedin className="size-4" /> Yaris Nadaf
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 nav-link hover:text-bronze" href="mailto:yarisnadaf@gmail.com">
                <Mail className="size-4" /> Yaris Nadaf
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-editorial pb-10 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Yaris A. Nadaf</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
