import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data";

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {products.title}
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {products.subtitle}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{products.content}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.products.map((product) => (
          <Card
            key={product.name}
            className="group overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
                {product.strength}
              </Badge>
            </div>
            <CardContent className="flex flex-1 flex-col px-5">
              <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <Button variant="outline" className="mt-5 w-full">
                <a className="flex gap-1 items-center" href="#contact">
                  İletişime Geç
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
