export const languages = {
  es: 'Español',
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getServicePath(lang: Lang, serviceId: string): string {
  const basePaths: Record<Lang, string> = {
    es: '/servicios/',
    en: '/en/services/',
    zh: '/zh/services/',
  };
  return `${basePaths[lang]}${serviceId}`;
}

export function getHomePath(lang: Lang): string {
  if (lang === defaultLang) return '/';
  return `/${lang}/`;
}
