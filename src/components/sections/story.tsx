import { story } from "@/data";

export function Story() {
  return (
    <section id="story" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="relative order-last md:order-first">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
            <img
              src="/images/turkish-tea-glass.png"
              alt="Steaming traditional Turkish tea served in a tulip glass"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <span className="text-lg font-semibold uppercase tracking-widest text-primary">
            {story.title}
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {story.subtitle}
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {story.content.split("\n").map((v) => (
              <p key="">{v}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
