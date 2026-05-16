import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className={cn("space-y-2 text-center")}>
        <h1 className="font-sans text-4xl text-foreground">Geist Sans</h1>
        <p className="font-mono text-sm text-muted">Geist Mono · muted</p>
        <p className="text-accent">Accent #3B82F6</p>
      </div>
    </main>
  );
}