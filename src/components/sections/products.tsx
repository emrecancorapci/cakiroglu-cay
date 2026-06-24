import { products } from "@/data";
import ProductCard from "./products/product-card";

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-lg font-semibold uppercase tracking-widest text-primary">
          {products.title}
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {products.subtitle}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{products.content}</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {products.products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
