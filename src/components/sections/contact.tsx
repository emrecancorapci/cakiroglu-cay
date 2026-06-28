import { Clock, MapPin, Phone } from "lucide-react";

import { contact, meta } from "@/data";

import { InstagramIcon, WhatsappIcon } from "../icons";

const details = [
  {
    icon: MapPin,
    title: contact.blocks.address.title,
    lines: contact.blocks.address.content.split("\n").map((v) => ({ val: v })),
  },
  {
    icon: Phone,
    title: contact.blocks.contact.title,
    lines: [
      { val: contact.blocks.contact.number, type: "number" },
    ],
  },
  {
    icon: Clock,
    title: contact.blocks.workHours.title,
    lines: contact.blocks.workHours.content.split("\n").map((v) => ({ val: v })),
  },
];

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: `https://instagram.com/${contact.socials.instagram}`,
  },
  { icon: WhatsappIcon, label: "WhatsApp", href: `https://wa.me/${meta.numberRaw.substring(1)}` },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-primary/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-lg font-semibold uppercase tracking-widest text-primary">
            {contact.title}
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {contact.subtitle}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {contact.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {details.map((d) => (
                <div key={d.title} className="rounded-xl border border-border bg-background p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{d.title}</h3>
                  <div className="grid gap-0.5 pt-1">
                    {d.lines.map((l) =>
                      "type" in l ? (
                        <a
                          href={l.type === "email" ? `mailto:${l.val}` : `tel:${l.val}`}
                          key={l.val}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {l.val}
                        </a>
                      ) : (
                        <p key={l.val} className="text-sm leading-relaxed text-muted-foreground">
                          {l.val}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted">
              <iframe
                title="Cakıroğlu Çay's Map Preview"
                className="border-0 size-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597.8011095884742!2d40.3061595903258!3d40.96552310671622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4065d50018cb4789%3A0x44aea31ee922e532!2zw4dBS0lST8SeTFUgw4dBWQ!5e0!3m2!1str!2str!4v1782630006028!5m2!1str!2str"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">{contact.followText}</span>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
