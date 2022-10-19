export enum Theme {
  LightTheme = 'light',
  DarkTheme = 'dark',
}

export enum Language {
  English = 'en',
  Russian = 'ru',
}

export interface ISettings {
  theme: Theme;
  language: Language;
}

export interface ITag {
  value: string;
  count: number;
}
