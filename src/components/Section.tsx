import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 16 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-editorial py-24 md:py-32 scroll-mt-20">
      <Reveal>
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h2 className="text-4xl md:text-6xl max-w-3xl">{title}</h2>
        {intro ? (
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">{intro}</p>
        ) : null}
      </Reveal>
      <div className="mt-14">{children}</div>
    </section>
  );
}
