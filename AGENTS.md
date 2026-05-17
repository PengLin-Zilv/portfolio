# CLAUDE.md

Living source of truth for stack and convention decisions in this project.
Update this file whenever a decision is made that future sessions need to honor.

---

## Stack (locked)

- **Framework**: Next.js 15, App Router only
- **Language**: TypeScript, `strict: true`
- **Styling**: Tailwind CSS v3.4.x (NOT v4; do not suggest migrating)
- **Animation**: `motion` package, imported from `motion/react` (NOT `framer-motion`)
- **Content**: Velite for MDX (Writing section)
- **Fonts**: `geist` package — `GeistSans` and `GeistMono` via CSS variables
- **Icons**: `lucide-react`
- **Class composition**: `cn()` from `lib/utils.ts` (clsx + tailwind-merge); never manually concatenate class strings
- **Hosting**: Vercel
- **Future**: Anthropic API in hero, Vercel KV for rate limiting

## Forbidden

- Tailwind v4
- `framer-motion` package (use `motion` instead)
- `darkMode: "class"` in Tailwind config (site is always dark)
- Decorative animation — only scroll-triggered reveals and hover feedback
- Theme toggle / light mode (not in spec)
- Placeholder copy invented by Claude — use `{{PLACEHOLDER}}` markers for human content

## Design tokens

Defined in `tailwind.config.ts`:

- `background` `#0A0A0A` (near-black)
- `foreground` `#FAFAFA` (off-white)
- `muted` `#737373` (secondary text)
- `border` `#1F1F1F` (subtle dividers)
- `accent.DEFAULT` `#3B82F6` (electric blue, single accent)
- `accent.hover` `#60A5FA`

Max-widths:
- `max-w-content` `720px` (prose)
- `max-w-wide` `1100px` (hero, projects, default)

Breakpoints (mobile-first):
- `sm` 640px
- `md` 768px
- `lg` 1024px
- `xl` 1280px

## Folder conventions

- Components live under `components/<feature>/` — feature-folder, not flat.
  - Examples: `components/layout/`, `components/sections/`, `components/ui/`
- Utilities in `lib/`
- MDX content in `content/`
- File names: kebab-case (`navbar.tsx`)
- Export names: PascalCase for components (`Navbar`), camelCase for utilities

## Component architecture

- **Server components by default.** Add `"use client"` only when state, effects, browser APIs, or event handlers require it.
- Lift state as little as possible. If only one component needs it, keep it local.
- Layout primitives (`Container`, etc.) stay server components and accept `as` props for semantic flexibility.

## Accessibility baseline (non-negotiable)

- Skip-to-main link in navbar
- Esc closes mobile menu
- Focus returns to trigger element on close
- Body scroll lock when modal/menu is open
- `prefers-reduced-motion` honored globally (in `globals.css`)
- All icon-only buttons have `aria-label`
- External links: `target="_blank"` + `rel="noopener noreferrer"`

## Copy & tone

- First-person English
- Confident, not arrogant
- Engineering-focused: emphasize decisions and tradeoffs, not feature lists
- Banned phrases: "passionate developer", "love to code", "always learning", "clean code"
- Never invent project descriptions, about text, or research summaries. Use `{{PLACEHOLDER}}`.

## Performance targets

- Lighthouse ≥ 95 across Performance, Accessibility, Best Practices, SEO
- Mobile-first
- No unused dependencies — audit on each PR

## Working agreement

- One component or step at a time
- Ask clarifying questions before writing code
- Output only the requested component (no surrounding files unless asked)
- Specify exact file path
- List new dependencies and install commands
- Note env vars required
- Explain non-obvious decisions briefly
- When the user reports an error, diagnose specifically — no rewrites of working code

## Build order

1. ✅ Project init + base config
2. ✅ Layout shell
3. ✅ First Vercel deployment
4. ✅ Hero section
5. ✅ Projects section
6. ✅ Research section
7. ✅ About section
8. ✅ Dynamic OG image
— shipped above this line —
9. ⏸ Velite + MDX pipeline (deferred indefinitely)
10. ⏸ Writing section (deferred — only ship if there's real content)
11. ⏸ Mini AI Chat in Hero (deferred)
12. ⏸ GitHub contributions heatmap (deferred)

## Decisions log
- 2026-05-17: Writing/MDX/Chat/Heatmap deferred indefinitely. Site shipped as 4-section portfolio. Writing nav link removed.
- 2026-05-17: Writing section and Velite pipeline dropped — no committed posts to publish; would ship as empty infrastructure.
- 2026-05-16: Hero set to 60svh, not 85svh — projects near the fold matter more for quant/SWE audience than a cinematic hero.
- 2026-05-16: Footer includes copyright, socials, built-with + source link, last-deployed timestamp. All elements small/muted.
- 2026-05-16: No placeholder card in hero for the future AI chat — design clean v1; redesign hero when chat actually ships in step #10.
- 2026-05-16: Lancely cut from Projects — vibe-coded code quality. Used as teamwork interview story instead.
- 2026-05-16: Final Projects list: WatchToRead → Personal Finance Dashboard. Most-impressive-first ordering.
- 2026-05-16: Build order reordered — Research before About to match navbar order.
- 2026-05-16: Contact section deferred (possibly permanently). Existing affordances cover it.
- 2026-05-16: Animation library is `motion/react` (renamed from `framer-motion` in 2024). Do not suggest `framer-motion`.
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
