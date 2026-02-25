import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface TeamPageProps {
  params: Promise<{ lang: string }>;
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      {/* Dark branded hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white sm:py-20">
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-20 top-6 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-44 w-44 rounded-full bg-blue-300/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10">
          <Reveal y={18}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.team.pageTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-white/70">{dictionary.team.intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Team grid */}
      <section className="bg-neutral-50 py-16">
        <div className="tp-container">
          {dictionary.team.note && (
            <Reveal y={12}>
              <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                {dictionary.team.note}
              </p>
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dictionary.team.members.map((member, index) => (
              <Reveal key={member.name} y={22} delayMs={index * 80}>
                <article className="tp-card-glow group flex flex-col rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm">
                  {/* Avatar */}
                  <div className="relative h-28 w-28 shrink-0">
                    <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-blue-900/10 ring-offset-2 ring-offset-white shadow-[0_8px_24px_rgba(26,77,95,0.18)]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="112px"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-5 flex flex-1 flex-col">
                    <h2 className="text-lg font-semibold text-blue-900">{member.name}</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
                      {member.role}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {member.bio}
                    </p>
                    <Link
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-2.5 hover:text-blue-600"
                    >
                      {dictionary.team.cvLabel}
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
