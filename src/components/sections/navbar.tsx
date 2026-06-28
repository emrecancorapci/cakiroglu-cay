import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data";

const links = [
  { label: "Hikayemiz", href: "#story" },
  { label: "Ürünlerimiz", href: "#products" },
  { label: "İletişim", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center size-full gap-2">
          <img className="relative -bottom-3 -m-4 h-12" src="/images/logo-clear.svg" alt="Çakıroğlu Çay'ın Logosu" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex">
            <a className="flex gap-2 items-center" href={`tel:${contact.blocks.contact.number}`}>
              <Phone className="size-4" />
              Bizi Arayın
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full">
              <a className="flex gap-2 items-center" href={`tel:${contact.blocks.contact.number}`}>
                <Phone className="size-4" />
                Bizi Arayın
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
