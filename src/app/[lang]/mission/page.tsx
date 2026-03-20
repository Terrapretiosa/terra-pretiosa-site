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
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-14 text-white sm:py-18">
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-16 top-4 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_8s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10 max-w-6xl">
          <Reveal y={16}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.mission.pageTitle}
            </h1>
            <p className="mt-3 max-w-3xl text-white/70">{dictionary.mission.intro}</p>
          </Reveal>
        </div>
      </div>

      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="tp-container max-w-5xl">
          <Reveal y={18}>
            <MissionForm dictionary={dictionary} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
