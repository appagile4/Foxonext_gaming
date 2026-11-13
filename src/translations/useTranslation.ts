"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLanguage } from "@/store/slices/languageSlice";
import { translations, TranslationSchema } from "./dictionaries";
import { SUPPORTED_LANGUAGES } from "./languages";

export function useTranslation() {
  const dispatch = useAppDispatch();
  const { currentLanguage, languageCode, isRtl } = useAppSelector(
    (state) => state.language
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial client hydration pass, guarantee "English" to match server HTML exactly
  const activeLang = mounted ? currentLanguage : "English";

  const dict: TranslationSchema = useMemo(() => {
    return translations[activeLang] || translations["English"];
  }, [activeLang]);

  const changeLanguage = useCallback(
    (lang: string) => {
      dispatch(setLanguage(lang));
    },
    [dispatch]
  );

  const t = useCallback(
    (keyPath: string, fallback?: string): string => {
      const keys = keyPath.split(".");
      let current: any = dict;
      let fallbackCurrent: any = translations["English"];

      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          current = undefined;
          break;
        }
      }

      if (typeof current === "string") {
        return current;
      }

      // Check English fallback
      for (const key of keys) {
        if (
          fallbackCurrent &&
          typeof fallbackCurrent === "object" &&
          key in fallbackCurrent
        ) {
          fallbackCurrent = fallbackCurrent[key];
        } else {
          fallbackCurrent = undefined;
          break;
        }
      }

      if (typeof fallbackCurrent === "string") {
        return fallbackCurrent;
      }

      return fallback || keyPath;
    },
    [dict]
  );

  return {
    t,
    dict,
    currentLanguage: mounted ? currentLanguage : "English",
    languageCode: mounted ? languageCode : "en",
    isRtl: mounted ? isRtl : false,
    setLanguage: changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isMounted: mounted,
  };
}
