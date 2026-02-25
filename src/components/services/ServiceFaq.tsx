import type { FaqItem } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";

interface ServiceFaqProps {
  title: string;
  items: FaqItem[];
}

export function ServiceFaq({ title, items }: ServiceFaqProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="bg-neutral-50 py-16">
      <Reveal y={16}>
        <div className="tp-container max-w-4xl">
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {title}
          </h2>
          <div className="mt-8 space-y-3">
            {items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 shadow-sm transition duration-300 open:shadow-[0_8px_24px_rgba(26,77,95,0.12)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-blue-900">
                  <span>{item.question}</span>
                  {/* Plus/minus icon */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 transition duration-300 group-open:rotate-45">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 pt-1 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
