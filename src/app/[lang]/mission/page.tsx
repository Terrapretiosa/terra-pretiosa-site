import { notFound } from "next/navigation";
import { MissionForm } from "@/components/forms/MissionForm";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface MissionPageProps {
  params: Promise<{ lang: string }>;
}

export default async function MissionPage({ params }: MissionPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      {/* Dark branded hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-14 text-white sm:py-20">
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -left-10 top-6 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_8s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -right-10 bottom-4 h-44 w-44 rounded-full bg-blue-300/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10">
          <Reveal y={18}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.mission.pageTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-white/70">{dictionary.mission.intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Form section */}
      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="tp-container">
          <Reveal x={20} y={18}>
            <MissionForm dictionary={dictionary} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
