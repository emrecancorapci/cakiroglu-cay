import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { Product } from "@/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      role="article"
      className="group overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-10/11 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.name}`}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-1 flex-col px-5">
        <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>

        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="pt-6">
          <Button variant="outline" className="w-full" asChild>
            <a className="flex gap-1 items-center justify-center" href="#contact">
              İletişime Geçin
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
