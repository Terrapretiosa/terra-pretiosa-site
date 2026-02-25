"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { megaMenuCategoryOrder } from "@/content/nav";
import type { Dictionary, Lang } from "@/content/types";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn } from "@/lib/cn";

interface NavbarProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    megaMenuCategoryOrder[0],
  );

  const altLang: Lang = lang === "fr" ? "en" : "fr";

  const switchHref = useMemo(() => {
    if (!pathname) {
      return `/${altLang}`;
    }

    if (/^\/(fr|en)(\/|$)/.test(pathname)) {
      return pathname.replace(/^\/(fr|en)/, `/${altLang}`);
    }

    return `/${altLang}${pathname}`;
  }, [altLang, pathname]);

  const companyLinks = useMemo(
    () => [
      { label: dictionary.nav.companyLinks.about, href: `/${lang}/company#about` },
      {
        label: dictionary.nav.companyLinks.megatrends,
        href: `/${lang}/company#megatrends`,
      },
      {
        label: dictionary.nav.companyLinks.sustainable,
        href: `/${lang}/company#sustainable`,
      },
      {
        label: dictionary.nav.companyLinks.ambitions,
        href: `/${lang}/company#ambitions`,
      },
      { label: dictionary.nav.companyLinks.contact, href: `/${lang}/contact` },
    ],
    [dictionary.nav.companyLinks, lang],
  );

  useOnClickOutside(
    rootRef,
    () => {
      setOpenMenu(null);
    },
    Boolean(openMenu),
  );

  useEffect(() => {
    setOpenMenu(null);
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const shouldLockScroll = Boolean(openMenu) || searchOpen || mobileMenuOpen;
    document.body.style.overflow = shouldLockScroll ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, openMenu, searchOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={rootRef} className="fixed inset-x-0 top-0 z-50">
      <header
        className={cn(
          "border-b border-cyan-300/35 bg-blue-900 text-white transition-all duration-300",
          isScrolled && "bg-blue-950/95 shadow-[0_8px_20px_rgba(2,6,23,0.3)] backdrop-blur",
        )}
      >
        <div className="tp-container flex h-14 items-center gap-3">
          <Link
            href={`/${lang}`}
            className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]"
          >
            <Image
              src="/brand/terra-pretiosa-mark.png"
              alt={dictionary.logoLabel}
              width={544}
              height={544}
              className="tp-logo-glow h-8 w-8 rounded-full object-contain sm:hidden"
              sizes="32px"
              priority
            />
            <Image
              src="/brand/terra-pretiosa-logo.png"
              alt={dictionary.logoLabel}
              width={700}
              height={162}
              className="tp-logo-glow hidden h-6 w-auto object-contain sm:block lg:h-7"
              sizes="(max-width: 1024px) 120px, 150px"
              priority
            />
            <span className="sr-only">{dictionary.logoLabel}</span>
          </Link>

          <nav className="mx-auto hidden items-center gap-4 lg:flex">
            <button
              type="button"
              className={cn(
                "px-3 py-1 text-sm font-medium transition hover:-translate-y-0.5",
                openMenu === "services" ? "text-cyan-200" : "hover:text-cyan-200",
              )}
              onClick={() =>
                setOpenMenu((prev) => (prev === "services" ? null : "services"))
              }
            >
              {dictionary.nav.services}
            </button>
            <button
              type="button"
              className={cn(
                "px-3 py-1 text-sm font-medium transition hover:-translate-y-0.5",
                openMenu === "company" ? "text-cyan-200" : "hover:text-cyan-200",
              )}
              onClick={() =>
                setOpenMenu((prev) => (prev === "company" ? null : "company"))
              }
            >
              {dictionary.nav.company}
            </button>
            <Link
              href={`/${lang}/team`}
              className="px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:text-cyan-200"
            >
              {dictionary.nav.team}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:text-cyan-200"
            >
              {dictionary.nav.contact}
            </Link>
          </nav>

          <div className="ml-auto hidden items-center gap-4 text-xs uppercase tracking-wide lg:flex">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="transition hover:text-cyan-200"
            >
              {dictionary.nav.search}
            </button>
            <Link href={switchHref} className="transition hover:text-cyan-200">
              {altLang.toUpperCase()}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={dictionary.nav.search}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:border-white/70 hover:bg-white/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <Link
              href={switchHref}
              className="inline-flex h-9 min-w-10 items-center justify-center rounded-full border border-white/30 px-2.5 text-xs font-semibold uppercase tracking-wide transition hover:border-white/70 hover:bg-white/10"
            >
              {altLang.toUpperCase()}
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition hover:bg-white/10"
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-3.5 w-4.5 flex-col justify-between">
                <span
                  className={cn(
                    "block h-0.5 w-full bg-white transition",
                    mobileMenuOpen && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full bg-white transition",
                    mobileMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full bg-white transition",
                    mobileMenuOpen && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 top-14 z-40 bg-black/45 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="tp-enter-up ml-auto flex h-[calc(100vh-56px)] w-[min(92vw,380px)] flex-col overflow-y-auto border-l border-white/10 bg-neutral-900 px-5 py-5 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                {dictionary.siteName}
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
              >
                {dictionary.nav.services}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={cn(
                    "h-4 w-4 shrink-0 text-white/60 transition duration-300",
                    mobileServicesOpen ? "rotate-90" : "",
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {mobileServicesOpen ? (
                <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  {dictionary.services.categories.map((category) => (
                    <details
                      key={category.slug}
                      className="group rounded-xl border border-white/10 bg-neutral-900/70"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-white">
                        <span className="pr-3 leading-snug">{category.title}</span>
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

                      <div className="space-y-1 border-t border-white/10 px-3 py-2">
                        <Link
                          href={`/${lang}/services/${category.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-2 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-white/10 hover:text-white"
                        >
                          {dictionary.common.learnMore}
                        </Link>

                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${lang}/services/${category.slug}/${service.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg px-2 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
                onClick={() => setMobileCompanyOpen((prev) => !prev)}
              >
                {dictionary.nav.company}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={cn(
                    "h-4 w-4 shrink-0 text-white/60 transition duration-300",
                    mobileCompanyOpen ? "rotate-90" : "",
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {mobileCompanyOpen ? (
                <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link
                href={`/${lang}/team`}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
              >
                {dictionary.nav.team}
              </Link>
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
              >
                {dictionary.nav.contact}
              </Link>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="tp-blue-button w-full"
              >
                {dictionary.nav.mission}
              </Link>
            </div>
          </aside>
        </div>
      ) : null}

      <MegaMenu
        mode={openMenu}
        lang={lang}
        dictionary={dictionary}
        activeCategorySlug={activeCategorySlug}
        onCategoryChange={setActiveCategorySlug}
        onClose={() => setOpenMenu(null)}
      />

      <SearchOverlay
        isOpen={searchOpen}
        lang={lang}
        dictionary={dictionary}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
