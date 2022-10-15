export enum Theme {
  LightTheme = 'light',
  DarkTheme = 'dark',
}

export enum Language {
  English = 'en',
  Russian = 'ru',
}

export interface Settings {
  theme: Theme;
  language: Language;
}
