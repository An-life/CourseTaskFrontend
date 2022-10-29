import { Language, Theme } from '../../types/settings';

export type DrawerContent = 'login' | 'settings';

export interface SettingsProps {
  changeSettings: (theme: Theme, language: Language) => void;
}
