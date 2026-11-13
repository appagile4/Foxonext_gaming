export interface LanguageOption {
  name: string;
  code: string;
  nativeName: string;
  flag: string;
  isRtl?: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { name: "English", code: "en", nativeName: "English", flag: "🇬🇧" },
  { name: "Bengali", code: "bn", nativeName: "বাংলা", flag: "🇧🇩" },
  { name: "Chinese", code: "zh", nativeName: "中文", flag: "🇨🇳" },
  { name: "Japanese", code: "ja", nativeName: "日本語", flag: "🇯🇵" },
  { name: "Thai", code: "th", nativeName: "ไทย", flag: "🇹🇭" },
  { name: "Urdu", code: "ur", nativeName: "اردو", flag: "🇵🇰", isRtl: true },
  { name: "Russian", code: "ru", nativeName: "Русский", flag: "🇷🇺" },
  { name: "Spanish", code: "es", nativeName: "Español", flag: "🇪🇸" },
  { name: "Portuguese", code: "pt", nativeName: "Português", flag: "🇵🇹" },
  { name: "German", code: "de", nativeName: "Deutsch", flag: "🇩🇪" },
  { name: "French", code: "fr", nativeName: "Français", flag: "🇫🇷" },
  { name: "Indonesian", code: "id", nativeName: "Bahasa Indonesia", flag: "🇮🇩" },
];

export const DEFAULT_LANGUAGE = "English";
