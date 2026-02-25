"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary, Lang } from "@/content/types";

interface SearchOverlayProps {
  isOpen: boolean;
  lang: Lang;
  dictionary: Dictionary;
  onClose: () => void;
}

interface SearchItem {
  label: string;
  href: string;
}

export function SearchOverlay({
  isOpen,
  lang,
  dictionary,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<SearchItem[]>(() => {
    const baseItems: SearchItem[] = [
      { label: dictionary.nav.services, href: `/${lang}/services` },
      { label: dictionary.nav.company, href: `/${lang}/company` },
      { label: dictionary.nav.team, href: `/${lang}/team` },
      { label: dictionary.nav.contact, href: `/${lang}/contact` },
    ];

    const serviceItems = dictionary.services.categories.flatMap((category) => [
      { label: category.title, href: `/${lang}/services/${category.slug}` },
      ...category.services.map((service) => ({
        label: service.title,
        href: `/${lang}/services/${category.slug}/${service.slug}`,
      })),
    ]);

    return [...baseItems, ...serviceItems];
  }, [dictionary, lang]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return items.slice(0, 8);
    }

    return items
      .filter((item) => item.label.toLowerCase().includes(normalizedQuery))
      .slice(0, 10);
  }, [items, query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }
    inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={dictionary.search.title}
    >
      <div
        className="tp-container tp-enter-up mt-24 max-w-4xl rounded-sm border border-white/10 bg-neutral-900 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
            {dictionary.search.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-white/80 transition hover:text-white"
          >
            ESC
          </button>
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={dictionary.search.placeholder}
          className="mt-5 w-full rounded-sm border border-white/20 bg-neutral-800 px-4 py-3 text-white outline-none transition focus:border-blue-300"
        />

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
          {dictionary.search.suggestedLabel}
        </p>

        <div className="mt-3 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={onClose}
                className="tp-card-lift block rounded-sm border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))
          ) : (
            <p className="text-sm text-white/70">{dictionary.search.noResult}</p>
          )}
        </div>
      </div>
    </div>
  );
}
