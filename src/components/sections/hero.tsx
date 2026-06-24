import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="flex flex-col items-start">
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.text.split("*").map((v, i) =>
              i % 2 ? (
                <strong className="font-bold" key="">
                  {v}
                </strong>
              ) : (
                v
              ),
            )}
          </p>
          <div className="w-full mt-8 flex flex-col gap-3 sm:flex-row justify-center md:justify-start">
            <Button size="lg">
              <a className="flex gap-1 items-center" href="#contact">
                {hero.buttonContact}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#products">{hero.buttonTeas}</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src="/images/rize-tea-fields.png"
              alt="Lush terraced green tea fields on the misty mountains of Rize, Turkey"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-16 -left-4 hidden w-44 overflow-hidden rounded-xl border border-border bg-card shadow-lg sm:block lg:-left-10 lg:w-52">
            <div className="relative aspect-square">
              <img
                className="object-cover"
                src="/images/store-outside.jpg"
                alt="A traditional tulip-shaped glass of deep amber Turkish black tea"
                sizes="208px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
