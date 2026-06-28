import { Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { contact } from "@/data";

export default function ContactForm({ form }: { form: (typeof contact)["form"] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card className="py-6 sm:py-8 bg-background">
      <CardTitle className="px-6 sm:px-8 font-bold text-lg">{form.title}</CardTitle>
      <CardContent className="px-6 sm:px-8">
        {submitted ? (
          <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Send className="size-6" />
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
              {form.thanksTitle}
            </h3>
            <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {form.thanksDescription}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">{form.name}</Label>
              <Input id="name" name="name" placeholder={form.namePlaceholder} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{form.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={form.emailPlaceholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{form.message}</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder={form.messagePlaceholder}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {form.send}
              <Send className="size-4" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
