import { meta } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <img className="h-12" src="/images/logo-clear.svg" alt="Çakıroğlu Çay'ın Logosu" />
        </div>
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {meta.title} · {meta.description}
        </p>
      </div>
    </footer>
  );
}
