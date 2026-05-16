"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/writing" },
] as const;

const CONTACT_HREF = "/#contact";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {`{{NAV_NAME}}`}
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CONTACT_HREF}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <button
              ref={triggerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="text-foreground transition-colors hover:text-accent md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </Container>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <Container>
            <div className="flex h-16 items-center justify-between">
              <span className="font-mono text-sm text-foreground">
                {`{{NAV_NAME}}`}
              </span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => {
                  setMenuOpen(false);
                  triggerRef.current?.focus();
                }}
                className="text-foreground transition-colors hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </Container>
          <Container>
            <ul className="flex flex-col gap-6 pt-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={CONTACT_HREF}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </>
  );
}