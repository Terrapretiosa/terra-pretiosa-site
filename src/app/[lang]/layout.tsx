import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SetLangAttribute } from "@/components/layout/SetLangAttribute";
import {
  SUPPORTED_LANGS,
  getDictionary,
  isSupportedLang,
} from "@/content";

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <div className="min-h-screen bg-white">
      <SetLangAttribute lang={lang} />
      <Navbar lang={lang} dictionary={dictionary} />
      <main className="pt-14">{children}</main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
