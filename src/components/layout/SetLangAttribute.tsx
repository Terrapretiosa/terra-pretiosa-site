"use client";

import { useEffect } from "react";
import type { Lang } from "@/content/types";

export function SetLangAttribute({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
