import { Clock, Leaf, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contacts, meta } from "@/data";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "../icons";

const details = [
  {
    icon: MapPin,
    title: "Adresimiz",
    lines: [contacts.address, contacts.address_location],
  },
  {
    icon: Phone,
    title: "İletişim",
    lines: [contacts.number, contacts.email],
  },
  {
    icon: Clock,
    title: "Çalışma Saatlerimiz",
    lines: ["Mon – Sat: 08:00 – 19:00", "Sunday: 10:00 – 16:00"],
  },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: WhatsappIcon, label: "WhatsApp", href: "#" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s share a glass of tea.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Questions about a blend, wholesale, or a visit to the garden? Reach out — we&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: details + map */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {details.map((d) => (
                <div key={d.title} className="rounded-xl border border-border bg-card p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{d.title}</h3>
                  {d.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:32px_32px]"
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-6" />
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">Rize, Black Sea Region</p>
                <p className="text-xs text-muted-foreground">Map preview</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Follow us</span>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <Card>
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Send className="size-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                    Teşekkürler!
                  </h3>
                  <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                    Your message has been received. We&apos;ll get back to you shortly with a warm
                    reply.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Ayşe Yılmaz" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us which blend you're curious about..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="size-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-4" />
            </span>
            <span className="font-serif text-base font-semibold text-foreground">{meta.title}</span>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {meta.title} · Crafted with care in the Black Sea.
          </p>
        </div>
      </footer>
    </section>
  );
}
