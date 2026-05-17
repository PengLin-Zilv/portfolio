import { Mail } from "lucide-react";
import { Container } from "./container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const GITHUB_URL = "https://github.com/PengLin-Zilv";
const LINKEDIN_URL = "https://www.linkedin.com/in/penglin2027";
const EMAIL = "linpeng2027@gmail.com";

const YEAR = new Date().getFullYear();
const COMMIT_SHA = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const DEPLOY_INFO =
  process.env.VERCEL === "1" && COMMIT_SHA
    ? `deployed ${BUILD_DATE} · ${COMMIT_SHA}`
    : "local";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_URL, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail, external: false },
] as const;

const NAV_NAME = "Peng Lin";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            © {YEAR} {NAV_NAME}
          </p>

          <ul className="flex items-center gap-5">
            {SOCIALS.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-muted transition-colors hover:text-foreground"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-xs text-muted">
            Next.js · Tailwind · Vercel · {DEPLOY_INFO}
          </p>
        </div>
      </Container>
    </footer>
  );
}
