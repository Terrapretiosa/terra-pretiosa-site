import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Lang } from "@/content/types";

interface FooterProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function Footer({ lang, dictionary }: FooterProps) {
  const mobileGroups = dictionary.footer.columns.flatMap((column) => column.groups);

  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      {/* Ambient top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/18 to-transparent" />
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="tp-container relative z-10 py-10 md:py-14">
        <div className="md:hidden">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="tp-heading text-sm text-cyan-200">{dictionary.siteName}</p>
              <p className="mt-3 text-sm text-white/75">
                438 N Frederick Ave
                <br />
                Gaithersburg, MD 20877
              </p>
            </div>
            <Link
              href={`/${lang}`}
              className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-300/45 bg-white/5 ring-2 ring-white/20 transition hover:scale-105 hover:bg-white/10"
              aria-label={dictionary.logoLabel}
            >
              <Image
                src="/brand/terra-pretiosa-mark.png"
                alt={dictionary.logoLabel}
                width={544}
                height={544}
                className="tp-logo-glow h-14 w-14 object-contain"
                sizes="56px"
              />
            </Link>
          </div>

          <Link href={`/${lang}/contact`} className="tp-blue-button w-full">
            {dictionary.nav.mission}
          </Link>

          <div className="mt-6 space-y-2">
            {mobileGroups.map((group, index) => (
              <details
                key={`mobile-group-${group.title}-${index}`}
                className="group rounded-xl border border-white/15 bg-white/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-sm font-semibold text-white">
                  <span>{group.title}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 shrink-0 text-white/50 transition duration-300 group-open:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </summary>
                <div className="space-y-1 border-t border-white/10 px-4 pb-4 pt-2">
                  {group.links.map((link) => (
                    <Link
                      key={`mobile-${group.title}-${link.href}`}
                      href={link.href}
                      className="block py-1.5 text-sm text-white/80 underline-offset-2 transition hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
              {dictionary.footer.quickLinksTitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {dictionary.footer.quickLinks.map((link) => (
                <Link
                  key={`mobile-quick-${link.href}`}
                  href={link.href}
                  className="text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {dictionary.footer.socials.map((social) => (
                <a
                  key={`mobile-social-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition hover:text-white"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60">{dictionary.footer.legal}</p>
          </div>
        </div>

        <div className="hidden gap-10 md:grid lg:grid-cols-[220px_1fr]">
          <div className="space-y-5">
            <Link
              href={`/${lang}`}
              className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/50 bg-white/6 ring-2 ring-white/15 shadow-[0_0_24px_rgba(68,200,203,0.12)] transition hover:scale-105 hover:bg-white/12 hover:shadow-[0_0_32px_rgba(68,200,203,0.22)]"
              aria-label={dictionary.logoLabel}
            >
              <Image
                src="/brand/terra-pretiosa-mark.png"
                alt={dictionary.logoLabel}
                width={544}
                height={544}
                className="tp-logo-glow h-16 w-16 object-contain"
                sizes="64px"
              />
            </Link>
            <div>
              <p className="tp-heading text-sm text-cyan-200">{dictionary.siteName}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                438 N Frederick Ave
                <br />
                Gaithersburg, MD 20877
              </p>
              <Link
                href={`/${lang}/contact`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-cyan-300 transition duration-300 hover:gap-2.5 hover:text-white"
              >
                {dictionary.nav.mission}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.footer.columns.map((column, columnIndex) => (
              <div key={`footer-col-${columnIndex}`} className="space-y-7">
                {column.groups.map((group) => (
                  <div key={`${columnIndex}-${group.title}`}>
                    <p className="text-[1.02rem] font-semibold text-white">{group.title}</p>
                    <div className="mt-3 space-y-2">
                      {group.links.map((link) => (
                        <Link
                          key={`${group.title}-${link.href}`}
                          href={link.href}
                          className="block text-sm text-white/80 underline-offset-2 transition hover:translate-x-1 hover:text-white hover:underline"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden gap-6 border-t border-white/10 pt-6 text-xs text-white/60 md:grid lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <p>{dictionary.footer.legal}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-semibold uppercase tracking-wide text-cyan-200">
              {dictionary.footer.quickLinksTitle}
            </span>
            {dictionary.footer.quickLinks.map((link) => (
              <Link
                key={`quick-${link.href}`}
                href={link.href}
                className="text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 lg:justify-end">
            {dictionary.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition hover:text-white"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
