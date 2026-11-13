import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LanguageOption } from "@/translations/languages";

interface LanguageState {
  currentLanguage: string;
  languageCode: string;
  isRtl: boolean;
  supportedLanguages: LanguageOption[];
}

const defaultLangObj =
  SUPPORTED_LANGUAGES.find((l) => l.name === DEFAULT_LANGUAGE) || SUPPORTED_LANGUAGES[0];

const initialState: LanguageState = {
  currentLanguage: defaultLangObj.name,
  languageCode: defaultLangObj.code,
  isRtl: !!defaultLangObj.isRtl,
  supportedLanguages: SUPPORTED_LANGUAGES,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      const targetNameOrCode = action.payload.trim().toLowerCase();
      const matched = SUPPORTED_LANGUAGES.find(
        (l) =>
          l.name.toLowerCase() === targetNameOrCode ||
          l.code.toLowerCase() === targetNameOrCode ||
          l.nativeName.toLowerCase() === targetNameOrCode
      );

      if (matched) {
        state.currentLanguage = matched.name;
        state.languageCode = matched.code;
        state.isRtl = !!matched.isRtl;

        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("foxonext_language", matched.name);
            document.documentElement.lang = matched.code;
            document.documentElement.dir = matched.isRtl ? "rtl" : "ltr";
          } catch (e) {
            console.error("Failed to persist language to localStorage", e);
          }
        }
      }
    },
    initializeLanguage: (state, action: PayloadAction<string>) => {
      const savedLang = action.payload;
      const matched = SUPPORTED_LANGUAGES.find(
        (l) => l.name.toLowerCase() === savedLang.toLowerCase()
      );
      if (matched) {
        state.currentLanguage = matched.name;
        state.languageCode = matched.code;
        state.isRtl = !!matched.isRtl;
      }
    },
  },
});

export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
