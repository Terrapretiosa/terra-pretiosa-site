import { Reveal } from "@/components/motion/Reveal";
import type { ServiceItem } from "@/content/types";

interface ServiceIntroProps {
  service: ServiceItem;
}

export function ServiceIntro({ service }: ServiceIntroProps) {
  return (
    <section className="py-16">
      <div className="tp-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Paragraphs */}
        <Reveal x={-22} y={20} className="space-y-5">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </Reveal>

        {/* Capabilities */}
        <Reveal delayMs={110} x={22} y={20}>
          <div className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/70 to-white p-6 shadow-sm">
            <div className="mb-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
            <h2 className="tp-heading text-xs text-blue-900">Capabilities</h2>
            <ul className="mt-5 space-y-3">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
