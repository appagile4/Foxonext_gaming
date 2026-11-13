"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./index";
import { useAppDispatch, useAppSelector } from "./hooks";
import { initializeLanguage } from "./slices/languageSlice";

function LanguageSync() {
  const dispatch = useAppDispatch();
  const { languageCode, isRtl } = useAppSelector((state) => state.language);

  // Read saved preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("foxonext_language");
      if (saved) {
        dispatch(initializeLanguage(saved));
      }
    } catch (e) {
      console.warn("Could not read language from localStorage", e);
    }
  }, [dispatch]);

  // Sync HTML lang and dir attribute with current language state
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = languageCode;
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
    }
  }, [languageCode, isRtl]);

  return null;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageSync />
      {children}
    </Provider>
  );
}
