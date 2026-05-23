"use client";

import { useState } from "react";
import { BrainCircuit, ShieldCheck, Workflow } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const FOCUS_ITEMS = [
  {
    id: "reasoning",
    label: "Reasoning",
    icon: BrainCircuit,
    kicker: "Current focus",
    title: "LLM reasoning that can be inspected.",
    detail:
      "Research work centered on turning natural-language intent into structured, testable reasoning flows.",
    signal: "Leibniz Lab",
  },
  {
    id: "security",
    label: "Security",
    icon: ShieldCheck,
    kicker: "Applied research",
    title: "Vulnerability analysis with explicit logic.",
    detail:
      "Contributing the LLM component inside a vulnerability reasoning system funded through ARPA-H UPGRADE.",
    signal: "VulReasoner",
  },
  {
    id: "systems",
    label: "Systems",
    icon: Workflow,
    kicker: "Build style",
    title: "Small interfaces around hard decisions.",
    detail:
      "I like systems where the user can see the path from messy input to a result they can question.",
    signal: "Product-minded SWE",
  },
] as const;

export function HeroFocusPanel() {
  const [activeId, setActiveId] = useState<(typeof FOCUS_ITEMS)[number]["id"]>(
    FOCUS_ITEMS[0].id,
  );
  const active = FOCUS_ITEMS.find((item) => item.id === activeId) ?? FOCUS_ITEMS[0];
  const ActiveIcon = active.icon;

  return (
    <aside
      aria-label="Current work focus"
      className="relative overflow-hidden rounded border border-border bg-foreground/[0.025] p-4 shadow-2xl shadow-black/20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(250,250,250,0.08),transparent_34%)]"
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Working Map
            </p>
            <p className="mt-1 text-sm text-foreground/75">
              Choose a signal to inspect.
            </p>
          </div>
          <div className="rounded border border-border bg-background/80 p-2 text-accent">
            <ActiveIcon aria-hidden="true" className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2" role="tablist" aria-label="Focus areas">
          {FOCUS_ITEMS.map((item) => {
            const Icon = item.icon;
            const selected = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="hero-focus-panel"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "flex min-h-20 flex-col items-start justify-between rounded border p-3 text-left transition-colors",
                  selected
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border bg-background/50 text-muted hover:border-foreground/30 hover:text-foreground",
                )}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                <span className="font-mono text-[11px]">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="hero-focus-panel"
          role="tabpanel"
          aria-live="polite"
          className="mt-5 min-h-56 rounded border border-border bg-background/75 p-5"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {active.kicker}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {active.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {active.detail}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs text-muted">{active.signal}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}
