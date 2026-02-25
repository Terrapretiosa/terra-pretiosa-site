import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      {/* Dark branded hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-14 text-white sm:py-18">
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-16 top-4 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_8s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10 max-w-6xl">
          <Reveal y={16}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.contact.formTitle}
            </h1>
            <p className="mt-3 max-w-3xl text-white/70">{dictionary.contact.intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Form + Info */}
      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="tp-container max-w-6xl">
          <Reveal y={18} className="mt-0">
            <ContactForm dictionary={dictionary} />
          </Reveal>

          {/* Contact info cards */}
          <Reveal y={16} delayMs={100} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
              {/* HQ */}
              <article className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900/8">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="tp-heading text-xs text-blue-900">{dictionary.contact.hqTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {dictionary.contact.hqAddress}
                </p>
              </article>

              {/* Corridor */}
              <article className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900/8">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <p className="tp-heading text-xs text-blue-900">
                  {dictionary.contact.corridorTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {dictionary.contact.corridorCountries.join(", ")}
                </p>
              </article>

              {/* Phone & Email */}
              <article className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900/8">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <p className="tp-heading text-xs text-blue-900">
                  {dictionary.contact.phoneLabel}
                </p>
                <p className="mt-2 text-sm text-slate-600">{dictionary.contact.phoneValue}</p>
                <p className="mt-3 tp-heading text-xs text-blue-900">
                  {dictionary.contact.emailLabel}
                </p>
                <p className="mt-1 text-sm text-slate-600">{dictionary.contact.emailValue}</p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
